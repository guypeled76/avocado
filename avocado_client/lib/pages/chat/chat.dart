import 'package:avocado_client/models/info.dart';
import 'package:avocado_client/models/mocks.dart';
import 'package:flutter/material.dart';
import 'message.dart';

class ChatWidget extends StatelessWidget {

  final String chatId;

  ChatWidget({Key key, @required this.chatId}) : super(key: key);


  @override
  Widget build(BuildContext context) {
    return Column(
        children: <Widget>[
          Expanded(
              child: buildChat(context)
          ),
          Row(children: <Widget>[
            IconButton(icon: Icon(Icons.camera)),
            IconButton(icon: Icon(Icons.image)),
            Expanded(child: TextFormField(

            ),),
            IconButton(icon: Icon(Icons.send)),

          ])
        ]);
  }

  Widget buildChat(BuildContext context) {
    return StreamBuilder<List<MessageInfo>>(
        stream: loadChat(this.chatId),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            if (snapshot.hasError) {
              return new Text(snapshot.error.toString());
            }
            return ListView.builder(
                padding: EdgeInsets.all(0),
                itemCount: snapshot.data.length,
                itemBuilder: (context, index) {
                  MessageInfo message = snapshot.data[index];

                  return MessageWidget(
                    message: message,
                    other: message.user,
                  );
                });
          } else {
            return Text("Loading");
          }
        });
  }
}
