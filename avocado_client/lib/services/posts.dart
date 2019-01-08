

import 'package:avocado_client/data/index.dart';
import 'mocks/posts.dart';

Stream<List<PostInfo>>  loadPosts  () async* {

  yield posts;
}