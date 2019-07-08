import 'package:avocado_common/common.dart';

class AuthBLoC extends BaseBLoC {

    final AuthStore store;

    final Stream<ProfileInfo> profile;

    AuthBLoC(this.store) :
        profile = store.profile;


    void signInWithGoogle() {
        this.store.actions.signInWithGoogle(CommandPayload.empty);
    }

    void signInWithFacebook() {
        this.store.actions.signInWithFacebook(CommandPayload.empty);
    }

    void signOut() {
        this.store.actions.signOut(CommandPayload.empty);
    }

}