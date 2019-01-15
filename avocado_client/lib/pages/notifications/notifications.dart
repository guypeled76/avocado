import 'package:avocado_client/models/info.dart';
import 'package:avocado_client/models/mocks.dart';
import 'package:flutter/material.dart';
import 'notification.dart';

class NotificationsWidget extends StatelessWidget {
  NotificationsWidget({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<List<NotificationInfo>>(
        stream: loadNotifications(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            if (snapshot.hasError) {
              return new Text(snapshot.error.toString());
            }
            return ListView.builder(
                padding: EdgeInsets.all(0),
                itemCount: snapshot.data.length,
                itemBuilder: (context, index) {
                  return NotificationWidget(
                      notification:snapshot.data[index]
                  );
                });
          } else {
            return Text("Loading");
          }
        });
  }
}
