define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__samplers__utils = Object.create(_root);
  const src__utils__notification = Object.create(_root);
  const src__transformers__do = Object.create(_root);
  const src__transformers__sample = Object.create(_root);
  const src__transformers__take_until = Object.create(_root);
  const src__samplers__buffer_strategy = Object.create(_root);
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $toString = dartx.toString;
  const $putIfAbsent = dartx.putIfAbsent;
  const $_get = dartx._get;
  const $remove = dartx.remove;
  const $modulo = dartx['%'];
  let LinkedMapOfStream$StreamSubscription = () => (LinkedMapOfStream$StreamSubscription = dart.constFn(_js_helper.LinkedMap$(async.Stream, async.StreamSubscription)))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidToStreamSubscription = () => (VoidToStreamSubscription = dart.constFn(dart.fnType(async.StreamSubscription, [])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let __ToNull = () => (__ToNull = dart.constFn(dart.fnType(core.Null, [], [async.Future])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let __Tovoid = () => (__Tovoid = dart.constFn(dart.fnType(dart.void, [], [async.Future])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let StreamOfNull = () => (StreamOfNull = dart.constFn(async.Stream$(core.Null)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let TakeUntilStreamTransformerOfNull$dynamic = () => (TakeUntilStreamTransformerOfNull$dynamic = dart.constFn(src__transformers__take_until.TakeUntilStreamTransformer$(core.Null, dart.dynamic)))();
  src__utils__notification.Kind = class Kind extends core.Object {
    toString() {
      return {
        0: "Kind.OnData",
        1: "Kind.OnDone",
        2: "Kind.OnError"
      }[this.index];
    }
  };
  (src__utils__notification.Kind.new = function(x) {
    this.index = x;
  }).prototype = src__utils__notification.Kind.prototype;
  dart.addTypeTests(src__utils__notification.Kind);
  dart.setFieldSignature(src__utils__notification.Kind, () => ({
    __proto__: dart.getFields(src__utils__notification.Kind.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__utils__notification.Kind, ['toString']);
  src__utils__notification.Kind.OnData = dart.const(new src__utils__notification.Kind.new(0));
  src__utils__notification.Kind.OnDone = dart.const(new src__utils__notification.Kind.new(1));
  src__utils__notification.Kind.OnError = dart.const(new src__utils__notification.Kind.new(2));
  src__utils__notification.Kind.values = dart.constList([src__utils__notification.Kind.OnData, src__utils__notification.Kind.OnDone, src__utils__notification.Kind.OnError], src__utils__notification.Kind);
  const _is_Notification_default = Symbol('_is_Notification_default');
  src__utils__notification.Notification$ = dart.generic(T => {
    let NotificationOfT = () => (NotificationOfT = dart.constFn(src__utils__notification.Notification$(T)))();
    class Notification extends core.Object {
      get kind() {
        return this[kind$];
      }
      set kind(value) {
        super.kind = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get error() {
        return this[error$];
      }
      set error(value) {
        super.error = value;
      }
      get stackTrace() {
        return this[stackTrace$];
      }
      set stackTrace(value) {
        super.stackTrace = value;
      }
      static onData(value) {
        return new (NotificationOfT()).new(src__utils__notification.Kind.OnData, value, null, null);
      }
      static onDone() {
        return new (NotificationOfT()).new(src__utils__notification.Kind.OnDone, null, null, null);
      }
      static onError(e, s) {
        return new (NotificationOfT()).new(src__utils__notification.Kind.OnError, null, e, s);
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return src__utils__notification.Notification.is(other) && this.kind == other.kind && dart.equals(this.error, other.error) && dart.equals(this.stackTrace, other.stackTrace) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.kind)) ^ dart.notNull(dart.hashCode(this.error)) ^ dart.notNull(dart.hashCode(this.stackTrace)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "Notification{kind: " + dart.str(this.kind) + ", value: " + dart.str(this.value) + ", error: " + dart.str(this.error) + ", stackTrace: " + dart.str(this.stackTrace) + "}";
      }
      get isOnData() {
        return this.kind === src__utils__notification.Kind.OnData;
      }
      get isOnDone() {
        return this.kind === src__utils__notification.Kind.OnDone;
      }
      get isOnError() {
        return this.kind === src__utils__notification.Kind.OnError;
      }
    }
    (Notification.new = function(kind, value, error, stackTrace) {
      this[kind$] = kind;
      this[value$] = value;
      this[error$] = error;
      this[stackTrace$] = stackTrace;
    }).prototype = Notification.prototype;
    dart.addTypeTests(Notification);
    Notification.prototype[_is_Notification_default] = true;
    const kind$ = Symbol("Notification.kind");
    const value$ = Symbol("Notification.value");
    const error$ = Symbol("Notification.error");
    const stackTrace$ = Symbol("Notification.stackTrace");
    dart.setMethodSignature(Notification, () => ({
      __proto__: dart.getMethods(Notification.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(Notification, () => ({
      __proto__: dart.getGetters(Notification.__proto__),
      hashCode: core.int,
      [$hashCode]: core.int,
      isOnData: core.bool,
      isOnDone: core.bool,
      isOnError: core.bool
    }));
    dart.setFieldSignature(Notification, () => ({
      __proto__: dart.getFields(Notification.__proto__),
      kind: dart.finalFieldType(src__utils__notification.Kind),
      value: dart.finalFieldType(T),
      error: dart.finalFieldType(dart.dynamic),
      stackTrace: dart.finalFieldType(core.StackTrace)
    }));
    dart.defineExtensionMethods(Notification, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Notification, ['hashCode']);
    return Notification;
  });
  src__utils__notification.Notification = src__utils__notification.Notification$();
  dart.addTypeTests(src__utils__notification.Notification, _is_Notification_default);
  const _is_DoStreamTransformer_default = Symbol('_is_DoStreamTransformer_default');
  src__transformers__do.DoStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class DoStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, opts) {
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let onData = opts && 'onData' in opts ? opts.onData : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let onEach = opts && 'onEach' in opts ? opts.onEach : null;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onPause = opts && 'onPause' in opts ? opts.onPause : null;
        let onResume = opts && 'onResume' in opts ? opts.onResume : null;
        if (onCancel == null && onData == null && onDone == null && onEach == null && onError == null && onListen == null && onPause == null && onResume == null) {
          dart.throw(new core.ArgumentError.new("Must provide at least one handler"));
        }
        let subscriptions = new (LinkedMapOfStream$StreamSubscription()).new();
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let onListenLocal = () => {
            if (onListen != null) {
              try {
                onListen();
              } catch (e) {
                let s = dart.stackTrace(e);
                controller.addError(e, s);
              }
            }
            subscriptions[$putIfAbsent](input, dart.fn(() => input.listen(dart.fn(value => {
              if (onData != null) {
                try {
                  onData(value);
                } catch (e) {
                  let s = dart.stackTrace(e);
                  controller.addError(e, s);
                }
              }
              if (onEach != null) {
                try {
                  onEach(src__utils__notification.Notification$(T).onData(value));
                } catch (e) {
                  let s = dart.stackTrace(e);
                  controller.addError(e, s);
                }
              }
              controller.add(value);
            }, dart.fnType(core.Null, [T])), {onError: dart.fn((e, s) => {
                if (onError != null) {
                  try {
                    dart.dcall(onError, [e, s]);
                  } catch (e2) {
                    let s2 = dart.stackTrace(e2);
                    controller.addError(e2, s2);
                  }
                }
                if (onEach != null) {
                  try {
                    onEach(src__utils__notification.Notification$(T).onError(e, s));
                  } catch (e) {
                    let s = dart.stackTrace(e);
                    controller.addError(e, s);
                  }
                }
                controller.addError(e, s);
              }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
                if (onDone != null) {
                  try {
                    onDone();
                  } catch (e) {
                    let s = dart.stackTrace(e);
                    controller.addError(e, s);
                  }
                }
                if (onEach != null) {
                  try {
                    onEach(src__utils__notification.Notification$(T).onDone());
                  } catch (e) {
                    let s = dart.stackTrace(e);
                    controller.addError(e, s);
                  }
                }
                controller.close();
              }, VoidToNull()), cancelOnError: cancelOnError}), dart.fnType(async.StreamSubscription$(T), [])));
          };
          dart.fn(onListenLocal, VoidToNull());
          let onCancelLocal = () => {
            if (onCancel != null) {
              try {
                onCancel();
              } catch (e) {
                let s = dart.stackTrace(e);
                if (!dart.test(controller.isClosed)) {
                  controller.addError(e, s);
                } else {
                  async.Zone.current.handleUncaughtError(e, s);
                }
              }
            }
            let l = subscriptions[$_get](input).cancel();
            let cancelFuture = l != null ? l : async.Future.value();
            return cancelFuture.whenComplete(dart.fn(() => subscriptions[$remove](input), VoidToStreamSubscription()));
          };
          dart.fn(onCancelLocal, VoidToFuture());
          if (dart.test(input.isBroadcast)) {
            controller = async.StreamController$(T).broadcast({sync: true, onListen: onListenLocal, onCancel: onCancelLocal});
          } else {
            controller = async.StreamController$(T).new({sync: true, onListen: onListenLocal, onCancel: onCancelLocal, onPause: dart.fn(resumeSignal => {
                if (resumeSignal === void 0) resumeSignal = null;
                if (onPause != null) {
                  try {
                    onPause(resumeSignal);
                  } catch (e) {
                    let s = dart.stackTrace(e);
                    controller.addError(e, s);
                  }
                }
                subscriptions[$_get](input).pause(resumeSignal);
              }, __ToNull()), onResume: dart.fn(() => {
                if (onResume != null) {
                  try {
                    onResume();
                  } catch (e) {
                    let s = dart.stackTrace(e);
                    controller.addError(e, s);
                  }
                }
                subscriptions[$_get](input).resume();
              }, VoidToNull())});
          }
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DoStreamTransformer.new = function(opts) {
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      let onData = opts && 'onData' in opts ? opts.onData : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let onEach = opts && 'onEach' in opts ? opts.onEach : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onListen = opts && 'onListen' in opts ? opts.onListen : null;
      let onPause = opts && 'onPause' in opts ? opts.onPause : null;
      let onResume = opts && 'onResume' in opts ? opts.onResume : null;
      this[transformer] = src__transformers__do.DoStreamTransformer._buildTransformer(T, {onCancel: onCancel, onData: onData, onDone: onDone, onEach: onEach, onError: onError, onListen: onListen, onPause: onPause, onResume: onResume});
      DoStreamTransformer.__proto__.new.call(this);
    }).prototype = DoStreamTransformer.prototype;
    dart.addTypeTests(DoStreamTransformer);
    DoStreamTransformer.prototype[_is_DoStreamTransformer_default] = true;
    const transformer = Symbol("DoStreamTransformer.transformer");
    dart.setMethodSignature(DoStreamTransformer, () => ({
      __proto__: dart.getMethods(DoStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(DoStreamTransformer, () => ({
      __proto__: dart.getFields(DoStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return DoStreamTransformer;
  });
  src__transformers__do.DoStreamTransformer = src__transformers__do.DoStreamTransformer$();
  dart.addTypeTests(src__transformers__do.DoStreamTransformer, _is_DoStreamTransformer_default);
  const _is_SampleStreamTransformer_default = Symbol('_is_SampleStreamTransformer_default');
  src__transformers__sample.SampleStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class SampleStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, sampleStream, opts) {
        let sampleOnValueOnly = opts && 'sampleOnValueOnly' in opts ? opts.sampleOnValueOnly : true;
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let sampleSubscription = null;
          let currentValue = null;
          let hasValue = false;
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            if (hasValue) {
              hasValue = false;
              controller.add(currentValue);
            }
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          function onSample(_) {
            if (hasValue || !dart.test(sampleOnValueOnly)) {
              controller.add(currentValue);
              hasValue = false;
              currentValue = null;
            }
          }
          dart.fn(onSample, dynamicTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              try {
                subscription = input.listen(dart.fn(value => {
                  hasValue = true;
                  currentValue = value;
                }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
                sampleSubscription = sampleStream.listen(onSample, {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              } catch (e) {
                let s = dart.stackTrace(e);
                controller.addError(e, s);
              }
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              yield sampleSubscription.cancel();
              yield subscription.cancel();
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (SampleStreamTransformer.new = function(sampleStream, opts) {
      let sampleOnValueOnly = opts && 'sampleOnValueOnly' in opts ? opts.sampleOnValueOnly : true;
      this[transformer] = src__transformers__sample.SampleStreamTransformer._buildTransformer(T, sampleStream, {sampleOnValueOnly: sampleOnValueOnly});
      SampleStreamTransformer.__proto__.new.call(this);
    }).prototype = SampleStreamTransformer.prototype;
    dart.addTypeTests(SampleStreamTransformer);
    SampleStreamTransformer.prototype[_is_SampleStreamTransformer_default] = true;
    const transformer = Symbol("SampleStreamTransformer.transformer");
    dart.setMethodSignature(SampleStreamTransformer, () => ({
      __proto__: dart.getMethods(SampleStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(SampleStreamTransformer, () => ({
      __proto__: dart.getFields(SampleStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return SampleStreamTransformer;
  });
  src__transformers__sample.SampleStreamTransformer = src__transformers__sample.SampleStreamTransformer$();
  dart.addTypeTests(src__transformers__sample.SampleStreamTransformer, _is_SampleStreamTransformer_default);
  const _is_TakeUntilStreamTransformer_default = Symbol('_is_TakeUntilStreamTransformer_default');
  src__transformers__take_until.TakeUntilStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class TakeUntilStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, S, otherStream) {
        if (otherStream == null) {
          dart.throw(new core.ArgumentError.new("take until stream cannot be null"));
        }
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              otherSubscription = otherStream.listen(dart.fn(_ => onDone(), dart.fnType(dart.void, [S])), {onError: dart.bind(controller, 'addError'), cancelOnError: cancelOnError, onDone: onDone});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              yield (() => {
                let t = otherSubscription;
                return t == null ? null : t.cancel();
              })();
              yield (() => {
                let t = subscription;
                return t == null ? null : t.cancel();
              })();
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (TakeUntilStreamTransformer.new = function(otherStream) {
      this[transformer] = src__transformers__take_until.TakeUntilStreamTransformer._buildTransformer(T, S, otherStream);
      TakeUntilStreamTransformer.__proto__.new.call(this);
    }).prototype = TakeUntilStreamTransformer.prototype;
    dart.addTypeTests(TakeUntilStreamTransformer);
    TakeUntilStreamTransformer.prototype[_is_TakeUntilStreamTransformer_default] = true;
    const transformer = Symbol("TakeUntilStreamTransformer.transformer");
    dart.setMethodSignature(TakeUntilStreamTransformer, () => ({
      __proto__: dart.getMethods(TakeUntilStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(TakeUntilStreamTransformer, () => ({
      __proto__: dart.getFields(TakeUntilStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return TakeUntilStreamTransformer;
  });
  src__transformers__take_until.TakeUntilStreamTransformer = src__transformers__take_until.TakeUntilStreamTransformer$();
  dart.addTypeTests(src__transformers__take_until.TakeUntilStreamTransformer, _is_TakeUntilStreamTransformer_default);
  src__samplers__buffer_strategy.onCount = function(T, S, count, startBufferEvery) {
    if (startBufferEvery === void 0) startBufferEvery = 0;
    return dart.fn((stream, bufferHandler, scheduleHandler) => src__samplers__buffer_strategy._OnCountSampler$(T, S).new(stream, bufferHandler, scheduleHandler, count, startBufferEvery), dart.fnType(src__samplers__buffer_strategy._OnCountSampler$(T, S), [async.Stream$(T), dart.fnType(dart.void, [T, async.EventSink$(S)], [core.int]), dart.fnType(dart.void, [S, async.EventSink$(S)], [core.int])]));
  };
  src__samplers__buffer_strategy.onStream = function(T, S, O, onStream) {
    return dart.fn((stream, bufferHandler, scheduleHandler) => src__samplers__buffer_strategy._OnStreamSampler$(T, S, O).new(stream, bufferHandler, scheduleHandler, onStream), dart.fnType(src__samplers__buffer_strategy._OnStreamSampler$(T, S, O), [async.Stream$(T), dart.fnType(dart.void, [T, async.EventSink$(S)], [core.int]), dart.fnType(dart.void, [S, async.EventSink$(S)], [core.int])]));
  };
  src__samplers__buffer_strategy.onTime = function(T, S, duration) {
    return dart.fn((stream, bufferHandler, scheduleHandler) => {
      if (duration == null) {
        dart.throw(new core.ArgumentError.new("duration cannot be null"));
      }
      return src__samplers__buffer_strategy._OnStreamSampler$(T, S, core.Null).new(stream, bufferHandler, scheduleHandler, StreamOfNull().periodic(duration));
    }, dart.fnType(src__samplers__buffer_strategy._OnStreamSampler$(T, S, core.Null), [async.Stream$(T), dart.fnType(dart.void, [T, async.EventSink$(S)], [core.int]), dart.fnType(dart.void, [S, async.EventSink$(S)], [core.int])]));
  };
  src__samplers__buffer_strategy.onFuture = function(T, S, O, onFuture) {
    return dart.fn((stream, bufferHandler, scheduleHandler) => {
      if (onFuture == null) {
        dart.throw(new core.ArgumentError.new("onFuture cannot be null"));
      }
      return src__samplers__buffer_strategy._OnStreamSampler$(T, S, O).new(stream, bufferHandler, scheduleHandler, src__samplers__buffer_strategy._onFutureSampler(O, onFuture));
    }, dart.fnType(src__samplers__buffer_strategy._OnStreamSampler$(T, S, O), [async.Stream$(T), dart.fnType(dart.void, [T, async.EventSink$(S)], [core.int]), dart.fnType(dart.void, [S, async.EventSink$(S)], [core.int])]));
  };
  src__samplers__buffer_strategy._onFutureSampler = function(O, onFuture) {
    return new (async._AsyncStarImpl$(O)).new(function* _onFutureSampler(stream) {
      if (stream.add(yield onFuture())) return;
      yield;
      if (stream.addStream(src__samplers__buffer_strategy._onFutureSampler(O, onFuture))) return;
      yield;
    }).stream;
  };
  src__samplers__buffer_strategy.onTest = function(T, S, onTest) {
    return dart.fn((stream, bufferHandler, scheduleHandler) => src__samplers__buffer_strategy._OnTestSampler$(T, S).new(stream, bufferHandler, scheduleHandler, onTest), dart.fnType(src__samplers__buffer_strategy._OnTestSampler$(T, S), [async.Stream$(T), dart.fnType(dart.void, [T, async.EventSink$(S)], [core.int]), dart.fnType(dart.void, [S, async.EventSink$(S)], [core.int])]));
  };
  const _is__OnStreamSampler_default = Symbol('_is__OnStreamSampler_default');
  src__samplers__buffer_strategy._OnStreamSampler$ = dart.generic((T, S, O) => {
    let TAndEventSinkOfSToNull = () => (TAndEventSinkOfSToNull = dart.constFn(dart.fnType(core.Null, [T, EventSinkOfS()])))();
    let StreamTransformerOfT$S = () => (StreamTransformerOfT$S = dart.constFn(async.StreamTransformer$(T, S)))();
    let DoStreamTransformerOfT = () => (DoStreamTransformerOfT = dart.constFn(src__transformers__do.DoStreamTransformer$(T)))();
    let _OnStreamSamplerOfT$S$O = () => (_OnStreamSamplerOfT$S$O = dart.constFn(src__samplers__buffer_strategy._OnStreamSampler$(T, S, O)))();
    let EventSinkOfS = () => (EventSinkOfS = dart.constFn(async.EventSink$(S)))();
    let SAndEventSinkOfSToNull = () => (SAndEventSinkOfSToNull = dart.constFn(dart.fnType(core.Null, [S, EventSinkOfS()])))();
    let ObjectAndStackTraceAndEventSinkOfSTovoid = () => (ObjectAndStackTraceAndEventSinkOfSTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace, EventSinkOfS()])))();
    let StreamTransformerOfS$S = () => (StreamTransformerOfS$S = dart.constFn(async.StreamTransformer$(S, S)))();
    let SampleStreamTransformerOfS = () => (SampleStreamTransformerOfS = dart.constFn(src__transformers__sample.SampleStreamTransformer$(S)))();
    class _OnStreamSampler extends async.StreamView$(S) {
      static new(stream, bufferHandler, scheduleHandler, onStream) {
        let doneController = StreamControllerOfbool().new();
        if (onStream == null) {
          dart.throw(new core.ArgumentError.new("onStream cannot be null"));
        }
        let ticker = onStream.transform(dart.dynamic, new (TakeUntilStreamTransformerOfNull$dynamic()).new(doneController.stream));
        function onDone() {
          if (dart.test(doneController.isClosed)) return;
          doneController.add(true);
          doneController.close();
        }
        dart.fn(onDone, VoidTovoid());
        let scheduler = stream.transform(T, new (DoStreamTransformerOfT()).new({onDone: onDone, onCancel: onDone})).transform(S, StreamTransformerOfT$S().fromHandlers({handleData: dart.fn((data, sink) => {
            bufferHandler(data, sink, 0);
          }, TAndEventSinkOfSToNull()), handleError: dart.fn((error, s, sink) => sink.addError(error, s), ObjectAndStackTraceAndEventSinkOfSTovoid())})).transform(S, new (SampleStreamTransformerOfS()).new(ticker, {sampleOnValueOnly: false})).transform(S, StreamTransformerOfS$S().fromHandlers({handleData: dart.fn((data, sink) => {
            scheduleHandler(data, sink, 0);
          }, SAndEventSinkOfSToNull()), handleError: dart.fn((error, s, sink) => sink.addError(error, s), ObjectAndStackTraceAndEventSinkOfSTovoid())}));
        return new (_OnStreamSamplerOfT$S$O()).__(scheduler);
      }
    }
    (_OnStreamSampler.__ = function(state) {
      _OnStreamSampler.__proto__.new.call(this, state);
    }).prototype = _OnStreamSampler.prototype;
    dart.addTypeTests(_OnStreamSampler);
    _OnStreamSampler.prototype[_is__OnStreamSampler_default] = true;
    return _OnStreamSampler;
  });
  src__samplers__buffer_strategy._OnStreamSampler = src__samplers__buffer_strategy._OnStreamSampler$();
  dart.addTypeTests(src__samplers__buffer_strategy._OnStreamSampler, _is__OnStreamSampler_default);
  const _is__OnCountSampler_default = Symbol('_is__OnCountSampler_default');
  src__samplers__buffer_strategy._OnCountSampler$ = dart.generic((T, S) => {
    let TAndEventSinkOfSToNull = () => (TAndEventSinkOfSToNull = dart.constFn(dart.fnType(core.Null, [T, EventSinkOfS()])))();
    let StreamTransformerOfT$S = () => (StreamTransformerOfT$S = dart.constFn(async.StreamTransformer$(T, S)))();
    let _OnCountSamplerOfT$S = () => (_OnCountSamplerOfT$S = dart.constFn(src__samplers__buffer_strategy._OnCountSampler$(T, S)))();
    let STobool = () => (STobool = dart.constFn(dart.fnType(core.bool, [S])))();
    let EventSinkOfS = () => (EventSinkOfS = dart.constFn(async.EventSink$(S)))();
    let SAndEventSinkOfSToNull = () => (SAndEventSinkOfSToNull = dart.constFn(dart.fnType(core.Null, [S, EventSinkOfS()])))();
    let ObjectAndStackTraceAndEventSinkOfSTovoid = () => (ObjectAndStackTraceAndEventSinkOfSTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace, EventSinkOfS()])))();
    let StreamTransformerOfS$S = () => (StreamTransformerOfS$S = dart.constFn(async.StreamTransformer$(S, S)))();
    class _OnCountSampler extends async.StreamView$(S) {
      static new(stream, bufferHandler, scheduleHandler, count, startBufferEvery) {
        if (startBufferEvery === void 0) startBufferEvery = 0;
        let eventIndex = 0;
        if (count == null) {
          dart.throw(new core.ArgumentError.new("count cannot be null"));
        } else if (dart.notNull(count) < 1) {
          dart.throw(new core.ArgumentError.new("count needs to be greater than 1, currently it is: " + dart.str(count)));
        }
        if (dart.notNull(startBufferEvery) < 0) {
          dart.throw(new core.ArgumentError.new("startBufferEvery needs to be greater than, or equal to 0, currently it is: " + dart.str(startBufferEvery)));
        }
        function maybeNewBuffer(_) {
          return eventIndex[$modulo](count) === 0;
        }
        dart.fn(maybeNewBuffer, STobool());
        let scheduler = stream.transform(S, StreamTransformerOfT$S().fromHandlers({handleData: dart.fn((data, sink) => {
            if (++eventIndex > 0) bufferHandler(data, sink, startBufferEvery);
          }, TAndEventSinkOfSToNull()), handleError: dart.fn((error, s, sink) => sink.addError(error, s), ObjectAndStackTraceAndEventSinkOfSTovoid())})).where(maybeNewBuffer).transform(S, StreamTransformerOfS$S().fromHandlers({handleData: dart.fn((data, sink) => {
            eventIndex = eventIndex - dart.notNull(startBufferEvery);
            scheduleHandler(data, sink, startBufferEvery);
          }, SAndEventSinkOfSToNull()), handleError: dart.fn((error, s, sink) => sink.addError(error, s), ObjectAndStackTraceAndEventSinkOfSTovoid())}));
        return new (_OnCountSamplerOfT$S()).__(scheduler);
      }
    }
    (_OnCountSampler.__ = function(state) {
      _OnCountSampler.__proto__.new.call(this, state);
    }).prototype = _OnCountSampler.prototype;
    dart.addTypeTests(_OnCountSampler);
    _OnCountSampler.prototype[_is__OnCountSampler_default] = true;
    return _OnCountSampler;
  });
  src__samplers__buffer_strategy._OnCountSampler = src__samplers__buffer_strategy._OnCountSampler$();
  dart.addTypeTests(src__samplers__buffer_strategy._OnCountSampler, _is__OnCountSampler_default);
  const _is__OnTestSampler_default = Symbol('_is__OnTestSampler_default');
  src__samplers__buffer_strategy._OnTestSampler$ = dart.generic((T, S) => {
    let TAndEventSinkOfSToNull = () => (TAndEventSinkOfSToNull = dart.constFn(dart.fnType(core.Null, [T, EventSinkOfS()])))();
    let StreamTransformerOfT$S = () => (StreamTransformerOfT$S = dart.constFn(async.StreamTransformer$(T, S)))();
    let _OnTestSamplerOfT$S = () => (_OnTestSamplerOfT$S = dart.constFn(src__samplers__buffer_strategy._OnTestSampler$(T, S)))();
    let EventSinkOfS = () => (EventSinkOfS = dart.constFn(async.EventSink$(S)))();
    let SAndEventSinkOfSToNull = () => (SAndEventSinkOfSToNull = dart.constFn(dart.fnType(core.Null, [S, EventSinkOfS()])))();
    let ObjectAndStackTraceAndEventSinkOfSTovoid = () => (ObjectAndStackTraceAndEventSinkOfSTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace, EventSinkOfS()])))();
    let StreamTransformerOfS$S = () => (StreamTransformerOfS$S = dart.constFn(async.StreamTransformer$(S, S)))();
    let STobool = () => (STobool = dart.constFn(dart.fnType(core.bool, [S])))();
    class _OnTestSampler extends async.StreamView$(S) {
      static new(stream, bufferHandler, scheduleHandler, onTest) {
        let testResult = false;
        if (onTest == null) {
          dart.throw(new core.ArgumentError.new("onTest cannot be null"));
        }
        let scheduler = stream.transform(S, StreamTransformerOfT$S().fromHandlers({handleData: dart.fn((data, sink) => {
            testResult = onTest(data);
            bufferHandler(data, sink, 0);
          }, TAndEventSinkOfSToNull()), handleError: dart.fn((error, s, sink) => sink.addError(error, s), ObjectAndStackTraceAndEventSinkOfSTovoid())})).where(dart.fn(_ => testResult, STobool())).transform(S, StreamTransformerOfS$S().fromHandlers({handleData: dart.fn((data, sink) => {
            scheduleHandler(data, sink, 0);
          }, SAndEventSinkOfSToNull()), handleError: dart.fn((error, s, sink) => sink.addError(error, s), ObjectAndStackTraceAndEventSinkOfSTovoid())}));
        return new (_OnTestSamplerOfT$S()).__(scheduler);
      }
    }
    (_OnTestSampler.__ = function(state) {
      _OnTestSampler.__proto__.new.call(this, state);
    }).prototype = _OnTestSampler.prototype;
    dart.addTypeTests(_OnTestSampler);
    _OnTestSampler.prototype[_is__OnTestSampler_default] = true;
    return _OnTestSampler;
  });
  src__samplers__buffer_strategy._OnTestSampler = src__samplers__buffer_strategy._OnTestSampler$();
  dart.addTypeTests(src__samplers__buffer_strategy._OnTestSampler, _is__OnTestSampler_default);
  dart.trackLibraries("packages/rxdart/src/samplers/buffer_strategy.ddc", {
    "package:rxdart/src/samplers/utils.dart": src__samplers__utils,
    "package:rxdart/src/utils/notification.dart": src__utils__notification,
    "package:rxdart/src/transformers/do.dart": src__transformers__do,
    "package:rxdart/src/transformers/sample.dart": src__transformers__sample,
    "package:rxdart/src/transformers/take_until.dart": src__transformers__take_until,
    "package:rxdart/src/samplers/buffer_strategy.dart": src__samplers__buffer_strategy
  }, '{"version":3,"sourceRoot":"","sources":["../utils/notification.dart","../transformers/do.dart","../transformers/sample.dart","../transformers/take_until.dart","buffer_strategy.dart"],"names":[],"mappings":"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","file":"buffer_strategy.ddc.js"}');
  // Exports:
  return {
    src__samplers__utils: src__samplers__utils,
    src__utils__notification: src__utils__notification,
    src__transformers__do: src__transformers__do,
    src__transformers__sample: src__transformers__sample,
    src__transformers__take_until: src__transformers__take_until,
    src__samplers__buffer_strategy: src__samplers__buffer_strategy
  };
});

//# sourceMappingURL=buffer_strategy.ddc.js.map
