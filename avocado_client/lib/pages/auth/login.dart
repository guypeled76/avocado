import 'package:avocado_client/utils.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:flutter_facebook_login/flutter_facebook_login.dart';



class LoginPage extends StatelessWidget {

  final GoogleSignIn _googleSignIn = GoogleSignIn();

  final FacebookLogin _facebookSignIn = new FacebookLogin();

  final FirebaseAuth _auth = FirebaseAuth.instance;

  LoginPage({Key key}) : super(key: key);


  void _authenticateWithFacebook() async {
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

  void _authenticateWithGoogle() async {
    try {
      final GoogleSignInAccount googleUser = await _googleSignIn.signIn();
      final GoogleSignInAuthentication googleAuth =
      await googleUser.authentication;
      final FirebaseUser user = await this._auth.signInWithGoogle(
        accessToken: googleAuth.accessToken,
        idToken: googleAuth.idToken,
      );
    } catch (e) {
      logError("Failed ot login with google", e);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        color: Colors.white,
        child: Scaffold(
            appBar: AppBar(
              title: Text("Login"),
            ),
            body: Center(
                child: Column(
              children: <Widget>[
                RaisedButton(
                  padding: const EdgeInsets.all(8.0),
                  textColor: Colors.white,
                  color: Colors.blue,
                  onPressed: _authenticateWithGoogle,
                  child: new Text("Google Login"),
                ),
                RaisedButton(
                  padding: const EdgeInsets.all(8.0),
                  textColor: Colors.white,
                  color: Colors.blue,
                  onPressed: _authenticateWithFacebook,
                  child: new Text("Facebook Login"),
                )
              ],
            ))));
  }
}
