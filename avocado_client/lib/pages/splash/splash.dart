import 'package:flutter/material.dart';

class SplashPage extends StatefulWidget {
  SplashPage({Key key}) : super(key: key);

  @override
  _SplashPageState createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> {

  String text = "Splash";
  @override
  Widget build(BuildContext context) {
    return Container(
        color: Colors.white,
        child: Center(
            child: RaisedButton(
          onPressed: () {

            this.setState((){
              text += "f";

            });
          },
          padding: const EdgeInsets.all(8.0),
          textColor: Colors.white,
          color: Colors.blue,
          child: new Text(this.text),
        )));
  }
}
