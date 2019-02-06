import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'client.g.dart';

abstract class ClientEvents extends ReduxActions {




  ClientEvents._();
  factory ClientEvents() => new _$ClientEvents();
}

abstract class ClientActions extends ReduxActions {

  ClientActions._();
  factory ClientActions() => new _$ClientActions();

  ClientEvents events;
  ClientPostActions posts;
  ClientVideoActions videos;

  ActionDispatcher<ProfileInfo> set;

}