import 'package:avocado_common/common.dart';
import 'package:built_value/built_value.dart';

import 'posts.dart';
import 'videos.dart';
import 'clinic.dart';

part 'app.g.dart';


abstract class AppState implements Built<AppState, AppStateBuilder> {

  PostsState get posts;
  VideosState get videos;
  ClinicState get clinic;


  AppState._();
  factory AppState([updates(AppStateBuilder b)]) => new _$AppState((AppStateBuilder b) => b);

}


