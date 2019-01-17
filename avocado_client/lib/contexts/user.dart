import 'package:avocado_client/models/info.dart';
import 'package:avocado_client/models/mocks.dart';
import 'package:flutter/material.dart';
import 'package:rxdart/rxdart.dart';

class UserContext extends InheritedWidget {

  final UserStore store;



   UserContext({ Key key, Widget child, this.store })
      : super(key: key, child: child);

  @override
  bool updateShouldNotify(InheritedWidget oldWidget) {
    return true;
  }




}

class UserStore {
    final BehaviorSubject<List<PostInfo>> posts = new BehaviorSubject<List<PostInfo>>();

    static UserStore of(BuildContext context) {
      UserContext userContext = context.inheritFromWidgetOfExactType(UserContext);
      return userContext.store;
    }

    Stream<List<PostInfo>> getPinned() {
      return loadPinned();
    }

    Stream<List<PostInfo>> getPosts() {
      return loadPosts();
    }

    void dispose() {
      posts.close();
    }
}