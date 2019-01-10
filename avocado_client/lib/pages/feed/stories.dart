import 'story.dart';
import 'package:flutter/material.dart';

class StoriesWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 20.0),
      height: 200.0,
      padding: EdgeInsets.all(0),
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: <Widget>[
          StoryWidget(),
          StoryWidget(),
          StoryWidget(),
          StoryWidget(),
          StoryWidget(),
          StoryWidget(),
          StoryWidget(),
          StoryWidget(),
        ],
      ),
    );
  }
}
