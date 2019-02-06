// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'clinic.dart';

// **************************************************************************
// BuiltReduxGenerator
// **************************************************************************

// ignore_for_file: avoid_classes_with_only_static_members
// ignore_for_file: annotate_overrides

class _$ClinicActions extends ClinicActions {
  factory _$ClinicActions() => new _$ClinicActions._();
  _$ClinicActions._() : super._();

  final ActionDispatcher<EntityPayload<ClinicInfo>> set =
      new ActionDispatcher<EntityPayload<ClinicInfo>>('ClinicActions-set');
  final ClinicPostActions posts = new ClinicPostActions();
  final ClinicVideoActions videos = new ClinicVideoActions();

  @override
  void setDispatcher(Dispatcher dispatcher) {
    set.setDispatcher(dispatcher);
    posts.setDispatcher(dispatcher);
    videos.setDispatcher(dispatcher);
  }
}

class ClinicActionsNames {
  static final ActionName<EntityPayload<ClinicInfo>> set =
      new ActionName<EntityPayload<ClinicInfo>>('ClinicActions-set');
}
