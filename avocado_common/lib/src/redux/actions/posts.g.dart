// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'posts.dart';

// **************************************************************************
// BuiltReduxGenerator
// **************************************************************************

// ignore_for_file: avoid_classes_with_only_static_members
// ignore_for_file: annotate_overrides

class _$PostActions extends PostActions {
  factory _$PostActions() => new _$PostActions._();
  _$PostActions._() : super._();

  final ActionDispatcher<EntityPayload<PostInfo>> set =
      new ActionDispatcher<EntityPayload<PostInfo>>('PostActions-set');
  final ActionDispatcher<EntitiesPayload<PostInfo>> setMany =
      new ActionDispatcher<EntitiesPayload<PostInfo>>('PostActions-setMany');
  final ActionDispatcher<EntityPayload<PostInfo>> remove =
      new ActionDispatcher<EntityPayload<PostInfo>>('PostActions-remove');
  final PostEvents events = new PostEvents();

  @override
  void setDispatcher(Dispatcher dispatcher) {
    set.setDispatcher(dispatcher);
    setMany.setDispatcher(dispatcher);
    remove.setDispatcher(dispatcher);
    events.setDispatcher(dispatcher);
  }
}

class PostActionsNames {
  static final ActionName<EntityPayload<PostInfo>> set =
      new ActionName<EntityPayload<PostInfo>>('PostActions-set');
  static final ActionName<EntitiesPayload<PostInfo>> setMany =
      new ActionName<EntitiesPayload<PostInfo>>('PostActions-setMany');
  static final ActionName<EntityPayload<PostInfo>> remove =
      new ActionName<EntityPayload<PostInfo>>('PostActions-remove');
}

class _$PostEvents extends PostEvents {
  factory _$PostEvents() => new _$PostEvents._();
  _$PostEvents._() : super._();

  final ActionDispatcher<EventPayload> load =
      new ActionDispatcher<EventPayload>('PostEvents-load');
  final ActionDispatcher<EventPayload> unload =
      new ActionDispatcher<EventPayload>('PostEvents-unload');

  @override
  void setDispatcher(Dispatcher dispatcher) {
    load.setDispatcher(dispatcher);
    unload.setDispatcher(dispatcher);
  }
}

class PostEventsNames {
  static final ActionName<EventPayload> load =
      new ActionName<EventPayload>('PostEvents-load');
  static final ActionName<EventPayload> unload =
      new ActionName<EventPayload>('PostEvents-unload');
}
