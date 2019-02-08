import 'package:avocado_common/common.dart';
import 'package:built_redux/built_redux.dart';
import 'package:built_redux_rx/built_redux_rx.dart';
import 'package:rxdart/rxdart.dart';

class AppStore {
  Store<AppState, AppStateBuilder, AppActions> _store;
  ClientStore _clientStore;
  ClinicStore _clinicStore;
  PostsStore _postsStore;

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
            ..addAll(createClinicEpicBuilder(container))
              ..add(logEpic)
          ),
        ]
    );

    _state = new BehaviorSubject()
      ..addStream(_store.nextState);
    _clientStore = ClientStore(this);
    _clinicStore = ClinicStore(this);
    _postsStore = PostsStore(this);
  }

  ClinicStore get clinicStore {
    return _clinicStore;
  }

  ClientStore get clientStore {
    return _clientStore;
  }


  PostsStore get postsStore {
    return _postsStore;
  }


  Observable<AppState> get state {
    return this._state;
  }

  AppActions get actions {
    return this._store.actions;
  }
}