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

  final ActionDispatcher<PostInfo> set =
      new ActionDispatcher<PostInfo>('ClinicPostActions-set');
  final ActionDispatcher<List<PostInfo>> setMany =
      new ActionDispatcher<List<PostInfo>>('ClinicPostActions-setMany');
  final ActionDispatcher<PostInfo> remove =
      new ActionDispatcher<PostInfo>('ClinicPostActions-remove');
  final ActionDispatcher<Null> load =
      new ActionDispatcher<Null>('ClinicPostActions-load');

  @override
  void setDispatcher(Dispatcher dispatcher) {
    set.setDispatcher(dispatcher);
    setMany.setDispatcher(dispatcher);
    remove.setDispatcher(dispatcher);
    load.setDispatcher(dispatcher);
  }
}

class ClinicPostActionsNames {
  static final ActionName<PostInfo> set =
      new ActionName<PostInfo>('ClinicPostActions-set');
  static final ActionName<List<PostInfo>> setMany =
      new ActionName<List<PostInfo>>('ClinicPostActions-setMany');
  static final ActionName<PostInfo> remove =
      new ActionName<PostInfo>('ClinicPostActions-remove');
  static final ActionName<Null> load =
      new ActionName<Null>('ClinicPostActions-load');
}

class _$ClientPostActions extends ClientPostActions {
  factory _$ClientPostActions() => new _$ClientPostActions._();
  _$ClientPostActions._() : super._();

  final ActionDispatcher<PostInfo> set =
      new ActionDispatcher<PostInfo>('ClientPostActions-set');
  final ActionDispatcher<List<PostInfo>> setMany =
      new ActionDispatcher<List<PostInfo>>('ClientPostActions-setMany');
  final ActionDispatcher<PostInfo> remove =
      new ActionDispatcher<PostInfo>('ClientPostActions-remove');
  final ActionDispatcher<Null> load =
      new ActionDispatcher<Null>('ClientPostActions-load');

  @override
  void setDispatcher(Dispatcher dispatcher) {
    set.setDispatcher(dispatcher);
    setMany.setDispatcher(dispatcher);
    remove.setDispatcher(dispatcher);
    load.setDispatcher(dispatcher);
  }
}

class ClientPostActionsNames {
  static final ActionName<PostInfo> set =
      new ActionName<PostInfo>('ClientPostActions-set');
  static final ActionName<List<PostInfo>> setMany =
      new ActionName<List<PostInfo>>('ClientPostActions-setMany');
  static final ActionName<PostInfo> remove =
      new ActionName<PostInfo>('ClientPostActions-remove');
  static final ActionName<Null> load =
      new ActionName<Null>('ClientPostActions-load');
}
