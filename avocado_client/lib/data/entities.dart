import 'package:avocado_client/data/users.dart';

class EntityInfo {
  final String key = '';


  EntityInfo({String key});
}

class ContentEntity extends EntityInfo {

  final DateTime date = null;
  final UserInfo user = null;


  ContentEntity({String key, DateTime date, UserInfo user})
      : super(key:key);
}