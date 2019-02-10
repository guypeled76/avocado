import 'package:flutter/material.dart';




class LoginPage extends StatelessWidget {



  LoginPage({Key key}) : super(key: key);


  void _authenticateWithFacebook() async {

  }

  void _authenticateWithGoogle() async {

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
