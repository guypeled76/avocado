import 'package:flutter/material.dart';
import 'notification.dart';

class NotificationsWidget extends StatelessWidget {
  NotificationsWidget({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: <Widget>[
        NotificationWidget(),
        NotificationWidget(),
        NotificationWidget(),
        NotificationWidget(),
        NotificationWidget(),
        NotificationWidget(),
        NotificationWidget(),
        NotificationWidget(),
        NotificationWidget(),
      ],
    );
  }
}

