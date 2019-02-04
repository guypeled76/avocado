import 'package:angular/angular.dart';
import 'package:avocado_common/common.dart';

@Injectable()
class StoreServiceImpl extends StoreService {

  final Injector injector;

  StoreServiceImpl(this.injector);

  @override
  ServiceType getService<ServiceType>() {
    return injector.provideType<ServiceType>(ServiceType.runtimeType);
  }

}