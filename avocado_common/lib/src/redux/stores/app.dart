import 'package:avocado_common/common.dart';
import 'package:avocado_common/src/redux/middleware/index.dart';
import 'package:built_redux_saga/built_redux_saga.dart';
import 'package:built_redux/built_redux.dart';
import 'package:rxdart/rxdart.dart';

class AppStore {
  Store<AppState, AppStateBuilder, AppActions> _store;
  ClientsStore _clientsStore;
  PostsStore _postsStore;
  VideosStore _videosStore;
  NotificationsStore _notificationsStore;
  AuthStore _authStore;
  WaterfallsStore _waterfallsStore;
  ChatsStore _chatsStore;

  BehaviorSubject<AppState> _state;

  AppStore(ServiceProvider provider) {
    _store = new Store<AppState, AppStateBuilder, AppActions>(
        createAppReducer(provider), // build returns a reducer function
        new AppState(),
        new AppActions(),
        middleware:
        <Middleware<AppState, AppStateBuilder, AppActions>>[
          createSagaMiddleware<AppState, AppStateBuilder, AppActions>(<Iterable<Runnable>>[]
            ..add(logSaga(provider))
            ..add(authSaga(provider))
          )
        ]
    );

    _state = new BehaviorSubject()
      ..add(_store.state)
      ..addStream(_store.nextState);

    _clientsStore = ClientsStore(this);
    _postsStore = PostsStore(this);
    _notificationsStore = NotificationsStore(this);
    _videosStore = VideosStore(this);
    _authStore = AuthStore(this);
    _waterfallsStore = WaterfallsStore(this);
    _chatsStore = ChatsStore(this);
  }


  void initialize() {
    _store.actions.initialize(CommandPayload.empty);
  }


  AuthStore get authStore {
    return _authStore;
  }

  WaterfallsStore get waterfallsStore {
    return _waterfallsStore;
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

  ChatsStore get chatsStore {
    return _chatsStore;
  }

  Observable<AppState> get state {
    return this._state;
  }

  AppActions get actions {
    return this._store.actions;
  }
}