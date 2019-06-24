define(['dart_sdk', 'packages/firebase/src/app'], function(dart_sdk, app) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const js_util = dart_sdk.js_util;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils = app.src__utils;
  const src__js = app.src__js;
  const src__app = app.src__app;
  const src__auth = app.src__auth;
  const src__database = app.src__database;
  const src__storage = app.src__storage;
  const src__firestore = app.src__firestore;
  const _root = Object.create(null);
  const firebase = Object.create(_root);
  const src__messaging = Object.create(_root);
  const src__top_level = Object.create(_root);
  const $toList = dartx.toList;
  const $map = dartx.map;
  let ObjectTodynamic = () => (ObjectTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.Object])))();
  let StreamControllerOfPayload = () => (StreamControllerOfPayload = dart.constFn(async.StreamController$(src__messaging.Payload)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StreamControllerOfNull = () => (StreamControllerOfNull = dart.constFn(async.StreamController$(core.Null)))();
  let StreamOfNull = () => (StreamOfNull = dart.constFn(async.Stream$(core.Null)))();
  let ExpandoOfMessaging = () => (ExpandoOfMessaging = dart.constFn(core.Expando$(src__messaging.Messaging)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let dynamicToApp = () => (dynamicToApp = dart.constFn(dart.fnType(src__app.App, [dart.dynamic])))();
  const _onMessageController = Symbol('_onMessageController');
  const _onTokenRefresh = Symbol('_onTokenRefresh');
  const _onBackgroundMessage = Symbol('_onBackgroundMessage');
  const _createOnMessageStream = Symbol('_createOnMessageStream');
  const _createBackgroundMessagedStream = Symbol('_createBackgroundMessagedStream');
  const _createNullStream = Symbol('_createNullStream');
  src__messaging.Messaging = class Messaging extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.messaging.Messaging, "firebase.messaging.Messaging")) {
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__messaging.Messaging._expando._get(jsObject);
      return t == null ? src__messaging.Messaging._expando._set(jsObject, new src__messaging.Messaging._fromJsObject(jsObject)) : t;
    }
    usePublicVapidKey(key) {
      this.jsObject.usePublicVapidKey(key);
    }
    useServiceWorker(registration) {
      this.jsObject.useServiceWorker(registration);
    }
    deleteToken(token) {
      this.jsObject.deleteToken(token);
    }
    requestPermission() {
      return async.async(dart.dynamic, (function* requestPermission() {
        yield src__utils.handleThenable(dart.dynamic, this.jsObject.requestPermission()).then(dart.dynamic, dart.fn(src__utils.dartify, ObjectTodynamic()));
      }).bind(this));
    }
    getToken() {
      return src__utils.handleThenable(core.String, this.jsObject.getToken());
    }
    get onMessage() {
      return this[_createOnMessageStream](this[_onMessageController]);
    }
    get onBackgroundMessage() {
      return this[_createBackgroundMessagedStream](this[_onBackgroundMessage]);
    }
    get onTokenRefresh() {
      return this[_createNullStream](this[_onTokenRefresh]);
    }
    [_createOnMessageStream](controller) {
      if (controller == null) {
        controller = StreamControllerOfPayload().broadcast({sync: true});
        let nextWrapper = js.allowInterop(dynamicToNull(), dart.fn(payload => {
          controller.add(new src__messaging.Payload._fromJsObject(dart.anonymousJSType("PayloadJsImpl")._check(payload)));
        }, dynamicToNull()));
        let errorWrapper = js.allowInterop(dynamicToNull(), dart.fn(e => {
          controller.addError(e);
        }, dynamicToNull()));
        this.jsObject.onMessage(nextWrapper, errorWrapper);
      }
      return controller.stream;
    }
    [_createBackgroundMessagedStream](controller) {
      if (controller == null) {
        controller = StreamControllerOfPayload().broadcast({sync: true});
        let nextWrapper = js.allowInterop(dynamicToNull(), dart.fn(payload => {
          controller.add(new src__messaging.Payload._fromJsObject(dart.anonymousJSType("PayloadJsImpl")._check(payload)));
        }, dynamicToNull()));
        this.jsObject.setBackgroundMessageHandler(nextWrapper);
      }
      return controller.stream;
    }
    [_createNullStream](controller) {
      if (controller == null) {
        let nextWrapper = js.allowInterop(dynamicToNull(), dart.fn(_ => null, dynamicToNull()));
        let errorWrapper = js.allowInterop(dynamicToNull(), dart.fn(e => {
          controller.addError(e);
        }, dynamicToNull()));
        let onSnapshotUnsubscribe = null;
        const startListen = (function() {
          onSnapshotUnsubscribe = this.jsObject.onTokenRefresh(nextWrapper, errorWrapper);
        }).bind(this);
        dart.fn(startListen, VoidTovoid());
        function stopListen() {
          onSnapshotUnsubscribe();
          onSnapshotUnsubscribe = null;
        }
        dart.fn(stopListen, VoidTovoid());
        controller = StreamControllerOfNull().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return StreamOfNull()._check(controller.stream);
    }
  };
  (src__messaging.Messaging._fromJsObject = function(jsObject) {
    this[_onMessageController] = null;
    this[_onTokenRefresh] = null;
    this[_onBackgroundMessage] = null;
    src__messaging.Messaging.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__messaging.Messaging.prototype;
  dart.addTypeTests(src__messaging.Messaging);
  dart.setMethodSignature(src__messaging.Messaging, () => ({
    __proto__: dart.getMethods(src__messaging.Messaging.__proto__),
    usePublicVapidKey: dart.fnType(dart.void, [core.String]),
    useServiceWorker: dart.fnType(dart.void, [dart.dynamic]),
    deleteToken: dart.fnType(dart.void, [core.String]),
    requestPermission: dart.fnType(async.Future, []),
    getToken: dart.fnType(async.Future$(core.String), []),
    [_createOnMessageStream]: dart.fnType(async.Stream$(src__messaging.Payload), [async.StreamController$(src__messaging.Payload)]),
    [_createBackgroundMessagedStream]: dart.fnType(async.Stream$(src__messaging.Payload), [async.StreamController$(src__messaging.Payload)]),
    [_createNullStream]: dart.fnType(async.Stream$(core.Null), [async.StreamController])
  }));
  dart.setGetterSignature(src__messaging.Messaging, () => ({
    __proto__: dart.getGetters(src__messaging.Messaging.__proto__),
    onMessage: async.Stream$(src__messaging.Payload),
    onBackgroundMessage: async.Stream$(src__messaging.Payload),
    onTokenRefresh: async.Stream$(core.Null)
  }));
  dart.setFieldSignature(src__messaging.Messaging, () => ({
    __proto__: dart.getFields(src__messaging.Messaging.__proto__),
    [_onMessageController]: dart.fieldType(StreamControllerOfPayload()),
    [_onTokenRefresh]: dart.fieldType(StreamControllerOfNull()),
    [_onBackgroundMessage]: dart.fieldType(StreamControllerOfPayload())
  }));
  dart.defineLazy(src__messaging.Messaging, {
    /*src__messaging.Messaging._expando*/get _expando() {
      return new (ExpandoOfMessaging()).new();
    }
  });
  src__messaging.Notification = class Notification extends src__js.JsObjectWrapper$(dart.anonymousJSType("NotificationJsImpl")) {
    get title() {
      return this.jsObject.title;
    }
    get body() {
      return this.jsObject.body;
    }
    get clickAction() {
      return this.jsObject.click_action;
    }
    get icon() {
      return this.jsObject.icon;
    }
  };
  (src__messaging.Notification._fromJsObject = function(jsObject) {
    src__messaging.Notification.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__messaging.Notification.prototype;
  dart.addTypeTests(src__messaging.Notification);
  dart.setGetterSignature(src__messaging.Notification, () => ({
    __proto__: dart.getGetters(src__messaging.Notification.__proto__),
    title: core.String,
    body: core.String,
    clickAction: core.String,
    icon: core.String
  }));
  src__messaging.Payload = class Payload extends src__js.JsObjectWrapper$(dart.anonymousJSType("PayloadJsImpl")) {
    get notification() {
      return new src__messaging.Notification._fromJsObject(this.jsObject.notification);
    }
    get collapseKey() {
      return this.jsObject.collapse_key;
    }
    get from() {
      return this.jsObject.from;
    }
    get data() {
      return MapOfString$dynamic()._check(src__utils.dartify(this.jsObject.data));
    }
  };
  (src__messaging.Payload._fromJsObject = function(jsObject) {
    src__messaging.Payload.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__messaging.Payload.prototype;
  dart.addTypeTests(src__messaging.Payload);
  dart.setGetterSignature(src__messaging.Payload, () => ({
    __proto__: dart.getGetters(src__messaging.Payload.__proto__),
    notification: src__messaging.Notification,
    collapseKey: core.String,
    from: core.String,
    data: core.Map$(core.String, dart.dynamic)
  }));
  dart.copyProperties(src__top_level, {
    get apps() {
      return dart.global.firebase.apps[$map](src__app.App, dart.fn(e => src__app.App.getInstance(dart.lazyJSType(() => dart.global.firebase.app.App, "firebase.app.App")._check(e)), dynamicToApp()))[$toList]();
    }
  });
  dart.defineLazy(src__top_level, {
    /*src__top_level._defaultAppName*/get _defaultAppName() {
      return "[DEFAULT]";
    }
  });
  src__top_level.initializeApp = function(opts) {
    let apiKey = opts && 'apiKey' in opts ? opts.apiKey : null;
    let authDomain = opts && 'authDomain' in opts ? opts.authDomain : null;
    let databaseURL = opts && 'databaseURL' in opts ? opts.databaseURL : null;
    let projectId = opts && 'projectId' in opts ? opts.projectId : null;
    let storageBucket = opts && 'storageBucket' in opts ? opts.storageBucket : null;
    let messagingSenderId = opts && 'messagingSenderId' in opts ? opts.messagingSenderId : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let t = name;
    t == null ? name = "[DEFAULT]" : t;
    try {
      return src__app.App.getInstance(dart.global.firebase.initializeApp({apiKey: apiKey, authDomain: authDomain, databaseURL: databaseURL, projectId: projectId, storageBucket: storageBucket, messagingSenderId: messagingSenderId}, name));
    } catch (e) {
      if (dart.test(src__top_level._firebaseNotLoaded(e))) {
        dart.throw(new src__top_level.FirebaseJsNotLoadedException.new("firebase.js must be loaded."));
      }
      dart.rethrow(e);
    }
  };
  src__top_level.app = function(name) {
    if (name === void 0) name = null;
    let jsObject = name != null ? dart.global.firebase.app(name) : dart.global.firebase.app();
    return src__app.App.getInstance(jsObject);
  };
  src__top_level.auth = function(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.auth(app.jsObject) : dart.global.firebase.auth();
    return src__auth.Auth.getInstance(jsObject);
  };
  src__top_level.database = function(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.database(app.jsObject) : dart.global.firebase.database();
    return src__database.Database.getInstance(jsObject);
  };
  src__top_level.storage = function(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.storage(app.jsObject) : dart.global.firebase.storage();
    return src__storage.Storage.getInstance(jsObject);
  };
  src__top_level.firestore = function(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.firestore(app.jsObject) : dart.global.firebase.firestore();
    return src__firestore.Firestore.getInstance(jsObject);
  };
  src__top_level.messaging = function(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.messaging(app.jsObject) : dart.global.firebase.messaging();
    return src__messaging.Messaging.getInstance(jsObject);
  };
  src__top_level.FirebaseJsNotLoadedException = class FirebaseJsNotLoadedException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "FirebaseJsNotLoadedException: " + dart.str(this.message);
    }
  };
  (src__top_level.FirebaseJsNotLoadedException.new = function(message) {
    this[message$] = message;
  }).prototype = src__top_level.FirebaseJsNotLoadedException.prototype;
  dart.addTypeTests(src__top_level.FirebaseJsNotLoadedException);
  const message$ = Symbol("FirebaseJsNotLoadedException.message");
  src__top_level.FirebaseJsNotLoadedException[dart.implements] = () => [core.Exception];
  dart.setFieldSignature(src__top_level.FirebaseJsNotLoadedException, () => ({
    __proto__: dart.getFields(src__top_level.FirebaseJsNotLoadedException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__top_level.FirebaseJsNotLoadedException, ['toString']);
  src__top_level._firebaseNotLoaded = function(error) {
    if (core.NoSuchMethodError.is(error)) {
      return true;
    }
    if (dart.dtest(js_util.hasProperty(error, "message"))) {
      let message = js_util.getProperty(error, "message");
      return dart.equals(message, "firebase is not defined") || dart.equals(message, "Can't find variable: firebase");
    }
    return false;
  };
  dart.trackLibraries("packages/firebase/firebase.ddc", {
    "package:firebase/firebase.dart": firebase,
    "package:firebase/src/messaging.dart": src__messaging,
    "package:firebase/src/top_level.dart": src__top_level
  }, '{"version":3,"sourceRoot":"","sources":["src/messaging.dart","src/top_level.dart"],"names":[],"mappings":"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","file":"firebase.ddc.js"}');
  // Exports:
  return {
    firebase: firebase,
    src__messaging: src__messaging,
    src__top_level: src__top_level
  };
});

//# sourceMappingURL=firebase.ddc.js.map
