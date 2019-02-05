// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'info.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

EntityInfo _$EntityInfoFromJson(Map<String, dynamic> json) {
  return EntityInfo(
      key: EntityInfo._undifinedToNull(json['key']),
      type: _$enumDecode(_$EntityTypeEnumMap, json['type']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? []);
}

Map<String, dynamic> _$EntityInfoToJson(EntityInfo instance) {
  final val = <String, dynamic>{
    'key': instance.key,
    'type': _$EntityTypeEnumMap[instance.type],
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('hashtags', instance.hashtags);
  return val;
}

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
  EntityType.profile: 'profile',
  EntityType.clinic: 'clinic'
};

ClinicInfo _$ClinicInfoFromJson(Map<String, dynamic> json) {
  return ClinicInfo(
      key: EntityInfo._undifinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? []);
}

Map<String, dynamic> _$ClinicInfoToJson(ClinicInfo instance) {
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

TargetInfo _$TargetInfoFromJson(Map<String, dynamic> json) {
  return TargetInfo(
      key: EntityInfo._undifinedToNull(json['key']),
      type: _$enumDecode(_$EntityTypeEnumMap, json['type']));
}

Map<String, dynamic> _$TargetInfoToJson(TargetInfo instance) =>
    <String, dynamic>{
      'key': instance.key,
      'type': _$EntityTypeEnumMap[instance.type]
    };

PostInfo _$PostInfoFromJson(Map<String, dynamic> json) {
  return PostInfo(
      key: EntityInfo._undifinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      content: EntityInfo._undifinedToNull(json['content']),
      user: ContentInfo._jsonToUser(json['user'] as Map<String, dynamic>),
      date: DateTime.parse(json['date'] as String),
      image: EntityInfo._undifinedToNull(json['image']),
      video: EntityInfo._undifinedToNull(json['video']));
}

Map<String, dynamic> _$PostInfoToJson(PostInfo instance) {
  final val = <String, dynamic>{
    'key': instance.key,
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('hashtags', instance.hashtags);
  val['user'] = ContentInfo._userToJson(instance.user);
  val['date'] = instance.date.toIso8601String();
  val['content'] = instance.content;
  val['image'] = instance.image;
  val['video'] = instance.video;
  return val;
}

ImageContentInfo _$ImageContentInfoFromJson(Map<String, dynamic> json) {
  return ImageContentInfo(
      key: EntityInfo._undifinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      content: EntityInfo._undifinedToNull(json['content']),
      user: ContentInfo._jsonToUser(json['user'] as Map<String, dynamic>),
      date: DateTime.parse(json['date'] as String),
      image: EntityInfo._undifinedToNull(json['image']));
}

Map<String, dynamic> _$ImageContentInfoToJson(ImageContentInfo instance) {
  final val = <String, dynamic>{
    'key': instance.key,
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('hashtags', instance.hashtags);
  val['user'] = ContentInfo._userToJson(instance.user);
  val['date'] = instance.date.toIso8601String();
  val['content'] = instance.content;
  val['image'] = instance.image;
  return val;
}

VideoInfo _$VideoInfoFromJson(Map<String, dynamic> json) {
  return VideoInfo(
      key: EntityInfo._undifinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      content: EntityInfo._undifinedToNull(json['content']),
      user: ContentInfo._jsonToUser(json['user'] as Map<String, dynamic>),
      date: DateTime.parse(json['date'] as String),
      image: EntityInfo._undifinedToNull(json['image']),
      video: EntityInfo._undifinedToNull(json['video']));
}

Map<String, dynamic> _$VideoInfoToJson(VideoInfo instance) {
  final val = <String, dynamic>{
    'key': instance.key,
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('hashtags', instance.hashtags);
  val['user'] = ContentInfo._userToJson(instance.user);
  val['date'] = instance.date.toIso8601String();
  val['content'] = instance.content;
  val['image'] = instance.image;
  val['video'] = instance.video;
  return val;
}

NotificationInfo _$NotificationInfoFromJson(Map<String, dynamic> json) {
  return NotificationInfo(
      key: EntityInfo._undifinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      date: DateTime.parse(json['date'] as String),
      user: ContentInfo._jsonToUser(json['user'] as Map<String, dynamic>),
      content: EntityInfo._undifinedToNull(json['content']),
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
  val['user'] = ContentInfo._userToJson(instance.user);
  val['date'] = instance.date.toIso8601String();
  val['content'] = instance.content;
  val['target'] = NotificationInfo._targetToJson(instance.target);
  return val;
}

MessageInfo _$MessageInfoFromJson(Map<String, dynamic> json) {
  return MessageInfo(
      key: EntityInfo._undifinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      content: EntityInfo._undifinedToNull(json['content']),
      user: ContentInfo._jsonToUser(json['user'] as Map<String, dynamic>),
      date: DateTime.parse(json['date'] as String),
      image: EntityInfo._undifinedToNull(json['image']));
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
  val['user'] = ContentInfo._userToJson(instance.user);
  val['date'] = instance.date.toIso8601String();
  val['content'] = instance.content;
  val['image'] = instance.image;
  return val;
}

UserInfo _$UserInfoFromJson(Map<String, dynamic> json) {
  return UserInfo(
      key: EntityInfo._undifinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      image: EntityInfo._undifinedToNull(json['image']),
      displayName: EntityInfo._undifinedToNull(json['displayName']));
}

Map<String, dynamic> _$UserInfoToJson(UserInfo instance) {
  final val = <String, dynamic>{
    'key': instance.key,
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('hashtags', instance.hashtags);
  val['image'] = instance.image;
  val['displayName'] = instance.displayName;
  return val;
}

ProfileInfo _$ProfileInfoFromJson(Map<String, dynamic> json) {
  return ProfileInfo(
      key: EntityInfo._undifinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      image: EntityInfo._undifinedToNull(json['image']),
      displayName: EntityInfo._undifinedToNull(json['displayName']),
      email: EntityInfo._undifinedToNull(json['email']));
}

Map<String, dynamic> _$ProfileInfoToJson(ProfileInfo instance) {
  final val = <String, dynamic>{
    'key': instance.key,
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('hashtags', instance.hashtags);
  val['image'] = instance.image;
  val['displayName'] = instance.displayName;
  val['email'] = instance.email;
  return val;
}
