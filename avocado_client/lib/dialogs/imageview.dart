import 'package:avocado_client/data/data.dart';
import 'package:flutter/material.dart';

class ImageViewDialog extends StatelessWidget {
  final ImageContentInfo imageInfo;
  ImageViewDialog({Key key, @required this.imageInfo}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.black,
        appBar: AppBar(
          title: Text("image"),
          backgroundColor: Colors.black,
          actions: <Widget>[IconButton(
            icon:Icon(Icons.more_vert),
            onPressed: () {
              Navigator.pop(context);
            },
          )],
        ),
        body: Center(
          child: Image(
            image: NetworkImage(this.imageInfo.image),
          )
        ),
    );
  }

  static void show(BuildContext context, ImageContentInfo imageInfo) {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => ImageViewDialog(
        imageInfo: imageInfo,
      )),
    );
  }
}