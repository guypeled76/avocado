import 'package:avocado_client/pages/feed/post.dart';
import 'package:avocado_client/models/mocks.dart';
import 'package:avocado_client/models/info.dart';
import 'package:flutter/material.dart';
import 'stories.dart';

class FeedPage extends StatelessWidget {
  FeedPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        child: CustomScrollView(slivers: <Widget>[
      SliverList(
          delegate: SliverChildListDelegate(
        [StoriesWidget()],
      )),
      StreamBuilder<List<PostInfo>>(
          stream: loadPosts(),
          builder: (context, snapshot) {
            if (snapshot.hasError) {
              return SliverFillRemaining(
                  child: new Text(snapshot.error.toString()));
            }
            return SliverList(
              delegate: SliverChildBuilderDelegate(
                (context, index) {
                  return createPost(snapshot.data[index], null);
                },
                childCount: snapshot.hasData ? snapshot.data.length : 0,
              ),
            );
          })
    ]));
  }

  Widget createPost(PostInfo post, UserInfo user) {
    return Post(
      image: post.image,
      avatar: post.user.image,
      time: post.date,
      comments: "2",
      shares: "3",
      likes: "45",
      name: post.user.displayName,
      content: post.content,
    );
  }
}
