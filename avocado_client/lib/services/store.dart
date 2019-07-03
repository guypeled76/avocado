import 'package:avocado_common/common.dart';
import 'repository.dart';
import 'auth.dart';

class StoreServiceImpl extends StoreService {

  final ServiceContainer container;

  final RepositoryService repositoryService = RepositoryServiceImpl();
  final AuthService authService = AuthServiceImpl();

  StoreServiceImpl(this.container) ;

  @override
  ServiceType getService<ServiceType>() {

    if(repositoryService is ServiceType) {
      return repositoryService as ServiceType;
    } else if(authService is ServiceType) {
      return authService as ServiceType;
    }

    return this.container.getService<ServiceType>();
  }

}