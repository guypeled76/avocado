define(['dart_sdk', 'packages/avocado_web/src/services/store', 'packages/angular/src/core/change_detection/change_detection', 'packages/avocado_web/src/services/auth.template', 'packages/angular/angular.template', 'packages/avocado_web/src/services/repository.template'], function(dart_sdk, store, change_detection, auth, angular, repository) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__services__store = store.src__services__store;
  const src__di__injector__injector = change_detection.src__di__injector__injector;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__services__auth$46template = auth.src__services__auth$46template;
  const angular$46template = angular.angular$46template;
  const src__services__repository$46template = repository.src__services__repository$46template;
  const _root = Object.create(null);
  const src__services__store$46template = Object.create(_root);
  let InjectorToStoreServiceImpl = () => (InjectorToStoreServiceImpl = dart.constFn(dart.fnType(src__services__store.StoreServiceImpl, [src__di__injector__injector.Injector])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  dart.defineLazy(src__services__store$46template, {
    /*src__services__store$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  src__services__store$46template.initReflector = function() {
    if (dart.test(src__services__store$46template._visited)) {
      return;
    }
    src__services__store$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__services__store.StoreServiceImpl), dart.fn(p0 => new src__services__store.StoreServiceImpl.new(p0), InjectorToStoreServiceImpl()));
    src__di__reflector.registerDependencies(dart.wrapType(src__services__store.StoreServiceImpl), const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__di__injector__injector.Injector)], core.Object))], ListOfObject())));
    src__services__auth$46template.initReflector();
    angular$46template.initReflector();
    src__services__repository$46template.initReflector();
  };
  dart.trackLibraries("packages/avocado_web/src/services/store.template.ddc", {
    "package:avocado_web/src/services/store.template.dart": src__services__store$46template
  }, '{"version":3,"sourceRoot":"","sources":["store.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAYI,wCAAQ;YAAG;;;;;;;AAEb,kBAAI,wCAAQ,GAAE;AACZ;;AAEF,+CAAW;AAEX,IAAO,kCAAe,CAAC,oDAAgB,EAAE,QAAC,EAAe,QAAK,yCAAgB,CAAC,EAAE;AACjF,IAAO,uCAAoB,CAAC,oDAAgB,EAAE,sCAC5C,oCAAK,mDAAQ;AAEf,IAAM,4CAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,kDAAa;EACrB","file":"store.template.ddc.js"}');
  // Exports:
  return {
    src__services__store$46template: src__services__store$46template
  };
});

//# sourceMappingURL=store.template.ddc.js.map
