import 'package:avocado_client/pages/tabs/chat.dart';
import 'package:avocado_client/pages/tabs/food.dart';
import 'package:avocado_client/pages/tabs/notifications.dart';
import 'package:avocado_client/pages/tabs/timeline.dart';
import 'package:avocado_client/pages/tabs/feed.dart';
import 'package:avocado_client/dialogs/drawer.dart';
import 'package:flutter/material.dart';


class HomePage extends StatefulWidget {
  HomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {


  void _add() {

  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 5,
        child: Scaffold(
          drawer: DrawerPage(),
          appBar: AppBar(
              title: Text(widget.title),
              bottom: TabBar(tabs: [
                Tab(icon: Icon(Icons.home)),
                Tab(icon: Icon(Icons.timer)),
                Tab(icon: Icon(Icons.notifications)),
                Tab(icon: Icon(Icons.local_dining)),
                Tab(icon: Icon(Icons.chat)),
              ])),
          body: TabBarView(
            children: [
              FeedPage(),
              TimelinePage(),
              NotificationsPage(),
              FoodPage(),
              ChatPage(),
            ],
          ),
          floatingActionButton: FloatingActionButton(
            onPressed: _add,
            tooltip: 'Increment',
            child: Icon(Icons.add),
          ), // This trailing comma makes auto-formatting nicer for build methods.
        ));
  }
}

