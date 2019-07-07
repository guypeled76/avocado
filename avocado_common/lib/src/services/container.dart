

class ServiceContainer implements ServiceProvider {

    final ServiceContainer parent;

    final Map<Type, Object> _services = Map();

    ServiceContainer({this.parent}) {

    }

    void addService(Object service) {
        ServiceRegistration registration = service as ServiceRegistration;
        if(registration != null) {
            _services[registration.serviceType] = registration.createService(this);
        } else {
            _services[service.runtimeType] = service;
        }
    }

    ServiceType getService<ServiceType>() {
        ServiceType service = _services[ServiceType] as ServiceType;
        if(service == null && parent != null) {
            return parent.getService<ServiceType>();
        }
        return service;
    }
}

abstract class ServiceProvider {
    ServiceType getService<ServiceType>();
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