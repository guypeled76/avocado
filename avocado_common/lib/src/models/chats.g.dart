// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'chats.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ChatInfo _$ChatInfoFromJson(Map<String, dynamic> json) {
  return ChatInfo(
      key: EntityInfo.undefinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? []);
}

Map<String, dynamic> _$ChatInfoToJson(ChatInfo instance) {
  final val = <String, dynamic>{
    'key': instance.key,
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('hashtags', instance.hashtags);
  return val;
}

MessageInfo _$MessageInfoFromJson(Map<String, dynamic> json) {
  return MessageInfo(
      key: EntityInfo.undefinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      content: EntityInfo.undefinedToNull(json['content']),
      user: EntityInfo.jsonToUser(json['user'] as Map<String, dynamic>),
      date: DateTime.parse(json['date'] as String),
      image: EntityInfo.undefinedToNull(json['image']));
}

Map<String, dynamic> _$MessageInfoToJson(MessageInfo instance) {
  final val = <String, dynamic>{
    'key': instance.key,
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('hashtags', instance.hashtags);
  val['user'] = EntityInfo.userToJson(instance.user);
  val['date'] = instance.date.toIso8601String();
  val['content'] = instance.content;
  val['image'] = instance.image;
  return val;
}
