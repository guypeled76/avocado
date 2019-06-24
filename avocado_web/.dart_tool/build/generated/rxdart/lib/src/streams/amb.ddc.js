define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__streams__amb = Object.create(_root);
  const src__streams__combine_latest = Object.create(_root);
  const src__streams__concat = Object.create(_root);
  const src__streams__concat_eager = Object.create(_root);
  const src__streams__utils = Object.create(_root);
  const src__streams__defer = Object.create(_root);
  const src__streams__error = Object.create(_root);
  const src__streams__merge = Object.create(_root);
  const src__streams__never = Object.create(_root);
  const src__streams__race = Object.create(_root);
  const src__streams__range = Object.create(_root);
  const src__streams__repeat = Object.create(_root);
  const src__streams__retry = Object.create(_root);
  const src__streams__retry_when = Object.create(_root);
  const src__streams__switch_latest = Object.create(_root);
  const src__streams__timer = Object.create(_root);
  const src__streams__tween = Object.create(_root);
  const src__streams__zip = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $removeAt = dartx.removeAt;
  const $elementAt = dartx.elementAt;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $where = dartx.where;
  const $map = dartx.map;
  const $every = dartx.every;
  const $_set = dartx._set;
  const $toList = dartx.toList;
  const $any = dartx.any;
  const $runtimeType = dartx.runtimeType;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $reduce = dartx.reduce;
  const $abs = dartx.abs;
  const $isNotEmpty = dartx.isNotEmpty;
  const $fold = dartx.fold;
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let __Tovoid = () => (__Tovoid = dart.constFn(dart.fnType(dart.void, [], [async.Future])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let FutureTobool = () => (FutureTobool = dart.constFn(dart.fnType(core.bool, [async.Future])))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  let JSArrayOfStream = () => (JSArrayOfStream = dart.constFn(_interceptors.JSArray$(async.Stream)))();
  let ListOfStreamSubscription = () => (ListOfStreamSubscription = dart.constFn(core.List$(async.StreamSubscription)))();
  let intTobool = () => (intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))();
  let ListOfbool = () => (ListOfbool = dart.constFn(core.List$(core.bool)))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let StreamSubscriptionTovoid = () => (StreamSubscriptionTovoid = dart.constFn(dart.fnType(dart.void, [async.StreamSubscription])))();
  let StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  let ListOfCompleter = () => (ListOfCompleter = dart.constFn(core.List$(async.Completer)))();
  let ListOfErrorAndStacktrace = () => (ListOfErrorAndStacktrace = dart.constFn(core.List$(src__streams__utils.ErrorAndStacktrace)))();
  let boolAndboolTobool = () => (boolAndboolTobool = dart.constFn(dart.fnType(core.bool, [core.bool, core.bool])))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let StreamOfint = () => (StreamOfint = dart.constFn(async.Stream$(core.int)))();
  let JSArrayOfErrorAndStacktrace = () => (JSArrayOfErrorAndStacktrace = dart.constFn(_interceptors.JSArray$(src__streams__utils.ErrorAndStacktrace)))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let StreamOfvoid = () => (StreamOfvoid = dart.constFn(async.Stream$(dart.void)))();
  let dynamicAndStackTraceToStreamOfvoid = () => (dynamicAndStackTraceToStreamOfvoid = dart.constFn(dart.fnType(StreamOfvoid(), [dart.dynamic, core.StackTrace])))();
  let __ToNull = () => (__ToNull = dart.constFn(dart.fnType(core.Null, [], [async.Future])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let StreamControllerOfdouble = () => (StreamControllerOfdouble = dart.constFn(async.StreamController$(core.double)))();
  let FutureOfint = () => (FutureOfint = dart.constFn(async.Future$(core.int)))();
  let _AsyncStarImplOfdouble = () => (_AsyncStarImplOfdouble = dart.constFn(async._AsyncStarImpl$(core.double)))();
  let doubleAnddoubleAndint__Todouble = () => (doubleAnddoubleAndint__Todouble = dart.constFn(dart.fnType(core.double, [core.double, core.double, core.int, core.int])))();
  let intTovoid = () => (intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))();
  let StreamSubscriptionTobool = () => (StreamSubscriptionTobool = dart.constFn(dart.fnType(core.bool, [async.StreamSubscription])))();
  const _is_AmbStream_default = Symbol('_is_AmbStream_default');
  src__streams__amb.AmbStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class AmbStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("provide at least 1 stream"));
        }
        let subscriptions = _interceptors.JSArray$(async.StreamSubscription$(T)).of([]);
        let isDisambiguated = false;
        let controller = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            function doUpdate(i, value) {
              try {
                if (!isDisambiguated) for (let k = dart.notNull(subscriptions[$length]) - 1; k >= 0; k--) {
                  if (k !== i) {
                    subscriptions[$_get](k).cancel();
                    subscriptions[$removeAt](k);
                  }
                }
                isDisambiguated = true;
                controller.add(value);
              } catch (e) {
                let s = dart.stackTrace(e);
                controller.addError(e, s);
              }
            }
            dart.fn(doUpdate, dart.fnType(dart.void, [core.int, T]));
            for (let i = 0, len = streams[$length]; i < dart.notNull(len); i++) {
              let stream = streams[$elementAt](i);
              subscriptions[$add](stream.listen(dart.fn(value => doUpdate(i, value), dart.fnType(dart.void, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => controller.close(), VoidToFuture())}));
            }
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)])));
          }, __Tovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => {
            if (subscription != null) return subscription.cancel();
            return async.Future.value();
          }, dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (AmbStream.new = function(streams) {
      this[controller] = src__streams__amb.AmbStream._buildController(T, streams);
      AmbStream.__proto__.new.call(this);
    }).prototype = AmbStream.prototype;
    dart.addTypeTests(AmbStream);
    AmbStream.prototype[_is_AmbStream_default] = true;
    const controller = Symbol("AmbStream.controller");
    dart.setMethodSignature(AmbStream, () => ({
      __proto__: dart.getMethods(AmbStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(AmbStream, () => ({
      __proto__: dart.getFields(AmbStream.__proto__),
      controller: dart.finalFieldType(StreamControllerOfT())
    }));
    return AmbStream;
  });
  src__streams__amb.AmbStream = src__streams__amb.AmbStream$();
  dart.addTypeTests(src__streams__amb.AmbStream, _is_AmbStream_default);
  const _is_CombineLatestStream_default = Symbol('_is_CombineLatestStream_default');
  src__streams__combine_latest.CombineLatestStream$ = dart.generic((T, R) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfTTobool = () => (StreamOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamOfT()])))();
    class CombineLatestStream extends async.StreamView$(R) {
      static list(T, streams) {
        return new (src__streams__combine_latest.CombineLatestStream$(T, core.List$(T))).new(streams, dart.fn(values => values, dart.fnType(core.List$(T), [core.List$(T)])));
      }
      static combine2(A, B, R, streamOne, streamTwo, combiner) {
        return new (src__streams__combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamOne, streamTwo]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1))), dart.fnType(R, [core.List])));
      }
      static combine3(A, B, C, R, streamA, streamB, streamC, combiner) {
        return new (src__streams__combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2))), dart.fnType(R, [core.List])));
      }
      static combine4(A, B, C, D, R, streamA, streamB, streamC, streamD, combiner) {
        return new (src__streams__combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3))), dart.fnType(R, [core.List])));
      }
      static combine5(A, B, C, D, E, R, streamA, streamB, streamC, streamD, streamE, combiner) {
        return new (src__streams__combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4))), dart.fnType(R, [core.List])));
      }
      static combine6(A, B, C, D, E, F, R, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
        return new (src__streams__combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5))), dart.fnType(R, [core.List])));
      }
      static combine7(A, B, C, D, E, F, G, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
        return new (src__streams__combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6))), dart.fnType(R, [core.List])));
      }
      static combine8(A, B, C, D, E, F, G, H, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
        return new (src__streams__combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7))), dart.fnType(R, [core.List])));
      }
      static combine9(A, B, C, D, E, F, G, H, I, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
        return new (src__streams__combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7)), I.as(values[$_get](8))), dart.fnType(R, [core.List])));
      }
      static _buildController(T, R, streams, combiner) {
        let subscriptions = ListOfStreamSubscription().new(streams[$length]);
        let controller = null;
        controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
            let values = core.List$(T).new(streams[$length]);
            let triggered = ListOfbool().generate(streams[$length], dart.fn(_ => false, intTobool()));
            let completedStatus = ListOfbool().generate(streams[$length], dart.fn(_ => false, intTobool()));
            let allStreamsHaveEvents = false;
            for (let i = 0, len = streams[$length]; i < dart.notNull(len); i++) {
              let stream = streams[$elementAt](i);
              subscriptions[$_set](i, stream.listen(dart.fn(value => {
                values[$_set](i, value);
                triggered[$_set](i, true);
                if (!dart.test(allStreamsHaveEvents)) allStreamsHaveEvents = triggered[$every](dart.fn(t => t, boolTobool()));
                if (dart.test(allStreamsHaveEvents)) {
                  try {
                    controller.add(combiner(values[$toList]()));
                  } catch (e) {
                    let s = dart.stackTrace(e);
                    controller.addError(e, s);
                  }
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  completedStatus[$_set](i, true);
                  if (dart.test(completedStatus[$every](dart.fn(c => c, boolTobool())))) controller.close();
                }, VoidToNull())}));
            }
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), StreamSubscriptionTovoid()));
          }, __Tovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), StreamSubscriptionTovoid())), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (CombineLatestStream.new = function(streams, combiner) {
      if (!(streams != null && dart.test(streams[$every](dart.fn(s => s != null, StreamOfTTobool()))))) dart.assertFailed("streams cannot be null");
      if (!(dart.notNull(streams[$length]) > 1)) dart.assertFailed("provide at least 2 streams");
      if (!(combiner != null)) dart.assertFailed("must provide a combiner function");
      CombineLatestStream.__proto__.new.call(this, src__streams__combine_latest.CombineLatestStream._buildController(T, R, streams, combiner).stream);
    }).prototype = CombineLatestStream.prototype;
    dart.addTypeTests(CombineLatestStream);
    CombineLatestStream.prototype[_is_CombineLatestStream_default] = true;
    return CombineLatestStream;
  });
  src__streams__combine_latest.CombineLatestStream = src__streams__combine_latest.CombineLatestStream$();
  dart.addTypeTests(src__streams__combine_latest.CombineLatestStream, _is_CombineLatestStream_default);
  const _is_ConcatStream_default = Symbol('_is_ConcatStream_default');
  src__streams__concat.ConcatStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class ConcatStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("Streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("At least 1 stream needs to be provided"));
        } else if (dart.test(streams[$any](dart.fn(stream => stream == null, dart.fnType(core.bool, [async.Stream$(T)]))))) {
          dart.throw(new core.ArgumentError.new("One of the provided streams is null"));
        }
        let controller = null;
        let subscription = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let len = streams[$length];
            let index = 0;
            function moveNext() {
              let stream = streams[$elementAt](index);
              let t = subscription;
              t == null ? null : t.cancel();
              subscription = stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  index++;
                  if (index === len)
                    controller.close();
                  else
                    moveNext();
                }, VoidToNull())});
            }
            dart.fn(moveNext, VoidTovoid());
            moveNext();
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            let t = subscription;
            return t == null ? null : t.pause(resumeSignal);
          }, __Tovoid()), onResume: dart.fn(() => {
            let t = subscription;
            return t == null ? null : t.resume();
          }, VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
        return controller;
      }
    }
    (ConcatStream.new = function(streams) {
      this[controller] = src__streams__concat.ConcatStream._buildController(T, streams);
      ConcatStream.__proto__.new.call(this);
    }).prototype = ConcatStream.prototype;
    dart.addTypeTests(ConcatStream);
    ConcatStream.prototype[_is_ConcatStream_default] = true;
    const controller = Symbol("ConcatStream.controller");
    dart.setMethodSignature(ConcatStream, () => ({
      __proto__: dart.getMethods(ConcatStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(ConcatStream, () => ({
      __proto__: dart.getFields(ConcatStream.__proto__),
      controller: dart.finalFieldType(StreamControllerOfT())
    }));
    return ConcatStream;
  });
  src__streams__concat.ConcatStream = src__streams__concat.ConcatStream$();
  dart.addTypeTests(src__streams__concat.ConcatStream, _is_ConcatStream_default);
  const _is_ConcatEagerStream_default = Symbol('_is_ConcatEagerStream_default');
  src__streams__concat_eager.ConcatEagerStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class ConcatEagerStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("at least 1 stream needs to be provided"));
        } else if (dart.test(streams[$any](dart.fn(stream => stream == null, dart.fnType(core.bool, [async.Stream$(T)]))))) {
          dart.throw(new core.ArgumentError.new("One of the provided streams is null"));
        }
        let subscriptions = core.List$(async.StreamSubscription$(T)).new(streams[$length]);
        let completeEvents = streams != null ? ListOfCompleter().new(streams[$length]) : null;
        let controller = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            for (let i = 0, len = streams[$length]; i < dart.notNull(len); i++) {
              completeEvents[$_set](i, async.Completer.new());
              subscriptions[$_set](i, streams[$elementAt](i).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  completeEvents[$_get](i).complete();
                  if (i === dart.notNull(len) - 1) controller.close();
                }, VoidToNull())}));
              if (i > 0) subscriptions[$_get](i).pause(completeEvents[$_get](i - 1).future);
            }
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)])));
          }, __Tovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (ConcatEagerStream.new = function(streams) {
      this[controller] = src__streams__concat_eager.ConcatEagerStream._buildController(T, streams);
      ConcatEagerStream.__proto__.new.call(this);
    }).prototype = ConcatEagerStream.prototype;
    dart.addTypeTests(ConcatEagerStream);
    ConcatEagerStream.prototype[_is_ConcatEagerStream_default] = true;
    const controller = Symbol("ConcatEagerStream.controller");
    dart.setMethodSignature(ConcatEagerStream, () => ({
      __proto__: dart.getMethods(ConcatEagerStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(ConcatEagerStream, () => ({
      __proto__: dart.getFields(ConcatEagerStream.__proto__),
      controller: dart.finalFieldType(StreamControllerOfT())
    }));
    return ConcatEagerStream;
  });
  src__streams__concat_eager.ConcatEagerStream = src__streams__concat_eager.ConcatEagerStream$();
  dart.addTypeTests(src__streams__concat_eager.ConcatEagerStream, _is_ConcatEagerStream_default);
  src__streams__utils.RetryError = class RetryError extends core.Error {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get errors() {
      return this[errors$];
    }
    set errors(value) {
      super.errors = value;
    }
    toString() {
      return this.message;
    }
  };
  (src__streams__utils.RetryError.new = function(message, errors) {
    this[message$] = message;
    this[errors$] = errors;
    src__streams__utils.RetryError.__proto__.new.call(this);
  }).prototype = src__streams__utils.RetryError.prototype;
  dart.addTypeTests(src__streams__utils.RetryError);
  const message$ = Symbol("RetryError.message");
  const errors$ = Symbol("RetryError.errors");
  dart.setFieldSignature(src__streams__utils.RetryError, () => ({
    __proto__: dart.getFields(src__streams__utils.RetryError.__proto__),
    message: dart.finalFieldType(core.String),
    errors: dart.finalFieldType(ListOfErrorAndStacktrace())
  }));
  dart.defineExtensionMethods(src__streams__utils.RetryError, ['toString']);
  src__streams__utils.ErrorAndStacktrace = class ErrorAndStacktrace extends core.Object {
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    get stacktrace() {
      return this[stacktrace$];
    }
    set stacktrace(value) {
      super.stacktrace = value;
    }
    toString() {
      return "ErrorAndStacktrace{error: " + dart.str(this.error) + ", stacktrace: " + dart.str(this.stacktrace) + "}";
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || src__streams__utils.ErrorAndStacktrace.is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.equals(this.error, other.error) && dart.equals(this.stacktrace, other.stacktrace);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.error)) ^ dart.notNull(dart.hashCode(this.stacktrace))) >>> 0;
    }
  };
  (src__streams__utils.ErrorAndStacktrace.new = function(error, stacktrace) {
    this[error$] = error;
    this[stacktrace$] = stacktrace;
  }).prototype = src__streams__utils.ErrorAndStacktrace.prototype;
  dart.addTypeTests(src__streams__utils.ErrorAndStacktrace);
  const error$ = Symbol("ErrorAndStacktrace.error");
  const stacktrace$ = Symbol("ErrorAndStacktrace.stacktrace");
  dart.setMethodSignature(src__streams__utils.ErrorAndStacktrace, () => ({
    __proto__: dart.getMethods(src__streams__utils.ErrorAndStacktrace.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setFieldSignature(src__streams__utils.ErrorAndStacktrace, () => ({
    __proto__: dart.getFields(src__streams__utils.ErrorAndStacktrace.__proto__),
    error: dart.finalFieldType(dart.dynamic),
    stacktrace: dart.finalFieldType(core.StackTrace)
  }));
  dart.defineExtensionMethods(src__streams__utils.ErrorAndStacktrace, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__streams__utils.ErrorAndStacktrace, ['hashCode']);
  const _streamFactory = Symbol('_streamFactory');
  const _isReusable = Symbol('_isReusable');
  const _isUsed = Symbol('_isUsed');
  const _is_DeferStream_default = Symbol('_is_DeferStream_default');
  src__streams__defer.DeferStream$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let VoidToStreamOfT = () => (VoidToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [])))();
    class DeferStream extends async.Stream$(T) {
      get isBroadcast() {
        return this[_isReusable];
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (dart.test(this[_isUsed]) && !dart.test(this[_isReusable])) dart.throw(new core.StateError.new("Stream has already been listened to."));
        this[_isUsed] = true;
        return this[_streamFactory]().listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (DeferStream.new = function(streamFactory, opts) {
      let reusable = opts && 'reusable' in opts ? opts.reusable : false;
      this[_isUsed] = false;
      this[_streamFactory] = streamFactory;
      this[_isReusable] = reusable;
      DeferStream.__proto__.new.call(this);
    }).prototype = DeferStream.prototype;
    dart.addTypeTests(DeferStream);
    DeferStream.prototype[_is_DeferStream_default] = true;
    dart.setMethodSignature(DeferStream, () => ({
      __proto__: dart.getMethods(DeferStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(DeferStream, () => ({
      __proto__: dart.getFields(DeferStream.__proto__),
      [_streamFactory]: dart.finalFieldType(VoidToStreamOfT()),
      [_isReusable]: dart.finalFieldType(core.bool),
      [_isUsed]: dart.fieldType(core.bool)
    }));
    return DeferStream;
  });
  src__streams__defer.DeferStream = src__streams__defer.DeferStream$();
  dart.addTypeTests(src__streams__defer.DeferStream, _is_DeferStream_default);
  const _is_ErrorStream_default = Symbol('_is_ErrorStream_default');
  src__streams__error.ErrorStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class ErrorStream extends async.Stream$(T) {
      get error() {
        return this[error$];
      }
      set error(value) {
        super.error = value;
      }
      get controller() {
        return this[controller];
      }
      set controller(value) {
        this[controller] = StreamControllerOfT()._check(value);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        this.controller.addError(this.error);
        this.controller.close();
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (ErrorStream.new = function(error) {
      this[controller] = StreamControllerOfT().new();
      this[error$] = error;
      ErrorStream.__proto__.new.call(this);
    }).prototype = ErrorStream.prototype;
    dart.addTypeTests(ErrorStream);
    ErrorStream.prototype[_is_ErrorStream_default] = true;
    const error$ = Symbol("ErrorStream.error");
    const controller = Symbol("ErrorStream.controller");
    dart.setMethodSignature(ErrorStream, () => ({
      __proto__: dart.getMethods(ErrorStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(ErrorStream, () => ({
      __proto__: dart.getFields(ErrorStream.__proto__),
      error: dart.finalFieldType(core.Object),
      controller: dart.fieldType(StreamControllerOfT())
    }));
    return ErrorStream;
  });
  src__streams__error.ErrorStream = src__streams__error.ErrorStream$();
  dart.addTypeTests(src__streams__error.ErrorStream, _is_ErrorStream_default);
  const _is_MergeStream_default = Symbol('_is_MergeStream_default');
  src__streams__merge.MergeStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class MergeStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("at least 1 stream needs to be provided"));
        } else if (dart.test(streams[$any](dart.fn(stream => stream == null, dart.fnType(core.bool, [async.Stream$(T)]))))) {
          dart.throw(new core.ArgumentError.new("One of the provided streams is null"));
        }
        let subscriptions = core.List$(async.StreamSubscription$(T)).new(streams[$length]);
        let controller = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let completedStatus = ListOfbool().generate(streams[$length], dart.fn(_ => false, intTobool()));
            for (let i = 0, len = streams[$length]; i < dart.notNull(len); i++) {
              let stream = streams[$elementAt](i);
              subscriptions[$_set](i, stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  completedStatus[$_set](i, true);
                  if (dart.test(completedStatus[$reduce](dart.fn((a, b) => dart.test(a) && dart.test(b), boolAndboolTobool())))) controller.close();
                }, VoidToNull())}));
            }
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)])));
          }, __Tovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (MergeStream.new = function(streams) {
      this[controller] = src__streams__merge.MergeStream._buildController(T, streams);
      MergeStream.__proto__.new.call(this);
    }).prototype = MergeStream.prototype;
    dart.addTypeTests(MergeStream);
    MergeStream.prototype[_is_MergeStream_default] = true;
    const controller = Symbol("MergeStream.controller");
    dart.setMethodSignature(MergeStream, () => ({
      __proto__: dart.getMethods(MergeStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(MergeStream, () => ({
      __proto__: dart.getFields(MergeStream.__proto__),
      controller: dart.finalFieldType(StreamControllerOfT())
    }));
    return MergeStream;
  });
  src__streams__merge.MergeStream = src__streams__merge.MergeStream$();
  dart.addTypeTests(src__streams__merge.MergeStream, _is_MergeStream_default);
  const _is_NeverStream_default = Symbol('_is_NeverStream_default');
  src__streams__never.NeverStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class NeverStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        this[controller] = StreamControllerOfT()._check(value);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (NeverStream.new = function() {
      this[controller] = StreamControllerOfT().new();
      NeverStream.__proto__.new.call(this);
    }).prototype = NeverStream.prototype;
    dart.addTypeTests(NeverStream);
    NeverStream.prototype[_is_NeverStream_default] = true;
    const controller = Symbol("NeverStream.controller");
    dart.setMethodSignature(NeverStream, () => ({
      __proto__: dart.getMethods(NeverStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(NeverStream, () => ({
      __proto__: dart.getFields(NeverStream.__proto__),
      controller: dart.fieldType(StreamControllerOfT())
    }));
    return NeverStream;
  });
  src__streams__never.NeverStream = src__streams__never.NeverStream$();
  dart.addTypeTests(src__streams__never.NeverStream, _is_NeverStream_default);
  const _is_RaceStream_default = Symbol('_is_RaceStream_default');
  src__streams__race.RaceStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class RaceStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("provide at least 1 stream"));
        }
        let subscriptions = _interceptors.JSArray$(async.StreamSubscription$(T)).of([]);
        let isDisambiguated = false;
        let controller = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            function doUpdate(i, value) {
              try {
                if (!isDisambiguated) for (let k = dart.notNull(subscriptions[$length]) - 1; k >= 0; k--) {
                  if (k !== i) {
                    subscriptions[$_get](k).cancel();
                    subscriptions[$removeAt](k);
                  }
                }
                isDisambiguated = true;
                controller.add(value);
              } catch (e) {
                let s = dart.stackTrace(e);
                controller.addError(e, s);
              }
            }
            dart.fn(doUpdate, dart.fnType(dart.void, [core.int, T]));
            for (let i = 0, len = streams[$length]; i < dart.notNull(len); i++) {
              let stream = streams[$elementAt](i);
              subscriptions[$add](stream.listen(dart.fn(value => doUpdate(i, value), dart.fnType(dart.void, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => controller.close(), VoidToFuture())}));
            }
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)])));
          }, __Tovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => {
            if (subscription != null) return subscription.cancel();
            return async.Future.value();
          }, dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (RaceStream.new = function(streams) {
      this[controller] = src__streams__race.RaceStream._buildController(T, streams);
      RaceStream.__proto__.new.call(this);
    }).prototype = RaceStream.prototype;
    dart.addTypeTests(RaceStream);
    RaceStream.prototype[_is_RaceStream_default] = true;
    const controller = Symbol("RaceStream.controller");
    dart.setMethodSignature(RaceStream, () => ({
      __proto__: dart.getMethods(RaceStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(RaceStream, () => ({
      __proto__: dart.getFields(RaceStream.__proto__),
      controller: dart.finalFieldType(StreamControllerOfT())
    }));
    return RaceStream;
  });
  src__streams__race.RaceStream = src__streams__race.RaceStream$();
  dart.addTypeTests(src__streams__race.RaceStream, _is_RaceStream_default);
  src__streams__range.RangeStream = class RangeStream extends async.Stream$(core.int) {
    get stream() {
      return this[stream];
    }
    set stream(value) {
      super.stream = value;
    }
    listen(onData, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
      return this.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
    }
    static buildStream(startInclusive, endInclusive) {
      let length = (dart.notNull(endInclusive) - dart.notNull(startInclusive))[$abs]() + 1;
      return StreamOfint().fromIterable(ListOfint().generate(length, dart.fn(i => dart.notNull(startInclusive) > dart.notNull(endInclusive) ? dart.notNull(startInclusive) - dart.notNull(i) : dart.notNull(startInclusive) + dart.notNull(i), intToint())));
    }
  };
  (src__streams__range.RangeStream.new = function(startInclusive, endInclusive) {
    this[stream] = src__streams__range.RangeStream.buildStream(startInclusive, endInclusive);
    src__streams__range.RangeStream.__proto__.new.call(this);
  }).prototype = src__streams__range.RangeStream.prototype;
  dart.addTypeTests(src__streams__range.RangeStream);
  const stream = Symbol("RangeStream.stream");
  dart.setMethodSignature(src__streams__range.RangeStream, () => ({
    __proto__: dart.getMethods(src__streams__range.RangeStream.__proto__),
    listen: dart.fnType(async.StreamSubscription$(core.int), [dart.fnType(dart.void, [core.int])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
  }));
  dart.setFieldSignature(src__streams__range.RangeStream, () => ({
    __proto__: dart.getFields(src__streams__range.RangeStream.__proto__),
    stream: dart.finalFieldType(StreamOfint())
  }));
  const _isUsed$ = Symbol('_isUsed');
  const _is_RepeatStream_default = Symbol('_is_RepeatStream_default');
  src__streams__repeat.RepeatStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let intToStreamOfT = () => (intToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [core.int])))();
    class RepeatStream extends async.Stream$(T) {
      get streamFactory() {
        return this[streamFactory$];
      }
      set streamFactory(value) {
        super.streamFactory = value;
      }
      get count() {
        return this[count$];
      }
      set count(value) {
        super.count = value;
      }
      get repeatStep() {
        return this[repeatStep];
      }
      set repeatStep(value) {
        this[repeatStep] = value;
      }
      get controller() {
        return this[controller];
      }
      set controller(value) {
        this[controller] = StreamControllerOfT()._check(value);
      }
      get subscription() {
        return this[subscription];
      }
      set subscription(value) {
        this[subscription] = StreamSubscriptionOfT()._check(value);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (dart.test(this[_isUsed$])) dart.throw(new core.StateError.new("Stream has already been listened to."));
        this[_isUsed$] = true;
        this.controller = StreamControllerOfT().new({sync: true, onListen: dart.bind(this, 'maybeRepeatNext'), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return this.subscription.pause(resumeSignal);
          }, __Tovoid()), onResume: dart.fn(() => this.subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
            let t = this.subscription;
            return t == null ? null : t.cancel();
          }, VoidToFuture())});
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      repeatNext() {
        const onDone = (function() {
          let t = this.subscription;
          t == null ? null : t.cancel();
          this.maybeRepeatNext();
        }).bind(this);
        dart.fn(onDone, VoidTovoid());
        try {
          this.subscription = this.streamFactory((() => {
            let x = this.repeatStep;
            this.repeatStep = dart.notNull(x) + 1;
            return x;
          })()).listen(dart.bind(this.controller, 'add'), {onError: dart.bind(this.controller, 'addError'), onDone: onDone, cancelOnError: false});
        } catch (e) {
          let s = dart.stackTrace(e);
          this.controller.addError(e, s);
        }
      }
      maybeRepeatNext() {
        if (this.repeatStep == this.count) {
          this.controller.close();
        } else {
          this.repeatNext();
        }
      }
    }
    (RepeatStream.new = function(streamFactory, count) {
      if (count === void 0) count = null;
      this[repeatStep] = 0;
      this[controller] = null;
      this[subscription] = null;
      this[_isUsed$] = false;
      this[streamFactory$] = streamFactory;
      this[count$] = count;
      RepeatStream.__proto__.new.call(this);
    }).prototype = RepeatStream.prototype;
    dart.addTypeTests(RepeatStream);
    RepeatStream.prototype[_is_RepeatStream_default] = true;
    const streamFactory$ = Symbol("RepeatStream.streamFactory");
    const count$ = Symbol("RepeatStream.count");
    const repeatStep = Symbol("RepeatStream.repeatStep");
    const controller = Symbol("RepeatStream.controller");
    const subscription = Symbol("RepeatStream.subscription");
    dart.setMethodSignature(RepeatStream, () => ({
      __proto__: dart.getMethods(RepeatStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool}),
      repeatNext: dart.fnType(dart.void, []),
      maybeRepeatNext: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(RepeatStream, () => ({
      __proto__: dart.getFields(RepeatStream.__proto__),
      streamFactory: dart.finalFieldType(intToStreamOfT()),
      count: dart.finalFieldType(core.int),
      repeatStep: dart.fieldType(core.int),
      controller: dart.fieldType(StreamControllerOfT()),
      subscription: dart.fieldType(StreamSubscriptionOfT()),
      [_isUsed$]: dart.fieldType(core.bool)
    }));
    return RepeatStream;
  });
  src__streams__repeat.RepeatStream = src__streams__repeat.RepeatStream$();
  dart.addTypeTests(src__streams__repeat.RepeatStream, _is_RepeatStream_default);
  const _isUsed$0 = Symbol('_isUsed');
  const _errors = Symbol('_errors');
  const _is_RetryStream_default = Symbol('_is_RetryStream_default');
  src__streams__retry.RetryStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let VoidToStreamOfT = () => (VoidToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [])))();
    class RetryStream extends async.Stream$(T) {
      get streamFactory() {
        return this[streamFactory$];
      }
      set streamFactory(value) {
        super.streamFactory = value;
      }
      get count() {
        return this[count$];
      }
      set count(value) {
        this[count$] = value;
      }
      get retryStep() {
        return this[retryStep];
      }
      set retryStep(value) {
        this[retryStep] = value;
      }
      get controller() {
        return this[controller];
      }
      set controller(value) {
        this[controller] = StreamControllerOfT()._check(value);
      }
      get subscription() {
        return this[subscription];
      }
      set subscription(value) {
        this[subscription] = StreamSubscriptionOfT()._check(value);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (dart.test(this[_isUsed$0])) dart.throw(new core.StateError.new("Stream has already been listened to."));
        this[_isUsed$0] = true;
        this.controller = StreamControllerOfT().new({sync: true, onListen: dart.bind(this, 'retry'), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return this.subscription.pause(resumeSignal);
          }, __Tovoid()), onResume: dart.fn(() => this.subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => this.subscription.cancel(), VoidToFuture())});
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      retry() {
        this.subscription = this.streamFactory().listen(dart.bind(this.controller, 'add'), {onError: dart.fn((e, s) => {
            this.subscription.cancel();
            if (this.count == this.retryStep) {
              this.controller.addError(new src__streams__utils.RetryError.new("Received an error after attempting " + dart.str(this.count) + " retries", (() => {
                let _ = this[_errors];
                _[$add](new src__streams__utils.ErrorAndStacktrace.new(e, s));
                return _;
              })()));
              this.controller.close();
            } else {
              this.retryStep = dart.notNull(this.retryStep) + 1;
              this[_errors][$add](new src__streams__utils.ErrorAndStacktrace.new(e, s));
              this.retry();
            }
          }, dynamicAndStackTraceToNull()), onDone: dart.bind(this.controller, 'close'), cancelOnError: false});
      }
    }
    (RetryStream.new = function(streamFactory, count) {
      if (count === void 0) count = null;
      this[retryStep] = 0;
      this[controller] = null;
      this[subscription] = null;
      this[_isUsed$0] = false;
      this[_errors] = JSArrayOfErrorAndStacktrace().of([]);
      this[streamFactory$] = streamFactory;
      this[count$] = count;
      RetryStream.__proto__.new.call(this);
    }).prototype = RetryStream.prototype;
    dart.addTypeTests(RetryStream);
    RetryStream.prototype[_is_RetryStream_default] = true;
    const streamFactory$ = Symbol("RetryStream.streamFactory");
    const count$ = Symbol("RetryStream.count");
    const retryStep = Symbol("RetryStream.retryStep");
    const controller = Symbol("RetryStream.controller");
    const subscription = Symbol("RetryStream.subscription");
    dart.setMethodSignature(RetryStream, () => ({
      __proto__: dart.getMethods(RetryStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool}),
      retry: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(RetryStream, () => ({
      __proto__: dart.getFields(RetryStream.__proto__),
      streamFactory: dart.finalFieldType(VoidToStreamOfT()),
      count: dart.fieldType(core.int),
      retryStep: dart.fieldType(core.int),
      controller: dart.fieldType(StreamControllerOfT()),
      subscription: dart.fieldType(StreamSubscriptionOfT()),
      [_isUsed$0]: dart.fieldType(core.bool),
      [_errors]: dart.fieldType(ListOfErrorAndStacktrace())
    }));
    return RetryStream;
  });
  src__streams__retry.RetryStream = src__streams__retry.RetryStream$();
  dart.addTypeTests(src__streams__retry.RetryStream, _is_RetryStream_default);
  const _isUsed$1 = Symbol('_isUsed');
  const _errors$ = Symbol('_errors');
  const _is_RetryWhenStream_default = Symbol('_is_RetryWhenStream_default');
  src__streams__retry_when.RetryWhenStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let VoidToStreamOfT = () => (VoidToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [])))();
    class RetryWhenStream extends async.Stream$(T) {
      get streamFactory() {
        return this[streamFactory$];
      }
      set streamFactory(value) {
        super.streamFactory = value;
      }
      get retryWhenFactory() {
        return this[retryWhenFactory$];
      }
      set retryWhenFactory(value) {
        super.retryWhenFactory = value;
      }
      get controller() {
        return this[controller];
      }
      set controller(value) {
        this[controller] = StreamControllerOfT()._check(value);
      }
      get subscription() {
        return this[subscription];
      }
      set subscription(value) {
        this[subscription] = StreamSubscriptionOfT()._check(value);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (dart.test(this[_isUsed$1])) dart.throw(new core.StateError.new("Stream has already been listened to."));
        this[_isUsed$1] = true;
        this.controller = StreamControllerOfT().new({sync: true, onListen: dart.bind(this, 'retry'), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return this.subscription.pause(resumeSignal);
          }, __Tovoid()), onResume: dart.fn(() => this.subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => this.subscription.cancel(), VoidToFuture())});
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      retry() {
        this.subscription = this.streamFactory().listen(dart.bind(this.controller, 'add'), {onError: dart.fn((e, s) => {
            this.subscription.cancel();
            let sub = null;
            sub = this.retryWhenFactory(e, s).listen(dart.fn(event => {
              sub.cancel();
              this[_errors$][$add](new src__streams__utils.ErrorAndStacktrace.new(e, s));
              this.retry();
            }, dynamicToNull()), {onError: dart.fn((e, s) => {
                sub.cancel();
                this.controller.addError(new src__streams__utils.RetryError.new("Received an error after attempting to retry.", (() => {
                  let _ = this[_errors$];
                  _[$add](new src__streams__utils.ErrorAndStacktrace.new(e, s));
                  return _;
                })()));
                this.controller.close();
              }, dynamicAndStackTraceToNull())});
          }, dynamicAndStackTraceToNull()), onDone: dart.bind(this.controller, 'close'), cancelOnError: false});
      }
    }
    (RetryWhenStream.new = function(streamFactory, retryWhenFactory) {
      this[controller] = null;
      this[subscription] = null;
      this[_isUsed$1] = false;
      this[_errors$] = JSArrayOfErrorAndStacktrace().of([]);
      this[streamFactory$] = streamFactory;
      this[retryWhenFactory$] = retryWhenFactory;
      RetryWhenStream.__proto__.new.call(this);
    }).prototype = RetryWhenStream.prototype;
    dart.addTypeTests(RetryWhenStream);
    RetryWhenStream.prototype[_is_RetryWhenStream_default] = true;
    const streamFactory$ = Symbol("RetryWhenStream.streamFactory");
    const retryWhenFactory$ = Symbol("RetryWhenStream.retryWhenFactory");
    const controller = Symbol("RetryWhenStream.controller");
    const subscription = Symbol("RetryWhenStream.subscription");
    dart.setMethodSignature(RetryWhenStream, () => ({
      __proto__: dart.getMethods(RetryWhenStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool}),
      retry: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(RetryWhenStream, () => ({
      __proto__: dart.getFields(RetryWhenStream.__proto__),
      streamFactory: dart.finalFieldType(VoidToStreamOfT()),
      retryWhenFactory: dart.finalFieldType(dynamicAndStackTraceToStreamOfvoid()),
      controller: dart.fieldType(StreamControllerOfT()),
      subscription: dart.fieldType(StreamSubscriptionOfT()),
      [_isUsed$1]: dart.fieldType(core.bool),
      [_errors$]: dart.fieldType(ListOfErrorAndStacktrace())
    }));
    return RetryWhenStream;
  });
  src__streams__retry_when.RetryWhenStream = src__streams__retry_when.RetryWhenStream$();
  dart.addTypeTests(src__streams__retry_when.RetryWhenStream, _is_RetryWhenStream_default);
  const _controller = Symbol('_controller');
  const _is_SwitchLatestStream_default = Symbol('_is_SwitchLatestStream_default');
  src__streams__switch_latest.SwitchLatestStream$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfStreamOfT = () => (StreamOfStreamOfT = dart.constFn(async.Stream$(StreamOfT())))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class SwitchLatestStream extends async.Stream$(T) {
      get streams() {
        return this[streams$];
      }
      set streams(value) {
        super.streams = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (this[_controller] == null) {
          this[_controller] = src__streams__switch_latest.SwitchLatestStream._buildController(T, this.streams, cancelOnError);
        }
        return this[_controller].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams, cancelOnError) {
        let controller = null;
        let subscription = null;
        let otherSubscription = null;
        let leftClosed = false, rightClosed = false, hasMainEvent = false;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            subscription = streams.listen(dart.fn(value => {
              try {
                let t = otherSubscription;
                t == null ? null : t.cancel();
                hasMainEvent = true;
                otherSubscription = value.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                    rightClosed = true;
                    if (leftClosed) controller.close();
                  }, VoidToNull())});
              } catch (e) {
                let s = dart.stackTrace(e);
                controller.addError(e, s);
              }
            }, dart.fnType(core.Null, [async.Stream$(T)])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                leftClosed = true;
                if (rightClosed || !hasMainEvent) {
                  controller.close();
                }
              }, VoidToNull()), cancelOnError: cancelOnError});
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            subscription.pause(resumeSignal);
            let t = otherSubscription;
            t == null ? null : t.pause(resumeSignal);
          }, __ToNull()), onResume: dart.fn(() => {
            subscription.resume();
            let t = otherSubscription;
            t == null ? null : t.resume();
          }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
            yield subscription.cancel();
            if (hasMainEvent) yield otherSubscription.cancel();
          }), VoidToFutureOfNull())});
        return controller;
      }
    }
    (SwitchLatestStream.new = function(streams) {
      this[_controller] = null;
      this[streams$] = streams;
      SwitchLatestStream.__proto__.new.call(this);
    }).prototype = SwitchLatestStream.prototype;
    dart.addTypeTests(SwitchLatestStream);
    SwitchLatestStream.prototype[_is_SwitchLatestStream_default] = true;
    const streams$ = Symbol("SwitchLatestStream.streams");
    dart.setMethodSignature(SwitchLatestStream, () => ({
      __proto__: dart.getMethods(SwitchLatestStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(SwitchLatestStream, () => ({
      __proto__: dart.getFields(SwitchLatestStream.__proto__),
      streams: dart.finalFieldType(StreamOfStreamOfT()),
      [_controller]: dart.fieldType(StreamControllerOfT())
    }));
    return SwitchLatestStream;
  });
  src__streams__switch_latest.SwitchLatestStream = src__streams__switch_latest.SwitchLatestStream$();
  dart.addTypeTests(src__streams__switch_latest.SwitchLatestStream, _is_SwitchLatestStream_default);
  const _is_TimerStream_default = Symbol('_is_TimerStream_default');
  src__streams__timer.TimerStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class TimerStream extends async.Stream$(T) {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get duration() {
        return this[duration$];
      }
      set duration(value) {
        super.duration = value;
      }
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        let subscription = this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
        async.Timer.new(this.duration, dart.fn(() => {
          this.controller.add(this.value);
          this.controller.close();
        }, VoidToNull()));
        return subscription;
      }
    }
    (TimerStream.new = function(value, duration) {
      this[controller] = StreamControllerOfT().new();
      this[value$] = value;
      this[duration$] = duration;
      TimerStream.__proto__.new.call(this);
    }).prototype = TimerStream.prototype;
    dart.addTypeTests(TimerStream);
    TimerStream.prototype[_is_TimerStream_default] = true;
    const value$ = Symbol("TimerStream.value");
    const duration$ = Symbol("TimerStream.duration");
    const controller = Symbol("TimerStream.controller");
    dart.setMethodSignature(TimerStream, () => ({
      __proto__: dart.getMethods(TimerStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(TimerStream, () => ({
      __proto__: dart.getFields(TimerStream.__proto__),
      value: dart.finalFieldType(T),
      duration: dart.finalFieldType(core.Duration),
      controller: dart.finalFieldType(StreamControllerOfT())
    }));
    return TimerStream;
  });
  src__streams__timer.TimerStream = src__streams__timer.TimerStream$();
  dart.addTypeTests(src__streams__timer.TimerStream, _is_TimerStream_default);
  src__streams__tween.TweenStream = class TweenStream extends async.Stream$(core.double) {
    get controller() {
      return this[controller];
    }
    set controller(value) {
      super.controller = value;
    }
    listen(onData, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
      return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
    }
    static _buildController(startValue, changeInTime, duration, intervalMs, ease) {
      let _controller = null;
      let subscription = null;
      _controller = StreamControllerOfdouble().new({sync: true, onListen: dart.fn(() => {
          let sampler = null;
          switch (ease) {
            case src__streams__tween.Ease.LINEAR:
            {
              sampler = src__streams__tween.linear;
              break;
            }
            case src__streams__tween.Ease.IN:
            {
              sampler = src__streams__tween.easeIn;
              break;
            }
            case src__streams__tween.Ease.OUT:
            {
              sampler = src__streams__tween.easeOut;
              break;
            }
            case src__streams__tween.Ease.IN_OUT:
            {
              sampler = src__streams__tween.easeInOut;
              break;
            }
          }
          let stream = src__streams__tween.TweenStream.sampleFromValues(core.double, sampler, startValue, changeInTime, duration.inMilliseconds, intervalMs);
          subscription = stream.listen(dart.bind(_controller, 'add'), {onError: dart.bind(_controller, 'addError'), onDone: dart.bind(_controller, 'close')});
        }, VoidToNull()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
      return _controller;
    }
    static sampleFromValues(T, sampler, startValue, changeInTime, durationMs, intervalMs) {
      return new (_AsyncStarImplOfdouble()).new(function* sampleFromValues(stream) {
        let currentTimeMs = 0;
        let result = null;
        if (stream.add(startValue)) return;
        yield;
        while (currentTimeMs < dart.notNull(durationMs)) {
          currentTimeMs = currentTimeMs + dart.notNull(intervalMs);
          result = sampler(startValue, changeInTime, currentTimeMs, durationMs);
          if (stream.add(result)) return;
          yield;
          yield FutureOfint().delayed(new core.Duration.new({milliseconds: intervalMs}));
        }
        result = dart.notNull(startValue) + dart.notNull(changeInTime);
        if (stream.add(result)) return;
        yield;
      }).stream;
    }
  };
  (src__streams__tween.TweenStream.new = function(startValue, changeInTime, duration, intervalMs, ease) {
    this[controller] = src__streams__tween.TweenStream._buildController(startValue, changeInTime, duration, intervalMs, ease);
    src__streams__tween.TweenStream.__proto__.new.call(this);
  }).prototype = src__streams__tween.TweenStream.prototype;
  dart.addTypeTests(src__streams__tween.TweenStream);
  const controller = Symbol("TweenStream.controller");
  dart.setMethodSignature(src__streams__tween.TweenStream, () => ({
    __proto__: dart.getMethods(src__streams__tween.TweenStream.__proto__),
    listen: dart.fnType(async.StreamSubscription$(core.double), [dart.fnType(dart.void, [core.double])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
  }));
  dart.setFieldSignature(src__streams__tween.TweenStream, () => ({
    __proto__: dart.getFields(src__streams__tween.TweenStream.__proto__),
    controller: dart.finalFieldType(StreamControllerOfdouble())
  }));
  src__streams__tween.Ease = class Ease extends core.Object {
    toString() {
      return {
        0: "Ease.LINEAR",
        1: "Ease.IN",
        2: "Ease.OUT",
        3: "Ease.IN_OUT"
      }[this.index];
    }
  };
  (src__streams__tween.Ease.new = function(x) {
    this.index = x;
  }).prototype = src__streams__tween.Ease.prototype;
  dart.addTypeTests(src__streams__tween.Ease);
  dart.setFieldSignature(src__streams__tween.Ease, () => ({
    __proto__: dart.getFields(src__streams__tween.Ease.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__streams__tween.Ease, ['toString']);
  src__streams__tween.Ease.LINEAR = dart.const(new src__streams__tween.Ease.new(0));
  src__streams__tween.Ease.IN = dart.const(new src__streams__tween.Ease.new(1));
  src__streams__tween.Ease.OUT = dart.const(new src__streams__tween.Ease.new(2));
  src__streams__tween.Ease.IN_OUT = dart.const(new src__streams__tween.Ease.new(3));
  src__streams__tween.Ease.values = dart.constList([src__streams__tween.Ease.LINEAR, src__streams__tween.Ease.IN, src__streams__tween.Ease.OUT, src__streams__tween.Ease.IN_OUT], src__streams__tween.Ease);
  dart.copyProperties(src__streams__tween, {
    get linear() {
      return dart.fn((startValue, changeInTime, currentTimeMs, durationMs) => dart.notNull(changeInTime) * dart.notNull(currentTimeMs) / dart.notNull(durationMs) + dart.notNull(startValue), doubleAnddoubleAndint__Todouble());
    }
  });
  dart.copyProperties(src__streams__tween, {
    get easeIn() {
      return dart.fn((startValue, changeInTime, currentTimeMs, durationMs) => {
        let t = dart.notNull(currentTimeMs) / dart.notNull(durationMs);
        return dart.notNull(changeInTime) * t * t + dart.notNull(startValue);
      }, doubleAnddoubleAndint__Todouble());
    }
  });
  dart.copyProperties(src__streams__tween, {
    get easeOut() {
      return dart.fn((startValue, changeInTime, currentTimeMs, durationMs) => {
        let t = dart.notNull(currentTimeMs) / dart.notNull(durationMs);
        return -dart.notNull(changeInTime) * t * (t - 2) + dart.notNull(startValue);
      }, doubleAnddoubleAndint__Todouble());
    }
  });
  dart.copyProperties(src__streams__tween, {
    get easeInOut() {
      return dart.fn((startValue, changeInTime, currentTimeMs, durationMs) => {
        let t = dart.notNull(currentTimeMs) / (dart.notNull(durationMs) / 2);
        if (t < 1.0) return dart.notNull(changeInTime) / 2 * t * t + dart.notNull(startValue);
        t--;
        return -dart.notNull(changeInTime) / 2 * (t * (t - 2) - 1) + dart.notNull(startValue);
      }, doubleAnddoubleAndint__Todouble());
    }
  });
  const _is_ZipStream_default = Symbol('_is_ZipStream_default');
  src__streams__zip.ZipStream$ = dart.generic((T, R) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfTTobool = () => (StreamOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamOfT()])))();
    class ZipStream extends async.StreamView$(R) {
      static list(T, streams) {
        return new (src__streams__zip.ZipStream$(T, core.List$(T))).new(streams, dart.fn(values => values, dart.fnType(core.List$(T), [core.List$(T)])));
      }
      static zip2(A, B, R, streamOne, streamTwo, zipper) {
        return new (src__streams__zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamOne, streamTwo]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1))), dart.fnType(R, [core.List])));
      }
      static zip3(A, B, C, R, streamA, streamB, streamC, zipper) {
        return new (src__streams__zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2))), dart.fnType(R, [core.List])));
      }
      static zip4(A, B, C, D, R, streamA, streamB, streamC, streamD, zipper) {
        return new (src__streams__zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3))), dart.fnType(R, [core.List])));
      }
      static zip5(A, B, C, D, E, R, streamA, streamB, streamC, streamD, streamE, zipper) {
        return new (src__streams__zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4))), dart.fnType(R, [core.List])));
      }
      static zip6(A, B, C, D, E, F, R, streamA, streamB, streamC, streamD, streamE, streamF, zipper) {
        return new (src__streams__zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5))), dart.fnType(R, [core.List])));
      }
      static zip7(A, B, C, D, E, F, G, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper) {
        return new (src__streams__zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6))), dart.fnType(R, [core.List])));
      }
      static zip8(A, B, C, D, E, F, G, H, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper) {
        return new (src__streams__zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7))), dart.fnType(R, [core.List])));
      }
      static zip9(A, B, C, D, E, F, G, H, I, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper) {
        return new (src__streams__zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7)), I.as(values[$_get](8))), dart.fnType(R, [core.List])));
      }
      static _buildController(T, R, streams, zipper) {
        {
          let controller = null;
          let subscriptions = core.List$(async.StreamSubscription$(T)).new(streams[$length]);
          controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
              try {
                let values = core.List$(core.List$(T)).generate(streams[$length], dart.fn(_ => _interceptors.JSArray$(T).of([]), dart.fnType(core.List$(T), [core.int])));
                let completedStatus = ListOfbool().generate(streams[$length], dart.fn(_ => false, intTobool()));
                function doUpdate(index, value) {
                  values[$_get](index)[$add](value);
                  if (dart.test(values[$every](dart.fn(v => v[$isNotEmpty], dart.fnType(core.bool, [core.List$(T)]))))) {
                    try {
                      controller.add(zipper(values[$fold](core.List$(T), _interceptors.JSArray$(T).of([]), dart.fn((prev, vals) => {
                        prev[$add](vals[$_get](0));
                        return prev;
                      }, dart.fnType(core.List$(T), [core.List$(T), core.List$(T)])))));
                    } catch (e) {
                      let s = dart.stackTrace(e);
                      controller.addError(e, s);
                    }
                    values[$forEach](dart.fn(v => {
                      v[$removeAt](0);
                      return v;
                    }, dart.fnType(core.List$(T), [core.List$(T)])));
                  }
                }
                dart.fn(doUpdate, dart.fnType(dart.void, [core.int, T]));
                function markDone(i) {
                  completedStatus[$_set](i, true);
                  if (dart.test(completedStatus[$reduce](dart.fn((a, b) => dart.test(a) && dart.test(b), boolAndboolTobool())))) controller.close();
                }
                dart.fn(markDone, intTovoid());
                for (let i = 0, len = streams[$length]; i < dart.notNull(len); i++) {
                  let stream = streams[$elementAt](i);
                  subscriptions[$_set](i, stream.listen(dart.fn(value => doUpdate(i, value), dart.fnType(dart.void, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => markDone(i), VoidTovoid())}));
                }
              } catch (e) {
                let s = dart.stackTrace(e);
                controller.addError(e, s);
              }
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscriptions[$where](dart.fn(subscription => subscription != null, StreamSubscriptionTobool()))[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), StreamSubscriptionTovoid()));
            }, __Tovoid()), onResume: dart.fn(() => subscriptions[$where](dart.fn(subscription => subscription != null, StreamSubscriptionTobool()))[$forEach](dart.fn(subscription => subscription.resume(), StreamSubscriptionTovoid())), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
          return controller;
        }
      }
    }
    (ZipStream.new = function(streams, zipper) {
      if (!(streams != null && dart.test(streams[$every](dart.fn(s => s != null, StreamOfTTobool()))))) dart.assertFailed("streams cannot be null");
      if (!(dart.notNull(streams[$length]) > 1)) dart.assertFailed("provide at least 2 streams");
      if (!(zipper != null)) dart.assertFailed("must provide a zipper function");
      ZipStream.__proto__.new.call(this, src__streams__zip.ZipStream._buildController(T, R, streams, zipper).stream);
    }).prototype = ZipStream.prototype;
    dart.addTypeTests(ZipStream);
    ZipStream.prototype[_is_ZipStream_default] = true;
    return ZipStream;
  });
  src__streams__zip.ZipStream = src__streams__zip.ZipStream$();
  dart.addTypeTests(src__streams__zip.ZipStream, _is_ZipStream_default);
  dart.trackLibraries("packages/rxdart/src/streams/amb.ddc", {
    "package:rxdart/src/streams/amb.dart": src__streams__amb,
    "package:rxdart/src/streams/combine_latest.dart": src__streams__combine_latest,
    "package:rxdart/src/streams/concat.dart": src__streams__concat,
    "package:rxdart/src/streams/concat_eager.dart": src__streams__concat_eager,
    "package:rxdart/src/streams/utils.dart": src__streams__utils,
    "package:rxdart/src/streams/defer.dart": src__streams__defer,
    "package:rxdart/src/streams/error.dart": src__streams__error,
    "package:rxdart/src/streams/merge.dart": src__streams__merge,
    "package:rxdart/src/streams/never.dart": src__streams__never,
    "package:rxdart/src/streams/race.dart": src__streams__race,
    "package:rxdart/src/streams/range.dart": src__streams__range,
    "package:rxdart/src/streams/repeat.dart": src__streams__repeat,
    "package:rxdart/src/streams/retry.dart": src__streams__retry,
    "package:rxdart/src/streams/retry_when.dart": src__streams__retry_when,
    "package:rxdart/src/streams/switch_latest.dart": src__streams__switch_latest,
    "package:rxdart/src/streams/timer.dart": src__streams__timer,
    "package:rxdart/src/streams/tween.dart": src__streams__tween,
    "package:rxdart/src/streams/zip.dart": src__streams__zip
  }, '{"version":3,"sourceRoot":"","sources":["amb.dart","combine_latest.dart","concat.dart","concat_eager.dart","utils.dart","defer.dart","error.dart","merge.dart","never.dart","race.dart","range.dart","repeat.dart","retry.dart","retry_when.dart","switch_latest.dart","timer.dart","tween.dart","zip.dart"],"names":[],"mappings":"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","file":"amb.ddc.js"}');
  // Exports:
  return {
    src__streams__amb: src__streams__amb,
    src__streams__combine_latest: src__streams__combine_latest,
    src__streams__concat: src__streams__concat,
    src__streams__concat_eager: src__streams__concat_eager,
    src__streams__utils: src__streams__utils,
    src__streams__defer: src__streams__defer,
    src__streams__error: src__streams__error,
    src__streams__merge: src__streams__merge,
    src__streams__never: src__streams__never,
    src__streams__race: src__streams__race,
    src__streams__range: src__streams__range,
    src__streams__repeat: src__streams__repeat,
    src__streams__retry: src__streams__retry,
    src__streams__retry_when: src__streams__retry_when,
    src__streams__switch_latest: src__streams__switch_latest,
    src__streams__timer: src__streams__timer,
    src__streams__tween: src__streams__tween,
    src__streams__zip: src__streams__zip
  };
});

//# sourceMappingURL=amb.ddc.js.map
