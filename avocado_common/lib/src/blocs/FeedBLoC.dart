import 'dart:async';
import 'package:avocado_common/common.dart';

class FeedBloC extends BaseBLoC {

  Stream<List<PostInfo>> pinned;
  Stream<List<PostInfo>> posts;

  PostsBLoC _postsBLoC;
  PostsBLoC _pinnedBLoC;

  final RepositoryService repository;

  FeedBloC(this.repository) {
    _postsBLoC = PostsBLoC(this.repository, pinned: false);
    _pinnedBLoC = PostsBLoC(this.repository, pinned: true);
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
