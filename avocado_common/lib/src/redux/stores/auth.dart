import 'package:avocado_common/common.dart';

class AuthStore {
  final AppStore _store;
  AuthStore(this._store);

  Stream<AuthState> get state {
    return this._store.state.map((state) => state.auth).distinct();
  }

  Stream<ProfileInfo> get profile {
    return this.state.map((auth)=>auth.profile).distinct();
  }

  AuthActions get actions {
    return this._store.actions.auth;
  }

  AuthEvents get events {
    return this._store.actions.auth.events;
  }
}
