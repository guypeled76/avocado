import 'dart:async';
import 'package:avocado_common/common.dart';
import 'package:avocado_common/models.dart';

class FeedBloC extends BaseBLoC {

  Stream<List<PostInfo>> pinned;
  Stream<List<PostInfo>> posts;

  PostsBLoC _postsBLoC;
  PostsBLoC _pinnedBLoC;

  final RepositoryService repository;

  FeedBloC(this.repository) {
    _postsBLoC = PostsBLoC(this.repository, false);
    _pinnedBLoC = PostsBLoC(this.repository, true);
    pinned = _pinnedBLoC.posts;
    posts = _postsBLoC.posts;
  }

}
