// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'clients.dart';

// **************************************************************************
// BuiltReduxGenerator
// **************************************************************************

// ignore_for_file: avoid_classes_with_only_static_members
// ignore_for_file: annotate_overrides

class _$ClientsEvents extends ClientsEvents {
  factory _$ClientsEvents() => new _$ClientsEvents._();
  _$ClientsEvents._() : super._();

  @override
  void setDispatcher(Dispatcher dispatcher) {}
}

class ClientsEventsNames {}

class _$ClientsActions extends ClientsActions {
  factory _$ClientsActions() => new _$ClientsActions._();
  _$ClientsActions._() : super._();

  final ActionDispatcher<ProfileInfo> set =
      new ActionDispatcher<ProfileInfo>('ClientsActions-set');
  final ClientsEvents events = new ClientsEvents();

  @override
  void setDispatcher(Dispatcher dispatcher) {
    set.setDispatcher(dispatcher);
    events.setDispatcher(dispatcher);
  }
}

class ClientsActionsNames {
  static final ActionName<ProfileInfo> set =
      new ActionName<ProfileInfo>('ClientsActions-set');
}
