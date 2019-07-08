
import 'package:avocado_common/common.dart';

import 'repository.dart';
import 'auth.dart';

class ClientServiceConfiguration extends CommonServiceConfiguration {

  @override
  Iterable<ServiceEntry> getConfiguredServices(ServiceProvider provider) sync* {
    yield ServiceEntry<RepositoryService>(new RepositoryServiceForFlutter());
    yield ServiceEntry<AuthService>(new AuthServiceForFlutter());
    yield* super.getConfiguredServices(provider);
  }
}