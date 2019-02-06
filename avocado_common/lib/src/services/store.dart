import 'package:avocado_common/common.dart';
import 'package:built_redux/built_redux.dart';
import 'package:built_redux_rx/built_redux_rx.dart';
import 'package:rxdart/rxdart.dart';

import 'container.dart';

abstract class StoreService implements ServiceContainer {

  AppStore _store;

  StoreService() {
    _store = AppStore(this);
  }

  AppStore get store {
    return this._store;
  }

}

class AppStore {
  Store<AppState, AppStateBuilder, AppActions> _store;
  ClientStore _clientStore;
  ClinicStore _clinicStore;

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
          ),
        ]
    );

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
    return this._store.nextState;
  }

  AppActions get actions {
    return this._store.actions;
  }
}

class ClientStore {
  final AppStore _store;
  ClientStore(this._store);

  Stream<ClientState> get state {
    return this._store.state.map((state) => state.client).distinct();
  }

  ClientActions get actions {
    return this._store.actions.client;
  }

  ClientEvents get events {
    return this._store.actions.client.events;
  }
}

class ClinicStore {
  final AppStore _store;
  ClinicStore(this._store);

  Stream<ClinicState> get state {
    return this._store.state.map((state) => state.clinic).distinct();
  }

  ClinicActions get actions {
    return this._store.actions.clinic;
  }

  ClinicEvents get events {
    return this._store.actions.clinic.events;
  }
}


