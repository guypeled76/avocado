import 'enums.dart';

export 'enums.dart';

abstract class EntityInfo {
  String get key;
}

abstract class ContentInfo implements EntityInfo {
  UserInfo get user;
  String get date;
  String get content;
}

abstract class PostInfo implements ContentInfo, ImageContentInfo {
  String get image;

}

abstract class ImageContentInfo implements ContentInfo
{
  String get image;
}

abstract class NotificationInfo implements ContentInfo
{
    NotificationType get type;
}

abstract class MessageInfo implements ContentInfo, ImageContentInfo {
  String get image;
}




abstract class UserInfo implements EntityInfo {
  String get image;
  String get displayName;
}