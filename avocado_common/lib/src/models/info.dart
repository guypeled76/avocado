import 'enums.dart';
import 'data.dart';

export 'enums.dart';

abstract class EntityInfo {
  String get key;
  EntityType get type;
  List<String> get hashtags;
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
    String image,
    List<String> hashtags
    }) {
    var builder = MessageDataBuilder()
        ..key = key
        ..content = content
        ..user = UserInfo.createBuilder(key:user.key, displayName:user.displayName, image:user.image)
        ..date = date
        ..type = EntityType.message
        ..image = image
        ..hashtags = hashtags;
    ;


    return builder.build();

  }
}

abstract class VideoInfo implements ContentInfo, ImageContentInfo, SearchInfo {
  String get image;
  String get video;

  static VideoInfo create({
    String key,
    String content,
    UserInfo user,
    String date,
    String image,
    List<String> hashtags
  }) {
    var builder = VideoDataBuilder()
      ..key = key
      ..content = content
      ..user = UserInfo.createBuilder(key:user.key, displayName:user.displayName, image:user.image)
      ..date = date
      ..type = EntityType.video
      ..image = image,
      ..hashtags = hashtags;


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
    String image,
    List<String> hashtags
  }) {
    var builder = UserDataBuilder()
      ..key = key
      ..type = EntityType.user
      ..displayName = displayName
      ..image = image,
      ..hashtags = hashtags;


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

abstract class ProfileInfo implements UserInfo {
  String get email;

  static ProfileInfo create({
    String key,
    String displayName,
    String image,
    String email
  }) {
    var builder = ProfileDataBuilder()
      ..key = key
      ..type = EntityType.user
      ..displayName = displayName
      ..email = email
      ..image = image;
    ;


    return builder.build();

  }
}