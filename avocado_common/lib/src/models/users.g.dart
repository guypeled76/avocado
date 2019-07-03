// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'users.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

UserInfo _$UserInfoFromJson(Map<String, dynamic> json) {
  return UserInfo(
      key: EntityInfo.undefinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      image: EntityInfo.undefinedToNull(json['image']),
      displayName: EntityInfo.undefinedToNull(json['displayName']));
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
      key: EntityInfo.undefinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      image: EntityInfo.undefinedToNull(json['image']),
      displayName: EntityInfo.undefinedToNull(json['displayName']),
      email: EntityInfo.undefinedToNull(json['email']));
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
