import 'dart:async';
import 'dart:html' show promiseToFuture;

import 'package:js/js.dart';
import 'package:js/js_util.dart' as util;

import 'firestore.dart';
import 'func.dart';

import 'interop/firebase_interop.dart' show ThenableJsImpl, PromiseJsImpl;
import 'interop/firestore_interop.dart' show FieldValue, TimestampJsImpl;
import 'interop/js_interop.dart' as js;

/// Returns Dart representation from JS Object.
dynamic dartify(Object jsObject) {
  if (_isBasicType(jsObject)) {
    return jsObject;
  }

  // Handle list
  if (jsObject is Iterable) {
    return jsObject.map(dartify).toList();
  }

  var jsDate = js.dartifyDate(jsObject);
  if (jsDate != null) {
    return jsDate;
  }

  if (util.hasProperty(jsObject, 'firestore') &&
      util.hasProperty(jsObject, 'id') &&
      util.hasProperty(jsObject, 'parent')) {
    // This is likely a document reference – at least we hope
    // TODO(kevmoo): figure out if there is a more robust way to detect
    return DocumentReference.getInstance(jsObject);
  }

  if (util.hasProperty(jsObject, 'latitude') &&
      util.hasProperty(jsObject, 'longitude') &&
      js.objectKeys(jsObject).length == 2) {
    // This is likely a GeoPoint – return it as-is
    return jsObject as GeoPoint;
  }

  var proto = util.getProperty(jsObject, '__proto__');

  if (util.hasProperty(proto, 'toDate') &&
      util.hasProperty(proto, 'toMillis')) {
    return DateTime.fromMillisecondsSinceEpoch(
        (jsObject as TimestampJsImpl).toMillis());
  }

  if (util.hasProperty(proto, 'isEqual') &&
      util.hasProperty(proto, 'toBase64')) {
    // This is likely a GeoPoint – return it as-is
    // TODO(kevmoo): figure out if there is a more robust way to detect
    return jsObject as Blob;
  }

  // Assume a map then...
  var keys = js.objectKeys(jsObject);
  var map = <String, dynamic>{};
  for (var key in keys) {
    map[key] = dartify(util.getProperty(jsObject, key));
  }
  return map;
}

/// Returns the JS implementation from Dart Object.
dynamic jsify(Object dartObject) {
  if (_isBasicType(dartObject)) {
    return dartObject;
  }

  if (dartObject is DateTime) {
    return TimestampJsImpl.fromMillis(dartObject.millisecondsSinceEpoch);
  }

  if (dartObject is Iterable) {
    return js.toJSArray(dartObject.map(jsify).toList());
  }

  if (dartObject is Map) {
    var jsMap = util.newObject();
    dartObject.forEach((key, value) {
      util.setProperty(jsMap, key, jsify(value));
    });
    return jsMap;
  }

  if (dartObject is DocumentReference) {
    return dartObject.jsObject;
  }

  if (dartObject is FieldValue ||
      dartObject is Blob ||
      dartObject is GeoPoint) {
    return dartObject;
  }

  throw ArgumentError.value(dartObject, 'dartObject', 'Could not convert');
}

/// Calls [method] on JavaScript object [jsObject].
dynamic callMethod(Object jsObject, String method, List<dynamic> args) =>
    util.callMethod(jsObject, method, args);

/// Returns `true` if the [value] is a very basic built-in type - e.g.
/// `null`, [num], [bool] or [String]. It returns `false` in the other case.
bool _isBasicType(Object value) {
  if (value == null || value is num || value is bool || value is String) {
    return true;
  }
  return false;
}

/// Handles the [ThenableJsImpl] object.
Future<T> handleThenable<T>(ThenableJsImpl<T> thenable) =>
    promiseToFuture(thenable);

/// Handles the [Future] object with the provided [mapper] function.
PromiseJsImpl<S> handleFutureWithMapper<T, S>(
    Future<T> future, Func1<T, S> mapper) {
  return PromiseJsImpl<S>(allowInterop((VoidFunc1 resolve, VoidFunc1 reject) {
    future.then((value) {
      var mappedValue = mapper(value);
      resolve(mappedValue);
    }).catchError((error) {
      reject(error);
    });
  }));
}

/// Resolves error.
VoidFunc1 resolveError(Completer c) => allowInterop(c.completeError);
