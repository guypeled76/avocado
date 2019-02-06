import 'package:avocado_common/common.dart';

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
