import 'package:json_annotation/json_annotation.dart';

part 'info.g.dart';

enum EntityType {
    message,
    post,
    user,
    notification,
    video,
    image,
    profile
}

@JsonSerializable(nullable: false)
class EntityInfo {
  final String key;

  @JsonKey(nullable: false)
  final EntityType type;

  @JsonKey(nullable: true, defaultValue: [])
  final List<String> hashtags;
  EntityInfo({this.key, this.type, this.hashtags});

  factory EntityInfo.fromJson(Map<String, dynamic> json) => _$EntityInfoFromJson(json);
  Map<String, dynamic> toJson() => _$EntityInfoToJson(this);
}

@JsonSerializable(nullable: false)
class TargetInfo {
  final String key;
  final EntityType type;
  TargetInfo({this.key, this.type});

  factory TargetInfo.fromJson(Map<String, dynamic> json) => _$TargetInfoFromJson(json);
  Map<String, dynamic> toJson() => _$TargetInfoToJson(this);
}

abstract class ContentInfo extends EntityInfo {

  @JsonKey(fromJson: _jsonToUser, toJson: _userToJson)
  final UserInfo user;
  final DateTime date;
  final String content;

  static Map<String, dynamic> _userToJson(UserInfo user) {
      return user?.toJson();
  }
  
  static UserInfo _jsonToUser(Map<String, dynamic> json) {
      return UserInfo.fromJson(json);
  }

  ContentInfo({String key, EntityType type, List<String> hashtags, this.user, this.date, this.content}) : super(
    key:key,
    type:type,
    hashtags:hashtags
  );

}

@JsonSerializable(nullable: false)
class PostInfo extends ContentInfo implements ImageContentInfo, SearchInfo {
  final String image;
  final String video;

  PostInfo({String key, List<String> hashtags, String content, UserInfo user, DateTime date, this.image, this.video}) : super(
      key:key,
      type: EntityType.post,
      hashtags:hashtags,
      content:content,
      user:user,
      date:date
  );

  factory PostInfo.fromJson(Map<String, dynamic> json) => _$PostInfoFromJson(json);
  Map<String, dynamic> toJson() => _$PostInfoToJson(this);
}

@JsonSerializable(nullable: false)
class ImageContentInfo extends ContentInfo
{
  final String image;

  ImageContentInfo({String key, List<String> hashtags, String content, UserInfo user, DateTime date, this.image}) : super(
      key:key,
      type:EntityType.image,
      hashtags:hashtags,
      content:content,
      date:date,
      user:user
  );

  factory ImageContentInfo.fromJson(Map<String, dynamic> json) => _$ImageContentInfoFromJson(json);
  Map<String, dynamic> toJson() => _$ImageContentInfoToJson(this);

}

@JsonSerializable(nullable: false)
class VideoInfo extends ContentInfo implements ImageContentInfo, SearchInfo {
  final String image;
  final String video;

  VideoInfo({String key, List<String> hashtags, String content, UserInfo user, DateTime date, this.image, this.video}) : super(
      key:key,
      type:EntityType.video,
      hashtags:hashtags,
      content:content,
      user:user,
      date:date
  );

  factory VideoInfo.fromJson(Map<String, dynamic> json) => _$VideoInfoFromJson(json);
  Map<String, dynamic> toJson() => _$VideoInfoToJson(this);
}

@JsonSerializable(nullable: false)
class NotificationInfo extends ContentInfo
{
  @JsonKey(fromJson: _jsonToTarget, toJson: _targetToJson)
  final TargetInfo target;

  NotificationInfo({String key, List<String> hashtags, DateTime date, UserInfo user, String content, this.target}) : super(
      key:key,
      type:EntityType.notification,
      hashtags:hashtags,
      content:content,
      user:user,
      date:date
  );

  static Map<String, dynamic> _targetToJson(TargetInfo target) {
    return target?.toJson();
  }

  static TargetInfo _jsonToTarget(Map<String, dynamic> json) {
    return TargetInfo.fromJson(json);
  }

  factory NotificationInfo.fromJson(Map<String, dynamic> json) => _$NotificationInfoFromJson(json);
  Map<String, dynamic> toJson() => _$NotificationInfoToJson(this);
}


abstract class SearchInfo implements ContentInfo {

}

@JsonSerializable(nullable: false)
class MessageInfo extends ContentInfo implements ImageContentInfo, SearchInfo {
  final String image;

  MessageInfo({String key, List<String> hashtags, String content, UserInfo user, DateTime date, this.image}) : super(
      key:key,
      type:EntityType.message,
      hashtags:hashtags,
      content:content,
      user:user,
      date:date
  );

  factory MessageInfo.fromJson(Map<String, dynamic> json) => _$MessageInfoFromJson(json);
  Map<String, dynamic> toJson() => _$MessageInfoToJson(this);
}



@JsonSerializable(nullable: false)
class UserInfo extends EntityInfo {
  final String image;
  final String displayName;

  UserInfo({String key,  List<String> hashtags, this.image, this.displayName}) : super(
      key:key,
      type:EntityType.user,
      hashtags:hashtags
  );

  factory UserInfo.fromJson(Map<String, dynamic> json) => _$UserInfoFromJson(json);
  Map<String, dynamic> toJson() => _$UserInfoToJson(this);

}

@JsonSerializable(nullable: false)
class ProfileInfo extends EntityInfo implements UserInfo {

  final String image;
  final String displayName;
  final String email;

  ProfileInfo({String key, List<String> hashtags, this.image, this.displayName, this.email}) : super(
      key:key,
      type:EntityType.profile,
      hashtags:hashtags
  );

  factory ProfileInfo.fromJson(Map<String, dynamic> json) => _$ProfileInfoFromJson(json);
  Map<String, dynamic> toJson() => _$ProfileInfoToJson(this);
}