// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'enums.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

const NotificationType _$comment = const NotificationType._('comment');
const NotificationType _$post = const NotificationType._('post');

NotificationType _$valueOf(String name) {
  switch (name) {
    case 'comment':
      return _$comment;
    case 'post':
      return _$post;
    default:
      throw new ArgumentError(name);
  }
}

final BuiltSet<NotificationType> _$values =
    new BuiltSet<NotificationType>(const <NotificationType>[
  _$comment,
  _$post,
]);

Serializer<NotificationType> _$notificationTypeSerializer =
    new _$NotificationTypeSerializer();

class _$NotificationTypeSerializer
    implements PrimitiveSerializer<NotificationType> {
  @override
  final Iterable<Type> types = const <Type>[NotificationType];
  @override
  final String wireName = 'NotificationType';

  @override
  Object serialize(Serializers serializers, NotificationType object,
          {FullType specifiedType = FullType.unspecified}) =>
      object.name;

  @override
  NotificationType deserialize(Serializers serializers, Object serialized,
          {FullType specifiedType = FullType.unspecified}) =>
      NotificationType.valueOf(serialized as String);
}

// ignore_for_file: always_put_control_body_on_new_line,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
