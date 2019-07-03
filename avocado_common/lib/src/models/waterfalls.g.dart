// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'waterfalls.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

WaterfallInfo _$WaterfallInfoFromJson(Map<String, dynamic> json) {
  return WaterfallInfo(
      key: EntityInfo.undefinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? []);
}

Map<String, dynamic> _$WaterfallInfoToJson(WaterfallInfo instance) {
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

WaterfallItemInfo _$WaterfallItemInfoFromJson(Map<String, dynamic> json) {
  return WaterfallItemInfo(
      key: EntityInfo.undefinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? []);
}

Map<String, dynamic> _$WaterfallItemInfoToJson(WaterfallItemInfo instance) {
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
