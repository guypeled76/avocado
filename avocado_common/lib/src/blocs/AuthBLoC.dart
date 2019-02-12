import 'package:avocado_common/common.dart';
import 'package:rxdart/rxdart.dart';

class AuthBLoC extends BaseBLoC {

    final AuthStore _store;

    final Stream<ProfileInfo> profile;


    AuthBLoC(this._store) :
        profile = _store.profile;





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