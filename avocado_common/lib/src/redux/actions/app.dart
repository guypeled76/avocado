import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';
import 'index.dart';

part 'app.g.dart';

abstract class AppActions extends ReduxActions {

  AppEvents events;

  AuthActions auth;
  PostActions posts;
  VideoActions videos;
  ClientsActions clients;
  NotificationsActions notifications;
  WaterfallActions waterfalls;

  ActionDispatcher<CommandPayload> initialize;
  ActionDispatcher<ErrorPayload> error;




  AppActions._();
  factory AppActions() => new _$AppActions();
}

abstract class AppEvents extends ReduxActions {



  ActionDispatcher<EventPayload> close;



  AppEvents._();
  factory AppEvents() => new _$AppEvents();
}