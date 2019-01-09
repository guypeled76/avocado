import 'package:avocado_client/pages/splash/splash.dart';
import 'package:avocado_client/areas/client/home.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
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
      home: StreamBuilder<FirebaseUser>(
          stream: FirebaseAuth.instance.onAuthStateChanged,
          builder: (BuildContext context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return new SplashPage();
            } else {
              if (snapshot.hasData) {
                return new ClientHomePage();
              } else {
                return new AuthPage();
              }
            }
          }

      ),
    );
  }
}
