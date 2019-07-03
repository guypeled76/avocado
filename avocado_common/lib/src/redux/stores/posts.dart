
import 'package:avocado_common/common.dart';

class PostsStore {
  final AppStore _store;
  PostsStore(this._store);

  Stream<PostsState> get state {
    return this._store.state.map((state) => state.posts).distinct();
  }

  Stream<List<PostInfo>> get orderedPosts {
    return this.state.map((state) => List.from(state.ordered));
  }

  PostActions get actions {
    return this._store.actions.posts;
  }

  PostEvents get events {
    return this._store.actions.posts.events;
  }
}