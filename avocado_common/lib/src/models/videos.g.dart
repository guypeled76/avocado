// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'videos.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

VideoInfo _$VideoInfoFromJson(Map<String, dynamic> json) {
  return VideoInfo(
      key: EntityInfo.undefinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      content: EntityInfo.undefinedToNull(json['content']),
      user: EntityInfo.jsonToUser(json['user'] as Map<String, dynamic>),
      date: DateTime.parse(json['date'] as String),
      image: EntityInfo.undefinedToNull(json['image']),
      video: EntityInfo.undefinedToNull(json['video']));
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
  val['user'] = EntityInfo.userToJson(instance.user);
  val['date'] = instance.date.toIso8601String();
  val['content'] = instance.content;
  val['image'] = instance.image;
  val['video'] = instance.video;
  return val;
}
