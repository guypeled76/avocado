import 'package:avocado_common/common.dart';

Future<List<VideoInfo>> loadVideos(RepositoryService repository) async {
  return repository.collection("videos").get().then((list) {
    return list.map((json) {
      return VideoInfo.fromJson(json);
    }).toList();
  });
}

Future<VideoInfo> createVideo(RepositoryService repository, VideoInfo video) {
  return repository.collection("videos").add(video.toJson()).then((document) {
    return document.get().then((map) {
      return VideoInfo.fromJson(map);
    });
  });
}

Stream<RepositoryTaskSnapshot> uploadFile(RepositoryService repository, String section, String name, Object file) {
  return repository.uploadFile("${section}/${name}", file);
}