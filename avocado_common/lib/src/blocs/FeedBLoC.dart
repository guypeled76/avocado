import 'dart:async';
import 'package:avocado_common/common.dart';
import 'package:avocado_common/models.dart';
import 'package:avocado_common/src/models/mocks.dart';

class FeedBloC extends BaseBLoC {

  final Stream<List<PostInfo>> pinned = loadPinned();

  final Stream<List<PostInfo>> posts = loadPosts();


}
