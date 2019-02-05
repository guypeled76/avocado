import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

Reducer<AppState, AppStateBuilder, dynamic> createReducer(ServiceContainer container) {
  _clear(AppState state, Action<Null> action, AppStateBuilder builder) {
    return builder
      ..posts = new PostsState().toBuilder()
      ..videos = new VideosState().toBuilder();
  }

  return (new ReducerBuilder<AppState, AppStateBuilder>()
        ..add<Null>(AppActionsNames.clear, _clear)
        ..combineNested(createPostsReducer(container))
        ..combineNested(createVideosReducer(container))
        ..combineNested(createClinicsReducer(container)))
      .build();
}
