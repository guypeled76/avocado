import 'package:avocado_common/common.dart';
import 'package:built_redux/built_redux.dart';
import 'package:built_redux_rx/built_redux_rx.dart';
import 'package:rxdart/rxdart.dart';

class AppStore {
  Store<AppState, AppStateBuilder, AppActions> _store;
  ClientStore _clientStore;
  ClinicStore _clinicStore;
  BehaviorSubject<AppState> _state;

  AppStore(ServiceContainer container) {
    _store = new Store<AppState, AppStateBuilder, AppActions>(
        createAppReducer(container), // build returns a reducer function
        new AppState(),
        new AppActions(),
        middleware:
        <Middleware<AppState, AppStateBuilder, ReduxActions>>[
          createEpicMiddleware<AppState, AppStateBuilder, ReduxActions>([]
            ..addAll(createEpicBuilder(container))
            ..addAll(createClinicEpicBuilder(container))
              ..add(logEpic)
          ),
        ]
    );

    _state = new BehaviorSubject()
      ..addStream(_store.nextState);
    _clientStore = ClientStore(this);
    _clinicStore = ClinicStore(this);
  }

  ClinicStore get clinicStore {
    return _clinicStore;
  }

  ClientStore get clientStore {
    return _clientStore;
  }


  Observable<AppState> get state {
    return this._state;
  }

  AppActions get actions {
    return this._store.actions;
  }
}