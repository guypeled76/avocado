import 'package:avocado_client/models/info.dart';
import 'package:avocado_client/models/mocks.dart';

import 'story.dart';
import 'package:flutter/material.dart';

class StoriesWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 20.0),
      height: 200.0,
      padding: EdgeInsets.all(0),
      child:StreamBuilder<List<PostInfo>>(
          stream: loadPinned(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              if(snapshot.hasError) {
                return new Text(snapshot.error.toString());
              }
              return ListView.builder(
                  scrollDirection: Axis.horizontal,
                  padding: EdgeInsets.all(0),
                  itemCount: snapshot.data.length,
                  itemBuilder: (context, index) {
                    return StoryWidget(snapshot.data[index]);
                  });
            } else {
              return Text("Loading");
            }
          }


      )
    );
  }
}
