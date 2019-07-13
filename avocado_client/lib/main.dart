import 'dart:io';
import 'package:avocado_client/references/common.dart';
import 'package:avocado_client/services/client.dart';
import 'package:avocado_client/pages/pages.dart';
import 'package:avocado_client/areas/areas.dart';
import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:flutter/material.dart';
import 'package:firebase_analytics/observer.dart';
import 'package:flutter/foundation.dart'

    show debugDefaultTargetPlatformOverride;

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


  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    ServiceContainer provider = new ServiceContainer();
    provider.apply(ClientServiceConfiguration());
    provider.get<AppStore>().initialize();

    return MaterialApp(
        title: 'Avocado',
        theme: ThemeData(
          primarySwatch: Colors.green,
        ),
        navigatorObservers: [
          FirebaseAnalyticsObserver(analytics: FirebaseAnalytics()),
        ],
        home: ServiceScope(
          provider: provider,
          child: StreamBuilder<ProfileInfo>(
              stream: provider
                  .get<AuthStore>()
                  .profile,
              builder: (BuildContext context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return SplashPage();
                } else {
                  if (snapshot.data != null) {
                    return ClientHomePage();
                  } else {
                    return AuthPage();
                  }
                }
              }),
        ));
  }
}
