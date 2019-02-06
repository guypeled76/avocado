// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'app.dart';

// **************************************************************************
// BuiltReduxGenerator
// **************************************************************************

// ignore_for_file: avoid_classes_with_only_static_members
// ignore_for_file: annotate_overrides

class _$AppActions extends AppActions {
  factory _$AppActions() => new _$AppActions._();
  _$AppActions._() : super._();

  final ClinicActions clinic = new ClinicActions();
  final ClientActions client = new ClientActions();

  @override
  void setDispatcher(Dispatcher dispatcher) {
    clinic.setDispatcher(dispatcher);
    client.setDispatcher(dispatcher);
  }
}

class AppActionsNames {}

class _$AppEvents extends AppEvents {
  factory _$AppEvents() => new _$AppEvents._();
  _$AppEvents._() : super._();

  final ActionDispatcher<EventPayload> close =
      new ActionDispatcher<EventPayload>('AppEvents-close');

  @override
  void setDispatcher(Dispatcher dispatcher) {
    close.setDispatcher(dispatcher);
  }
}

class AppEventsNames {
  static final ActionName<EventPayload> close =
      new ActionName<EventPayload>('AppEvents-close');
}
