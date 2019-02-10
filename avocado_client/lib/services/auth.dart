import 'package:avocado_common/common.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:flutter_facebook_login/flutter_facebook_login.dart';
import 'package:avocado_client/utils.dart';

class AuthServiceImpl implements AuthService {

  ProfileInfo _profile;

  final GoogleSignIn _googleSignIn = GoogleSignIn();

  final FacebookLogin _facebookSignIn = new FacebookLogin();

  final FirebaseAuth _auth = FirebaseAuth.instance;

  AuthServiceImpl();

  @override
  ProfileInfo get profile {
    return _profile;
  }

  @override
  void signInWithFacebook() async {
    try {
      final FacebookLoginResult result =
          await _facebookSignIn.logInWithReadPermissions(['email']);

      switch (result.status) {
        case FacebookLoginStatus.loggedIn:
          final FacebookAccessToken accessToken = result.accessToken;
          this._auth.signInWithFacebook(accessToken: accessToken.token);
          break;
        case FacebookLoginStatus.cancelledByUser:
          break;
        case FacebookLoginStatus.error:
          break;
      }
    } catch (e) {
      logError("Failed ot login with facebook", e);
    }
  }

  @override
  void signInWithGoogle() async {
    try {
      final GoogleSignInAccount googleUser = await _googleSignIn.signIn();
      final GoogleSignInAuthentication googleAuth =
          await googleUser.authentication;
      await this._auth.signInWithGoogle(
        accessToken: googleAuth.accessToken,
        idToken: googleAuth.idToken,
      );
    } catch (e) {
      logError("Failed ot login with google", e);
    }
  }

  @override
  void signOut() {

  }




}