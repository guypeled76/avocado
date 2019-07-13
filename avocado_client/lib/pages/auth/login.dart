import 'package:avocado_client/references/common.dart';
import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget {


  LoginPage({Key key}) : super(key: key);


  @override
  Widget build(BuildContext context) {

    AuthBLoC authBLoC = new AuthBLoC(ServiceScope.get<AuthStore>(context));

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
                      onPressed: authBLoC.signInWithGoogle,
                      child: new Text("Google Login"),
                    ),
                    RaisedButton(
                      padding: const EdgeInsets.all(8.0),
                      textColor: Colors.white,
                      color: Colors.blue,
                      onPressed: authBLoC.signInWithFacebook,
                      child: new Text("Facebook Login"),
                    )
                  ],
                ))));
  }
}
