import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:avocado_common/common.dart';
import 'dart:html';

import 'package:angular_components/angular_components.dart';

@Component(
  selector: 'video-uploader-component',
  templateUrl: 'video_uploader_component.html',
  styleUrls: [
    'package:angular_components/css/mdc_web/card/mdc-card.scss.css',
    'video_uploader_component.scss.css'
  ],
  directives: [
    MaterialButtonComponent,
    MaterialIconComponent,
    MaterialInputComponent,
    NgStyle
  ],
)
class VideoUploaderComponent {

  @Input()
  VideosBLoC bloc;

  VideoUploaderComponent(RepositoryService repository);


  var progress = 20;

  var output = "";

  String name = "d";

  String content = "test";

  void uploadFiles(form) {
    var formData = new FormData(form);

     //output = formData.get('file').toString();


     bloc.add(VideoInfo(
      content: content,
      user: UserInfo(
        key: "dd",
        image: "dd",
        displayName: "dd"
      ),
      date: DateTime.now()
    )).then((video) {
      output = video.key;
     });
  }
}
