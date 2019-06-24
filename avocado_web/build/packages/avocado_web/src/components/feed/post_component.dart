import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:avocado_common/common.dart';

@Component(
    selector: 'post-component',
    templateUrl: 'post_component.html',
    directives: [
      MaterialButtonComponent,
      MaterialIconComponent,
      NgStyle
    ],
    styleUrls: [
      'package:angular_components/css/mdc_web/card/mdc-card.scss.css',
      'post_component.scss.css'
    ])
class PostComponent {
  @Input("post")
  PostInfo post;
}
