import 'package:angular_router/angular_router.dart';


import 'src/components/dashborad/dashboard_component.template.dart' as dashboard_template;
import 'src/components/clients/clients_component.template.dart' as clients_template;
import 'src/components/clients/client_component.template.dart' as client_template;
import 'src/components/posts/posts_component.template.dart' as posts_template;
import 'src/components/waterfalls/waterfalls_component.template.dart' as waterfalls_template;
import 'src/components/food/food_component.template.dart' as food_template;
import 'src/components/notifications/notifications_component.template.dart' as notifications_template;
import 'src/components/posts/videos_component.template.dart' as videos_template;
import 'src/components/posts/video_uploader_component.template.dart' as video_uploader_template;


const idParam = 'Id';

class RoutePaths {
  static final dashboard = RoutePath(path: 'dashboard');
  static final clients = RoutePath(path: 'clients');
  static final client = RoutePath(path: '${clients.path}/:$idParam');
  static final posts = RoutePath(path: 'posts');
  static final videos = RoutePath(path: 'videos');
  static final video_uploader = RoutePath(path: 'create_video');
  static final waterfalls = RoutePath(path: 'waterfalls');
  static final notifications = RoutePath(path: 'notifications');
  static final food = RoutePath(path: 'food');
}

abstract class RouteParams {
  static String getId(Map<String, String> parameters) {
    return parameters[idParam];
  }
}

class Routes {
  static final dashboard = RouteDefinition(
    routePath: RoutePaths.dashboard,
    component: dashboard_template.DashboardComponentNgFactory,
  );

  static final clients = RouteDefinition(
    routePath: RoutePaths.clients,
    component: clients_template.ClientsComponentNgFactory,
  );

  static final videos = RouteDefinition(
    routePath: RoutePaths.videos,
    component: videos_template.VideosComponentNgFactory,
  );

  static final video_uploader = RouteDefinition(
    routePath: RoutePaths.video_uploader,
    component: video_uploader_template.VideoUploaderComponentNgFactory
  );

  static final client = RouteDefinition(
    routePath: RoutePaths.client,
    component: client_template.ClientComponentNgFactory,
  );

  static final posts = RouteDefinition(
    routePath: RoutePaths.posts,
    component: posts_template.PostsComponentNgFactory,
  );

  static final waterfalls = RouteDefinition(
    routePath: RoutePaths.waterfalls,
    component: waterfalls_template.WaterfallsComponentNgFactory,
  );

  static final food = RouteDefinition(
    routePath: RoutePaths.food,
    component: food_template.FoodComponentNgFactory,
  );


  static final notifications = RouteDefinition(
    routePath: RoutePaths.notifications,
    component: notifications_template.NotificationsComponentNgFactory,
  );

  static final all = <RouteDefinition>[
    dashboard,
    clients,
    client,
    posts,
    waterfalls,
    food,
    videos,
    video_uploader,
    notifications,
    RouteDefinition.redirect(
      path: '',
      redirectTo: RoutePaths.dashboard.toUrl(),
    ),
  ];
}