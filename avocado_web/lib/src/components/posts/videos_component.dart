import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:avocado_common/common.dart';
import 'package:avocado_web/src/components/posts/video_uploader_component.dart';

@Component(
  selector: 'videos-component',
  templateUrl: 'videos_component.html',
    directives: [
      NgFor,
      NgIf,
      VideoUploaderComponent,
      MaterialButtonComponent,
      MaterialIconComponent
    ],
    pipes: [
      commonPipes
    ]
)
class VideosComponent {


  final VideosBLoC bloc;

  VideosComponent(RepositoryService repository) :
        bloc = VideosBLoC(repository);


  delete(VideoInfo video) {

    bloc.delete(video);
  }
}
