
import 'dart:async';
import 'package:avocado_common/common.dart';


class VideosBLoC extends EntitiesBLoC<VideoInfo> {


  Stream<List<VideoInfo>> videos;

  VideosBLoC(RepositoryService repository) : super(repository) {
    this.videos = this.entities;
  }

  @override
  RepositoryCollection get repositoryCollection {
    return this.repository.collection("videos");
  }

  @override
  VideoInfo entityFromJson(Map<String, dynamic> json) {
    return VideoInfo.fromJson(json);
  }

  @override
  Map<String, dynamic> jsonFromEntity(VideoInfo entity) {
    return entity.toJson();
  }



}