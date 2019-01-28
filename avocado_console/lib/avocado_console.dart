import 'package:avocado_common/common.dart';

Future<int> testJSON()async {


  FeedBloC bloc = FeedBloC();

  int count = 0;
  List<PostInfo> posts = await bloc.posts.first;
  for(PostInfo post in posts) {
    count++;
  }
  return count;
}
