import 'package:avocado_common/common.dart';
import 'package:avocado_common/src/services/container.dart';

import 'container.dart';

class StoreService implements ServiceProvider {

  AppStore _store;

  final ServiceProvider provider;

  StoreService(this.provider) {
    _store = AppStore(this);
    _store.actions.initialize(CommandPayload.empty);
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

  Stream<ProfileInfo> get profile {
    return this.authStore.profile;
  }

  ChatsStore get chatsStore {
    return this._store.chatsStore;
  }

  VideosStore get videosStore {
    return this._store.videosStore;
  }

  @override
  ServiceType get<ServiceType>() {
    return this.provider.get<ServiceType>();
  }

}








