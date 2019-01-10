import 'package:avocado_client/pages/pages.dart';
import 'package:avocado_client/dialogs/dialogs.dart';
import 'package:flutter/material.dart';

class ClientHomePage extends StatefulWidget {
  ClientHomePage({Key key}) : super(key: key);

  @override
  _ClientHomePageState createState() => _ClientHomePageState();
}

class _ClientHomePageState extends State<ClientHomePage> {
  void _add() {}

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 5,
        child: Scaffold(
          drawer: DrawerDialog(),
          appBar: AppBar(
            title: Text('Avocado Clinik'),
            bottom: TabBar(tabs: [
              Tab(icon: Icon(Icons.home)),
              Tab(icon: Icon(Icons.timer)),
              Tab(icon: Icon(Icons.notifications)),
              Tab(icon: Icon(Icons.local_dining)),
              Tab(icon: Icon(Icons.chat)),
            ]),
            actions: <Widget>[
              IconButton(
                  icon: Icon(Icons.search),
                  onPressed: () => SearchDialog.show(context))
            ],
          ),
          body: TabBarView(
            children: [
              FeedPage(),
              TimelinePage(),
              NotificationsWidget(),
              FoodPage(),
              ChatPage(),
            ],
          ),
          floatingActionButton: FloatingActionButton(
            onPressed: _add,
            tooltip: 'Increment',
            child: Icon(Icons.mode_edit),
          ), // This trailing comma makes auto-formatting nicer for build methods.
        ));
  }
}
