import 'package:avocado_client/services/mediaPicker.dart';
import 'package:flutter/material.dart';

class TestingDialog extends StatelessWidget {
  TestingDialog({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Tests"),
        ),
        body: Center(
            child: Column(
          children: <Widget>[
            IconButton(
              icon: Icon(Icons.open_in_new),
              onPressed: () {
                //pickImageFromGallery();
              },
            )
          ],
        )));
  }
}
