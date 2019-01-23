import 'package:flutter/material.dart';


class ServiceProvider extends InheritedWidget {

  final ServiceProvider parent;

  final Map<Type, Object> _services = Map();

  ServiceProvider({ Key key, Widget child, this.parent, List<Object> services })
      : super(key: key, child: child){
    if(services != null) {
      for(Object service in services) {
        _services[service.runtimeType] = service;
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
        return provider._getService<ServiceType>(context);
    }
    return null;
  }


  ServiceType _getService<ServiceType>(BuildContext context) {
    ServiceType service = _services[ServiceType] as ServiceType;
    if(service == null && parent != null) {
      return parent._getService<ServiceType>(context);
    }
    return service;
  }

}