import 'package:flutter/material.dart';

import 'package:firebase_auth/firebase_auth.dart';

class AuthContext extends InheritedWidget {

  final FirebaseUser user;

  const AuthContext({ Key key, Widget child, this.user })
      : super(key: key, child: child);

  @override
  bool updateShouldNotify(InheritedWidget oldWidget) {
    return true;
  }

  static AuthContext of(BuildContext context) {
    return context.inheritFromWidgetOfExactType(AuthContext);
  }

  String getEMail() {
    return user?.email ?? "";
  }

  String getDisplayName() {
    return user?.displayName ?? "";
  }

  String getPhotoUrl() {
    return user?.photoUrl ?? "";
  }

}