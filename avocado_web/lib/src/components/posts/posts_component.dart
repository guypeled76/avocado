import 'package:angular/angular.dart';
import 'package:avocado_common/common.dart';
import 'package:avocado_web/src/components/posts/post_component.dart';

@Component(
  selector: 'posts-component',
  templateUrl: 'posts_component.html',
  directives: [
    PostComponent,
    NgFor,
    NgIf
  ],
  pipes: [
    commonPipes
  ]
)
class PostsComponent {

  PostsBLoC bloc;

  final RepositoryService repository;

  PostsComponent(this.repository) {
    bloc = PostsBLoC(this.repository);
  }

}
