import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';
import 'index.dart';

part 'app.g.dart';

abstract class AppActions extends ReduxActions {

  AppEventsNames events;
  ClinicActions clinic;
  ClientActions client;




  AppActions._();
  factory AppActions() => new _$AppActions();
}

abstract class AppEvents extends ReduxActions {






  ActionDispatcher<EventPayload> close;



  AppEvents._();
  factory AppEvents() => new _$AppEvents();
}