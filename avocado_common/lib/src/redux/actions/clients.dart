import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'clients.g.dart';

abstract class ClientsEvents extends ReduxActions {




  ClientsEvents._();
  factory ClientsEvents() => new _$ClientsEvents();
}

abstract class ClientsActions extends ReduxActions {

  ClientsActions._();
  factory ClientsActions() => new _$ClientsActions();

  ClientsEvents events;


  ActionDispatcher<ProfileInfo> set;

}