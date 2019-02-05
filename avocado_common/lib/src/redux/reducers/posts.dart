import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

NestedReducerBuilder<ClinicState, ClinicStateBuilder, PostsState, PostsStateBuilder> createClinicPostsReducer(
    ServiceContainer container) {

  setPost(PostsState state, Action<PostInfo> action, PostsStateBuilder builder) {
    builder..map[action.payload.key] = action.payload;
  }

  removePost(PostsState state, Action<PostInfo> action, PostsStateBuilder builder) {
    builder..map.remove(action.payload.key);
  }

  setManyPosts(PostsState state, Action<List<PostInfo>> action, PostsStateBuilder builder) {
    action.payload.forEach((post) {
      builder..map[post.key] = post;
    });

  }

  return new NestedReducerBuilder<ClinicState, ClinicStateBuilder, PostsState, PostsStateBuilder>(
    (state) => state.posts,
    (builder) => builder.posts,
  )..add<PostInfo>(ClinicPostActionsNames.set, setPost)
    ..add<PostInfo>(ClinicPostActionsNames.remove, removePost)
    ..add<List<PostInfo>>(ClinicPostActionsNames.setMany, setManyPosts);
}
