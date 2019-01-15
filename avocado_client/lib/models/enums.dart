import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';


part 'enums.g.dart';

class NotificationType extends EnumClass {

  static Serializer<NotificationType> get serializer => _$notificationTypeSerializer;

  static const NotificationType comment = _$comment;
  static const NotificationType post = _$post;

  const NotificationType._(String name) : super(name);

  static BuiltSet<NotificationType> get values => _$values;
  static NotificationType valueOf(String name) => _$valueOf(name);
}

