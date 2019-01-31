
import 'dart:async';
import 'package:avocado_common/common.dart';
import 'package:rxdart/rxdart.dart';

class VideosBLoC extends BaseBLoC {

  final RepositoryService repository;
  final BehaviorSubject<List<VideoInfo>> _videosController = BehaviorSubject();

  Stream<List<VideoInfo>> videos;

  VideosBLoC(this.repository) {
    _videosController.onListen = () {
      repository.collection("videos").get().then((list) {
        _videosController.sink.add(list.map((map) => VideoInfo.fromJson(map)).toList());
      });
    };

    this.videos = _videosController.asBroadcastStream();
  }

  Future<VideoInfo> add(VideoInfo videoInfo) {
    return repository.collection("videos").add(videoInfo.toJson()).then((doc) {
      return doc.get().then((json) => VideoInfo.fromJson(json));
    }).then((video) {
      _videosController.first.then((list) {
        List<VideoInfo> newList = List.from(list);
        newList.add(video);
        _videosController.sink.add(newList);
      });

      return video;
    });
  }

  void delete(VideoInfo video) {
    repository.collection("videos").doc(video.key).delete().then((v) {
      _videosController.first.then((list) {
        List<VideoInfo> newList = List.from(list);
        newList.remove(video);
        _videosController.sink.add(newList);
      });
    });
  }


}