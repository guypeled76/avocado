

import 'package:avocado_common/common.dart';

class ClinicPostsBLoC {

  final PostsStore store;

  Stream<List<PostInfo>> posts;

  ClinicPostsBLoC(StoreService service) : store = service.postsStore {

    posts = this.store.orderedPosts;
  }

  PostActions get actions {
    return this.store.actions;
  }
}