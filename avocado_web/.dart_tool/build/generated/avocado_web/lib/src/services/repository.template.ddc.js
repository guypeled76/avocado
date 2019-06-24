define(['dart_sdk', 'packages/avocado_web/src/services/repository', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template'], function(dart_sdk, repository, change_detection, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__services__repository = repository.src__services__repository;
  const src__di__reflector = change_detection.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__services__repository$46template = Object.create(_root);
  let VoidToRepositoryServiceImpl = () => (VoidToRepositoryServiceImpl = dart.constFn(dart.fnType(src__services__repository.RepositoryServiceImpl, [])))();
  dart.defineLazy(src__services__repository$46template, {
    /*src__services__repository$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__services__repository$46template.initReflector = function() {
    if (dart.test(src__services__repository$46template._visited)) {
      return;
    }
    src__services__repository$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__services__repository.RepositoryServiceImpl), dart.fn(() => new src__services__repository.RepositoryServiceImpl.new(), VoidToRepositoryServiceImpl()));
    angular$46template.initReflector();
  };
  dart.trackLibraries("packages/avocado_web/src/services/repository.template.ddc", {
    "package:avocado_web/src/services/repository.template.dart": src__services__repository$46template
  }, '{"version":3,"sourceRoot":"","sources":["repository.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MASI,6CAAQ;YAAG;;;;;AAEb,kBAAI,6CAAQ,GAAE;AACZ;;AAEF,oDAAW;AAEX,IAAO,kCAAe,CAAC,8DAAqB,EAAE,kBAAM,mDAAqB;AACzE,IAAM,gCAAa;EACrB","file":"repository.template.ddc.js"}');
  // Exports:
  return {
    src__services__repository$46template: src__services__repository$46template
  };
});

//# sourceMappingURL=repository.template.ddc.js.map
