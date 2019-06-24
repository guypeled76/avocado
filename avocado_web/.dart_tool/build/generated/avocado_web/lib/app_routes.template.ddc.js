define(['dart_sdk', 'packages/angular_router/angular_router.template', 'packages/avocado_web/src/components/clients/client_component'], function(dart_sdk, angular_router, client_component) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__components__clients__client_component$46template = client_component.src__components__clients__client_component$46template;
  const src__components__clients__clients_component$46template = client_component.src__components__clients__clients_component$46template;
  const src__components__dashborad__dashboard_component$46template = client_component.src__components__dashborad__dashboard_component$46template;
  const src__components__food__food_component$46template = client_component.src__components__food__food_component$46template;
  const src__components__notifications__notifications_component$46template = client_component.src__components__notifications__notifications_component$46template;
  const src__components__posts__posts_component$46template = client_component.src__components__posts__posts_component$46template;
  const src__components__posts__videos_component$46template = client_component.src__components__posts__videos_component$46template;
  const src__components__waterfalls__waterfalls_component$46template = client_component.src__components__waterfalls__waterfalls_component$46template;
  const _root = Object.create(null);
  const app_routes$46template = Object.create(_root);
  dart.defineLazy(app_routes$46template, {
    /*app_routes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_routes$46template.initReflector = function() {
    if (dart.test(app_routes$46template._visited)) {
      return;
    }
    app_routes$46template._visited = true;
    angular_router$46template.initReflector();
    src__components__clients__client_component$46template.initReflector();
    src__components__clients__clients_component$46template.initReflector();
    src__components__dashborad__dashboard_component$46template.initReflector();
    src__components__food__food_component$46template.initReflector();
    src__components__notifications__notifications_component$46template.initReflector();
    src__components__posts__posts_component$46template.initReflector();
    src__components__posts__videos_component$46template.initReflector();
    src__components__waterfalls__waterfalls_component$46template.initReflector();
  };
  dart.trackLibraries("packages/avocado_web/app_routes.template.ddc", {
    "package:avocado_web/app_routes.template.dart": app_routes$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_routes.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MAgBI,8BAAQ;YAAG;;;;;AAEb,kBAAI,8BAAQ,GAAE;AACZ;;AAEF,qCAAW;AAEX,IAAM,uCAAa;AACnB,IAAM,mEAAa;AACnB,IAAM,oEAAa;AACnB,IAAM,wEAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,gFAAa;AACnB,IAAM,gEAAa;AACnB,IAAM,iEAAa;AACnB,IAAM,0EAAa;EACrB","file":"app_routes.template.ddc.js"}');
  // Exports:
  return {
    app_routes$46template: app_routes$46template
  };
});

//# sourceMappingURL=app_routes.template.ddc.js.map
