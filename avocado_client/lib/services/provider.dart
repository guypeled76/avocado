import 'package:flutter/material.dart';
import 'package:avocado_common/common.dart';


class ServiceProvider extends InheritedWidget implements ServiceContainer {

  final ServiceProvider parent;

  final Map<Type, Object> _services = Map();

  ServiceProvider({ Key key, Widget child, this.parent, List<Object> services })
      : super(key: key, child: child){
    if(services != null) {
      for(Object service in services) {
        ServiceRegistration registration = service as ServiceRegistration;
        if(registration != null) {
          _services[registration.serviceType] = registration.createService(this);
        } else {
          _services[service.runtimeType] = service;
        }
      }
    }
  }

  @override
  bool updateShouldNotify(InheritedWidget oldWidget) {
    return false;
  }

  static ServiceType get<ServiceType>(BuildContext context) {
    ServiceProvider provider = context.inheritFromWidgetOfExactType(ServiceProvider);
    if(provider != null) {
        return provider.getService<ServiceType>();
    }
    return null;
  }


  ServiceType getService<ServiceType>() {
    ServiceType service = _services[ServiceType] as ServiceType;
    if(service == null && parent != null) {
      return parent.getService<ServiceType>();
    }
    return service;
  }

}

abstract class ServiceRegistration {

  Type get serviceType;

  Object createService(ServiceContainer container);
}

class ServiceInstance implements ServiceRegistration{
  final Object service;
  final Type serviceType;
  ServiceInstance(this.serviceType, this.service);

  Object createService(ServiceContainer container) {
    return this.service;
  }
}

typedef ServiceBuilder<ServiceType> = ServiceType Function(ServiceContainer container);

class ServiceClass<ServiceType> implements ServiceRegistration {
  final ServiceBuilder<ServiceType> builder;
  final Type serviceType = ServiceType.runtimeType;
  ServiceClass(this.builder);

  Object createService(ServiceContainer container) {
    return this.builder(container);
  }
}