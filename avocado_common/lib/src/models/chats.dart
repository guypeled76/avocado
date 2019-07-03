import 'package:json_annotation/json_annotation.dart';
import 'package:avocado_common/common.dart';

part 'chats.g.dart';

@JsonSerializable(nullable: false)
class ChatInfo extends EntityInfo {

  ChatInfo({String key, List<String> hashtags}) : super(
      key:key,
      type: EntityType.chat,
      hashtags:hashtags
  );
}


@JsonSerializable(nullable: false)
class MessageInfo extends ContentInfo implements ImageInfo, SearchInfo {

  @JsonKey(fromJson: EntityInfo.undefinedToNull)
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
