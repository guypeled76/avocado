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
class PostsComponent implements OnInit, OnDestroy {

  PostsBLoC bloc;

  final StoreService store;

  PostsComponent(this.store) {
    bloc = PostsBLoC(this.store.postsStore);
  }

  @override
  void ngOnInit() {


    bloc.actions.events.load(null);
  }

  @override
  void ngOnDestroy() {
    bloc.actions.events.unload(null);
  }

}
