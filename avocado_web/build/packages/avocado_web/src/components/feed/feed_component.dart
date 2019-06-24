import 'package:angular/angular.dart';
import 'package:avocado_web/src/components/feed/post_component.dart';
import 'package:avocado_common/common.dart';

@Component(
  selector: 'feed-component',
  templateUrl: 'feed_component.html',
  directives: [
    PostComponent,
    NgFor,
    NgIf
  ],
  pipes: [commonPipes],
)
class FeedComponent  {
  var name = 'Angular';

  FeedBloC bloc = FeedBloC();


  FeedComponent() {

  }




}
