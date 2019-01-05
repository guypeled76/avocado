import 'package:flutter/material.dart';

class FoodPage extends StatefulWidget {
  FoodPage({Key key}) : super(key: key);

  @override
  _FoodPageState createState() => _FoodPageState();
}

class _FoodPageState extends State<FoodPage> {


  @override
  Widget build(BuildContext context) {
    return Container(
        child: Center(
            child:RaisedButton(
        padding: const EdgeInsets.all(8.0),
      textColor: Colors.white,
      color: Colors.blue,
      onPressed: () => Navigator.of(context).pushReplacementNamed("/"),
      child: new Text("Logout"),
    )
        )
    );
  }
}


