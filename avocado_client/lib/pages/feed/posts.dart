import 'package:avocado_common/common.dart';
import 'package:avocado_client/pages/feed/post.dart';
import 'package:flutter/material.dart';

class Posts extends StatelessWidget {

  final Stream<List<PostInfo>> stream;

  Posts({ Key key , @required this.stream}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<List<PostInfo>>(
        stream: this.stream,
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