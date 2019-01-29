import 'package:angular/angular.dart';
import 'package:avocado_common/common.dart';
import 'package:avocado_web/app_component.template.dart' as ng;
import 'package:avocado_web/src/services/auth.dart';
import 'package:angular_router/angular_router.dart';
import 'package:avocado_web/src/services/repository.dart';




import 'main.template.dart' as self;

@GenerateInjector([
  ClassProvider(AuthService, useClass:AuthServiceImpl),
  ClassProvider(RepositoryService, useClass: RepositoryServiceImpl),
  routerProvidersHash
])
final InjectorFactory rootInjector = self.rootInjector$Injector;


void main() {

  runApp(ng.AppComponentNgFactory, createInjector:rootInjector);
}
