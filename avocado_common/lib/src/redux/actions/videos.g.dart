// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'videos.dart';

// **************************************************************************
// BuiltReduxGenerator
// **************************************************************************

// ignore_for_file: avoid_classes_with_only_static_members
// ignore_for_file: annotate_overrides

class _$VideoActions extends VideoActions {
  factory _$VideoActions() => new _$VideoActions._();
  _$VideoActions._() : super._();

  final ActionDispatcher<EntityPayload<VideoInfo>> set =
      new ActionDispatcher<EntityPayload<VideoInfo>>('VideoActions-set');
  final ActionDispatcher<EntitiesPayload<VideoInfo>> setMany =
      new ActionDispatcher<EntitiesPayload<VideoInfo>>('VideoActions-setMany');
  final ActionDispatcher<EntityWithImageAndVideoPayload<VideoInfo>> update =
      new ActionDispatcher<EntityWithImageAndVideoPayload<VideoInfo>>(
          'VideoActions-update');
  final ActionDispatcher<EntityWithImageAndVideoPayload<VideoInfo>> create =
      new ActionDispatcher<EntityWithImageAndVideoPayload<VideoInfo>>(
          'VideoActions-create');
  final VideoEvents events = new VideoEvents();

  @override
  void setDispatcher(Dispatcher dispatcher) {
    set.setDispatcher(dispatcher);
    setMany.setDispatcher(dispatcher);
    update.setDispatcher(dispatcher);
    create.setDispatcher(dispatcher);
    events.setDispatcher(dispatcher);
  }
}

class VideoActionsNames {
  static final ActionName<EntityPayload<VideoInfo>> set =
      new ActionName<EntityPayload<VideoInfo>>('VideoActions-set');
  static final ActionName<EntitiesPayload<VideoInfo>> setMany =
      new ActionName<EntitiesPayload<VideoInfo>>('VideoActions-setMany');
  static final ActionName<EntityWithImageAndVideoPayload<VideoInfo>> update =
      new ActionName<EntityWithImageAndVideoPayload<VideoInfo>>(
          'VideoActions-update');
  static final ActionName<EntityWithImageAndVideoPayload<VideoInfo>> create =
      new ActionName<EntityWithImageAndVideoPayload<VideoInfo>>(
          'VideoActions-create');
}

class _$VideoEvents extends VideoEvents {
  factory _$VideoEvents() => new _$VideoEvents._();
  _$VideoEvents._() : super._();

  final ActionDispatcher<EventPayload> load =
      new ActionDispatcher<EventPayload>('VideoEvents-load');
  final ActionDispatcher<EventPayload> unload =
      new ActionDispatcher<EventPayload>('VideoEvents-unload');

  @override
  void setDispatcher(Dispatcher dispatcher) {
    load.setDispatcher(dispatcher);
    unload.setDispatcher(dispatcher);
  }
}

class VideoEventsNames {
  static final ActionName<EventPayload> load =
      new ActionName<EventPayload>('VideoEvents-load');
  static final ActionName<EventPayload> unload =
      new ActionName<EventPayload>('VideoEvents-unload');
}
