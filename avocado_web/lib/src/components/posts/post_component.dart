import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:avocado_common/common.dart';
import 'package:avocado_web/src/components/posts/video_component.dart';

@Component(
    selector: 'post-component',
    templateUrl: 'post_component.html',
    providers: [overlayBindings],
    directives: [
      MaterialButtonComponent,
      MaterialIconComponent,
      MaterialDialogComponent,
      materialInputDirectives,
      MaterialMultilineInputComponent,
      materialNumberInputDirectives,
      NgStyle,
      VideoComponent,
      ModalComponent
    ],
    styleUrls: [
      'package:angular_components/css/mdc_web/card/mdc-card.scss.css',
      'post_component.scss.css'
    ])
class PostComponent  {

  var showEditor = false;

  var value = "";

  @Input("post")
  PostInfo post;

  onClick() {
    showEditor = true;
  }
}
