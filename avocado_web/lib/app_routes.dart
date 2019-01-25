import 'package:angular_router/angular_router.dart';


//import 'src/components/feed/feed_component.dart' as feed_template;
import 'src/components/dashborad/dashboard_component.template.dart' as dashboard_template;
import 'src/components/clients/clients_component.template.dart' as clients_template;
import 'src/components/clients/client_component.template.dart' as client_template;

const clientIdParam = 'clientId';

class RoutePaths {
  static final dashboard = RoutePath(path: 'dashboard');
  static final clients = RoutePath(path: 'heroes');
  static final client = RoutePath(path: '${clients.path}/:$clientIdParam');
}

abstract class RouteParams {
  static int getClientId(Map<String, String> parameters) {
    final id = parameters[clientIdParam];
    return id == null ? null : int.tryParse(id);
  }
}

class Routes {
  static final dashboard = RouteDefinition(
    routePath: RoutePaths.dashboard,
    component: dashboard_template.DashboardComponentNgFactory,
  );

  static final clients = RouteDefinition(
    routePath: RoutePaths.clients,
    component: clients_template.HeroComponentNgFactory,
  );

  static final client = RouteDefinition(
    routePath: RoutePaths.client,
    component: clients_template.HeroListComponentNgFactory,
  );

  static final all = <RouteDefinition>[
    dashboard,
    clients,
    client,
    RouteDefinition.redirect(
      path: '',
      redirectTo: RoutePaths.dashboard.toUrl(),
    ),
  ];
}