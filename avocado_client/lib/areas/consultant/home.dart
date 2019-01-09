import 'package:avocado_client/pages/pages.dart';
import 'package:avocado_client/dialogs/dialogs.dart';
import 'package:flutter/material.dart';


class ConsultantHomePage extends StatefulWidget {
  ConsultantHomePage({Key key}) : super(key: key);


  @override
  _ConsultantHomePageState createState() => _ConsultantHomePageState();
}

class _ConsultantHomePageState extends State<ConsultantHomePage> {

  final SearchDialog _delegate = SearchDialog();

  void _add() {

  }

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


