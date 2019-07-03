import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'posts.g.dart';


abstract class PostActions extends ReduxActions {

  PostActions._();
  factory PostActions() => new _$PostActions();

  ActionDispatcher<EntityPayload<PostInfo>> set;
  ActionDispatcher<EntitiesPayload<PostInfo>> setMany;
  ActionDispatcher<EntityPayload<PostInfo>> remove;

  PostEvents events;

}

abstract class PostEvents extends ReduxActions {

  ActionDispatcher<EventPayload> load;
  ActionDispatcher<EventPayload> unload;


  PostEvents._();
  factory PostEvents() => new _$PostEvents();
}
