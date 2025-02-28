// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'app.dart';

// **************************************************************************
// BuiltReduxGenerator
// **************************************************************************

// ignore_for_file: avoid_classes_with_only_static_members
// ignore_for_file: annotate_overrides

class _$AppActions extends AppActions {
  factory _$AppActions() => new _$AppActions._();
  _$AppActions._() : super._();

  final ActionDispatcher<CommandPayload> initialize =
      new ActionDispatcher<CommandPayload>('AppActions-initialize');
  final ActionDispatcher<ErrorPayload> error =
      new ActionDispatcher<ErrorPayload>('AppActions-error');
  final AppEvents events = new AppEvents();
  final AuthActions auth = new AuthActions();
  final PostActions posts = new PostActions();
  final VideoActions videos = new VideoActions();
  final ClientsActions clients = new ClientsActions();
  final NotificationsActions notifications = new NotificationsActions();
  final WaterfallActions waterfalls = new WaterfallActions();

  @override
  void setDispatcher(Dispatcher dispatcher) {
    initialize.setDispatcher(dispatcher);
    error.setDispatcher(dispatcher);
    events.setDispatcher(dispatcher);
    auth.setDispatcher(dispatcher);
    posts.setDispatcher(dispatcher);
    videos.setDispatcher(dispatcher);
    clients.setDispatcher(dispatcher);
    notifications.setDispatcher(dispatcher);
    waterfalls.setDispatcher(dispatcher);
  }
}

class AppActionsNames {
  static final ActionName<CommandPayload> initialize =
      new ActionName<CommandPayload>('AppActions-initialize');
  static final ActionName<ErrorPayload> error =
      new ActionName<ErrorPayload>('AppActions-error');
}

class _$AppEvents extends AppEvents {
  factory _$AppEvents() => new _$AppEvents._();
  _$AppEvents._() : super._();

  final ActionDispatcher<EventPayload> close =
      new ActionDispatcher<EventPayload>('AppEvents-close');

  @override
  void setDispatcher(Dispatcher dispatcher) {
    close.setDispatcher(dispatcher);
  }
}

class AppEventsNames {
  static final ActionName<EventPayload> close =
      new ActionName<EventPayload>('AppEvents-close');
}
