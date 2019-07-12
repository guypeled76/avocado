
import 'package:avocado_common/common.dart';

import 'repository.dart';
import 'auth.dart';
import 'graphql.dart';

class ClientServiceConfiguration extends CommonServiceConfiguration {

  @override
  Iterable<ServiceEntry> getConfiguredServices(ServiceProvider provider) sync* {
    yield ServiceEntry<RepositoryService>(RepositoryServiceForFlutter());
    yield ServiceEntry<AuthService>(AuthServiceForFlutter());
    yield ServiceEntry<GraphQLService>(GraphQLServiceForFlutter());
    yield* super.getConfiguredServices(provider);
  }
}