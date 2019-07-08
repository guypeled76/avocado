

class ServiceContainer implements ServiceProvider {

    final ServiceProvider parent;

    final Map<Type, Object> _services = Map();

    ServiceContainer({this.parent}) {

    }

    void add<ServiceType>(ServiceType service) {
        if (service is ServicePromoter) {
            _promote(service);
        } else if(service is ServiceEntry) {
            _register(service);
        } else {
            _register(ServiceEntry<ServiceType>(service));
        }
    }

    ServiceType get<ServiceType>() {
        if(_services[ServiceType] is ServiceType) {
           return _services[ServiceType];
        }
        return parent != null ? parent.get<ServiceType>() : null;
    }

    void _promote(ServicePromoter promoter) {
        for (ServiceEntry promoted in promoter.getPromotedServices()) {
            _register(promoted);
        }
    }

    void _register(ServiceEntry entry) {
      _services[entry.type] = entry.service;
    }
}

abstract class ServiceProvider {
    ServiceType get<ServiceType>();
}

abstract class ServicePromoter {
    Iterable<ServiceEntry> getPromotedServices();
}

class ServiceEntry<ServiceType> {
    final Type type;
    final ServiceType service;

    ServiceEntry(this.service) : type = ServiceType;
}

