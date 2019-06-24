// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'store.dart';
export 'store.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'auth.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:avocado_web/src/services/repository.template.dart' as _ref2;
import 'package:angular/src/di/injector/injector.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(StoreServiceImpl, (_i1.Injector p0) => StoreServiceImpl(p0));
  _ngRef.registerDependencies(StoreServiceImpl, const [
    [_i1.Injector]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
