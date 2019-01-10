import 'package:flutter/material.dart';
import 'message.dart';

class ChatWidget extends StatefulWidget {
  ChatWidget({Key key}) : super(key: key);

  @override
  _ChatWidgetState createState() => _ChatWidgetState();
}

class _ChatWidgetState extends State<ChatWidget> {
  final other = new CircleAvatar(
    backgroundImage: new NetworkImage(
        "https://cdn.insidetheperimeter.ca/wp-content/uploads/2015/11/Albert_einstein_by_zuzahin-d5pcbug-WikiCommons-768x706.jpg"),
  );

  @override
  Widget build(BuildContext context) {
    return Column(
        children: <Widget>[
      Expanded(
          child: ListView(
        reverse: false,
        padding: EdgeInsets.all(6),
        scrollDirection: Axis.vertical,
        children: <Widget>[
          MessageWidget(
            message: "hi",
          ),
          MessageWidget(
            message: "Hi Hi",
            other: this.other,
          ),
          MessageWidget(
            message: "How are you",
          ),
          MessageWidget(message: "Goning god", other: this.other),
          MessageWidget(
            message: "Are you hungry?",
          ),
          MessageWidget(message: "Just eat a man", other: this.other),
          MessageWidget(
            message: "As long as you don't eat carbs its ok.",
          ),
          MessageWidget(
            message: "Just remember to do you home work",
          ),
          MessageWidget(
            message: "Just remember to do you home work",
          ),
          MessageWidget(
            message: "Just remember to do you home work",
          ),
          MessageWidget(
            message: "Just remember to do you home work",
          ),
          MessageWidget(
            message: "Just remember to do you home work",
          ),
          MessageWidget(
            message: "Just remember to do you home work",
          ),
          MessageWidget(
            message: "Just remember to do you home work",
          ),
          MessageWidget(
            message: "Just remember to do you home work",
          ),
          MessageWidget(
            message: "Just remember to do you home work",
          ),
          MessageWidget(
            message: "Just remember to do you home work",
          ),
        ],
      )),
      Row(children: <Widget>[
        IconButton(icon: Icon(Icons.camera)),
        IconButton(icon: Icon(Icons.image)),
        Expanded(child: TextFormField(

        ),),
        IconButton(icon: Icon(Icons.send)),

      ])
    ]);
  }
}
