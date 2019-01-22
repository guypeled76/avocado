import 'package:avocado_common/common.dart';
import 'package:flutter/material.dart';
import 'posts.dart';
import 'stories.dart';

class FeedPage extends StatelessWidget {
  final FeedBloC bloc;

  FeedPage({Key key, @required this.bloc}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        child: CustomScrollView(slivers: <Widget>[
          Stories(
            stream: bloc.pinned,
          ),
          Posts(
            stream: bloc.posts,
          )
        ])
    );
  }
}
