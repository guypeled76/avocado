import 'package:flutter/material.dart';


class AboutWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return AboutListTile(
      applicationIcon: FlutterLogo(
        colors: Colors.yellow,
      ),
      icon: FlutterLogo(
        colors: Colors.yellow,
      ),
      aboutBoxChildren: <Widget>[
        SizedBox(
          height: 10.0,
        ),
        Text(
          "Developed By Lital And Guy Peled",
        ),
        Text(
          "Gremlin",
        ),
      ],
      applicationName: "Avocado Client",
      applicationVersion: "1.0.1",
    );
  }
}
