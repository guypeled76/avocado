import 'package:flutter/material.dart';
import 'package:avocado_common/common.dart';
import 'story.dart';

class Stories extends StatelessWidget {

  final Stream<List<PostInfo>> stream;

  Stories({@required this.stream});
  

  @override
  Widget build(BuildContext context) {
    return SliverList(
        delegate: SliverChildListDelegate(
      [
        Container(
            margin: EdgeInsets.symmetric(vertical: 20.0),
            height: 200.0,
            padding: EdgeInsets.all(0),
            child: StreamBuilder<List<PostInfo>>(
                stream: this.stream,
                builder: (context, snapshot) {
                  if (snapshot.connectionState == ConnectionState.done) {
                    if (snapshot.hasError) {
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
                }))
      ],
    ));
  }
}
