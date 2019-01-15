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

abstract class PostData implements Built<PostData, PostDataBuilder>, PostInfo {

  UserData get user;

  PostData._();
  factory PostData([updates(PostDataBuilder b)]) = _$PostData;
  static Serializer<PostData> get serializer => _$postDataSerializer;
}

abstract class UserData implements Built<UserData, UserDataBuilder>, UserInfo {
  UserData._();
  factory UserData([updates(UserDataBuilder b)]) = _$UserData;
  static Serializer<UserData> get serializer => _$userDataSerializer;
}

