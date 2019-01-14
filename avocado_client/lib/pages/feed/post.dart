import 'package:avocado_client/data/images.dart';
import 'package:avocado_client/dialogs/comments.dart';
import 'package:flutter/material.dart';
import 'package:avocado_client/dialogs/imageview.dart';
import 'package:cached_network_image/cached_network_image.dart';

class Post extends StatelessWidget {

  var image, avatar, content, name, time, likes, comments, shares;

  Post({
    this.image, this.content, this.name, this.time, this.likes, this.comments, this.shares, this.avatar
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        if(this.image != null) {
          ImageViewDialog.show(context,ImageContentInfo(
              key:"dd",
              image:this.image)
          );
        }
      },
        child:Card(
      shape: Border(bottom: BorderSide(color: Colors.lightGreenAccent, width: 0.3)),
      child: new Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          new ListTile(
            leading: CircleAvatar(
              radius: 25.0,
              child: new Container(
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  image: new DecorationImage(
                    image: new CachedNetworkImageProvider(this.avatar),
                  ),
                ),
              ),
            ),
            title: new Text(
              name,
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            subtitle: new Row(
              children: [
                new Text(time),
                new Icon(
                  Icons.public,
                  size: 15.0,
                )
              ],
            ),
            trailing: new Icon(Icons.more_horiz),
          ),
          ListTile(
            title: Text(content),
          ),
          Container(
            height: 200,
            decoration: BoxDecoration(
                image:new DecorationImage(
                  fit:BoxFit.fitWidth,
            image: new CachedNetworkImageProvider(image)
          ))),
          Container(
            padding: new EdgeInsets.all(18.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                new Row(
                  children: <Widget>[

                    new CircleAvatar(
                      radius: 10.0,
                      backgroundColor: Color(0xff3b5998),
                      child: new Icon(Icons.thumb_up, size: 12.0, color: Colors.white, ), ),

                    new CircleAvatar(
                      radius: 10.0,
                      backgroundColor: Colors.red,
                      child: new Icon(Icons.thumb_down, size: 12.0, color: Colors.white, ), ),

                    new Padding(
                      padding: const EdgeInsets.symmetric(
                          vertical: 0.0,
                          horizontal: 8.0
                      ),
                      child: new Text(likes),
                    ),
                  ],
                ),
                new Row(children: <Widget>[
                  GestureDetector(
                    onTap: () => CommentsDialog.show(context),
                    child: new Text(comments + " comments"),
                  )
                ],
                )
              ],
            ),
          )
        ],
      ),
    ));
  }
}