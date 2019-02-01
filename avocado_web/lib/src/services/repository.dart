import 'package:firebase/firebase.dart' as fb;
import 'package:avocado_common/common.dart';
import 'package:firebase/src/firestore.dart';

class RepositoryServiceImpl extends RepositoryService {
  @override
  RepositoryCollection collection(String name) {
    return RepositoryCollectionImpl(fb.app().firestore().collection(name));
  }

  Stream<RepositoryUploadSnapshot> uploadFile(String path, dynamic file) {
    return fb.storage().ref(path).put(file).onStateChanged.map((snapshot) {
      return RepositoryUploadSnapshotImpl(snapshot);
    });
  }
}

class RepositoryUploadSnapshotImpl extends RepositoryUploadSnapshot {

  final fb.UploadTaskSnapshot snapshot;

  RepositoryUploadSnapshotImpl(this.snapshot);


  @override
  RepositoryTaskState get state {
    switch(snapshot.state) {
      case fb.TaskState.SUCCESS:
        return RepositoryTaskState.SUCCESS;
      case fb.TaskState.CANCELED:
        return RepositoryTaskState.CANCELED;
      case fb.TaskState.ERROR:
        return RepositoryTaskState.ERROR;
      case fb.TaskState.PAUSED:
        return RepositoryTaskState.PAUSED;
      case fb.TaskState.RUNNING:
        return RepositoryTaskState.RUNNING;
    }

    return RepositoryTaskState.RUNNING;
  }

  @override
  int get bytesTransferred => snapshot.bytesTransferred;

  @override
  int get totalBytes => snapshot.totalBytes;

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
      return RepositoryService.normalizeMap(snapshot.id, snapshot.data());
    });
  }

  @override
  Future<Null> set(Map<String, dynamic> content) {
    return this.document.set(content);
  }
}

class RepositoryCollectionImpl extends RepositoryCollection {
  final CollectionReference collection;
  RepositoryCollectionImpl(this.collection);

  @override
  RepositoryDocument doc(String name) {
    return RepositoryDocumentImpl(collection.doc(name));
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

    Query updatedQuery = this.collection;

    if (isEqualTo != null) {
      updatedQuery = updatedQuery.where(field, '==', isEqualTo);
    }
    if (isLessThan != null) {
      updatedQuery = updatedQuery.where(field, '<', isLessThan);
    }
    if (isLessThanOrEqualTo != null) {
      updatedQuery = updatedQuery.where(field, '<=', isLessThanOrEqualTo);
    }
    if (isGreaterThan != null) {
      updatedQuery = updatedQuery.where(field, '>', isGreaterThan);
    }
    if (isGreaterThanOrEqualTo != null) {
      updatedQuery = updatedQuery.where(field, '>=', isGreaterThanOrEqualTo);
    }
    if (arrayContains != null) {
      updatedQuery = updatedQuery.where(field, 'array-contains', arrayContains);
    }
    if (isNull != null) {
      updatedQuery = updatedQuery.where(field, '==', null);
    }

    return new RepositoryQueryImp(updatedQuery);
  }

  @override
  Future<List<Map<String, dynamic>>> get() {
    return this.collection.get().then((snapshot) {
      return snapshot.docs
          .map((doc) => RepositoryService.normalizeMap(doc.id, doc.data()))
          .toList();
    });
  }

  @override
  Future<RepositoryDocument> add(Map<String, dynamic> map) {
    print("test" + map.toString());
    return collection
        .add(map)
        .asStream()
        .map((doc) => RepositoryDocumentImpl(doc))
        .first;
  }

  @override
  Stream<RepositoryDocument> addMany(Stream<Map<String, dynamic>> maps) {
    return maps
        .asyncMap((map)=>this.add(map));
  }
}

class RepositoryQueryImp extends RepositoryQuery {
  final Query query;

  RepositoryQueryImp(this.query);

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
    Query updatedQuery = this.query;

    if (isEqualTo != null) {
      updatedQuery = updatedQuery.where(field, '==', isEqualTo);
    }
    if (isLessThan != null) {
      updatedQuery = updatedQuery.where(field, '<', isLessThan);
    }
    if (isLessThanOrEqualTo != null) {
      updatedQuery = updatedQuery.where(field, '<=', isLessThanOrEqualTo);
    }
    if (isGreaterThan != null) {
      updatedQuery = updatedQuery.where(field, '>', isGreaterThan);
    }
    if (isGreaterThanOrEqualTo != null) {
      updatedQuery = updatedQuery.where(field, '>=', isGreaterThanOrEqualTo);
    }
    if (arrayContains != null) {
      updatedQuery = updatedQuery.where(field, 'array-contains', arrayContains);
    }
    if (isNull != null) {
      updatedQuery = updatedQuery.where(field, '==', null);
    }

    return RepositoryQueryImp(updatedQuery);
  }

  @override
  Future<List<Map<String, dynamic>>> get() {
    return this.query.get().then((snapshot) {
      return snapshot.docs
          .map((doc) => RepositoryService.normalizeMap(doc.id, doc.data()))
          .toList();
    });
  }
}
