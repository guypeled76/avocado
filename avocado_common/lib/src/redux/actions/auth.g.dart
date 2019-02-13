// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'auth.dart';

// **************************************************************************
// BuiltReduxGenerator
// **************************************************************************

// ignore_for_file: avoid_classes_with_only_static_members
// ignore_for_file: annotate_overrides

class _$AuthEvents extends AuthEvents {
  factory _$AuthEvents() => new _$AuthEvents._();
  _$AuthEvents._() : super._();

  final ActionDispatcher<EventPayload> signedOut =
      new ActionDispatcher<EventPayload>('AuthEvents-signedOut');
  final ActionDispatcher<SignedInPayload> signedIn =
      new ActionDispatcher<SignedInPayload>('AuthEvents-signedIn');
  final ActionDispatcher<EntityPayload<ProfileInfo>> profileChanged =
      new ActionDispatcher<EntityPayload<ProfileInfo>>(
          'AuthEvents-profileChanged');

  @override
  void setDispatcher(Dispatcher dispatcher) {
    signedOut.setDispatcher(dispatcher);
    signedIn.setDispatcher(dispatcher);
    profileChanged.setDispatcher(dispatcher);
  }
}

class AuthEventsNames {
  static final ActionName<EventPayload> signedOut =
      new ActionName<EventPayload>('AuthEvents-signedOut');
  static final ActionName<SignedInPayload> signedIn =
      new ActionName<SignedInPayload>('AuthEvents-signedIn');
  static final ActionName<EntityPayload<ProfileInfo>> profileChanged =
      new ActionName<EntityPayload<ProfileInfo>>('AuthEvents-profileChanged');
}

class _$AuthActions extends AuthActions {
  factory _$AuthActions() => new _$AuthActions._();
  _$AuthActions._() : super._();

  final ActionDispatcher<CommandPayload> signInWithGoogle =
      new ActionDispatcher<CommandPayload>('AuthActions-signInWithGoogle');
  final ActionDispatcher<CommandPayload> signInWithFacebook =
      new ActionDispatcher<CommandPayload>('AuthActions-signInWithFacebook');
  final ActionDispatcher<CommandPayload> signOut =
      new ActionDispatcher<CommandPayload>('AuthActions-signOut');
  final ActionDispatcher<EntityPayload<ProfileInfo>> set =
      new ActionDispatcher<EntityPayload<ProfileInfo>>('AuthActions-set');
  final AuthEvents events = new AuthEvents();

  @override
  void setDispatcher(Dispatcher dispatcher) {
    signInWithGoogle.setDispatcher(dispatcher);
    signInWithFacebook.setDispatcher(dispatcher);
    signOut.setDispatcher(dispatcher);
    set.setDispatcher(dispatcher);
    events.setDispatcher(dispatcher);
  }
}

class AuthActionsNames {
  static final ActionName<CommandPayload> signInWithGoogle =
      new ActionName<CommandPayload>('AuthActions-signInWithGoogle');
  static final ActionName<CommandPayload> signInWithFacebook =
      new ActionName<CommandPayload>('AuthActions-signInWithFacebook');
  static final ActionName<CommandPayload> signOut =
      new ActionName<CommandPayload>('AuthActions-signOut');
  static final ActionName<EntityPayload<ProfileInfo>> set =
      new ActionName<EntityPayload<ProfileInfo>>('AuthActions-set');
}
