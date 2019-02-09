import 'package:avocado_common/common.dart';

class ClientsStore {
  final AppStore _store;
  ClientsStore(this._store);

  Stream<ClientsState> get state {
    return this._store.state.map((state) => state.clients).distinct();
  }

  ClientsActions get actions {
    return this._store.actions.clients;
  }

  ClientsEvents get events {
    return this._store.actions.clients.events;
  }
}
