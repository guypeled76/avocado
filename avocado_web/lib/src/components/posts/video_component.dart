import 'package:angular/angular.dart';

@Component(
  selector: 'video-component',
  templateUrl: 'video_component.html',
)
class VideoComponent  {

  @Input("video")
  String video;
}
