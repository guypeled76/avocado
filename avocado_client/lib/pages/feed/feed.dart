import 'package:avocado_client/pages/feed/post.dart';
import 'package:avocado_client/services/posts.dart';
import 'package:avocado_client/data/data.dart';
import 'package:flutter/material.dart';
import 'stories.dart';

class FeedPage extends StatelessWidget {
  FeedPage({Key key}) : super(key: key);

  Future<Null> _handleRefresh() async {
    await new Future.delayed(new Duration(seconds: 1));

    return null;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(0),
    child:
      StreamBuilder<List<PostInfo>>(
          stream: loadPosts(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              return ListView.builder(
                padding: EdgeInsets.all(0),
                  itemCount: snapshot.data.length+1,
                  itemBuilder: (context, index) {
                    if(index==0) return StoriesWidget();
                    return createPost(snapshot.data[index-1]);
                  });
            } else {
              return Text("Loading");
            }
          })
    );
  }

  Widget createPost(PostInfo post) {
    return Post(
      image:
          "https://cdn.insidetheperimeter.ca/wp-content/uploads/2015/11/Albert_einstein_by_zuzahin-d5pcbug-WikiCommons-768x706.jpg",
      time: "11:12",
      comments: "2",
      shares: "3",
      likes: "45",
      name: post.user.name,
      content: post.content,
    );
  }
}
