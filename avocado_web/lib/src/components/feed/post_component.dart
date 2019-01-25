import 'package:angular/angular.dart';
import 'package:avocado_common/common.dart';

@Component(
  selector: 'post-component',
  templateUrl: 'post_component.html',
)
class PostComponent {

  @Input("post")
  PostInfo post;
}
