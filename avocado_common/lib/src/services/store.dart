import 'package:avocado_common/common.dart';

import 'container.dart';

abstract class StoreService implements ServiceContainer {

  AppStore _store;

  StoreService() {
    _store = AppStore(this);
  }

  AppStore get store {
    return this._store;
  }

  ClientStore get clientStore {
    return this._store.clientStore;
  }

  ClinicStore get clinicStore {
    return this._store.clinicStore;
  }
}








