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

  @override
  void setDispatcher(Dispatcher dispatcher) {}
}

class AuthEventsNames {}

class _$AuthActions extends AuthActions {
  factory _$AuthActions() => new _$AuthActions._();
  _$AuthActions._() : super._();

  final ActionDispatcher<ProfileInfo> set =
      new ActionDispatcher<ProfileInfo>('AuthActions-set');
  final AuthEvents events = new AuthEvents();

  @override
  void setDispatcher(Dispatcher dispatcher) {
    set.setDispatcher(dispatcher);
    events.setDispatcher(dispatcher);
  }
}

class AuthActionsNames {
  static final ActionName<ProfileInfo> set =
      new ActionName<ProfileInfo>('AuthActions-set');
}
