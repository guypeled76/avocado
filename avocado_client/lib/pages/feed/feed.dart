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
                  child: new Text(snapshot.error.toString())
              );
            }
            return SliverList(
              delegate: SliverChildBuilderDelegate(
                (context, index) {
                  return Post(snapshot.data[index]);
                },
                childCount: snapshot.hasData ? snapshot.data.length : 0,
              ),
            );
          })
    ]));
  }
}
