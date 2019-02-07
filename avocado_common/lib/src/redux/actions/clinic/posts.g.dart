// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'posts.dart';

// **************************************************************************
// BuiltReduxGenerator
// **************************************************************************

// ignore_for_file: avoid_classes_with_only_static_members
// ignore_for_file: annotate_overrides

class _$ClinicPostActions extends ClinicPostActions {
  factory _$ClinicPostActions() => new _$ClinicPostActions._();
  _$ClinicPostActions._() : super._();

  final ActionDispatcher<EntityPayload<PostInfo>> set =
      new ActionDispatcher<EntityPayload<PostInfo>>('ClinicPostActions-set');
  final ActionDispatcher<EntitiesPayload<PostInfo>> setMany =
      new ActionDispatcher<EntitiesPayload<PostInfo>>(
          'ClinicPostActions-setMany');
  final ActionDispatcher<EntityPayload<PostInfo>> remove =
      new ActionDispatcher<EntityPayload<PostInfo>>('ClinicPostActions-remove');
  final ClinicPostEvents events = new ClinicPostEvents();

  @override
  void setDispatcher(Dispatcher dispatcher) {
    set.setDispatcher(dispatcher);
    setMany.setDispatcher(dispatcher);
    remove.setDispatcher(dispatcher);
    events.setDispatcher(dispatcher);
  }
}

class ClinicPostActionsNames {
  static final ActionName<EntityPayload<PostInfo>> set =
      new ActionName<EntityPayload<PostInfo>>('ClinicPostActions-set');
  static final ActionName<EntitiesPayload<PostInfo>> setMany =
      new ActionName<EntitiesPayload<PostInfo>>('ClinicPostActions-setMany');
  static final ActionName<EntityPayload<PostInfo>> remove =
      new ActionName<EntityPayload<PostInfo>>('ClinicPostActions-remove');
}

class _$ClinicPostEvents extends ClinicPostEvents {
  factory _$ClinicPostEvents() => new _$ClinicPostEvents._();
  _$ClinicPostEvents._() : super._();

  final ActionDispatcher<EventPayload> load =
      new ActionDispatcher<EventPayload>('ClinicPostEvents-load');

  @override
  void setDispatcher(Dispatcher dispatcher) {
    load.setDispatcher(dispatcher);
  }
}

class ClinicPostEventsNames {
  static final ActionName<EventPayload> load =
      new ActionName<EventPayload>('ClinicPostEvents-load');
}
