import 'package:flutter/material.dart';

class SignupPage extends StatelessWidget {
  SignupPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        color: Colors.white,
        child: Center(
            child: RaisedButton(
          padding: const EdgeInsets.all(8.0),
          textColor: Colors.white,
          color: Colors.blue,
          onPressed: () => Navigator.of(context).pushReplacementNamed("/home"),
          child: new Text("Singup"),
        )
        )
    );
  }
}
