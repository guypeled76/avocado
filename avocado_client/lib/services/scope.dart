import 'package:flutter/material.dart';
import 'package:avocado_common/common.dart';


class ServiceScope extends InheritedWidget {


  final ServiceProvider provider;

  ServiceScope({Key key,
    @required this.provider,
    @required Widget child}) : super(key: key, child: child);

  @override
  bool updateShouldNotify(InheritedWidget oldWidget) {
    return false;
  }

  static ServiceType get<ServiceType>(BuildContext context) {
    ServiceScope provider = context.inheritFromWidgetOfExactType(ServiceScope);
    if(provider != null) {
        return provider.getService<ServiceType>();
    }
    return null;
  }

  ServiceType getService<ServiceType>() {
    return this.provider.getService<ServiceType>();
  }

}

