import 'dart:async';
import 'entities.dart';
import 'package:rxdart/rxdart.dart';
import 'mocks/mocks.dart';
import 'package:avocado_common/common.dart';



Stream<Map<String, dynamic>> loadJSONEntities(Map<String, dynamic> data) {
  return Stream.fromIterable([data]).expand((map) => map.entries).map((entry) {
    Map<String, dynamic> result = entry.value;
    result["key"] = entry.key;
    return result;
  });
}

Stream<Map<String, dynamic>> loadJSONSectionEntities(Map<String, dynamic> data, String category) {
  return Stream.fromIterable([data]).expand((map) => map.entries).where((entry)=>entry.key == category).expand((entry) {
      Map<String,dynamic> section = entry.value;
      return section.entries;
    }).map((entry) {
    Map<String, dynamic> result = entry.value;
      result["key"] = entry.key;
      return result;
  });
}

Stream<List<PostInfo>> loadPinned() {
  return loadJSONEntities(pinned)
      .map((map) => PostInfo.fromJson(map))
      .toList()
      .asStream();
}

Stream<List<PostInfo>> loadPosts() {
  return loadJSONEntities(posts)
      .map((map) => PostInfo.fromJson(map))
      .toList()
      .asStream();
}

Stream<List<UserInfo>> loadUsers() {
  return loadJSONEntities(users)
      .map((map) => UserInfo.fromJson(map))
      .toList()
      .asStream();
}

Stream<List<MessageInfo>> loadChat(String chatId) {
  return loadJSONSectionEntities(chats, chatId)
      .map((map) => MessageInfo.fromJson(map))
      .toList()
      .asStream();
}

Stream<List<NotificationInfo>> loadNotifications() {
  return loadJSONEntities(notifications)
      .map((map) => NotificationInfo.fromJson(map))
      .toList()
      .asStream();
}

Stream<List<SearchInfo>> loadSearch(String wildCard) {
  return ConcatStream([
    loadPosts(), loadPinned()
  ]).expand((list) => list)
      .where((item) => item.content.indexOf(wildCard) > -1)
      .toList().asStream();
}

Stream<Map<String, UserInfo>> loadUsersMap() {
  return loadUsers().map((users) => Map.fromIterable(users, key:(user)=> user.key, value:(user)=> user));
}
