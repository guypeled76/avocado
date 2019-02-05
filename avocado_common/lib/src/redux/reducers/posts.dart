import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

NestedReducerBuilder<AppState, AppStateBuilder, PostsState, PostsStateBuilder> createPostsReducer(
    ServiceContainer container) {
  updatePost(PostsState state, Action<PostInfo> action, PostsStateBuilder builder) {
    builder..map[action.payload.key] = action.payload;
  }

  return new NestedReducerBuilder<AppState, AppStateBuilder, PostsState, PostsStateBuilder>(
    (state) => state.posts,
    (builder) => builder.posts,
  )..add<PostInfo>(PostActionsNames.update, updatePost);
}
