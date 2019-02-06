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
  final ActionDispatcher<CommandPayload> load =
      new ActionDispatcher<CommandPayload>('ClinicPostActions-load');

  @override
  void setDispatcher(Dispatcher dispatcher) {
    set.setDispatcher(dispatcher);
    setMany.setDispatcher(dispatcher);
    remove.setDispatcher(dispatcher);
    load.setDispatcher(dispatcher);
  }
}

class ClinicPostActionsNames {
  static final ActionName<EntityPayload<PostInfo>> set =
      new ActionName<EntityPayload<PostInfo>>('ClinicPostActions-set');
  static final ActionName<EntitiesPayload<PostInfo>> setMany =
      new ActionName<EntitiesPayload<PostInfo>>('ClinicPostActions-setMany');
  static final ActionName<EntityPayload<PostInfo>> remove =
      new ActionName<EntityPayload<PostInfo>>('ClinicPostActions-remove');
  static final ActionName<CommandPayload> load =
      new ActionName<CommandPayload>('ClinicPostActions-load');
}

class _$ClientPostActions extends ClientPostActions {
  factory _$ClientPostActions() => new _$ClientPostActions._();
  _$ClientPostActions._() : super._();

  final ActionDispatcher<EntityPayload<PostInfo>> set =
      new ActionDispatcher<EntityPayload<PostInfo>>('ClientPostActions-set');
  final ActionDispatcher<EntitiesPayload<PostInfo>> setMany =
      new ActionDispatcher<EntitiesPayload<PostInfo>>(
          'ClientPostActions-setMany');
  final ActionDispatcher<EntityPayload<PostInfo>> remove =
      new ActionDispatcher<EntityPayload<PostInfo>>('ClientPostActions-remove');
  final ActionDispatcher<CommandPayload> load =
      new ActionDispatcher<CommandPayload>('ClientPostActions-load');

  @override
  void setDispatcher(Dispatcher dispatcher) {
    set.setDispatcher(dispatcher);
    setMany.setDispatcher(dispatcher);
    remove.setDispatcher(dispatcher);
    load.setDispatcher(dispatcher);
  }
}

class ClientPostActionsNames {
  static final ActionName<EntityPayload<PostInfo>> set =
      new ActionName<EntityPayload<PostInfo>>('ClientPostActions-set');
  static final ActionName<EntitiesPayload<PostInfo>> setMany =
      new ActionName<EntitiesPayload<PostInfo>>('ClientPostActions-setMany');
  static final ActionName<EntityPayload<PostInfo>> remove =
      new ActionName<EntityPayload<PostInfo>>('ClientPostActions-remove');
  static final ActionName<CommandPayload> load =
      new ActionName<CommandPayload>('ClientPostActions-load');
}
