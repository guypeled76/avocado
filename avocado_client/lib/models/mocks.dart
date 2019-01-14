import 'dart:async';
import 'dart:convert';
import 'package:flutter/services.dart';
import 'package:rxdart/rxdart.dart';
import 'info.dart';
import 'data.dart';
import 'serializers.dart';

Stream<String> loadAsset(String path) {
  return Stream<String>.fromFuture(
      rootBundle.loadString('assets/mocks/posts.json'));
}

Stream<Map<String, dynamic>> loadJSONAsset(String path) {
  return loadAsset(path).map((content) => jsonDecode(content));
}

Stream<Map<String, dynamic>> loadJSONEntities(String path) {
  return loadJSONAsset(path).expand((map) => map.entries).map((entry) {
    Map<String, dynamic> result = entry.value;
    result["key"] = entry.key;
    return result;
  });
}

Stream<List<PostInfo>> loadPosts() {
  return loadJSONEntities('assets/mocks/posts.json')
      .map((map) {
        try {
          return serializers.deserializeWith(PostData.serializer, map);
        } catch( e ) {

          return null;
        }
      })
      .where((post) {
        return post != null;
      })
      .toList()
      .asStream();
}
