

class ServiceContainer implements ServiceProvider {

    final ServiceContainer parent;

    final Map<Type, Object> _services = Map();

    ServiceContainer({this.parent}) {

    }

    void add(Object service) {
        _services[service.runtimeType] = service;
    }

    ServiceType get<ServiceType>() {
        ServiceType service = _services[ServiceType] as ServiceType;
        if(service == null && parent != null) {
            return parent.get<ServiceType>();
        }
        return service;
    }
}

abstract class ServiceProvider {
    ServiceType get<ServiceType>();
}

