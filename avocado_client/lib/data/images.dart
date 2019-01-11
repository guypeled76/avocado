import 'package:avocado_client/data/data.dart';

import 'entities.dart';


class ImageContentInfo extends ContentEntity {
  String image;

  ImageContentInfo({String key, DateTime date, UserInfo user, this.image})
      : super(key:key);

}