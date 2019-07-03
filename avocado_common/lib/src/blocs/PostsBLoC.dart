
import 'dart:async';
import 'package:avocado_common/common.dart';


class PostsBLoC extends BaseBLoC {


  Stream<List<PostInfo>> posts;

  final PostsStore _store;

  PostsBLoC(this._store){
    posts = _store.orderedPosts;
  }


  PostActions get actions {
    return _store.actions;
  }

  PostEvents get events {
    return _store.actions.events;
  }

}