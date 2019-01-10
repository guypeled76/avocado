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
          storyBox(context),
          storyBox(context),
          storyBox(context),
          storyBox(context),
          storyBox(context),
          storyBox(context),
          storyBox(context),
        ],
      ),
    );
  }

  Widget storyBox(BuildContext context) {
    return Container(
        width: 160.0,
        margin: EdgeInsets.only(right: 3, left:3),
        decoration: BoxDecoration(
            color: Colors.black,
            borderRadius: BorderRadius.circular(16.0),
            image: DecorationImage(
              fit: BoxFit.cover,
              image: new NetworkImage(
                  "https://cdn.insidetheperimeter.ca/wp-content/uploads/2015/11/Albert_einstein_by_zuzahin-d5pcbug-WikiCommons-768x706.jpg"),
            )));
  }
}
