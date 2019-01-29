import 'package:firebase/firebase.dart' as fb;
import 'package:avocado_common/common.dart';
import 'package:firebase/src/firestore.dart';

class RepositoryServiceImpl extends RepositoryService {
  
  @override
  RepositoryCollection collection(String name) {
    return RepositoryCollectionImpl(
      fb.app().firestore().collection(name)
    );
  }

}

class RepositoryDocumentImpl extends RepositoryDocument {
  
  final DocumentReference document;
  
  RepositoryDocumentImpl(this.document);

  @override
  RepositoryCollection collection(String name) {
    return RepositoryCollectionImpl(
      this.document.collection(name)
    );
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
    return RepositoryDocumentImpl(
      collection.doc(name)
    );
  }

  @override
  RepositoryQuery where(String fieldPath, String op, dynamic value) {
    return new RepositoryQueryImp(collection.where(fieldPath, op, value));
  }

  @override
  Future<List<Map<String, dynamic>>> get() {
    return this.collection.get().then((snapshot) {
      return snapshot.docs.map((doc) =>
          RepositoryService.normalizeMap(doc.id, doc.data())).toList();
    });
  }

  @override
  Future<RepositoryDocument> add(Map<String, dynamic> map) {
    return collection.add(map).asStream().map((doc) => RepositoryDocumentImpl(doc)).first;
  }
}


class RepositoryQueryImp extends RepositoryQuery {

  final Query query;

  RepositoryQueryImp(this.query);

  @override
  RepositoryQuery where(String fieldPath, String op, value) {
    return RepositoryQueryImp(query.where(fieldPath, op, value));
  }

  @override
  Future<List<Map<String, dynamic>>> get() {
    return this.query.get().then((snapshot) {
      return snapshot.docs.map((doc) =>
          RepositoryService.normalizeMap(doc.id, doc.data())).toList();
    });
  }

}