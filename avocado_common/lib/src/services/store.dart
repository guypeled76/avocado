import 'package:avocado_common/common.dart';
import 'package:avocado_common/src/services/container.dart';

import 'container.dart';

class StoreService implements ServicePromoter {

  AppStore _store;

  StoreService(ServiceProvider provider) {
    _store = AppStore(provider);
  }


  @override
  Iterable<ServiceEntry> getPromotedServices() sync* {
    yield ServiceEntry<AuthStore>(this._store.authStore);
    yield ServiceEntry<ClientsStore>(this._store.clientsStore);
    yield ServiceEntry<AppStore>(this._store);
    yield ServiceEntry<PostsStore>(this._store.postsStore);
    yield ServiceEntry<ChatsStore>(this._store.chatsStore);
    yield ServiceEntry<VideosStore>(this._store.videosStore);
  }

}








