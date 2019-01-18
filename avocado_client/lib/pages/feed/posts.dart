import 'package:avocado_client/contexts/user.dart';
import 'package:avocado_client/models/info.dart';
import 'package:avocado_client/pages/feed/post.dart';
import 'package:flutter/material.dart';

class Posts extends StatelessWidget {
  Posts({ Key key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<List<PostInfo>>(
        stream: UserStore.of(context).posts,
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return SliverFillRemaining(
                child: new Text(snapshot.error.toString()));
          }
          return SliverList(
            delegate: SliverChildBuilderDelegate(
                  (context, index) {
                return Post(snapshot.data[index]);
              },
              childCount: snapshot.hasData ? snapshot.data.length : 0,
            ),
          );
        });
  }
}