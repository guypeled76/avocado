import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';
import 'info.dart';
import 'enums.dart';

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

  @nullable
  String get video;

  PostData._();
  factory PostData([updates(PostDataBuilder b)]) = _$PostData;
  static Serializer<PostData> get serializer => _$postDataSerializer;
}

abstract class UserData implements Built<UserData, UserDataBuilder>, UserInfo {
  UserData._();
  factory UserData([updates(UserDataBuilder b)]) = _$UserData;
  static Serializer<UserData> get serializer => _$userDataSerializer;
}

abstract class NotificationData implements Built<NotificationData, NotificationDataBuilder>, NotificationInfo {

  UserData get user;

  TargetData get target;

  NotificationData._();
  factory NotificationData([updates(NotificationDataBuilder b)]) = _$NotificationData;
  static Serializer<NotificationData> get serializer => _$notificationDataSerializer;
}


abstract class MessageData implements Built<MessageData, MessageDataBuilder>, MessageInfo {

  UserData get user;

  @nullable
  String get image;

  MessageData._();
  factory MessageData([updates(MessageDataBuilder b)]) = _$MessageData;
  static Serializer<MessageData> get serializer => _$messageDataSerializer;
}

abstract class TargetData implements Built<TargetData, TargetDataBuilder>, TargetInfo {
  TargetData._();
  factory TargetData([updates(TargetDataBuilder b)]) = _$TargetData;
  static Serializer<TargetData> get serializer => _$targetDataSerializer;
}
