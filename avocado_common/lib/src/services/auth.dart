

import 'package:avocado_common/common.dart';

abstract class AuthService  {


  Future<ProfileInfo> signInWithGoogle();

  Future<ProfileInfo> signInWithFacebook();

  Future signOut();

}