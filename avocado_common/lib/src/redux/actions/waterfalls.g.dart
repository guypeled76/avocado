// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'waterfalls.dart';

// **************************************************************************
// BuiltReduxGenerator
// **************************************************************************

// ignore_for_file: avoid_classes_with_only_static_members
// ignore_for_file: annotate_overrides

class _$WaterfallActions extends WaterfallActions {
  factory _$WaterfallActions() => new _$WaterfallActions._();
  _$WaterfallActions._() : super._();

  final ActionDispatcher<WaterfallInfo> update =
      new ActionDispatcher<WaterfallInfo>('WaterfallActions-update');
  final WaterfallEvents events = new WaterfallEvents();

  @override
  void setDispatcher(Dispatcher dispatcher) {
    update.setDispatcher(dispatcher);
    events.setDispatcher(dispatcher);
  }
}

class WaterfallActionsNames {
  static final ActionName<WaterfallInfo> update =
      new ActionName<WaterfallInfo>('WaterfallActions-update');
}

class _$WaterfallEvents extends WaterfallEvents {
  factory _$WaterfallEvents() => new _$WaterfallEvents._();
  _$WaterfallEvents._() : super._();

  final ActionDispatcher<EventPayload> load =
      new ActionDispatcher<EventPayload>('WaterfallEvents-load');
  final ActionDispatcher<EventPayload> unload =
      new ActionDispatcher<EventPayload>('WaterfallEvents-unload');

  @override
  void setDispatcher(Dispatcher dispatcher) {
    load.setDispatcher(dispatcher);
    unload.setDispatcher(dispatcher);
  }
}

class WaterfallEventsNames {
  static final ActionName<EventPayload> load =
      new ActionName<EventPayload>('WaterfallEvents-load');
  static final ActionName<EventPayload> unload =
      new ActionName<EventPayload>('WaterfallEvents-unload');
}
