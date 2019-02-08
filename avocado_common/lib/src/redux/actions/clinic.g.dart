// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'clinic.dart';

// **************************************************************************
// BuiltReduxGenerator
// **************************************************************************

// ignore_for_file: avoid_classes_with_only_static_members
// ignore_for_file: annotate_overrides

class _$ClinicEvents extends ClinicEvents {
  factory _$ClinicEvents() => new _$ClinicEvents._();
  _$ClinicEvents._() : super._();

  final ActionDispatcher<EventPayload> postsPageLoaded =
      new ActionDispatcher<EventPayload>('ClinicEvents-postsPageLoaded');
  final ActionDispatcher<EventPayload> videosPageLoaded =
      new ActionDispatcher<EventPayload>('ClinicEvents-videosPageLoaded');

  @override
  void setDispatcher(Dispatcher dispatcher) {
    postsPageLoaded.setDispatcher(dispatcher);
    videosPageLoaded.setDispatcher(dispatcher);
  }
}

class ClinicEventsNames {
  static final ActionName<EventPayload> postsPageLoaded =
      new ActionName<EventPayload>('ClinicEvents-postsPageLoaded');
  static final ActionName<EventPayload> videosPageLoaded =
      new ActionName<EventPayload>('ClinicEvents-videosPageLoaded');
}

class _$ClinicActions extends ClinicActions {
  factory _$ClinicActions() => new _$ClinicActions._();
  _$ClinicActions._() : super._();

  final ActionDispatcher<EntityPayload<ClinicInfo>> set =
      new ActionDispatcher<EntityPayload<ClinicInfo>>('ClinicActions-set');

  @override
  void setDispatcher(Dispatcher dispatcher) {
    set.setDispatcher(dispatcher);
  }
}

class ClinicActionsNames {
  static final ActionName<EntityPayload<ClinicInfo>> set =
      new ActionName<EntityPayload<ClinicInfo>>('ClinicActions-set');
}
