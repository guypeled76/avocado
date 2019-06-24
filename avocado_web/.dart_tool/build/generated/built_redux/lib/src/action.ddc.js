define(['dart_sdk', 'packages/built_value/built_value', 'packages/built_collection/built_collection'], function(dart_sdk, built_value, built_collection) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const built_value$ = built_value.built_value;
  const src__list = built_collection.src__list;
  const src__list_multimap = built_collection.src__list_multimap;
  const src__map = built_collection.src__map;
  const src__set = built_collection.src__set;
  const src__set_multimap = built_collection.src__set_multimap;
  const _root = Object.create(null);
  const src__action = Object.create(_root);
  const src__store_change = Object.create(_root);
  const src__store = Object.create(_root);
  const src__middleware = Object.create(_root);
  const src__typedefs = Object.create(_root);
  const src__reducer_builder = Object.create(_root);
  const $toString = dartx.toString;
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $length = dartx.length;
  const $map = dartx.map;
  const $reduce = dartx.reduce;
  const $addAll = dartx.addAll;
  let ActionTovoid = () => (ActionTovoid = dart.constFn(dart.fnType(dart.void, [src__action.Action])))();
  let FnToFn = () => (FnToFn = dart.constFn(dart.fnType(ActionTovoid(), [ActionTovoid()])))();
  let ActionToNull = () => (ActionToNull = dart.constFn(dart.fnType(core.Null, [src__action.Action])))();
  let FnAndFnToFn = () => (FnAndFnToFn = dart.constFn(dart.fnType(FnToFn(), [FnToFn(), FnToFn()])))();
  let ActionOfNull = () => (ActionOfNull = dart.constFn(src__action.Action$(core.Null)))();
  let FnToFn$ = () => (FnToFn$ = dart.constFn(dart.fnType(ActionToNull(), [ActionTovoid()])))();
  const _is_Action_default = Symbol('_is_Action_default');
  src__action.Action$ = dart.generic(Payload => {
    class Action extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get payload() {
        return this[payload$];
      }
      set payload(value) {
        super.payload = value;
      }
      toString() {
        return "Action {\n  name: " + dart.str(this.name) + ",\n  payload: " + dart.str(this.payload) + ",\n}";
      }
    }
    (Action.new = function(name, payload) {
      this[name$] = name;
      this[payload$] = payload;
    }).prototype = Action.prototype;
    dart.addTypeTests(Action);
    Action.prototype[_is_Action_default] = true;
    const name$ = Symbol("Action.name");
    const payload$ = Symbol("Action.payload");
    dart.setMethodSignature(Action, () => ({
      __proto__: dart.getMethods(Action.__proto__),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setFieldSignature(Action, () => ({
      __proto__: dart.getFields(Action.__proto__),
      name: dart.finalFieldType(core.String),
      payload: dart.finalFieldType(Payload)
    }));
    dart.defineExtensionMethods(Action, ['toString']);
    return Action;
  });
  src__action.Action = src__action.Action$();
  dart.addTypeTests(src__action.Action, _is_Action_default);
  const _name = Symbol('_name');
  const _dispatcher = Symbol('_dispatcher');
  const _is_ActionDispatcher_default = Symbol('_is_ActionDispatcher_default');
  src__action.ActionDispatcher$ = dart.generic(P => {
    let ActionOfP = () => (ActionOfP = dart.constFn(src__action.Action$(P)))();
    class ActionDispatcher extends core.Object {
      call(payload) {
        if (payload === void 0) payload = null;
        P._check(payload);
        return this[_dispatcher](new (ActionOfP()).new(this[_name], payload));
      }
      setDispatcher(dispatcher) {
        this[_dispatcher] = dispatcher;
      }
    }
    (ActionDispatcher.new = function(name) {
      this[_dispatcher] = null;
      this[_name] = name;
    }).prototype = ActionDispatcher.prototype;
    dart.addTypeTests(ActionDispatcher);
    ActionDispatcher.prototype[_is_ActionDispatcher_default] = true;
    dart.setMethodSignature(ActionDispatcher, () => ({
      __proto__: dart.getMethods(ActionDispatcher.__proto__),
      call: dart.fnType(dart.void, [], [core.Object]),
      setDispatcher: dart.fnType(dart.void, [dart.fnType(dart.void, [src__action.Action])])
    }));
    dart.setFieldSignature(ActionDispatcher, () => ({
      __proto__: dart.getFields(ActionDispatcher.__proto__),
      [_dispatcher]: dart.fieldType(ActionTovoid()),
      [_name]: dart.finalFieldType(core.String)
    }));
    return ActionDispatcher;
  });
  src__action.ActionDispatcher = src__action.ActionDispatcher$();
  dart.addTypeTests(src__action.ActionDispatcher, _is_ActionDispatcher_default);
  src__action.ReduxActions = class ReduxActions extends core.Object {};
  (src__action.ReduxActions.new = function() {
  }).prototype = src__action.ReduxActions.prototype;
  dart.addTypeTests(src__action.ReduxActions);
  const _is_ActionName_default = Symbol('_is_ActionName_default');
  src__action.ActionName$ = dart.generic(T => {
    class ActionName extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        this[name$] = value;
      }
    }
    (ActionName.new = function(name) {
      this[name$] = name;
    }).prototype = ActionName.prototype;
    dart.addTypeTests(ActionName);
    ActionName.prototype[_is_ActionName_default] = true;
    const name$ = Symbol("ActionName.name");
    dart.setFieldSignature(ActionName, () => ({
      __proto__: dart.getFields(ActionName.__proto__),
      name: dart.fieldType(core.String)
    }));
    return ActionName;
  });
  src__action.ActionName = src__action.ActionName$();
  dart.addTypeTests(src__action.ActionName, _is_ActionName_default);
  const _is_StoreChange_default = Symbol('_is_StoreChange_default');
  src__store_change.StoreChange$ = dart.generic((State, StateBuilder, P) => {
    let ActionOfP = () => (ActionOfP = dart.constFn(src__action.Action$(P)))();
    class StoreChange extends core.Object {
      get next() {
        return this[next];
      }
      set next(value) {
        super.next = value;
      }
      get prev() {
        return this[prev];
      }
      set prev(value) {
        super.prev = value;
      }
      get action() {
        return this[action];
      }
      set action(value) {
        super.action = value;
      }
    }
    (StoreChange.new = function(n, p, a) {
      this[next] = n;
      this[prev] = p;
      this[action] = a;
    }).prototype = StoreChange.prototype;
    dart.addTypeTests(StoreChange);
    StoreChange.prototype[_is_StoreChange_default] = true;
    const next = Symbol("StoreChange.next");
    const prev = Symbol("StoreChange.prev");
    const action = Symbol("StoreChange.action");
    dart.setFieldSignature(StoreChange, () => ({
      __proto__: dart.getFields(StoreChange.__proto__),
      next: dart.finalFieldType(State),
      prev: dart.finalFieldType(State),
      action: dart.finalFieldType(ActionOfP())
    }));
    return StoreChange;
  });
  src__store_change.StoreChange = src__store_change.StoreChange$();
  dart.addTypeTests(src__store_change.StoreChange, _is_StoreChange_default);
  const _map = Symbol('_map');
  const _subscription = Symbol('_subscription');
  const _is_StoreChangeHandlerBuilder_default = Symbol('_is_StoreChangeHandlerBuilder_default');
  src__store_change.StoreChangeHandlerBuilder$ = dart.generic((State, StateBuilder, Actions) => {
    let StoreChangeOfState$StateBuilder$dynamic = () => (StoreChangeOfState$StateBuilder$dynamic = dart.constFn(src__store_change.StoreChange$(State, StateBuilder, dart.dynamic)))();
    let StoreChangeHandlerOfdynamic$State$StateBuilder = () => (StoreChangeHandlerOfdynamic$State$StateBuilder = dart.constFn(dart.fnType(dart.void, [StoreChangeOfState$StateBuilder$dynamic()])))();
    let IdentityMapOfString$StoreChangeHandlerOfdynamic$State$StateBuilder = () => (IdentityMapOfString$StoreChangeHandlerOfdynamic$State$StateBuilder = dart.constFn(_js_helper.IdentityMap$(core.String, StoreChangeHandlerOfdynamic$State$StateBuilder())))();
    let StoreChangeOfState$StateBuilder$dynamicToNull = () => (StoreChangeOfState$StateBuilder$dynamicToNull = dart.constFn(dart.fnType(core.Null, [StoreChangeOfState$StateBuilder$dynamic()])))();
    let StoreOfState$StateBuilder$Actions = () => (StoreOfState$StateBuilder$Actions = dart.constFn(src__store.Store$(State, StateBuilder, Actions)))();
    let MapOfString$StoreChangeOfState$StateBuilder$dynamicTovoid = () => (MapOfString$StoreChangeOfState$StateBuilder$dynamicTovoid = dart.constFn(core.Map$(core.String, StoreChangeHandlerOfdynamic$State$StateBuilder())))();
    let StreamSubscriptionOfStoreChangeOfState$StateBuilder$dynamic = () => (StreamSubscriptionOfStoreChangeOfState$StateBuilder$dynamic = dart.constFn(async.StreamSubscription$(StoreChangeOfState$StateBuilder$dynamic())))();
    class StoreChangeHandlerBuilder extends core.Object {
      add(Payload, actionName, handler) {
        this[_map][$_set](actionName.name, dart.fn(change => {
          handler(new (src__store_change.StoreChange$(State, StateBuilder, Payload)).new(change.next, change.prev, src__action.Action$(Payload).as(change.action)));
        }, StoreChangeOfState$StateBuilder$dynamicToNull()));
      }
      build(store) {
        StoreOfState$StateBuilder$Actions()._check(store);
        this[_subscription] = store.stream.listen(dart.fn(storeChange => {
          let handler = this[_map][$_get](storeChange.action.name);
          if (handler != null) handler(storeChange);
        }, StoreChangeOfState$StateBuilder$dynamicToNull()));
      }
      dispose() {
        this[_subscription].cancel();
      }
    }
    (StoreChangeHandlerBuilder.new = function() {
      this[_map] = new (IdentityMapOfString$StoreChangeHandlerOfdynamic$State$StateBuilder()).new();
      this[_subscription] = null;
    }).prototype = StoreChangeHandlerBuilder.prototype;
    dart.addTypeTests(StoreChangeHandlerBuilder);
    StoreChangeHandlerBuilder.prototype[_is_StoreChangeHandlerBuilder_default] = true;
    dart.setMethodSignature(StoreChangeHandlerBuilder, () => ({
      __proto__: dart.getMethods(StoreChangeHandlerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [src__action.ActionName$(Payload), dart.fnType(dart.void, [src__store_change.StoreChange$(State, StateBuilder, Payload)])]]),
      build: dart.fnType(dart.void, [core.Object]),
      dispose: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(StoreChangeHandlerBuilder, () => ({
      __proto__: dart.getFields(StoreChangeHandlerBuilder.__proto__),
      [_map]: dart.finalFieldType(MapOfString$StoreChangeOfState$StateBuilder$dynamicTovoid()),
      [_subscription]: dart.fieldType(StreamSubscriptionOfStoreChangeOfState$StateBuilder$dynamic())
    }));
    return StoreChangeHandlerBuilder;
  });
  src__store_change.StoreChangeHandlerBuilder = src__store_change.StoreChangeHandlerBuilder$();
  dart.addTypeTests(src__store_change.StoreChangeHandlerBuilder, _is_StoreChangeHandlerBuilder_default);
  const _stateController = Symbol('_stateController');
  const _state = Symbol('_state');
  const _actions = Symbol('_actions');
  const _is_Store_default = Symbol('_is_Store_default');
  src__store.Store$ = dart.generic((State, StateBuilder, Actions) => {
    let MiddlewareApiOfState$StateBuilder$Actions = () => (MiddlewareApiOfState$StateBuilder$Actions = dart.constFn(src__middleware.MiddlewareApi$(State, StateBuilder, Actions)))();
    let MiddlewareApiOfState$StateBuilder$ActionsToFn = () => (MiddlewareApiOfState$StateBuilder$ActionsToFn = dart.constFn(dart.fnType(FnToFn(), [MiddlewareApiOfState$StateBuilder$Actions()])))();
    let StoreChangeOfState$StateBuilder$dynamic = () => (StoreChangeOfState$StateBuilder$dynamic = dart.constFn(src__store_change.StoreChange$(State, StateBuilder, dart.dynamic)))();
    let StreamControllerOfStoreChangeOfState$StateBuilder$dynamic = () => (StreamControllerOfStoreChangeOfState$StateBuilder$dynamic = dart.constFn(async.StreamController$(StoreChangeOfState$StateBuilder$dynamic())))();
    let FnToFn$ = () => (FnToFn$ = dart.constFn(dart.fnType(FnToFn(), [MiddlewareApiOfState$StateBuilder$ActionsToFn()])))();
    let StoreChangeOfState$StateBuilder$dynamicToState = () => (StoreChangeOfState$StateBuilder$dynamicToState = dart.constFn(dart.fnType(State, [StoreChangeOfState$StateBuilder$dynamic()])))();
    let StoreChangeOfState$StateBuilder$dynamicTobool = () => (StoreChangeOfState$StateBuilder$dynamicTobool = dart.constFn(dart.fnType(core.bool, [StoreChangeOfState$StateBuilder$dynamic()])))();
    let StateBuilderTovoid = () => (StateBuilderTovoid = dart.constFn(dart.fnType(dart.void, [StateBuilder])))();
    class Store extends core.Object {
      dispose() {
        return async.async(core.Null, (function* dispose() {
          yield this[_stateController].close();
          this[_state] = null;
          this[_actions] = null;
        }).bind(this));
      }
      replaceState(state) {
        State._check(state);
        if (!dart.equals(this[_state], state)) {
          this[_stateController].add(new (StoreChangeOfState$StateBuilder$dynamic()).new(state, this[_state], new (ActionOfNull()).new("replaceState", null)));
          this[_state] = state;
        }
      }
      get state() {
        return this[_state];
      }
      get stream() {
        return this[_stateController].stream;
      }
      get actions() {
        return this[_actions];
      }
      get nextState() {
        return this.stream.map(State, dart.fn(change => change.next, StoreChangeOfState$StateBuilder$dynamicToState()));
      }
      substateStream(Substate, mapper) {
        return this.stream.map(src__typedefs.SubstateChange$(Substate), dart.fn(c => new (src__typedefs.SubstateChange$(Substate)).new(mapper(c.prev), mapper(c.next)), dart.fnType(src__typedefs.SubstateChange$(Substate), [StoreChangeOfState$StateBuilder$dynamic()]))).where(dart.fn(c => !dart.equals(c.prev, c.next), dart.fnType(core.bool, [src__typedefs.SubstateChange$(Substate)])));
      }
      nextSubstate(Substate, mapper) {
        return this.substateStream(Substate, mapper).map(Substate, dart.fn(change => change.next, dart.fnType(Substate, [src__typedefs.SubstateChange$(Substate)])));
      }
      actionStream(Payload, actionName) {
        return this.stream.where(dart.fn(c => c.action.name == actionName.name, StoreChangeOfState$StateBuilder$dynamicTobool())).map(src__store_change.StoreChange$(State, StateBuilder, Payload), dart.fn(c => new (src__store_change.StoreChange$(State, StateBuilder, Payload)).new(c.next, c.prev, src__action.Action$(Payload).as(c.action)), dart.fnType(src__store_change.StoreChange$(State, StateBuilder, Payload), [StoreChangeOfState$StateBuilder$dynamic()])));
      }
    }
    (Store.new = function(reducer, defaultState, actions, opts) {
      let middleware = opts && 'middleware' in opts ? opts.middleware : dart.constList([], MiddlewareApiOfState$StateBuilder$ActionsToFn());
      this[_stateController] = StreamControllerOfStoreChangeOfState$StateBuilder$dynamic().broadcast();
      this[_state] = null;
      this[_actions] = null;
      this[_state] = defaultState;
      this[_actions] = actions;
      let api = MiddlewareApiOfState$StateBuilder$Actions().new(this);
      let handler = action => {
        let state = this[_state].rebuild(dart.fn(b => reducer(this[_state], action, b), StateBuilderTovoid()));
        if (dart.equals(this[_state], state)) return;
        if (!dart.test(this[_stateController].isClosed)) this[_stateController].add(new (StoreChangeOfState$StateBuilder$dynamic()).new(state, this[_state], action));
        this[_state] = state;
      };
      dart.fn(handler, ActionToNull());
      if (dart.notNull(middleware[$length]) > 0) {
        let chain = middleware[$map](FnToFn(), dart.fn(m => m(api), FnToFn$()));
        let combinedMiddleware = chain[$reduce](dart.fn((composed, middleware) => dart.fn(handler => composed(middleware(handler)), FnToFn()), FnAndFnToFn()));
        handler = combinedMiddleware(handler);
      }
      actions.setDispatcher(handler);
    }).prototype = Store.prototype;
    dart.addTypeTests(Store);
    Store.prototype[_is_Store_default] = true;
    dart.setMethodSignature(Store, () => ({
      __proto__: dart.getMethods(Store.__proto__),
      dispose: dart.fnType(async.Future$(core.Null), []),
      replaceState: dart.fnType(dart.void, [core.Object]),
      substateStream: dart.gFnType(Substate => [async.Stream$(src__typedefs.SubstateChange$(Substate)), [dart.fnType(Substate, [State])]]),
      nextSubstate: dart.gFnType(Substate => [async.Stream$(Substate), [dart.fnType(Substate, [State])]]),
      actionStream: dart.gFnType(Payload => [async.Stream$(src__store_change.StoreChange$(State, StateBuilder, Payload)), [src__action.ActionName$(Payload)]])
    }));
    dart.setGetterSignature(Store, () => ({
      __proto__: dart.getGetters(Store.__proto__),
      state: State,
      stream: async.Stream$(src__store_change.StoreChange$(State, StateBuilder, dart.dynamic)),
      actions: Actions,
      nextState: async.Stream$(State)
    }));
    dart.setFieldSignature(Store, () => ({
      __proto__: dart.getFields(Store.__proto__),
      [_stateController]: dart.finalFieldType(StreamControllerOfStoreChangeOfState$StateBuilder$dynamic()),
      [_state]: dart.fieldType(State),
      [_actions]: dart.fieldType(Actions)
    }));
    return Store;
  });
  src__store.Store = src__store.Store$();
  dart.addTypeTests(src__store.Store, _is_Store_default);
  const _state$ = Symbol('_state');
  const _actions$ = Symbol('_actions');
  const _is_MiddlewareApi_default = Symbol('_is_MiddlewareApi_default');
  src__middleware.MiddlewareApi$ = dart.generic((State, StateBuilder, Actions) => {
    let VoidToState = () => (VoidToState = dart.constFn(dart.fnType(State, [])))();
    let MiddlewareApiOfState$StateBuilder$Actions = () => (MiddlewareApiOfState$StateBuilder$Actions = dart.constFn(src__middleware.MiddlewareApi$(State, StateBuilder, Actions)))();
    let VoidToActions = () => (VoidToActions = dart.constFn(dart.fnType(Actions, [])))();
    class MiddlewareApi extends core.Object {
      static new(_store) {
        return new (MiddlewareApiOfState$StateBuilder$Actions()).__(dart.fn(() => _store.state, VoidToState()), dart.fn(() => _store.actions, VoidToActions()));
      }
      get state() {
        return this[_state$]();
      }
      get actions() {
        return this[_actions$]();
      }
    }
    (MiddlewareApi.__ = function(state, actions) {
      this[_state$] = state;
      this[_actions$] = actions;
    }).prototype = MiddlewareApi.prototype;
    dart.addTypeTests(MiddlewareApi);
    MiddlewareApi.prototype[_is_MiddlewareApi_default] = true;
    dart.setGetterSignature(MiddlewareApi, () => ({
      __proto__: dart.getGetters(MiddlewareApi.__proto__),
      state: State,
      actions: Actions
    }));
    dart.setFieldSignature(MiddlewareApi, () => ({
      __proto__: dart.getFields(MiddlewareApi.__proto__),
      [_state$]: dart.finalFieldType(VoidToState()),
      [_actions$]: dart.finalFieldType(VoidToActions())
    }));
    return MiddlewareApi;
  });
  src__middleware.MiddlewareApi = src__middleware.MiddlewareApi$();
  dart.addTypeTests(src__middleware.MiddlewareApi, _is_MiddlewareApi_default);
  const _map$ = Symbol('_map');
  const _is_MiddlewareBuilder_default = Symbol('_is_MiddlewareBuilder_default');
  src__middleware.MiddlewareBuilder$ = dart.generic((State, StateBuilder, Actions) => {
    let MiddlewareApiOfState$StateBuilder$Actions = () => (MiddlewareApiOfState$StateBuilder$Actions = dart.constFn(src__middleware.MiddlewareApi$(State, StateBuilder, Actions)))();
    let MiddlewareHandlerOfState$StateBuilder$Actions$dynamic = () => (MiddlewareHandlerOfState$StateBuilder$Actions$dynamic = dart.constFn(dart.fnType(dart.void, [MiddlewareApiOfState$StateBuilder$Actions(), ActionTovoid(), src__action.Action])))();
    let IdentityMapOfString$MiddlewareHandlerOfState$StateBuilder$Actions$dynamic = () => (IdentityMapOfString$MiddlewareHandlerOfState$StateBuilder$Actions$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, MiddlewareHandlerOfState$StateBuilder$Actions$dynamic())))();
    let MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionToNull = () => (MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionToNull = dart.constFn(dart.fnType(core.Null, [MiddlewareApiOfState$StateBuilder$Actions(), ActionTovoid(), src__action.Action])))();
    let MiddlewareBuilderOfState$StateBuilder$Actions = () => (MiddlewareBuilderOfState$StateBuilder$Actions = dart.constFn(src__middleware.MiddlewareBuilder$(State, StateBuilder, Actions)))();
    let MapOfString$MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionTovoid = () => (MapOfString$MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionTovoid = dart.constFn(core.Map$(core.String, MiddlewareHandlerOfState$StateBuilder$Actions$dynamic())))();
    let MiddlewareApiOfState$StateBuilder$ActionsToFn = () => (MiddlewareApiOfState$StateBuilder$ActionsToFn = dart.constFn(dart.fnType(FnToFn$(), [MiddlewareApiOfState$StateBuilder$Actions()])))();
    class MiddlewareBuilder extends core.Object {
      add(Payload, aMgr, handler) {
        this[_map$][$_set](aMgr.name, dart.fn((api, next, action) => {
          handler(api, next, src__action.Action$(Payload).as(action));
        }, MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionToNull()));
      }
      combine(other) {
        MiddlewareBuilderOfState$StateBuilder$Actions()._check(other);
        this[_map$][$addAll](MapOfString$MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionTovoid()._check(other[_map$]));
      }
      combineNested(NestedState, NestedStateBuilder, NestedActions, other) {
        src__middleware.NestedMiddlewareBuilder$(State, StateBuilder, Actions, NestedState, NestedStateBuilder, NestedActions)._check(other);
        this[_map$][$addAll](MapOfString$MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionTovoid()._check(other[_map$]));
      }
      build() {
        return dart.fn(api => dart.fn(next => dart.fn(action => {
          let handler = this[_map$][$_get](action.name);
          if (handler != null) {
            handler(api, next, action);
            return;
          }
          next(action);
        }, ActionToNull()), FnToFn$()), MiddlewareApiOfState$StateBuilder$ActionsToFn());
      }
    }
    (MiddlewareBuilder.new = function() {
      this[_map$] = new (IdentityMapOfString$MiddlewareHandlerOfState$StateBuilder$Actions$dynamic()).new();
    }).prototype = MiddlewareBuilder.prototype;
    dart.addTypeTests(MiddlewareBuilder);
    MiddlewareBuilder.prototype[_is_MiddlewareBuilder_default] = true;
    dart.setMethodSignature(MiddlewareBuilder, () => ({
      __proto__: dart.getMethods(MiddlewareBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [src__action.ActionName$(Payload), dart.fnType(dart.void, [src__middleware.MiddlewareApi$(State, StateBuilder, Actions), dart.fnType(dart.void, [src__action.Action]), src__action.Action$(Payload)])]]),
      combine: dart.fnType(dart.void, [core.Object]),
      combineNested: dart.gFnType((NestedState, NestedStateBuilder, NestedActions) => [dart.void, [core.Object]], (NestedState, NestedStateBuilder, NestedActions) => [built_value$.Built$(NestedState, NestedStateBuilder), built_value$.Builder$(NestedState, NestedStateBuilder), src__action.ReduxActions]),
      build: dart.fnType(dart.fnType(dart.fnType(dart.fnType(dart.void, [src__action.Action]), [dart.fnType(dart.void, [src__action.Action])]), [src__middleware.MiddlewareApi$(State, StateBuilder, Actions)]), [])
    }));
    dart.setFieldSignature(MiddlewareBuilder, () => ({
      __proto__: dart.getFields(MiddlewareBuilder.__proto__),
      [_map$]: dart.fieldType(MapOfString$MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionTovoid())
    }));
    return MiddlewareBuilder;
  });
  src__middleware.MiddlewareBuilder = src__middleware.MiddlewareBuilder$();
  dart.addTypeTests(src__middleware.MiddlewareBuilder, _is_MiddlewareBuilder_default);
  const _stateMapper = Symbol('_stateMapper');
  const _actionsMapper = Symbol('_actionsMapper');
  const _is_NestedMiddlewareBuilder_default = Symbol('_is_NestedMiddlewareBuilder_default');
  src__middleware.NestedMiddlewareBuilder$ = dart.generic((State, StateBuilder, Actions, NestedState, NestedStateBuilder, NestedActions) => {
    let MiddlewareApiOfState$StateBuilder$Actions = () => (MiddlewareApiOfState$StateBuilder$Actions = dart.constFn(src__middleware.MiddlewareApi$(State, StateBuilder, Actions)))();
    let MiddlewareHandlerOfState$StateBuilder$Actions$dynamic = () => (MiddlewareHandlerOfState$StateBuilder$Actions$dynamic = dart.constFn(dart.fnType(dart.void, [MiddlewareApiOfState$StateBuilder$Actions(), ActionTovoid(), src__action.Action])))();
    let IdentityMapOfString$MiddlewareHandlerOfState$StateBuilder$Actions$dynamic = () => (IdentityMapOfString$MiddlewareHandlerOfState$StateBuilder$Actions$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, MiddlewareHandlerOfState$StateBuilder$Actions$dynamic())))();
    let MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionToNull = () => (MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionToNull = dart.constFn(dart.fnType(core.Null, [MiddlewareApiOfState$StateBuilder$Actions(), ActionTovoid(), src__action.Action])))();
    let MapEntryOfString$MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionTovoid = () => (MapEntryOfString$MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionTovoid = dart.constFn(core.MapEntry$(core.String, MiddlewareHandlerOfState$StateBuilder$Actions$dynamic())))();
    let StringAndFnToMapEntryOfString$MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionTovoid = () => (StringAndFnToMapEntryOfString$MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionTovoid = dart.constFn(dart.fnType(MapEntryOfString$MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionTovoid(), [core.String, MiddlewareApiOfNestedState$NestedStateBuilder$NestedActionsAndFnAndActionTovoid()])))();
    let MapOfString$MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionTovoid = () => (MapOfString$MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionTovoid = dart.constFn(core.Map$(core.String, MiddlewareHandlerOfState$StateBuilder$Actions$dynamic())))();
    let StateToNestedState = () => (StateToNestedState = dart.constFn(dart.fnType(NestedState, [State])))();
    let ActionsToNestedActions = () => (ActionsToNestedActions = dart.constFn(dart.fnType(NestedActions, [Actions])))();
    let VoidToNestedState = () => (VoidToNestedState = dart.constFn(dart.fnType(NestedState, [])))();
    let MiddlewareApiOfNestedState$NestedStateBuilder$NestedActions = () => (MiddlewareApiOfNestedState$NestedStateBuilder$NestedActions = dart.constFn(src__middleware.MiddlewareApi$(NestedState, NestedStateBuilder, NestedActions)))();
    let MiddlewareBuilderOfNestedState$NestedStateBuilder$NestedActions = () => (MiddlewareBuilderOfNestedState$NestedStateBuilder$NestedActions = dart.constFn(src__middleware.MiddlewareBuilder$(NestedState, NestedStateBuilder, NestedActions)))();
    let MiddlewareApiOfNestedState$NestedStateBuilder$NestedActionsAndFnAndActionTovoid = () => (MiddlewareApiOfNestedState$NestedStateBuilder$NestedActionsAndFnAndActionTovoid = dart.constFn(dart.fnType(dart.void, [MiddlewareApiOfNestedState$NestedStateBuilder$NestedActions(), ActionTovoid(), src__action.Action])))();
    let MapOfString$MiddlewareApiOfNestedState$NestedStateBuilder$NestedActionsAndFnAndActionTovoid = () => (MapOfString$MiddlewareApiOfNestedState$NestedStateBuilder$NestedActionsAndFnAndActionTovoid = dart.constFn(core.Map$(core.String, MiddlewareApiOfNestedState$NestedStateBuilder$NestedActionsAndFnAndActionTovoid())))();
    let VoidToNestedActions = () => (VoidToNestedActions = dart.constFn(dart.fnType(NestedActions, [])))();
    class NestedMiddlewareBuilder extends core.Object {
      add(Payload, aMgr, handler) {
        this[_map$][$_set](aMgr.name, dart.fn((api, next, action) => {
          handler(new (MiddlewareApiOfNestedState$NestedStateBuilder$NestedActions()).__(dart.fn(() => this[_stateMapper](api.state), VoidToNestedState()), dart.fn(() => this[_actionsMapper](api.actions), VoidToNestedActions())), next, src__action.Action$(Payload).as(action));
        }, MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionToNull()));
      }
      combineMiddlewareBuilder(other) {
        MiddlewareBuilderOfNestedState$NestedStateBuilder$NestedActions()._check(other);
        let adapted = MapOfString$MiddlewareApiOfNestedState$NestedStateBuilder$NestedActionsAndFnAndActionTovoid()._check(other[_map$])[$map](core.String, MiddlewareHandlerOfState$StateBuilder$Actions$dynamic(), dart.fn((name, handler) => MapEntryOfString$MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionTovoid().new(name, dart.fn((api, next, action) => handler(new (MiddlewareApiOfNestedState$NestedStateBuilder$NestedActions()).__(dart.fn(() => this[_stateMapper](api.state), VoidToNestedState()), dart.fn(() => this[_actionsMapper](api.actions), VoidToNestedActions())), next, action), MiddlewareHandlerOfState$StateBuilder$Actions$dynamic())), StringAndFnToMapEntryOfString$MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionTovoid()));
        this[_map$][$addAll](adapted);
      }
    }
    (NestedMiddlewareBuilder.new = function(stateMapper, actionsMapper) {
      this[_map$] = new (IdentityMapOfString$MiddlewareHandlerOfState$StateBuilder$Actions$dynamic()).new();
      this[_stateMapper] = stateMapper;
      this[_actionsMapper] = actionsMapper;
    }).prototype = NestedMiddlewareBuilder.prototype;
    dart.addTypeTests(NestedMiddlewareBuilder);
    NestedMiddlewareBuilder.prototype[_is_NestedMiddlewareBuilder_default] = true;
    dart.setMethodSignature(NestedMiddlewareBuilder, () => ({
      __proto__: dart.getMethods(NestedMiddlewareBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [src__action.ActionName$(Payload), dart.fnType(dart.void, [src__middleware.MiddlewareApi$(NestedState, NestedStateBuilder, NestedActions), dart.fnType(dart.void, [src__action.Action]), src__action.Action$(Payload)])]]),
      combineMiddlewareBuilder: dart.fnType(dart.void, [core.Object])
    }));
    dart.setFieldSignature(NestedMiddlewareBuilder, () => ({
      __proto__: dart.getFields(NestedMiddlewareBuilder.__proto__),
      [_map$]: dart.finalFieldType(MapOfString$MiddlewareApiOfState$StateBuilder$ActionsAndFnAndActionTovoid()),
      [_stateMapper]: dart.finalFieldType(StateToNestedState()),
      [_actionsMapper]: dart.finalFieldType(ActionsToNestedActions())
    }));
    return NestedMiddlewareBuilder;
  });
  src__middleware.NestedMiddlewareBuilder = src__middleware.NestedMiddlewareBuilder$();
  dart.addTypeTests(src__middleware.NestedMiddlewareBuilder, _is_NestedMiddlewareBuilder_default);
  const _is_SubstateChange_default = Symbol('_is_SubstateChange_default');
  src__typedefs.SubstateChange$ = dart.generic(Substate => {
    class SubstateChange extends core.Object {
      get prev() {
        return this[prev$];
      }
      set prev(value) {
        this[prev$] = Substate._check(value);
      }
      get next() {
        return this[next$];
      }
      set next(value) {
        this[next$] = Substate._check(value);
      }
    }
    (SubstateChange.new = function(prev, next) {
      this[prev$] = prev;
      this[next$] = next;
    }).prototype = SubstateChange.prototype;
    dart.addTypeTests(SubstateChange);
    SubstateChange.prototype[_is_SubstateChange_default] = true;
    const prev$ = Symbol("SubstateChange.prev");
    const next$ = Symbol("SubstateChange.next");
    dart.setFieldSignature(SubstateChange, () => ({
      __proto__: dart.getFields(SubstateChange.__proto__),
      prev: dart.fieldType(Substate),
      next: dart.fieldType(Substate)
    }));
    return SubstateChange;
  });
  src__typedefs.SubstateChange = src__typedefs.SubstateChange$();
  dart.addTypeTests(src__typedefs.SubstateChange, _is_SubstateChange_default);
  const _map$0 = Symbol('_map');
  const _is_ReducerBuilder_default = Symbol('_is_ReducerBuilder_default');
  src__reducer_builder.ReducerBuilder$ = dart.generic((State, StateBuilder) => {
    let ReducerOfState$StateBuilder$dynamic = () => (ReducerOfState$StateBuilder$dynamic = dart.constFn(dart.fnType(dart.void, [State, src__action.Action, StateBuilder])))();
    let IdentityMapOfString$ReducerOfState$StateBuilder$dynamic = () => (IdentityMapOfString$ReducerOfState$StateBuilder$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, ReducerOfState$StateBuilder$dynamic())))();
    let StateAndActionAndStateBuilderToNull = () => (StateAndActionAndStateBuilderToNull = dart.constFn(dart.fnType(core.Null, [State, src__action.Action, StateBuilder])))();
    let ReducerBuilderOfState$StateBuilder = () => (ReducerBuilderOfState$StateBuilder = dart.constFn(src__reducer_builder.ReducerBuilder$(State, StateBuilder)))();
    let MapOfString$StateAndActionAndStateBuilderTovoid = () => (MapOfString$StateAndActionAndStateBuilderTovoid = dart.constFn(core.Map$(core.String, ReducerOfState$StateBuilder$dynamic())))();
    class ReducerBuilder extends core.Object {
      add(Payload, actionName, reducer) {
        this[_map$0][$_set](actionName.name, dart.fn((state, action, builder) => {
          reducer(state, src__action.Action$(Payload).as(action), builder);
        }, StateAndActionAndStateBuilderToNull()));
      }
      combine(other) {
        ReducerBuilderOfState$StateBuilder()._check(other);
        this[_map$0][$addAll](MapOfString$StateAndActionAndStateBuilderTovoid()._check(other[_map$0]));
      }
      combineNested(N, NB, nested) {
        src__reducer_builder.NestedReducerBuilder$(State, StateBuilder, N, NB)._check(nested);
        this[_map$0][$addAll](MapOfString$StateAndActionAndStateBuilderTovoid()._check(nested[_map$0]));
      }
      combineAbstract(other) {
        this[_map$0][$addAll](other);
      }
      combineList(T, other) {
        src__reducer_builder.ListReducerBuilder$(State, StateBuilder, T)._check(other);
        this[_map$0][$addAll](MapOfString$StateAndActionAndStateBuilderTovoid()._check(other[_map$0]));
      }
      combineListMultimap(K, V, other) {
        src__reducer_builder.ListMultimapReducerBuilder$(State, StateBuilder, K, V)._check(other);
        this[_map$0][$addAll](MapOfString$StateAndActionAndStateBuilderTovoid()._check(other[_map$0]));
      }
      combineMap(K, V, other) {
        src__reducer_builder.MapReducerBuilder$(State, StateBuilder, K, V)._check(other);
        this[_map$0][$addAll](MapOfString$StateAndActionAndStateBuilderTovoid()._check(other[_map$0]));
      }
      combineSet(T, other) {
        src__reducer_builder.SetReducerBuilder$(State, StateBuilder, T)._check(other);
        this[_map$0][$addAll](MapOfString$StateAndActionAndStateBuilderTovoid()._check(other[_map$0]));
      }
      combineSetMultimap(K, V, other) {
        src__reducer_builder.SetMultimapReducerBuilder$(State, StateBuilder, K, V)._check(other);
        this[_map$0][$addAll](MapOfString$StateAndActionAndStateBuilderTovoid()._check(other[_map$0]));
      }
      build() {
        return dart.fn((state, action, builder) => {
          let reducer = this[_map$0][$_get](action.name);
          if (reducer != null) reducer(state, action, builder);
        }, StateAndActionAndStateBuilderToNull());
      }
    }
    (ReducerBuilder.new = function() {
      this[_map$0] = new (IdentityMapOfString$ReducerOfState$StateBuilder$dynamic()).new();
    }).prototype = ReducerBuilder.prototype;
    dart.addTypeTests(ReducerBuilder);
    ReducerBuilder.prototype[_is_ReducerBuilder_default] = true;
    dart.setMethodSignature(ReducerBuilder, () => ({
      __proto__: dart.getMethods(ReducerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [src__action.ActionName$(Payload), dart.fnType(dart.void, [State, src__action.Action$(Payload), StateBuilder])]]),
      combine: dart.fnType(dart.void, [core.Object]),
      combineNested: dart.gFnType((N, NB) => [dart.void, [core.Object]], (N, NB) => [built_value$.Built$(N, NB), built_value$.Builder$(N, NB)]),
      combineAbstract: dart.fnType(dart.void, [core.Map$(core.String, dart.fnType(dart.void, [State, src__action.Action, StateBuilder]))]),
      combineList: dart.gFnType(T => [dart.void, [core.Object]]),
      combineListMultimap: dart.gFnType((K, V) => [dart.void, [core.Object]]),
      combineMap: dart.gFnType((K, V) => [dart.void, [core.Object]]),
      combineSet: dart.gFnType(T => [dart.void, [core.Object]]),
      combineSetMultimap: dart.gFnType((K, V) => [dart.void, [core.Object]]),
      build: dart.fnType(dart.fnType(dart.void, [State, src__action.Action, StateBuilder]), [])
    }));
    dart.setFieldSignature(ReducerBuilder, () => ({
      __proto__: dart.getFields(ReducerBuilder.__proto__),
      [_map$0]: dart.finalFieldType(MapOfString$StateAndActionAndStateBuilderTovoid())
    }));
    return ReducerBuilder;
  });
  src__reducer_builder.ReducerBuilder = src__reducer_builder.ReducerBuilder$();
  dart.addTypeTests(src__reducer_builder.ReducerBuilder, _is_ReducerBuilder_default);
  const _stateMapper$ = Symbol('_stateMapper');
  const _builderMapper = Symbol('_builderMapper');
  const _is_NestedReducerBuilder_default = Symbol('_is_NestedReducerBuilder_default');
  src__reducer_builder.NestedReducerBuilder$ = dart.generic((State, StateBuilder, NestedState, NestedStateBuilder) => {
    let ReducerOfState$StateBuilder$dynamic = () => (ReducerOfState$StateBuilder$dynamic = dart.constFn(dart.fnType(dart.void, [State, src__action.Action, StateBuilder])))();
    let IdentityMapOfString$ReducerOfState$StateBuilder$dynamic = () => (IdentityMapOfString$ReducerOfState$StateBuilder$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, ReducerOfState$StateBuilder$dynamic())))();
    let MapEntryOfString$StateAndActionAndStateBuilderTovoid = () => (MapEntryOfString$StateAndActionAndStateBuilderTovoid = dart.constFn(core.MapEntry$(core.String, ReducerOfState$StateBuilder$dynamic())))();
    let StringAndFnToMapEntryOfString$StateAndActionAndStateBuilderTovoid = () => (StringAndFnToMapEntryOfString$StateAndActionAndStateBuilderTovoid = dart.constFn(dart.fnType(MapEntryOfString$StateAndActionAndStateBuilderTovoid(), [core.String, NestedStateAndActionAndNestedStateBuilderTovoid()])))();
    let MapOfString$StateAndActionAndStateBuilderTovoid = () => (MapOfString$StateAndActionAndStateBuilderTovoid = dart.constFn(core.Map$(core.String, ReducerOfState$StateBuilder$dynamic())))();
    let StateToNestedState = () => (StateToNestedState = dart.constFn(dart.fnType(NestedState, [State])))();
    let StateBuilderToNestedStateBuilder = () => (StateBuilderToNestedStateBuilder = dart.constFn(dart.fnType(NestedStateBuilder, [StateBuilder])))();
    let ReducerBuilderOfNestedState$NestedStateBuilder = () => (ReducerBuilderOfNestedState$NestedStateBuilder = dart.constFn(src__reducer_builder.ReducerBuilder$(NestedState, NestedStateBuilder)))();
    let NestedStateAndActionAndNestedStateBuilderTovoid = () => (NestedStateAndActionAndNestedStateBuilderTovoid = dart.constFn(dart.fnType(dart.void, [NestedState, src__action.Action, NestedStateBuilder])))();
    let MapOfString$NestedStateAndActionAndNestedStateBuilderTovoid = () => (MapOfString$NestedStateAndActionAndNestedStateBuilderTovoid = dart.constFn(core.Map$(core.String, NestedStateAndActionAndNestedStateBuilderTovoid())))();
    class NestedReducerBuilder extends core.Object {
      add(Payload, actionName, reducer) {
        this[_map$0][$_set](actionName.name, dart.fn((state, action, builder) => reducer(this[_stateMapper$](state), src__action.Action$(Payload).as(action), this[_builderMapper](builder)), ReducerOfState$StateBuilder$dynamic()));
      }
      combineReducerBuilder(other) {
        ReducerBuilderOfNestedState$NestedStateBuilder()._check(other);
        let adapted = MapOfString$NestedStateAndActionAndNestedStateBuilderTovoid()._check(other[_map$0])[$map](core.String, ReducerOfState$StateBuilder$dynamic(), dart.fn((name, reducer) => MapEntryOfString$StateAndActionAndStateBuilderTovoid().new(name, dart.fn((state, action, builder) => reducer(this[_stateMapper$](state), action, this[_builderMapper](builder)), ReducerOfState$StateBuilder$dynamic())), StringAndFnToMapEntryOfString$StateAndActionAndStateBuilderTovoid()));
        this[_map$0][$addAll](adapted);
      }
    }
    (NestedReducerBuilder.new = function(stateMapper, builderMapper) {
      this[_map$0] = new (IdentityMapOfString$ReducerOfState$StateBuilder$dynamic()).new();
      this[_stateMapper$] = stateMapper;
      this[_builderMapper] = builderMapper;
    }).prototype = NestedReducerBuilder.prototype;
    dart.addTypeTests(NestedReducerBuilder);
    NestedReducerBuilder.prototype[_is_NestedReducerBuilder_default] = true;
    dart.setMethodSignature(NestedReducerBuilder, () => ({
      __proto__: dart.getMethods(NestedReducerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [src__action.ActionName$(Payload), dart.fnType(dart.void, [NestedState, src__action.Action$(Payload), NestedStateBuilder])]]),
      combineReducerBuilder: dart.fnType(dart.void, [core.Object])
    }));
    dart.setFieldSignature(NestedReducerBuilder, () => ({
      __proto__: dart.getFields(NestedReducerBuilder.__proto__),
      [_map$0]: dart.finalFieldType(MapOfString$StateAndActionAndStateBuilderTovoid()),
      [_stateMapper$]: dart.fieldType(StateToNestedState()),
      [_builderMapper]: dart.fieldType(StateBuilderToNestedStateBuilder())
    }));
    return NestedReducerBuilder;
  });
  src__reducer_builder.NestedReducerBuilder = src__reducer_builder.NestedReducerBuilder$();
  dart.addTypeTests(src__reducer_builder.NestedReducerBuilder, _is_NestedReducerBuilder_default);
  const _is_AbstractReducerBuilder_default = Symbol('_is_AbstractReducerBuilder_default');
  src__reducer_builder.AbstractReducerBuilder$ = dart.generic((AState, AStateBuilder) => {
    let CReducerOfAState$AStateBuilder$dynamic = () => (CReducerOfAState$AStateBuilder$dynamic = dart.constFn(dart.fnType(dart.void, [AState, src__action.Action, AStateBuilder])))();
    let IdentityMapOfString$CReducerOfAState$AStateBuilder$dynamic = () => (IdentityMapOfString$CReducerOfAState$AStateBuilder$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, CReducerOfAState$AStateBuilder$dynamic())))();
    let AStateAndActionAndAStateBuilderToNull = () => (AStateAndActionAndAStateBuilderToNull = dart.constFn(dart.fnType(core.Null, [AState, src__action.Action, AStateBuilder])))();
    let MapOfString$AStateAndActionAndAStateBuilderTovoid = () => (MapOfString$AStateAndActionAndAStateBuilderTovoid = dart.constFn(core.Map$(core.String, CReducerOfAState$AStateBuilder$dynamic())))();
    class AbstractReducerBuilder extends core.Object {
      add(Payload, actionName, reducer) {
        this[_map$0][$_set](actionName.name, dart.fn((state, action, builder) => {
          reducer(state, src__action.Action$(Payload).as(action), builder);
        }, AStateAndActionAndAStateBuilderToNull()));
      }
      build() {
        return this[_map$0];
      }
    }
    (AbstractReducerBuilder.new = function() {
      this[_map$0] = new (IdentityMapOfString$CReducerOfAState$AStateBuilder$dynamic()).new();
    }).prototype = AbstractReducerBuilder.prototype;
    dart.addTypeTests(AbstractReducerBuilder);
    AbstractReducerBuilder.prototype[_is_AbstractReducerBuilder_default] = true;
    dart.setMethodSignature(AbstractReducerBuilder, () => ({
      __proto__: dart.getMethods(AbstractReducerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [src__action.ActionName$(Payload), dart.fnType(dart.void, [AState, src__action.Action$(Payload), AStateBuilder])]]),
      build: dart.fnType(core.Map$(core.String, dart.fnType(dart.void, [AState, src__action.Action, AStateBuilder])), [])
    }));
    dart.setFieldSignature(AbstractReducerBuilder, () => ({
      __proto__: dart.getFields(AbstractReducerBuilder.__proto__),
      [_map$0]: dart.finalFieldType(MapOfString$AStateAndActionAndAStateBuilderTovoid())
    }));
    return AbstractReducerBuilder;
  });
  src__reducer_builder.AbstractReducerBuilder = src__reducer_builder.AbstractReducerBuilder$();
  dart.addTypeTests(src__reducer_builder.AbstractReducerBuilder, _is_AbstractReducerBuilder_default);
  const _is_ListReducerBuilder_default = Symbol('_is_ListReducerBuilder_default');
  src__reducer_builder.ListReducerBuilder$ = dart.generic((State, StateBuilder, T) => {
    let ReducerOfState$StateBuilder$dynamic = () => (ReducerOfState$StateBuilder$dynamic = dart.constFn(dart.fnType(dart.void, [State, src__action.Action, StateBuilder])))();
    let IdentityMapOfString$ReducerOfState$StateBuilder$dynamic = () => (IdentityMapOfString$ReducerOfState$StateBuilder$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, ReducerOfState$StateBuilder$dynamic())))();
    let MapOfString$StateAndActionAndStateBuilderTovoid = () => (MapOfString$StateAndActionAndStateBuilderTovoid = dart.constFn(core.Map$(core.String, ReducerOfState$StateBuilder$dynamic())))();
    let StateToBuiltListOfT = () => (StateToBuiltListOfT = dart.constFn(dart.fnType(BuiltListOfT(), [State])))();
    let StateBuilderToListBuilderOfT = () => (StateBuilderToListBuilderOfT = dart.constFn(dart.fnType(ListBuilderOfT(), [StateBuilder])))();
    let BuiltListOfT = () => (BuiltListOfT = dart.constFn(src__list.BuiltList$(T)))();
    let ListBuilderOfT = () => (ListBuilderOfT = dart.constFn(src__list.ListBuilder$(T)))();
    class ListReducerBuilder extends core.Object {
      add(Payload, actionName, reducer) {
        this[_map$0][$_set](actionName.name, dart.fn((state, action, builder) => reducer(this[_stateMapper$](state), src__action.Action$(Payload).as(action), this[_builderMapper](builder)), ReducerOfState$StateBuilder$dynamic()));
      }
    }
    (ListReducerBuilder.new = function(stateMapper, builderMapper) {
      this[_map$0] = new (IdentityMapOfString$ReducerOfState$StateBuilder$dynamic()).new();
      this[_stateMapper$] = stateMapper;
      this[_builderMapper] = builderMapper;
    }).prototype = ListReducerBuilder.prototype;
    dart.addTypeTests(ListReducerBuilder);
    ListReducerBuilder.prototype[_is_ListReducerBuilder_default] = true;
    dart.setMethodSignature(ListReducerBuilder, () => ({
      __proto__: dart.getMethods(ListReducerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [src__action.ActionName$(Payload), dart.fnType(dart.void, [src__list.BuiltList$(T), src__action.Action$(Payload), src__list.ListBuilder$(T)])]])
    }));
    dart.setFieldSignature(ListReducerBuilder, () => ({
      __proto__: dart.getFields(ListReducerBuilder.__proto__),
      [_map$0]: dart.finalFieldType(MapOfString$StateAndActionAndStateBuilderTovoid()),
      [_stateMapper$]: dart.fieldType(StateToBuiltListOfT()),
      [_builderMapper]: dart.fieldType(StateBuilderToListBuilderOfT())
    }));
    return ListReducerBuilder;
  });
  src__reducer_builder.ListReducerBuilder = src__reducer_builder.ListReducerBuilder$();
  dart.addTypeTests(src__reducer_builder.ListReducerBuilder, _is_ListReducerBuilder_default);
  const _is_ListMultimapReducerBuilder_default = Symbol('_is_ListMultimapReducerBuilder_default');
  src__reducer_builder.ListMultimapReducerBuilder$ = dart.generic((State, StateBuilder, K, V) => {
    let ReducerOfState$StateBuilder$dynamic = () => (ReducerOfState$StateBuilder$dynamic = dart.constFn(dart.fnType(dart.void, [State, src__action.Action, StateBuilder])))();
    let IdentityMapOfString$ReducerOfState$StateBuilder$dynamic = () => (IdentityMapOfString$ReducerOfState$StateBuilder$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, ReducerOfState$StateBuilder$dynamic())))();
    let MapOfString$StateAndActionAndStateBuilderTovoid = () => (MapOfString$StateAndActionAndStateBuilderTovoid = dart.constFn(core.Map$(core.String, ReducerOfState$StateBuilder$dynamic())))();
    let StateToBuiltListMultimapOfK$V = () => (StateToBuiltListMultimapOfK$V = dart.constFn(dart.fnType(BuiltListMultimapOfK$V(), [State])))();
    let StateBuilderToListMultimapBuilderOfK$V = () => (StateBuilderToListMultimapBuilderOfK$V = dart.constFn(dart.fnType(ListMultimapBuilderOfK$V(), [StateBuilder])))();
    let BuiltListMultimapOfK$V = () => (BuiltListMultimapOfK$V = dart.constFn(src__list_multimap.BuiltListMultimap$(K, V)))();
    let ListMultimapBuilderOfK$V = () => (ListMultimapBuilderOfK$V = dart.constFn(src__list_multimap.ListMultimapBuilder$(K, V)))();
    class ListMultimapReducerBuilder extends core.Object {
      add(Payload, actionName, reducer) {
        this[_map$0][$_set](actionName.name, dart.fn((state, action, builder) => reducer(this[_stateMapper$](state), src__action.Action$(Payload).as(action), this[_builderMapper](builder)), ReducerOfState$StateBuilder$dynamic()));
      }
    }
    (ListMultimapReducerBuilder.new = function(stateMapper, builderMapper) {
      this[_map$0] = new (IdentityMapOfString$ReducerOfState$StateBuilder$dynamic()).new();
      this[_stateMapper$] = stateMapper;
      this[_builderMapper] = builderMapper;
    }).prototype = ListMultimapReducerBuilder.prototype;
    dart.addTypeTests(ListMultimapReducerBuilder);
    ListMultimapReducerBuilder.prototype[_is_ListMultimapReducerBuilder_default] = true;
    dart.setMethodSignature(ListMultimapReducerBuilder, () => ({
      __proto__: dart.getMethods(ListMultimapReducerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [src__action.ActionName$(Payload), dart.fnType(dart.void, [src__list_multimap.BuiltListMultimap$(K, V), src__action.Action$(Payload), src__list_multimap.ListMultimapBuilder$(K, V)])]])
    }));
    dart.setFieldSignature(ListMultimapReducerBuilder, () => ({
      __proto__: dart.getFields(ListMultimapReducerBuilder.__proto__),
      [_map$0]: dart.finalFieldType(MapOfString$StateAndActionAndStateBuilderTovoid()),
      [_stateMapper$]: dart.fieldType(StateToBuiltListMultimapOfK$V()),
      [_builderMapper]: dart.fieldType(StateBuilderToListMultimapBuilderOfK$V())
    }));
    return ListMultimapReducerBuilder;
  });
  src__reducer_builder.ListMultimapReducerBuilder = src__reducer_builder.ListMultimapReducerBuilder$();
  dart.addTypeTests(src__reducer_builder.ListMultimapReducerBuilder, _is_ListMultimapReducerBuilder_default);
  const _is_MapReducerBuilder_default = Symbol('_is_MapReducerBuilder_default');
  src__reducer_builder.MapReducerBuilder$ = dart.generic((State, StateBuilder, K, V) => {
    let ReducerOfState$StateBuilder$dynamic = () => (ReducerOfState$StateBuilder$dynamic = dart.constFn(dart.fnType(dart.void, [State, src__action.Action, StateBuilder])))();
    let IdentityMapOfString$ReducerOfState$StateBuilder$dynamic = () => (IdentityMapOfString$ReducerOfState$StateBuilder$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, ReducerOfState$StateBuilder$dynamic())))();
    let MapOfString$StateAndActionAndStateBuilderTovoid = () => (MapOfString$StateAndActionAndStateBuilderTovoid = dart.constFn(core.Map$(core.String, ReducerOfState$StateBuilder$dynamic())))();
    let StateToBuiltMapOfK$V = () => (StateToBuiltMapOfK$V = dart.constFn(dart.fnType(BuiltMapOfK$V(), [State])))();
    let StateBuilderToMapBuilderOfK$V = () => (StateBuilderToMapBuilderOfK$V = dart.constFn(dart.fnType(MapBuilderOfK$V(), [StateBuilder])))();
    let BuiltMapOfK$V = () => (BuiltMapOfK$V = dart.constFn(src__map.BuiltMap$(K, V)))();
    let MapBuilderOfK$V = () => (MapBuilderOfK$V = dart.constFn(src__map.MapBuilder$(K, V)))();
    class MapReducerBuilder extends core.Object {
      add(Payload, actionName, reducer) {
        this[_map$0][$_set](actionName.name, dart.fn((state, action, builder) => reducer(this[_stateMapper$](state), src__action.Action$(Payload).as(action), this[_builderMapper](builder)), ReducerOfState$StateBuilder$dynamic()));
      }
    }
    (MapReducerBuilder.new = function(stateMapper, builderMapper) {
      this[_map$0] = new (IdentityMapOfString$ReducerOfState$StateBuilder$dynamic()).new();
      this[_stateMapper$] = stateMapper;
      this[_builderMapper] = builderMapper;
    }).prototype = MapReducerBuilder.prototype;
    dart.addTypeTests(MapReducerBuilder);
    MapReducerBuilder.prototype[_is_MapReducerBuilder_default] = true;
    dart.setMethodSignature(MapReducerBuilder, () => ({
      __proto__: dart.getMethods(MapReducerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [src__action.ActionName$(Payload), dart.fnType(dart.void, [src__map.BuiltMap$(K, V), src__action.Action$(Payload), src__map.MapBuilder$(K, V)])]])
    }));
    dart.setFieldSignature(MapReducerBuilder, () => ({
      __proto__: dart.getFields(MapReducerBuilder.__proto__),
      [_map$0]: dart.finalFieldType(MapOfString$StateAndActionAndStateBuilderTovoid()),
      [_stateMapper$]: dart.fieldType(StateToBuiltMapOfK$V()),
      [_builderMapper]: dart.fieldType(StateBuilderToMapBuilderOfK$V())
    }));
    return MapReducerBuilder;
  });
  src__reducer_builder.MapReducerBuilder = src__reducer_builder.MapReducerBuilder$();
  dart.addTypeTests(src__reducer_builder.MapReducerBuilder, _is_MapReducerBuilder_default);
  const _is_SetReducerBuilder_default = Symbol('_is_SetReducerBuilder_default');
  src__reducer_builder.SetReducerBuilder$ = dart.generic((State, StateBuilder, T) => {
    let ReducerOfState$StateBuilder$dynamic = () => (ReducerOfState$StateBuilder$dynamic = dart.constFn(dart.fnType(dart.void, [State, src__action.Action, StateBuilder])))();
    let IdentityMapOfString$ReducerOfState$StateBuilder$dynamic = () => (IdentityMapOfString$ReducerOfState$StateBuilder$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, ReducerOfState$StateBuilder$dynamic())))();
    let MapOfString$StateAndActionAndStateBuilderTovoid = () => (MapOfString$StateAndActionAndStateBuilderTovoid = dart.constFn(core.Map$(core.String, ReducerOfState$StateBuilder$dynamic())))();
    let StateToBuiltSetOfT = () => (StateToBuiltSetOfT = dart.constFn(dart.fnType(BuiltSetOfT(), [State])))();
    let StateBuilderToSetBuilderOfT = () => (StateBuilderToSetBuilderOfT = dart.constFn(dart.fnType(SetBuilderOfT(), [StateBuilder])))();
    let BuiltSetOfT = () => (BuiltSetOfT = dart.constFn(src__set.BuiltSet$(T)))();
    let SetBuilderOfT = () => (SetBuilderOfT = dart.constFn(src__set.SetBuilder$(T)))();
    class SetReducerBuilder extends core.Object {
      add(Payload, actionName, reducer) {
        this[_map$0][$_set](actionName.name, dart.fn((state, action, builder) => reducer(this[_stateMapper$](state), src__action.Action$(Payload).as(action), this[_builderMapper](builder)), ReducerOfState$StateBuilder$dynamic()));
      }
    }
    (SetReducerBuilder.new = function(stateMapper, builderMapper) {
      this[_map$0] = new (IdentityMapOfString$ReducerOfState$StateBuilder$dynamic()).new();
      this[_stateMapper$] = stateMapper;
      this[_builderMapper] = builderMapper;
    }).prototype = SetReducerBuilder.prototype;
    dart.addTypeTests(SetReducerBuilder);
    SetReducerBuilder.prototype[_is_SetReducerBuilder_default] = true;
    dart.setMethodSignature(SetReducerBuilder, () => ({
      __proto__: dart.getMethods(SetReducerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [src__action.ActionName$(Payload), dart.fnType(dart.void, [src__set.BuiltSet$(T), src__action.Action$(Payload), src__set.SetBuilder$(T)])]])
    }));
    dart.setFieldSignature(SetReducerBuilder, () => ({
      __proto__: dart.getFields(SetReducerBuilder.__proto__),
      [_map$0]: dart.finalFieldType(MapOfString$StateAndActionAndStateBuilderTovoid()),
      [_stateMapper$]: dart.fieldType(StateToBuiltSetOfT()),
      [_builderMapper]: dart.fieldType(StateBuilderToSetBuilderOfT())
    }));
    return SetReducerBuilder;
  });
  src__reducer_builder.SetReducerBuilder = src__reducer_builder.SetReducerBuilder$();
  dart.addTypeTests(src__reducer_builder.SetReducerBuilder, _is_SetReducerBuilder_default);
  const _is_SetMultimapReducerBuilder_default = Symbol('_is_SetMultimapReducerBuilder_default');
  src__reducer_builder.SetMultimapReducerBuilder$ = dart.generic((State, StateBuilder, K, V) => {
    let ReducerOfState$StateBuilder$dynamic = () => (ReducerOfState$StateBuilder$dynamic = dart.constFn(dart.fnType(dart.void, [State, src__action.Action, StateBuilder])))();
    let IdentityMapOfString$ReducerOfState$StateBuilder$dynamic = () => (IdentityMapOfString$ReducerOfState$StateBuilder$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, ReducerOfState$StateBuilder$dynamic())))();
    let MapOfString$StateAndActionAndStateBuilderTovoid = () => (MapOfString$StateAndActionAndStateBuilderTovoid = dart.constFn(core.Map$(core.String, ReducerOfState$StateBuilder$dynamic())))();
    let StateToBuiltSetMultimapOfK$V = () => (StateToBuiltSetMultimapOfK$V = dart.constFn(dart.fnType(BuiltSetMultimapOfK$V(), [State])))();
    let StateBuilderToSetMultimapBuilderOfK$V = () => (StateBuilderToSetMultimapBuilderOfK$V = dart.constFn(dart.fnType(SetMultimapBuilderOfK$V(), [StateBuilder])))();
    let BuiltSetMultimapOfK$V = () => (BuiltSetMultimapOfK$V = dart.constFn(src__set_multimap.BuiltSetMultimap$(K, V)))();
    let SetMultimapBuilderOfK$V = () => (SetMultimapBuilderOfK$V = dart.constFn(src__set_multimap.SetMultimapBuilder$(K, V)))();
    class SetMultimapReducerBuilder extends core.Object {
      add(Payload, actionName, reducer) {
        this[_map$0][$_set](actionName.name, dart.fn((state, action, builder) => reducer(this[_stateMapper$](state), src__action.Action$(Payload).as(action), this[_builderMapper](builder)), ReducerOfState$StateBuilder$dynamic()));
      }
    }
    (SetMultimapReducerBuilder.new = function(stateMapper, builderMapper) {
      this[_map$0] = new (IdentityMapOfString$ReducerOfState$StateBuilder$dynamic()).new();
      this[_stateMapper$] = stateMapper;
      this[_builderMapper] = builderMapper;
    }).prototype = SetMultimapReducerBuilder.prototype;
    dart.addTypeTests(SetMultimapReducerBuilder);
    SetMultimapReducerBuilder.prototype[_is_SetMultimapReducerBuilder_default] = true;
    dart.setMethodSignature(SetMultimapReducerBuilder, () => ({
      __proto__: dart.getMethods(SetMultimapReducerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [src__action.ActionName$(Payload), dart.fnType(dart.void, [src__set_multimap.BuiltSetMultimap$(K, V), src__action.Action$(Payload), src__set_multimap.SetMultimapBuilder$(K, V)])]])
    }));
    dart.setFieldSignature(SetMultimapReducerBuilder, () => ({
      __proto__: dart.getFields(SetMultimapReducerBuilder.__proto__),
      [_map$0]: dart.finalFieldType(MapOfString$StateAndActionAndStateBuilderTovoid()),
      [_stateMapper$]: dart.fieldType(StateToBuiltSetMultimapOfK$V()),
      [_builderMapper]: dart.fieldType(StateBuilderToSetMultimapBuilderOfK$V())
    }));
    return SetMultimapReducerBuilder;
  });
  src__reducer_builder.SetMultimapReducerBuilder = src__reducer_builder.SetMultimapReducerBuilder$();
  dart.addTypeTests(src__reducer_builder.SetMultimapReducerBuilder, _is_SetMultimapReducerBuilder_default);
  dart.trackLibraries("packages/built_redux/src/action.ddc", {
    "package:built_redux/src/action.dart": src__action,
    "package:built_redux/src/store_change.dart": src__store_change,
    "package:built_redux/src/store.dart": src__store,
    "package:built_redux/src/middleware.dart": src__middleware,
    "package:built_redux/src/typedefs.dart": src__typedefs,
    "package:built_redux/src/reducer_builder.dart": src__reducer_builder
  }, '{"version":3,"sourceRoot":"","sources":["action.dart","store_change.dart","store.dart","middleware.dart","typedefs.dart","reducer_builder.dart"],"names":[],"mappings":"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","file":"action.ddc.js"}');
  // Exports:
  return {
    src__action: src__action,
    src__store_change: src__store_change,
    src__store: src__store,
    src__middleware: src__middleware,
    src__typedefs: src__typedefs,
    src__reducer_builder: src__reducer_builder
  };
});

//# sourceMappingURL=action.ddc.js.map
