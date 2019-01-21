import 'package:avocado_common/modules.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';

class StoryWidget extends StatelessWidget {

  final PostInfo post;

  StoryWidget(this.post);

  @override
  Widget build(BuildContext context) {
    return Container(
        width: 160.0,
        margin: EdgeInsets.only(right: 3, left:3),
        decoration: BoxDecoration(
            color: Colors.black,
            borderRadius: BorderRadius.circular(16.0),
            image: DecorationImage(
              fit: BoxFit.cover,
              image: new CachedNetworkImageProvider(
                  this.post.image),
            )));
  }

}