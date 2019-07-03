import 'package:json_annotation/json_annotation.dart';
import 'package:avocado_common/common.dart';

part 'images.g.dart';


@JsonSerializable(nullable: false)
class ImageInfo extends ContentInfo
{
  @JsonKey(fromJson: EntityInfo.undefinedToNull)
  final String image;

  ImageInfo({String key, List<String> hashtags, String content, UserInfo user, DateTime date, this.image}) : super(
      key:key,
      type:EntityType.image,
      hashtags:hashtags,
      content:content,
      date:date,
      user:user
  );

  factory ImageInfo.fromJson(Map<String, dynamic> json) => _$ImageInfoFromJson(json);
  Map<String, dynamic> toJson() => _$ImageInfoToJson(this);

}