import 'package:json_annotation/json_annotation.dart';
import 'package:avocado_common/common.dart';

part 'posts.g.dart';



@JsonSerializable(nullable: false)
class PostInfo extends ContentInfo implements ImageInfo, SearchInfo {
  @JsonKey(fromJson: EntityInfo.undefinedToNull)
  final String image;

  @JsonKey(fromJson: EntityInfo.undefinedToNull)
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
