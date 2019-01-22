import 'package:flutter/material.dart';

import 'package:firebase_auth/firebase_auth.dart';

class AuthContext extends InheritedWidget {

  final FirebaseUser user;


  AuthContext({ Key key, Widget child, this.user })
      : super(key: key, child: child);

  @override
  bool updateShouldNotify(InheritedWidget oldWidget) {
    return true;
  }

  static AuthContext of(BuildContext context) {
    return context.inheritFromWidgetOfExactType(AuthContext);
  }

  String get email {
    return user?.email ?? "";
  }

  String get displayName {
    return user?.displayName ?? "";
  }

  String get photoUrl {
    return user?.photoUrl ?? "";
  }

}