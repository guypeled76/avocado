define(['dart_sdk', 'packages/avocado_web/src/services/auth.template', 'packages/avocado_web/src/services/repository.template', 'packages/avocado_web/src/services/store.template'], function(dart_sdk, auth, repository, store) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__services__auth$46template = auth.src__services__auth$46template;
  const src__services__repository$46template = repository.src__services__repository$46template;
  const src__services__store$46template = store.src__services__store$46template;
  const _root = Object.create(null);
  const src__services__services$46template = Object.create(_root);
  dart.defineLazy(src__services__services$46template, {
    /*src__services__services$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__services__services$46template.initReflector = function() {
    if (dart.test(src__services__services$46template._visited)) {
      return;
    }
    src__services__services$46template._visited = true;
    src__services__auth$46template.initReflector();
    src__services__repository$46template.initReflector();
    src__services__store$46template.initReflector();
  };
  dart.trackLibraries("packages/avocado_web/src/services/services.template.ddc", {
    "package:avocado_web/src/services/services.template.dart": src__services__services$46template
  }, '{"version":3,"sourceRoot":"","sources":["services.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAUI,2CAAQ;YAAG;;;;;AAEb,kBAAI,2CAAQ,GAAE;AACZ;;AAEF,kDAAW;AAEX,IAAM,4CAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,6CAAa;EACrB","file":"services.template.ddc.js"}');
  // Exports:
  return {
    src__services__services$46template: src__services__services$46template
  };
});

//# sourceMappingURL=services.template.ddc.js.map
