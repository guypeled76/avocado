import 'package:flutter/material.dart';

class NotificationWidget extends StatelessWidget {
  NotificationWidget({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListTile(
        leading: new CircleAvatar(
          backgroundImage: new NetworkImage(
              "https://cdn.insidetheperimeter.ca/wp-content/uploads/2015/11/Albert_einstein_by_zuzahin-d5pcbug-WikiCommons-768x706.jpg"),
        ),
        title: const Text('Trix\'s airplane'),
        subtitle: Text('The airplane is only in Act II.'),
        onTap: () {/* react to the tile being tapped */});
  }
}
