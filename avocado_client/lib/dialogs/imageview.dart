import 'dart:io';

import 'package:avocado_client/dialogs/comments.dart';
import 'package:avocado_common/modules.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:photo_view/photo_view.dart';

class ImageViewDialog extends StatelessWidget {
  final ImageContentInfo imageInfo;
  final File imageFile;


  ImageViewDialog({Key key, @required this.imageInfo, this.imageFile}) : super(key: key);



  @override
  Widget build(BuildContext context) {

    ImageProvider imageProvider;
    if(this.imageFile != null) {
      imageProvider = FileImage(this.imageFile);
    } else {
      imageProvider = CachedNetworkImageProvider(this.imageInfo.image);
    }

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
            imageProvider: imageProvider,
          ),
        bottomNavigationBar: Column(
          mainAxisSize:MainAxisSize.min,
          children: <Widget>[
            Divider(color: Colors.white,),
            Container(
              padding: EdgeInsets.only(right: 4,left:4),
              child:Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  _button(context, Icons.thumb_up, "Like", () {}),
                  _button(context, Icons.comment, "Comments", () {
                    CommentsDialog.show(context);
                  }),
                  _button(context, Icons.share, "Share", () {}),
                ])),
            Container(height: 15,)
          ],
        )
    );
  }

  Widget _button(BuildContext context, IconData icon, String text, VoidCallback onPressed) {
    return FlatButton(onPressed: onPressed,
        color: Colors.transparent,
        padding: EdgeInsets.all(0),
        child: Row( // Replace with a Row for horizontal icon + text
          children: <Widget>[
            Icon(icon, color: Colors.white),
            Container(width: 5,),
            Text(text, style:TextStyle(color:Colors.white))
          ],
        ));
  }

  static void show(BuildContext context, ImageContentInfo imageInfo) {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => ImageViewDialog(
        imageInfo: imageInfo,
      )),
    );
  }

  static void showFromFile(BuildContext context, ImageContentInfo imageInfo, File imageFile) {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => ImageViewDialog(
        imageInfo: imageInfo,
        imageFile: imageFile,
      )),
    );
  }
}