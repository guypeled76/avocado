import 'package:flutter/material.dart';

class MessageWidget extends StatelessWidget {
  final String message;
  final Widget other;
  MessageWidget({this.message, this.other});

  @override
  Widget build(BuildContext context) {
    return Row(
        children: <Widget>[
      Container(
        padding: EdgeInsets.all(2),
        child: this.other != null ? this.other : Container(width: 100)
      ),
      Expanded(
        child:
      Container(
          margin: EdgeInsets.only(right: 3, left: 3, bottom: 2, top: 2),
          padding: EdgeInsets.only(right: 14, left: 14, top: 10, bottom: 10),
          decoration: BoxDecoration(
              color: this.other != null ? Colors.grey : Colors.blue, borderRadius: BorderRadius.circular(16.0)),
          child: Text(
            this.message,
            softWrap: true,
            style: TextStyle(fontSize: 16.0, color: this.other != null ? Colors.black : Colors.white),
          ))),
      this.other != null ? Container(width: 100) : Container(width: 0),
    ]);
  }
}
