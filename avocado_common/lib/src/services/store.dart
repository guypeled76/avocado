import 'package:avocado_common/common.dart';
import 'package:avocado_common/src/services/container.dart';

import 'container.dart';

class StoreService implements ServicePromoter {

  AppStore _store;

  StoreService(ServiceProvider provider) {
    _store = AppStore(provider);
  }

  void initialize() {
    _store.actions.initialize(CommandPayload.empty);
  }


  @override
  Iterable<MapEntry<Type, Object>> getPromotedServices() sync* {
    yield MapEntry(AuthStore, this._store.authStore);
    yield MapEntry(ClientsStore, this._store.clientsStore);
    yield MapEntry(AppStore, this._store);
    yield MapEntry(PostsStore, this._store.postsStore);
    yield MapEntry(ChatsStore, this._store.chatsStore);
    yield MapEntry(VideosStore, this._store.videosStore);
  }

}








