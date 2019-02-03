
abstract class RepositoryService {
  RepositoryCollection collection(String name);
  static Map<String, dynamic> normalizeMap(String id, Map<String, dynamic> map) {
    map["key"] = id;
    return map;
  }
  Stream<RepositoryTaskSnapshot> uploadFile(String path, dynamic file);
}

abstract class RepositoryTaskSnapshot {
  RepositoryTaskState get state;
  int get bytesTransferred;
  int get totalBytes;
}

enum RepositoryTaskState { RUNNING, PAUSED, SUCCESS, CANCELED, ERROR }


abstract class RepositoryDocument {
  RepositoryCollection collection(String name);
  Future<Null> delete();
  Future<Null> set(Map<String, dynamic> content);
  Future<Map<String, dynamic>> get();
}

abstract class RepositoryCollection extends RepositoryQuery {
  Future<RepositoryDocument> add(Map<String, dynamic> map);
  RepositoryDocument doc(String name);
  Stream<RepositoryDocument> addAll(Stream<Map<String, dynamic>> maps);
}

abstract class RepositoryQuery {
  Future<List<Map<String, dynamic>>> get();
  RepositoryQuery where(String field, {
    dynamic isEqualTo,
    dynamic isLessThan,
    dynamic isLessThanOrEqualTo,
    dynamic isGreaterThan,
    dynamic isGreaterThanOrEqualTo,
    dynamic arrayContains,
    bool isNull,
  });
}


