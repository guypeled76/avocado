import 'dart:async';
import 'package:avocado_common/common.dart';

class FeedBLoC extends BaseBLoC {

  Stream<List<PostInfo>> pinned;
  Stream<List<PostInfo>> posts;

  PostsBLoC _postsBLoC;
  PostsBLoC _pinnedBLoC;

  final PostsStore _store;

  FeedBLoC(this._store) {
    _postsBLoC = PostsBLoC(this._store);
    _pinnedBLoC = PostsBLoC(this._store,);
    pinned = _pinnedBLoC.posts;
    posts = _postsBLoC.posts;
  }

  @override
  void dispose() {
    super.dispose();

    _pinnedBLoC.dispose();
    _postsBLoC.dispose();
  }

}
