
import 'package:avocado_common/common.dart';
import 'package:rxdart/rxdart.dart';

class VideosBLoC {

  final RepositoryService repository;
  Stream<List<VideoInfo>> videos;

  VideosBLoC(this.repository) {
    videos = repository.collection("videos").get().then((list) {
      return list.map((map) => VideoInfo.fromJson(map)).toList();
    }).asStream();
  }


  Future<VideoInfo> addVideo(VideoInfo videoInfo) {
    return repository.collection("videos").add(videoInfo.toJson()).then((doc) {
      return doc.get().then((json) => VideoInfo.fromJson(json));
    });
  }


  /*videos = repository.collection("videos").get().then((list) {
          return list.map((map) => VideoInfo.fromJson(map)).toList();
        }).asStream();*/


}