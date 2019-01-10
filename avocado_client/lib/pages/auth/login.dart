import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:flutter_facebook_login/flutter_facebook_login.dart';

final GoogleSignIn googleSignIn = GoogleSignIn();

final FacebookLogin facebookSignIn = new FacebookLogin();

class LoginPage extends StatelessWidget {

  final FirebaseAuth _auth = FirebaseAuth.instance;

  LoginPage({Key key}) : super(key: key);


  void _authenticateWithFacebook() async {
    final FacebookLoginResult result =
        await facebookSignIn.logInWithReadPermissions(['email']);

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
  }

  void _authenticateWithGoogle() async {
    final GoogleSignInAccount googleUser = await googleSignIn.signIn();
    final GoogleSignInAuthentication googleAuth =
        await googleUser.authentication;
    final FirebaseUser user = await this._auth.signInWithGoogle(
      accessToken: googleAuth.accessToken,
      idToken: googleAuth.idToken,
    );
    // do something with signed-in user
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
