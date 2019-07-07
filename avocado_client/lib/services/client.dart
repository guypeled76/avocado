
import 'package:avocado_common/common.dart';

import 'repository.dart';
import 'auth.dart';

class ClientServiceProvider extends ServiceContainer {

  ClientServiceProvider() {
    this.add(new StoreService(this));
    this.add<RepositoryService>(new RepositoryServiceForFlutter());
    this.add<AuthService>(new AuthServiceForFlutter());
  }
}