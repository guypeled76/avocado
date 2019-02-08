import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:avocado_common/common.dart';

part 'notifications.g.dart';


abstract class NotificationsState implements Built<NotificationsState, NotificationsStateBuilder> {


  BuiltMap<String, NotificationInfo> get map;


  NotificationsState._();
  factory NotificationsState([updates(NotificationsStateBuilder b)]) =>
      new _$NotificationsState((NotificationsStateBuilder b) => b);


  @memoized
  BuiltList<NotificationInfo> get ordered =>
      new BuiltList<NotificationInfo>(map.values);
}

