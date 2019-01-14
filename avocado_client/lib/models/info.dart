import 'data.dart';
import 'serializers.dart';

abstract class EntityInfo {

  String get key;

  static EntityInfo load(Object data) {
    return serializers.deserializeWith<EntityData>(EntityData.serializer, data);
  }

  static Object save(EntityInfo data) {
    return serializers.serializeWith(EntityData.serializer, data);
  }
}

abstract class ContentInfo implements EntityInfo {
  String get user;

  String get date;
}

abstract class PostInfo implements ContentInfo {

  String get image;

  String get content;
}