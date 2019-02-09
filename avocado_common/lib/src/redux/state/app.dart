import 'package:avocado_common/common.dart';
import 'package:built_value/built_value.dart';



part 'app.g.dart';


abstract class AppState implements Built<AppState, AppStateBuilder> {


  ClientsState get clients;

  PostsState get posts;

  VideosState get videos;

  ImagesState get images;

  ChatsState get chats;

  WaterfallsState get waterfalls;

  NotificationsState get notifications;




  AppState._();
  factory AppState([updates(AppStateBuilder b)]) => new _$AppState((AppStateBuilder b) => b);

}


