import 'package:avocado_client/dialogs/testings.dart';
import 'package:avocado_client/dialogs/about.dart';
import 'package:avocado_client/services/auth.dart';
import 'package:avocado_client/services/provider.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class DrawerDialog extends StatefulWidget {
  DrawerDialog({Key key}) : super(key: key);

  @override
  _DrawerDialogState createState() => _DrawerDialogState();
}

class _DrawerDialogState extends State<DrawerDialog> {
  Future<void> _neverSatisfied() async {
    return showDialog<void>(
      barrierDismissible: false, // user must tap button!
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Rewind and remember'),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                Text('You will never be satisfied.'),
                Text('You\’re like me. I’m never satisfied.'),
              ],
            ),
          ),
          actions: <Widget>[
            FlatButton(
              child: Text('Regret'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  void _test() {
    _neverSatisfied();
  }

  @override
  Widget build(BuildContext context) {

    AuthContext authContext = ServiceProvider.get<AuthContext>(context);


    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: <Widget>[
          UserAccountsDrawerHeader(
            accountName: Text(
              authContext.displayName,
            ),
            accountEmail: Text(
              authContext.email,
            ),
            currentAccountPicture: new CircleAvatar(
              backgroundImage: new CachedNetworkImageProvider(
                  authContext.photoUrl),
            ),
          ),
          new ListTile(
            title: Text(
              "Profile",
              style: TextStyle(fontWeight: FontWeight.w700, fontSize: 18.0),
            ),
            leading: Icon(
                Icons.person
            ),
            onTap: () {

              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => TestingDialog()),
              );
            },
          ),
          new ListTile(
            title: Text(
              "Shopping",
              style: TextStyle(fontWeight: FontWeight.w700, fontSize: 18.0),
            ),
            leading: Icon(
              Icons.shopping_cart,
              color: Colors.green,
            ),
          ),
          new ListTile(
            title: Text(
              "Switch",
              style: TextStyle(fontWeight: FontWeight.w700, fontSize: 18.0),
            ),
            leading: Icon(
              Icons.dashboard,
              color: Colors.red,
            ),
            onTap: () {

            },
          ),
          new ListTile(
            title: Text(
              "Logout",
              style: TextStyle(fontWeight: FontWeight.w700, fontSize: 18.0),
            ),
            leading: Icon(
              Icons.fullscreen_exit,
              color: Colors.cyan,
            ),
            onTap: () {
              FirebaseAuth.instance.signOut();
            },
          ),
          Divider(),
          new ListTile(
            title: Text(
              "Settings",
              style: TextStyle(fontWeight: FontWeight.w700, fontSize: 18.0),
            ),
            leading: Icon(
              Icons.settings,
              color: Colors.brown,
            ),
          ),
          Divider(),
          AboutWidget()
        ],
      ),
    );
  }
}
