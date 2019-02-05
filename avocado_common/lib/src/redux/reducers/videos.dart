import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

NestedReducerBuilder<ClinicState, ClinicStateBuilder, VideosState, VideosStateBuilder>
createClinicVideosReducer(ServiceContainer container) {
  _updateVideo(VideosState state, Action<VideoInfo> action, VideosStateBuilder builder) =>
      builder..map[action.payload.key] = action.payload;

  return new NestedReducerBuilder<ClinicState, ClinicStateBuilder, VideosState, VideosStateBuilder>(
        (state) => state.videos,
        (builder) => builder.videos,
  )
    ..add<VideoInfo>(ClinicVideoActionsNames.update, _updateVideo);
}




