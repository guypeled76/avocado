import 'package:flutter/material.dart';
import 'package:flutter_calendar/flutter_calendar.dart';

class TimelinePage extends StatefulWidget {
  TimelinePage({Key key}) : super(key: key);

  @override
  _TimelinePageState createState() => _TimelinePageState();
}

class _TimelinePageState extends State<TimelinePage> {


  @override
  Widget build(BuildContext context) {
    return ListView(
      children: <Widget>[
        Calendar()
      ],
    );
  }
}


