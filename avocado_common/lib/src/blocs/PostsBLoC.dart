
import 'dart:async';
import 'package:avocado_common/common.dart';


class PostsBLoC extends EntitiesBLoC<PostInfo> {


  Stream<List<PostInfo>> posts;

  final bool pinned;

  PostsBLoC(RepositoryService repository, {this.pinned = false}) : super(repository) {
    this.posts = this.entities;
  }

  @override
  RepositoryCollection get repositoryCollection {
    return this.repository.collection(this.pinned ? "pinned" : "posts");
  }

  @override
  PostInfo entityFromJson(Map<String, dynamic> json) {
    return PostInfo.fromJson(json);
  }

  @override
  Map<String, dynamic> jsonFromEntity(PostInfo entity) {
    return entity.toJson();
  }



}