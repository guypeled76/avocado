import 'package:avocado_common/common.dart';
import 'package:avocado_common/src/services/container.dart';

import 'container.dart';

class CommonServiceConfiguration implements ServiceConfiguration {

  CommonServiceConfiguration() {

  }


  @override
  Iterable<ServiceEntry> getConfiguredServices(ServiceProvider provider) sync* {

    AppStore store =  AppStore(provider);

    yield ServiceEntry<AppStore>(store);
    yield ServiceEntry<AuthStore>(store.authStore);
    yield ServiceEntry<ClientsStore>(store.clientsStore);
    yield ServiceEntry<AppStore>(store);
    yield ServiceEntry<PostsStore>(store.postsStore);
    yield ServiceEntry<ChatsStore>(store.chatsStore);
    yield ServiceEntry<VideosStore>(store.videosStore);
  }

}








