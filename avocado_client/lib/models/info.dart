import 'enums.dart';
import 'data.dart';

export 'enums.dart';

abstract class EntityInfo {
  String get key;
  EntityType get type;
}

abstract class TargetInfo {
  String get key;
  EntityType get type;
}

abstract class ContentInfo implements EntityInfo {
  UserInfo get user;
  String get date;
  String get content;
}

abstract class PostInfo implements ContentInfo, ImageContentInfo, SearchInfo {
  String get image;
  String get video;
}

abstract class ImageContentInfo implements ContentInfo
{
  String get image;

  static ImageContentInfo create({
    String key,
    String content,
    UserInfo user,
    String date,
    String image
    }) {
    var builder = MessageDataBuilder()
        ..key = key
        ..content = content
        ..user = UserInfo.createBuilder(key:user.key, displayName:user.displayName, image:user.image)
        ..date = date
        ..type = EntityType.message
        ..image = image;
    ;


    return builder.build();

  }
}

abstract class NotificationInfo implements ContentInfo
{
  TargetInfo get target;
}

abstract class SearchInfo implements ContentInfo {

}

abstract class MessageInfo implements ContentInfo, ImageContentInfo, SearchInfo {
  String get image;
}




abstract class UserInfo implements EntityInfo {
  String get image;
  String get displayName;


  static UserDataBuilder createBuilder({
    String key,
    String displayName,
    String image
  }) {
    var builder = UserDataBuilder()
      ..key = key
      ..type = EntityType.user
      ..displayName = displayName
      ..image = image;
    ;


    return builder;

  }

  static UserInfo create({
    String key,
    String displayName,
    String image
  }) {
    var builder = UserDataBuilder()
      ..key = key
      ..type = EntityType.user
      ..displayName = displayName
      ..image = image;
    ;


    return builder.build();

  }
}