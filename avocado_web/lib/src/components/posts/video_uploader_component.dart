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
    FileUploadInputElement,
    NgStyle,
    materialInputDirectives
  ],
)
class VideoUploaderComponent {

  @Input()
  VideosBLoC bloc;

  final RepositoryService repository;

  VideoUploaderComponent(this.repository);


  var progress = 20;

  var output = "";

  String name = "d";

  String content = "test";

  String status = "done.";

  @ViewChild("upload")
  FileUploadInputElement upload;

  void create() {

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

      File file = upload.files.first;

      if(file != null) {
        this.repository.uploadFile("videos/${file.name}", file).listen((
            snapshot) {
          switch (snapshot.state) {
            case RepositoryTaskState.RUNNING:
              status =
              "uploaded ${snapshot.bytesTransferred} bytes out of ${snapshot
                  .totalBytes} bytes.";
              break;
            case RepositoryTaskState.CANCELED:
              status = "canceled";
              break;
            case RepositoryTaskState.PAUSED:
              status = "paused";
              break;
            case RepositoryTaskState.SUCCESS:
              status = "uploaded.";
              break;
            case RepositoryTaskState.ERROR:
              status = "failed to upload.";
              break;
          }
        }, onError: (error) {
          status = "error:" + error?.toString();
        }, onDone: () {

        });
      }
    });
  }
}

