import 'package:json_annotation/json_annotation.dart';
import 'package:avocado_common/common.dart';

part 'users.g.dart';


@JsonSerializable(nullable: false)
class UserInfo extends EntityInfo {

  @JsonKey(fromJson: EntityInfo.undefinedToNull)
  final String image;

  @JsonKey(fromJson: EntityInfo.undefinedToNull)
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

  @JsonKey(fromJson: EntityInfo.undefinedToNull)
  final String image;

  @JsonKey(fromJson: EntityInfo.undefinedToNull)
  final String displayName;

  @JsonKey(fromJson: EntityInfo.undefinedToNull)
  final String email;

  @JsonKey(fromJson: EntityInfo.undefinedToNull)
  final String idToken;

  ProfileInfo({String key, List<String> hashtags, this.image, this.displayName, this.email, this.idToken}) : super(
      key:key,
      type:EntityType.profile,
      hashtags:hashtags
  );

  factory ProfileInfo.fromJson(Map<String, dynamic> json) => _$ProfileInfoFromJson(json);
  Map<String, dynamic> toJson() => _$ProfileInfoToJson(this);
}