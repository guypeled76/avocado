
import 'package:avocado_common/common.dart';

class VideosBLoC {

  final RepositoryService repository;

  VideosBLoC(this.repository);

  Future<VideoInfo> addVideo(VideoInfo videoInfo) {
    return repository.collection("videos").add(videoInfo.toJson()).then((doc) {
      return doc.get().then((json) => VideoInfo.fromJson(json));
    });
  }


}