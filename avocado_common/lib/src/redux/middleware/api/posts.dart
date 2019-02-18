import 'package:avocado_common/common.dart';

Future<List<PostInfo>> loadPosts(RepositoryService repository) async {
  return repository.collection("posts").get().then((list) {
    return list.map((json) {
      return PostInfo.fromJson(json);
    }).toList();
  });
}