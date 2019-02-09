import 'package:avocado_common/common.dart';
import 'package:built_redux/built_redux.dart';
import 'package:built_redux_rx/built_redux_rx.dart';
import 'package:rxdart/rxdart.dart';

class AppStore {
  Store<AppState, AppStateBuilder, AppActions> _store;
  ClientsStore _clientsStore;
  PostsStore _postsStore;
  VideosStore _videosStore;
  NotificationsStore _notificationsStore;

  BehaviorSubject<AppState> _state;

  AppStore(ServiceContainer container) {
    _store = new Store<AppState, AppStateBuilder, AppActions>(
        createAppReducer(container), // build returns a reducer function
        new AppState(),
        new AppActions(),
        middleware:
        <Middleware<AppState, AppStateBuilder, AppActions>>[
          createEpicMiddleware<AppState, AppStateBuilder, AppActions>([]
            ..addAll(createEpicBuilder(container))
            ..addAll(createClinicPostsEpicBuilder(container))
              ..add(logEpic)
          ),
        ]
    );

    _state = new BehaviorSubject()
      ..addStream(_store.nextState);
    _clientsStore = ClientsStore(this);
    _postsStore = PostsStore(this);
    _notificationsStore = NotificationsStore(this);
    _videosStore = VideosStore(this);
  }


  ClientsStore get clientsStore {
    return _clientsStore;
  }

  PostsStore get postsStore {
    return _postsStore;
  }

  VideosStore get videosStore {
    return _videosStore;
  }

  NotificationsStore get notificationStore {
    return _notificationsStore;
  }

  Observable<AppState> get state {
    return this._state;
  }

  AppActions get actions {
    return this._store.actions;
  }
}