import 'package:avocado_common/models.dart';
import 'package:avocado_common/mocks.dart';

class FeedBloC {

  Stream<List<PostInfo>> get pinned {
    return loadPinned();
  }

  Stream<List<PostInfo>> get posts {
    return loadPosts();
  }
}
