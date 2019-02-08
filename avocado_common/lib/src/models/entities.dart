import 'package:json_annotation/json_annotation.dart';
import 'package:avocado_common/common.dart';

part 'entities.g.dart';

enum EntityType {
    message,
    post,
    user,
    notification,
    video,
    image,
    profile,
    clinic,
    chat,
    waterfall,
    waterfallItem,
    ingredient,
    course,
    meal
}

@JsonSerializable(nullable: false)
class EntityInfo {
  @JsonKey(fromJson: EntityInfo.undefinedToNull)
  final String key;

  @JsonKey(nullable: false)
  final EntityType type;

  @JsonKey(nullable: true, defaultValue: [])
  final List<String> hashtags;
  EntityInfo({this.key, this.type, this.hashtags});

  factory EntityInfo.fromJson(Map<String, dynamic> json) => _$EntityInfoFromJson(json);
  Map<String, dynamic> toJson() => _$EntityInfoToJson(this);

  static undefinedToNull(dynamic value) {
    return value ?? null;
  }

  static Map<String, dynamic> userToJson(UserInfo user) {
    return user?.toJson();
  }

  static UserInfo jsonToUser(Map<String, dynamic> json) {
    return UserInfo.fromJson(json);
  }

  static List<EntityInfoType> sortByDate<EntityInfoType extends ContentInfo>(List<EntityInfoType> list, {bool reverse = false}) {
      list.sort((c1, c2) => reverse ? c2.date.compareTo(c1.date) : c1.date.compareTo(c2.date));
      return list;
  }
}

@JsonSerializable(nullable: false)
class ClinicInfo extends EntityInfo {

  ClinicInfo({String key, List<String> hashtags}) : super(
      key:key,
      type: EntityType.clinic,
      hashtags:hashtags
  );
}







@JsonSerializable(nullable: false)
class TargetInfo {
  @JsonKey(fromJson: EntityInfo.undefinedToNull)
  final String key;
  final EntityType type;
  TargetInfo({this.key, this.type});

  factory TargetInfo.fromJson(Map<String, dynamic> json) => _$TargetInfoFromJson(json);
  Map<String, dynamic> toJson() => _$TargetInfoToJson(this);
}

abstract class ContentInfo extends EntityInfo {

  @JsonKey(fromJson: EntityInfo.jsonToUser, toJson: EntityInfo.userToJson)
  final UserInfo user;
  final DateTime date;

  @JsonKey(fromJson: EntityInfo.undefinedToNull)
  final String content;


  


  ContentInfo({String key, EntityType type, List<String> hashtags, this.user, this.date, this.content}) : super(
    key:key,
    type:type,
    hashtags:hashtags
  );

}






abstract class SearchInfo implements ContentInfo {

}



