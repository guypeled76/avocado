import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'posts.g.dart';


abstract class ClinicPostActions extends ReduxActions {

  ClinicPostActions._();
  factory ClinicPostActions() => new _$ClinicPostActions();

  ActionDispatcher<EntityPayload<PostInfo>> set;
  ActionDispatcher<EntitiesPayload<PostInfo>> setMany;
  ActionDispatcher<EntityPayload<PostInfo>> remove;

  ActionDispatcher<CommandPayload> load;

}
