import 'package:avocado_client/services/scope.dart';
import 'package:avocado_common/common.dart';
import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget {


  LoginPage({Key key}) : super(key: key);


  void _authenticateWithFacebook(BuildContext context) async {
    ServiceScope.get<AuthService>(context).signInWithGoogle();
  }

  void _authenticateWithGoogle(BuildContext context) async {
    ServiceScope.get<AuthService>(context).signInWithGoogle();
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
                      onPressed: () {
                        _authenticateWithGoogle(context);
                      },
                      child: new Text("Google Login"),
                    ),
                    RaisedButton(
                      padding: const EdgeInsets.all(8.0),
                      textColor: Colors.white,
                      color: Colors.blue,
                      onPressed: () {
                        _authenticateWithFacebook(context);
                      },
                      child: new Text("Facebook Login"),
                    )
                  ],
                ))));
  }
}
