import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

import 'app.dart';

part 'videos.g.dart';

////////////////////
/// State
///////////////////

/// [VideosState]
abstract class VideosState implements Built<VideosState, VideosStateBuilder> {

  /// [map] contains a map of post.key to VideoInfo
  BuiltMap<String, VideoInfo> get map;

  // Built value boilerplate
  VideosState._();
  factory VideosState([updates(VideosStateBuilder b)]) =>
      new _$VideosState((VideosStateBuilder b) => b);


  @memoized
  BuiltList<VideoInfo> get ordered =>
      new BuiltList<VideoInfo>(map.values);
}

