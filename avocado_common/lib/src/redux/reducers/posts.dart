import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

NestedReducerBuilder<ClinicState, ClinicStateBuilder, PostsState, PostsStateBuilder> createClinicPostsReducer(
    ServiceContainer container) {

  setPost(PostsState state, Action<EntityPayload<PostInfo>> action, PostsStateBuilder builder) {
    builder..map[action.payload.entity.key] = action.payload.entity;
  }

  removePost(PostsState state, Action<EntityPayload<PostInfo>> action, PostsStateBuilder builder) {
    builder..map.remove(action.payload.entity.key);
  }

  setManyPosts(PostsState state, Action<EntitiesPayload<PostInfo>> action, PostsStateBuilder builder) {
    action.payload.entities.forEach((post) {
      builder..map[post.key] = post;
    });

  }

  return new NestedReducerBuilder<ClinicState, ClinicStateBuilder, PostsState, PostsStateBuilder>(
    (state) => state.posts,
    (builder) => builder.posts,
  )..add<EntityPayload<PostInfo>>(ClinicPostActionsNames.set, setPost)
    ..add<EntityPayload<PostInfo>>(ClinicPostActionsNames.remove, removePost)
    ..add<EntitiesPayload<PostInfo>>(ClinicPostActionsNames.setMany, setManyPosts);
}
