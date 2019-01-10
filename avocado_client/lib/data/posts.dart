import 'package:avocado_client/data/entities.dart';
import 'package:avocado_client/data/users.dart';

class PostInfo extends ContentEntity {
  int comments;
  int shares;
  int likes;
  String content;

  PostInfo(
      {String key,
      DateTime date,
      UserInfo user,
      this.content,
      this.comments,
      this.shares,
      this.likes})
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
