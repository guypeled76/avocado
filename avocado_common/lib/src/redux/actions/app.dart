import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';
import 'index.dart';

part 'app.g.dart';

abstract class AppActions extends ReduxActions {

  AppEvents events;
  ClinicActions clinic;
  ClientActions client;

  PostActions posts;
  VideoActions videos;


  AppActions._();
  factory AppActions() => new _$AppActions();
}

abstract class AppEvents extends ReduxActions {



  ClinicEvents events;


  ActionDispatcher<EventPayload> close;



  AppEvents._();
  factory AppEvents() => new _$AppEvents();
}