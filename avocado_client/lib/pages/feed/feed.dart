import 'package:flutter/material.dart';
import 'posts.dart';
import 'stories.dart';

class FeedPage extends StatelessWidget {
  FeedPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        child: CustomScrollView(slivers: <Widget>[
          Stories(),
          Posts()
        ])
    );
  }
}
