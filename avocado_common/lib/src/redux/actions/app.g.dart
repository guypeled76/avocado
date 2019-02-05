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

  final ActionDispatcher<Null> clear =
      new ActionDispatcher<Null>('AppActions-clear');
  final ClinicActions clinic = new ClinicActions();
  final ClientActions client = new ClientActions();

  @override
  void setDispatcher(Dispatcher dispatcher) {
    clear.setDispatcher(dispatcher);
    clinic.setDispatcher(dispatcher);
    client.setDispatcher(dispatcher);
  }
}

class AppActionsNames {
  static final ActionName<Null> clear =
      new ActionName<Null>('AppActions-clear');
}
