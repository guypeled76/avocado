import 'package:avocado_common/common.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:flutter_facebook_login/flutter_facebook_login.dart';
import 'package:avocado_client/utils.dart';

class AuthServiceImpl implements AuthService {


  final GoogleSignIn _googleSignIn = GoogleSignIn();

  final FacebookLogin _facebookSignIn = new FacebookLogin();

  final FirebaseAuth _auth = FirebaseAuth.instance;

  AuthServiceImpl();

  @override
  Stream<ProfileInfo> get profile {
    return _auth.onAuthStateChanged
        .map((user)=> user != null ? new ProfileInfo(
            key:user.uid,
            hashtags:[],
            image:user.photoUrl,
            displayName:user.displayName
    ) : null);
  }

  @override
  Future signInWithFacebook() async {
    try {
      final FacebookLoginResult result =
          await _facebookSignIn.logInWithReadPermissions(['email']);

      switch (result.status) {
        case FacebookLoginStatus.loggedIn:
          final FacebookAccessToken accessToken = result.accessToken;
          this._auth.signInWithCredential(GoogleAuthProvider.getCredential(
            accessToken: accessToken.token,
            idToken: "",
          ));
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
  Future signInWithGoogle() async {
    try {
      final GoogleSignInAccount googleUser = await _googleSignIn.signIn();
      final GoogleSignInAuthentication googleAuth =
          await googleUser.authentication;
      await this._auth.signInWithCredential(GoogleAuthProvider.getCredential(
        accessToken: googleAuth.accessToken,
        idToken: googleAuth.idToken,
      ));
    } catch (e) {
      logError("Failed ot login with google", e);
    }
  }

  @override
  Future signOut() async {

  }




}