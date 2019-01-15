import 'data.dart';
import 'serializers.dart';

abstract class EntityInfo {
  String get key;
}

abstract class ContentInfo implements EntityInfo {
  UserInfo get user;
  String get date;
}

abstract class PostInfo implements ContentInfo {
  String get image;
  String get content;
}


abstract class UserInfo implements EntityInfo {
  String get image;
  String get displayName;
}