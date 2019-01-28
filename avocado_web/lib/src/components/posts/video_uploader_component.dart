import 'package:angular/angular.dart';
import 'dart:html';

@Component(
  selector: 'video-uploader-component',
  templateUrl: 'video_uploader_component.html',
  styleUrls: [
    'package:angular_components/css/mdc_web/card/mdc-card.scss.css',
    'video_uploader_component.scss.css'
  ]
)
class VideoUploaderComponent {

  var progress = 20;

  var output = "";

  void uploadFiles(form) {
    var formData = new FormData(form);

     output = formData.get('file').toString();
  }
}
