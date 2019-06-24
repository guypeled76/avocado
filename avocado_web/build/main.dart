import 'package:angular/angular.dart';
import 'package:avocado_web/app_component.template.dart' as ng;
import 'package:avocado_web/src/services/FirebaseService.dart';
import 'package:angular_router/angular_router.dart';




import 'main.template.dart' as self;

@GenerateInjector([
  ClassProvider(FirebaseService),
  routerProvidersHash
])
final InjectorFactory rootInjector = self.rootInjector$Injector;


void main() {

  runApp(ng.AppComponentNgFactory, createInjector:rootInjector);
}
