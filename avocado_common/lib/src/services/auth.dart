

import 'package:avocado_common/common.dart';

abstract class AuthService  {

  Stream<ProfileInfo> get profile;

  Future signInWithGoogle();

  Future signInWithFacebook();

  Future signOut();

}