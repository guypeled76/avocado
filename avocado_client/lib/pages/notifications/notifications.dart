import 'package:avocado_common/common.dart';
import 'package:flutter/material.dart';
import 'notification.dart';

class NotificationsWidget extends StatelessWidget {

  final NotificationsBLoC bloc;

  NotificationsWidget({Key key, this.bloc}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<List<NotificationInfo>>(
        stream: this.bloc.notifications,
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
