// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'notifications.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

NotificationInfo _$NotificationInfoFromJson(Map<String, dynamic> json) {
  return NotificationInfo(
      key: EntityInfo.undefinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      date: DateTime.parse(json['date'] as String),
      user: EntityInfo.jsonToUser(json['user'] as Map<String, dynamic>),
      content: EntityInfo.undefinedToNull(json['content']),
      target: NotificationInfo._jsonToTarget(
          json['target'] as Map<String, dynamic>));
}

Map<String, dynamic> _$NotificationInfoToJson(NotificationInfo instance) {
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
  val['target'] = NotificationInfo._targetToJson(instance.target);
  return val;
}
