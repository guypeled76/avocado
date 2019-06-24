define(['dart_sdk', 'packages/avocado_web/src/services/auth', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template'], function(dart_sdk, auth, change_detection, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__services__auth = auth.src__services__auth;
  const src__di__reflector = change_detection.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__services__auth$46template = Object.create(_root);
  let VoidToAuthServiceImpl = () => (VoidToAuthServiceImpl = dart.constFn(dart.fnType(src__services__auth.AuthServiceImpl, [])))();
  dart.defineLazy(src__services__auth$46template, {
    /*src__services__auth$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__services__auth$46template.initReflector = function() {
    if (dart.test(src__services__auth$46template._visited)) {
      return;
    }
    src__services__auth$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__services__auth.AuthServiceImpl), dart.fn(() => new src__services__auth.AuthServiceImpl.new(), VoidToAuthServiceImpl()));
    angular$46template.initReflector();
  };
  dart.trackLibraries("packages/avocado_web/src/services/auth.template.ddc", {
    "package:avocado_web/src/services/auth.template.dart": src__services__auth$46template
  }, '{"version":3,"sourceRoot":"","sources":["auth.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MASI,uCAAQ;YAAG;;;;;AAEb,kBAAI,uCAAQ,GAAE;AACZ;;AAEF,8CAAW;AAEX,IAAO,kCAAe,CAAC,kDAAe,EAAE,kBAAM,uCAAe;AAC7D,IAAM,gCAAa;EACrB","file":"auth.template.ddc.js"}');
  // Exports:
  return {
    src__services__auth$46template: src__services__auth$46template
  };
});

//# sourceMappingURL=auth.template.ddc.js.map
