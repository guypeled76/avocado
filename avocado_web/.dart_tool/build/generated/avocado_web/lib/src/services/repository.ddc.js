define(['dart_sdk', 'packages/firebase/firebase', 'packages/firebase/src/app', 'packages/avocado_common/common'], function(dart_sdk, firebase, app, common) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__top_level = firebase.src__top_level;
  const src__storage = app.src__storage;
  const src__firestore = app.src__firestore;
  const src__services__repository = common.src__services__repository;
  const _root = Object.create(null);
  const src__services__repository$ = Object.create(_root);
  const $toList = dartx.toList;
  const $map = dartx.map;
  let UploadTaskSnapshotToRepositoryUploadSnapshotImpl = () => (UploadTaskSnapshotToRepositoryUploadSnapshotImpl = dart.constFn(dart.fnType(src__services__repository$.RepositoryUploadSnapshotImpl, [src__storage.UploadTaskSnapshot])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let DocumentSnapshotToMapOfString$dynamic = () => (DocumentSnapshotToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [src__firestore.DocumentSnapshot])))();
  let ListOfMapOfString$dynamic = () => (ListOfMapOfString$dynamic = dart.constFn(core.List$(MapOfString$dynamic())))();
  let QuerySnapshotToListOfMapOfString$dynamic = () => (QuerySnapshotToListOfMapOfString$dynamic = dart.constFn(dart.fnType(ListOfMapOfString$dynamic(), [src__firestore.QuerySnapshot])))();
  let DocumentReferenceToRepositoryDocumentImpl = () => (DocumentReferenceToRepositoryDocumentImpl = dart.constFn(dart.fnType(src__services__repository$.RepositoryDocumentImpl, [src__firestore.DocumentReference])))();
  let FutureOfRepositoryDocument = () => (FutureOfRepositoryDocument = dart.constFn(async.Future$(src__services__repository.RepositoryDocument)))();
  let MapOfString$dynamicToFutureOfRepositoryDocument = () => (MapOfString$dynamicToFutureOfRepositoryDocument = dart.constFn(dart.fnType(FutureOfRepositoryDocument(), [MapOfString$dynamic()])))();
  let CollectionReferenceOfCollectionReferenceJsImpl = () => (CollectionReferenceOfCollectionReferenceJsImpl = dart.constFn(src__firestore.CollectionReference$(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference"))))();
  let QueryOfQueryJsImpl = () => (QueryOfQueryJsImpl = dart.constFn(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query"))))();
  src__services__repository$.RepositoryServiceImpl = class RepositoryServiceImpl extends src__services__repository.RepositoryService {
    collection(name) {
      return new src__services__repository$.RepositoryCollectionImpl.new(src__top_level.app().firestore().collection(name));
    }
    uploadFile(path, file) {
      return src__top_level.storage().ref(path).put(file).onStateChanged.map(src__services__repository.RepositoryTaskSnapshot, dart.fn(snapshot => new src__services__repository$.RepositoryUploadSnapshotImpl.new(snapshot), UploadTaskSnapshotToRepositoryUploadSnapshotImpl()));
    }
  };
  (src__services__repository$.RepositoryServiceImpl.new = function() {
  }).prototype = src__services__repository$.RepositoryServiceImpl.prototype;
  dart.addTypeTests(src__services__repository$.RepositoryServiceImpl);
  dart.setMethodSignature(src__services__repository$.RepositoryServiceImpl, () => ({
    __proto__: dart.getMethods(src__services__repository$.RepositoryServiceImpl.__proto__),
    collection: dart.fnType(src__services__repository.RepositoryCollection, [core.String]),
    uploadFile: dart.fnType(async.Stream$(src__services__repository.RepositoryTaskSnapshot), [core.String, dart.dynamic])
  }));
  src__services__repository$.RepositoryUploadSnapshotImpl = class RepositoryUploadSnapshotImpl extends src__services__repository.RepositoryTaskSnapshot {
    get snapshot() {
      return this[snapshot$];
    }
    set snapshot(value) {
      super.snapshot = value;
    }
    get state() {
      switch (this.snapshot.state) {
        case src__storage.TaskState.SUCCESS:
        {
          return src__services__repository.RepositoryTaskState.SUCCESS;
        }
        case src__storage.TaskState.CANCELED:
        {
          return src__services__repository.RepositoryTaskState.CANCELED;
        }
        case src__storage.TaskState.ERROR:
        {
          return src__services__repository.RepositoryTaskState.ERROR;
        }
        case src__storage.TaskState.PAUSED:
        {
          return src__services__repository.RepositoryTaskState.PAUSED;
        }
        case src__storage.TaskState.RUNNING:
        {
          return src__services__repository.RepositoryTaskState.RUNNING;
        }
      }
      return src__services__repository.RepositoryTaskState.RUNNING;
    }
    get bytesTransferred() {
      return this.snapshot.bytesTransferred;
    }
    get totalBytes() {
      return this.snapshot.totalBytes;
    }
  };
  (src__services__repository$.RepositoryUploadSnapshotImpl.new = function(snapshot) {
    this[snapshot$] = snapshot;
  }).prototype = src__services__repository$.RepositoryUploadSnapshotImpl.prototype;
  dart.addTypeTests(src__services__repository$.RepositoryUploadSnapshotImpl);
  const snapshot$ = Symbol("RepositoryUploadSnapshotImpl.snapshot");
  dart.setGetterSignature(src__services__repository$.RepositoryUploadSnapshotImpl, () => ({
    __proto__: dart.getGetters(src__services__repository$.RepositoryUploadSnapshotImpl.__proto__),
    state: src__services__repository.RepositoryTaskState,
    bytesTransferred: core.int,
    totalBytes: core.int
  }));
  dart.setFieldSignature(src__services__repository$.RepositoryUploadSnapshotImpl, () => ({
    __proto__: dart.getFields(src__services__repository$.RepositoryUploadSnapshotImpl.__proto__),
    snapshot: dart.finalFieldType(src__storage.UploadTaskSnapshot)
  }));
  src__services__repository$.RepositoryDocumentImpl = class RepositoryDocumentImpl extends src__services__repository.RepositoryDocument {
    get document() {
      return this[document$];
    }
    set document(value) {
      super.document = value;
    }
    collection(name) {
      return new src__services__repository$.RepositoryCollectionImpl.new(this.document.collection(name));
    }
    delete() {
      return this.document.delete();
    }
    get() {
      return this.document.get().then(MapOfString$dynamic(), dart.fn(snapshot => src__services__repository.RepositoryService.normalizeMap(snapshot.id, snapshot.data()), DocumentSnapshotToMapOfString$dynamic()));
    }
    set(content) {
      return this.document.set(content);
    }
  };
  (src__services__repository$.RepositoryDocumentImpl.new = function(document) {
    this[document$] = document;
  }).prototype = src__services__repository$.RepositoryDocumentImpl.prototype;
  dart.addTypeTests(src__services__repository$.RepositoryDocumentImpl);
  const document$ = Symbol("RepositoryDocumentImpl.document");
  dart.setMethodSignature(src__services__repository$.RepositoryDocumentImpl, () => ({
    __proto__: dart.getMethods(src__services__repository$.RepositoryDocumentImpl.__proto__),
    collection: dart.fnType(src__services__repository.RepositoryCollection, [core.String]),
    delete: dart.fnType(async.Future$(core.Null), []),
    get: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), []),
    set: dart.fnType(async.Future$(core.Null), [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setFieldSignature(src__services__repository$.RepositoryDocumentImpl, () => ({
    __proto__: dart.getFields(src__services__repository$.RepositoryDocumentImpl.__proto__),
    document: dart.finalFieldType(src__firestore.DocumentReference)
  }));
  src__services__repository$.RepositoryCollectionImpl = class RepositoryCollectionImpl extends src__services__repository.RepositoryCollection {
    get collection() {
      return this[collection$];
    }
    set collection(value) {
      super.collection = value;
    }
    doc(name) {
      return new src__services__repository$.RepositoryDocumentImpl.new(this.collection.doc(name));
    }
    where(field, opts) {
      let isEqualTo = opts && 'isEqualTo' in opts ? opts.isEqualTo : null;
      let isLessThan = opts && 'isLessThan' in opts ? opts.isLessThan : null;
      let isLessThanOrEqualTo = opts && 'isLessThanOrEqualTo' in opts ? opts.isLessThanOrEqualTo : null;
      let isGreaterThan = opts && 'isGreaterThan' in opts ? opts.isGreaterThan : null;
      let isGreaterThanOrEqualTo = opts && 'isGreaterThanOrEqualTo' in opts ? opts.isGreaterThanOrEqualTo : null;
      let arrayContains = opts && 'arrayContains' in opts ? opts.arrayContains : null;
      let isNull = opts && 'isNull' in opts ? opts.isNull : null;
      let updatedQuery = this.collection;
      if (isEqualTo != null) {
        updatedQuery = updatedQuery.where(field, "==", isEqualTo);
      }
      if (isLessThan != null) {
        updatedQuery = updatedQuery.where(field, "<", isLessThan);
      }
      if (isLessThanOrEqualTo != null) {
        updatedQuery = updatedQuery.where(field, "<=", isLessThanOrEqualTo);
      }
      if (isGreaterThan != null) {
        updatedQuery = updatedQuery.where(field, ">", isGreaterThan);
      }
      if (isGreaterThanOrEqualTo != null) {
        updatedQuery = updatedQuery.where(field, ">=", isGreaterThanOrEqualTo);
      }
      if (arrayContains != null) {
        updatedQuery = updatedQuery.where(field, "array-contains", arrayContains);
      }
      if (isNull != null) {
        updatedQuery = updatedQuery.where(field, "==", null);
      }
      return new src__services__repository$.RepositoryQueryImp.new(updatedQuery);
    }
    get() {
      return this.collection.get().then(ListOfMapOfString$dynamic(), dart.fn(snapshot => snapshot.docs[$map](MapOfString$dynamic(), dart.fn(doc => src__services__repository.RepositoryService.normalizeMap(doc.id, doc.data()), DocumentSnapshotToMapOfString$dynamic()))[$toList](), QuerySnapshotToListOfMapOfString$dynamic()));
    }
    add(map) {
      return this.collection.add(map).asStream().map(src__services__repository$.RepositoryDocumentImpl, dart.fn(doc => new src__services__repository$.RepositoryDocumentImpl.new(doc), DocumentReferenceToRepositoryDocumentImpl())).first;
    }
    addAll(maps) {
      return maps.asyncMap(src__services__repository.RepositoryDocument, dart.fn(map => this.add(map), MapOfString$dynamicToFutureOfRepositoryDocument()));
    }
  };
  (src__services__repository$.RepositoryCollectionImpl.new = function(collection) {
    this[collection$] = collection;
  }).prototype = src__services__repository$.RepositoryCollectionImpl.prototype;
  dart.addTypeTests(src__services__repository$.RepositoryCollectionImpl);
  const collection$ = Symbol("RepositoryCollectionImpl.collection");
  dart.setMethodSignature(src__services__repository$.RepositoryCollectionImpl, () => ({
    __proto__: dart.getMethods(src__services__repository$.RepositoryCollectionImpl.__proto__),
    doc: dart.fnType(src__services__repository.RepositoryDocument, [core.String]),
    where: dart.fnType(src__services__repository.RepositoryQuery, [core.String], {isEqualTo: dart.dynamic, isLessThan: dart.dynamic, isLessThanOrEqualTo: dart.dynamic, isGreaterThan: dart.dynamic, isGreaterThanOrEqualTo: dart.dynamic, arrayContains: dart.dynamic, isNull: core.bool}),
    get: dart.fnType(async.Future$(core.List$(core.Map$(core.String, dart.dynamic))), []),
    add: dart.fnType(async.Future$(src__services__repository.RepositoryDocument), [core.Map$(core.String, dart.dynamic)]),
    addAll: dart.fnType(async.Stream$(src__services__repository.RepositoryDocument), [async.Stream$(core.Map$(core.String, dart.dynamic))])
  }));
  dart.setFieldSignature(src__services__repository$.RepositoryCollectionImpl, () => ({
    __proto__: dart.getFields(src__services__repository$.RepositoryCollectionImpl.__proto__),
    collection: dart.finalFieldType(CollectionReferenceOfCollectionReferenceJsImpl())
  }));
  src__services__repository$.RepositoryQueryImp = class RepositoryQueryImp extends src__services__repository.RepositoryQuery {
    get query() {
      return this[query$];
    }
    set query(value) {
      super.query = value;
    }
    where(field, opts) {
      let isEqualTo = opts && 'isEqualTo' in opts ? opts.isEqualTo : null;
      let isLessThan = opts && 'isLessThan' in opts ? opts.isLessThan : null;
      let isLessThanOrEqualTo = opts && 'isLessThanOrEqualTo' in opts ? opts.isLessThanOrEqualTo : null;
      let isGreaterThan = opts && 'isGreaterThan' in opts ? opts.isGreaterThan : null;
      let isGreaterThanOrEqualTo = opts && 'isGreaterThanOrEqualTo' in opts ? opts.isGreaterThanOrEqualTo : null;
      let arrayContains = opts && 'arrayContains' in opts ? opts.arrayContains : null;
      let isNull = opts && 'isNull' in opts ? opts.isNull : null;
      let updatedQuery = this.query;
      if (isEqualTo != null) {
        updatedQuery = updatedQuery.where(field, "==", isEqualTo);
      }
      if (isLessThan != null) {
        updatedQuery = updatedQuery.where(field, "<", isLessThan);
      }
      if (isLessThanOrEqualTo != null) {
        updatedQuery = updatedQuery.where(field, "<=", isLessThanOrEqualTo);
      }
      if (isGreaterThan != null) {
        updatedQuery = updatedQuery.where(field, ">", isGreaterThan);
      }
      if (isGreaterThanOrEqualTo != null) {
        updatedQuery = updatedQuery.where(field, ">=", isGreaterThanOrEqualTo);
      }
      if (arrayContains != null) {
        updatedQuery = updatedQuery.where(field, "array-contains", arrayContains);
      }
      if (isNull != null) {
        updatedQuery = updatedQuery.where(field, "==", null);
      }
      return new src__services__repository$.RepositoryQueryImp.new(updatedQuery);
    }
    get() {
      return this.query.get().then(ListOfMapOfString$dynamic(), dart.fn(snapshot => snapshot.docs[$map](MapOfString$dynamic(), dart.fn(doc => src__services__repository.RepositoryService.normalizeMap(doc.id, doc.data()), DocumentSnapshotToMapOfString$dynamic()))[$toList](), QuerySnapshotToListOfMapOfString$dynamic()));
    }
  };
  (src__services__repository$.RepositoryQueryImp.new = function(query) {
    this[query$] = query;
  }).prototype = src__services__repository$.RepositoryQueryImp.prototype;
  dart.addTypeTests(src__services__repository$.RepositoryQueryImp);
  const query$ = Symbol("RepositoryQueryImp.query");
  dart.setMethodSignature(src__services__repository$.RepositoryQueryImp, () => ({
    __proto__: dart.getMethods(src__services__repository$.RepositoryQueryImp.__proto__),
    where: dart.fnType(src__services__repository.RepositoryQuery, [core.String], {isEqualTo: dart.dynamic, isLessThan: dart.dynamic, isLessThanOrEqualTo: dart.dynamic, isGreaterThan: dart.dynamic, isGreaterThanOrEqualTo: dart.dynamic, arrayContains: dart.dynamic, isNull: core.bool}),
    get: dart.fnType(async.Future$(core.List$(core.Map$(core.String, dart.dynamic))), [])
  }));
  dart.setFieldSignature(src__services__repository$.RepositoryQueryImp, () => ({
    __proto__: dart.getFields(src__services__repository$.RepositoryQueryImp.__proto__),
    query: dart.finalFieldType(QueryOfQueryJsImpl())
  }));
  dart.trackLibraries("packages/avocado_web/src/services/repository.ddc", {
    "package:avocado_web/src/services/repository.dart": src__services__repository$
  }, '{"version":3,"sourceRoot":"","sources":["repository.dart"],"names":[],"mappings":"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","file":"repository.ddc.js"}');
  // Exports:
  return {
    src__services__repository: src__services__repository$
  };
});

//# sourceMappingURL=repository.ddc.js.map
