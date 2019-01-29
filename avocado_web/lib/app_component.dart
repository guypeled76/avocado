import 'package:angular/angular.dart';
import 'package:angular_components/app_layout/material_persistent_drawer.dart';
import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_list/material_list.dart';
import 'package:angular_components/material_list/material_list_item.dart';
import 'package:angular_components/material_toggle/material_toggle.dart';
import 'package:angular_router/angular_router.dart';
import 'package:avocado_common/common.dart';
import 'package:avocado_web/app_routes.dart';
import 'src/todo_list/todo_list_component.dart';

@Component(
  selector: 'my-app',
  directives: [
    DeferredContentDirective,
    MaterialButtonComponent,
    MaterialIconComponent,
    MaterialPersistentDrawerDirective,
    MaterialToggleComponent,
    MaterialListComponent,
    MaterialListItemComponent,
    TodoListComponent,
    routerDirectives,
    NgIf
  ],
  templateUrl: 'app_component.html',
  styleUrls: [
    'app_component.scss.css',
    'package:angular_components/app_layout/layout.scss.css',
  ],
  providers: [],
  exports: [RoutePaths, Routes],
)
class AppComponent {
  bool customWidth = false;
  bool end = false;
  bool basicPopupVisible = false;

  final AuthService auth;

  AppComponent(AuthService this.auth);
}