import 'package:angular/angular.dart';
import 'package:avocado_common/common.dart';

@Component(
  selector: 'videos-component',
  templateUrl: 'videos_component.html',
    directives: [
      NgFor,
      NgIf
    ],
    pipes: [
      commonPipes
    ]
)
class VideosComponent {


  final VideosBLoC bloc;

  VideosComponent(RepositoryService repository) :
        bloc = VideosBLoC(repository);
}
