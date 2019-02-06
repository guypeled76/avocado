import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'posts.g.dart';



abstract class ClientPostActions extends ReduxActions {

  ClientPostActions._();
  factory ClientPostActions() => new _$ClientPostActions();

  ActionDispatcher<EntityPayload<PostInfo>> set;
  ActionDispatcher<EntitiesPayload<PostInfo>> setMany;
  ActionDispatcher<EntityPayload<PostInfo>> remove;

  ActionDispatcher<CommandPayload> load;

}