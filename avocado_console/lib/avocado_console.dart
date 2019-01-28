import 'package:avocado_common/common.dart';
import 'dart:convert';

Future<String> testJSON()async {


  FeedBloC bloc = FeedBloC();

  String result = "";
  List<PostInfo> posts = await bloc.posts.first;
  for(PostInfo post in posts) {
    result += json.encode(post.toJson());
  }
  return result;
}
