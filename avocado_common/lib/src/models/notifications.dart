import 'package:json_annotation/json_annotation.dart';
import 'package:avocado_common/common.dart';

part 'notifications.g.dart';



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