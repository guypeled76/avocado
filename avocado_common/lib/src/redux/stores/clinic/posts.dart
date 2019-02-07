
import 'package:avocado_common/common.dart';

class ClinicPostsStore {
  final ClinicStore _store;
  ClinicPostsStore(this._store);

  Stream<PostsState> get state {
    return this._store.state.map((state) => state.posts).distinct();
  }

  Stream<List<PostInfo>> get orderedPosts {
    return this.state.map((state) => List.from(state.ordered));
  }

  ClinicPostActions get actions {
    return this._store.actions.posts;
  }

  ClinicPostEvents get events {
    return this._store.actions.posts.events;
  }
}