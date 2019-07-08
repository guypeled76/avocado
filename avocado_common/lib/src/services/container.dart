

class ServiceContainer implements ServiceProvider {

    final ServiceProvider parent;

    final Map<Type, Object> _services = Map();

    ServiceContainer({this.parent}) {

    }

    void add<ServiceType>(ServiceType service) {
        _services[ServiceType] = service;

        if (service is ServicePromoter) {
            _promote(service);
        }
    }

    ServiceType get<ServiceType>() {
        if(_services[ServiceType] is ServiceType) {
           return _services[ServiceType];
        }
        return parent != null ? parent.get<ServiceType>() : null;
    }

    void _promote(ServicePromoter promoter) {
        for (MapEntry<Type, Object> promoted in promoter.getPromotedServices()) {
            _services[promoted.key] = promoted.value;
        }
    }
}

abstract class ServiceProvider {
    ServiceType get<ServiceType>();
}

abstract class ServicePromoter {
    Iterable<MapEntry<Type, Object>> getPromotedServices();
}

