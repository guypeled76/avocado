import 'dart:io';

import 'package:avocado_client/dialogs/comments.dart';
import 'package:avocado_common/common.dart' as common;
import 'package:flutter/material.dart';
import 'package:extended_image/extended_image.dart';

class ImageViewDialog extends StatelessWidget {
  final common.ImageInfo imageInfo;
  final File imageFile;


  ImageViewDialog({Key key, @required this.imageInfo, this.imageFile}) : super(key: key);



  @override
  Widget build(BuildContext context) {

    String image;
    if(this.imageFile != null) {
     // image = this.imageFile;
    } else {
      image = this.imageInfo.image;
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
        body: ExtendedImage.network(
            image
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

  static void show(BuildContext context, common.ImageInfo imageInfo) {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => ImageViewDialog(
        imageInfo: imageInfo,
      )),
    );
  }

  static void showFromFile(BuildContext context, common.ImageInfo imageInfo, File imageFile) {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => ImageViewDialog(
        imageInfo: imageInfo,
        imageFile: imageFile,
      )),
    );
  }
}