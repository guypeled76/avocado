import 'package:avocado_common/common.dart';

class StoreServiceImpl extends StoreService {

  final ServiceContainer container;

  StoreServiceImpl(this.container) ;

  @override
  ServiceType getService<ServiceType>() {
    return this.container.getService<ServiceType>();
  }

}