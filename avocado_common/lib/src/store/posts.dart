import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

import 'app.dart';

part 'posts.g.dart';

////////////////////
/// Actions
///////////////////

/// [PostsActions]
abstract class PostActions extends ReduxActions {
  ActionDispatcher<PostInfo> update;


  // factory to create on instance of the generated implementation of PostsActions
  PostActions._();
  factory PostActions() => new _$PostActions();
}

////////////////////
/// State
///////////////////

/// [Posts]
abstract class Posts implements Built<Posts, PostsBuilder> {

  /// [map] contains a map of post.key to PostInfo
  BuiltMap<String, PostInfo> get map;

  // Built value boilerplate
  Posts._();
  factory Posts([updates(PostsBuilder b)]) =>
      new _$Posts((PostsBuilder b) => b);


  @memoized
  BuiltList<PostInfo> get ordered =>
      new BuiltList<PostInfo>(map.values);
}

////////////////////
/// Main Reducer
///////////////////

NestedReducerBuilder<App, AppBuilder, Posts, PostsBuilder>
createPostsReducer() =>
    new NestedReducerBuilder<App, AppBuilder, Posts, PostsBuilder>(
          (state) => state.posts,
          (builder) => builder.posts,
    )
      ..add<PostInfo>(PostActionsNames.update, _updatePost);

////////////////////
/// Reducers
///////////////////

_updatePost(Posts state, Action<PostInfo> action, PostsBuilder builder) =>
    builder..map[action.payload.key] = action.payload;

