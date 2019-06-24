define(['dart_sdk', 'packages/rxdart/src/streams/amb', 'packages/rxdart/src/transformers/buffer', 'packages/rxdart/src/samplers/buffer_strategy'], function(dart_sdk, amb, buffer, buffer_strategy) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__streams__combine_latest = amb.src__streams__combine_latest;
  const src__streams__concat = amb.src__streams__concat;
  const src__streams__concat_eager = amb.src__streams__concat_eager;
  const src__streams__defer = amb.src__streams__defer;
  const src__streams__error = amb.src__streams__error;
  const src__streams__merge = amb.src__streams__merge;
  const src__streams__never = amb.src__streams__never;
  const src__streams__race = amb.src__streams__race;
  const src__streams__range = amb.src__streams__range;
  const src__streams__repeat = amb.src__streams__repeat;
  const src__streams__retry = amb.src__streams__retry;
  const src__streams__retry_when = amb.src__streams__retry_when;
  const src__streams__switch_latest = amb.src__streams__switch_latest;
  const src__streams__timer = amb.src__streams__timer;
  const src__streams__tween = amb.src__streams__tween;
  const src__streams__zip = amb.src__streams__zip;
  const src__transformers__buffer = buffer.src__transformers__buffer;
  const src__transformers__debounce = buffer.src__transformers__debounce;
  const src__transformers__default_if_empty = buffer.src__transformers__default_if_empty;
  const src__transformers__delay = buffer.src__transformers__delay;
  const src__transformers__dematerialize = buffer.src__transformers__dematerialize;
  const src__transformers__distinct_unique = buffer.src__transformers__distinct_unique;
  const src__transformers__exhaust_map = buffer.src__transformers__exhaust_map;
  const src__transformers__flat_map = buffer.src__transformers__flat_map;
  const src__transformers__ignore_elements = buffer.src__transformers__ignore_elements;
  const src__transformers__interval = buffer.src__transformers__interval;
  const src__transformers__map_to = buffer.src__transformers__map_to;
  const src__transformers__materialize = buffer.src__transformers__materialize;
  const src__transformers__of_type = buffer.src__transformers__of_type;
  const src__transformers__on_error_resume = buffer.src__transformers__on_error_resume;
  const src__transformers__scan = buffer.src__transformers__scan;
  const src__transformers__skip_until = buffer.src__transformers__skip_until;
  const src__transformers__start_with = buffer.src__transformers__start_with;
  const src__transformers__start_with_many = buffer.src__transformers__start_with_many;
  const src__transformers__switch_if_empty = buffer.src__transformers__switch_if_empty;
  const src__transformers__switch_map = buffer.src__transformers__switch_map;
  const src__transformers__throttle = buffer.src__transformers__throttle;
  const src__transformers__time_interval = buffer.src__transformers__time_interval;
  const src__transformers__timestamp = buffer.src__transformers__timestamp;
  const src__transformers__window = buffer.src__transformers__window;
  const src__transformers__with_latest_from = buffer.src__transformers__with_latest_from;
  const src__utils__type_token = buffer.src__utils__type_token;
  const src__samplers__buffer_strategy = buffer_strategy.src__samplers__buffer_strategy;
  const src__utils__notification = buffer_strategy.src__utils__notification;
  const src__transformers__do = buffer_strategy.src__transformers__do;
  const src__transformers__sample = buffer_strategy.src__transformers__sample;
  const src__transformers__take_until = buffer_strategy.src__transformers__take_until;
  const _root = Object.create(null);
  const src__subjects__replay_subject = Object.create(_root);
  const src__subjects__publish_subject = Object.create(_root);
  const src__subjects__behavior_subject = Object.create(_root);
  const src__observables__value_observable = Object.create(_root);
  const src__observables__replay_observable = Object.create(_root);
  const src__observables__connectable_observable = Object.create(_root);
  const rxdart = Object.create(_root);
  const src__futures__as_observable_future = Object.create(_root);
  const futures = Object.create(_root);
  const src__observables__observable = Object.create(_root);
  const src__subjects__subject = Object.create(_root);
  const subjects = Object.create(_root);
  const src__utils__composite_subscription = Object.create(_root);
  const src__futures__wrapped_future = Object.create(_root);
  const src__futures__stream_max_future = Object.create(_root);
  const src__futures__stream_min_future = Object.create(_root);
  const $addAll = dartx.addAll;
  const $add = dartx.add;
  const $remove = dartx.remove;
  const $forEach = dartx.forEach;
  const $clear = dartx.clear;
  const $last = dartx.last;
  const $sort = dartx.sort;
  const $first = dartx.first;
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let AsObservableFutureOfbool = () => (AsObservableFutureOfbool = dart.constFn(src__futures__as_observable_future.AsObservableFuture$(core.bool)))();
  let ObservableOfint = () => (ObservableOfint = dart.constFn(src__observables__observable.Observable$(core.int)))();
  let ObservableOfdouble = () => (ObservableOfdouble = dart.constFn(src__observables__observable.Observable$(core.double)))();
  let AsObservableFutureOfString = () => (AsObservableFutureOfString = dart.constFn(src__futures__as_observable_future.AsObservableFuture$(core.String)))();
  let AsObservableFutureOfint = () => (AsObservableFutureOfint = dart.constFn(src__futures__as_observable_future.AsObservableFuture$(core.int)))();
  let JSArrayOfStreamSubscription = () => (JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  let StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  let ListOfStreamSubscription = () => (ListOfStreamSubscription = dart.constFn(core.List$(async.StreamSubscription)))();
  const _queue = Symbol('_queue');
  const _maxSize = Symbol('_maxSize');
  const _isAddingStreamItems = Symbol('_isAddingStreamItems');
  const _add = Symbol('_add');
  const _stream = Symbol('_stream');
  const _is_Observable_default = Symbol('_is_Observable_default');
  src__observables__observable.Observable$ = dart.generic(T => {
    let ConcatStreamOfT = () => (ConcatStreamOfT = dart.constFn(src__streams__concat.ConcatStream$(T)))();
    let ObservableOfT = () => (ObservableOfT = dart.constFn(src__observables__observable.Observable$(T)))();
    let ConcatEagerStreamOfT = () => (ConcatEagerStreamOfT = dart.constFn(src__streams__concat_eager.ConcatEagerStream$(T)))();
    let DeferStreamOfT = () => (DeferStreamOfT = dart.constFn(src__streams__defer.DeferStream$(T)))();
    let ErrorStreamOfT = () => (ErrorStreamOfT = dart.constFn(src__streams__error.ErrorStream$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let MergeStreamOfT = () => (MergeStreamOfT = dart.constFn(src__streams__merge.MergeStream$(T)))();
    let NeverStreamOfT = () => (NeverStreamOfT = dart.constFn(src__streams__never.NeverStream$(T)))();
    let RaceStreamOfT = () => (RaceStreamOfT = dart.constFn(src__streams__race.RaceStream$(T)))();
    let RepeatStreamOfT = () => (RepeatStreamOfT = dart.constFn(src__streams__repeat.RepeatStream$(T)))();
    let RetryStreamOfT = () => (RetryStreamOfT = dart.constFn(src__streams__retry.RetryStream$(T)))();
    let RetryWhenStreamOfT = () => (RetryWhenStreamOfT = dart.constFn(src__streams__retry_when.RetryWhenStream$(T)))();
    let SwitchLatestStreamOfT = () => (SwitchLatestStreamOfT = dart.constFn(src__streams__switch_latest.SwitchLatestStream$(T)))();
    let TimerStreamOfT = () => (TimerStreamOfT = dart.constFn(src__streams__timer.TimerStream$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let StreamOfListOfT = () => (StreamOfListOfT = dart.constFn(async.Stream$(ListOfT())))();
    let EventSinkOfListOfT = () => (EventSinkOfListOfT = dart.constFn(async.EventSink$(ListOfT())))();
    let TAndEventSinkOfListOfT__Tovoid = () => (TAndEventSinkOfListOfT__Tovoid = dart.constFn(dart.fnType(dart.void, [T, EventSinkOfListOfT()], [core.int])))();
    let ListOfTAndEventSinkOfListOfT__Tovoid = () => (ListOfTAndEventSinkOfListOfT__Tovoid = dart.constFn(dart.fnType(dart.void, [ListOfT(), EventSinkOfListOfT()], [core.int])))();
    let SamplerBuilderOfT$ListOfT = () => (SamplerBuilderOfT$ListOfT = dart.constFn(dart.fnType(StreamOfListOfT(), [StreamOfT(), TAndEventSinkOfListOfT__Tovoid(), ListOfTAndEventSinkOfListOfT__Tovoid()])))();
    let BufferStreamTransformerOfT = () => (BufferStreamTransformerOfT = dart.constFn(src__transformers__buffer.BufferStreamTransformer$(T)))();
    let IterableOfStreamOfT = () => (IterableOfStreamOfT = dart.constFn(core.Iterable$(StreamOfT())))();
    let JSArrayOfStreamOfT = () => (JSArrayOfStreamOfT = dart.constFn(_interceptors.JSArray$(StreamOfT())))();
    let DebounceStreamTransformerOfT = () => (DebounceStreamTransformerOfT = dart.constFn(src__transformers__debounce.DebounceStreamTransformer$(T)))();
    let DefaultIfEmptyStreamTransformerOfT = () => (DefaultIfEmptyStreamTransformerOfT = dart.constFn(src__transformers__default_if_empty.DefaultIfEmptyStreamTransformer$(T)))();
    let DelayStreamTransformerOfT = () => (DelayStreamTransformerOfT = dart.constFn(src__transformers__delay.DelayStreamTransformer$(T)))();
    let DistinctUniqueStreamTransformerOfT = () => (DistinctUniqueStreamTransformerOfT = dart.constFn(src__transformers__distinct_unique.DistinctUniqueStreamTransformer$(T)))();
    let DoStreamTransformerOfT = () => (DoStreamTransformerOfT = dart.constFn(src__transformers__do.DoStreamTransformer$(T)))();
    let AsObservableFutureOfT = () => (AsObservableFutureOfT = dart.constFn(src__futures__as_observable_future.AsObservableFuture$(T)))();
    let VoidToT = () => (VoidToT = dart.constFn(dart.fnType(T, [])))();
    let IgnoreElementsStreamTransformerOfT = () => (IgnoreElementsStreamTransformerOfT = dart.constFn(src__transformers__ignore_elements.IgnoreElementsStreamTransformer$(T)))();
    let IntervalStreamTransformerOfT = () => (IntervalStreamTransformerOfT = dart.constFn(src__transformers__interval.IntervalStreamTransformer$(T)))();
    let MaterializeStreamTransformerOfT = () => (MaterializeStreamTransformerOfT = dart.constFn(src__transformers__materialize.MaterializeStreamTransformer$(T)))();
    let NotificationOfT = () => (NotificationOfT = dart.constFn(src__utils__notification.Notification$(T)))();
    let StreamMaxFutureOfT = () => (StreamMaxFutureOfT = dart.constFn(src__futures__stream_max_future.StreamMaxFuture$(T)))();
    let StreamMinFutureOfT = () => (StreamMinFutureOfT = dart.constFn(src__futures__stream_min_future.StreamMinFuture$(T)))();
    let dynamicToStreamOfT = () => (dynamicToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [dart.dynamic])))();
    let OnErrorResumeStreamTransformerOfT = () => (OnErrorResumeStreamTransformerOfT = dart.constFn(src__transformers__on_error_resume.OnErrorResumeStreamTransformer$(T)))();
    let dynamicToObservableOfT = () => (dynamicToObservableOfT = dart.constFn(dart.fnType(ObservableOfT(), [dart.dynamic])))();
    let dynamicToT = () => (dynamicToT = dart.constFn(dart.fnType(T, [dart.dynamic])))();
    let StreamConsumerOfT = () => (StreamConsumerOfT = dart.constFn(async.StreamConsumer$(T)))();
    let TAndTToT = () => (TAndTToT = dart.constFn(dart.fnType(T, [T, T])))();
    let SampleStreamTransformerOfT = () => (SampleStreamTransformerOfT = dart.constFn(src__transformers__sample.SampleStreamTransformer$(T)))();
    let StartWithStreamTransformerOfT = () => (StartWithStreamTransformerOfT = dart.constFn(src__transformers__start_with.StartWithStreamTransformer$(T)))();
    let StartWithManyStreamTransformerOfT = () => (StartWithManyStreamTransformerOfT = dart.constFn(src__transformers__start_with_many.StartWithManyStreamTransformer$(T)))();
    let SwitchIfEmptyStreamTransformerOfT = () => (SwitchIfEmptyStreamTransformerOfT = dart.constFn(src__transformers__switch_if_empty.SwitchIfEmptyStreamTransformer$(T)))();
    let ThrottleStreamTransformerOfT = () => (ThrottleStreamTransformerOfT = dart.constFn(src__transformers__throttle.ThrottleStreamTransformer$(T)))();
    let TimeIntervalStreamTransformerOfT = () => (TimeIntervalStreamTransformerOfT = dart.constFn(src__transformers__time_interval.TimeIntervalStreamTransformer$(T)))();
    let TimeIntervalOfT = () => (TimeIntervalOfT = dart.constFn(src__transformers__time_interval.TimeInterval$(T)))();
    let TimestampStreamTransformerOfT = () => (TimestampStreamTransformerOfT = dart.constFn(src__transformers__timestamp.TimestampStreamTransformer$(T)))();
    let TimestampedOfT = () => (TimestampedOfT = dart.constFn(src__transformers__timestamp.Timestamped$(T)))();
    let AsObservableFutureOfListOfT = () => (AsObservableFutureOfListOfT = dart.constFn(src__futures__as_observable_future.AsObservableFuture$(ListOfT())))();
    let SetOfT = () => (SetOfT = dart.constFn(core.Set$(T)))();
    let AsObservableFutureOfSetOfT = () => (AsObservableFutureOfSetOfT = dart.constFn(src__futures__as_observable_future.AsObservableFuture$(SetOfT())))();
    let StreamOfStreamOfT = () => (StreamOfStreamOfT = dart.constFn(async.Stream$(StreamOfT())))();
    let EventSinkOfStreamOfT = () => (EventSinkOfStreamOfT = dart.constFn(async.EventSink$(StreamOfT())))();
    let TAndEventSinkOfStreamOfT__Tovoid = () => (TAndEventSinkOfStreamOfT__Tovoid = dart.constFn(dart.fnType(dart.void, [T, EventSinkOfStreamOfT()], [core.int])))();
    let StreamOfTAndEventSinkOfStreamOfT__Tovoid = () => (StreamOfTAndEventSinkOfStreamOfT__Tovoid = dart.constFn(dart.fnType(dart.void, [StreamOfT(), EventSinkOfStreamOfT()], [core.int])))();
    let SamplerBuilderOfT$StreamOfT = () => (SamplerBuilderOfT$StreamOfT = dart.constFn(dart.fnType(StreamOfStreamOfT(), [StreamOfT(), TAndEventSinkOfStreamOfT__Tovoid(), StreamOfTAndEventSinkOfStreamOfT__Tovoid()])))();
    let WindowStreamTransformerOfT = () => (WindowStreamTransformerOfT = dart.constFn(src__transformers__window.WindowStreamTransformer$(T)))();
    let PublishConnectableObservableOfT = () => (PublishConnectableObservableOfT = dart.constFn(src__observables__connectable_observable.PublishConnectableObservable$(T)))();
    let ValueConnectableObservableOfT = () => (ValueConnectableObservableOfT = dart.constFn(src__observables__connectable_observable.ValueConnectableObservable$(T)))();
    let ReplayConnectableObservableOfT = () => (ReplayConnectableObservableOfT = dart.constFn(src__observables__connectable_observable.ReplayConnectableObservable$(T)))();
    class Observable extends async.Stream$(T) {
      any(test) {
        return new (AsObservableFutureOfbool()).new(this[_stream].any(test));
      }
      static combineLatest(T, R, streams, combiner) {
        return new (src__observables__observable.Observable$(R)).new(new (src__streams__combine_latest.CombineLatestStream$(T, R)).new(streams, combiner));
      }
      static combineLatestList(T, streams) {
        return new (src__observables__observable.Observable$(core.List$(T))).new(src__streams__combine_latest.CombineLatestStream.list(T, streams));
      }
      static combineLatest2(A, B, T, streamA, streamB, combiner) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__combine_latest.CombineLatestStream.combine2(A, B, T, streamA, streamB, combiner));
      }
      static combineLatest3(A, B, C, T, streamA, streamB, streamC, combiner) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__combine_latest.CombineLatestStream.combine3(A, B, C, T, streamA, streamB, streamC, combiner));
      }
      static combineLatest4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__combine_latest.CombineLatestStream.combine4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner));
      }
      static combineLatest5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__combine_latest.CombineLatestStream.combine5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner));
      }
      static combineLatest6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__combine_latest.CombineLatestStream.combine6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner));
      }
      static combineLatest7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__combine_latest.CombineLatestStream.combine7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner));
      }
      static combineLatest8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__combine_latest.CombineLatestStream.combine8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner));
      }
      static combineLatest9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__combine_latest.CombineLatestStream.combine9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner));
      }
      static concat(streams) {
        return new (ObservableOfT()).new(new (ConcatStreamOfT()).new(streams));
      }
      static concatEager(streams) {
        return new (ObservableOfT()).new(new (ConcatEagerStreamOfT()).new(streams));
      }
      static defer(streamFactory, opts) {
        let reusable = opts && 'reusable' in opts ? opts.reusable : false;
        return new (ObservableOfT()).new(new (DeferStreamOfT()).new(streamFactory, {reusable: reusable}));
      }
      static error(error) {
        return new (ObservableOfT()).new(new (ErrorStreamOfT()).new(error));
      }
      static eventTransformed(source, mapSink) {
        return new (ObservableOfT()).new(StreamOfT().eventTransformed(source, mapSink));
      }
      static fromFuture(future) {
        return new (ObservableOfT()).new(StreamOfT().fromFuture(future));
      }
      static fromIterable(data) {
        return new (ObservableOfT()).new(StreamOfT().fromIterable(data));
      }
      static just(data) {
        return new (ObservableOfT()).new(StreamOfT().fromIterable(JSArrayOfT().of([data])));
      }
      static empty() {
        return new (ObservableOfT()).new(StreamOfT().empty());
      }
      static merge(streams) {
        return new (ObservableOfT()).new(new (MergeStreamOfT()).new(streams));
      }
      static never() {
        return new (ObservableOfT()).new(new (NeverStreamOfT()).new());
      }
      static periodic(period, computation) {
        if (computation === void 0) computation = null;
        return new (ObservableOfT()).new(StreamOfT().periodic(period, computation));
      }
      static race(streams) {
        return new (ObservableOfT()).new(new (RaceStreamOfT()).new(streams));
      }
      static range(startInclusive, endInclusive) {
        return new (ObservableOfint()).new(new src__streams__range.RangeStream.new(startInclusive, endInclusive));
      }
      static repeat(streamFactory, count) {
        if (count === void 0) count = null;
        return new (ObservableOfT()).new(new (RepeatStreamOfT()).new(streamFactory, count));
      }
      static retry(streamFactory, count) {
        if (count === void 0) count = null;
        return new (ObservableOfT()).new(new (RetryStreamOfT()).new(streamFactory, count));
      }
      static retryWhen(streamFactory, retryWhenFactory) {
        return new (ObservableOfT()).new(new (RetryWhenStreamOfT()).new(streamFactory, retryWhenFactory));
      }
      static switchLatest(streams) {
        return new (ObservableOfT()).new(new (SwitchLatestStreamOfT()).new(streams));
      }
      static timer(value, duration) {
        return new (ObservableOfT()).new(new (TimerStreamOfT()).new(value, duration));
      }
      static tween(startValue, changeInTime, duration, opts) {
        let intervalMs = opts && 'intervalMs' in opts ? opts.intervalMs : 16;
        let ease = opts && 'ease' in opts ? opts.ease : src__streams__tween.Ease.LINEAR;
        return new (ObservableOfdouble()).new(new src__streams__tween.TweenStream.new(startValue, changeInTime, duration, intervalMs, ease));
      }
      static zip2(A, B, T, streamA, streamB, zipper) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__zip.ZipStream.zip2(A, B, T, streamA, streamB, zipper));
      }
      static zip(T, R, streams, zipper) {
        return new (src__observables__observable.Observable$(R)).new(new (src__streams__zip.ZipStream$(T, R)).new(streams, zipper));
      }
      static zipList(T, streams) {
        return new (src__observables__observable.Observable$(core.List$(T))).new(src__streams__zip.ZipStream.list(T, streams));
      }
      static zip3(A, B, C, T, streamA, streamB, streamC, zipper) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__zip.ZipStream.zip3(A, B, C, T, streamA, streamB, streamC, zipper));
      }
      static zip4(A, B, C, D, T, streamA, streamB, streamC, streamD, zipper) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__zip.ZipStream.zip4(A, B, C, D, T, streamA, streamB, streamC, streamD, zipper));
      }
      static zip5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, zipper) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__zip.ZipStream.zip5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, zipper));
      }
      static zip6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, zipper) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__zip.ZipStream.zip6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, zipper));
      }
      static zip7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__zip.ZipStream.zip7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper));
      }
      static zip8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__zip.ZipStream.zip8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper));
      }
      static zip9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__zip.ZipStream.zip9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper));
      }
      asBroadcastStream(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        return new (ObservableOfT()).new(this[_stream].asBroadcastStream({onListen: onListen, onCancel: onCancel}));
      }
      asyncExpand(S, mapper) {
        return new (src__observables__observable.Observable$(S)).new(this[_stream].asyncExpand(S, mapper));
      }
      asyncMap(S, convert) {
        return new (src__observables__observable.Observable$(S)).new(this[_stream].asyncMap(S, convert));
      }
      buffer(sampler) {
        SamplerBuilderOfT$ListOfT()._check(sampler);
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(dart.fn((stream, bufferHandler, scheduleHandler) => sampler(stream, bufferHandler, scheduleHandler), SamplerBuilderOfT$ListOfT())));
      }
      bufferCount(count, startBufferEvery) {
        if (startBufferEvery === void 0) startBufferEvery = 0;
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(src__samplers__buffer_strategy.onCount(T, ListOfT(), count, startBufferEvery)));
      }
      bufferFuture(O, onFutureHandler) {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(src__samplers__buffer_strategy.onFuture(T, ListOfT(), O, onFutureHandler)));
      }
      bufferTest(onTestHandler) {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(src__samplers__buffer_strategy.onTest(T, ListOfT(), onTestHandler)));
      }
      bufferTime(duration) {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(src__samplers__buffer_strategy.onTime(T, ListOfT(), duration)));
      }
      bufferWhen(O, other) {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(src__samplers__buffer_strategy.onStream(T, ListOfT(), O, other)));
      }
      cast(R) {
        return new (src__observables__observable.Observable$(R)).new(this[_stream].cast(R));
      }
      concatMap(S, mapper) {
        return new (src__observables__observable.Observable$(S)).new(this[_stream].asyncExpand(S, mapper));
      }
      concatWith(other) {
        IterableOfStreamOfT()._check(other);
        return new (ObservableOfT()).new(new (ConcatStreamOfT()).new((() => {
          let _ = JSArrayOfStreamOfT().of([this[_stream]]);
          _[$addAll](other);
          return _;
        })()));
      }
      contains(needle) {
        return new (AsObservableFutureOfbool()).new(this[_stream].contains(needle));
      }
      debounce(duration) {
        return this.transform(T, new (DebounceStreamTransformerOfT()).new(duration));
      }
      defaultIfEmpty(defaultValue) {
        T._check(defaultValue);
        return this.transform(T, new (DefaultIfEmptyStreamTransformerOfT()).new(defaultValue));
      }
      delay(duration) {
        return this.transform(T, new (DelayStreamTransformerOfT()).new(duration));
      }
      dematerialize(S) {
        return this.cast(src__utils__notification.Notification$(S)).transform(S, new (src__transformers__dematerialize.DematerializeStreamTransformer$(S)).new());
      }
      distinct(equals) {
        if (equals === void 0) equals = null;
        return new (ObservableOfT()).new(this[_stream].distinct(equals));
      }
      distinctUnique(opts) {
        let equals = opts && 'equals' in opts ? opts.equals : null;
        let hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
        return this.transform(T, new (DistinctUniqueStreamTransformerOfT()).new({equals: equals, hashCode: hashCode}));
      }
      doOnCancel(onCancel) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onCancel: onCancel}));
      }
      doOnData(onData) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onData: onData}));
      }
      doOnDone(onDone) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onDone: onDone}));
      }
      doOnEach(onEach) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onEach: onEach}));
      }
      doOnError(onError) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onError: onError}));
      }
      doOnListen(onListen) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onListen: onListen}));
      }
      doOnPause(onPause) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onPause: onPause}));
      }
      doOnResume(onResume) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onResume: onResume}));
      }
      drain(S, futureValue) {
        if (futureValue === void 0) futureValue = null;
        return new (src__futures__as_observable_future.AsObservableFuture$(S)).new(this[_stream].drain(S, futureValue));
      }
      elementAt(index) {
        return new (AsObservableFutureOfT()).new(this[_stream].elementAt(index));
      }
      every(test) {
        return new (AsObservableFutureOfbool()).new(this[_stream].every(test));
      }
      exhaustMap(S, mapper) {
        return this.transform(S, new (src__transformers__exhaust_map.ExhaustMapStreamTransformer$(T, S)).new(mapper));
      }
      expand(S, convert) {
        return new (src__observables__observable.Observable$(S)).new(this[_stream].expand(S, convert));
      }
      get first() {
        return new (AsObservableFutureOfT()).new(this[_stream].first);
      }
      firstWhere(test, opts) {
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return new (AsObservableFutureOfT()).new(this[_stream].firstWhere(test, {orElse: orElse}));
      }
      flatMap(S, mapper) {
        return this.transform(S, new (src__transformers__flat_map.FlatMapStreamTransformer$(T, S)).new(mapper));
      }
      flatMapIterable(S, mapper) {
        return this.transform(core.Iterable$(S), new (src__transformers__flat_map.FlatMapStreamTransformer$(T, core.Iterable$(S))).new(mapper)).expand(S, dart.fn(iterable => iterable, dart.fnType(core.Iterable$(S), [core.Iterable$(S)])));
      }
      fold(S, initialValue, combine) {
        return new (src__futures__as_observable_future.AsObservableFuture$(S)).new(this[_stream].fold(S, initialValue, combine));
      }
      forEach(action) {
        return new src__futures__as_observable_future.AsObservableFuture.new(this[_stream].forEach(action));
      }
      handleError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return new (ObservableOfT()).new(this[_stream].handleError(onError, {test: test}));
      }
      ignoreElements() {
        return this.transform(T, new (IgnoreElementsStreamTransformerOfT()).new());
      }
      interval(duration) {
        return this.transform(T, new (IntervalStreamTransformerOfT()).new(duration));
      }
      get isBroadcast() {
        return this[_stream] != null ? this[_stream].isBroadcast : false;
      }
      get isEmpty() {
        return new (AsObservableFutureOfbool()).new(this[_stream].isEmpty);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return new (AsObservableFutureOfString()).new(this[_stream].join(separator));
      }
      get last() {
        return new (AsObservableFutureOfT()).new(this[_stream].last);
      }
      lastWhere(test, opts) {
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return new (AsObservableFutureOfT()).new(this[_stream].lastWhere(test, {orElse: orElse}));
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_stream].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      get length() {
        return new (AsObservableFutureOfint()).new(this[_stream].length);
      }
      map(S, convert) {
        return new (src__observables__observable.Observable$(S)).new(this[_stream].map(S, convert));
      }
      mapTo(S, value) {
        return this.transform(S, new (src__transformers__map_to.MapToStreamTransformer$(T, S)).new(value));
      }
      materialize() {
        return this.transform(NotificationOfT(), new (MaterializeStreamTransformerOfT()).new());
      }
      max(comparator) {
        if (comparator === void 0) comparator = null;
        return new (AsObservableFutureOfT()).new(new (StreamMaxFutureOfT()).new(this[_stream], comparator));
      }
      mergeWith(streams) {
        IterableOfStreamOfT()._check(streams);
        return new (ObservableOfT()).new(new (MergeStreamOfT()).new((() => {
          let _ = JSArrayOfStreamOfT().of([this[_stream]]);
          _[$addAll](streams);
          return _;
        })()));
      }
      min(comparator) {
        if (comparator === void 0) comparator = null;
        return new (AsObservableFutureOfT()).new(new (StreamMinFutureOfT()).new(this[_stream], comparator));
      }
      ofType(S, typeToken) {
        return this.transform(S, new (src__transformers__of_type.OfTypeStreamTransformer$(T, S)).new(typeToken));
      }
      onErrorResumeNext(recoveryStream) {
        StreamOfT()._check(recoveryStream);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(dart.fn(e => recoveryStream, dynamicToStreamOfT())));
      }
      onErrorResume(recoveryFn) {
        dynamicToStreamOfT()._check(recoveryFn);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(recoveryFn));
      }
      onErrorReturn(returnValue) {
        T._check(returnValue);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(dart.fn(e => ObservableOfT().just(returnValue), dynamicToObservableOfT())));
      }
      onErrorReturnWith(returnFn) {
        dynamicToT()._check(returnFn);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(dart.fn(e => ObservableOfT().just(returnFn(e)), dynamicToObservableOfT())));
      }
      pairwise() {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(src__samplers__buffer_strategy.onCount(T, ListOfT(), 2, 1), {exhaustBufferOnDone: false}));
      }
      pipe(streamConsumer) {
        StreamConsumerOfT()._check(streamConsumer);
        return new src__futures__as_observable_future.AsObservableFuture.new(this[_stream].pipe(streamConsumer));
      }
      reduce(combine) {
        TAndTToT()._check(combine);
        return new (AsObservableFutureOfT()).new(this[_stream].reduce(combine));
      }
      sample(sampleStream) {
        return this.transform(T, new (SampleStreamTransformerOfT()).new(sampleStream));
      }
      scan(S, accumulator, seed) {
        if (seed === void 0) seed = null;
        return this.transform(S, new (src__transformers__scan.ScanStreamTransformer$(T, S)).new(accumulator, seed));
      }
      get single() {
        return new (AsObservableFutureOfT()).new(this[_stream].single);
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return new (AsObservableFutureOfT()).new(this[_stream].singleWhere(test, {orElse: orElse}));
      }
      skip(count) {
        return new (ObservableOfT()).new(this[_stream].skip(count));
      }
      skipUntil(S, otherStream) {
        return this.transform(T, new (src__transformers__skip_until.SkipUntilStreamTransformer$(T, S)).new(otherStream));
      }
      skipWhile(test) {
        return new (ObservableOfT()).new(this[_stream].skipWhile(test));
      }
      startWith(startValue) {
        T._check(startValue);
        return this.transform(T, new (StartWithStreamTransformerOfT()).new(startValue));
      }
      startWithMany(startValues) {
        ListOfT()._check(startValues);
        return this.transform(T, new (StartWithManyStreamTransformerOfT()).new(startValues));
      }
      switchIfEmpty(fallbackStream) {
        StreamOfT()._check(fallbackStream);
        return this.transform(T, new (SwitchIfEmptyStreamTransformerOfT()).new(fallbackStream));
      }
      switchMap(S, mapper) {
        return this.transform(S, new (src__transformers__switch_map.SwitchMapStreamTransformer$(T, S)).new(mapper));
      }
      take(count) {
        return new (ObservableOfT()).new(this[_stream].take(count));
      }
      takeUntil(S, otherStream) {
        return this.transform(T, new (src__transformers__take_until.TakeUntilStreamTransformer$(T, S)).new(otherStream));
      }
      takeWhile(test) {
        return new (ObservableOfT()).new(this[_stream].takeWhile(test));
      }
      throttle(duration) {
        return this.transform(T, new (ThrottleStreamTransformerOfT()).new(duration));
      }
      timeInterval() {
        return this.transform(TimeIntervalOfT(), new (TimeIntervalStreamTransformerOfT()).new());
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        return new (ObservableOfT()).new(this[_stream].timeout(timeLimit, {onTimeout: onTimeout}));
      }
      timestamp() {
        return this.transform(TimestampedOfT(), new (TimestampStreamTransformerOfT()).new());
      }
      transform(S, streamTransformer) {
        async.StreamTransformer$(T, S)._check(streamTransformer);
        return new (src__observables__observable.Observable$(S)).new(super.transform(S, streamTransformer));
      }
      toList() {
        return new (AsObservableFutureOfListOfT()).new(this[_stream].toList());
      }
      toSet() {
        return new (AsObservableFutureOfSetOfT()).new(this[_stream].toSet());
      }
      where(test) {
        return new (ObservableOfT()).new(this[_stream].where(test));
      }
      window(sampler) {
        SamplerBuilderOfT$StreamOfT()._check(sampler);
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(dart.fn((stream, bufferHandler, scheduleHandler) => sampler(stream, bufferHandler, scheduleHandler), SamplerBuilderOfT$StreamOfT())));
      }
      windowCount(count, startBufferEvery) {
        if (startBufferEvery === void 0) startBufferEvery = 0;
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(src__samplers__buffer_strategy.onCount(T, StreamOfT(), count, startBufferEvery)));
      }
      windowFuture(O, onFutureHandler) {
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(src__samplers__buffer_strategy.onFuture(T, StreamOfT(), O, onFutureHandler)));
      }
      windowTest(onTestHandler) {
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(src__samplers__buffer_strategy.onTest(T, StreamOfT(), onTestHandler)));
      }
      windowTime(duration) {
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(src__samplers__buffer_strategy.onTime(T, StreamOfT(), duration)));
      }
      windowWhen(O, other) {
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(src__samplers__buffer_strategy.onStream(T, StreamOfT(), O, other)));
      }
      withLatestFrom(S, R, latestFromStream, fn) {
        return this.transform(R, new (src__transformers__with_latest_from.WithLatestFromStreamTransformer$(T, S, R)).new(latestFromStream, fn));
      }
      zipWith(S, R, other, zipper) {
        return new (src__observables__observable.Observable$(R)).new(src__streams__zip.ZipStream.zip2(T, S, R, this[_stream], other, zipper));
      }
      publish() {
        return PublishConnectableObservableOfT().new(this);
      }
      publishValue(opts) {
        let seedValue = opts && 'seedValue' in opts ? opts.seedValue : null;
        T._check(seedValue);
        return ValueConnectableObservableOfT().new(this, {seedValue: seedValue});
      }
      publishReplay(opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        return ReplayConnectableObservableOfT().new(this, {maxSize: maxSize});
      }
      share() {
        return this.publish().refCount();
      }
      shareValue(opts) {
        let seedValue = opts && 'seedValue' in opts ? opts.seedValue : null;
        T._check(seedValue);
        return this.publishValue({seedValue: seedValue}).refCount();
      }
      shareReplay(opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        return this.publishReplay({maxSize: maxSize}).refCount();
      }
    }
    (Observable.new = function(stream) {
      this[_stream] = stream;
      Observable.__proto__.new.call(this);
    }).prototype = Observable.prototype;
    dart.addTypeTests(Observable);
    Observable.prototype[_is_Observable_default] = true;
    dart.setMethodSignature(Observable, () => ({
      __proto__: dart.getMethods(Observable.__proto__),
      any: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(core.bool), [dart.fnType(core.bool, [T])]),
      asBroadcastStream: dart.fnType(src__observables__observable.Observable$(T), [], {onListen: dart.fnType(dart.void, [async.StreamSubscription$(T)]), onCancel: dart.fnType(dart.void, [async.StreamSubscription$(T)])}),
      asyncExpand: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      asyncMap: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(async.FutureOr$(S), [T])]]),
      buffer: dart.fnType(src__observables__observable.Observable$(core.List$(T)), [core.Object]),
      bufferCount: dart.fnType(src__observables__observable.Observable$(core.List$(T)), [core.int], [core.int]),
      bufferFuture: dart.gFnType(O => [src__observables__observable.Observable$(core.List$(T)), [dart.fnType(async.Future$(O), [])]]),
      bufferTest: dart.fnType(src__observables__observable.Observable$(core.List$(T)), [dart.fnType(core.bool, [T])]),
      bufferTime: dart.fnType(src__observables__observable.Observable$(core.List$(T)), [core.Duration]),
      bufferWhen: dart.gFnType(O => [src__observables__observable.Observable$(core.List$(T)), [async.Stream$(O)]]),
      cast: dart.gFnType(R => [src__observables__observable.Observable$(R), []]),
      concatMap: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      concatWith: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      contains: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(core.bool), [core.Object]),
      debounce: dart.fnType(src__observables__observable.Observable$(T), [core.Duration]),
      defaultIfEmpty: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      delay: dart.fnType(src__observables__observable.Observable$(T), [core.Duration]),
      dematerialize: dart.gFnType(S => [src__observables__observable.Observable$(S), []]),
      distinct: dart.fnType(src__observables__observable.Observable$(T), [], [dart.fnType(core.bool, [T, T])]),
      distinctUnique: dart.fnType(src__observables__observable.Observable$(T), [], {equals: dart.fnType(core.bool, [T, T]), hashCode: dart.fnType(core.int, [T])}),
      doOnCancel: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(dart.void, [])]),
      doOnData: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(dart.void, [T])]),
      doOnDone: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(dart.void, [])]),
      doOnEach: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(dart.void, [src__utils__notification.Notification$(T)])]),
      doOnError: dart.fnType(src__observables__observable.Observable$(T), [core.Function]),
      doOnListen: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(dart.void, [])]),
      doOnPause: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(dart.void, [async.Future])]),
      doOnResume: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(dart.void, [])]),
      drain: dart.gFnType(S => [src__futures__as_observable_future.AsObservableFuture$(S), [], [S]]),
      elementAt: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(T), [core.int]),
      every: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(core.bool), [dart.fnType(core.bool, [T])]),
      exhaustMap: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      expand: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(core.Iterable$(S), [T])]]),
      firstWhere: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(T), [dart.fnType(core.bool, [T])], {defaultValue: dart.fnType(dart.dynamic, []), orElse: core.Object}),
      flatMap: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      flatMapIterable: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(async.Stream$(core.Iterable$(S)), [T])]]),
      fold: dart.gFnType(S => [src__futures__as_observable_future.AsObservableFuture$(S), [S, dart.fnType(S, [S, T])]]),
      forEach: dart.fnType(src__futures__as_observable_future.AsObservableFuture, [dart.fnType(dart.void, [T])]),
      handleError: dart.fnType(src__observables__observable.Observable$(T), [core.Function], {test: dart.fnType(core.bool, [dart.dynamic])}),
      ignoreElements: dart.fnType(src__observables__observable.Observable$(T), []),
      interval: dart.fnType(src__observables__observable.Observable$(T), [core.Duration]),
      join: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(core.String), [], [core.String]),
      lastWhere: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(T), [dart.fnType(core.bool, [T])], {defaultValue: dart.fnType(core.Object, []), orElse: core.Object}),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool}),
      map: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(S, [T])]]),
      mapTo: dart.gFnType(S => [src__observables__observable.Observable$(S), [S]]),
      materialize: dart.fnType(src__observables__observable.Observable$(src__utils__notification.Notification$(T)), []),
      max: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(T), [], [dart.fnType(core.int, [T, T])]),
      mergeWith: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      min: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(T), [], [dart.fnType(core.int, [T, T])]),
      ofType: dart.gFnType(S => [src__observables__observable.Observable$(S), [src__utils__type_token.TypeToken$(S)]]),
      onErrorResumeNext: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      onErrorResume: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      onErrorReturn: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      onErrorReturnWith: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      pairwise: dart.fnType(src__observables__observable.Observable$(core.List$(T)), []),
      pipe: dart.fnType(src__futures__as_observable_future.AsObservableFuture, [core.Object]),
      reduce: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(T), [core.Object]),
      sample: dart.fnType(src__observables__observable.Observable$(T), [async.Stream]),
      scan: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(S, [S, T, core.int])], [S]]),
      singleWhere: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(T), [dart.fnType(core.bool, [T])], {orElse: core.Object}),
      skip: dart.fnType(src__observables__observable.Observable$(T), [core.int]),
      skipUntil: dart.gFnType(S => [src__observables__observable.Observable$(T), [async.Stream$(S)]]),
      skipWhile: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(core.bool, [T])]),
      startWith: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      startWithMany: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      switchIfEmpty: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      switchMap: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      take: dart.fnType(src__observables__observable.Observable$(T), [core.int]),
      takeUntil: dart.gFnType(S => [src__observables__observable.Observable$(T), [async.Stream$(S)]]),
      takeWhile: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(core.bool, [T])]),
      throttle: dart.fnType(src__observables__observable.Observable$(T), [core.Duration]),
      timeInterval: dart.fnType(src__observables__observable.Observable$(src__transformers__time_interval.TimeInterval$(T)), []),
      timeout: dart.fnType(src__observables__observable.Observable$(T), [core.Duration], {onTimeout: dart.fnType(dart.void, [async.EventSink$(T)])}),
      timestamp: dart.fnType(src__observables__observable.Observable$(src__transformers__timestamp.Timestamped$(T)), []),
      transform: dart.gFnType(S => [src__observables__observable.Observable$(S), [core.Object]]),
      toList: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(core.List$(T)), []),
      toSet: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(core.Set$(T)), []),
      where: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(core.bool, [T])]),
      window: dart.fnType(src__observables__observable.Observable$(async.Stream$(T)), [core.Object]),
      windowCount: dart.fnType(src__observables__observable.Observable$(async.Stream$(T)), [core.int], [core.int]),
      windowFuture: dart.gFnType(O => [src__observables__observable.Observable$(async.Stream$(T)), [dart.fnType(async.Future$(O), [])]]),
      windowTest: dart.fnType(src__observables__observable.Observable$(async.Stream$(T)), [dart.fnType(core.bool, [T])]),
      windowTime: dart.fnType(src__observables__observable.Observable$(async.Stream$(T)), [core.Duration]),
      windowWhen: dart.gFnType(O => [src__observables__observable.Observable$(async.Stream$(T)), [async.Stream$(O)]]),
      withLatestFrom: dart.gFnType((S, R) => [src__observables__observable.Observable$(R), [async.Stream$(S), dart.fnType(R, [T, S])]]),
      zipWith: dart.gFnType((S, R) => [src__observables__observable.Observable$(R), [async.Stream$(S), dart.fnType(R, [T, S])]]),
      publish: dart.fnType(src__observables__connectable_observable.ConnectableObservable$(T), []),
      publishValue: dart.fnType(src__observables__connectable_observable.ValueConnectableObservable$(T), [], {seedValue: core.Object}),
      publishReplay: dart.fnType(src__observables__connectable_observable.ReplayConnectableObservable$(T), [], {maxSize: core.int}),
      share: dart.fnType(src__observables__observable.Observable$(T), []),
      shareValue: dart.fnType(src__observables__value_observable.ValueObservable$(T), [], {seedValue: core.Object}),
      shareReplay: dart.fnType(src__observables__replay_observable.ReplayObservable$(T), [], {maxSize: core.int})
    }));
    dart.setGetterSignature(Observable, () => ({
      __proto__: dart.getGetters(Observable.__proto__),
      first: src__futures__as_observable_future.AsObservableFuture$(T),
      isEmpty: src__futures__as_observable_future.AsObservableFuture$(core.bool),
      last: src__futures__as_observable_future.AsObservableFuture$(T),
      length: src__futures__as_observable_future.AsObservableFuture$(core.int),
      single: src__futures__as_observable_future.AsObservableFuture$(T)
    }));
    dart.setFieldSignature(Observable, () => ({
      __proto__: dart.getFields(Observable.__proto__),
      [_stream]: dart.finalFieldType(StreamOfT())
    }));
    return Observable;
  });
  src__observables__observable.Observable = src__observables__observable.Observable$();
  dart.addTypeTests(src__observables__observable.Observable, _is_Observable_default);
  const _is_Subject_default = Symbol('_is_Subject_default');
  src__subjects__subject.Subject$ = dart.generic(T => {
    let _StreamSinkWrapperOfT = () => (_StreamSinkWrapperOfT = dart.constFn(src__subjects__subject._StreamSinkWrapper$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class Subject extends src__observables__observable.Observable$(T) {
      get controller() {
        return this[controller$];
      }
      set controller(value) {
        super.controller = value;
      }
      get sink() {
        return new (_StreamSinkWrapperOfT()).new(this);
      }
      get onListen() {
        return this.controller.onListen;
      }
      set onListen(onListenHandler) {
        this.controller.onListen = onListenHandler;
      }
      get stream() {
        return this;
      }
      get onPause() {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support pause callbacks"));
      }
      set onPause(onPauseHandler) {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support pause callbacks"));
      }
      get onResume() {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support resume callbacks"));
      }
      set onResume(onResumeHandler) {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support resume callbacks"));
      }
      get onCancel() {
        return this.controller.onCancel;
      }
      set onCancel(onCancelHandler) {
        this.controller.onCancel = onCancelHandler;
      }
      get isClosed() {
        return this.controller.isClosed;
      }
      get isPaused() {
        return this.controller.isPaused;
      }
      get hasListener() {
        return this.controller.hasListener;
      }
      get done() {
        return this.controller.done;
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add an error while items are being added from addStream"));
        }
        this.controller.addError(error, stackTrace);
      }
      addStream(source, opts) {
        StreamOfT()._check(source);
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : true;
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add items while items are being added from addStream"));
        }
        let completer = CompleterOfT().new();
        this[_isAddingStreamItems] = true;
        source.listen(dart.fn(event => {
          this[_add](event);
        }, TToNull()), {onError: dart.fn((e, s) => {
            this.controller.addError(e, s);
            if (dart.test(cancelOnError)) {
              this[_isAddingStreamItems] = false;
              completer.completeError(e);
            }
          }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
            this[_isAddingStreamItems] = false;
            completer.complete();
          }, VoidToNull()), cancelOnError: cancelOnError});
        return completer.future;
      }
      add(event) {
        T._check(event);
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add items while items are being added from addStream"));
        }
        this[_add](event);
      }
      [_add](event) {
        T._check(event);
        this.onAdd(event);
        this.controller.add(event);
      }
      onAdd(event) {
        T._check(event);
      }
      close() {
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot close the subject while items are being added from addStream"));
        }
        return this.controller.close();
      }
    }
    (Subject.new = function(controller, observable) {
      this[_isAddingStreamItems] = false;
      this[controller$] = controller;
      Subject.__proto__.new.call(this, observable);
    }).prototype = Subject.prototype;
    dart.addTypeTests(Subject);
    Subject.prototype[_is_Subject_default] = true;
    const controller$ = Symbol("Subject.controller");
    Subject[dart.implements] = () => [StreamControllerOfT()];
    dart.setMethodSignature(Subject, () => ({
      __proto__: dart.getMethods(Subject.__proto__),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object], {cancelOnError: core.bool}),
      add: dart.fnType(dart.void, [core.Object]),
      [_add]: dart.fnType(dart.void, [core.Object]),
      onAdd: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(Subject, () => ({
      __proto__: dart.getGetters(Subject.__proto__),
      sink: async.StreamSink$(T),
      onListen: dart.fnType(dart.void, []),
      stream: src__observables__observable.Observable$(T),
      onPause: dart.fnType(dart.void, []),
      onResume: dart.fnType(dart.void, []),
      onCancel: dart.fnType(dart.dynamic, []),
      isClosed: core.bool,
      isPaused: core.bool,
      hasListener: core.bool,
      done: async.Future
    }));
    dart.setSetterSignature(Subject, () => ({
      __proto__: dart.getSetters(Subject.__proto__),
      onListen: dart.fnType(dart.void, []),
      onPause: dart.fnType(dart.void, []),
      onResume: dart.fnType(dart.void, []),
      onCancel: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(Subject, () => ({
      __proto__: dart.getFields(Subject.__proto__),
      controller: dart.finalFieldType(StreamControllerOfT()),
      [_isAddingStreamItems]: dart.fieldType(core.bool)
    }));
    return Subject;
  });
  src__subjects__subject.Subject = src__subjects__subject.Subject$();
  dart.addTypeTests(src__subjects__subject.Subject, _is_Subject_default);
  const _is_ReplaySubject_default = Symbol('_is_ReplaySubject_default');
  src__subjects__replay_subject.ReplaySubject$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let QueueOfT = () => (QueueOfT = dart.constFn(collection.Queue$(T)))();
    let ObservableOfT = () => (ObservableOfT = dart.constFn(src__observables__observable.Observable$(T)))();
    let VoidToObservableOfT = () => (VoidToObservableOfT = dart.constFn(dart.fnType(ObservableOfT(), [])))();
    let ReplaySubjectOfT = () => (ReplaySubjectOfT = dart.constFn(src__subjects__replay_subject.ReplaySubject$(T)))();
    let ReplayObservableOfT = () => (ReplayObservableOfT = dart.constFn(src__observables__replay_observable.ReplayObservable$(T)))();
    class ReplaySubject extends src__subjects__subject.Subject$(T) {
      static new(opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = StreamControllerOfT().broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let queue = QueueOfT().new();
        return new (ReplaySubjectOfT()).__(controller, ObservableOfT().defer(dart.fn(() => new (ObservableOfT()).new(controller.stream).startWithMany(queue.toList({growable: false})), VoidToObservableOfT()), {reusable: true}), queue, maxSize);
      }
      onAdd(event) {
        T._check(event);
        if (this[_queue].length == this[_maxSize]) {
          this[_queue].removeFirst();
        }
        this[_queue].add(event);
      }
      get values() {
        return this[_queue].toList({growable: false});
      }
    }
    (ReplaySubject.__ = function(controller, observable, queue, maxSize) {
      this[_queue] = queue;
      this[_maxSize] = maxSize;
      ReplaySubject.__proto__.new.call(this, controller, observable);
    }).prototype = ReplaySubject.prototype;
    dart.addTypeTests(ReplaySubject);
    ReplaySubject.prototype[_is_ReplaySubject_default] = true;
    ReplaySubject[dart.implements] = () => [ReplayObservableOfT()];
    dart.setMethodSignature(ReplaySubject, () => ({
      __proto__: dart.getMethods(ReplaySubject.__proto__),
      onAdd: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(ReplaySubject, () => ({
      __proto__: dart.getGetters(ReplaySubject.__proto__),
      values: core.List$(T)
    }));
    dart.setFieldSignature(ReplaySubject, () => ({
      __proto__: dart.getFields(ReplaySubject.__proto__),
      [_queue]: dart.finalFieldType(QueueOfT()),
      [_maxSize]: dart.finalFieldType(core.int)
    }));
    return ReplaySubject;
  });
  src__subjects__replay_subject.ReplaySubject = src__subjects__replay_subject.ReplaySubject$();
  dart.addTypeTests(src__subjects__replay_subject.ReplaySubject, _is_ReplaySubject_default);
  const _is_PublishSubject_default = Symbol('_is_PublishSubject_default');
  src__subjects__publish_subject.PublishSubject$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let ObservableOfT = () => (ObservableOfT = dart.constFn(src__observables__observable.Observable$(T)))();
    let PublishSubjectOfT = () => (PublishSubjectOfT = dart.constFn(src__subjects__publish_subject.PublishSubject$(T)))();
    class PublishSubject extends src__subjects__subject.Subject$(T) {
      static new(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = StreamControllerOfT().broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        return new (PublishSubjectOfT()).__(controller, new (ObservableOfT()).new(controller.stream));
      }
    }
    (PublishSubject.__ = function(controller, observable) {
      PublishSubject.__proto__.new.call(this, controller, observable);
    }).prototype = PublishSubject.prototype;
    dart.addTypeTests(PublishSubject);
    PublishSubject.prototype[_is_PublishSubject_default] = true;
    return PublishSubject;
  });
  src__subjects__publish_subject.PublishSubject = src__subjects__publish_subject.PublishSubject$();
  dart.addTypeTests(src__subjects__publish_subject.PublishSubject, _is_PublishSubject_default);
  const _wrapper = Symbol('_wrapper');
  const _is_BehaviorSubject_default = Symbol('_is_BehaviorSubject_default');
  src__subjects__behavior_subject.BehaviorSubject$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let _WrapperOfT = () => (_WrapperOfT = dart.constFn(src__subjects__behavior_subject._Wrapper$(T)))();
    let ObservableOfT = () => (ObservableOfT = dart.constFn(src__observables__observable.Observable$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let VoidToStreamOfT = () => (VoidToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [])))();
    let BehaviorSubjectOfT = () => (BehaviorSubjectOfT = dart.constFn(src__subjects__behavior_subject.BehaviorSubject$(T)))();
    let ValueObservableOfT = () => (ValueObservableOfT = dart.constFn(src__observables__value_observable.ValueObservable$(T)))();
    class BehaviorSubject extends src__subjects__subject.Subject$(T) {
      static new(opts) {
        let seedValue = opts && 'seedValue' in opts ? opts.seedValue : null;
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = StreamControllerOfT().broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let wrapper = new (_WrapperOfT()).new(seedValue);
        return new (BehaviorSubjectOfT()).__(controller, ObservableOfT().defer(dart.fn(() => wrapper.latestValue == null ? controller.stream : new (ObservableOfT()).new(controller.stream).startWith(wrapper.latestValue), VoidToStreamOfT()), {reusable: true}), wrapper);
      }
      onAdd(event) {
        T._check(event);
        this[_wrapper].latestValue = event;
      }
      get stream() {
        return this;
      }
      get value() {
        return this[_wrapper].latestValue;
      }
      set value(newValue) {
        T._check(newValue);
        return this.add(newValue);
      }
    }
    (BehaviorSubject.__ = function(controller, observable, wrapper) {
      this[_wrapper] = wrapper;
      BehaviorSubject.__proto__.new.call(this, controller, observable);
    }).prototype = BehaviorSubject.prototype;
    dart.addTypeTests(BehaviorSubject);
    BehaviorSubject.prototype[_is_BehaviorSubject_default] = true;
    BehaviorSubject[dart.implements] = () => [ValueObservableOfT()];
    dart.setMethodSignature(BehaviorSubject, () => ({
      __proto__: dart.getMethods(BehaviorSubject.__proto__),
      onAdd: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(BehaviorSubject, () => ({
      __proto__: dart.getGetters(BehaviorSubject.__proto__),
      stream: src__observables__value_observable.ValueObservable$(T),
      value: T
    }));
    dart.setSetterSignature(BehaviorSubject, () => ({
      __proto__: dart.getSetters(BehaviorSubject.__proto__),
      value: T
    }));
    dart.setFieldSignature(BehaviorSubject, () => ({
      __proto__: dart.getFields(BehaviorSubject.__proto__),
      [_wrapper]: dart.fieldType(_WrapperOfT())
    }));
    return BehaviorSubject;
  });
  src__subjects__behavior_subject.BehaviorSubject = src__subjects__behavior_subject.BehaviorSubject$();
  dart.addTypeTests(src__subjects__behavior_subject.BehaviorSubject, _is_BehaviorSubject_default);
  const _is__Wrapper_default = Symbol('_is__Wrapper_default');
  src__subjects__behavior_subject._Wrapper$ = dart.generic(T => {
    class _Wrapper extends core.Object {}
    (_Wrapper.new = function(latestValue) {
      this.latestValue = latestValue;
    }).prototype = _Wrapper.prototype;
    dart.addTypeTests(_Wrapper);
    _Wrapper.prototype[_is__Wrapper_default] = true;
    dart.setFieldSignature(_Wrapper, () => ({
      __proto__: dart.getFields(_Wrapper.__proto__),
      latestValue: dart.fieldType(T)
    }));
    return _Wrapper;
  });
  src__subjects__behavior_subject._Wrapper = src__subjects__behavior_subject._Wrapper$();
  dart.addTypeTests(src__subjects__behavior_subject._Wrapper, _is__Wrapper_default);
  const _is_ValueObservable_default = Symbol('_is_ValueObservable_default');
  src__observables__value_observable.ValueObservable$ = dart.generic(T => {
    let ObservableOfT = () => (ObservableOfT = dart.constFn(src__observables__observable.Observable$(T)))();
    class ValueObservable extends core.Object {}
    (ValueObservable.new = function() {
    }).prototype = ValueObservable.prototype;
    dart.addTypeTests(ValueObservable);
    ValueObservable.prototype[_is_ValueObservable_default] = true;
    ValueObservable[dart.implements] = () => [ObservableOfT()];
    return ValueObservable;
  });
  src__observables__value_observable.ValueObservable = src__observables__value_observable.ValueObservable$();
  dart.addTypeTests(src__observables__value_observable.ValueObservable, _is_ValueObservable_default);
  const _is_ReplayObservable_default = Symbol('_is_ReplayObservable_default');
  src__observables__replay_observable.ReplayObservable$ = dart.generic(T => {
    let ObservableOfT = () => (ObservableOfT = dart.constFn(src__observables__observable.Observable$(T)))();
    class ReplayObservable extends core.Object {}
    (ReplayObservable.new = function() {
    }).prototype = ReplayObservable.prototype;
    dart.addTypeTests(ReplayObservable);
    ReplayObservable.prototype[_is_ReplayObservable_default] = true;
    ReplayObservable[dart.implements] = () => [ObservableOfT()];
    return ReplayObservable;
  });
  src__observables__replay_observable.ReplayObservable = src__observables__replay_observable.ReplayObservable$();
  dart.addTypeTests(src__observables__replay_observable.ReplayObservable, _is_ReplayObservable_default);
  const _is_ConnectableObservable_default = Symbol('_is_ConnectableObservable_default');
  src__observables__connectable_observable.ConnectableObservable$ = dart.generic(T => {
    class ConnectableObservable extends src__observables__observable.Observable$(T) {}
    (ConnectableObservable.new = function(stream) {
      ConnectableObservable.__proto__.new.call(this, stream);
    }).prototype = ConnectableObservable.prototype;
    dart.addTypeTests(ConnectableObservable);
    ConnectableObservable.prototype[_is_ConnectableObservable_default] = true;
    return ConnectableObservable;
  });
  src__observables__connectable_observable.ConnectableObservable = src__observables__connectable_observable.ConnectableObservable$();
  dart.addTypeTests(src__observables__connectable_observable.ConnectableObservable, _is_ConnectableObservable_default);
  const _source = Symbol('_source');
  const _subject = Symbol('_subject');
  const _is_PublishConnectableObservable_default = Symbol('_is_PublishConnectableObservable_default');
  src__observables__connectable_observable.PublishConnectableObservable$ = dart.generic(T => {
    let PublishSubjectOfT = () => (PublishSubjectOfT = dart.constFn(src__subjects__publish_subject.PublishSubject$(T)))();
    let PublishConnectableObservableOfT = () => (PublishConnectableObservableOfT = dart.constFn(src__observables__connectable_observable.PublishConnectableObservable$(T)))();
    let ConnectableObservableStreamSubscriptionOfT = () => (ConnectableObservableStreamSubscriptionOfT = dart.constFn(src__observables__connectable_observable.ConnectableObservableStreamSubscription$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class PublishConnectableObservable extends src__observables__connectable_observable.ConnectableObservable$(T) {
      static new(source) {
        return new (PublishConnectableObservableOfT()).__(source, PublishSubjectOfT().new());
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject];
      }
      connect() {
        return new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source].listen(dart.bind(this[_subject], 'add'), {onError: dart.bind(this[_subject], 'addError')}), this[_subject]);
      }
      refCount() {
        let subscription = null;
        this[_subject].onListen = dart.fn(() => {
          subscription = new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source].listen(dart.bind(this[_subject], 'add'), {onError: dart.bind(this[_subject], 'addError')}), this[_subject]);
        }, VoidToNull());
        this[_subject].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject];
      }
    }
    (PublishConnectableObservable.__ = function(source, subject) {
      this[_source] = source;
      this[_subject] = subject;
      PublishConnectableObservable.__proto__.new.call(this, subject);
    }).prototype = PublishConnectableObservable.prototype;
    dart.addTypeTests(PublishConnectableObservable);
    PublishConnectableObservable.prototype[_is_PublishConnectableObservable_default] = true;
    dart.setMethodSignature(PublishConnectableObservable, () => ({
      __proto__: dart.getMethods(PublishConnectableObservable.__proto__),
      autoConnect: dart.fnType(src__observables__observable.Observable$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(src__observables__observable.Observable$(T), [])
    }));
    dart.setFieldSignature(PublishConnectableObservable, () => ({
      __proto__: dart.getFields(PublishConnectableObservable.__proto__),
      [_source]: dart.finalFieldType(StreamOfT()),
      [_subject]: dart.finalFieldType(PublishSubjectOfT())
    }));
    return PublishConnectableObservable;
  });
  src__observables__connectable_observable.PublishConnectableObservable = src__observables__connectable_observable.PublishConnectableObservable$();
  dart.addTypeTests(src__observables__connectable_observable.PublishConnectableObservable, _is_PublishConnectableObservable_default);
  const _is_ValueConnectableObservable_default = Symbol('_is_ValueConnectableObservable_default');
  src__observables__connectable_observable.ValueConnectableObservable$ = dart.generic(T => {
    let BehaviorSubjectOfT = () => (BehaviorSubjectOfT = dart.constFn(src__subjects__behavior_subject.BehaviorSubject$(T)))();
    let ValueConnectableObservableOfT = () => (ValueConnectableObservableOfT = dart.constFn(src__observables__connectable_observable.ValueConnectableObservable$(T)))();
    let ConnectableObservableStreamSubscriptionOfT = () => (ConnectableObservableStreamSubscriptionOfT = dart.constFn(src__observables__connectable_observable.ConnectableObservableStreamSubscription$(T)))();
    let ValueObservableOfT = () => (ValueObservableOfT = dart.constFn(src__observables__value_observable.ValueObservable$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ValueConnectableObservable extends src__observables__connectable_observable.ConnectableObservable$(T) {
      static new(source, opts) {
        let seedValue = opts && 'seedValue' in opts ? opts.seedValue : null;
        return new (ValueConnectableObservableOfT()).__(source, BehaviorSubjectOfT().new({seedValue: seedValue}));
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject];
      }
      connect() {
        return new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source].listen(dart.bind(this[_subject], 'add'), {onError: dart.bind(this[_subject], 'addError')}), this[_subject]);
      }
      refCount() {
        let subscription = null;
        this[_subject].onListen = dart.fn(() => {
          subscription = new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source].listen(dart.bind(this[_subject], 'add'), {onError: dart.bind(this[_subject], 'addError')}), this[_subject]);
        }, VoidToNull());
        this[_subject].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject];
      }
      get value() {
        return this[_subject].value;
      }
    }
    (ValueConnectableObservable.__ = function(source, subject) {
      this[_source] = source;
      this[_subject] = subject;
      ValueConnectableObservable.__proto__.new.call(this, subject);
    }).prototype = ValueConnectableObservable.prototype;
    dart.addTypeTests(ValueConnectableObservable);
    ValueConnectableObservable.prototype[_is_ValueConnectableObservable_default] = true;
    ValueConnectableObservable[dart.implements] = () => [ValueObservableOfT()];
    dart.setMethodSignature(ValueConnectableObservable, () => ({
      __proto__: dart.getMethods(ValueConnectableObservable.__proto__),
      autoConnect: dart.fnType(src__observables__value_observable.ValueObservable$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(src__observables__value_observable.ValueObservable$(T), [])
    }));
    dart.setGetterSignature(ValueConnectableObservable, () => ({
      __proto__: dart.getGetters(ValueConnectableObservable.__proto__),
      value: T
    }));
    dart.setFieldSignature(ValueConnectableObservable, () => ({
      __proto__: dart.getFields(ValueConnectableObservable.__proto__),
      [_source]: dart.finalFieldType(StreamOfT()),
      [_subject]: dart.finalFieldType(BehaviorSubjectOfT())
    }));
    return ValueConnectableObservable;
  });
  src__observables__connectable_observable.ValueConnectableObservable = src__observables__connectable_observable.ValueConnectableObservable$();
  dart.addTypeTests(src__observables__connectable_observable.ValueConnectableObservable, _is_ValueConnectableObservable_default);
  const _is_ReplayConnectableObservable_default = Symbol('_is_ReplayConnectableObservable_default');
  src__observables__connectable_observable.ReplayConnectableObservable$ = dart.generic(T => {
    let ReplaySubjectOfT = () => (ReplaySubjectOfT = dart.constFn(src__subjects__replay_subject.ReplaySubject$(T)))();
    let ReplayConnectableObservableOfT = () => (ReplayConnectableObservableOfT = dart.constFn(src__observables__connectable_observable.ReplayConnectableObservable$(T)))();
    let ConnectableObservableStreamSubscriptionOfT = () => (ConnectableObservableStreamSubscriptionOfT = dart.constFn(src__observables__connectable_observable.ConnectableObservableStreamSubscription$(T)))();
    let ReplayObservableOfT = () => (ReplayObservableOfT = dart.constFn(src__observables__replay_observable.ReplayObservable$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ReplayConnectableObservable extends src__observables__connectable_observable.ConnectableObservable$(T) {
      static new(stream, opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        return new (ReplayConnectableObservableOfT()).__(stream, ReplaySubjectOfT().new({maxSize: maxSize}));
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject];
      }
      connect() {
        return new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source].listen(dart.bind(this[_subject], 'add'), {onError: dart.bind(this[_subject], 'addError')}), this[_subject]);
      }
      refCount() {
        let subscription = null;
        this[_subject].onListen = dart.fn(() => {
          subscription = new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source].listen(dart.bind(this[_subject], 'add'), {onError: dart.bind(this[_subject], 'addError')}), this[_subject]);
        }, VoidToNull());
        this[_subject].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject];
      }
      get values() {
        return this[_subject].values;
      }
    }
    (ReplayConnectableObservable.__ = function(source, subject) {
      this[_source] = source;
      this[_subject] = subject;
      ReplayConnectableObservable.__proto__.new.call(this, subject);
    }).prototype = ReplayConnectableObservable.prototype;
    dart.addTypeTests(ReplayConnectableObservable);
    ReplayConnectableObservable.prototype[_is_ReplayConnectableObservable_default] = true;
    ReplayConnectableObservable[dart.implements] = () => [ReplayObservableOfT()];
    dart.setMethodSignature(ReplayConnectableObservable, () => ({
      __proto__: dart.getMethods(ReplayConnectableObservable.__proto__),
      autoConnect: dart.fnType(src__observables__replay_observable.ReplayObservable$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(src__observables__replay_observable.ReplayObservable$(T), [])
    }));
    dart.setGetterSignature(ReplayConnectableObservable, () => ({
      __proto__: dart.getGetters(ReplayConnectableObservable.__proto__),
      values: core.List$(T)
    }));
    dart.setFieldSignature(ReplayConnectableObservable, () => ({
      __proto__: dart.getFields(ReplayConnectableObservable.__proto__),
      [_source]: dart.finalFieldType(StreamOfT()),
      [_subject]: dart.finalFieldType(ReplaySubjectOfT())
    }));
    return ReplayConnectableObservable;
  });
  src__observables__connectable_observable.ReplayConnectableObservable = src__observables__connectable_observable.ReplayConnectableObservable$();
  dart.addTypeTests(src__observables__connectable_observable.ReplayConnectableObservable, _is_ReplayConnectableObservable_default);
  const _is_ConnectableObservableStreamSubscription_default = Symbol('_is_ConnectableObservableStreamSubscription_default');
  src__observables__connectable_observable.ConnectableObservableStreamSubscription$ = dart.generic(T => {
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let SubjectOfT = () => (SubjectOfT = dart.constFn(src__subjects__subject.Subject$(T)))();
    class ConnectableObservableStreamSubscription extends async.StreamSubscription$(T) {
      cancel() {
        this[_subject].close();
        return this[_source].cancel();
      }
      asFuture(E, futureValue) {
        if (futureValue === void 0) futureValue = null;
        return this[_source].asFuture(E, futureValue);
      }
      get isPaused() {
        return this[_source].isPaused;
      }
      onData(handleData) {
        return this[_source].onData(handleData);
      }
      onDone(handleDone) {
        return this[_source].onDone(handleDone);
      }
      onError(handleError) {
        return this[_source].onError(handleError);
      }
      pause(resumeSignal) {
        if (resumeSignal === void 0) resumeSignal = null;
        return this[_source].pause(resumeSignal);
      }
      resume() {
        return this[_source].resume();
      }
    }
    (ConnectableObservableStreamSubscription.new = function(source, subject) {
      this[_source] = source;
      this[_subject] = subject;
    }).prototype = ConnectableObservableStreamSubscription.prototype;
    dart.addTypeTests(ConnectableObservableStreamSubscription);
    ConnectableObservableStreamSubscription.prototype[_is_ConnectableObservableStreamSubscription_default] = true;
    dart.setMethodSignature(ConnectableObservableStreamSubscription, () => ({
      __proto__: dart.getMethods(ConnectableObservableStreamSubscription.__proto__),
      cancel: dart.fnType(async.Future, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]]),
      onData: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      onDone: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      onError: dart.fnType(dart.void, [core.Function]),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ConnectableObservableStreamSubscription, () => ({
      __proto__: dart.getGetters(ConnectableObservableStreamSubscription.__proto__),
      isPaused: core.bool
    }));
    dart.setFieldSignature(ConnectableObservableStreamSubscription, () => ({
      __proto__: dart.getFields(ConnectableObservableStreamSubscription.__proto__),
      [_source]: dart.finalFieldType(StreamSubscriptionOfT()),
      [_subject]: dart.finalFieldType(SubjectOfT())
    }));
    return ConnectableObservableStreamSubscription;
  });
  src__observables__connectable_observable.ConnectableObservableStreamSubscription = src__observables__connectable_observable.ConnectableObservableStreamSubscription$();
  dart.addTypeTests(src__observables__connectable_observable.ConnectableObservableStreamSubscription, _is_ConnectableObservableStreamSubscription_default);
  const _is_WrappedFuture_default = Symbol('_is_WrappedFuture_default');
  src__futures__wrapped_future.WrappedFuture$ = dart.generic(T => {
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class WrappedFuture extends core.Object {
      get wrapped() {
        return this[wrapped$];
      }
      set wrapped(value) {
        super.wrapped = value;
      }
      asStream() {
        return this.wrapped.asStream();
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return this.wrapped.catchError(onError, {test: test});
      }
      then(S, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return this.wrapped.then(S, onValue, {onError: onError});
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        VoidToFutureOrOfT()._check(onTimeout);
        return this.wrapped.timeout(timeLimit, {onTimeout: onTimeout});
      }
      whenComplete(action) {
        return this.wrapped.whenComplete(action);
      }
    }
    (WrappedFuture.new = function(wrapped) {
      this[wrapped$] = wrapped;
    }).prototype = WrappedFuture.prototype;
    WrappedFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(WrappedFuture);
    WrappedFuture.prototype[_is_WrappedFuture_default] = true;
    const wrapped$ = Symbol("WrappedFuture.wrapped");
    WrappedFuture[dart.implements] = () => [FutureOfT()];
    dart.setMethodSignature(WrappedFuture, () => ({
      __proto__: dart.getMethods(WrappedFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: dart.fnType(core.bool, [core.Object])}),
      then: dart.gFnType(S => [async.Future$(S), [dart.fnType(async.FutureOr$(S), [T])], {onError: core.Function}]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: core.Object}),
      whenComplete: dart.fnType(async.Future$(T), [dart.fnType(dart.void, [])])
    }));
    dart.setFieldSignature(WrappedFuture, () => ({
      __proto__: dart.getFields(WrappedFuture.__proto__),
      wrapped: dart.finalFieldType(FutureOfT())
    }));
    return WrappedFuture;
  });
  src__futures__wrapped_future.WrappedFuture = src__futures__wrapped_future.WrappedFuture$();
  dart.addTypeTests(src__futures__wrapped_future.WrappedFuture, _is_WrappedFuture_default);
  const _is_AsObservableFuture_default = Symbol('_is_AsObservableFuture_default');
  src__futures__as_observable_future.AsObservableFuture$ = dart.generic(T => {
    let ObservableOfT = () => (ObservableOfT = dart.constFn(src__observables__observable.Observable$(T)))();
    class AsObservableFuture extends src__futures__wrapped_future.WrappedFuture$(T) {
      asObservable() {
        return ObservableOfT().fromFuture(this.wrapped);
      }
    }
    (AsObservableFuture.new = function(wrapped) {
      AsObservableFuture.__proto__.new.call(this, wrapped);
    }).prototype = AsObservableFuture.prototype;
    dart.addTypeTests(AsObservableFuture);
    AsObservableFuture.prototype[_is_AsObservableFuture_default] = true;
    dart.setMethodSignature(AsObservableFuture, () => ({
      __proto__: dart.getMethods(AsObservableFuture.__proto__),
      asObservable: dart.fnType(src__observables__observable.Observable$(T), [])
    }));
    return AsObservableFuture;
  });
  src__futures__as_observable_future.AsObservableFuture = src__futures__as_observable_future.AsObservableFuture$();
  dart.addTypeTests(src__futures__as_observable_future.AsObservableFuture, _is_AsObservableFuture_default);
  const _target = Symbol('_target');
  const _is__StreamSinkWrapper_default = Symbol('_is__StreamSinkWrapper_default');
  src__subjects__subject._StreamSinkWrapper$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class _StreamSinkWrapper extends core.Object {
      add(data) {
        T._check(data);
        this[_target].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_target].addError(error, stackTrace);
      }
      close() {
        return this[_target].close();
      }
      addStream(source) {
        StreamOfT()._check(source);
        return this[_target].addStream(source);
      }
      get done() {
        return this[_target].done;
      }
    }
    (_StreamSinkWrapper.new = function(target) {
      this[_target] = target;
    }).prototype = _StreamSinkWrapper.prototype;
    dart.addTypeTests(_StreamSinkWrapper);
    _StreamSinkWrapper.prototype[_is__StreamSinkWrapper_default] = true;
    _StreamSinkWrapper[dart.implements] = () => [StreamSinkOfT()];
    dart.setMethodSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getMethods(_StreamSinkWrapper.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(async.Future, []),
      addStream: dart.fnType(async.Future, [core.Object])
    }));
    dart.setGetterSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getGetters(_StreamSinkWrapper.__proto__),
      done: async.Future
    }));
    dart.setFieldSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getFields(_StreamSinkWrapper.__proto__),
      [_target]: dart.finalFieldType(StreamControllerOfT())
    }));
    return _StreamSinkWrapper;
  });
  src__subjects__subject._StreamSinkWrapper = src__subjects__subject._StreamSinkWrapper$();
  dart.addTypeTests(src__subjects__subject._StreamSinkWrapper, _is__StreamSinkWrapper_default);
  const _isDisposed = Symbol('_isDisposed');
  const _subscriptionsList = Symbol('_subscriptionsList');
  src__utils__composite_subscription.CompositeSubscription = class CompositeSubscription extends core.Object {
    get isDisposed() {
      return this[_isDisposed];
    }
    add(T, subscription) {
      if (dart.test(this.isDisposed)) dart.throw("This composite was disposed, try to use new instance instead");
      this[_subscriptionsList][$add](subscription);
      return subscription;
    }
    remove(subscription) {
      subscription.cancel();
      this[_subscriptionsList][$remove](subscription);
    }
    clear() {
      this[_subscriptionsList][$forEach](dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()));
      this[_subscriptionsList][$clear]();
    }
    dispose() {
      this.clear();
      this[_isDisposed] = true;
    }
  };
  (src__utils__composite_subscription.CompositeSubscription.new = function() {
    this[_isDisposed] = false;
    this[_subscriptionsList] = JSArrayOfStreamSubscription().of([]);
  }).prototype = src__utils__composite_subscription.CompositeSubscription.prototype;
  dart.addTypeTests(src__utils__composite_subscription.CompositeSubscription);
  dart.setMethodSignature(src__utils__composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getMethods(src__utils__composite_subscription.CompositeSubscription.__proto__),
    add: dart.gFnType(T => [async.StreamSubscription$(T), [async.StreamSubscription$(T)]]),
    remove: dart.fnType(dart.void, [async.StreamSubscription]),
    clear: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__utils__composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getGetters(src__utils__composite_subscription.CompositeSubscription.__proto__),
    isDisposed: core.bool
  }));
  dart.setFieldSignature(src__utils__composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getFields(src__utils__composite_subscription.CompositeSubscription.__proto__),
    [_isDisposed]: dart.fieldType(core.bool),
    [_subscriptionsList]: dart.finalFieldType(ListOfStreamSubscription())
  }));
  const _is_StreamMaxFuture_default = Symbol('_is_StreamMaxFuture_default');
  src__futures__stream_max_future.StreamMaxFuture$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToT = () => (ListOfTToT = dart.constFn(dart.fnType(T, [ListOfT()])))();
    class StreamMaxFuture extends src__futures__wrapped_future.WrappedFuture$(T) {}
    (StreamMaxFuture.new = function(stream, comparator) {
      if (comparator === void 0) comparator = null;
      StreamMaxFuture.__proto__.new.call(this, stream.toList().then(T, dart.fn(values => (() => {
        values[$sort](comparator);
        return values;
      })()[$last], ListOfTToT())));
    }).prototype = StreamMaxFuture.prototype;
    dart.addTypeTests(StreamMaxFuture);
    StreamMaxFuture.prototype[_is_StreamMaxFuture_default] = true;
    return StreamMaxFuture;
  });
  src__futures__stream_max_future.StreamMaxFuture = src__futures__stream_max_future.StreamMaxFuture$();
  dart.addTypeTests(src__futures__stream_max_future.StreamMaxFuture, _is_StreamMaxFuture_default);
  const _is_StreamMinFuture_default = Symbol('_is_StreamMinFuture_default');
  src__futures__stream_min_future.StreamMinFuture$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToT = () => (ListOfTToT = dart.constFn(dart.fnType(T, [ListOfT()])))();
    class StreamMinFuture extends src__futures__wrapped_future.WrappedFuture$(T) {}
    (StreamMinFuture.new = function(stream, comparator) {
      if (comparator === void 0) comparator = null;
      StreamMinFuture.__proto__.new.call(this, stream.toList().then(T, dart.fn(values => (() => {
        values[$sort](comparator);
        return values;
      })()[$first], ListOfTToT())));
    }).prototype = StreamMinFuture.prototype;
    dart.addTypeTests(StreamMinFuture);
    StreamMinFuture.prototype[_is_StreamMinFuture_default] = true;
    return StreamMinFuture;
  });
  src__futures__stream_min_future.StreamMinFuture = src__futures__stream_min_future.StreamMinFuture$();
  dart.addTypeTests(src__futures__stream_min_future.StreamMinFuture, _is_StreamMinFuture_default);
  dart.trackLibraries("packages/rxdart/futures.ddc", {
    "package:rxdart/src/subjects/replay_subject.dart": src__subjects__replay_subject,
    "package:rxdart/src/subjects/publish_subject.dart": src__subjects__publish_subject,
    "package:rxdart/src/subjects/behavior_subject.dart": src__subjects__behavior_subject,
    "package:rxdart/src/observables/value_observable.dart": src__observables__value_observable,
    "package:rxdart/src/observables/replay_observable.dart": src__observables__replay_observable,
    "package:rxdart/src/observables/connectable_observable.dart": src__observables__connectable_observable,
    "package:rxdart/rxdart.dart": rxdart,
    "package:rxdart/src/futures/as_observable_future.dart": src__futures__as_observable_future,
    "package:rxdart/futures.dart": futures,
    "package:rxdart/src/observables/observable.dart": src__observables__observable,
    "package:rxdart/src/subjects/subject.dart": src__subjects__subject,
    "package:rxdart/subjects.dart": subjects,
    "package:rxdart/src/utils/composite_subscription.dart": src__utils__composite_subscription,
    "package:rxdart/src/futures/wrapped_future.dart": src__futures__wrapped_future,
    "package:rxdart/src/futures/stream_max_future.dart": src__futures__stream_max_future,
    "package:rxdart/src/futures/stream_min_future.dart": src__futures__stream_min_future
  }, '{"version":3,"sourceRoot":"","sources":["src/observables/observable.dart","src/subjects/subject.dart","src/subjects/replay_subject.dart","src/subjects/publish_subject.dart","src/subjects/behavior_subject.dart","src/observables/value_observable.dart","src/observables/replay_observable.dart","src/observables/connectable_observable.dart","src/futures/wrapped_future.dart","src/futures/as_observable_future.dart","src/utils/composite_subscription.dart","src/futures/stream_max_future.dart","src/futures/stream_min_future.dart"],"names":[],"mappings":"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","file":"futures.ddc.js"}');
  // Exports:
  return {
    src__subjects__replay_subject: src__subjects__replay_subject,
    src__subjects__publish_subject: src__subjects__publish_subject,
    src__subjects__behavior_subject: src__subjects__behavior_subject,
    src__observables__value_observable: src__observables__value_observable,
    src__observables__replay_observable: src__observables__replay_observable,
    src__observables__connectable_observable: src__observables__connectable_observable,
    rxdart: rxdart,
    src__futures__as_observable_future: src__futures__as_observable_future,
    futures: futures,
    src__observables__observable: src__observables__observable,
    src__subjects__subject: src__subjects__subject,
    subjects: subjects,
    src__utils__composite_subscription: src__utils__composite_subscription,
    src__futures__wrapped_future: src__futures__wrapped_future,
    src__futures__stream_max_future: src__futures__stream_max_future,
    src__futures__stream_min_future: src__futures__stream_min_future
  };
});

//# sourceMappingURL=futures.ddc.js.map
