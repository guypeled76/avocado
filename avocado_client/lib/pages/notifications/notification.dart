import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:avocado_common/common.dart';

class NotificationWidget extends StatelessWidget {

  final NotificationInfo notification;

  NotificationWidget({Key key, this.notification}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListTile(
        leading: new CircleAvatar(
          backgroundImage: new CachedNetworkImageProvider(
            this.notification.user.image
          )
        ),
        title: Text(this.notification.user.displayName),
        subtitle: Text(this.notification.content),
        onTap: () {/* react to the tile being tapped */});
  }
}
