// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'notifications.dart';

// **************************************************************************
// BuiltReduxGenerator
// **************************************************************************

// ignore_for_file: avoid_classes_with_only_static_members
// ignore_for_file: annotate_overrides

class _$NotificationsActions extends NotificationsActions {
  factory _$NotificationsActions() => new _$NotificationsActions._();
  _$NotificationsActions._() : super._();

  final ActionDispatcher<EntityPayload<NotificationInfo>> set =
      new ActionDispatcher<EntityPayload<NotificationInfo>>(
          'NotificationsActions-set');
  final ActionDispatcher<EntitiesPayload<NotificationInfo>> setMany =
      new ActionDispatcher<EntitiesPayload<NotificationInfo>>(
          'NotificationsActions-setMany');
  final ActionDispatcher<EntityPayload<NotificationInfo>> remove =
      new ActionDispatcher<EntityPayload<NotificationInfo>>(
          'NotificationsActions-remove');
  final NotificationsEvents events = new NotificationsEvents();

  @override
  void setDispatcher(Dispatcher dispatcher) {
    set.setDispatcher(dispatcher);
    setMany.setDispatcher(dispatcher);
    remove.setDispatcher(dispatcher);
    events.setDispatcher(dispatcher);
  }
}

class NotificationsActionsNames {
  static final ActionName<EntityPayload<NotificationInfo>> set =
      new ActionName<EntityPayload<NotificationInfo>>(
          'NotificationsActions-set');
  static final ActionName<EntitiesPayload<NotificationInfo>> setMany =
      new ActionName<EntitiesPayload<NotificationInfo>>(
          'NotificationsActions-setMany');
  static final ActionName<EntityPayload<NotificationInfo>> remove =
      new ActionName<EntityPayload<NotificationInfo>>(
          'NotificationsActions-remove');
}

class _$NotificationsEvents extends NotificationsEvents {
  factory _$NotificationsEvents() => new _$NotificationsEvents._();
  _$NotificationsEvents._() : super._();

  final ActionDispatcher<EventPayload> load =
      new ActionDispatcher<EventPayload>('NotificationsEvents-load');
  final ActionDispatcher<EventPayload> unload =
      new ActionDispatcher<EventPayload>('NotificationsEvents-unload');

  @override
  void setDispatcher(Dispatcher dispatcher) {
    load.setDispatcher(dispatcher);
    unload.setDispatcher(dispatcher);
  }
}

class NotificationsEventsNames {
  static final ActionName<EventPayload> load =
      new ActionName<EventPayload>('NotificationsEvents-load');
  static final ActionName<EventPayload> unload =
      new ActionName<EventPayload>('NotificationsEvents-unload');
}
