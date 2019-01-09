

import 'package:avocado_client/data/data.dart';
import 'mocks/posts.dart';

Stream<List<PostInfo>>  loadPosts  () async* {

  yield posts;
}