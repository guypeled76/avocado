// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'entities.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

EntityInfo _$EntityInfoFromJson(Map<String, dynamic> json) {
  return EntityInfo(
      key: EntityInfo.undefinedToNull(json['key']),
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
  EntityType.clinic: 'clinic',
  EntityType.chat: 'chat',
  EntityType.waterfall: 'waterfall',
  EntityType.waterfallItem: 'waterfallItem'
};

ClinicInfo _$ClinicInfoFromJson(Map<String, dynamic> json) {
  return ClinicInfo(
      key: EntityInfo.undefinedToNull(json['key']),
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
      key: EntityInfo.undefinedToNull(json['key']),
      type: _$enumDecode(_$EntityTypeEnumMap, json['type']));
}

Map<String, dynamic> _$TargetInfoToJson(TargetInfo instance) =>
    <String, dynamic>{
      'key': instance.key,
      'type': _$EntityTypeEnumMap[instance.type]
    };
