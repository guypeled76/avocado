import 'package:avocado_common/common.dart';

import 'container.dart';

abstract class StoreService implements ServiceContainer {

  AppStore _store;

  StoreService() {
    _store = AppStore(this);
  }

  AppStore get store {
    return this._store;
  }

  ClientsStore get clientsStore {
    return this._store.clientsStore;
  }

  PostsStore get postsStore {
    return this._store.postsStore;
  }

  AuthStore get authStore {
    return this._store.authStore;
  }

  Stream<ProfileInfo> get authProfile {
    return this.authStore.profile;
  }

  ChatsStore get chatsStore {
    return this._store.chatsStore;
  }

  VideosStore get videosStore {
    return this._store.videosStore;
  }

}








