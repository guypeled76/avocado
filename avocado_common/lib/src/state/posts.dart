import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:avocado_common/common.dart';


part 'posts.g.dart';


abstract class PostsState implements Built<PostsState, PostsStateBuilder> {

  PostsState._();
  factory PostsState([updates(PostsStateBuilder b)]) =>
      new _$PostsState((PostsStateBuilder b) => b);

  BuiltMap<String, PostInfo> get map;


  @memoized
  BuiltList<PostInfo> get ordered => new BuiltList<PostInfo>(map.values);
}


