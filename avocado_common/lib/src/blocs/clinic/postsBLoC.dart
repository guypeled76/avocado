

import 'package:avocado_common/common.dart';

class ClinicPostsBLoC {

  final ClinicPostsStore store;

  Stream<List<PostInfo>> posts;

  ClinicPostsBLoC(StoreService service) : store = service.clinicStore.postsStore {

    posts = this.store.orderedPosts;
  }

  ClinicPostActions get actions {
    return this.store.actions;
  }
}