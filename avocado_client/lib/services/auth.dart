import 'package:avocado_common/common.dart';
import 'package:firebase_auth/firebase_auth.dart';

class AuthServiceImpl implements AuthService {

  final FirebaseUser profile;


  AuthServiceImpl(this.profile);


  String get email {
    return profile?.email ?? "";
  }

  String get displayName {
    return profile?.displayName ?? "";
  }

  String get photoUrl {
    return profile?.photoUrl ?? "";
  }

}