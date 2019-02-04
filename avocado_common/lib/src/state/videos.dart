import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

import 'app.dart';

part 'videos.g.dart';

////////////////////
/// Actions
///////////////////

/// [VideosActions]
abstract class VideoActions extends ReduxActions {
  ActionDispatcher<VideoInfo> update;


  // factory to create on instance of the generated implementation of VideosActions
  VideoActions._();
  factory VideoActions() => new _$VideoActions();
}

////////////////////
/// State
///////////////////

/// [Videos]
abstract class Videos implements Built<Videos, VideosBuilder> {

  /// [map] contains a map of post.key to VideoInfo
  BuiltMap<String, VideoInfo> get map;

  // Built value boilerplate
  Videos._();
  factory Videos([updates(VideosBuilder b)]) =>
      new _$Videos((VideosBuilder b) => b);


  @memoized
  BuiltList<VideoInfo> get ordered =>
      new BuiltList<VideoInfo>(map.values);
}

////////////////////
/// Main Reducer
///////////////////

NestedReducerBuilder<App, AppBuilder, Videos, VideosBuilder>
createVideosReducer() =>
    new NestedReducerBuilder<App, AppBuilder, Videos, VideosBuilder>(
          (state) => state.videos,
          (builder) => builder.videos,
    )
      ..add<VideoInfo>(VideoActionsNames.update, _updateVideo);

////////////////////
/// Reducers
///////////////////

_updateVideo(Videos state, Action<VideoInfo> action, VideosBuilder builder) =>
    builder..map[action.payload.key] = action.payload;

