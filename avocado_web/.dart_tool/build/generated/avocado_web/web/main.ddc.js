define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/avocado_web/src/services/store', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/avocado_common/common', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/avocado_web/app_component.template', 'packages/avocado_web/src/services/services.template', 'packages/avocado_web/app_component', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, change_detection, store, router_outlet_directive, common, angular, angular_router, app_component, services, app_component$, modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__injector__hierarchical = change_detection.src__di__injector__hierarchical;
  const src__di__injector__injector = change_detection.src__di__injector__injector;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__services__store = store.src__services__store;
  const src__location__location = router_outlet_directive.src__location__location;
  const src__router_hook = router_outlet_directive.src__router_hook;
  const src__router__router_impl = router_outlet_directive.src__router__router_impl;
  const src__location__location_strategy = router_outlet_directive.src__location__location_strategy;
  const src__location__browser_platform_location = router_outlet_directive.src__location__browser_platform_location;
  const src__location__platform_location = router_outlet_directive.src__location__platform_location;
  const src__location__hash_location_strategy = router_outlet_directive.src__location__hash_location_strategy;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__services__store$ = common.src__services__store;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const app_component$46template = app_component.app_component$46template;
  const src__services__services$46template = services.src__services__services$46template;
  const app_component$0 = app_component$.app_component;
  const src__bootstrap__run = modules.src__bootstrap__run;
  const _root = Object.create(null);
  const main$46template = Object.create(_root);
  const main = Object.create(_root);
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(src__core__di__opaque_token.OpaqueToken$(core.String)))();
  let __ToInjector = () => (__ToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])))();
  main$46template.rootInjector$Injector = function(parent) {
    if (parent === void 0) parent = null;
    return new main$46template._Injector$rootInjector.__(parent);
  };
  const _field0 = Symbol('_field0');
  const _field1 = Symbol('_field1');
  const _field2 = Symbol('_field2');
  const _field3 = Symbol('_field3');
  const _field4 = Symbol('_field4');
  const _getStoreServiceImpl$0 = Symbol('_getStoreServiceImpl$0');
  const _getRouterImpl$1 = Symbol('_getRouterImpl$1');
  const _getLocation$2 = Symbol('_getLocation$2');
  const _getBrowserPlatformLocation$3 = Symbol('_getBrowserPlatformLocation$3');
  let const$;
  const _getHashLocationStrategy$4 = Symbol('_getHashLocationStrategy$4');
  const _getInjector$5 = Symbol('_getInjector$5');
  main$46template._Injector$rootInjector = class _Injector$rootInjector extends src__di__injector__hierarchical.HierarchicalInjector {
    [_getStoreServiceImpl$0]() {
      let t = this[_field0];
      return t == null ? this[_field0] = new src__services__store.StoreServiceImpl.new(src__di__injector__injector.Injector._check(this.get(dart.wrapType(src__di__injector__injector.Injector)))) : t;
    }
    [_getRouterImpl$1]() {
      let t = this[_field1];
      return t == null ? this[_field1] = new src__router__router_impl.RouterImpl.new(src__location__location.Location._check(this.get(dart.wrapType(src__location__location.Location))), src__router_hook.RouterHook._check(this.provideUntyped(dart.wrapType(src__router_hook.RouterHook), null))) : t;
    }
    [_getLocation$2]() {
      let t = this[_field2];
      return t == null ? this[_field2] = new src__location__location.Location.new(src__location__location_strategy.LocationStrategy._check(this.get(dart.wrapType(src__location__location_strategy.LocationStrategy)))) : t;
    }
    [_getBrowserPlatformLocation$3]() {
      let t = this[_field3];
      return t == null ? this[_field3] = new src__location__browser_platform_location.BrowserPlatformLocation.new() : t;
    }
    [_getHashLocationStrategy$4]() {
      let t = this[_field4];
      return t == null ? this[_field4] = new src__location__hash_location_strategy.HashLocationStrategy.new(src__location__platform_location.PlatformLocation._check(this.get(dart.wrapType(src__location__platform_location.PlatformLocation))), core.String._check(this.provideUntyped(const$ || (const$ = dart.const(new (OpaqueTokenOfString()).new("appBaseHref"))), null))) : t;
    }
    [_getInjector$5]() {
      return this;
    }
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      if (token === dart.wrapType(src__services__store$.StoreService)) {
        return this[_getStoreServiceImpl$0]();
      }
      if (token === dart.wrapType(src__router__router.Router)) {
        return this[_getRouterImpl$1]();
      }
      if (token === dart.wrapType(src__location__location.Location)) {
        return this[_getLocation$2]();
      }
      if (token === dart.wrapType(src__location__platform_location.PlatformLocation)) {
        return this[_getBrowserPlatformLocation$3]();
      }
      if (token === dart.wrapType(src__location__location_strategy.LocationStrategy)) {
        return this[_getHashLocationStrategy$4]();
      }
      if (token === dart.wrapType(src__di__injector__injector.Injector)) {
        return this[_getInjector$5]();
      }
      return orElse;
    }
  };
  (main$46template._Injector$rootInjector.__ = function(parent) {
    if (parent === void 0) parent = null;
    this[_field0] = null;
    this[_field1] = null;
    this[_field2] = null;
    this[_field3] = null;
    this[_field4] = null;
    main$46template._Injector$rootInjector.__proto__.new.call(this, src__di__injector__hierarchical.HierarchicalInjector._check(parent));
  }).prototype = main$46template._Injector$rootInjector.prototype;
  dart.addTypeTests(main$46template._Injector$rootInjector);
  dart.setMethodSignature(main$46template._Injector$rootInjector, () => ({
    __proto__: dart.getMethods(main$46template._Injector$rootInjector.__proto__),
    [_getStoreServiceImpl$0]: dart.fnType(src__services__store.StoreServiceImpl, []),
    [_getRouterImpl$1]: dart.fnType(src__router__router_impl.RouterImpl, []),
    [_getLocation$2]: dart.fnType(src__location__location.Location, []),
    [_getBrowserPlatformLocation$3]: dart.fnType(src__location__browser_platform_location.BrowserPlatformLocation, []),
    [_getHashLocationStrategy$4]: dart.fnType(src__location__hash_location_strategy.HashLocationStrategy, []),
    [_getInjector$5]: dart.fnType(src__di__injector__injector.Injector, []),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.setFieldSignature(main$46template._Injector$rootInjector, () => ({
    __proto__: dart.getFields(main$46template._Injector$rootInjector.__proto__),
    [_field0]: dart.fieldType(src__services__store.StoreServiceImpl),
    [_field1]: dart.fieldType(src__router__router_impl.RouterImpl),
    [_field2]: dart.fieldType(src__location__location.Location),
    [_field3]: dart.fieldType(src__location__browser_platform_location.BrowserPlatformLocation),
    [_field4]: dart.fieldType(src__location__hash_location_strategy.HashLocationStrategy)
  }));
  dart.defineLazy(main$46template, {
    /*main$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  main$46template.initReflector = function() {
    if (dart.test(main$46template._visited)) {
      return;
    }
    main$46template._visited = true;
    main$46template.initReflector();
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    app_component$46template.initReflector();
    src__services__services$46template.initReflector();
  };
  dart.defineLazy(main, {
    /*main.rootInjector*/get rootInjector() {
      return dart.fn(main$46template.rootInjector$Injector, __ToInjector());
    }
  });
  main.main = function() {
    src__bootstrap__run.runApp(app_component$0.AppComponent, app_component$46template.AppComponentNgFactory, {createInjector: main.rootInjector});
  };
  main$46template.main = main.main;
  dart.trackLibraries("web/main.ddc", {
    "main.template.dart": main$46template,
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.template.dart","main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;mDAyBoC,MAAmB;2BAAN;eAAY,yCAAwB,CAAC,MAAM;EAAC;;;;;;;;;;;;;;;cAe1C,aAAO;6CAAK,yCAAoB,6CAAC,QAAQ,CAAK,mDAAQ;IAAE;;cACpE,aAAO;6CAAK,uCAAc,yCAAC,QAAQ,CAAK,+CAAQ,uCAAG,mBAAc,CAAK,0CAAU,EAAE;IAAM;;cAC5F,aAAO;6CAAK,oCAAY,0DAAC,QAAQ,CAAK,gEAAgB;IAAE;;cAC1B,aAAO;6CAAK,oEAA2B;IAAE;;cAC/C,aAAO;6CAAK,8DAAwB,0DAAC,QAAQ,CAAM,gEAAgB,uBAAG,mBAAc,CAAC,mCAAM,2BAAwB,CAAC,kBAAgB;IAAM;;YAClK;IAAI;2BAEP,KAAY,EAAG,MAAmC;6BAA5B,SAAa,2CAAe;AAC9E,UAAI,AAAU,KAAK,KAAO,iDAAY,EAAG;AACvC,cAAO,6BAAsB;;AAE/B,UAAI,AAAU,KAAK,KAAO,yCAAM,EAAG;AACjC,cAAO,uBAAgB;;AAEzB,UAAI,AAAU,KAAK,KAAM,+CAAQ,EAAG;AAClC,cAAO,qBAAc;;AAEvB,UAAI,AAAU,KAAK,KAAO,gEAAgB,EAAG;AAC3C,cAAO,oCAA6B;;AAEtC,UAAI,AAAU,KAAK,KAAM,gEAAgB,EAAG;AAC1C,cAAO,iCAA0B;;AAEnC,UAAI,AAAU,KAAK,KAAM,mDAAQ,EAAG;AAClC,cAAO,qBAAc;;AAEvB,YAAO,OAAM;IACf;;wDAvC0B,MAAmB;2BAAN;IAElB,aAAO;IAEb,aAAO;IAET,aAAO;IAEQ,aAAO;IAEV,aAAO;AAVkB,gIAAM,MAAM;EAAC;;;;;;;;;;;;;;;;;;;;;MA0C7D,wBAAQ;YAAG;;;;;AAEb,kBAAI,wBAAQ,GAAE;AACZ;;AAEF,+BAAW;AAEX,IAAM,6BAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,gDAAa;EACrB;;MCnEsB,iBAAY;YAAQ,+DAAqB;;;;AAK7D,8BAAM,+BAAI,8CAAqB,mBAAiB,iBAAY;EAC9D","file":"main.ddc.js"}');
  // Exports:
  return {
    main$46template: main$46template,
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
