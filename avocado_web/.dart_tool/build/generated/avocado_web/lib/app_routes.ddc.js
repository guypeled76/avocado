define(['dart_sdk', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/avocado_web/src/components/clients/client_component'], function(dart_sdk, router_outlet_directive, client_component) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route_path = router_outlet_directive.src__route_path;
  const src__route_definition = router_outlet_directive.src__route_definition;
  const src__components__dashborad__dashboard_component$46template = client_component.src__components__dashborad__dashboard_component$46template;
  const src__components__clients__clients_component$46template = client_component.src__components__clients__clients_component$46template;
  const src__components__posts__videos_component$46template = client_component.src__components__posts__videos_component$46template;
  const src__components__clients__client_component$46template = client_component.src__components__clients__client_component$46template;
  const src__components__posts__posts_component$46template = client_component.src__components__posts__posts_component$46template;
  const src__components__waterfalls__waterfalls_component$46template = client_component.src__components__waterfalls__waterfalls_component$46template;
  const src__components__food__food_component$46template = client_component.src__components__food__food_component$46template;
  const src__components__notifications__notifications_component$46template = client_component.src__components__notifications__notifications_component$46template;
  const _root = Object.create(null);
  const app_routes = Object.create(_root);
  const $_get = dartx._get;
  let JSArrayOfRouteDefinition = () => (JSArrayOfRouteDefinition = dart.constFn(_interceptors.JSArray$(src__route_definition.RouteDefinition)))();
  dart.defineLazy(app_routes, {
    /*app_routes.idParam*/get idParam() {
      return "Id";
    }
  });
  app_routes.RoutePaths = class RoutePaths extends core.Object {};
  (app_routes.RoutePaths.new = function() {
  }).prototype = app_routes.RoutePaths.prototype;
  dart.addTypeTests(app_routes.RoutePaths);
  dart.defineLazy(app_routes.RoutePaths, {
    /*app_routes.RoutePaths.dashboard*/get dashboard() {
      return new src__route_path.RoutePath.new({path: "dashboard"});
    },
    /*app_routes.RoutePaths.clients*/get clients() {
      return new src__route_path.RoutePath.new({path: "clients"});
    },
    /*app_routes.RoutePaths.client*/get client() {
      return new src__route_path.RoutePath.new({path: dart.str(app_routes.RoutePaths.clients.path) + "/:" + "Id"});
    },
    /*app_routes.RoutePaths.posts*/get posts() {
      return new src__route_path.RoutePath.new({path: "posts"});
    },
    /*app_routes.RoutePaths.videos*/get videos() {
      return new src__route_path.RoutePath.new({path: "videos"});
    },
    /*app_routes.RoutePaths.waterfalls*/get waterfalls() {
      return new src__route_path.RoutePath.new({path: "waterfalls"});
    },
    /*app_routes.RoutePaths.notifications*/get notifications() {
      return new src__route_path.RoutePath.new({path: "notifications"});
    },
    /*app_routes.RoutePaths.food*/get food() {
      return new src__route_path.RoutePath.new({path: "food"});
    }
  });
  app_routes.RouteParams = class RouteParams extends core.Object {
    static getId(parameters) {
      return parameters[$_get]("Id");
    }
  };
  (app_routes.RouteParams.new = function() {
  }).prototype = app_routes.RouteParams.prototype;
  dart.addTypeTests(app_routes.RouteParams);
  app_routes.Routes = class Routes extends core.Object {};
  (app_routes.Routes.new = function() {
  }).prototype = app_routes.Routes.prototype;
  dart.addTypeTests(app_routes.Routes);
  dart.defineLazy(app_routes.Routes, {
    /*app_routes.Routes.dashboard*/get dashboard() {
      return src__route_definition.RouteDefinition.new({routePath: app_routes.RoutePaths.dashboard, component: src__components__dashborad__dashboard_component$46template.DashboardComponentNgFactory});
    },
    /*app_routes.Routes.clients*/get clients() {
      return src__route_definition.RouteDefinition.new({routePath: app_routes.RoutePaths.clients, component: src__components__clients__clients_component$46template.ClientsComponentNgFactory});
    },
    /*app_routes.Routes.videos*/get videos() {
      return src__route_definition.RouteDefinition.new({routePath: app_routes.RoutePaths.videos, component: src__components__posts__videos_component$46template.VideosComponentNgFactory});
    },
    /*app_routes.Routes.client*/get client() {
      return src__route_definition.RouteDefinition.new({routePath: app_routes.RoutePaths.client, component: src__components__clients__client_component$46template.ClientComponentNgFactory});
    },
    /*app_routes.Routes.posts*/get posts() {
      return src__route_definition.RouteDefinition.new({routePath: app_routes.RoutePaths.posts, component: src__components__posts__posts_component$46template.PostsComponentNgFactory});
    },
    /*app_routes.Routes.waterfalls*/get waterfalls() {
      return src__route_definition.RouteDefinition.new({routePath: app_routes.RoutePaths.waterfalls, component: src__components__waterfalls__waterfalls_component$46template.WaterfallsComponentNgFactory});
    },
    /*app_routes.Routes.food*/get food() {
      return src__route_definition.RouteDefinition.new({routePath: app_routes.RoutePaths.food, component: src__components__food__food_component$46template.FoodComponentNgFactory});
    },
    /*app_routes.Routes.notifications*/get notifications() {
      return src__route_definition.RouteDefinition.new({routePath: app_routes.RoutePaths.notifications, component: src__components__notifications__notifications_component$46template.NotificationsComponentNgFactory});
    },
    /*app_routes.Routes.all*/get all() {
      return JSArrayOfRouteDefinition().of([app_routes.Routes.dashboard, app_routes.Routes.clients, app_routes.Routes.client, app_routes.Routes.posts, app_routes.Routes.waterfalls, app_routes.Routes.food, app_routes.Routes.videos, app_routes.Routes.notifications, src__route_definition.RouteDefinition.redirect({path: "", redirectTo: app_routes.RoutePaths.dashboard.toUrl()})]);
    }
  });
  dart.trackLibraries("packages/avocado_web/app_routes.ddc", {
    "package:avocado_web/app_routes.dart": app_routes
  }, '{"version":3,"sourceRoot":"","sources":["app_routes.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;MAaM,kBAAO;YAAG;;;;;EAWhB;;;MARe,+BAAS;iBAAG,6BAAS,QAAO;;MAC5B,6BAAO;iBAAG,6BAAS,QAAO;;MAC1B,4BAAM;iBAAG,6BAAS,QAAO,SAAG,6BAAO,KAAK,WAAI,IAAO;;MACnD,2BAAK;iBAAG,6BAAS,QAAO;;MACxB,4BAAM;iBAAG,6BAAS,QAAO;;MACzB,gCAAU;iBAAG,6BAAS,QAAO;;MAC7B,mCAAa;iBAAG,6BAAS,QAAO;;MAChC,0BAAI;iBAAG,6BAAS,QAAO;;;;iBAIhB,UAA8B;AAChD,YAAO,WAAU,QAAC,IAAO;IAC3B;;;EACF;;;;EA2DA;;;MAxDe,2BAAS;YAAG,0CAAe,aAC3B,qBAAU,UAAU,aACD,sFAA2B;;MAG9C,yBAAO;YAAG,0CAAe,aACzB,qBAAU,QAAQ,aACD,gFAAyB;;MAG1C,wBAAM;YAAG,0CAAe,aACxB,qBAAU,OAAO,aACD,4EAAwB;;MAIxC,wBAAM;YAAG,0CAAe,aACxB,qBAAU,OAAO,aACD,8EAAwB;;MAGxC,uBAAK;YAAG,0CAAe,aACvB,qBAAU,MAAM,aACD,0EAAuB;;MAGtC,4BAAU;YAAG,0CAAe,aAC5B,qBAAU,WAAW,aACD,yFAA4B;;MAGhD,sBAAI;YAAG,0CAAe,aACtB,qBAAU,KAAK,aACD,uEAAsB;;MAIpC,+BAAa;YAAG,0CAAe,aAC/B,qBAAU,cAAc,aACD,kGAA+B;;MAGtD,qBAAG;YAAG,gCACjB,2BAAS,EACT,yBAAO,EACP,wBAAM,EACN,uBAAK,EACL,4BAAU,EACV,sBAAI,EACJ,wBAAM,EACN,+BAAa,EACb,8CAAwB,QAChB,gBACM,qBAAU,UAAU,MAAM","file":"app_routes.ddc.js"}');
  // Exports:
  return {
    app_routes: app_routes
  };
});

//# sourceMappingURL=app_routes.ddc.js.map
