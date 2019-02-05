import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

NestedReducerBuilder<AppState, AppStateBuilder, VideosState, VideosStateBuilder>
createVideosReducer(ServiceContainer container) {
  _updateVideo(VideosState state, Action<VideoInfo> action, VideosStateBuilder builder) =>
      builder..map[action.payload.key] = action.payload;

  return new NestedReducerBuilder<AppState, AppStateBuilder, VideosState, VideosStateBuilder>(
        (state) => state.videos,
        (builder) => builder.videos,
  )
    ..add<VideoInfo>(VideoActionsNames.update, _updateVideo);
}

