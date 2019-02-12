import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'auth.g.dart';

abstract class AuthEvents extends ReduxActions {




  AuthEvents._();
  factory AuthEvents() => new _$AuthEvents();
}

abstract class AuthActions extends ReduxActions {

  AuthActions._();
  factory AuthActions() => new _$AuthActions();

  AuthEvents events;

  ActionDispatcher<CommandPayload> signInWithGoogle;

  ActionDispatcher<CommandPayload> signInWithFacebook;

  ActionDispatcher<CommandPayload> signOut;

  ActionDispatcher<EntityPayload<ProfileInfo>> set;

}