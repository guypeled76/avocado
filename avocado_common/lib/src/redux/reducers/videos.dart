import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

NestedReducerBuilder<AppState, AppStateBuilder, VideosState, VideosStateBuilder>
createClinicVideosReducer() {

  _updateVideo(VideosState state, Action<EntityPayload<VideoInfo>> action, VideosStateBuilder builder) {
    builder..map[action.payload.entity.key] = action.payload.entity;
  }

  return new NestedReducerBuilder<AppState, AppStateBuilder, VideosState, VideosStateBuilder>(
        (state) => state.videos,
        (builder) => builder.videos,
  )
    ..add<EntityPayload<VideoInfo>>(VideoActionsNames.set, _updateVideo);
}




