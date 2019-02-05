import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'posts.g.dart';


abstract class ClinicPostActions extends ReduxActions {

  ClinicPostActions._();
  factory ClinicPostActions() => new _$ClinicPostActions();

  ActionDispatcher<PostInfo> set;
  ActionDispatcher<List<PostInfo>> setMany;
  ActionDispatcher<PostInfo> remove;

  ActionDispatcher<Null> load;

}

abstract class ClientPostActions extends ReduxActions {

  ClientPostActions._();
  factory ClientPostActions() => new _$ClientPostActions();

  ActionDispatcher<PostInfo> update;

}