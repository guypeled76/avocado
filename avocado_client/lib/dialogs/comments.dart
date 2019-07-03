import 'package:avocado_client/pages/chat/chat.dart';
import 'package:avocado_client/services/provider.dart';
import 'package:avocado_common/common.dart';
import 'package:flutter/material.dart';

class CommentsDialog extends StatelessWidget {

  CommentsDialog({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
        appBar: AppBar(
          title: Text("image1"),
          backgroundColor: Colors.white,
          leading: IconButton(icon: Icon(Icons.arrow_back_ios),
              color:Colors.black,
              onPressed: () => Navigator.pop(context)),
          actions: <Widget>[IconButton(
            icon:Icon(Icons.more_vert),
            color: Colors.black,
            onPressed: () {
              Navigator.pop(context);
            },
          )],
        ),
      body: ChatWidget(bloc: ChatBLoC(ServiceProvider.get<StoreService>(context).chatsStore["c2"])),
    );
  }


  static void show(BuildContext context) {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => CommentsDialog(

      )),
    );
  }
}