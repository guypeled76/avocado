// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'info.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

EntityInfo _$EntityInfoFromJson(Map<String, dynamic> json) {
  return EntityInfo(
      key: json['key'] as String,
      type: _$enumDecode(_$EntityTypeEnumMap, json['type']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? []);
}

Map<String, dynamic> _$EntityInfoToJson(EntityInfo instance) =>
    <String, dynamic>{
      'key': instance.key,
      'type': _$EntityTypeEnumMap[instance.type],
      'hashtags': instance.hashtags
    };

T _$enumDecode<T>(Map<T, dynamic> enumValues, dynamic source) {
  if (source == null) {
    throw ArgumentError('A value must be provided. Supported values: '
        '${enumValues.values.join(', ')}');
  }
  return enumValues.entries
      .singleWhere((e) => e.value == source,
          orElse: () => throw ArgumentError(
              '`$source` is not one of the supported values: '
              '${enumValues.values.join(', ')}'))
      .key;
}

const _$EntityTypeEnumMap = <EntityType, dynamic>{
  EntityType.message: 'message',
  EntityType.post: 'post',
  EntityType.user: 'user',
  EntityType.notification: 'notification',
  EntityType.video: 'video',
  EntityType.image: 'image',
  EntityType.profile: 'profile'
};

TargetInfo _$TargetInfoFromJson(Map<String, dynamic> json) {
  return TargetInfo(
      key: json['key'] as String,
      type: _$enumDecode(_$EntityTypeEnumMap, json['type']));
}

Map<String, dynamic> _$TargetInfoToJson(TargetInfo instance) =>
    <String, dynamic>{
      'key': instance.key,
      'type': _$EntityTypeEnumMap[instance.type]
    };

PostInfo _$PostInfoFromJson(Map<String, dynamic> json) {
  return PostInfo(
      key: json['key'] as String,
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      content: json['content'] as String,
      user: ContentInfo._jsonToUser(json['user'] as Map<String, dynamic>),
      date: DateTime.parse(json['date'] as String),
      image: json['image'] as String,
      video: json['video'] as String);
}

Map<String, dynamic> _$PostInfoToJson(PostInfo instance) => <String, dynamic>{
      'key': instance.key,
      'hashtags': instance.hashtags,
      'user': ContentInfo._userToJson(instance.user),
      'date': instance.date.toIso8601String(),
      'content': instance.content,
      'image': instance.image,
      'video': instance.video
    };

ImageContentInfo _$ImageContentInfoFromJson(Map<String, dynamic> json) {
  return ImageContentInfo(
      key: json['key'] as String,
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      content: json['content'] as String,
      user: ContentInfo._jsonToUser(json['user'] as Map<String, dynamic>),
      date: DateTime.parse(json['date'] as String),
      image: json['image'] as String);
}

Map<String, dynamic> _$ImageContentInfoToJson(ImageContentInfo instance) =>
    <String, dynamic>{
      'key': instance.key,
      'hashtags': instance.hashtags,
      'user': ContentInfo._userToJson(instance.user),
      'date': instance.date.toIso8601String(),
      'content': instance.content,
      'image': instance.image
    };

VideoInfo _$VideoInfoFromJson(Map<String, dynamic> json) {
  return VideoInfo(
      key: json['key'] as String,
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      content: json['content'] as String,
      user: ContentInfo._jsonToUser(json['user'] as Map<String, dynamic>),
      date: DateTime.parse(json['date'] as String),
      image: json['image'] as String,
      video: json['video'] as String);
}

Map<String, dynamic> _$VideoInfoToJson(VideoInfo instance) => <String, dynamic>{
      'key': instance.key,
      'hashtags': instance.hashtags,
      'user': ContentInfo._userToJson(instance.user),
      'date': instance.date.toIso8601String(),
      'content': instance.content,
      'image': instance.image,
      'video': instance.video
    };

NotificationInfo _$NotificationInfoFromJson(Map<String, dynamic> json) {
  return NotificationInfo(
      key: json['key'] as String,
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      date: DateTime.parse(json['date'] as String),
      user: ContentInfo._jsonToUser(json['user'] as Map<String, dynamic>),
      content: json['content'] as String,
      target: NotificationInfo._jsonToTarget(
          json['target'] as Map<String, dynamic>));
}

Map<String, dynamic> _$NotificationInfoToJson(NotificationInfo instance) =>
    <String, dynamic>{
      'key': instance.key,
      'hashtags': instance.hashtags,
      'user': ContentInfo._userToJson(instance.user),
      'date': instance.date.toIso8601String(),
      'content': instance.content,
      'target': NotificationInfo._targetToJson(instance.target)
    };

MessageInfo _$MessageInfoFromJson(Map<String, dynamic> json) {
  return MessageInfo(
      key: json['key'] as String,
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      content: json['content'] as String,
      user: ContentInfo._jsonToUser(json['user'] as Map<String, dynamic>),
      date: DateTime.parse(json['date'] as String),
      image: json['image'] as String);
}

Map<String, dynamic> _$MessageInfoToJson(MessageInfo instance) =>
    <String, dynamic>{
      'key': instance.key,
      'hashtags': instance.hashtags,
      'user': ContentInfo._userToJson(instance.user),
      'date': instance.date.toIso8601String(),
      'content': instance.content,
      'image': instance.image
    };

UserInfo _$UserInfoFromJson(Map<String, dynamic> json) {
  return UserInfo(
      key: json['key'] as String,
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      image: json['image'] as String,
      displayName: json['displayName'] as String);
}

Map<String, dynamic> _$UserInfoToJson(UserInfo instance) => <String, dynamic>{
      'key': instance.key,
      'hashtags': instance.hashtags,
      'image': instance.image,
      'displayName': instance.displayName
    };

ProfileInfo _$ProfileInfoFromJson(Map<String, dynamic> json) {
  return ProfileInfo(
      key: json['key'] as String,
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      image: json['image'] as String,
      displayName: json['displayName'] as String,
      email: json['email'] as String);
}

Map<String, dynamic> _$ProfileInfoToJson(ProfileInfo instance) =>
    <String, dynamic>{
      'key': instance.key,
      'hashtags': instance.hashtags,
      'image': instance.image,
      'displayName': instance.displayName,
      'email': instance.email
    };
