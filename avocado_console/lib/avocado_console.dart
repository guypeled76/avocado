import 'package:avocado_common/common.dart';
import 'dart:convert';

Future<String> testJSON()async {


  FeedBLoC bloc = FeedBLoC(null);

  String result = "";
  List<PostInfo> posts = await bloc.posts.first;
  for(PostInfo post in posts) {
    result += json.encode(post.toJson());
  }

  var video = VideoInfo(
      content: "ddd",
      user: UserInfo(
          key: "dd",
          image: "dd",
          displayName: "dd"
      ),
      date: DateTime.now()
  );

  result += json.encode(video.toJson());
  return result;
}
