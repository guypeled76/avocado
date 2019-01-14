import 'package:avocado_client/pages/feed/post.dart';
import 'package:avocado_client/models/mocks.dart';
import 'package:avocado_client/models/info.dart';
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
              if(snapshot.data==null) {
                return Text("Empty");
              }
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
      image:post.image,
      time: post.date,
      comments: "2",
      shares: "3",
      likes: "45",
      name: post.user,
      content: post.content,
    );
  }
}
