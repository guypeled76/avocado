import 'package:flutter/material.dart';
import 'home.dart';

void main() => runApp(AvocadoApp());

class AvocadoApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Avocado Clinet',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: HomePage(title: 'Avocado Client'),
    );
  }
}
