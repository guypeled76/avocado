import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  LoginPage({Key key}) : super(key: key);

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {




  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
        child: Center(
            child:RaisedButton(
              padding: const EdgeInsets.all(8.0),
              textColor: Colors.white,
              color: Colors.blue,
              onPressed: () => Navigator.of(context).pushReplacementNamed("/home"),
              child: new Text("Login"),
            )
        )
    );
  }
}