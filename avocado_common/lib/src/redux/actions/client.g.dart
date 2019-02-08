// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'client.dart';

// **************************************************************************
// BuiltReduxGenerator
// **************************************************************************

// ignore_for_file: avoid_classes_with_only_static_members
// ignore_for_file: annotate_overrides

class _$ClientEvents extends ClientEvents {
  factory _$ClientEvents() => new _$ClientEvents._();
  _$ClientEvents._() : super._();

  @override
  void setDispatcher(Dispatcher dispatcher) {}
}

class ClientEventsNames {}

class _$ClientActions extends ClientActions {
  factory _$ClientActions() => new _$ClientActions._();
  _$ClientActions._() : super._();

  final ActionDispatcher<ProfileInfo> set =
      new ActionDispatcher<ProfileInfo>('ClientActions-set');
  final ClientEvents events = new ClientEvents();

  @override
  void setDispatcher(Dispatcher dispatcher) {
    set.setDispatcher(dispatcher);
    events.setDispatcher(dispatcher);
  }
}

class ClientActionsNames {
  static final ActionName<ProfileInfo> set =
      new ActionName<ProfileInfo>('ClientActions-set');
}
