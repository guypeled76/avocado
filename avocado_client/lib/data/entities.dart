import 'package:avocado_client/data/users.dart';

class EntityInfo {
  final String key = '';


  EntityInfo({String key});
}

class ContentEntity extends EntityInfo {

  final DateTime date;
  final UserInfo user;


  ContentEntity({String key, this.date, this.user})
      : super(key:key);
}