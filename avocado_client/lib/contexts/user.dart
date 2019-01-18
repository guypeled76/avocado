import 'package:avocado_client/models/info.dart';
import 'package:avocado_client/models/mocks.dart' as mocks;
import 'package:flutter/material.dart';
import 'package:rxdart/rxdart.dart';

class UserContext extends InheritedWidget {
  final UserStore store;

  UserContext({Key key, Widget child, this.store})
      : super(key: key, child: child);

  @override
  bool updateShouldNotify(InheritedWidget oldWidget) {
    return true;
  }
}

class UserStore {
  BehaviorSubject<List<PostInfo>> _posts;

  static UserStore of(BuildContext context) {
    UserContext userContext = context.inheritFromWidgetOfExactType(UserContext);
    return userContext.store;
  }

  Stream<List<PostInfo>> get pinned {
    return mocks.loadPinned();
  }

  Stream<List<PostInfo>> get posts {
    loadPosts();

    return _posts.asBroadcastStream();
  }

  void loadPosts() {
    if (_posts == null) {
      _posts = new BehaviorSubject(seedValue: []);
      _posts.addStream(mocks.loadPosts());
    }
  }

  void dispose() {
    _posts.close();
  }
}
