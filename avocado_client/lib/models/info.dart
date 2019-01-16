import 'enums.dart';

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

}

abstract class ImageContentInfo implements ContentInfo
{
  String get image;
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
}