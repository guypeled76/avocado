import 'package:avocado_client/pages/graph/linechart.dart';
import 'package:avocado_client/pages/graph/piechart.dart';
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
        Calendar(),
        Container(
          height: 300,
          child: LineChartWidget.withSampleData(),
        ),
        Container(
          height: 300,
          child: PieChartWidget.withSampleData(),
        )
      ],
    );
  }
}


