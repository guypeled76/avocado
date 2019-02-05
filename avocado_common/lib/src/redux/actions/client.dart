import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'client.g.dart';


abstract class ClientActions extends ReduxActions {

  ClientActions._();
  factory ClientActions() => new _$ClientActions();


  ClientPostActions posts;
  ClientVideoActions videos;

  ActionDispatcher<ProfileInfo> set;

}