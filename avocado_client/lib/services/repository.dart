import 'package:avocado_common/common.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class RepositoryServiceImpl extends RepositoryService {
  @override
  RepositoryCollection collection(String name) {
    return RepositoryCollectionImpl(Firestore().collection(name));
  }

  @override
  Stream<RepositoryUploadSnapshot> uploadFile(String path, dynamic file) {
    return null;
  }


}

class RepositoryDocumentImpl extends RepositoryDocument {
  final DocumentReference document;

  RepositoryDocumentImpl(this.document);

  @override
  RepositoryCollection collection(String name) {
    return RepositoryCollectionImpl(this.document.collection(name));
  }

  @override
  Future<Null> delete() {
    return this.document.delete();
  }

  @override
  Future<Map<String, dynamic>> get() {
    return this.document.get().then((snapshot) {
      return RepositoryService.normalizeMap(snapshot.documentID, snapshot.data);
    });
  }

  @override
  Future<Null> set(Map<String, dynamic> content) {
    return this.document.setData(content);
  }
}

class RepositoryCollectionImpl extends RepositoryCollection {
  final CollectionReference collection;
  RepositoryCollectionImpl(this.collection);

  @override
  RepositoryDocument doc(String name) {
    return RepositoryDocumentImpl(collection.document(name));
  }

  @override
  RepositoryQuery where(
    String field, {
    dynamic isEqualTo,
    dynamic isLessThan,
    dynamic isLessThanOrEqualTo,
    dynamic isGreaterThan,
    dynamic isGreaterThanOrEqualTo,
    dynamic arrayContains,
    bool isNull,
  }) {
    return new RepositoryQueryImp(collection.where(field,
        isEqualTo: isEqualTo,
        isLessThan: isLessThan,
        isLessThanOrEqualTo: isLessThanOrEqualTo,
        isGreaterThan: isGreaterThan,
        isGreaterThanOrEqualTo: isGreaterThanOrEqualTo,
        arrayContains: arrayContains,
        isNull: isNull));
  }

  @override
  Future<List<Map<String, dynamic>>> get() {
    return this.collection.getDocuments().then((snapshot) {
      return snapshot.documents
          .map((doc) => RepositoryService.normalizeMap(doc.documentID, doc.data))
          .toList();
    });
  }

  @override
  Future<RepositoryDocument> add(Map<String, dynamic> map) {
    return collection
        .add(map)
        .asStream()
        .map((doc) => RepositoryDocumentImpl(doc))
        .first;
  }
}

class RepositoryQueryImp extends RepositoryQuery {
  final Query query;

  RepositoryQueryImp(this.query);

  @override
  RepositoryQuery where(
    String fieldPath, {
    dynamic isEqualTo,
    dynamic isLessThan,
    dynamic isLessThanOrEqualTo,
    dynamic isGreaterThan,
    dynamic isGreaterThanOrEqualTo,
    dynamic arrayContains,
    bool isNull,
  }) {
    return RepositoryQueryImp(query.where(fieldPath,
        isEqualTo: isEqualTo,
        isLessThan: isLessThan,
        isLessThanOrEqualTo: isLessThanOrEqualTo,
        isGreaterThan: isGreaterThan,
        isGreaterThanOrEqualTo: isGreaterThanOrEqualTo,
        arrayContains: arrayContains,
        isNull: isNull));
  }

  @override
  Future<List<Map<String, dynamic>>> get() {
    return this.query.getDocuments().then((snapshot) {
      return snapshot.documents
          .map((doc) => RepositoryService.normalizeMap(doc.documentID, doc.data))
          .toList();
    });
  }
}
