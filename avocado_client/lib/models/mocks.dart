import 'dart:async';
import 'dart:convert';
import 'package:built_value/serializer.dart';
import 'package:flutter/services.dart';
import 'package:rxdart/rxdart.dart';
import 'info.dart';
import 'data.dart';
import 'serializers.dart';

Stream<String> loadAsset(String path) {
  return Stream<String>.fromFuture(
      rootBundle.loadString(path));
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
      .map((map) => serializers.deserializeWith(PostData.serializer, map))
      .toList()
      .asStream();
}

Stream<List<UserInfo>> loadUsers() {
  return loadJSONEntities('assets/mocks/users.json')
      .map((map) => serializers.deserializeWith(UserData.serializer, map))
      .toList()
      .asStream();
}

Stream<List<NotificationInfo>> loadNotifications() {
  return loadJSONEntities('assets/mocks/notifications.json')
      .map((map) => serializers.deserializeWith(NotificationData.serializer, map))
      .toList()
      .asStream();
}

Stream<Map<String, UserInfo>> loadUsersMap() {
  return loadUsers().map((users) => Map.fromIterable(users, key:(user)=> user.key, value:(user)=> user));
}
