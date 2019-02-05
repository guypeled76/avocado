import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:avocado_common/common.dart';

part 'videos.g.dart';


abstract class VideosState implements Built<VideosState, VideosStateBuilder> {


  BuiltMap<String, VideoInfo> get map;


  VideosState._();
  factory VideosState([updates(VideosStateBuilder b)]) =>
      new _$VideosState((VideosStateBuilder b) => b);


  @memoized
  BuiltList<VideoInfo> get ordered =>
      new BuiltList<VideoInfo>(map.values);
}

