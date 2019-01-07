import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';

final GoogleSignIn googleSignIn = GoogleSignIn();




class LoginPage extends StatefulWidget {

  final FirebaseAuth _auth = FirebaseAuth.instance;

  LoginPage({Key key}) : super(key: key);

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {


  void _authenticateWithGoogle() async {
    final GoogleSignInAccount googleUser = await googleSignIn.signIn();
    final GoogleSignInAuthentication googleAuth =
    await googleUser.authentication;
    final FirebaseUser user = await
    widget._auth.signInWithGoogle(
      accessToken: googleAuth.accessToken,
      idToken: googleAuth.idToken,
    );
    // do something with signed-in user
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
        child: Center(
            child:RaisedButton(
              padding: const EdgeInsets.all(8.0),
              textColor: Colors.white,
              color: Colors.blue,
              onPressed: _authenticateWithGoogle,
              child: new Text("Login"),
            )
        )
    );
  }
}