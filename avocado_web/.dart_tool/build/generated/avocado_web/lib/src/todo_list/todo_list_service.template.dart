// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'todo_list_service.dart';
export 'todo_list_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/core.template.dart' as _ref0;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(TodoListService, () => TodoListService());
  _ref0.initReflector();
}
