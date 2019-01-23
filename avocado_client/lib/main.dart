import 'dart:io';

import 'package:avocado_client/services/provider.dart';
import 'package:avocado_client/services/auth.dart';
import 'package:avocado_client/pages/pages.dart';
import 'package:avocado_client/areas/areas.dart';
import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_analytics/observer.dart';
import 'package:flutter/foundation.dart' show debugDefaultTargetPlatformOverride;


void main() {



  TargetPlatform targetPlatform;
  if (Platform.isMacOS) {
    targetPlatform = TargetPlatform.iOS;
  } else if (Platform.isLinux || Platform.isWindows) {
    targetPlatform = TargetPlatform.android;
  }
  if (targetPlatform != null) {
    debugDefaultTargetPlatformOverride = targetPlatform;
  }

  runApp(AvocadoApp());
}


class AvocadoApp extends StatelessWidget {

  FirebaseAnalytics analytics = FirebaseAnalytics();

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Avocado',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      navigatorObservers: [
        FirebaseAnalyticsObserver(analytics: analytics),
      ],
      home: StreamBuilder<FirebaseUser>(
          stream: FirebaseAuth.instance.onAuthStateChanged,
          builder: (BuildContext context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return SplashPage();
            } else {
              if (snapshot.hasData) {
                return ServiceProvider(
                  services: [AuthContext(snapshot.data)],
                    child: ClientHomePage()
                );
              } else {
                return AuthPage();
              }
            }
          }

      ),
    );
  }
}
