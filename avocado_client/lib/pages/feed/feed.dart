import 'package:avocado_client/pages/feed/post.dart';
import 'package:avocado_client/services/posts.dart';
import 'package:avocado_client/data/index.dart';
import 'package:flutter/material.dart';

class FeedPage extends StatefulWidget {
  FeedPage({Key key}) : super(key: key);

  @override
  _FeedPageState createState() => _FeedPageState();
}

class _FeedPageState extends State<FeedPage> {

  Future<Null> _handleRefresh() async {
    await new Future.delayed(new Duration(seconds: 1));



    return null;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        child: RefreshIndicator(
            onRefresh: _handleRefresh,
            child: StreamBuilder<List<PostInfo>>(
                stream: loadPosts(),
                builder: (context, snapshot) {
                  if (snapshot.connectionState == ConnectionState.done) {
                    return ListView.builder(
                        itemCount: snapshot.data.length,
                        itemBuilder: (context, index) {
                          return createPost(snapshot.data[index]);
                        });
                  } else {
                    return Text("Loading");
                  }
                })));
  }

  Widget createPost(PostInfo post) {
    return Post(
      image:
          "https://cdn.insidetheperimeter.ca/wp-content/uploads/2015/11/Albert_einstein_by_zuzahin-d5pcbug-WikiCommons-768x706.jpg",
      time: "11:12",
      comments: "2",
      shares: "3",
      likes: "45",
      name: "ddddd",
      content: "d",
    );
  }
}
