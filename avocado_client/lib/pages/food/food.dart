import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class FoodPage extends StatefulWidget {
  FoodPage({Key key}) : super(key: key);

  @override
  _FoodPageState createState() => _FoodPageState();
}

class _FoodPageState extends State<FoodPage> {


  @override
  Widget build(BuildContext context) {
    return Text("food");
  }
}


