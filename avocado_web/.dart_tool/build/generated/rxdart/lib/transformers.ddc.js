define(['dart_sdk', 'packages/rxdart/src/samplers/buffer_strategy', 'packages/rxdart/src/transformers/buffer'], function(dart_sdk, buffer_strategy, buffer) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__samplers__buffer_strategy = buffer_strategy.src__samplers__buffer_strategy;
  const src__transformers__window = buffer.src__transformers__window;
  const _root = Object.create(null);
  const src__transformers__window_with_count = Object.create(_root);
  const transformers = Object.create(_root);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let __Tovoid = () => (__Tovoid = dart.constFn(dart.fnType(dart.void, [], [async.Future])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  const _is_WindowWithCountStreamTransformer_default = Symbol('_is_WindowWithCountStreamTransformer_default');
  src__transformers__window_with_count.WindowWithCountStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class WindowWithCountStreamTransformer extends async.StreamTransformerBase$(T, async.Stream$(T)) {
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
        return src__transformers__window_with_count.WindowWithCountStreamTransformer._buildTransformer(T, this.count, this.skip).bind(stream);
      }
      static _buildTransformer(T, count, startBufferEvery) {
        src__transformers__window_with_count.WindowWithCountStreamTransformer.assertCountAndSkip(count, startBufferEvery);
        return async.StreamTransformer$(T, async.Stream$(T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(async.Stream$(T)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.transform(async.Stream$(T), new (src__transformers__window.WindowStreamTransformer$(T)).new(src__samplers__buffer_strategy.onCount(T, async.Stream$(T), count, startBufferEvery))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(async.Stream$(T)), [async.Stream$(T), core.bool])));
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
    (WindowWithCountStreamTransformer.new = function(count, skip) {
      if (skip === void 0) skip = null;
      this[count$] = count;
      this[skip$] = skip;
      WindowWithCountStreamTransformer.__proto__.new.call(this);
    }).prototype = WindowWithCountStreamTransformer.prototype;
    dart.addTypeTests(WindowWithCountStreamTransformer);
    WindowWithCountStreamTransformer.prototype[_is_WindowWithCountStreamTransformer_default] = true;
    const count$ = Symbol("WindowWithCountStreamTransformer.count");
    const skip$ = Symbol("WindowWithCountStreamTransformer.skip");
    dart.setMethodSignature(WindowWithCountStreamTransformer, () => ({
      __proto__: dart.getMethods(WindowWithCountStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(async.Stream$(T)), [core.Object])
    }));
    dart.setFieldSignature(WindowWithCountStreamTransformer, () => ({
      __proto__: dart.getFields(WindowWithCountStreamTransformer.__proto__),
      count: dart.finalFieldType(core.int),
      skip: dart.finalFieldType(core.int)
    }));
    return WindowWithCountStreamTransformer;
  });
  src__transformers__window_with_count.WindowWithCountStreamTransformer = src__transformers__window_with_count.WindowWithCountStreamTransformer$();
  dart.addTypeTests(src__transformers__window_with_count.WindowWithCountStreamTransformer, _is_WindowWithCountStreamTransformer_default);
  dart.trackLibraries("packages/rxdart/transformers.ddc", {
    "package:rxdart/src/transformers/window_with_count.dart": src__transformers__window_with_count,
    "package:rxdart/transformers.dart": transformers
  }, '{"version":3,"sourceRoot":"","sources":["src/transformers/window_with_count.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MAsBY;;;;;;MAAO;;;;;;WAKM,MAAgB;2BAAN;cAC7B,wFAAiB,IAAI,UAAK,EAAE,SAAI,MAAM,CAAC,MAAM;MAAC;kCAG9C,KAAS,EAAE,gBAAoB;AACjC,gGAAkB,CAAC,KAAK,EAAE,gBAAgB;AAE1C,cAAO,AAAI,kDAA+B,CACtC,SAAC,KAAe,EAAE,aAAkB;AACtC,cAA4B;AAC5B,cAA8B;AAE9B,oBAAU,GAAG,AAAI,6CAA2B,QAClC,gBACI;AACR,0BAAY,GAAG,KAAK,UACN,mBAAC,IAAI,2DAA0B,CAAC,sCAAO,sBAAC,KAAK,EAAE,gBAAgB,UAClE,WAAC,UAAU,8BACL,UAAU,iCACX,UAAU,2BACH,aAAa;uCAE7B,QAAE,YAA4B;2CAAZ;oBACvB,aAAY,MAAM,CAAC,YAAY;sCACzB,cAAM,YAAY,OAAO,6BACzB,cAAM,YAAY,OAAO;AAEvC,gBAAO,WAAU,OAAO,OAAO,CAAC;;MAEpC;gCAE+B,KAAS,EAAG,IAAQ;6BAAJ;AAC7C,YAAM,aAAa,IAAI,IAAI,OAAO,KAAK,GAAG,IAAI;AAE9C,YAAI,KAAK,IAAI,MAAM;AACjB,qBAAM,IAAI,sBAAa,CAAC;cACnB,KAAe,aAAX,UAAU,KAAI,KAAgB,aAAX,UAAU,iBAAG,KAAK,GAAE;AAChD,qBAAM,IAAI,sBAAa,CACnB;;MAER;;qDA3CiC,KAAU,EAAG,IAAS;2BAAJ;MAAb,YAAK,GAAL,KAAK;MAAQ,WAAI,GAAJ,IAAI;;IAAE","file":"transformers.ddc.js"}');
  // Exports:
  return {
    src__transformers__window_with_count: src__transformers__window_with_count,
    transformers: transformers
  };
});

//# sourceMappingURL=transformers.ddc.js.map
