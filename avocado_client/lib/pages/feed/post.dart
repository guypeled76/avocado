import 'package:avocado_client/dialogs/comments.dart';
import 'package:avocado_client/dialogs/video.dart';
import 'package:avocado_common/common.dart';
import 'package:flutter/material.dart';
import 'package:avocado_client/dialogs/imageview.dart';
import 'package:cached_network_image/cached_network_image.dart';

class Post extends StatelessWidget {
  final PostInfo post;

  Post(this.post);

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: Border(
          bottom: BorderSide(color: Colors.lightGreenAccent, width: 0.3)),
      child: new Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          new ListTile(
            leading: CircleAvatar(
                radius: 25.0,
                backgroundImage:
                    new CachedNetworkImageProvider(this.post.user.image)),
            title: new Text(
              this.post.user.displayName,
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            subtitle: new Row(
              children: [
                new Text(this.post.date.toString()),
                new Icon(
                  Icons.public,
                  size: 15.0,
                )
              ],
            ),
            trailing: new Icon(Icons.more_horiz),
          ),
          ListTile(
            title: Text(this.post.content),
          ),
          GestureDetector(
              onTap: () {
                if (this.post.video != null) {
                  VideoViewDialog.show(context, this.post.video);
                }
                else if (this.post.image != null) {
                  ImageViewDialog.show(context, this.post);
                }
              },
              child: Container(
                  height: 200,
                  decoration: BoxDecoration(
                      image: new DecorationImage(
                          fit: BoxFit.fitWidth,
                          image: new CachedNetworkImageProvider(
                              this.post.image))))),
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
                      child: new Icon(
                        Icons.thumb_up,
                        size: 12.0,
                        color: Colors.white,
                      ),
                    ),
                    new CircleAvatar(
                      radius: 10.0,
                      backgroundColor: Colors.red,
                      child: new Icon(
                        Icons.thumb_down,
                        size: 12.0,
                        color: Colors.white,
                      ),
                    ),
                    new Padding(
                      padding: const EdgeInsets.symmetric(
                          vertical: 0.0, horizontal: 8.0),
                      child: new Text("2"),
                    ),
                  ],
                ),
                new Row(
                  children: <Widget>[
                    GestureDetector(
                      onTap: () => CommentsDialog.show(context),
                      child: new Text("2 comments"),
                    )
                  ],
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}
