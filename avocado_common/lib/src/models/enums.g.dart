// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'enums.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

const EntityType _$message = const EntityType._('message');
const EntityType _$post = const EntityType._('post');
const EntityType _$user = const EntityType._('user');
const EntityType _$notification = const EntityType._('notification');
const EntityType _$video = const EntityType._('video');

EntityType _$valueOf(String name) {
  switch (name) {
    case 'message':
      return _$message;
    case 'post':
      return _$post;
    case 'user':
      return _$user;
    case 'notification':
      return _$notification;
    case 'video':
      return _$video;
    default:
      throw new ArgumentError(name);
  }
}

final BuiltSet<EntityType> _$values =
    new BuiltSet<EntityType>(const <EntityType>[
  _$message,
  _$post,
  _$user,
  _$notification,
  _$video,
]);

Serializer<EntityType> _$entityTypeSerializer = new _$EntityTypeSerializer();

class _$EntityTypeSerializer implements PrimitiveSerializer<EntityType> {
  @override
  final Iterable<Type> types = const <Type>[EntityType];
  @override
  final String wireName = 'EntityType';

  @override
  Object serialize(Serializers serializers, EntityType object,
          {FullType specifiedType = FullType.unspecified}) =>
      object.name;

  @override
  EntityType deserialize(Serializers serializers, Object serialized,
          {FullType specifiedType = FullType.unspecified}) =>
      EntityType.valueOf(serialized as String);
}

// ignore_for_file: always_put_control_body_on_new_line,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
