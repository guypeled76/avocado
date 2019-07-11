

class ServiceContainer implements ServiceProvider {

    final ServiceProvider parent;

    final Map<Type, Object> _services = Map();

    ServiceContainer({this.parent}) {

    }

    void add<ServiceType>(ServiceType service) {
        if(service is ServiceEntry) {
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

    void apply(ServiceConfiguration configuration) {
        for (ServiceEntry entry in configuration.getConfiguredServices(this)) {
            _register(entry);
        }
    }

    void _register(ServiceEntry entry) {
      _services[entry.type] = entry.service;

      if(entry is ServiceInstance) {
          (entry as ServiceInstance)._provider = this;
      }
    }
}

abstract class ServiceProvider {
    ServiceType get<ServiceType>();
}

abstract class ServiceConfiguration {
    Iterable<ServiceEntry> getConfiguredServices(ServiceProvider provider);
}

abstract class ServiceInstance implements ServiceProvider {

    ServiceProvider _provider;

    @override
    ServiceType get<ServiceType>() {
        if(this._provider == null) {
            return this._provider.get<ServiceType>();
        }
        return null;
    }

}

class ServiceEntry<ServiceType> {
    final Type type;
    final ServiceType service;

    ServiceEntry(this.service) : type = ServiceType;
}

