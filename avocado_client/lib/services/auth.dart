import 'package:flutter/material.dart';

import 'package:firebase_auth/firebase_auth.dart';

class AuthContext  {

  final FirebaseUser user;


  AuthContext(this.user);


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