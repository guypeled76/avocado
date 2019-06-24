define(['dart_sdk', 'packages/rxdart/src/samplers/buffer_strategy'], function(dart_sdk, buffer_strategy) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const collection$ = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__samplers__buffer_strategy = buffer_strategy.src__samplers__buffer_strategy;
  const src__utils__notification = buffer_strategy.src__utils__notification;
  const _root = Object.create(null);
  const src__transformers__buffer = Object.create(_root);
  const src__transformers__buffer_with_count = Object.create(_root);
  const src__transformers__debounce = Object.create(_root);
  const src__transformers__default_if_empty = Object.create(_root);
  const src__transformers__delay = Object.create(_root);
  const src__transformers__dematerialize = Object.create(_root);
  const src__transformers__distinct_unique = Object.create(_root);
  const src__transformers__exhaust_map = Object.create(_root);
  const src__transformers__flat_map = Object.create(_root);
  const src__transformers__flat_map_latest = Object.create(_root);
  const src__transformers__ignore_elements = Object.create(_root);
  const src__transformers__interval = Object.create(_root);
  const src__transformers__map_to = Object.create(_root);
  const src__transformers__materialize = Object.create(_root);
  const src__utils__type_token = Object.create(_root);
  const src__transformers__of_type = Object.create(_root);
  const src__transformers__on_error_resume_next = Object.create(_root);
  const src__transformers__on_error_resume = Object.create(_root);
  const src__transformers__scan = Object.create(_root);
  const src__transformers__skip_until = Object.create(_root);
  const src__transformers__start_with = Object.create(_root);
  const src__transformers__start_with_many = Object.create(_root);
  const src__transformers__switch_if_empty = Object.create(_root);
  const src__transformers__switch_map = Object.create(_root);
  const src__transformers__throttle = Object.create(_root);
  const src__transformers__time_interval = Object.create(_root);
  const src__transformers__timestamp = Object.create(_root);
  const src__transformers__window = Object.create(_root);
  const src__transformers__with_latest_from = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $add = dartx.add;
  const $length = dartx.length;
  const $sublist = dartx.sublist;
  const $remove = dartx.remove;
  const $isEmpty = dartx.isEmpty;
  const $forEach = dartx.forEach;
  const $where = dartx.where;
  const $map = dartx.map;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $toString = dartx.toString;
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let __Tovoid = () => (__Tovoid = dart.constFn(dart.fnType(dart.void, [], [async.Future])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let JSArrayOfTimer = () => (JSArrayOfTimer = dart.constFn(_interceptors.JSArray$(async.Timer)))();
  let TimerTovoid = () => (TimerTovoid = dart.constFn(dart.fnType(dart.void, [async.Timer])))();
  let __ToNull = () => (__ToNull = dart.constFn(dart.fnType(core.Null, [], [async.Future])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let ListOfStreamSubscription = () => (ListOfStreamSubscription = dart.constFn(core.List$(async.StreamSubscription)))();
  let FutureTobool = () => (FutureTobool = dart.constFn(dart.fnType(core.bool, [async.Future])))();
  let StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let TypeTokenOfbool = () => (TypeTokenOfbool = dart.constFn(src__utils__type_token.TypeToken$(core.bool)))();
  let TypeTokenOfdouble = () => (TypeTokenOfdouble = dart.constFn(src__utils__type_token.TypeToken$(core.double)))();
  let TypeTokenOfint = () => (TypeTokenOfint = dart.constFn(src__utils__type_token.TypeToken$(core.int)))();
  let TypeTokenOfnum = () => (TypeTokenOfnum = dart.constFn(src__utils__type_token.TypeToken$(core.num)))();
  let TypeTokenOfString = () => (TypeTokenOfString = dart.constFn(src__utils__type_token.TypeToken$(core.String)))();
  let TypeTokenOfSymbol = () => (TypeTokenOfSymbol = dart.constFn(src__utils__type_token.TypeToken$(core.Symbol)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  const _is_BufferStreamTransformer_default = Symbol('_is_BufferStreamTransformer_default');
  src__transformers__buffer.BufferStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let StreamOfListOfT = () => (StreamOfListOfT = dart.constFn(async.Stream$(ListOfT())))();
    let EventSinkOfListOfT = () => (EventSinkOfListOfT = dart.constFn(async.EventSink$(ListOfT())))();
    let TAndEventSinkOfListOfT__Tovoid = () => (TAndEventSinkOfListOfT__Tovoid = dart.constFn(dart.fnType(dart.void, [T, EventSinkOfListOfT()], [core.int])))();
    let ListOfTAndEventSinkOfListOfT__Tovoid = () => (ListOfTAndEventSinkOfListOfT__Tovoid = dart.constFn(dart.fnType(dart.void, [ListOfT(), EventSinkOfListOfT()], [core.int])))();
    let StreamOfTAndFnAndFnToStreamOfListOfT = () => (StreamOfTAndFnAndFnToStreamOfListOfT = dart.constFn(dart.fnType(StreamOfListOfT(), [StreamOfT(), TAndEventSinkOfListOfT__Tovoid(), ListOfTAndEventSinkOfListOfT__Tovoid()])))();
    class BufferStreamTransformer extends async.StreamTransformerBase$(T, core.List$(T)) {
      get sampler() {
        return this[sampler$];
      }
      set sampler(value) {
        super.sampler = value;
      }
      get exhaustBufferOnDone() {
        return this[exhaustBufferOnDone$];
      }
      set exhaustBufferOnDone(value) {
        super.exhaustBufferOnDone = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return src__transformers__buffer.BufferStreamTransformer._buildTransformer(T, this.sampler, this.exhaustBufferOnDone).bind(stream);
      }
      static _buildTransformer(T, scheduler, exhaustBufferOnDone) {
        src__transformers__buffer.BufferStreamTransformer.assertSampler(T, scheduler);
        return async.StreamTransformer$(T, core.List$(T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let buffer = _interceptors.JSArray$(T).of([]);
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            if (dart.test(exhaustBufferOnDone) && dart.test(buffer[$isNotEmpty])) controller.add(core.List$(T).from(buffer));
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(core.List$(T)).new({sync: true, onListen: dart.fn(() => {
              try {
                subscription = scheduler(input, dart.fn((data, sink, startBufferEvery) => {
                  if (startBufferEvery === void 0) startBufferEvery = null;
                  buffer[$add](data);
                  sink.add(buffer);
                }, dart.fnType(core.Null, [T, async.EventSink$(core.List$(T))], [core.int])), dart.fn((_, sink, startBufferEvery) => {
                  if (startBufferEvery === void 0) startBufferEvery = 0;
                  startBufferEvery != null ? startBufferEvery : 0;
                  sink.add(core.List$(T).unmodifiable(buffer));
                  buffer = dart.notNull(startBufferEvery) > 0 && dart.notNull(startBufferEvery) < dart.notNull(buffer[$length]) ? buffer[$sublist](startBufferEvery) : _interceptors.JSArray$(T).of([]);
                }, dart.fnType(core.Null, [core.List$(T), async.EventSink$(core.List$(T))], [core.int]))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              } catch (e) {
                let s = dart.stackTrace(e);
                controller.addError(e, s);
              }
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(core.List$(T)), [async.Stream$(T), core.bool])));
      }
      static assertSampler(T, scheduler) {
        if (scheduler == null) {
          dart.throw(new core.ArgumentError.new("scheduler cannot be null"));
        }
      }
    }
    (BufferStreamTransformer.new = function(sampler, opts) {
      let exhaustBufferOnDone = opts && 'exhaustBufferOnDone' in opts ? opts.exhaustBufferOnDone : true;
      this[sampler$] = sampler;
      this[exhaustBufferOnDone$] = exhaustBufferOnDone;
      BufferStreamTransformer.__proto__.new.call(this);
    }).prototype = BufferStreamTransformer.prototype;
    dart.addTypeTests(BufferStreamTransformer);
    BufferStreamTransformer.prototype[_is_BufferStreamTransformer_default] = true;
    const sampler$ = Symbol("BufferStreamTransformer.sampler");
    const exhaustBufferOnDone$ = Symbol("BufferStreamTransformer.exhaustBufferOnDone");
    dart.setMethodSignature(BufferStreamTransformer, () => ({
      __proto__: dart.getMethods(BufferStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(core.List$(T)), [core.Object])
    }));
    dart.setFieldSignature(BufferStreamTransformer, () => ({
      __proto__: dart.getFields(BufferStreamTransformer.__proto__),
      sampler: dart.finalFieldType(StreamOfTAndFnAndFnToStreamOfListOfT()),
      exhaustBufferOnDone: dart.finalFieldType(core.bool)
    }));
    return BufferStreamTransformer;
  });
  src__transformers__buffer.BufferStreamTransformer = src__transformers__buffer.BufferStreamTransformer$();
  dart.addTypeTests(src__transformers__buffer.BufferStreamTransformer, _is_BufferStreamTransformer_default);
  const _is_BufferWithCountStreamTransformer_default = Symbol('_is_BufferWithCountStreamTransformer_default');
  src__transformers__buffer_with_count.BufferWithCountStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class BufferWithCountStreamTransformer extends async.StreamTransformerBase$(T, core.List$(T)) {
      get count() {
        return this[count$];
      }
      set count(value) {
        super.count = value;
      }
      get skip() {
        return this[skip$];
      }
      set skip(value) {
        super.skip = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return src__transformers__buffer_with_count.BufferWithCountStreamTransformer._buildTransformer(T, this.count, this.skip).bind(stream);
      }
      static _buildTransformer(T, count, startBufferEvery) {
        src__transformers__buffer_with_count.BufferWithCountStreamTransformer.assertCountAndSkip(count, startBufferEvery);
        return async.StreamTransformer$(T, core.List$(T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(core.List$(T)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.transform(core.List$(T), new (src__transformers__buffer.BufferStreamTransformer$(T)).new(src__samplers__buffer_strategy.onCount(T, core.List$(T), count, startBufferEvery))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(core.List$(T)), [async.Stream$(T), core.bool])));
      }
      static assertCountAndSkip(count, skip) {
        if (skip === void 0) skip = null;
        let skipAmount = skip == null ? count : skip;
        if (count == null) {
          dart.throw(new core.ArgumentError.new("count cannot be null"));
        } else if (dart.notNull(skipAmount) <= 0 || dart.notNull(skipAmount) > dart.notNull(count)) {
          dart.throw(new core.ArgumentError.new("skip has to be greater than zero and smaller than count"));
        }
      }
    }
    (BufferWithCountStreamTransformer.new = function(count, skip) {
      if (skip === void 0) skip = null;
      this[count$] = count;
      this[skip$] = skip;
      BufferWithCountStreamTransformer.__proto__.new.call(this);
    }).prototype = BufferWithCountStreamTransformer.prototype;
    dart.addTypeTests(BufferWithCountStreamTransformer);
    BufferWithCountStreamTransformer.prototype[_is_BufferWithCountStreamTransformer_default] = true;
    const count$ = Symbol("BufferWithCountStreamTransformer.count");
    const skip$ = Symbol("BufferWithCountStreamTransformer.skip");
    dart.setMethodSignature(BufferWithCountStreamTransformer, () => ({
      __proto__: dart.getMethods(BufferWithCountStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(core.List$(T)), [core.Object])
    }));
    dart.setFieldSignature(BufferWithCountStreamTransformer, () => ({
      __proto__: dart.getFields(BufferWithCountStreamTransformer.__proto__),
      count: dart.finalFieldType(core.int),
      skip: dart.finalFieldType(core.int)
    }));
    return BufferWithCountStreamTransformer;
  });
  src__transformers__buffer_with_count.BufferWithCountStreamTransformer = src__transformers__buffer_with_count.BufferWithCountStreamTransformer$();
  dart.addTypeTests(src__transformers__buffer_with_count.BufferWithCountStreamTransformer, _is_BufferWithCountStreamTransformer_default);
  const _is_DebounceStreamTransformer_default = Symbol('_is_DebounceStreamTransformer_default');
  src__transformers__debounce.DebounceStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class DebounceStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, duration) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let lastEvent = null;
          let controller = null;
          let subscription = null;
          let timer = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                lastEvent = value;
                try {
                  src__transformers__debounce.DebounceStreamTransformer._cancelTimerIfActive(timer);
                  timer = async.Timer.new(duration, dart.fn(() => {
                    controller.add(lastEvent);
                    lastEvent = null;
                  }, VoidToNull()));
                } catch (e) {
                  let s = dart.stackTrace(e);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  src__transformers__debounce.DebounceStreamTransformer._cancelTimerIfActive(timer);
                  if (lastEvent != null) {
                    async.scheduleMicrotask(dart.fn(() => {
                      controller.add(lastEvent);
                      controller.close();
                    }, VoidToNull()));
                  } else {
                    controller.close();
                  }
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              src__transformers__debounce.DebounceStreamTransformer._cancelTimerIfActive(timer);
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
      static _cancelTimerIfActive(_timer) {
        if (_timer != null && dart.test(_timer.isActive)) {
          _timer.cancel();
        }
      }
    }
    (DebounceStreamTransformer.new = function(duration) {
      this[transformer] = src__transformers__debounce.DebounceStreamTransformer._buildTransformer(T, duration);
      DebounceStreamTransformer.__proto__.new.call(this);
    }).prototype = DebounceStreamTransformer.prototype;
    dart.addTypeTests(DebounceStreamTransformer);
    DebounceStreamTransformer.prototype[_is_DebounceStreamTransformer_default] = true;
    const transformer = Symbol("DebounceStreamTransformer.transformer");
    dart.setMethodSignature(DebounceStreamTransformer, () => ({
      __proto__: dart.getMethods(DebounceStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(DebounceStreamTransformer, () => ({
      __proto__: dart.getFields(DebounceStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return DebounceStreamTransformer;
  });
  src__transformers__debounce.DebounceStreamTransformer = src__transformers__debounce.DebounceStreamTransformer$();
  dart.addTypeTests(src__transformers__debounce.DebounceStreamTransformer, _is_DebounceStreamTransformer_default);
  const _is_DefaultIfEmptyStreamTransformer_default = Symbol('_is_DefaultIfEmptyStreamTransformer_default');
  src__transformers__default_if_empty.DefaultIfEmptyStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class DefaultIfEmptyStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, defaultValue) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let hasEvent = false;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                hasEvent = true;
                try {
                  controller.add(value);
                } catch (e) {
                  let s = dart.stackTrace(e);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (!hasEvent) controller.add(defaultValue);
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DefaultIfEmptyStreamTransformer.new = function(defaultValue) {
      this[transformer] = src__transformers__default_if_empty.DefaultIfEmptyStreamTransformer._buildTransformer(T, defaultValue);
      DefaultIfEmptyStreamTransformer.__proto__.new.call(this);
    }).prototype = DefaultIfEmptyStreamTransformer.prototype;
    dart.addTypeTests(DefaultIfEmptyStreamTransformer);
    DefaultIfEmptyStreamTransformer.prototype[_is_DefaultIfEmptyStreamTransformer_default] = true;
    const transformer = Symbol("DefaultIfEmptyStreamTransformer.transformer");
    dart.setMethodSignature(DefaultIfEmptyStreamTransformer, () => ({
      __proto__: dart.getMethods(DefaultIfEmptyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(DefaultIfEmptyStreamTransformer, () => ({
      __proto__: dart.getFields(DefaultIfEmptyStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return DefaultIfEmptyStreamTransformer;
  });
  src__transformers__default_if_empty.DefaultIfEmptyStreamTransformer = src__transformers__default_if_empty.DefaultIfEmptyStreamTransformer$();
  dart.addTypeTests(src__transformers__default_if_empty.DefaultIfEmptyStreamTransformer, _is_DefaultIfEmptyStreamTransformer_default);
  const _is_DelayStreamTransformer_default = Symbol('_is_DelayStreamTransformer_default');
  src__transformers__delay.DelayStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class DelayStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, duration) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let onDoneCalled = false, hasNoEvents = true;
          let timers = JSArrayOfTimer().of([]);
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                hasNoEvents = false;
                try {
                  let timer = null;
                  timer = async.Timer.new(duration, dart.fn(() => {
                    controller.add(value);
                    timers[$remove](timer);
                    if (onDoneCalled && dart.test(timers[$isEmpty])) {
                      controller.close();
                    }
                  }, VoidToNull()));
                  timers[$add](timer);
                } catch (e) {
                  let s = dart.stackTrace(e);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (hasNoEvents) controller.close();
                  onDoneCalled = true;
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              timers[$forEach](dart.fn(src__transformers__delay.DelayStreamTransformer._cancelTimerIfActive, TimerTovoid()));
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
      static _cancelTimerIfActive(_timer) {
        if (_timer != null && dart.test(_timer.isActive)) {
          _timer.cancel();
        }
      }
    }
    (DelayStreamTransformer.new = function(duration) {
      this[transformer] = src__transformers__delay.DelayStreamTransformer._buildTransformer(T, duration);
      DelayStreamTransformer.__proto__.new.call(this);
    }).prototype = DelayStreamTransformer.prototype;
    dart.addTypeTests(DelayStreamTransformer);
    DelayStreamTransformer.prototype[_is_DelayStreamTransformer_default] = true;
    const transformer = Symbol("DelayStreamTransformer.transformer");
    dart.setMethodSignature(DelayStreamTransformer, () => ({
      __proto__: dart.getMethods(DelayStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(DelayStreamTransformer, () => ({
      __proto__: dart.getFields(DelayStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return DelayStreamTransformer;
  });
  src__transformers__delay.DelayStreamTransformer = src__transformers__delay.DelayStreamTransformer$();
  dart.addTypeTests(src__transformers__delay.DelayStreamTransformer, _is_DelayStreamTransformer_default);
  const _is_DematerializeStreamTransformer_default = Symbol('_is_DematerializeStreamTransformer_default');
  src__transformers__dematerialize.DematerializeStreamTransformer$ = dart.generic(T => {
    let NotificationOfT = () => (NotificationOfT = dart.constFn(src__utils__notification.Notification$(T)))();
    let StreamOfNotificationOfT = () => (StreamOfNotificationOfT = dart.constFn(async.Stream$(NotificationOfT())))();
    let StreamTransformerOfNotificationOfT$T = () => (StreamTransformerOfNotificationOfT$T = dart.constFn(async.StreamTransformer$(NotificationOfT(), T)))();
    class DematerializeStreamTransformer extends async.StreamTransformerBase$(src__utils__notification.Notification$(T), T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfNotificationOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T) {
        return async.StreamTransformer$(src__utils__notification.Notification$(T), T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(notification => {
                try {
                  if (dart.test(notification.isOnData)) {
                    controller.add(notification.value);
                  } else if (dart.test(notification.isOnDone)) {
                    controller.close();
                  } else if (dart.test(notification.isOnError)) {
                    controller.addError(notification.error, notification.stackTrace);
                  }
                } catch (e) {
                  let s = dart.stackTrace(e);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [src__utils__notification.Notification$(T)])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
            }, __ToNull()), onResume: dart.fn(() => {
              subscription.resume();
            }, VoidToNull()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(src__utils__notification.Notification$(T)), core.bool])));
      }
    }
    (DematerializeStreamTransformer.new = function() {
      this[transformer] = src__transformers__dematerialize.DematerializeStreamTransformer._buildTransformer(T);
      DematerializeStreamTransformer.__proto__.new.call(this);
    }).prototype = DematerializeStreamTransformer.prototype;
    dart.addTypeTests(DematerializeStreamTransformer);
    DematerializeStreamTransformer.prototype[_is_DematerializeStreamTransformer_default] = true;
    const transformer = Symbol("DematerializeStreamTransformer.transformer");
    dart.setMethodSignature(DematerializeStreamTransformer, () => ({
      __proto__: dart.getMethods(DematerializeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(DematerializeStreamTransformer, () => ({
      __proto__: dart.getFields(DematerializeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfNotificationOfT$T())
    }));
    return DematerializeStreamTransformer;
  });
  src__transformers__dematerialize.DematerializeStreamTransformer = src__transformers__dematerialize.DematerializeStreamTransformer$();
  dart.addTypeTests(src__transformers__dematerialize.DematerializeStreamTransformer, _is_DematerializeStreamTransformer_default);
  const _is_DistinctUniqueStreamTransformer_default = Symbol('_is_DistinctUniqueStreamTransformer_default');
  src__transformers__distinct_unique.DistinctUniqueStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class DistinctUniqueStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, equals, hashCode) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let collection = collection$.HashSet$(T).new({equals: equals, hashCode: hashCode});
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  if (dart.test(collection.add(value))) controller.add(value);
                } catch (e) {
                  let s = dart.stackTrace(e);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              collection.clear();
              collection = null;
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DistinctUniqueStreamTransformer.new = function(opts) {
      let equals = opts && 'equals' in opts ? opts.equals : null;
      let hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
      this[transformer] = src__transformers__distinct_unique.DistinctUniqueStreamTransformer._buildTransformer(T, equals, hashCode);
      DistinctUniqueStreamTransformer.__proto__.new.call(this);
    }).prototype = DistinctUniqueStreamTransformer.prototype;
    dart.addTypeTests(DistinctUniqueStreamTransformer);
    DistinctUniqueStreamTransformer.prototype[_is_DistinctUniqueStreamTransformer_default] = true;
    const transformer = Symbol("DistinctUniqueStreamTransformer.transformer");
    dart.setMethodSignature(DistinctUniqueStreamTransformer, () => ({
      __proto__: dart.getMethods(DistinctUniqueStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(DistinctUniqueStreamTransformer, () => ({
      __proto__: dart.getFields(DistinctUniqueStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return DistinctUniqueStreamTransformer;
  });
  src__transformers__distinct_unique.DistinctUniqueStreamTransformer = src__transformers__distinct_unique.DistinctUniqueStreamTransformer$();
  dart.addTypeTests(src__transformers__distinct_unique.DistinctUniqueStreamTransformer, _is_DistinctUniqueStreamTransformer_default);
  const _is_ExhaustMapStreamTransformer_default = Symbol('_is_ExhaustMapStreamTransformer_default');
  src__transformers__exhaust_map.ExhaustMapStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$S = () => (StreamTransformerOfT$S = dart.constFn(async.StreamTransformer$(T, S)))();
    class ExhaustMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
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
      static _buildTransformer(T, S, mapper) {
        return async.StreamTransformer$(T, S).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let inputSubscription = null;
          let outputSubscription = null;
          let inputClosed = false, outputIsEmitting = false;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              inputSubscription = input.listen(dart.fn(value => {
                try {
                  if (!outputIsEmitting) {
                    outputIsEmitting = true;
                    outputSubscription = mapper(value).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                        outputIsEmitting = false;
                        if (inputClosed) controller.close();
                      }, VoidToNull())});
                  }
                } catch (e) {
                  let s = dart.stackTrace(e);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  inputClosed = true;
                  if (!outputIsEmitting) controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              inputSubscription.pause(resumeSignal);
              let t = outputSubscription;
              t == null ? null : t.pause(resumeSignal);
            }, __ToNull()), onResume: dart.fn(() => {
              inputSubscription.resume();
              let t = outputSubscription;
              t == null ? null : t.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              yield inputSubscription.cancel();
              if (outputIsEmitting) yield outputSubscription.cancel();
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (ExhaustMapStreamTransformer.new = function(mapper) {
      this[transformer] = src__transformers__exhaust_map.ExhaustMapStreamTransformer._buildTransformer(T, S, mapper);
      ExhaustMapStreamTransformer.__proto__.new.call(this);
    }).prototype = ExhaustMapStreamTransformer.prototype;
    dart.addTypeTests(ExhaustMapStreamTransformer);
    ExhaustMapStreamTransformer.prototype[_is_ExhaustMapStreamTransformer_default] = true;
    const transformer = Symbol("ExhaustMapStreamTransformer.transformer");
    dart.setMethodSignature(ExhaustMapStreamTransformer, () => ({
      __proto__: dart.getMethods(ExhaustMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setFieldSignature(ExhaustMapStreamTransformer, () => ({
      __proto__: dart.getFields(ExhaustMapStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$S())
    }));
    return ExhaustMapStreamTransformer;
  });
  src__transformers__exhaust_map.ExhaustMapStreamTransformer = src__transformers__exhaust_map.ExhaustMapStreamTransformer$();
  dart.addTypeTests(src__transformers__exhaust_map.ExhaustMapStreamTransformer, _is_ExhaustMapStreamTransformer_default);
  const _is_FlatMapStreamTransformer_default = Symbol('_is_FlatMapStreamTransformer_default');
  src__transformers__flat_map.FlatMapStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$S = () => (StreamTransformerOfT$S = dart.constFn(async.StreamTransformer$(T, S)))();
    class FlatMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
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
      static _buildTransformer(T, S, mapper) {
        return async.StreamTransformer$(T, S).new(dart.fn((input, cancelOnError) => {
          let subscriptions = _interceptors.JSArray$(async.StreamSubscription$(S)).of([]);
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let closeAfterNextEvent = false, hasMainEvent = false, openStreams = 0;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let otherStream = mapper(value);
                  hasMainEvent = true;
                  openStreams++;
                  otherSubscription = otherStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                      openStreams--;
                      subscriptions[$remove](otherSubscription);
                      if (closeAfterNextEvent && openStreams === 0) controller.close();
                    }, VoidToNull())});
                  subscriptions[$add](otherSubscription);
                } catch (e) {
                  let s = dart.stackTrace(e);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (!hasMainEvent || openStreams === 0)
                    controller.close();
                  else
                    closeAfterNextEvent = true;
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
              subscriptions[$forEach](dart.fn(otherSubscription => otherSubscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(S)])));
            }, __ToNull()), onResume: dart.fn(() => {
              subscription.resume();
              subscriptions[$forEach](dart.fn(otherSubscription => otherSubscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(S)])));
            }, VoidToNull()), onCancel: dart.fn(() => {
              let list = ListOfStreamSubscription().from(subscriptions);
              list[$add](subscription);
              return async.Future.wait(dart.dynamic, list[$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool())));
            }, VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (FlatMapStreamTransformer.new = function(mapper) {
      this[transformer] = src__transformers__flat_map.FlatMapStreamTransformer._buildTransformer(T, S, mapper);
      FlatMapStreamTransformer.__proto__.new.call(this);
    }).prototype = FlatMapStreamTransformer.prototype;
    dart.addTypeTests(FlatMapStreamTransformer);
    FlatMapStreamTransformer.prototype[_is_FlatMapStreamTransformer_default] = true;
    const transformer = Symbol("FlatMapStreamTransformer.transformer");
    dart.setMethodSignature(FlatMapStreamTransformer, () => ({
      __proto__: dart.getMethods(FlatMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setFieldSignature(FlatMapStreamTransformer, () => ({
      __proto__: dart.getFields(FlatMapStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$S())
    }));
    return FlatMapStreamTransformer;
  });
  src__transformers__flat_map.FlatMapStreamTransformer = src__transformers__flat_map.FlatMapStreamTransformer$();
  dart.addTypeTests(src__transformers__flat_map.FlatMapStreamTransformer, _is_FlatMapStreamTransformer_default);
  const _is_FlatMapLatestStreamTransformer_default = Symbol('_is_FlatMapLatestStreamTransformer_default');
  src__transformers__flat_map_latest.FlatMapLatestStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$S = () => (StreamTransformerOfT$S = dart.constFn(async.StreamTransformer$(T, S)))();
    class FlatMapLatestStreamTransformer extends async.StreamTransformerBase$(T, S) {
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
      static _buildTransformer(T, S, mapper) {
        return async.StreamTransformer$(T, S).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let leftClosed = false, rightClosed = false, hasMainEvent = false;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let t = otherSubscription;
                  t == null ? null : t.cancel();
                  hasMainEvent = true;
                  otherSubscription = mapper(value).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                      rightClosed = true;
                      if (leftClosed) controller.close();
                    }, VoidToNull())});
                } catch (e) {
                  let s = dart.stackTrace(e);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  leftClosed = true;
                  if (rightClosed || !hasMainEvent) controller.close();
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
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (FlatMapLatestStreamTransformer.new = function(mapper) {
      this[transformer] = src__transformers__flat_map_latest.FlatMapLatestStreamTransformer._buildTransformer(T, S, mapper);
      FlatMapLatestStreamTransformer.__proto__.new.call(this);
    }).prototype = FlatMapLatestStreamTransformer.prototype;
    dart.addTypeTests(FlatMapLatestStreamTransformer);
    FlatMapLatestStreamTransformer.prototype[_is_FlatMapLatestStreamTransformer_default] = true;
    const transformer = Symbol("FlatMapLatestStreamTransformer.transformer");
    dart.setMethodSignature(FlatMapLatestStreamTransformer, () => ({
      __proto__: dart.getMethods(FlatMapLatestStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setFieldSignature(FlatMapLatestStreamTransformer, () => ({
      __proto__: dart.getFields(FlatMapLatestStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$S())
    }));
    return FlatMapLatestStreamTransformer;
  });
  src__transformers__flat_map_latest.FlatMapLatestStreamTransformer = src__transformers__flat_map_latest.FlatMapLatestStreamTransformer$();
  dart.addTypeTests(src__transformers__flat_map_latest.FlatMapLatestStreamTransformer, _is_FlatMapLatestStreamTransformer_default);
  const _is_IgnoreElementsStreamTransformer_default = Symbol('_is_IgnoreElementsStreamTransformer_default');
  src__transformers__ignore_elements.IgnoreElementsStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class IgnoreElementsStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(null, {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => controller.close(), VoidToFuture()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (IgnoreElementsStreamTransformer.new = function() {
      this[transformer] = src__transformers__ignore_elements.IgnoreElementsStreamTransformer._buildTransformer(T);
      IgnoreElementsStreamTransformer.__proto__.new.call(this);
    }).prototype = IgnoreElementsStreamTransformer.prototype;
    dart.addTypeTests(IgnoreElementsStreamTransformer);
    IgnoreElementsStreamTransformer.prototype[_is_IgnoreElementsStreamTransformer_default] = true;
    const transformer = Symbol("IgnoreElementsStreamTransformer.transformer");
    dart.setMethodSignature(IgnoreElementsStreamTransformer, () => ({
      __proto__: dart.getMethods(IgnoreElementsStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(IgnoreElementsStreamTransformer, () => ({
      __proto__: dart.getFields(IgnoreElementsStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return IgnoreElementsStreamTransformer;
  });
  src__transformers__ignore_elements.IgnoreElementsStreamTransformer = src__transformers__ignore_elements.IgnoreElementsStreamTransformer$();
  dart.addTypeTests(src__transformers__ignore_elements.IgnoreElementsStreamTransformer, _is_IgnoreElementsStreamTransformer_default);
  const _is_IntervalStreamTransformer_default = Symbol('_is_IntervalStreamTransformer_default');
  src__transformers__interval.IntervalStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class IntervalStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, duration) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let completer = async.Completer$(T).new();
                  async.Timer.new(duration, dart.fn(() => completer.complete(value), VoidTovoid()));
                  subscription.pause(completer.future.then(T, dart.fn(event => {
                    controller.add(event);
                    return event;
                  }, dart.fnType(T, [T]))));
                } catch (e) {
                  let s = dart.stackTrace(e);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(() => subscription.pause(), VoidTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (IntervalStreamTransformer.new = function(duration) {
      this[transformer] = src__transformers__interval.IntervalStreamTransformer._buildTransformer(T, duration);
      IntervalStreamTransformer.__proto__.new.call(this);
    }).prototype = IntervalStreamTransformer.prototype;
    dart.addTypeTests(IntervalStreamTransformer);
    IntervalStreamTransformer.prototype[_is_IntervalStreamTransformer_default] = true;
    const transformer = Symbol("IntervalStreamTransformer.transformer");
    dart.setMethodSignature(IntervalStreamTransformer, () => ({
      __proto__: dart.getMethods(IntervalStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(IntervalStreamTransformer, () => ({
      __proto__: dart.getFields(IntervalStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return IntervalStreamTransformer;
  });
  src__transformers__interval.IntervalStreamTransformer = src__transformers__interval.IntervalStreamTransformer$();
  dart.addTypeTests(src__transformers__interval.IntervalStreamTransformer, _is_IntervalStreamTransformer_default);
  const _is_MapToStreamTransformer_default = Symbol('_is_MapToStreamTransformer_default');
  src__transformers__map_to.MapToStreamTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let StreamTransformerOfS$T = () => (StreamTransformerOfS$T = dart.constFn(async.StreamTransformer$(S, T)))();
    class MapToStreamTransformer extends async.StreamTransformerBase$(S, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfS()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(S, T, value) {
        return async.StreamTransformer$(S, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(_ => controller.add(value), dart.fnType(dart.void, [S])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(S), core.bool])));
      }
    }
    (MapToStreamTransformer.new = function(value) {
      this[transformer] = src__transformers__map_to.MapToStreamTransformer._buildTransformer(S, T, value);
      MapToStreamTransformer.__proto__.new.call(this);
    }).prototype = MapToStreamTransformer.prototype;
    dart.addTypeTests(MapToStreamTransformer);
    MapToStreamTransformer.prototype[_is_MapToStreamTransformer_default] = true;
    const transformer = Symbol("MapToStreamTransformer.transformer");
    dart.setMethodSignature(MapToStreamTransformer, () => ({
      __proto__: dart.getMethods(MapToStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(MapToStreamTransformer, () => ({
      __proto__: dart.getFields(MapToStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfS$T())
    }));
    return MapToStreamTransformer;
  });
  src__transformers__map_to.MapToStreamTransformer = src__transformers__map_to.MapToStreamTransformer$();
  dart.addTypeTests(src__transformers__map_to.MapToStreamTransformer, _is_MapToStreamTransformer_default);
  const _is_MaterializeStreamTransformer_default = Symbol('_is_MaterializeStreamTransformer_default');
  src__transformers__materialize.MaterializeStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let NotificationOfT = () => (NotificationOfT = dart.constFn(src__utils__notification.Notification$(T)))();
    let StreamTransformerOfT$NotificationOfT = () => (StreamTransformerOfT$NotificationOfT = dart.constFn(async.StreamTransformer$(T, NotificationOfT())))();
    class MaterializeStreamTransformer extends async.StreamTransformerBase$(T, src__utils__notification.Notification$(T)) {
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
      static _buildTransformer(T) {
        return async.StreamTransformer$(T, src__utils__notification.Notification$(T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(src__utils__notification.Notification$(T)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  controller.add(src__utils__notification.Notification$(T).onData(value));
                } catch (e) {
                  let s = dart.stackTrace(e);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.fn((e, s) => {
                  controller.add(src__utils__notification.Notification$(T).onError(e, s));
                }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
                  controller.add(src__utils__notification.Notification$(T).onDone());
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
            }, __ToNull()), onResume: dart.fn(() => {
              subscription.resume();
            }, VoidToNull()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(src__utils__notification.Notification$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (MaterializeStreamTransformer.new = function() {
      this[transformer] = src__transformers__materialize.MaterializeStreamTransformer._buildTransformer(T);
      MaterializeStreamTransformer.__proto__.new.call(this);
    }).prototype = MaterializeStreamTransformer.prototype;
    dart.addTypeTests(MaterializeStreamTransformer);
    MaterializeStreamTransformer.prototype[_is_MaterializeStreamTransformer_default] = true;
    const transformer = Symbol("MaterializeStreamTransformer.transformer");
    dart.setMethodSignature(MaterializeStreamTransformer, () => ({
      __proto__: dart.getMethods(MaterializeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(src__utils__notification.Notification$(T)), [core.Object])
    }));
    dart.setFieldSignature(MaterializeStreamTransformer, () => ({
      __proto__: dart.getFields(MaterializeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$NotificationOfT())
    }));
    return MaterializeStreamTransformer;
  });
  src__transformers__materialize.MaterializeStreamTransformer = src__transformers__materialize.MaterializeStreamTransformer$();
  dart.addTypeTests(src__transformers__materialize.MaterializeStreamTransformer, _is_MaterializeStreamTransformer_default);
  const _is_TypeToken_default = Symbol('_is_TypeToken_default');
  src__utils__type_token.TypeToken$ = dart.generic(S => {
    class TypeToken extends core.Object {
      isType(other) {
        return S.is(other);
      }
      toType(other) {
        return S.as(other);
      }
    }
    (TypeToken.new = function() {
    }).prototype = TypeToken.prototype;
    dart.addTypeTests(TypeToken);
    TypeToken.prototype[_is_TypeToken_default] = true;
    dart.setMethodSignature(TypeToken, () => ({
      __proto__: dart.getMethods(TypeToken.__proto__),
      isType: dart.fnType(core.bool, [dart.dynamic]),
      toType: dart.fnType(S, [dart.dynamic])
    }));
    return TypeToken;
  });
  src__utils__type_token.TypeToken = src__utils__type_token.TypeToken$();
  dart.addTypeTests(src__utils__type_token.TypeToken, _is_TypeToken_default);
  dart.defineLazy(src__utils__type_token, {
    /*src__utils__type_token.kBool*/get kBool() {
      return dart.const(new (TypeTokenOfbool()).new());
    },
    /*src__utils__type_token.kDouble*/get kDouble() {
      return dart.const(new (TypeTokenOfdouble()).new());
    },
    /*src__utils__type_token.kInt*/get kInt() {
      return dart.const(new (TypeTokenOfint()).new());
    },
    /*src__utils__type_token.kNum*/get kNum() {
      return dart.const(new (TypeTokenOfnum()).new());
    },
    /*src__utils__type_token.kString*/get kString() {
      return dart.const(new (TypeTokenOfString()).new());
    },
    /*src__utils__type_token.kSymbol*/get kSymbol() {
      return dart.const(new (TypeTokenOfSymbol()).new());
    }
  });
  const _is_OfTypeStreamTransformer_default = Symbol('_is_OfTypeStreamTransformer_default');
  src__transformers__of_type.OfTypeStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$S = () => (StreamTransformerOfT$S = dart.constFn(async.StreamTransformer$(T, S)))();
    class OfTypeStreamTransformer extends async.StreamTransformerBase$(T, S) {
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
      static _buildTransformer(T, S, typeToken) {
        return async.StreamTransformer$(T, S).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  if (dart.test(typeToken.isType(value))) {
                    controller.add(typeToken.toType(value));
                  }
                } catch (e) {
                  let s = dart.stackTrace(e);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (OfTypeStreamTransformer.new = function(typeToken) {
      this[transformer] = src__transformers__of_type.OfTypeStreamTransformer._buildTransformer(T, S, typeToken);
      OfTypeStreamTransformer.__proto__.new.call(this);
    }).prototype = OfTypeStreamTransformer.prototype;
    dart.addTypeTests(OfTypeStreamTransformer);
    OfTypeStreamTransformer.prototype[_is_OfTypeStreamTransformer_default] = true;
    const transformer = Symbol("OfTypeStreamTransformer.transformer");
    dart.setMethodSignature(OfTypeStreamTransformer, () => ({
      __proto__: dart.getMethods(OfTypeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setFieldSignature(OfTypeStreamTransformer, () => ({
      __proto__: dart.getFields(OfTypeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$S())
    }));
    return OfTypeStreamTransformer;
  });
  src__transformers__of_type.OfTypeStreamTransformer = src__transformers__of_type.OfTypeStreamTransformer$();
  dart.addTypeTests(src__transformers__of_type.OfTypeStreamTransformer, _is_OfTypeStreamTransformer_default);
  const _is_OnErrorResumeNextStreamTransformer_default = Symbol('_is_OnErrorResumeNextStreamTransformer_default');
  src__transformers__on_error_resume_next.OnErrorResumeNextStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class OnErrorResumeNextStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, recoveryStream) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let inputSubscription = null;
          let recoverySubscription = null;
          let controller = null;
          let shouldCloseController = true;
          function safeClose() {
            if (shouldCloseController) {
              controller.close();
            }
          }
          dart.fn(safeClose, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              inputSubscription = input.listen(dart.bind(controller, 'add'), {onError: dart.fn((e, s) => {
                  shouldCloseController = false;
                  recoverySubscription = recoveryStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
                  inputSubscription.cancel();
                }, dynamicAnddynamicToNull()), onDone: safeClose, cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              let t = inputSubscription;
              t == null ? null : t.pause(resumeSignal);
              let t$ = recoverySubscription;
              t$ == null ? null : t$.pause(resumeSignal);
            }, __ToNull()), onResume: dart.fn(() => {
              let t = inputSubscription;
              t == null ? null : t.resume();
              let t$ = recoverySubscription;
              t$ == null ? null : t$.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, JSArrayOfFuture().of([(() => {
                let t = inputSubscription;
                return t == null ? null : t.cancel();
              })(), (() => {
                let t = recoverySubscription;
                return t == null ? null : t.cancel();
              })()])[$where](dart.fn(future => future != null, FutureTobool()))), VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (OnErrorResumeNextStreamTransformer.new = function(recoveryStream) {
      this[transformer] = src__transformers__on_error_resume_next.OnErrorResumeNextStreamTransformer._buildTransformer(T, recoveryStream);
      OnErrorResumeNextStreamTransformer.__proto__.new.call(this);
    }).prototype = OnErrorResumeNextStreamTransformer.prototype;
    dart.addTypeTests(OnErrorResumeNextStreamTransformer);
    OnErrorResumeNextStreamTransformer.prototype[_is_OnErrorResumeNextStreamTransformer_default] = true;
    const transformer = Symbol("OnErrorResumeNextStreamTransformer.transformer");
    dart.setMethodSignature(OnErrorResumeNextStreamTransformer, () => ({
      __proto__: dart.getMethods(OnErrorResumeNextStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(OnErrorResumeNextStreamTransformer, () => ({
      __proto__: dart.getFields(OnErrorResumeNextStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return OnErrorResumeNextStreamTransformer;
  });
  src__transformers__on_error_resume_next.OnErrorResumeNextStreamTransformer = src__transformers__on_error_resume_next.OnErrorResumeNextStreamTransformer$();
  dart.addTypeTests(src__transformers__on_error_resume_next.OnErrorResumeNextStreamTransformer, _is_OnErrorResumeNextStreamTransformer_default);
  const _is_OnErrorResumeStreamTransformer_default = Symbol('_is_OnErrorResumeStreamTransformer_default');
  src__transformers__on_error_resume.OnErrorResumeStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class OnErrorResumeStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, recoveryFn) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let inputSubscription = null;
          let recoverySubscription = null;
          let controller = null;
          let shouldCloseController = true;
          function safeClose() {
            if (shouldCloseController) {
              controller.close();
            }
          }
          dart.fn(safeClose, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              inputSubscription = input.listen(dart.bind(controller, 'add'), {onError: dart.fn((e, s) => {
                  shouldCloseController = false;
                  recoverySubscription = recoveryFn(e).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
                  inputSubscription.cancel();
                }, dynamicAnddynamicToNull()), onDone: safeClose, cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              let t = inputSubscription;
              t == null ? null : t.pause(resumeSignal);
              let t$ = recoverySubscription;
              t$ == null ? null : t$.pause(resumeSignal);
            }, __ToNull()), onResume: dart.fn(() => {
              let t = inputSubscription;
              t == null ? null : t.resume();
              let t$ = recoverySubscription;
              t$ == null ? null : t$.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, JSArrayOfFuture().of([(() => {
                let t = inputSubscription;
                return t == null ? null : t.cancel();
              })(), (() => {
                let t = recoverySubscription;
                return t == null ? null : t.cancel();
              })()])[$where](dart.fn(future => future != null, FutureTobool()))), VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (OnErrorResumeStreamTransformer.new = function(recoveryFn) {
      this[transformer] = src__transformers__on_error_resume.OnErrorResumeStreamTransformer._buildTransformer(T, recoveryFn);
      OnErrorResumeStreamTransformer.__proto__.new.call(this);
    }).prototype = OnErrorResumeStreamTransformer.prototype;
    dart.addTypeTests(OnErrorResumeStreamTransformer);
    OnErrorResumeStreamTransformer.prototype[_is_OnErrorResumeStreamTransformer_default] = true;
    const transformer = Symbol("OnErrorResumeStreamTransformer.transformer");
    dart.setMethodSignature(OnErrorResumeStreamTransformer, () => ({
      __proto__: dart.getMethods(OnErrorResumeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(OnErrorResumeStreamTransformer, () => ({
      __proto__: dart.getFields(OnErrorResumeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return OnErrorResumeStreamTransformer;
  });
  src__transformers__on_error_resume.OnErrorResumeStreamTransformer = src__transformers__on_error_resume.OnErrorResumeStreamTransformer$();
  dart.addTypeTests(src__transformers__on_error_resume.OnErrorResumeStreamTransformer, _is_OnErrorResumeStreamTransformer_default);
  const _is_ScanStreamTransformer_default = Symbol('_is_ScanStreamTransformer_default');
  src__transformers__scan.ScanStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let SAndTAndintToS = () => (SAndTAndintToS = dart.constFn(dart.fnType(S, [S, T, core.int])))();
    class ScanStreamTransformer extends async.StreamTransformerBase$(T, S) {
      get accumulator() {
        return this[accumulator$];
      }
      set accumulator(value) {
        super.accumulator = value;
      }
      get seed() {
        return this[seed$];
      }
      set seed(value) {
        super.seed = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return src__transformers__scan.ScanStreamTransformer._buildTransformer(T, S, this.accumulator, this.seed).bind(stream);
      }
      static _buildTransformer(T, S, accumulator, seed) {
        if (seed === void 0) seed = null;
        let index = 0;
        let acc = seed;
        return async.StreamTransformer$(T, S).fromHandlers({handleData: dart.fn((data, sink) => {
            acc = accumulator(acc, data, index++);
            sink.add(acc);
          }, dart.fnType(core.Null, [T, async.EventSink$(S)])), handleError: dart.fn((error, s, sink) => sink.addError(error), dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(S)]))});
      }
    }
    (ScanStreamTransformer.new = function(accumulator, seed) {
      if (seed === void 0) seed = null;
      this[accumulator$] = accumulator;
      this[seed$] = seed;
      ScanStreamTransformer.__proto__.new.call(this);
    }).prototype = ScanStreamTransformer.prototype;
    dart.addTypeTests(ScanStreamTransformer);
    ScanStreamTransformer.prototype[_is_ScanStreamTransformer_default] = true;
    const accumulator$ = Symbol("ScanStreamTransformer.accumulator");
    const seed$ = Symbol("ScanStreamTransformer.seed");
    dart.setMethodSignature(ScanStreamTransformer, () => ({
      __proto__: dart.getMethods(ScanStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setFieldSignature(ScanStreamTransformer, () => ({
      __proto__: dart.getFields(ScanStreamTransformer.__proto__),
      accumulator: dart.finalFieldType(SAndTAndintToS()),
      seed: dart.finalFieldType(S)
    }));
    return ScanStreamTransformer;
  });
  src__transformers__scan.ScanStreamTransformer = src__transformers__scan.ScanStreamTransformer$();
  dart.addTypeTests(src__transformers__scan.ScanStreamTransformer, _is_ScanStreamTransformer_default);
  const _is_SkipUntilStreamTransformer_default = Symbol('_is_SkipUntilStreamTransformer_default');
  src__transformers__skip_until.SkipUntilStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class SkipUntilStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
          dart.throw(new core.ArgumentError.new("otherStream cannot be null"));
        }
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let goTime = false;
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(data => {
                if (goTime) {
                  controller.add(data);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              otherSubscription = otherStream.listen(dart.fn(_ => {
                goTime = true;
                otherSubscription.cancel();
              }, dart.fnType(core.Null, [S])), {onError: dart.bind(controller, 'addError'), cancelOnError: cancelOnError, onDone: onDone});
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
    (SkipUntilStreamTransformer.new = function(otherStream) {
      this[transformer] = src__transformers__skip_until.SkipUntilStreamTransformer._buildTransformer(T, S, otherStream);
      SkipUntilStreamTransformer.__proto__.new.call(this);
    }).prototype = SkipUntilStreamTransformer.prototype;
    dart.addTypeTests(SkipUntilStreamTransformer);
    SkipUntilStreamTransformer.prototype[_is_SkipUntilStreamTransformer_default] = true;
    const transformer = Symbol("SkipUntilStreamTransformer.transformer");
    dart.setMethodSignature(SkipUntilStreamTransformer, () => ({
      __proto__: dart.getMethods(SkipUntilStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(SkipUntilStreamTransformer, () => ({
      __proto__: dart.getFields(SkipUntilStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return SkipUntilStreamTransformer;
  });
  src__transformers__skip_until.SkipUntilStreamTransformer = src__transformers__skip_until.SkipUntilStreamTransformer$();
  dart.addTypeTests(src__transformers__skip_until.SkipUntilStreamTransformer, _is_SkipUntilStreamTransformer_default);
  const _is_StartWithStreamTransformer_default = Symbol('_is_StartWithStreamTransformer_default');
  src__transformers__start_with.StartWithStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class StartWithStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, startValue) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              try {
                controller.add(startValue);
              } catch (e) {
                let s = dart.stackTrace(e);
                controller.addError(e, s);
              }
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (StartWithStreamTransformer.new = function(startValue) {
      this[transformer] = src__transformers__start_with.StartWithStreamTransformer._buildTransformer(T, startValue);
      StartWithStreamTransformer.__proto__.new.call(this);
    }).prototype = StartWithStreamTransformer.prototype;
    dart.addTypeTests(StartWithStreamTransformer);
    StartWithStreamTransformer.prototype[_is_StartWithStreamTransformer_default] = true;
    const transformer = Symbol("StartWithStreamTransformer.transformer");
    dart.setMethodSignature(StartWithStreamTransformer, () => ({
      __proto__: dart.getMethods(StartWithStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(StartWithStreamTransformer, () => ({
      __proto__: dart.getFields(StartWithStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return StartWithStreamTransformer;
  });
  src__transformers__start_with.StartWithStreamTransformer = src__transformers__start_with.StartWithStreamTransformer$();
  dart.addTypeTests(src__transformers__start_with.StartWithStreamTransformer, _is_StartWithStreamTransformer_default);
  const _is_StartWithManyStreamTransformer_default = Symbol('_is_StartWithManyStreamTransformer_default');
  src__transformers__start_with_many.StartWithManyStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class StartWithManyStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, startValues) {
        if (startValues == null) {
          dart.throw(new core.ArgumentError.new("startValues cannot be null"));
        }
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              startValues[$forEach](dart.bind(controller, 'add'));
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (StartWithManyStreamTransformer.new = function(startValues) {
      this[transformer] = src__transformers__start_with_many.StartWithManyStreamTransformer._buildTransformer(T, startValues);
      StartWithManyStreamTransformer.__proto__.new.call(this);
    }).prototype = StartWithManyStreamTransformer.prototype;
    dart.addTypeTests(StartWithManyStreamTransformer);
    StartWithManyStreamTransformer.prototype[_is_StartWithManyStreamTransformer_default] = true;
    const transformer = Symbol("StartWithManyStreamTransformer.transformer");
    dart.setMethodSignature(StartWithManyStreamTransformer, () => ({
      __proto__: dart.getMethods(StartWithManyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(StartWithManyStreamTransformer, () => ({
      __proto__: dart.getFields(StartWithManyStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return StartWithManyStreamTransformer;
  });
  src__transformers__start_with_many.StartWithManyStreamTransformer = src__transformers__start_with_many.StartWithManyStreamTransformer$();
  dart.addTypeTests(src__transformers__start_with_many.StartWithManyStreamTransformer, _is_StartWithManyStreamTransformer_default);
  const _is_SwitchIfEmptyStreamTransformer_default = Symbol('_is_SwitchIfEmptyStreamTransformer_default');
  src__transformers__switch_if_empty.SwitchIfEmptyStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class SwitchIfEmptyStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, fallbackStream) {
        if (fallbackStream == null) {
          dart.throw(new core.ArgumentError.new("fallbackStream cannot be null"));
        }
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let defaultSubscription = null;
          let switchSubscription = null;
          let hasEvent = false;
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            controller.close();
            let t = switchSubscription;
            t == null ? null : t.cancel();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              defaultSubscription = input.listen(dart.fn(value => {
                hasEvent = true;
                controller.add(value);
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (hasEvent) {
                    controller.close();
                  } else {
                    switchSubscription = fallbackStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
                  }
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              let t = defaultSubscription;
              t == null ? null : t.pause(resumeSignal);
              let t$ = switchSubscription;
              t$ == null ? null : t$.pause(resumeSignal);
            }, __ToNull()), onResume: dart.fn(() => {
              let t = defaultSubscription;
              t == null ? null : t.resume();
              let t$ = switchSubscription;
              t$ == null ? null : t$.resume();
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t = defaultSubscription;
              return t == null ? null : t.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (SwitchIfEmptyStreamTransformer.new = function(fallbackStream) {
      this[transformer] = src__transformers__switch_if_empty.SwitchIfEmptyStreamTransformer._buildTransformer(T, fallbackStream);
      SwitchIfEmptyStreamTransformer.__proto__.new.call(this);
    }).prototype = SwitchIfEmptyStreamTransformer.prototype;
    dart.addTypeTests(SwitchIfEmptyStreamTransformer);
    SwitchIfEmptyStreamTransformer.prototype[_is_SwitchIfEmptyStreamTransformer_default] = true;
    const transformer = Symbol("SwitchIfEmptyStreamTransformer.transformer");
    dart.setMethodSignature(SwitchIfEmptyStreamTransformer, () => ({
      __proto__: dart.getMethods(SwitchIfEmptyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(SwitchIfEmptyStreamTransformer, () => ({
      __proto__: dart.getFields(SwitchIfEmptyStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return SwitchIfEmptyStreamTransformer;
  });
  src__transformers__switch_if_empty.SwitchIfEmptyStreamTransformer = src__transformers__switch_if_empty.SwitchIfEmptyStreamTransformer$();
  dart.addTypeTests(src__transformers__switch_if_empty.SwitchIfEmptyStreamTransformer, _is_SwitchIfEmptyStreamTransformer_default);
  const _is_SwitchMapStreamTransformer_default = Symbol('_is_SwitchMapStreamTransformer_default');
  src__transformers__switch_map.SwitchMapStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$S = () => (StreamTransformerOfT$S = dart.constFn(async.StreamTransformer$(T, S)))();
    class SwitchMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
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
      static _buildTransformer(T, S, mapper) {
        return async.StreamTransformer$(T, S).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let leftClosed = false, rightClosed = false, hasMainEvent = false;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let t = otherSubscription;
                  t == null ? null : t.cancel();
                  hasMainEvent = true;
                  otherSubscription = mapper(value).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                      rightClosed = true;
                      if (leftClosed) controller.close();
                    }, VoidToNull())});
                } catch (e) {
                  let s = dart.stackTrace(e);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  leftClosed = true;
                  if (rightClosed || !hasMainEvent) controller.close();
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
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (SwitchMapStreamTransformer.new = function(mapper) {
      this[transformer] = src__transformers__switch_map.SwitchMapStreamTransformer._buildTransformer(T, S, mapper);
      SwitchMapStreamTransformer.__proto__.new.call(this);
    }).prototype = SwitchMapStreamTransformer.prototype;
    dart.addTypeTests(SwitchMapStreamTransformer);
    SwitchMapStreamTransformer.prototype[_is_SwitchMapStreamTransformer_default] = true;
    const transformer = Symbol("SwitchMapStreamTransformer.transformer");
    dart.setMethodSignature(SwitchMapStreamTransformer, () => ({
      __proto__: dart.getMethods(SwitchMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setFieldSignature(SwitchMapStreamTransformer, () => ({
      __proto__: dart.getFields(SwitchMapStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$S())
    }));
    return SwitchMapStreamTransformer;
  });
  src__transformers__switch_map.SwitchMapStreamTransformer = src__transformers__switch_map.SwitchMapStreamTransformer$();
  dart.addTypeTests(src__transformers__switch_map.SwitchMapStreamTransformer, _is_SwitchMapStreamTransformer_default);
  const _is_ThrottleStreamTransformer_default = Symbol('_is_ThrottleStreamTransformer_default');
  src__transformers__throttle.ThrottleStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class ThrottleStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, duration) {
        if (duration == null) {
          dart.throw(new core.ArgumentError.new("duration cannot be null"));
        }
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let _timer = null;
          let _closeAfterNextEvent = false;
          function _resetTimer() {
            if (_timer != null && dart.test(_timer.isActive)) return false;
            try {
              _timer = async.Timer.new(duration, dart.fn(() => {
                if (_closeAfterNextEvent && !dart.test(controller.isClosed)) controller.close();
              }, VoidToNull()));
            } catch (e) {
              let s = dart.stackTrace(e);
              controller.addError(e, s);
            }
            return true;
          }
          dart.fn(_resetTimer, VoidTobool());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.where(dart.fn(_ => _resetTimer(), dart.fnType(core.bool, [T]))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  _closeAfterNextEvent = true;
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (ThrottleStreamTransformer.new = function(duration) {
      this[transformer] = src__transformers__throttle.ThrottleStreamTransformer._buildTransformer(T, duration);
      ThrottleStreamTransformer.__proto__.new.call(this);
    }).prototype = ThrottleStreamTransformer.prototype;
    dart.addTypeTests(ThrottleStreamTransformer);
    ThrottleStreamTransformer.prototype[_is_ThrottleStreamTransformer_default] = true;
    const transformer = Symbol("ThrottleStreamTransformer.transformer");
    dart.setMethodSignature(ThrottleStreamTransformer, () => ({
      __proto__: dart.getMethods(ThrottleStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(ThrottleStreamTransformer, () => ({
      __proto__: dart.getFields(ThrottleStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return ThrottleStreamTransformer;
  });
  src__transformers__throttle.ThrottleStreamTransformer = src__transformers__throttle.ThrottleStreamTransformer$();
  dart.addTypeTests(src__transformers__throttle.ThrottleStreamTransformer, _is_ThrottleStreamTransformer_default);
  const _is_TimeInterval_default = Symbol('_is_TimeInterval_default');
  src__transformers__time_interval.TimeInterval$ = dart.generic(T => {
    class TimeInterval extends core.Object {
      get interval() {
        return this[interval$];
      }
      set interval(value) {
        super.interval = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return src__transformers__time_interval.TimeInterval.is(other) && dart.equals(this.interval, other.interval) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.interval)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "TimeInterval{interval: " + dart.str(this.interval) + ", value: " + dart.str(this.value) + "}";
      }
    }
    (TimeInterval.new = function(value, interval) {
      this[value$] = value;
      this[interval$] = interval;
    }).prototype = TimeInterval.prototype;
    dart.addTypeTests(TimeInterval);
    TimeInterval.prototype[_is_TimeInterval_default] = true;
    const interval$ = Symbol("TimeInterval.interval");
    const value$ = Symbol("TimeInterval.value");
    dart.setMethodSignature(TimeInterval, () => ({
      __proto__: dart.getMethods(TimeInterval.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(TimeInterval, () => ({
      __proto__: dart.getGetters(TimeInterval.__proto__),
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setFieldSignature(TimeInterval, () => ({
      __proto__: dart.getFields(TimeInterval.__proto__),
      interval: dart.finalFieldType(core.Duration),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(TimeInterval, ['_equals', 'toString']);
    dart.defineExtensionAccessors(TimeInterval, ['hashCode']);
    return TimeInterval;
  });
  src__transformers__time_interval.TimeInterval = src__transformers__time_interval.TimeInterval$();
  dart.addTypeTests(src__transformers__time_interval.TimeInterval, _is_TimeInterval_default);
  const _is_TimeIntervalStreamTransformer_default = Symbol('_is_TimeIntervalStreamTransformer_default');
  src__transformers__time_interval.TimeIntervalStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let TimeIntervalOfT = () => (TimeIntervalOfT = dart.constFn(src__transformers__time_interval.TimeInterval$(T)))();
    let StreamTransformerOfT$TimeIntervalOfT = () => (StreamTransformerOfT$TimeIntervalOfT = dart.constFn(async.StreamTransformer$(T, TimeIntervalOfT())))();
    class TimeIntervalStreamTransformer extends async.StreamTransformerBase$(T, src__transformers__time_interval.TimeInterval$(T)) {
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
      static _buildTransformer(T) {
        return async.StreamTransformer$(T, src__transformers__time_interval.TimeInterval$(T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(src__transformers__time_interval.TimeInterval$(T)).new({sync: true, onListen: dart.fn(() => {
              let stopwatch = new core.Stopwatch.new();
              stopwatch.start();
              let ems = null;
              subscription = input.listen(dart.fn(value => {
                ems = stopwatch.elapsedMicroseconds;
                stopwatch.stop();
                try {
                  controller.add(new (src__transformers__time_interval.TimeInterval$(T)).new(value, new core.Duration.new({microseconds: ems})));
                } catch (e) {
                  let s = dart.stackTrace(e);
                  controller.addError(e, s);
                }
                stopwatch = new core.Stopwatch.new();
                stopwatch.start();
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  stopwatch.stop();
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(src__transformers__time_interval.TimeInterval$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (TimeIntervalStreamTransformer.new = function() {
      this[transformer] = src__transformers__time_interval.TimeIntervalStreamTransformer._buildTransformer(T);
      TimeIntervalStreamTransformer.__proto__.new.call(this);
    }).prototype = TimeIntervalStreamTransformer.prototype;
    dart.addTypeTests(TimeIntervalStreamTransformer);
    TimeIntervalStreamTransformer.prototype[_is_TimeIntervalStreamTransformer_default] = true;
    const transformer = Symbol("TimeIntervalStreamTransformer.transformer");
    dart.setMethodSignature(TimeIntervalStreamTransformer, () => ({
      __proto__: dart.getMethods(TimeIntervalStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(src__transformers__time_interval.TimeInterval$(T)), [core.Object])
    }));
    dart.setFieldSignature(TimeIntervalStreamTransformer, () => ({
      __proto__: dart.getFields(TimeIntervalStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$TimeIntervalOfT())
    }));
    return TimeIntervalStreamTransformer;
  });
  src__transformers__time_interval.TimeIntervalStreamTransformer = src__transformers__time_interval.TimeIntervalStreamTransformer$();
  dart.addTypeTests(src__transformers__time_interval.TimeIntervalStreamTransformer, _is_TimeIntervalStreamTransformer_default);
  const _is_Timestamped_default = Symbol('_is_Timestamped_default');
  src__transformers__timestamp.Timestamped$ = dart.generic(T => {
    class Timestamped extends core.Object {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get timestamp() {
        return this[timestamp$];
      }
      set timestamp(value) {
        super.timestamp = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return src__transformers__timestamp.Timestamped.is(other) && dart.equals(this.timestamp, other.timestamp) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.timestamp)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "TimeStamp{timestamp: " + dart.str(this.timestamp) + ", value: " + dart.str(this.value) + "}";
      }
    }
    (Timestamped.new = function(timestamp, value) {
      this[timestamp$] = timestamp;
      this[value$] = value;
    }).prototype = Timestamped.prototype;
    dart.addTypeTests(Timestamped);
    Timestamped.prototype[_is_Timestamped_default] = true;
    const value$ = Symbol("Timestamped.value");
    const timestamp$ = Symbol("Timestamped.timestamp");
    dart.setMethodSignature(Timestamped, () => ({
      __proto__: dart.getMethods(Timestamped.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(Timestamped, () => ({
      __proto__: dart.getGetters(Timestamped.__proto__),
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setFieldSignature(Timestamped, () => ({
      __proto__: dart.getFields(Timestamped.__proto__),
      value: dart.finalFieldType(T),
      timestamp: dart.finalFieldType(core.DateTime)
    }));
    dart.defineExtensionMethods(Timestamped, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Timestamped, ['hashCode']);
    return Timestamped;
  });
  src__transformers__timestamp.Timestamped = src__transformers__timestamp.Timestamped$();
  dart.addTypeTests(src__transformers__timestamp.Timestamped, _is_Timestamped_default);
  const _is_TimestampStreamTransformer_default = Symbol('_is_TimestampStreamTransformer_default');
  src__transformers__timestamp.TimestampStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let TimestampedOfT = () => (TimestampedOfT = dart.constFn(src__transformers__timestamp.Timestamped$(T)))();
    let StreamTransformerOfT$TimestampedOfT = () => (StreamTransformerOfT$TimestampedOfT = dart.constFn(async.StreamTransformer$(T, TimestampedOfT())))();
    class TimestampStreamTransformer extends async.StreamTransformerBase$(T, src__transformers__timestamp.Timestamped$(T)) {
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
      static _buildTransformer(T) {
        return async.StreamTransformer$(T, src__transformers__timestamp.Timestamped$(T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(src__transformers__timestamp.Timestamped$(T)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.map(src__transformers__timestamp.Timestamped$(T), dart.fn(value => new (src__transformers__timestamp.Timestamped$(T)).new(new core.DateTime.now(), value), dart.fnType(src__transformers__timestamp.Timestamped$(T), [T]))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(src__transformers__timestamp.Timestamped$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (TimestampStreamTransformer.new = function() {
      this[transformer] = src__transformers__timestamp.TimestampStreamTransformer._buildTransformer(T);
      TimestampStreamTransformer.__proto__.new.call(this);
    }).prototype = TimestampStreamTransformer.prototype;
    dart.addTypeTests(TimestampStreamTransformer);
    TimestampStreamTransformer.prototype[_is_TimestampStreamTransformer_default] = true;
    const transformer = Symbol("TimestampStreamTransformer.transformer");
    dart.setMethodSignature(TimestampStreamTransformer, () => ({
      __proto__: dart.getMethods(TimestampStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(src__transformers__timestamp.Timestamped$(T)), [core.Object])
    }));
    dart.setFieldSignature(TimestampStreamTransformer, () => ({
      __proto__: dart.getFields(TimestampStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$TimestampedOfT())
    }));
    return TimestampStreamTransformer;
  });
  src__transformers__timestamp.TimestampStreamTransformer = src__transformers__timestamp.TimestampStreamTransformer$();
  dart.addTypeTests(src__transformers__timestamp.TimestampStreamTransformer, _is_TimestampStreamTransformer_default);
  const _is_WindowStreamTransformer_default = Symbol('_is_WindowStreamTransformer_default');
  src__transformers__window.WindowStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfStreamOfT = () => (StreamOfStreamOfT = dart.constFn(async.Stream$(StreamOfT())))();
    let EventSinkOfStreamOfT = () => (EventSinkOfStreamOfT = dart.constFn(async.EventSink$(StreamOfT())))();
    let TAndEventSinkOfStreamOfT__Tovoid = () => (TAndEventSinkOfStreamOfT__Tovoid = dart.constFn(dart.fnType(dart.void, [T, EventSinkOfStreamOfT()], [core.int])))();
    let StreamOfTAndEventSinkOfStreamOfT__Tovoid = () => (StreamOfTAndEventSinkOfStreamOfT__Tovoid = dart.constFn(dart.fnType(dart.void, [StreamOfT(), EventSinkOfStreamOfT()], [core.int])))();
    let StreamOfTAndFnAndFnToStreamOfStreamOfT = () => (StreamOfTAndFnAndFnToStreamOfStreamOfT = dart.constFn(dart.fnType(StreamOfStreamOfT(), [StreamOfT(), TAndEventSinkOfStreamOfT__Tovoid(), StreamOfTAndEventSinkOfStreamOfT__Tovoid()])))();
    class WindowStreamTransformer extends async.StreamTransformerBase$(T, async.Stream$(T)) {
      get sampler() {
        return this[sampler$];
      }
      set sampler(value) {
        super.sampler = value;
      }
      get exhaustBufferOnDone() {
        return this[exhaustBufferOnDone$];
      }
      set exhaustBufferOnDone(value) {
        super.exhaustBufferOnDone = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return src__transformers__window.WindowStreamTransformer._buildTransformer(T, this.sampler, this.exhaustBufferOnDone).bind(stream);
      }
      static _buildTransformer(T, scheduler, exhaustBufferOnDone) {
        src__transformers__window.WindowStreamTransformer.assertSampler(T, scheduler);
        return async.StreamTransformer$(T, async.Stream$(T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let buffer = _interceptors.JSArray$(T).of([]);
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            if (dart.test(exhaustBufferOnDone) && dart.test(buffer[$isNotEmpty])) controller.add(async.Stream$(T).fromIterable(buffer));
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(async.Stream$(T)).new({sync: true, onListen: dart.fn(() => {
              try {
                subscription = scheduler(input, dart.fn((data, sink, startBufferEvery) => {
                  if (startBufferEvery === void 0) startBufferEvery = 0;
                  buffer[$add](data);
                  sink.add(async.Stream$(T).fromIterable(buffer));
                }, dart.fnType(core.Null, [T, async.EventSink$(async.Stream$(T))], [core.int])), dart.fn((_, sink, startBufferEvery) => {
                  if (startBufferEvery === void 0) startBufferEvery = 0;
                  startBufferEvery != null ? startBufferEvery : 0;
                  sink.add(async.Stream$(T).fromIterable(buffer));
                  buffer = dart.notNull(startBufferEvery) > 0 && dart.notNull(startBufferEvery) < dart.notNull(buffer[$length]) ? buffer[$sublist](startBufferEvery) : _interceptors.JSArray$(T).of([]);
                }, dart.fnType(core.Null, [async.Stream$(T), async.EventSink$(async.Stream$(T))], [core.int]))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              } catch (e) {
                let s = dart.stackTrace(e);
                controller.addError(e, s);
              }
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(async.Stream$(T)), [async.Stream$(T), core.bool])));
      }
      static assertSampler(T, scheduler) {
        if (scheduler == null) {
          dart.throw(new core.ArgumentError.new("scheduler cannot be null"));
        }
      }
    }
    (WindowStreamTransformer.new = function(sampler, opts) {
      let exhaustBufferOnDone = opts && 'exhaustBufferOnDone' in opts ? opts.exhaustBufferOnDone : true;
      this[sampler$] = sampler;
      this[exhaustBufferOnDone$] = exhaustBufferOnDone;
      WindowStreamTransformer.__proto__.new.call(this);
    }).prototype = WindowStreamTransformer.prototype;
    dart.addTypeTests(WindowStreamTransformer);
    WindowStreamTransformer.prototype[_is_WindowStreamTransformer_default] = true;
    const sampler$ = Symbol("WindowStreamTransformer.sampler");
    const exhaustBufferOnDone$ = Symbol("WindowStreamTransformer.exhaustBufferOnDone");
    dart.setMethodSignature(WindowStreamTransformer, () => ({
      __proto__: dart.getMethods(WindowStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(async.Stream$(T)), [core.Object])
    }));
    dart.setFieldSignature(WindowStreamTransformer, () => ({
      __proto__: dart.getFields(WindowStreamTransformer.__proto__),
      sampler: dart.finalFieldType(StreamOfTAndFnAndFnToStreamOfStreamOfT()),
      exhaustBufferOnDone: dart.finalFieldType(core.bool)
    }));
    return WindowStreamTransformer;
  });
  src__transformers__window.WindowStreamTransformer = src__transformers__window.WindowStreamTransformer$();
  dart.addTypeTests(src__transformers__window.WindowStreamTransformer, _is_WindowStreamTransformer_default);
  const _is_WithLatestFromStreamTransformer_default = Symbol('_is_WithLatestFromStreamTransformer_default');
  src__transformers__with_latest_from.WithLatestFromStreamTransformer$ = dart.generic((T, S, R) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$R = () => (StreamTransformerOfT$R = dart.constFn(async.StreamTransformer$(T, R)))();
    class WithLatestFromStreamTransformer extends async.StreamTransformerBase$(T, R) {
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
      static _buildTransformer(T, S, R, latestFromStream, fn) {
        if (latestFromStream == null) {
          dart.throw(new core.ArgumentError.new("latestFromStream cannot be null"));
        } else if (fn == null) {
          dart.throw(new core.ArgumentError.new("combiner cannot be null"));
        }
        return async.StreamTransformer$(T, R).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let latestFromSubscription = null;
          let latestValue = null;
          controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                if (latestValue != null) {
                  try {
                    controller.add(fn(value, latestValue));
                  } catch (e) {
                    let s = dart.stackTrace(e);
                    controller.addError(e, s);
                  }
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError')});
              latestFromSubscription = latestFromStream.listen(dart.fn(latest => {
                latestValue = latest;
              }, dart.fnType(core.Null, [S])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, JSArrayOfFuture().of([subscription.cancel(), latestFromSubscription.cancel()])[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(R), [async.Stream$(T), core.bool])));
      }
    }
    (WithLatestFromStreamTransformer.new = function(latestFromStream, fn) {
      this[transformer] = src__transformers__with_latest_from.WithLatestFromStreamTransformer._buildTransformer(T, S, R, latestFromStream, fn);
      WithLatestFromStreamTransformer.__proto__.new.call(this);
    }).prototype = WithLatestFromStreamTransformer.prototype;
    dart.addTypeTests(WithLatestFromStreamTransformer);
    WithLatestFromStreamTransformer.prototype[_is_WithLatestFromStreamTransformer_default] = true;
    const transformer = Symbol("WithLatestFromStreamTransformer.transformer");
    dart.setMethodSignature(WithLatestFromStreamTransformer, () => ({
      __proto__: dart.getMethods(WithLatestFromStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(R), [core.Object])
    }));
    dart.setFieldSignature(WithLatestFromStreamTransformer, () => ({
      __proto__: dart.getFields(WithLatestFromStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$R())
    }));
    return WithLatestFromStreamTransformer;
  });
  src__transformers__with_latest_from.WithLatestFromStreamTransformer = src__transformers__with_latest_from.WithLatestFromStreamTransformer$();
  dart.addTypeTests(src__transformers__with_latest_from.WithLatestFromStreamTransformer, _is_WithLatestFromStreamTransformer_default);
  dart.trackLibraries("packages/rxdart/src/transformers/buffer.ddc", {
    "package:rxdart/src/transformers/buffer.dart": src__transformers__buffer,
    "package:rxdart/src/transformers/buffer_with_count.dart": src__transformers__buffer_with_count,
    "package:rxdart/src/transformers/debounce.dart": src__transformers__debounce,
    "package:rxdart/src/transformers/default_if_empty.dart": src__transformers__default_if_empty,
    "package:rxdart/src/transformers/delay.dart": src__transformers__delay,
    "package:rxdart/src/transformers/dematerialize.dart": src__transformers__dematerialize,
    "package:rxdart/src/transformers/distinct_unique.dart": src__transformers__distinct_unique,
    "package:rxdart/src/transformers/exhaust_map.dart": src__transformers__exhaust_map,
    "package:rxdart/src/transformers/flat_map.dart": src__transformers__flat_map,
    "package:rxdart/src/transformers/flat_map_latest.dart": src__transformers__flat_map_latest,
    "package:rxdart/src/transformers/ignore_elements.dart": src__transformers__ignore_elements,
    "package:rxdart/src/transformers/interval.dart": src__transformers__interval,
    "package:rxdart/src/transformers/map_to.dart": src__transformers__map_to,
    "package:rxdart/src/transformers/materialize.dart": src__transformers__materialize,
    "package:rxdart/src/utils/type_token.dart": src__utils__type_token,
    "package:rxdart/src/transformers/of_type.dart": src__transformers__of_type,
    "package:rxdart/src/transformers/on_error_resume_next.dart": src__transformers__on_error_resume_next,
    "package:rxdart/src/transformers/on_error_resume.dart": src__transformers__on_error_resume,
    "package:rxdart/src/transformers/scan.dart": src__transformers__scan,
    "package:rxdart/src/transformers/skip_until.dart": src__transformers__skip_until,
    "package:rxdart/src/transformers/start_with.dart": src__transformers__start_with,
    "package:rxdart/src/transformers/start_with_many.dart": src__transformers__start_with_many,
    "package:rxdart/src/transformers/switch_if_empty.dart": src__transformers__switch_if_empty,
    "package:rxdart/src/transformers/switch_map.dart": src__transformers__switch_map,
    "package:rxdart/src/transformers/throttle.dart": src__transformers__throttle,
    "package:rxdart/src/transformers/time_interval.dart": src__transformers__time_interval,
    "package:rxdart/src/transformers/timestamp.dart": src__transformers__timestamp,
    "package:rxdart/src/transformers/window.dart": src__transformers__window,
    "package:rxdart/src/transformers/with_latest_from.dart": src__transformers__with_latest_from
  }, '{"version":3,"sourceRoot":"","sources":["buffer.dart","buffer_with_count.dart","debounce.dart","default_if_empty.dart","delay.dart","dematerialize.dart","distinct_unique.dart","exhaust_map.dart","flat_map.dart","flat_map_latest.dart","ignore_elements.dart","interval.dart","map_to.dart","materialize.dart","../utils/type_token.dart","of_type.dart","on_error_resume_next.dart","on_error_resume.dart","scan.dart","skip_until.dart","start_with.dart","start_with_many.dart","switch_if_empty.dart","switch_map.dart","throttle.dart","time_interval.dart","timestamp.dart","window.dart","with_latest_from.dart"],"names":[],"mappings":"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","file":"buffer.ddc.js"}');
  // Exports:
  return {
    src__transformers__buffer: src__transformers__buffer,
    src__transformers__buffer_with_count: src__transformers__buffer_with_count,
    src__transformers__debounce: src__transformers__debounce,
    src__transformers__default_if_empty: src__transformers__default_if_empty,
    src__transformers__delay: src__transformers__delay,
    src__transformers__dematerialize: src__transformers__dematerialize,
    src__transformers__distinct_unique: src__transformers__distinct_unique,
    src__transformers__exhaust_map: src__transformers__exhaust_map,
    src__transformers__flat_map: src__transformers__flat_map,
    src__transformers__flat_map_latest: src__transformers__flat_map_latest,
    src__transformers__ignore_elements: src__transformers__ignore_elements,
    src__transformers__interval: src__transformers__interval,
    src__transformers__map_to: src__transformers__map_to,
    src__transformers__materialize: src__transformers__materialize,
    src__utils__type_token: src__utils__type_token,
    src__transformers__of_type: src__transformers__of_type,
    src__transformers__on_error_resume_next: src__transformers__on_error_resume_next,
    src__transformers__on_error_resume: src__transformers__on_error_resume,
    src__transformers__scan: src__transformers__scan,
    src__transformers__skip_until: src__transformers__skip_until,
    src__transformers__start_with: src__transformers__start_with,
    src__transformers__start_with_many: src__transformers__start_with_many,
    src__transformers__switch_if_empty: src__transformers__switch_if_empty,
    src__transformers__switch_map: src__transformers__switch_map,
    src__transformers__throttle: src__transformers__throttle,
    src__transformers__time_interval: src__transformers__time_interval,
    src__transformers__timestamp: src__transformers__timestamp,
    src__transformers__window: src__transformers__window,
    src__transformers__with_latest_from: src__transformers__with_latest_from
  };
});

//# sourceMappingURL=buffer.ddc.js.map
