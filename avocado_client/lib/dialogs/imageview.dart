import 'package:avocado_client/data/data.dart';
import 'package:flutter/material.dart';
import 'package:photo_view/photo_view.dart';

class ImageViewDialog extends StatelessWidget {
  final ImageContentInfo imageInfo;
  ImageViewDialog({Key key, @required this.imageInfo}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.black,
        appBar: AppBar(
          title: Text("image1"),
          backgroundColor: Colors.black,
          actions: <Widget>[IconButton(
            icon:Icon(Icons.more_vert),
            onPressed: () {
              Navigator.pop(context);
            },
          )],
        ),
        body: PhotoView(
            imageProvider: NetworkImage(this.imageInfo.image),
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