
import 'dart:async';
import 'package:avocado_common/common.dart';


class VideosBLoC extends BaseBLoC {


  Stream<List<VideoInfo>> videos;

  final VideosStore _store;

  VideosBLoC(this._store) {
    this.videos = _store.orderedVideos;;
  }

  void create(VideoInfo entity, Object image, Object video) {
    _store.actions.create(EntityWithImageAndVideoPayload(entity, image, video));
  }





}