import 'package:json_annotation/json_annotation.dart';
import 'package:avocado_common/common.dart';

part 'videos.g.dart';


@JsonSerializable(nullable: false)
class VideoInfo extends ContentInfo implements ImageInfo, SearchInfo {

  @JsonKey(fromJson: EntityInfo.undefinedToNull)
  final String image;

  @JsonKey(fromJson: EntityInfo.undefinedToNull)
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