define(['dart_sdk', 'packages/built_value/built_value', 'packages/built_redux/src/action'], function(dart_sdk, built_value, action) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const built_value$ = built_value.built_value;
  const src__action = action.src__action;
  const src__middleware = action.src__middleware;
  const _root = Object.create(null);
  const src__register = Object.create(_root);
  const src__middleware$ = Object.create(_root);
  const src__delay = Object.create(_root);
  const src__runnable = Object.create(_root);
  const src__fork = Object.create(_root);
  const src__task = Object.create(_root);
  const src__process = Object.create(_root);
  const src__manager = Object.create(_root);
  const src__call = Object.create(_root);
  const src__select = Object.create(_root);
  const src__take = Object.create(_root);
  const src__all = Object.create(_root);
  const src__put = Object.create(_root);
  const src__index = Object.create(_root);
  const built_redux_saga = Object.create(_root);
  const $iterator = dartx.iterator;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $add = dartx.add;
  const $_set = dartx._set;
  const $_get = dartx._get;
  let IterableOfRunnable = () => (IterableOfRunnable = dart.constFn(core.Iterable$(src__runnable.Runnable)))();
  let IterableOfRunnableToTask = () => (IterableOfRunnableToTask = dart.constFn(dart.fnType(src__task.Task, [IterableOfRunnable()])))();
  let ActionTovoid = () => (ActionTovoid = dart.constFn(dart.fnType(dart.void, [src__action.Action])))();
  let ActionHandlerToFn = () => (ActionHandlerToFn = dart.constFn(dart.fnType(ActionTovoid(), [ActionTovoid()])))();
  let SagaMiddlewareManagerOfBuilt$Builder$ReduxActions = () => (SagaMiddlewareManagerOfBuilt$Builder$ReduxActions = dart.constFn(src__manager.SagaMiddlewareManager$(built_value$.Built, built_value$.Builder, src__action.ReduxActions)))();
  let JSArrayOfRunnable = () => (JSArrayOfRunnable = dart.constFn(_interceptors.JSArray$(src__runnable.Runnable)))();
  let IteratorOfRunnable = () => (IteratorOfRunnable = dart.constFn(core.Iterator$(src__runnable.Runnable)))();
  let VoidToRunnableStatus = () => (VoidToRunnableStatus = dart.constFn(dart.fnType(src__runnable.RunnableStatus, [])))();
  let QueueOfVoidToRunnableStatus = () => (QueueOfVoidToRunnableStatus = dart.constFn(collection.Queue$(VoidToRunnableStatus())))();
  let StreamControllerOfObject = () => (StreamControllerOfObject = dart.constFn(async.StreamController$(core.Object)))();
  let LinkedMapOfType$Function = () => (LinkedMapOfType$Function = dart.constFn(_js_helper.LinkedMap$(core.Type, core.Function)))();
  let ActionToNull = () => (ActionToNull = dart.constFn(dart.fnType(core.Null, [src__action.Action])))();
  let ActionOfObject = () => (ActionOfObject = dart.constFn(src__action.Action$(core.Object)))();
  let ObjectToActionOfObject = () => (ObjectToActionOfObject = dart.constFn(dart.fnType(ActionOfObject(), [core.Object])))();
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  let StreamOfObject = () => (StreamOfObject = dart.constFn(async.Stream$(core.Object)))();
  let MapOfType$Function = () => (MapOfType$Function = dart.constFn(core.Map$(core.Type, core.Function)))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  src__register.register = function(Type, instance) {
    return new (src__register._Register$(Type)).new(instance);
  };
  src__runnable.Runnable = class Runnable extends core.Object {
    static createTasksFromList(runnableList) {
      return runnableList[$map](src__task.Task, dart.fn(runnable => new src__task.Task.new(runnable[$iterator], false), IterableOfRunnableToTask()))[$toList]()[$iterator];
    }
  };
  (src__runnable.Runnable.new = function() {
  }).prototype = src__runnable.Runnable.prototype;
  dart.addTypeTests(src__runnable.Runnable);
  const _is__Register_default = Symbol('_is__Register_default');
  src__register._Register$ = dart.generic(Type => {
    let VoidToType = () => (VoidToType = dart.constFn(dart.fnType(Type, [])))();
    class _Register extends src__runnable.Runnable {
      run(sagaManager) {
        sagaManager.register(Type, dart.fn(() => this.instance, VoidToType()));
        return src__runnable.RunnableStatus.Done;
      }
    }
    (_Register.new = function(instance) {
      this.instance = instance;
    }).prototype = _Register.prototype;
    dart.addTypeTests(_Register);
    _Register.prototype[_is__Register_default] = true;
    dart.setMethodSignature(_Register, () => ({
      __proto__: dart.getMethods(_Register.__proto__),
      run: dart.fnType(src__runnable.RunnableStatus, [src__manager.SagaMiddlewareManager$(built_value$.Built, built_value$.Builder, src__action.ReduxActions)])
    }));
    dart.setFieldSignature(_Register, () => ({
      __proto__: dart.getFields(_Register.__proto__),
      instance: dart.finalFieldType(Type)
    }));
    return _Register;
  });
  src__register._Register = src__register._Register$();
  dart.addTypeTests(src__register._Register, _is__Register_default);
  src__middleware$.createSagaMiddleware = function(StateType, StateBuilderType, ActionsType, runnableList, opts) {
    let test = opts && 'test' in opts ? opts.test : null;
    let manager = new (src__manager.SagaMiddlewareManager$(StateType, StateBuilderType, ActionsType)).new(runnableList);
    manager.run();
    return dart.fn(api => {
      manager.init(api);
      return dart.bind(manager, 'next');
    }, dart.fnType(ActionHandlerToFn(), [src__middleware.MiddlewareApi$(StateType, StateBuilderType, ActionsType)]));
  };
  src__delay.delay = function(ValueType, duration) {
    return src__call.call(dart.dynamic, async.Future.delayed(duration));
  };
  const _success = Symbol('_success');
  const _error = Symbol('_error');
  const _status = Symbol('_status');
  const _sagaManager = Symbol('_sagaManager');
  const _is_RunnableFuture_default = Symbol('_is_RunnableFuture_default');
  src__runnable.RunnableFuture$ = dart.generic(ValueType => {
    let ValueTypeTovoid = () => (ValueTypeTovoid = dart.constFn(dart.fnType(dart.void, [ValueType])))();
    class RunnableFuture extends src__runnable.Runnable {
      successHandler(value) {
        ValueType._check(value);
        if (this[_success] != null) {
          this[_success](value);
        }
        this[_status] = src__runnable.RunnableStatus.Done;
        if (this[_sagaManager] != null) {
          this[_sagaManager].run();
        }
      }
      errorHandler(error) {
        if (this[_error] != null) {
          this[_error](ValueType._check(error));
        } else {
          dart.throw(core.Exception.new(error));
        }
        this[_status] = src__runnable.RunnableStatus.Failed;
        if (this[_sagaManager] != null) {
          this[_sagaManager].run();
        }
      }
      run(sagaManager) {
        if (this[_sagaManager] == null) {
          this[_sagaManager] = sagaManager;
          this.initHandler(sagaManager);
        }
        return this[_status];
      }
      initHandler(sagaManager) {}
    }
    (RunnableFuture.new = function(success, error) {
      this[_status] = src__runnable.RunnableStatus.Waiting;
      this[_sagaManager] = null;
      this[_success] = success;
      this[_error] = error;
    }).prototype = RunnableFuture.prototype;
    dart.addTypeTests(RunnableFuture);
    RunnableFuture.prototype[_is_RunnableFuture_default] = true;
    dart.setMethodSignature(RunnableFuture, () => ({
      __proto__: dart.getMethods(RunnableFuture.__proto__),
      successHandler: dart.fnType(dart.void, [core.Object]),
      errorHandler: dart.fnType(dart.void, [dart.dynamic]),
      run: dart.fnType(src__runnable.RunnableStatus, [src__manager.SagaMiddlewareManager$(built_value$.Built, built_value$.Builder, src__action.ReduxActions)]),
      initHandler: dart.fnType(dart.void, [src__manager.SagaMiddlewareManager$(built_value$.Built, built_value$.Builder, src__action.ReduxActions)])
    }));
    dart.setFieldSignature(RunnableFuture, () => ({
      __proto__: dart.getFields(RunnableFuture.__proto__),
      [_success]: dart.finalFieldType(ValueTypeTovoid()),
      [_error]: dart.finalFieldType(ValueTypeTovoid()),
      [_status]: dart.fieldType(src__runnable.RunnableStatus),
      [_sagaManager]: dart.fieldType(SagaMiddlewareManagerOfBuilt$Builder$ReduxActions())
    }));
    return RunnableFuture;
  });
  src__runnable.RunnableFuture = src__runnable.RunnableFuture$();
  dart.addTypeTests(src__runnable.RunnableFuture, _is_RunnableFuture_default);
  src__runnable.RunnableStatus = class RunnableStatus extends core.Object {
    toString() {
      return {
        0: "RunnableStatus.Failed",
        1: "RunnableStatus.Canceled",
        2: "RunnableStatus.Waiting",
        3: "RunnableStatus.Done"
      }[this.index];
    }
  };
  (src__runnable.RunnableStatus.new = function(x) {
    this.index = x;
  }).prototype = src__runnable.RunnableStatus.prototype;
  dart.addTypeTests(src__runnable.RunnableStatus);
  dart.setFieldSignature(src__runnable.RunnableStatus, () => ({
    __proto__: dart.getFields(src__runnable.RunnableStatus.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__runnable.RunnableStatus, ['toString']);
  src__runnable.RunnableStatus.Failed = dart.const(new src__runnable.RunnableStatus.new(0));
  src__runnable.RunnableStatus.Canceled = dart.const(new src__runnable.RunnableStatus.new(1));
  src__runnable.RunnableStatus.Waiting = dart.const(new src__runnable.RunnableStatus.new(2));
  src__runnable.RunnableStatus.Done = dart.const(new src__runnable.RunnableStatus.new(3));
  src__runnable.RunnableStatus.values = dart.constList([src__runnable.RunnableStatus.Failed, src__runnable.RunnableStatus.Canceled, src__runnable.RunnableStatus.Waiting, src__runnable.RunnableStatus.Done], src__runnable.RunnableStatus);
  src__fork.fork = function(runnable, result) {
    if (result === void 0) result = null;
    let task = new src__task.ForkTask.new(runnable);
    if (result != null) {
      result(task);
    }
    return task;
  };
  const _runnables = Symbol('_runnables');
  const _parallel = Symbol('_parallel');
  const _canceled = Symbol('_canceled');
  const _last = Symbol('_last');
  const _next = Symbol('_next');
  src__task.Task = class Task extends src__runnable.Runnable {
    run(sagaManager) {
      if (this[_last] == null) {
        this[_last] = this[_next]();
      }
      let status = src__runnable.RunnableStatus.Done;
      if (!dart.test(this[_canceled])) {
        let residuals = JSArrayOfRunnable().of([]);
        while (this[_last] != null) {
          this.forkIfNeeded();
          let currentStatus = this[_last].run(sagaManager);
          switch (currentStatus) {
            case src__runnable.RunnableStatus.Done:
            {
              this[_last] = this[_next]();
              break;
            }
            case src__runnable.RunnableStatus.Canceled:
            {
              if (dart.test(this[_parallel])) {
                this[_last] = this[_next]();
              } else {
                return src__runnable.RunnableStatus.Canceled;
              }
              break;
            }
            case src__runnable.RunnableStatus.Failed:
            {
              if (dart.test(this[_parallel])) {
                this[_last] = this[_next]();
              } else {
                return src__runnable.RunnableStatus.Failed;
              }
              break;
            }
            case src__runnable.RunnableStatus.Waiting:
            {
              if (dart.test(this[_parallel])) {
                status = src__runnable.RunnableStatus.Waiting;
                residuals[$add](this[_last]);
                this[_last] = this[_next]();
              } else {
                return src__runnable.RunnableStatus.Waiting;
              }
            }
          }
        }
        if (dart.test(this[_parallel])) {
          this[_runnables] = residuals[$iterator];
        }
      } else {
        status = src__runnable.RunnableStatus.Canceled;
      }
      return status;
    }
    forkIfNeeded() {
      if (src__task.ForkTask.is(this[_last])) {
        let forkTask = src__task.ForkTask.as(this[_last]);
        if (forkTask != null) {
          this[_last] = new src__task.ForkTask.new(JSArrayOfRunnable().of([new src__task.Task.new(this[_runnables], this[_parallel]), forkTask]));
          this[_runnables] = JSArrayOfRunnable().of([])[$iterator];
        }
      }
    }
    cancel() {
      this[_canceled] = true;
    }
    [_next]() {
      if (this[_runnables] == null) {
        return null;
      }
      if (dart.test(this[_runnables].moveNext())) {
        return this[_runnables].current;
      } else {
        return null;
      }
    }
  };
  (src__task.Task.new = function(runnables, parallel) {
    this[_canceled] = false;
    this[_last] = null;
    this[_runnables] = runnables;
    this[_parallel] = parallel;
  }).prototype = src__task.Task.prototype;
  dart.addTypeTests(src__task.Task);
  dart.setMethodSignature(src__task.Task, () => ({
    __proto__: dart.getMethods(src__task.Task.__proto__),
    run: dart.fnType(src__runnable.RunnableStatus, [src__manager.SagaMiddlewareManager$(built_value$.Built, built_value$.Builder, src__action.ReduxActions)]),
    forkIfNeeded: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, []),
    [_next]: dart.fnType(src__runnable.Runnable, [])
  }));
  dart.setFieldSignature(src__task.Task, () => ({
    __proto__: dart.getFields(src__task.Task.__proto__),
    [_runnables]: dart.fieldType(IteratorOfRunnable()),
    [_parallel]: dart.fieldType(core.bool),
    [_canceled]: dart.fieldType(core.bool),
    [_last]: dart.fieldType(src__runnable.Runnable)
  }));
  src__task.ForkTask = class ForkTask extends src__task.Task {};
  (src__task.ForkTask.new = function(runnable) {
    src__task.ForkTask.__proto__.new.call(this, runnable[$iterator], true);
  }).prototype = src__task.ForkTask.prototype;
  dart.addTypeTests(src__task.ForkTask);
  const _processes = Symbol('_processes');
  const _running = Symbol('_running');
  const _status$ = Symbol('_status');
  src__process.ProcessTask = class ProcessTask extends src__task.Task {
    run(sagaManager) {
      this[_processes].add(dart.fn(() => super.run(sagaManager), VoidToRunnableStatus()));
      if (!dart.test(this[_running])) {
        try {
          this[_running] = true;
          while (dart.test(this[_processes].isNotEmpty)) {
            this[_status$] = src__runnable.RunnableStatus.Waiting;
            this[_status$] = this[_processes].removeFirst()();
          }
        } finally {
          this[_running] = false;
        }
      }
      return this[_status$];
    }
    get status() {
      return this[_status$];
    }
  };
  (src__process.ProcessTask.new = function(runnables) {
    this[_processes] = QueueOfVoidToRunnableStatus().new();
    this[_running] = false;
    this[_status$] = src__runnable.RunnableStatus.Done;
    src__process.ProcessTask.__proto__.new.call(this, runnables, true);
  }).prototype = src__process.ProcessTask.prototype;
  dart.addTypeTests(src__process.ProcessTask);
  dart.setGetterSignature(src__process.ProcessTask, () => ({
    __proto__: dart.getGetters(src__process.ProcessTask.__proto__),
    status: src__runnable.RunnableStatus
  }));
  dart.setFieldSignature(src__process.ProcessTask, () => ({
    __proto__: dart.getFields(src__process.ProcessTask.__proto__),
    [_processes]: dart.finalFieldType(QueueOfVoidToRunnableStatus()),
    [_running]: dart.fieldType(core.bool),
    [_status$]: dart.fieldType(src__runnable.RunnableStatus)
  }));
  const _process = Symbol('_process');
  const _observable = Symbol('_observable');
  const _initialized = Symbol('_initialized');
  const _actions = Symbol('_actions');
  const _handler = Symbol('_handler');
  const _registry = Symbol('_registry');
  const _is_SagaMiddlewareManager_default = Symbol('_is_SagaMiddlewareManager_default');
  src__manager.SagaMiddlewareManager$ = dart.generic((StateType, StateBuilderType, ActionsType) => {
    let MiddlewareApiOfStateType$StateBuilderType$ActionsType = () => (MiddlewareApiOfStateType$StateBuilderType$ActionsType = dart.constFn(src__middleware.MiddlewareApi$(StateType, StateBuilderType, ActionsType)))();
    let VoidToStateType = () => (VoidToStateType = dart.constFn(dart.fnType(StateType, [])))();
    let VoidToActionsType = () => (VoidToActionsType = dart.constFn(dart.fnType(ActionsType, [])))();
    class SagaMiddlewareManager extends core.Object {
      init(api) {
        MiddlewareApiOfStateType$StateBuilderType$ActionsType()._check(api);
        if (!dart.test(this[_initialized])) {
          this[_initialized] = true;
          this.register(ActionsType, dart.fn(() => {
            return api == null ? null : api.actions;
          }, VoidToActionsType()));
          this.register(StateType, dart.fn(() => {
            return api == null ? null : api.state;
          }, VoidToStateType()));
          this[_process].run(this);
        }
      }
      run() {
        return this[_process].run(this);
      }
      next(next) {
        return this[_handler] = dart.fn(action => {
          core.print("sinked:" + dart.str(action));
          this[_observable].sink.add(action);
          if (next != null) {
            next(action);
          }
        }, ActionToNull());
      }
      get status() {
        return this[_process].status;
      }
      put(PayloadType, actionName, payload) {
        this[_handler](new (src__action.Action$(PayloadType)).new(actionName.name, payload));
      }
      register(Type, factory) {
        this[_registry][$_set](dart.wrapType(Type), factory);
      }
      select(ResultType) {
        let factory = this[_registry][$_get](dart.wrapType(ResultType));
        if (factory != null) {
          let result = dart.dcall(factory, []);
          if (ResultType.is(result)) {
            return result;
          }
        }
        return null;
      }
      takeEverything() {
        return async.async(ActionOfObject(), (function* takeEverything() {
          return this[_actions].where(dart.fn(action => ActionOfObject().is(action), ObjectTobool())).map(ActionOfObject(), dart.fn(action => ActionOfObject().as(action), ObjectToActionOfObject())).first;
        }).bind(this));
      }
      take(PayloadType, actionName) {
        return async.async(src__action.Action$(PayloadType), (function* take() {
          if (actionName != null) {
            return this[_actions].where(dart.fn(action => src__action.Action$(PayloadType).is(action), ObjectTobool())).map(src__action.Action$(PayloadType), dart.fn(action => src__action.Action$(PayloadType).as(action), dart.fnType(src__action.Action$(PayloadType), [core.Object]))).where(dart.fn(action => action.name == actionName.name, dart.fnType(core.bool, [src__action.Action$(PayloadType)]))).first;
          }
          return null;
        }).bind(this));
      }
    }
    (SagaMiddlewareManager.new = function(runnableList) {
      this[_observable] = StreamControllerOfObject().new();
      this[_initialized] = false;
      this[_actions] = null;
      this[_handler] = null;
      this[_registry] = new (LinkedMapOfType$Function()).new();
      this[_process] = new src__process.ProcessTask.new(src__runnable.Runnable.createTasksFromList(runnableList));
      this[_actions] = this[_observable].stream.asBroadcastStream();
    }).prototype = SagaMiddlewareManager.prototype;
    dart.addTypeTests(SagaMiddlewareManager);
    SagaMiddlewareManager.prototype[_is_SagaMiddlewareManager_default] = true;
    dart.setMethodSignature(SagaMiddlewareManager, () => ({
      __proto__: dart.getMethods(SagaMiddlewareManager.__proto__),
      init: dart.fnType(dart.void, [core.Object]),
      run: dart.fnType(src__runnable.RunnableStatus, []),
      next: dart.fnType(dart.fnType(dart.void, [src__action.Action]), [dart.fnType(dart.void, [src__action.Action])]),
      put: dart.gFnType(PayloadType => [dart.void, [src__action.ActionName$(PayloadType), PayloadType]]),
      register: dart.gFnType(Type => [dart.void, [core.Function]]),
      select: dart.gFnType(ResultType => [ResultType, []]),
      takeEverything: dart.fnType(async.Future$(src__action.Action$(core.Object)), []),
      take: dart.gFnType(PayloadType => [async.Future$(src__action.Action$(PayloadType)), [src__action.ActionName$(PayloadType)]])
    }));
    dart.setGetterSignature(SagaMiddlewareManager, () => ({
      __proto__: dart.getGetters(SagaMiddlewareManager.__proto__),
      status: src__runnable.RunnableStatus
    }));
    dart.setFieldSignature(SagaMiddlewareManager, () => ({
      __proto__: dart.getFields(SagaMiddlewareManager.__proto__),
      [_process]: dart.finalFieldType(src__process.ProcessTask),
      [_observable]: dart.finalFieldType(StreamControllerOfObject()),
      [_initialized]: dart.fieldType(core.bool),
      [_actions]: dart.fieldType(StreamOfObject()),
      [_handler]: dart.fieldType(ActionTovoid()),
      [_registry]: dart.fieldType(MapOfType$Function())
    }));
    return SagaMiddlewareManager;
  });
  src__manager.SagaMiddlewareManager = src__manager.SagaMiddlewareManager$();
  dart.addTypeTests(src__manager.SagaMiddlewareManager, _is_SagaMiddlewareManager_default);
  const _future = Symbol('_future');
  const _is__Call_default = Symbol('_is__Call_default');
  src__call._Call$ = dart.generic(ValueType => {
    let FutureOfValueType = () => (FutureOfValueType = dart.constFn(async.Future$(ValueType)))();
    class _Call extends src__runnable.RunnableFuture {}
    (_Call.new = function(future, _success, _error) {
      if (_success === void 0) _success = null;
      if (_error === void 0) _error = null;
      this[_future] = future;
      _Call.__proto__.new.call(this, dynamicTovoid()._check(_success), _error);
      this[_future].then(dart.void, dart.bind(this, 'successHandler')).catchError(dart.bind(this, 'errorHandler'));
    }).prototype = _Call.prototype;
    dart.addTypeTests(_Call);
    _Call.prototype[_is__Call_default] = true;
    dart.setFieldSignature(_Call, () => ({
      __proto__: dart.getFields(_Call.__proto__),
      [_future]: dart.finalFieldType(FutureOfValueType())
    }));
    return _Call;
  });
  src__call._Call = src__call._Call$();
  dart.addTypeTests(src__call._Call, _is__Call_default);
  src__call.call = function(ValueType, future, callback, error) {
    if (callback === void 0) callback = null;
    if (error === void 0) error = null;
    return new (src__call._Call$(ValueType)).new(future, callback, error);
  };
  const _is__Select_default = Symbol('_is__Select_default');
  src__select._Select$ = dart.generic(ResultType => {
    let ResultTypeTovoid = () => (ResultTypeTovoid = dart.constFn(dart.fnType(dart.void, [ResultType])))();
    class _Select extends src__runnable.Runnable {
      run(sagaManager) {
        this.callback(sagaManager.select(ResultType));
        return src__runnable.RunnableStatus.Done;
      }
    }
    (_Select.new = function(callback) {
      this.callback = callback;
    }).prototype = _Select.prototype;
    dart.addTypeTests(_Select);
    _Select.prototype[_is__Select_default] = true;
    dart.setMethodSignature(_Select, () => ({
      __proto__: dart.getMethods(_Select.__proto__),
      run: dart.fnType(src__runnable.RunnableStatus, [src__manager.SagaMiddlewareManager$(built_value$.Built, built_value$.Builder, src__action.ReduxActions)])
    }));
    dart.setFieldSignature(_Select, () => ({
      __proto__: dart.getFields(_Select.__proto__),
      callback: dart.finalFieldType(ResultTypeTovoid())
    }));
    return _Select;
  });
  src__select._Select = src__select._Select$();
  dart.addTypeTests(src__select._Select, _is__Select_default);
  src__select.select = function(ResultType, callback) {
    return new (src__select._Select$(ResultType)).new(callback);
  };
  src__take.take = function(PayloadType, actionName, success, error) {
    if (success === void 0) success = null;
    if (error === void 0) error = null;
    return new (src__take._Take$(PayloadType)).new(actionName, success, error);
  };
  const _is__Take_default = Symbol('_is__Take_default');
  src__take._Take$ = dart.generic(PayloadType => {
    let ActionNameOfPayloadType = () => (ActionNameOfPayloadType = dart.constFn(src__action.ActionName$(PayloadType)))();
    class _Take extends src__runnable.RunnableFuture$(src__action.Action$(PayloadType)) {
      initHandler(sagaManager) {
        super.initHandler(sagaManager);
        sagaManager.take(PayloadType, this.actionName).then(dart.void, dart.bind(this, 'successHandler')).catchError(dart.bind(this, 'errorHandler'));
      }
    }
    (_Take.new = function(actionName, success, error) {
      this.actionName = actionName;
      _Take.__proto__.new.call(this, success, error);
    }).prototype = _Take.prototype;
    dart.addTypeTests(_Take);
    _Take.prototype[_is__Take_default] = true;
    dart.setMethodSignature(_Take, () => ({
      __proto__: dart.getMethods(_Take.__proto__),
      initHandler: dart.fnType(dart.void, [src__manager.SagaMiddlewareManager$(built_value$.Built, built_value$.Builder, src__action.ReduxActions)])
    }));
    dart.setFieldSignature(_Take, () => ({
      __proto__: dart.getFields(_Take.__proto__),
      actionName: dart.finalFieldType(ActionNameOfPayloadType())
    }));
    return _Take;
  });
  src__take._Take = src__take._Take$();
  dart.addTypeTests(src__take._Take, _is__Take_default);
  src__take.takeEverything = function(success, error) {
    if (success === void 0) success = null;
    if (error === void 0) error = null;
    return new src__take._TakeEverything.new(success, error);
  };
  src__take._TakeEverything = class _TakeEverything extends src__runnable.RunnableFuture$(src__action.Action$(core.Object)) {
    initHandler(sagaManager) {
      super.initHandler(sagaManager);
      sagaManager.takeEverything().then(dart.void, dart.bind(this, 'successHandler')).catchError(dart.bind(this, 'errorHandler'));
    }
  };
  (src__take._TakeEverything.new = function(success, error) {
    src__take._TakeEverything.__proto__.new.call(this, success, error);
  }).prototype = src__take._TakeEverything.prototype;
  dart.addTypeTests(src__take._TakeEverything);
  dart.setMethodSignature(src__take._TakeEverything, () => ({
    __proto__: dart.getMethods(src__take._TakeEverything.__proto__),
    initHandler: dart.fnType(dart.void, [src__manager.SagaMiddlewareManager$(built_value$.Built, built_value$.Builder, src__action.ReduxActions)])
  }));
  src__all._AllEffect = class _AllEffect extends src__task.Task {};
  (src__all._AllEffect.new = function(runnables) {
    src__all._AllEffect.__proto__.new.call(this, runnables, true);
  }).prototype = src__all._AllEffect.prototype;
  dart.addTypeTests(src__all._AllEffect);
  src__all.all = function(runnablesList) {
    return new src__all._AllEffect.new(src__runnable.Runnable.createTasksFromList(runnablesList));
  };
  src__put.put = function(PayloadType, actionName, payload) {
    return new (src__put._Put$(PayloadType)).new(actionName, payload);
  };
  const _is__Put_default = Symbol('_is__Put_default');
  src__put._Put$ = dart.generic(PayloadType => {
    let ActionNameOfPayloadType = () => (ActionNameOfPayloadType = dart.constFn(src__action.ActionName$(PayloadType)))();
    class _Put extends src__runnable.Runnable {
      run(sagaManager) {
        sagaManager.put(PayloadType, this.actionName, this.payload);
        return src__runnable.RunnableStatus.Done;
      }
    }
    (_Put.new = function(actionName, payload) {
      this.actionName = actionName;
      this.payload = payload;
    }).prototype = _Put.prototype;
    dart.addTypeTests(_Put);
    _Put.prototype[_is__Put_default] = true;
    dart.setMethodSignature(_Put, () => ({
      __proto__: dart.getMethods(_Put.__proto__),
      run: dart.fnType(src__runnable.RunnableStatus, [src__manager.SagaMiddlewareManager$(built_value$.Built, built_value$.Builder, src__action.ReduxActions)])
    }));
    dart.setFieldSignature(_Put, () => ({
      __proto__: dart.getFields(_Put.__proto__),
      actionName: dart.finalFieldType(ActionNameOfPayloadType()),
      payload: dart.finalFieldType(PayloadType)
    }));
    return _Put;
  });
  src__put._Put = src__put._Put$();
  dart.addTypeTests(src__put._Put, _is__Put_default);
  dart.trackLibraries("packages/built_redux_saga/built_redux_saga.ddc", {
    "package:built_redux_saga/src/register.dart": src__register,
    "package:built_redux_saga/src/middleware.dart": src__middleware$,
    "package:built_redux_saga/src/delay.dart": src__delay,
    "package:built_redux_saga/src/runnable.dart": src__runnable,
    "package:built_redux_saga/src/fork.dart": src__fork,
    "package:built_redux_saga/src/task.dart": src__task,
    "package:built_redux_saga/src/process.dart": src__process,
    "package:built_redux_saga/src/manager.dart": src__manager,
    "package:built_redux_saga/src/call.dart": src__call,
    "package:built_redux_saga/src/select.dart": src__select,
    "package:built_redux_saga/src/take.dart": src__take,
    "package:built_redux_saga/src/all.dart": src__all,
    "package:built_redux_saga/src/put.dart": src__put,
    "package:built_redux_saga/src/index.dart": src__index,
    "package:built_redux_saga/built_redux_saga.dart": built_redux_saga
  }, '{"version":3,"sourceRoot":"","sources":["src/register.dart","src/runnable.dart","src/middleware.dart","src/delay.dart","src/fork.dart","src/task.dart","src/process.dart","src/manager.dart","src/call.dart","src/select.dart","src/take.dart","src/all.dart","src/put.dart"],"names":[],"mappings":"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","file":"built_redux_saga.ddc.js"}');
  // Exports:
  return {
    src__register: src__register,
    src__middleware: src__middleware$,
    src__delay: src__delay,
    src__runnable: src__runnable,
    src__fork: src__fork,
    src__task: src__task,
    src__process: src__process,
    src__manager: src__manager,
    src__call: src__call,
    src__select: src__select,
    src__take: src__take,
    src__all: src__all,
    src__put: src__put,
    src__index: src__index,
    built_redux_saga: built_redux_saga
  };
});

//# sourceMappingURL=built_redux_saga.ddc.js.map
