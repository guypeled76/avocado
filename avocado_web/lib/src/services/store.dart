import 'package:angular/angular.dart';
import 'package:avocado_common/common.dart';
import 'package:avocado_web/src/services/repository.dart';

@Injectable()
class StoreServiceImpl extends StoreService {

  final Injector injector;

  final RepositoryService repositoryService = RepositoryServiceImpl();

  StoreServiceImpl(this.injector) {


  }

  @override
  ServiceType getService<ServiceType>() {

    if(repositoryService is ServiceType) {
      return repositoryService as ServiceType;
    }
    return injector.provideType<ServiceType>(ServiceType.runtimeType);
  }

}