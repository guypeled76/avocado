import 'package:avocado_client/data/entities.dart';

class UserInfo extends EntityInfo {
  final String name = null;
  final String image = null;

  UserInfo({String key, String name, String image}) : super(key: key);
}

class ProfileInfo extends UserInfo {
  ProfileInfo({String key, String name, String image})
      : super(key: key, name: name, image: image);
}
