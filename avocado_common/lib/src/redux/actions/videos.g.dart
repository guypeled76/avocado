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

  final ActionDispatcher<VideoInfo> update =
      new ActionDispatcher<VideoInfo>('VideoActions-update');
  final VideoEvents events = new VideoEvents();

  @override
  void setDispatcher(Dispatcher dispatcher) {
    update.setDispatcher(dispatcher);
    events.setDispatcher(dispatcher);
  }
}

class VideoActionsNames {
  static final ActionName<VideoInfo> update =
      new ActionName<VideoInfo>('VideoActions-update');
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
