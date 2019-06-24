define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__pipe_transform = change_detection.src__core__change_detection__pipe_transform;
  const _root = Object.create(null);
  const src__todo_list__todo_list_service = Object.create(_root);
  const src__todo_list__todo_list_component = Object.create(_root);
  const src__pipes__isnull = Object.create(_root);
  const src__pipes__index = Object.create(_root);
  const $add = dartx.add;
  const $removeAt = dartx.removeAt;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  src__todo_list__todo_list_service.TodoListService = class TodoListService extends core.Object {
    get mockTodoList() {
      return this[mockTodoList];
    }
    set mockTodoList(value) {
      this[mockTodoList] = value;
    }
    getTodoList() {
      return async.async(ListOfString(), (function* getTodoList() {
        return this.mockTodoList;
      }).bind(this));
    }
  };
  (src__todo_list__todo_list_service.TodoListService.new = function() {
    this[mockTodoList] = JSArrayOfString().of([]);
  }).prototype = src__todo_list__todo_list_service.TodoListService.prototype;
  dart.addTypeTests(src__todo_list__todo_list_service.TodoListService);
  const mockTodoList = Symbol("TodoListService.mockTodoList");
  dart.setMethodSignature(src__todo_list__todo_list_service.TodoListService, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_service.TodoListService.__proto__),
    getTodoList: dart.fnType(async.Future$(core.List$(core.String)), [])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_service.TodoListService, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_service.TodoListService.__proto__),
    mockTodoList: dart.fieldType(ListOfString())
  }));
  src__todo_list__todo_list_component.TodoListComponent = class TodoListComponent extends core.Object {
    get todoListService() {
      return this[todoListService$];
    }
    set todoListService(value) {
      super.todoListService = value;
    }
    get items() {
      return this[items];
    }
    set items(value) {
      this[items] = value;
    }
    get newTodo() {
      return this[newTodo];
    }
    set newTodo(value) {
      this[newTodo] = value;
    }
    ngOnInit() {
      return async.async(core.Null, (function* ngOnInit() {
        this.items = (yield this.todoListService.getTodoList());
      }).bind(this));
    }
    add() {
      this.items[$add](this.newTodo);
      this.newTodo = "";
    }
    remove(index) {
      return this.items[$removeAt](index);
    }
  };
  (src__todo_list__todo_list_component.TodoListComponent.new = function(todoListService) {
    this[items] = JSArrayOfString().of([]);
    this[newTodo] = "";
    this[todoListService$] = todoListService;
  }).prototype = src__todo_list__todo_list_component.TodoListComponent.prototype;
  dart.addTypeTests(src__todo_list__todo_list_component.TodoListComponent);
  const todoListService$ = Symbol("TodoListComponent.todoListService");
  const items = Symbol("TodoListComponent.items");
  const newTodo = Symbol("TodoListComponent.newTodo");
  src__todo_list__todo_list_component.TodoListComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__todo_list__todo_list_component.TodoListComponent, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_component.TodoListComponent.__proto__),
    ngOnInit: dart.fnType(async.Future$(core.Null), []),
    add: dart.fnType(dart.void, []),
    remove: dart.fnType(core.String, [core.int])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_component.TodoListComponent, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_component.TodoListComponent.__proto__),
    todoListService: dart.finalFieldType(src__todo_list__todo_list_service.TodoListService),
    items: dart.fieldType(ListOfString()),
    newTodo: dart.fieldType(core.String)
  }));
  src__pipes__isnull.NotNull = class NotNull extends core.Object {
    transform(value) {
      return value != null;
    }
  };
  (src__pipes__isnull.NotNull.new = function() {
  }).prototype = src__pipes__isnull.NotNull.prototype;
  dart.addTypeTests(src__pipes__isnull.NotNull);
  src__pipes__isnull.NotNull[dart.implements] = () => [src__core__change_detection__pipe_transform.PipeTransform];
  dart.setMethodSignature(src__pipes__isnull.NotNull, () => ({
    __proto__: dart.getMethods(src__pipes__isnull.NotNull.__proto__),
    transform: dart.fnType(core.bool, [dart.dynamic])
  }));
  src__pipes__isnull.IsNull = class IsNull extends core.Object {
    transform(value) {
      return value == null;
    }
  };
  (src__pipes__isnull.IsNull.new = function() {
  }).prototype = src__pipes__isnull.IsNull.prototype;
  dart.addTypeTests(src__pipes__isnull.IsNull);
  src__pipes__isnull.IsNull[dart.implements] = () => [src__core__change_detection__pipe_transform.PipeTransform];
  dart.setMethodSignature(src__pipes__isnull.IsNull, () => ({
    __proto__: dart.getMethods(src__pipes__isnull.IsNull.__proto__),
    transform: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.trackLibraries("packages/avocado_web/src/pipes/index.ddc", {
    "package:avocado_web/src/todo_list/todo_list_service.dart": src__todo_list__todo_list_service,
    "package:avocado_web/src/todo_list/todo_list_component.dart": src__todo_list__todo_list_component,
    "package:avocado_web/src/pipes/isnull.dart": src__pipes__isnull,
    "package:avocado_web/src/pipes/index.dart": src__pipes__index
  }, '{"version":3,"sourceRoot":"","sources":["../todo_list/todo_list_service.dart","../todo_list/todo_list_component.dart","isnull.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAOe;;;;;;;AAEsB;cAAS,kBAAY;;;;;IAF3C,kBAAY,GAAG;EAG9B;;;;;;;;;;;;ICcwB;;;;;;IAET;;;;;;IACN;;;;;;;AAKiB;AACtB,kBAAK,IAAG,MAAM,oBAAe,YAAY;MAC3C;;;AAGE,gBAAK,MAAI,CAAC,YAAO;AACjB,kBAAO,GAAG;IACZ;WAEc,KAAS;YAAK,WAAK,WAAS,CAAC,KAAK;IAAC;;wEAZ/B,eAAoB;IAHzB,WAAK,GAAG;IACd,aAAO,GAAG;IAEM,sBAAe,GAAf,eAAe;EAAC;;;;;;;;;;;;;;;;;;;cClBxB,KAAK;YAAK,MAAK,IAAI;IAAI;;;EAFvB;;;;;;;;cAWA,KAAK;YAAK,MAAK,IAAI;IAAI;;;EAFxB","file":"index.ddc.js"}');
  // Exports:
  return {
    src__todo_list__todo_list_service: src__todo_list__todo_list_service,
    src__todo_list__todo_list_component: src__todo_list__todo_list_component,
    src__pipes__isnull: src__pipes__isnull,
    src__pipes__index: src__pipes__index
  };
});

//# sourceMappingURL=index.ddc.js.map
