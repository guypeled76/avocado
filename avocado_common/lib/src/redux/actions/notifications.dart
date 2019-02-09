import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'notifications.g.dart';


abstract class NotificationsActions extends ReduxActions {

  NotificationsActions._();
  factory NotificationsActions() => new _$NotificationsActions();

  ActionDispatcher<EntityPayload<NotificationInfo>> set;
  ActionDispatcher<EntitiesPayload<NotificationInfo>> setMany;
  ActionDispatcher<EntityPayload<NotificationInfo>> remove;

  NotificationsEvents events;

}

abstract class NotificationsEvents extends ReduxActions {

  ActionDispatcher<EventPayload> load;
  ActionDispatcher<EventPayload> unload;


  NotificationsEvents._();
  factory NotificationsEvents() => new _$NotificationsEvents();
}
