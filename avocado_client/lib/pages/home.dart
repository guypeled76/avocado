import 'package:avocado_client/dialogs/search.dart';
import 'package:avocado_client/pages/chat/chat.dart';
import 'package:avocado_client/pages/food/food.dart';
import 'package:avocado_client/pages/notifications/notifications.dart';
import 'package:avocado_client/pages/timeline/timeline.dart';
import 'package:avocado_client/pages/feed/feed.dart';
import 'package:avocado_client/dialogs/drawer.dart';
import 'package:flutter/material.dart';


class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);


  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

  final AppSearchDelegate _delegate = AppSearchDelegate();

  void _add() {

  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 5,
        child: Scaffold(
          drawer: DrawerPage(),
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
                  onPressed:  () async {

                    final int selected = await showSearch<int>(
                      context: context,
                      delegate: _delegate,
                    );
                  }
                )
              ],
          ),
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
            child: Icon(Icons.mode_edit),
          ), // This trailing comma makes auto-formatting nicer for build methods.
        ));
  }
}


