
import 'package:avocado_common/common.dart';

import 'repository.dart';
import 'auth.dart';

class ClientServiceProvider extends ServiceContainer {

  ClientServiceProvider() {
    this.add<RepositoryService>(new RepositoryServiceForFlutter());
    this.add<AuthService>(new AuthServiceForFlutter());
    this.add(new StoreService(this));


    this.get<AppStore>().initialize();

  }
}