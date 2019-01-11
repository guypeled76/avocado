import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';
import 'info.dart';

part 'data.g.dart';

abstract class EntityData implements Built<EntityData, EntityDataBuilder>, EntityInfo {
  EntityData._();
  factory EntityData([updates(EntityDataBuilder b)]) = _$EntityData;
  static Serializer<EntityData> get serializer => _$entityDataSerializer;
}

abstract class ContentData implements Built<ContentData, ContentDataBuilder>, ContentInfo {
  ContentData._();
  factory ContentData([updates(ContentDataBuilder b)]) = _$ContentData;
  static Serializer<ContentData> get serializer => _$contentDataSerializer;
}

