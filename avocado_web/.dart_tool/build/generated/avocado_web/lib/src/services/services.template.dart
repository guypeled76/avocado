// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'services.dart';
export 'services.dart';
import 'auth.template.dart' as _ref0;
import 'repository.template.dart' as _ref1;
import 'store.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
