import 'package:avocado_client/pages/home.dart';
import 'package:flutter/material.dart';
import 'auth.dart';

void main() => runApp(AvocadoApp());

final routes = {
  '/login':         (BuildContext context) => new AuthPage(),
  '/home':         (BuildContext context) => new HomePage(),
  '/' :          (BuildContext context) => new AuthPage(),
};

class AvocadoApp extends StatelessWidget {


  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Avocado',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      routes: routes,
    );
  }
}
