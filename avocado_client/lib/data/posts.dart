import 'package:avocado_client/data/entities.dart';
import 'package:avocado_client/data/users.dart';

class PostInfo extends ContentEntity {
  final int comments = 0;
  final int shares = 0;
  final int likes = 0;
  final String content = '';

  PostInfo(
      {String key,
      DateTime date,
      UserInfo user,
      String content,
      int comments,
      int shares,
      int likes})
      : super(key: key, date: date, user: user);
}

class ImagePostInfo extends PostInfo {
  final String image = '';
  ImagePostInfo(
      {String key,
      DateTime date,
      UserInfo user,
      String content,
      int comments,
      int shares,
      int likes,
      String image})
      : super(
            key: key,
            date: date,
            user: user,
            content: content,
            comments: comments,
            likes: likes,
            shares: shares);
}
