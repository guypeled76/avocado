import 'package:avocado_common/common.dart';
import 'package:built_redux/built_redux.dart';
import 'package:built_redux_rx/built_redux_rx.dart';

import 'container.dart';

abstract class StoreService implements ServiceContainer {
  Store<AppState, AppStateBuilder, AppActions> _store = null;

  StoreService() {
    _store = new Store<AppState, AppStateBuilder, AppActions>(
        createAppReducer(this), // build returns a reducer function
        new AppState(),
        new AppActions(),
        middleware:
          <Middleware<AppState, AppStateBuilder, ReduxActions>>[
            createEpicMiddleware<AppState, AppStateBuilder, ReduxActions>([]
                ..addAll(createEpicBuilder(this))
                ..addAll(createClinicEpicBuilder(this))
            ),
          ]
        );
  }


  Stream<AppState> get state {
    return this._store.nextState;
  }

  AppActions get actions {
    return this._store.actions;
  }
}


