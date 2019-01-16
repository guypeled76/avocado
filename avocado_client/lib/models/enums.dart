import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';


part 'enums.g.dart';

class EntityType extends EnumClass {

  static Serializer<EntityType> get serializer => _$entityTypeSerializer;

  static const EntityType message = _$message;
  static const EntityType post = _$post;
  static const EntityType user = _$user;
  static const EntityType notification = _$notification;

  const EntityType._(String name) : super(name);

  static BuiltSet<EntityType> get values => _$values;
  static EntityType valueOf(String name) => _$valueOf(name);
}

