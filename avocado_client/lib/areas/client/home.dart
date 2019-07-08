import 'package:avocado_client/pages/pages.dart';
import 'package:avocado_client/dialogs/dialogs.dart';
import 'package:avocado_client/services/scope.dart';
import 'package:avocado_common/common.dart';
import 'package:flutter/material.dart';

class ClientHomePage extends StatelessWidget {
  ClientHomePage({Key key}) : super(key: key);

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
          body: TabBarView(children: [
                  FeedPage(
                    bloc: FeedBLoC(ServiceScope.get<PostsStore>(context)),
                  ),
                  TimelinePage(),
                  NotificationsWidget(
                      bloc: NotificationsBLoC()
                  ),
                  FoodPage(),
                  ChatWidget(
                    bloc: ChatBLoC(
                        ServiceScope.get<ChatsStore>(context)["c1"]),
                  ),
                ]),
          floatingActionButton: FloatingActionButton(
            onPressed: (){},
            tooltip: 'Increment',
            child: Icon(Icons.mode_edit),
          ), // This trailing comma makes auto-formatting nicer for build methods.
        ));
  }
}
