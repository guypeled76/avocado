import 'package:angular/angular.dart';
import 'package:avocado_common/common.dart';
import 'package:firebase/firestore.dart';
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


  final RepositoryService repositoryService;

  VideoUploaderComponent(this.repositoryService);

  var progress = 20;

  var output = "";

  var name = "d";

  var content = "test";

  void uploadFiles(form) {
    var formData = new FormData(form);

     output = formData.get('file').toString();


     repositoryService.collection("targets").add(UserInfo(
         key: "dd", displayName: "dd", hashtags: ["dd","gg"]).toJson());
/*
    repositoryService.collection("videos").addVideo(VideoInfo(
      content: "ddd",
      user: UserInfo(
        key: "dd",
        image: "dd",
        displayName: "dd"
      ),
      date: DateTime.now()
    ));*/
  }
}
