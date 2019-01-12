import 'package:avocado_client/data/entities.dart';

class UserInfo extends EntityInfo {
  final String name;
  final String image;

  UserInfo({String key, this.name, this.image}) : super(key: key);
}

class ProfileInfo extends UserInfo {
  ProfileInfo({String key, String name, String image})
      : super(key: key, name: name, image: image);
}
