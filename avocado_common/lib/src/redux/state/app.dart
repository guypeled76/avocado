import 'package:avocado_common/common.dart';
import 'package:built_value/built_value.dart';



part 'app.g.dart';


abstract class AppState implements Built<AppState, AppStateBuilder> {


  ClinicState get clinic;

  ClientState get client;

  PostsState get posts;

  VideosState get videos;

  AppState._();
  factory AppState([updates(AppStateBuilder b)]) => new _$AppState((AppStateBuilder b) => b);

}


