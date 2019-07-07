import 'login.dart';
import 'signup.dart';
import 'package:flutter/material.dart';


class AuthPage extends StatefulWidget {
  AuthPage({Key key}) : super(key: key);


  @override
  _AuthPageState createState() => _AuthPageState();
}

class _AuthPageState extends State<AuthPage> {

  PageController _controller = new PageController(initialPage: 0, viewportFraction: 1.0);

  @override
  Widget build(BuildContext context) {
    return PageView(
      controller: _controller,
      physics: new AlwaysScrollableScrollPhysics(),
      children: <Widget>[
        LoginPage(),
        SignupPage()
      ],
      scrollDirection: Axis.horizontal,
    );
  }

}

