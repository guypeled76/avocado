

import 'package:avocado_common/common.dart';

abstract class AuthService  {



  ProfileInfo get profile;

  void signInWithGoogle();

  void signInWithFacebook();

  void signOut();

}