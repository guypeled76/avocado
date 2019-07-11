import 'package:avocado_common/common.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:flutter_facebook_login/flutter_facebook_login.dart';

class AuthServiceForFlutter extends ServiceInstance implements AuthService {


  final GoogleSignIn _googleSignIn = GoogleSignIn();

  final FacebookLogin _facebookSignIn = new FacebookLogin();

  final FirebaseAuth _firebaseAuth = FirebaseAuth.instance;

  AuthServiceForFlutter();

  @override
  Stream<ProfileInfo> get profile {
    return _firebaseAuth.onAuthStateChanged
        .map((user)=> user != null ? new ProfileInfo(
            key:user.uid,
            email: user.email,
            hashtags:[],
            image:user.photoUrl,
            displayName:user.displayName
    ) : null);
  }

  @override
  Future signInWithFacebook() async {
    final FacebookLoginResult result =
    await _facebookSignIn.logInWithReadPermissions(['email']);

    switch (result.status) {
      case FacebookLoginStatus.loggedIn:
        final FacebookAccessToken accessToken = result.accessToken;
        return this._firebaseAuth.signInWithCredential(
            FacebookAuthProvider.getCredential(
                accessToken: accessToken.token
            )
        );
        break;
      case FacebookLoginStatus.cancelledByUser:
        break;
      case FacebookLoginStatus.error:
        break;
    }
  }

  @override
  Future signInWithGoogle() async {
    final GoogleSignInAccount googleUser = await _googleSignIn.signIn();
    final GoogleSignInAuthentication googleAuth = await googleUser.authentication;
    await this._firebaseAuth.signInWithCredential(
        GoogleAuthProvider.getCredential(
          accessToken: googleAuth.accessToken,
          idToken: googleAuth.idToken,
        )
    );
  }

  @override
  Future signOut() async {
    return this._firebaseAuth.signOut();
  }




}