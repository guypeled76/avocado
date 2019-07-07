import 'package:avocado_common/common.dart';
import 'repository.dart';
import 'auth.dart';

class StoreServiceImpl extends StoreService {

  final ServiceProvider provider;

  final RepositoryService repositoryService = RepositoryServiceImpl();
  final AuthService authService = AuthServiceImpl();

  StoreServiceImpl(this.provider) ;

  @override
  ServiceType get<ServiceType>() {

    if(repositoryService is ServiceType) {
      return repositoryService as ServiceType;
    } else if(authService is ServiceType) {
      return authService as ServiceType;
    }

    return this.provider.get<ServiceType>();
  }

}