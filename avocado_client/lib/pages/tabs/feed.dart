import 'package:avocado_client/widgets/post.dart';
import 'package:flutter/material.dart';

class FeedPage extends StatefulWidget {
  FeedPage({Key key}) : super(key: key);

  @override
  _FeedPageState createState() => _FeedPageState();
}

class _FeedPageState extends State<FeedPage> {


  @override
  Widget build(BuildContext context) {
    return Container(
        child: ListView(
            children: <Widget>[
              createPost(),
              createPost(),
              createPost(),
              createPost(),
              createPost(),
              createPost(),
              createPost(),
              createPost(),
              createPost(),
              createPost(),
              createPost(),
              createPost(),
              createPost(),
              createPost(),
            ],
        )
    );
  }

  Widget createPost() {
    return Post(
      image: "https://cdn.insidetheperimeter.ca/wp-content/uploads/2015/11/Albert_einstein_by_zuzahin-d5pcbug-WikiCommons-768x706.jpg",
      time: "11:11",
      comments: "2",
      shares: "3",
      likes: "45",
      name: "ddd",
      content: "d",
    );
  }
}


