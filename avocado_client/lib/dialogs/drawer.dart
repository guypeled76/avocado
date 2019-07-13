import 'package:avocado_client/dialogs/testings.dart';
import 'package:avocado_client/dialogs/about.dart';
import 'package:avocado_client/references/common.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class DrawerDialog extends StatelessWidget {
  DrawerDialog({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    AuthBLoC auth = AuthBLoC(ServiceScope.get<AuthStore>(context));

    GraphQLService graphql = ServiceScope.get<GraphQLService>(context);

    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: <Widget>[
          StreamBuilder<ProfileInfo>(
              stream: auth.profile,
              builder: (context, snapshot) {

                ProfileInfo profile = snapshot.data;

                return UserAccountsDrawerHeader(
                  accountName: Text(
                    profile?.displayName ?? "n/a",
                  ),
                  accountEmail: Text(
                    profile?.email ?? "n/a",
                  ),
                  currentAccountPicture: new CircleAvatar(
                    backgroundImage: new CachedNetworkImageProvider(
                        profile?.image ?? ""),
                  ),
                );
              }),
          new ListTile(
            title: Text(
              "Profile",
              style: TextStyle(fontWeight: FontWeight.w700, fontSize: 18.0),
            ),
            leading: Icon(Icons.person),
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
            onTap: () async {

              String result = await graphql.query('''query { 
                currentUser {
                  id,
                  email,
                  image
                }
                users {
                  id,
                  name
                }
              }''');


              print(result);
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
