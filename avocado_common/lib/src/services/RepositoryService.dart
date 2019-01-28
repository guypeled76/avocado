import 'package:avocado_common/common.dart';

abstract class RepositoryService {
  RepositoryCollection collection(String name);

  static Map<String, dynamic> normalizeMap(String id, Map<String, dynamic> map) {
    map["key"] = id;
    return map;
  }
}

abstract class RepositoryDocument {
  RepositoryCollection collection(String name);

  Future<Null> delete();

  Future<Null> set(Map<String, dynamic> content);

  Future<Null> addVideo(VideoInfo video) {
    return this.set(video.toJson());
  }

  Future<Null> addPost(PostInfo post) {
    return this.set(post.toJson());
  }


  Stream<Map<String, dynamic>> get();

  Stream<PostInfo> asPost() {
    return this.get().map((map) => PostInfo.fromJson(map));
  }

  Stream<VideoInfo> asVideo() {
    return this.get().map((map) => VideoInfo.fromJson(map));
  }
}

abstract class RepositoryCollection extends RepositoryQuery {

  Future<RepositoryDocument> add(Map<String, dynamic> map);

  RepositoryDocument doc(String name);
  
  Future<RepositoryDocument> addVideo(VideoInfo video) {
    return this.add(video.toJson());
  }

  Future<RepositoryDocument> addPost(PostInfo post) {
    return this.add(post.toJson());
  }
}

abstract class RepositoryQuery {
  Stream<List<Map<String, dynamic>>> get();

  Stream<List<PostInfo>> asPosts() {
    return this
        .get()
        .map((list) => list.map((map) => PostInfo.fromJson(map)).toList());
  }

  Stream<List<VideoInfo>> asVideos() {
    return this
        .get()
        .map((list) => list.map((map) => VideoInfo.fromJson(map)).toList());
  }

  RepositoryQuery where(String fieldPath, String op, dynamic value);
}
