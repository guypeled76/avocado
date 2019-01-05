import 'package:flutter/material.dart';
import 'auth.dart';

void main() => runApp(AvocadoApp());

class AvocadoApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Avocado',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: AuthPage(),
    );
  }
}
