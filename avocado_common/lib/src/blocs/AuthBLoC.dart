import 'package:avocado_common/common.dart';

class AuthBLoC extends BaseBLoC {

    final AuthStore _store;

    AuthBLoC(this._store);

    Stream<ProfileInfo> get profile {
      return this._store.profile;
    }

    void signInWithGoogle() {
        this._store.actions.signInWithGoogle(CommandPayload.empty);
    }

    void signInWithFacebook() {
        this._store.actions.signInWithFacebook(CommandPayload.empty);
    }

    void signOut() {
        this._store.actions.signOut(CommandPayload.empty);
    }

}