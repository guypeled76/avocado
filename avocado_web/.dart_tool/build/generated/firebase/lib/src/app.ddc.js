define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const js_util = dart_sdk.js_util;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__func = Object.create(_root);
  const src__interop__storage_interop = Object.create(_root);
  const src__interop__messaging_interop = Object.create(_root);
  const src__interop__firestore_interop = Object.create(_root);
  const src__interop__firebase_interop = Object.create(_root);
  const src__interop__database_interop = Object.create(_root);
  const src__interop__app_interop = Object.create(_root);
  const src__interop__auth_interop = Object.create(_root);
  const src__js = Object.create(_root);
  const src__interop__js_interop = Object.create(_root);
  const src__storage = Object.create(_root);
  const src__database = Object.create(_root);
  const src__firestore = Object.create(_root);
  const src__utils = Object.create(_root);
  const src__auth = Object.create(_root);
  const src__app = Object.create(_root);
  const $cast = dartx.cast;
  const $toString = dartx.toString;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $insert = dartx.insert;
  const $length = dartx.length;
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  let ExpandoOfStorage = () => (ExpandoOfStorage = dart.constFn(core.Expando$(src__storage.Storage)))();
  let dynamicToFullMetadata = () => (dynamicToFullMetadata = dart.constFn(dart.fnType(src__storage.FullMetadata, [dart.dynamic])))();
  let ExpandoOfStorageReference = () => (ExpandoOfStorageReference = dart.constFn(core.Expando$(src__storage.StorageReference)))();
  let ExpandoOfFullMetadata = () => (ExpandoOfFullMetadata = dart.constFn(core.Expando$(src__storage.FullMetadata)))();
  let UploadTaskSnapshotJsImplToUploadTaskSnapshot = () => (UploadTaskSnapshotJsImplToUploadTaskSnapshot = dart.constFn(dart.fnType(src__storage.UploadTaskSnapshot, [dart.lazyJSType(() => dart.global.firebase.storage.UploadTaskSnapshot, "firebase.storage.UploadTaskSnapshot")])))();
  let UploadTaskSnapshotJsImplToNull = () => (UploadTaskSnapshotJsImplToNull = dart.constFn(dart.fnType(core.Null, [dart.lazyJSType(() => dart.global.firebase.storage.UploadTaskSnapshot, "firebase.storage.UploadTaskSnapshot")])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StreamControllerOfUploadTaskSnapshot = () => (StreamControllerOfUploadTaskSnapshot = dart.constFn(async.StreamController$(src__storage.UploadTaskSnapshot)))();
  let FutureOfUploadTaskSnapshot = () => (FutureOfUploadTaskSnapshot = dart.constFn(async.Future$(src__storage.UploadTaskSnapshot)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let ExpandoOfUploadTask = () => (ExpandoOfUploadTask = dart.constFn(core.Expando$(src__storage.UploadTask)))();
  let ExpandoOfUploadTaskSnapshot = () => (ExpandoOfUploadTaskSnapshot = dart.constFn(core.Expando$(src__storage.UploadTaskSnapshot)))();
  let ExpandoOfDatabase = () => (ExpandoOfDatabase = dart.constFn(core.Expando$(src__database.Database)))();
  let DatabaseReferenceOfReferenceJsImpl = () => (DatabaseReferenceOfReferenceJsImpl = dart.constFn(src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"))))();
  let CompleterOfTransaction = () => (CompleterOfTransaction = dart.constFn(async.Completer$(src__database.Transaction)))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let dynamicAndboolAndDataSnapshotJsImplToNull = () => (dynamicAndboolAndDataSnapshotJsImplToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.bool, dart.anonymousJSType("DataSnapshotJsImpl")])))();
  let QueryOfQueryJsImpl = () => (QueryOfQueryJsImpl = dart.constFn(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query"))))();
  let DataSnapshotJsImpl__ToNull = () => (DataSnapshotJsImpl__ToNull = dart.constFn(dart.fnType(core.Null, [dart.anonymousJSType("DataSnapshotJsImpl")], [core.String])))();
  let StreamControllerOfQueryEvent = () => (StreamControllerOfQueryEvent = dart.constFn(async.StreamController$(src__database.QueryEvent)))();
  let CompleterOfQueryEvent = () => (CompleterOfQueryEvent = dart.constFn(async.Completer$(src__database.QueryEvent)))();
  let StreamOfQueryEvent = () => (StreamOfQueryEvent = dart.constFn(async.Stream$(src__database.QueryEvent)))();
  let ExpandoOfDatabaseReferenceOfReferenceJsImpl = () => (ExpandoOfDatabaseReferenceOfReferenceJsImpl = dart.constFn(core.Expando$(DatabaseReferenceOfReferenceJsImpl())))();
  let ExpandoOfDataSnapshot = () => (ExpandoOfDataSnapshot = dart.constFn(core.Expando$(src__database.DataSnapshot)))();
  let ReferenceJsImplToDatabaseReferenceOfReferenceJsImpl = () => (ReferenceJsImplToDatabaseReferenceOfReferenceJsImpl = dart.constFn(dart.fnType(DatabaseReferenceOfReferenceJsImpl(), [dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")])))();
  let FutureOfDatabaseReferenceOfReferenceJsImpl = () => (FutureOfDatabaseReferenceOfReferenceJsImpl = dart.constFn(async.Future$(DatabaseReferenceOfReferenceJsImpl())))();
  let FutureOfObject = () => (FutureOfObject = dart.constFn(async.Future$(core.Object)))();
  let ObjectTodynamic = () => (ObjectTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.Object])))();
  let dynamicToPromiseJsImpl = () => (dynamicToPromiseJsImpl = dart.constFn(dart.fnType(dart.lazyJSType(() => dart.global.firebase.Promise, "firebase.Promise"), [dart.dynamic])))();
  let ExpandoOfFirestore = () => (ExpandoOfFirestore = dart.constFn(core.Expando$(src__firestore.Firestore)))();
  let ExpandoOfWriteBatch = () => (ExpandoOfWriteBatch = dart.constFn(core.Expando$(src__firestore.WriteBatch)))();
  let DocumentSnapshotJsImplToDocumentSnapshot = () => (DocumentSnapshotJsImplToDocumentSnapshot = dart.constFn(dart.fnType(src__firestore.DocumentSnapshot, [dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")])))();
  let DocumentSnapshotJsImplToNull = () => (DocumentSnapshotJsImplToNull = dart.constFn(dart.fnType(core.Null, [dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")])))();
  let StreamControllerOfDocumentSnapshot = () => (StreamControllerOfDocumentSnapshot = dart.constFn(async.StreamController$(src__firestore.DocumentSnapshot)))();
  let ExpandoOfDocumentReference = () => (ExpandoOfDocumentReference = dart.constFn(core.Expando$(src__firestore.DocumentReference)))();
  let QueryOfQueryJsImpl$ = () => (QueryOfQueryJsImpl$ = dart.constFn(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query"))))();
  let QuerySnapshotJsImplToQuerySnapshot = () => (QuerySnapshotJsImplToQuerySnapshot = dart.constFn(dart.fnType(src__firestore.QuerySnapshot, [dart.lazyJSType(() => dart.global.firebase.firestore.QuerySnapshot, "firebase.firestore.QuerySnapshot")])))();
  let QuerySnapshotJsImplToNull = () => (QuerySnapshotJsImplToNull = dart.constFn(dart.fnType(core.Null, [dart.lazyJSType(() => dart.global.firebase.firestore.QuerySnapshot, "firebase.firestore.QuerySnapshot")])))();
  let StreamControllerOfQuerySnapshot = () => (StreamControllerOfQuerySnapshot = dart.constFn(async.StreamController$(src__firestore.QuerySnapshot)))();
  let JSArrayOfDocumentSnapshotJsImpl = () => (JSArrayOfDocumentSnapshotJsImpl = dart.constFn(_interceptors.JSArray$(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot"))))();
  let CollectionReferenceOfCollectionReferenceJsImpl = () => (CollectionReferenceOfCollectionReferenceJsImpl = dart.constFn(src__firestore.CollectionReference$(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference"))))();
  let DocumentReferenceJsImplToDocumentReference = () => (DocumentReferenceJsImplToDocumentReference = dart.constFn(dart.fnType(src__firestore.DocumentReference, [dart.lazyJSType(() => dart.global.firebase.firestore.DocumentReference, "firebase.firestore.DocumentReference")])))();
  let ExpandoOfCollectionReferenceOfCollectionReferenceJsImpl = () => (ExpandoOfCollectionReferenceOfCollectionReferenceJsImpl = dart.constFn(core.Expando$(CollectionReferenceOfCollectionReferenceJsImpl())))();
  let ExpandoOfDocumentChange = () => (ExpandoOfDocumentChange = dart.constFn(core.Expando$(src__firestore.DocumentChange)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let ExpandoOfDocumentSnapshot = () => (ExpandoOfDocumentSnapshot = dart.constFn(core.Expando$(src__firestore.DocumentSnapshot)))();
  let dynamicToDocumentChange = () => (dynamicToDocumentChange = dart.constFn(dart.fnType(src__firestore.DocumentChange, [dart.dynamic])))();
  let dynamicToDocumentSnapshot = () => (dynamicToDocumentSnapshot = dart.constFn(dart.fnType(src__firestore.DocumentSnapshot, [dart.dynamic])))();
  let ExpandoOfQuerySnapshot = () => (ExpandoOfQuerySnapshot = dart.constFn(core.Expando$(src__firestore.QuerySnapshot)))();
  let ExpandoOfTransaction = () => (ExpandoOfTransaction = dart.constFn(core.Expando$(src__firestore.Transaction)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let FnAndFnToNull = () => (FnAndFnToNull = dart.constFn(dart.fnType(core.Null, [dynamicTovoid(), dynamicTovoid()])))();
  let UserInfoOfUserInfoJsImpl = () => (UserInfoOfUserInfoJsImpl = dart.constFn(src__auth.UserInfo$(dart.anonymousJSType("UserInfoJsImpl"))))();
  let dynamicToUserInfoOfUserInfoJsImpl = () => (dynamicToUserInfoOfUserInfoJsImpl = dart.constFn(dart.fnType(UserInfoOfUserInfoJsImpl(), [dart.dynamic])))();
  let UserCredentialJsImplToUserCredential = () => (UserCredentialJsImplToUserCredential = dart.constFn(dart.fnType(src__auth.UserCredential, [dart.anonymousJSType("UserCredentialJsImpl")])))();
  let UserJsImplToUser = () => (UserJsImplToUser = dart.constFn(dart.fnType(src__auth.User, [dart.anonymousJSType("UserJsImpl")])))();
  let ConfirmationResultJsImplToConfirmationResult = () => (ConfirmationResultJsImplToConfirmationResult = dart.constFn(dart.fnType(src__auth.ConfirmationResult, [dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult")])))();
  let dynamicToUserCredential = () => (dynamicToUserCredential = dart.constFn(dart.fnType(src__auth.UserCredential, [dart.dynamic])))();
  let ExpandoOfUser = () => (ExpandoOfUser = dart.constFn(core.Expando$(src__auth.User)))();
  let UserJsImplToNull = () => (UserJsImplToNull = dart.constFn(dart.fnType(core.Null, [dart.anonymousJSType("UserJsImpl")])))();
  let StreamControllerOfUser = () => (StreamControllerOfUser = dart.constFn(async.StreamController$(src__auth.User)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ExpandoOfAuth = () => (ExpandoOfAuth = dart.constFn(core.Expando$(src__auth.Auth)))();
  let ExpandoOfApp = () => (ExpandoOfApp = dart.constFn(core.Expando$(src__app.App)))();
  const _is_JsObjectWrapper_default = Symbol('_is_JsObjectWrapper_default');
  src__js.JsObjectWrapper$ = dart.generic(T => {
    class JsObjectWrapper extends core.Object {
      get jsObject() {
        return this[jsObject$];
      }
      set jsObject(value) {
        super.jsObject = value;
      }
    }
    (JsObjectWrapper.fromJsObject = function(jsObject) {
      this[jsObject$] = jsObject;
    }).prototype = JsObjectWrapper.prototype;
    dart.addTypeTests(JsObjectWrapper);
    JsObjectWrapper.prototype[_is_JsObjectWrapper_default] = true;
    const jsObject$ = Symbol("JsObjectWrapper.jsObject");
    dart.setFieldSignature(JsObjectWrapper, () => ({
      __proto__: dart.getFields(JsObjectWrapper.__proto__),
      jsObject: dart.finalFieldType(T)
    }));
    return JsObjectWrapper;
  });
  src__js.JsObjectWrapper = src__js.JsObjectWrapper$();
  dart.addTypeTests(src__js.JsObjectWrapper, _is_JsObjectWrapper_default);
  src__interop__js_interop.dartifyDate = function(jsObject) {
    if (dart.dtest(js_util.hasProperty(jsObject, "toDateString"))) {
      try {
        let date = jsObject;
        return new core.DateTime.fromMillisecondsSinceEpoch(core.int._check(dart.dsend(date, 'getTime', [])));
      } catch (e) {
        if (core.NoSuchMethodError.is(e)) {
          return null;
        } else
          throw e;
      }
    }
    return null;
  };
  src__storage.TaskState = class TaskState extends core.Object {
    toString() {
      return {
        0: "TaskState.RUNNING",
        1: "TaskState.PAUSED",
        2: "TaskState.SUCCESS",
        3: "TaskState.CANCELED",
        4: "TaskState.ERROR"
      }[this.index];
    }
  };
  (src__storage.TaskState.new = function(x) {
    this.index = x;
  }).prototype = src__storage.TaskState.prototype;
  dart.addTypeTests(src__storage.TaskState);
  dart.setFieldSignature(src__storage.TaskState, () => ({
    __proto__: dart.getFields(src__storage.TaskState.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__storage.TaskState, ['toString']);
  src__storage.TaskState.RUNNING = dart.const(new src__storage.TaskState.new(0));
  src__storage.TaskState.PAUSED = dart.const(new src__storage.TaskState.new(1));
  src__storage.TaskState.SUCCESS = dart.const(new src__storage.TaskState.new(2));
  src__storage.TaskState.CANCELED = dart.const(new src__storage.TaskState.new(3));
  src__storage.TaskState.ERROR = dart.const(new src__storage.TaskState.new(4));
  src__storage.TaskState.values = dart.constList([src__storage.TaskState.RUNNING, src__storage.TaskState.PAUSED, src__storage.TaskState.SUCCESS, src__storage.TaskState.CANCELED, src__storage.TaskState.ERROR], src__storage.TaskState);
  src__storage.Storage = class Storage extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.storage.Storage, "firebase.storage.Storage")) {
    get app() {
      return src__app.App.getInstance(this.jsObject.app);
    }
    get maxOperationRetryTime() {
      return this.jsObject.maxOperationRetryTime;
    }
    get maxUploadRetryTime() {
      return this.jsObject.maxUploadRetryTime;
    }
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__storage.Storage._expando._get(jsObject);
      return t == null ? src__storage.Storage._expando._set(jsObject, new src__storage.Storage._fromJsObject(jsObject)) : t;
    }
    ref(path) {
      if (path === void 0) path = null;
      return src__storage.StorageReference.getInstance(this.jsObject.ref(path));
    }
    refFromURL(url) {
      return src__storage.StorageReference.getInstance(this.jsObject.refFromURL(url));
    }
    setMaxOperationRetryTime(time) {
      return this.jsObject.setMaxOperationRetryTime(time);
    }
    setMaxUploadRetryTime(time) {
      return this.jsObject.setMaxUploadRetryTime(time);
    }
  };
  (src__storage.Storage._fromJsObject = function(jsObject) {
    src__storage.Storage.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__storage.Storage.prototype;
  dart.addTypeTests(src__storage.Storage);
  dart.setMethodSignature(src__storage.Storage, () => ({
    __proto__: dart.getMethods(src__storage.Storage.__proto__),
    ref: dart.fnType(src__storage.StorageReference, [], [core.String]),
    refFromURL: dart.fnType(src__storage.StorageReference, [core.String]),
    setMaxOperationRetryTime: dart.fnType(dart.void, [core.int]),
    setMaxUploadRetryTime: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(src__storage.Storage, () => ({
    __proto__: dart.getGetters(src__storage.Storage.__proto__),
    app: src__app.App,
    maxOperationRetryTime: core.int,
    maxUploadRetryTime: core.int
  }));
  dart.defineLazy(src__storage.Storage, {
    /*src__storage.Storage._expando*/get _expando() {
      return new (ExpandoOfStorage()).new();
    }
  });
  src__storage.StorageReference = class StorageReference extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.storage.Reference, "firebase.storage.Reference")) {
    get bucket() {
      return this.jsObject.bucket;
    }
    get fullPath() {
      return this.jsObject.fullPath;
    }
    get name() {
      return this.jsObject.name;
    }
    get parent() {
      return src__storage.StorageReference.getInstance(this.jsObject.parent);
    }
    get root() {
      return src__storage.StorageReference.getInstance(this.jsObject.root);
    }
    get storage() {
      return src__storage.Storage.getInstance(this.jsObject.storage);
    }
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__storage.StorageReference._expando._get(jsObject);
      return t == null ? src__storage.StorageReference._expando._set(jsObject, new src__storage.StorageReference._fromJsObject(jsObject)) : t;
    }
    child(path) {
      return src__storage.StorageReference.getInstance(this.jsObject.child(path));
    }
    delete() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.delete());
    }
    getDownloadURL() {
      return async.async(core.Uri, (function* getDownloadURL() {
        let uriString = (yield src__utils.handleThenable(core.String, this.jsObject.getDownloadURL()));
        return core.Uri.parse(uriString);
      }).bind(this));
    }
    getMetadata() {
      return src__utils.handleThenable(dart.anonymousJSType("FullMetadataJsImpl"), this.jsObject.getMetadata()).then(src__storage.FullMetadata, dart.fn(src__storage.FullMetadata.getInstance, dynamicToFullMetadata()));
    }
    put(blob, metadata) {
      if (metadata === void 0) metadata = null;
      let taskImpl = null;
      if (metadata != null) {
        taskImpl = this.jsObject.put(blob, metadata.jsObject);
      } else {
        taskImpl = this.jsObject.put(blob);
      }
      return src__storage.UploadTask.getInstance(taskImpl);
    }
    putString(data, format, metadata) {
      if (format === void 0) format = null;
      if (metadata === void 0) metadata = null;
      let taskImpl = null;
      if (metadata != null) {
        taskImpl = this.jsObject.putString(data, format, metadata.jsObject);
      } else if (format != null) {
        taskImpl = this.jsObject.putString(data, format);
      } else {
        taskImpl = this.jsObject.putString(data);
      }
      return src__storage.UploadTask.getInstance(taskImpl);
    }
    toString() {
      return dart.toString(this.jsObject);
    }
    updateMetadata(metadata) {
      return src__utils.handleThenable(dart.anonymousJSType("FullMetadataJsImpl"), this.jsObject.updateMetadata(metadata.jsObject)).then(src__storage.FullMetadata, dart.fn(src__storage.FullMetadata.getInstance, dynamicToFullMetadata()));
    }
  };
  (src__storage.StorageReference._fromJsObject = function(jsObject) {
    src__storage.StorageReference.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__storage.StorageReference.prototype;
  dart.addTypeTests(src__storage.StorageReference);
  dart.setMethodSignature(src__storage.StorageReference, () => ({
    __proto__: dart.getMethods(src__storage.StorageReference.__proto__),
    child: dart.fnType(src__storage.StorageReference, [core.String]),
    delete: dart.fnType(async.Future, []),
    getDownloadURL: dart.fnType(async.Future$(core.Uri), []),
    getMetadata: dart.fnType(async.Future$(src__storage.FullMetadata), []),
    put: dart.fnType(src__storage.UploadTask, [dart.dynamic], [src__storage.UploadMetadata]),
    putString: dart.fnType(src__storage.UploadTask, [core.String], [core.String, src__storage.UploadMetadata]),
    updateMetadata: dart.fnType(async.Future$(src__storage.FullMetadata), [src__storage.SettableMetadata])
  }));
  dart.setGetterSignature(src__storage.StorageReference, () => ({
    __proto__: dart.getGetters(src__storage.StorageReference.__proto__),
    bucket: core.String,
    fullPath: core.String,
    name: core.String,
    parent: src__storage.StorageReference,
    root: src__storage.StorageReference,
    storage: src__storage.Storage
  }));
  dart.defineExtensionMethods(src__storage.StorageReference, ['toString']);
  dart.defineLazy(src__storage.StorageReference, {
    /*src__storage.StorageReference._expando*/get _expando() {
      return new (ExpandoOfStorageReference()).new();
    }
  });
  const _is__SettableMetadataBase_default = Symbol('_is__SettableMetadataBase_default');
  src__storage._SettableMetadataBase$ = dart.generic(T => {
    class _SettableMetadataBase extends src__js.JsObjectWrapper$(T) {
      get cacheControl() {
        return this.jsObject.cacheControl;
      }
      set cacheControl(s) {
        this.jsObject.cacheControl = s;
      }
      get contentDisposition() {
        return this.jsObject.contentDisposition;
      }
      set contentDisposition(s) {
        this.jsObject.contentDisposition = s;
      }
      get contentEncoding() {
        return this.jsObject.contentEncoding;
      }
      set contentEncoding(s) {
        this.jsObject.contentEncoding = s;
      }
      get contentLanguage() {
        return this.jsObject.contentLanguage;
      }
      set contentLanguage(s) {
        this.jsObject.contentLanguage = s;
      }
      get contentType() {
        return this.jsObject.contentType;
      }
      set contentType(s) {
        this.jsObject.contentType = s;
      }
      get customMetadata() {
        let t = core.Map.as(src__utils.dartify(this.jsObject.customMetadata));
        return t == null ? null : t[$cast](core.String, core.String);
      }
      set customMetadata(m) {
        this.jsObject.customMetadata = src__utils.jsify(m);
      }
    }
    (_SettableMetadataBase.fromJsObject = function(jsObject) {
      _SettableMetadataBase.__proto__.fromJsObject.call(this, jsObject);
    }).prototype = _SettableMetadataBase.prototype;
    dart.addTypeTests(_SettableMetadataBase);
    _SettableMetadataBase.prototype[_is__SettableMetadataBase_default] = true;
    dart.setGetterSignature(_SettableMetadataBase, () => ({
      __proto__: dart.getGetters(_SettableMetadataBase.__proto__),
      cacheControl: core.String,
      contentDisposition: core.String,
      contentEncoding: core.String,
      contentLanguage: core.String,
      contentType: core.String,
      customMetadata: core.Map$(core.String, core.String)
    }));
    dart.setSetterSignature(_SettableMetadataBase, () => ({
      __proto__: dart.getSetters(_SettableMetadataBase.__proto__),
      cacheControl: core.String,
      contentDisposition: core.String,
      contentEncoding: core.String,
      contentLanguage: core.String,
      contentType: core.String,
      customMetadata: core.Map$(core.String, core.String)
    }));
    return _SettableMetadataBase;
  });
  src__storage._SettableMetadataBase = src__storage._SettableMetadataBase$();
  dart.addTypeTests(src__storage._SettableMetadataBase, _is__SettableMetadataBase_default);
  const _is__UploadMetadataBase_default = Symbol('_is__UploadMetadataBase_default');
  src__storage._UploadMetadataBase$ = dart.generic(T => {
    class _UploadMetadataBase extends src__storage._SettableMetadataBase$(T) {
      get md5Hash() {
        return this.jsObject.md5Hash;
      }
      set md5Hash(s) {
        this.jsObject.md5Hash = s;
      }
    }
    (_UploadMetadataBase.fromJsObject = function(jsObject) {
      _UploadMetadataBase.__proto__.fromJsObject.call(this, jsObject);
    }).prototype = _UploadMetadataBase.prototype;
    dart.addTypeTests(_UploadMetadataBase);
    _UploadMetadataBase.prototype[_is__UploadMetadataBase_default] = true;
    dart.setGetterSignature(_UploadMetadataBase, () => ({
      __proto__: dart.getGetters(_UploadMetadataBase.__proto__),
      md5Hash: core.String
    }));
    dart.setSetterSignature(_UploadMetadataBase, () => ({
      __proto__: dart.getSetters(_UploadMetadataBase.__proto__),
      md5Hash: core.String
    }));
    return _UploadMetadataBase;
  });
  src__storage._UploadMetadataBase = src__storage._UploadMetadataBase$();
  dart.addTypeTests(src__storage._UploadMetadataBase, _is__UploadMetadataBase_default);
  src__storage.FullMetadata = class FullMetadata extends src__storage._UploadMetadataBase$(dart.anonymousJSType("FullMetadataJsImpl")) {
    get bucket() {
      return this.jsObject.bucket;
    }
    get fullPath() {
      return this.jsObject.fullPath;
    }
    get generation() {
      return this.jsObject.generation;
    }
    get metageneration() {
      return this.jsObject.metageneration;
    }
    get name() {
      return this.jsObject.name;
    }
    get size() {
      return this.jsObject.size;
    }
    get timeCreated() {
      return core.DateTime.parse(this.jsObject.timeCreated);
    }
    get updated() {
      return core.DateTime.parse(this.jsObject.updated);
    }
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__storage.FullMetadata._expando._get(jsObject);
      return t == null ? src__storage.FullMetadata._expando._set(jsObject, new src__storage.FullMetadata._fromJsObject(jsObject)) : t;
    }
  };
  (src__storage.FullMetadata._fromJsObject = function(jsObject) {
    src__storage.FullMetadata.__proto__.fromJsObject.call(this, dart.anonymousJSType("FullMetadataJsImpl")._check(jsObject));
  }).prototype = src__storage.FullMetadata.prototype;
  dart.addTypeTests(src__storage.FullMetadata);
  dart.setGetterSignature(src__storage.FullMetadata, () => ({
    __proto__: dart.getGetters(src__storage.FullMetadata.__proto__),
    bucket: core.String,
    fullPath: core.String,
    generation: core.String,
    metageneration: core.String,
    name: core.String,
    size: core.int,
    timeCreated: core.DateTime,
    updated: core.DateTime
  }));
  dart.defineLazy(src__storage.FullMetadata, {
    /*src__storage.FullMetadata._expando*/get _expando() {
      return new (ExpandoOfFullMetadata()).new();
    }
  });
  src__storage.UploadMetadata = class UploadMetadata extends src__storage._UploadMetadataBase$(dart.anonymousJSType("UploadMetadataJsImpl")) {
    static new(opts) {
      let md5Hash = opts && 'md5Hash' in opts ? opts.md5Hash : null;
      let cacheControl = opts && 'cacheControl' in opts ? opts.cacheControl : null;
      let contentDisposition = opts && 'contentDisposition' in opts ? opts.contentDisposition : null;
      let contentEncoding = opts && 'contentEncoding' in opts ? opts.contentEncoding : null;
      let contentLanguage = opts && 'contentLanguage' in opts ? opts.contentLanguage : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let customMetadata = opts && 'customMetadata' in opts ? opts.customMetadata : null;
      return new src__storage.UploadMetadata.fromJsObject({md5Hash: md5Hash, cacheControl: cacheControl, contentDisposition: contentDisposition, contentEncoding: contentEncoding, contentLanguage: contentLanguage, contentType: contentType, customMetadata: customMetadata != null ? src__utils.jsify(customMetadata) : null});
    }
  };
  (src__storage.UploadMetadata.fromJsObject = function(jsObject) {
    src__storage.UploadMetadata.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__storage.UploadMetadata.prototype;
  dart.addTypeTests(src__storage.UploadMetadata);
  const _future = Symbol('_future');
  const _onStateChangedUnsubscribe = Symbol('_onStateChangedUnsubscribe');
  const _changeController = Symbol('_changeController');
  src__storage.UploadTask = class UploadTask extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.storage.UploadTask, "firebase.storage.UploadTask")) {
    get future() {
      let t = this[_future];
      t == null ? this[_future] = src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.storage.UploadTaskSnapshot, "firebase.storage.UploadTaskSnapshot"), this.jsObject).then(src__storage.UploadTaskSnapshot, dart.fn(src__storage.UploadTaskSnapshot.getInstance, UploadTaskSnapshotJsImplToUploadTaskSnapshot())) : t;
      return this[_future];
    }
    get snapshot() {
      return src__storage.UploadTaskSnapshot.getInstance(this.jsObject.snapshot);
    }
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__storage.UploadTask._expando._get(jsObject);
      return t == null ? src__storage.UploadTask._expando._set(jsObject, new src__storage.UploadTask._fromJsObject(jsObject)) : t;
    }
    cancel() {
      return this.jsObject.cancel();
    }
    get onStateChanged() {
      if (this[_changeController] == null) {
        let nextWrapper = js.allowInterop(UploadTaskSnapshotJsImplToNull(), dart.fn(data => {
          this[_changeController].add(src__storage.UploadTaskSnapshot.getInstance(data));
        }, UploadTaskSnapshotJsImplToNull()));
        let errorWrapper = js.allowInterop(dynamicTovoid(), dart.fn(e => this[_changeController].addError(e), dynamicTovoid()));
        let onCompletion = js.allowInterop(VoidToFuture(), dart.fn(() => this[_changeController].close(), VoidToFuture()));
        const startListen = (function() {
          this[_onStateChangedUnsubscribe] = this.jsObject.on(core.String._check(dart.global.firebase.storage.TaskEvent.STATE_CHANGED), nextWrapper, errorWrapper, onCompletion);
        }).bind(this);
        dart.fn(startListen, VoidTovoid());
        const stopListen = (function() {
          this[_onStateChangedUnsubscribe]();
        }).bind(this);
        dart.fn(stopListen, VoidTovoid());
        this[_changeController] = StreamControllerOfUploadTaskSnapshot().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return this[_changeController].stream;
    }
    pause() {
      return this.jsObject.pause();
    }
    resume() {
      return this.jsObject.resume();
    }
  };
  (src__storage.UploadTask._fromJsObject = function(jsObject) {
    this[_future] = null;
    this[_onStateChangedUnsubscribe] = null;
    this[_changeController] = null;
    src__storage.UploadTask.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__storage.UploadTask.prototype;
  dart.addTypeTests(src__storage.UploadTask);
  dart.setMethodSignature(src__storage.UploadTask, () => ({
    __proto__: dart.getMethods(src__storage.UploadTask.__proto__),
    cancel: dart.fnType(core.bool, []),
    pause: dart.fnType(core.bool, []),
    resume: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(src__storage.UploadTask, () => ({
    __proto__: dart.getGetters(src__storage.UploadTask.__proto__),
    future: async.Future$(src__storage.UploadTaskSnapshot),
    snapshot: src__storage.UploadTaskSnapshot,
    onStateChanged: async.Stream$(src__storage.UploadTaskSnapshot)
  }));
  dart.setFieldSignature(src__storage.UploadTask, () => ({
    __proto__: dart.getFields(src__storage.UploadTask.__proto__),
    [_future]: dart.fieldType(FutureOfUploadTaskSnapshot()),
    [_onStateChangedUnsubscribe]: dart.fieldType(VoidTodynamic()),
    [_changeController]: dart.fieldType(StreamControllerOfUploadTaskSnapshot())
  }));
  dart.defineLazy(src__storage.UploadTask, {
    /*src__storage.UploadTask._expando*/get _expando() {
      return new (ExpandoOfUploadTask()).new();
    }
  });
  src__storage.UploadTaskSnapshot = class UploadTaskSnapshot extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.storage.UploadTaskSnapshot, "firebase.storage.UploadTaskSnapshot")) {
    get bytesTransferred() {
      return this.jsObject.bytesTransferred;
    }
    get metadata() {
      return src__storage.FullMetadata.getInstance(this.jsObject.metadata);
    }
    get ref() {
      return src__storage.StorageReference.getInstance(this.jsObject.ref);
    }
    get state() {
      switch (this.jsObject.state) {
        case "running":
        {
          return src__storage.TaskState.RUNNING;
        }
        case "paused":
        {
          return src__storage.TaskState.PAUSED;
        }
        case "success":
        {
          return src__storage.TaskState.SUCCESS;
        }
        case "canceled":
        {
          return src__storage.TaskState.CANCELED;
        }
        case "error":
        {
          return src__storage.TaskState.ERROR;
        }
        default:
        {
          dart.throw(new core.UnsupportedError.new("Unknown state \"" + dart.str(this.jsObject.state) + "\" please file a bug."));
        }
      }
    }
    get task() {
      return src__storage.UploadTask.getInstance(this.jsObject.task);
    }
    get totalBytes() {
      return this.jsObject.totalBytes;
    }
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__storage.UploadTaskSnapshot._expando._get(jsObject);
      return t == null ? src__storage.UploadTaskSnapshot._expando._set(jsObject, new src__storage.UploadTaskSnapshot._fromJsObject(jsObject)) : t;
    }
  };
  (src__storage.UploadTaskSnapshot._fromJsObject = function(jsObject) {
    src__storage.UploadTaskSnapshot.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__storage.UploadTaskSnapshot.prototype;
  dart.addTypeTests(src__storage.UploadTaskSnapshot);
  dart.setGetterSignature(src__storage.UploadTaskSnapshot, () => ({
    __proto__: dart.getGetters(src__storage.UploadTaskSnapshot.__proto__),
    bytesTransferred: core.int,
    metadata: src__storage.FullMetadata,
    ref: src__storage.StorageReference,
    state: src__storage.TaskState,
    task: src__storage.UploadTask,
    totalBytes: core.int
  }));
  dart.defineLazy(src__storage.UploadTaskSnapshot, {
    /*src__storage.UploadTaskSnapshot._expando*/get _expando() {
      return new (ExpandoOfUploadTaskSnapshot()).new();
    }
  });
  src__storage.SettableMetadata = class SettableMetadata extends src__storage._SettableMetadataBase$(dart.anonymousJSType("SettableMetadataJsImpl")) {
    static new(opts) {
      let cacheControl = opts && 'cacheControl' in opts ? opts.cacheControl : null;
      let contentDisposition = opts && 'contentDisposition' in opts ? opts.contentDisposition : null;
      let contentEncoding = opts && 'contentEncoding' in opts ? opts.contentEncoding : null;
      let contentLanguage = opts && 'contentLanguage' in opts ? opts.contentLanguage : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let customMetadata = opts && 'customMetadata' in opts ? opts.customMetadata : null;
      return new src__storage.SettableMetadata.fromJsObject({cacheControl: cacheControl, contentDisposition: contentDisposition, contentEncoding: contentEncoding, contentLanguage: contentLanguage, contentType: contentType, customMetadata: customMetadata != null ? src__utils.jsify(customMetadata) : null});
    }
  };
  (src__storage.SettableMetadata.fromJsObject = function(jsObject) {
    src__storage.SettableMetadata.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__storage.SettableMetadata.prototype;
  dart.addTypeTests(src__storage.SettableMetadata);
  src__database.enableLogging = function(logger, persistent) {
    if (logger === void 0) logger = null;
    if (persistent === void 0) persistent = false;
    return dart.global.firebase.database.enableLogging(src__utils.jsify(logger), persistent);
  };
  src__database.Database = class Database extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.database.Database, "firebase.database.Database")) {
    get app() {
      return src__app.App.getInstance(this.jsObject.app);
    }
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__database.Database._expando._get(jsObject);
      return t == null ? src__database.Database._expando._set(jsObject, new src__database.Database._fromJsObject(jsObject)) : t;
    }
    goOffline() {
      return this.jsObject.goOffline();
    }
    goOnline() {
      return this.jsObject.goOnline();
    }
    ref(path) {
      if (path === void 0) path = null;
      return src__database.DatabaseReference.getInstance(this.jsObject.ref(path));
    }
    refFromURL(url) {
      return src__database.DatabaseReference.getInstance(this.jsObject.refFromURL(url));
    }
  };
  (src__database.Database._fromJsObject = function(jsObject) {
    src__database.Database.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__database.Database.prototype;
  dart.addTypeTests(src__database.Database);
  dart.setMethodSignature(src__database.Database, () => ({
    __proto__: dart.getMethods(src__database.Database.__proto__),
    goOffline: dart.fnType(dart.void, []),
    goOnline: dart.fnType(dart.void, []),
    ref: dart.fnType(src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")), [], [core.String]),
    refFromURL: dart.fnType(src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")), [core.String])
  }));
  dart.setGetterSignature(src__database.Database, () => ({
    __proto__: dart.getGetters(src__database.Database.__proto__),
    app: src__app.App
  }));
  dart.defineLazy(src__database.Database, {
    /*src__database.Database._expando*/get _expando() {
      return new (ExpandoOfDatabase()).new();
    }
  });
  const _onValue = Symbol('_onValue');
  const _onChildAdded = Symbol('_onChildAdded');
  const _onChildRemoved = Symbol('_onChildRemoved');
  const _onChildChanged = Symbol('_onChildChanged');
  const _onChildMoved = Symbol('_onChildMoved');
  const _createStream = Symbol('_createStream');
  const _is_Query_default = Symbol('_is_Query_default');
  src__database.Query$ = dart.generic(T => {
    class Query extends src__js.JsObjectWrapper$(T) {
      get ref() {
        return src__database.DatabaseReference.getInstance(this.jsObject.ref);
      }
      get onValue() {
        let t = this[_onValue];
        return t == null ? this[_onValue] = this[_createStream]("value") : t;
      }
      get onChildAdded() {
        let t = this[_onChildAdded];
        return t == null ? this[_onChildAdded] = this[_createStream]("child_added") : t;
      }
      get onChildRemoved() {
        let t = this[_onChildRemoved];
        return t == null ? this[_onChildRemoved] = this[_createStream]("child_removed") : t;
      }
      get onChildChanged() {
        let t = this[_onChildChanged];
        return t == null ? this[_onChildChanged] = this[_createStream]("child_changed") : t;
      }
      get onChildMoved() {
        let t = this[_onChildMoved];
        return t == null ? this[_onChildMoved] = this[_createStream]("child_moved") : t;
      }
      endAt(value, key) {
        if (key === void 0) key = null;
        return new (QueryOfQueryJsImpl()).fromJsObject(key == null ? this.jsObject.endAt(value) : this.jsObject.endAt(value, key));
      }
      equalTo(value, key) {
        if (key === void 0) key = null;
        return new (QueryOfQueryJsImpl()).fromJsObject(key == null ? this.jsObject.equalTo(value) : this.jsObject.equalTo(value, key));
      }
      isEqual(other) {
        return this.jsObject.isEqual(other.jsObject);
      }
      limitToFirst(limit) {
        return new (QueryOfQueryJsImpl()).fromJsObject(this.jsObject.limitToFirst(limit));
      }
      limitToLast(limit) {
        return new (QueryOfQueryJsImpl()).fromJsObject(this.jsObject.limitToLast(limit));
      }
      [_createStream](eventType) {
        let streamController = null;
        let callbackWrap = js.allowInterop(DataSnapshotJsImpl__ToNull(), dart.fn((data, string) => {
          if (string === void 0) string = null;
          streamController.add(new src__database.QueryEvent.new(src__database.DataSnapshot.getInstance(data), string));
        }, DataSnapshotJsImpl__ToNull()));
        const startListen = (function() {
          this.jsObject.on(eventType, callbackWrap);
        }).bind(this);
        dart.fn(startListen, VoidTovoid());
        const stopListen = (function() {
          this.jsObject.off(eventType, callbackWrap);
        }).bind(this);
        dart.fn(stopListen, VoidTovoid());
        streamController = StreamControllerOfQueryEvent().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
        return streamController.stream;
      }
      once(eventType) {
        let c = CompleterOfQueryEvent().new();
        this.jsObject.once(eventType, js.allowInterop(DataSnapshotJsImpl__ToNull(), dart.fn((snapshot, string) => {
          if (string === void 0) string = null;
          c.complete(new src__database.QueryEvent.new(src__database.DataSnapshot.getInstance(snapshot), string));
        }, DataSnapshotJsImpl__ToNull())), src__utils.resolveError(c));
        return c.future;
      }
      orderByChild(path) {
        return new (QueryOfQueryJsImpl()).fromJsObject(this.jsObject.orderByChild(path));
      }
      orderByKey() {
        return new (QueryOfQueryJsImpl()).fromJsObject(this.jsObject.orderByKey());
      }
      orderByPriority() {
        return new (QueryOfQueryJsImpl()).fromJsObject(this.jsObject.orderByPriority());
      }
      orderByValue() {
        return new (QueryOfQueryJsImpl()).fromJsObject(this.jsObject.orderByValue());
      }
      startAt(value, key) {
        if (key === void 0) key = null;
        return new (QueryOfQueryJsImpl()).fromJsObject(key == null ? this.jsObject.startAt(value) : this.jsObject.startAt(value, key));
      }
      toString() {
        return dart.toString(this.jsObject);
      }
      toJson() {
        return src__utils.dartify(this.jsObject.toJSON());
      }
    }
    (Query.fromJsObject = function(jsObject) {
      this[_onValue] = null;
      this[_onChildAdded] = null;
      this[_onChildRemoved] = null;
      this[_onChildChanged] = null;
      this[_onChildMoved] = null;
      Query.__proto__.fromJsObject.call(this, jsObject);
    }).prototype = Query.prototype;
    dart.addTypeTests(Query);
    Query.prototype[_is_Query_default] = true;
    dart.setMethodSignature(Query, () => ({
      __proto__: dart.getMethods(Query.__proto__),
      endAt: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [dart.dynamic], [core.String]),
      equalTo: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [dart.dynamic], [core.String]),
      isEqual: dart.fnType(core.bool, [src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query"))]),
      limitToFirst: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [core.int]),
      limitToLast: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [core.int]),
      [_createStream]: dart.fnType(async.Stream$(src__database.QueryEvent), [core.String]),
      once: dart.fnType(async.Future$(src__database.QueryEvent), [core.String]),
      orderByChild: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [core.String]),
      orderByKey: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), []),
      orderByPriority: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), []),
      orderByValue: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), []),
      startAt: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [dart.dynamic], [core.String]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, []),
      toJson: dart.fnType(dart.dynamic, [])
    }));
    dart.setGetterSignature(Query, () => ({
      __proto__: dart.getGetters(Query.__proto__),
      ref: src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")),
      onValue: async.Stream$(src__database.QueryEvent),
      onChildAdded: async.Stream$(src__database.QueryEvent),
      onChildRemoved: async.Stream$(src__database.QueryEvent),
      onChildChanged: async.Stream$(src__database.QueryEvent),
      onChildMoved: async.Stream$(src__database.QueryEvent)
    }));
    dart.setFieldSignature(Query, () => ({
      __proto__: dart.getFields(Query.__proto__),
      [_onValue]: dart.fieldType(StreamOfQueryEvent()),
      [_onChildAdded]: dart.fieldType(StreamOfQueryEvent()),
      [_onChildRemoved]: dart.fieldType(StreamOfQueryEvent()),
      [_onChildChanged]: dart.fieldType(StreamOfQueryEvent()),
      [_onChildMoved]: dart.fieldType(StreamOfQueryEvent())
    }));
    dart.defineExtensionMethods(Query, ['toString']);
    return Query;
  });
  src__database.Query = src__database.Query$();
  dart.addTypeTests(src__database.Query, _is_Query_default);
  const _is_DatabaseReference_default = Symbol('_is_DatabaseReference_default');
  src__database.DatabaseReference$ = dart.generic(T => {
    class DatabaseReference extends src__database.Query$(T) {
      get key() {
        return this.jsObject.key;
      }
      get parent() {
        return src__database.DatabaseReference.getInstance(this.jsObject.parent);
      }
      get root() {
        return src__database.DatabaseReference.getInstance(this.jsObject.root);
      }
      static getInstance(jsObject) {
        if (jsObject == null) {
          return null;
        }
        let t = src__database.DatabaseReference._expando._get(jsObject);
        return t == null ? src__database.DatabaseReference._expando._set(jsObject, new (DatabaseReferenceOfReferenceJsImpl())._fromJsObject(jsObject)) : t;
      }
      child(path) {
        return src__database.DatabaseReference.getInstance(this.jsObject.child(path));
      }
      onDisconnect() {
        return new src__database.OnDisconnect.fromJsObject(this.jsObject.onDisconnect());
      }
      push(value) {
        if (value === void 0) value = null;
        return new src__database.ThenableReference.fromJsObject(this.jsObject.push(src__utils.jsify(value)));
      }
      remove() {
        return src__utils.handleThenable(dart.dynamic, this.jsObject.remove());
      }
      set(value) {
        return src__utils.handleThenable(dart.dynamic, this.jsObject.set(src__utils.jsify(value)));
      }
      setPriority(priority) {
        return src__utils.handleThenable(dart.dynamic, this.jsObject.setPriority(priority));
      }
      setWithPriority(newVal, newPriority) {
        return src__utils.handleThenable(dart.dynamic, this.jsObject.setWithPriority(src__utils.jsify(newVal), newPriority));
      }
      transaction(transactionUpdate, applyLocally) {
        if (applyLocally === void 0) applyLocally = true;
        let c = CompleterOfTransaction().new();
        let transactionUpdateWrap = js.allowInterop(dynamicTodynamic(), dart.fn(update => src__utils.jsify(transactionUpdate(src__utils.dartify(update))), dynamicTodynamic()));
        let onCompleteWrap = js.allowInterop(dynamicAndboolAndDataSnapshotJsImplToNull(), dart.fn((error, committed, snapshot) => {
          if (error != null) {
            c.completeError(error);
          } else {
            c.complete(src__database.Transaction.new({committed: committed, snapshot: src__database.DataSnapshot.getInstance(snapshot)}));
          }
        }, dynamicAndboolAndDataSnapshotJsImplToNull()));
        this.jsObject.transaction(transactionUpdateWrap, onCompleteWrap, applyLocally);
        return c.future;
      }
      update(values) {
        return src__utils.handleThenable(dart.dynamic, this.jsObject.update(src__utils.jsify(values)));
      }
    }
    (DatabaseReference._fromJsObject = function(jsObject) {
      DatabaseReference.__proto__.fromJsObject.call(this, jsObject);
    }).prototype = DatabaseReference.prototype;
    dart.addTypeTests(DatabaseReference);
    DatabaseReference.prototype[_is_DatabaseReference_default] = true;
    dart.setMethodSignature(DatabaseReference, () => ({
      __proto__: dart.getMethods(DatabaseReference.__proto__),
      child: dart.fnType(src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")), [core.String]),
      onDisconnect: dart.fnType(src__database.OnDisconnect, []),
      push: dart.fnType(src__database.ThenableReference, [], [dart.dynamic]),
      remove: dart.fnType(async.Future, []),
      set: dart.fnType(async.Future, [dart.dynamic]),
      setPriority: dart.fnType(async.Future, [dart.dynamic]),
      setWithPriority: dart.fnType(async.Future, [dart.dynamic, dart.dynamic]),
      transaction: dart.fnType(async.Future$(src__database.Transaction), [dart.fnType(dart.dynamic, [dart.dynamic])], [core.bool]),
      update: dart.fnType(async.Future, [dart.dynamic])
    }));
    dart.setGetterSignature(DatabaseReference, () => ({
      __proto__: dart.getGetters(DatabaseReference.__proto__),
      key: core.String,
      parent: src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")),
      root: src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"))
    }));
    return DatabaseReference;
  });
  src__database.DatabaseReference = src__database.DatabaseReference$();
  dart.defineLazy(src__database.DatabaseReference, {
    /*src__database.DatabaseReference._expando*/get _expando() {
      return new (ExpandoOfDatabaseReferenceOfReferenceJsImpl()).new();
    }
  });
  dart.addTypeTests(src__database.DatabaseReference, _is_DatabaseReference_default);
  src__database.QueryEvent = class QueryEvent extends core.Object {
    get snapshot() {
      return this[snapshot$];
    }
    set snapshot(value) {
      super.snapshot = value;
    }
    get prevChildKey() {
      return this[prevChildKey$];
    }
    set prevChildKey(value) {
      super.prevChildKey = value;
    }
  };
  (src__database.QueryEvent.new = function(snapshot, prevChildKey) {
    if (prevChildKey === void 0) prevChildKey = null;
    this[snapshot$] = snapshot;
    this[prevChildKey$] = prevChildKey;
  }).prototype = src__database.QueryEvent.prototype;
  dart.addTypeTests(src__database.QueryEvent);
  const snapshot$ = Symbol("QueryEvent.snapshot");
  const prevChildKey$ = Symbol("QueryEvent.prevChildKey");
  dart.setFieldSignature(src__database.QueryEvent, () => ({
    __proto__: dart.getFields(src__database.QueryEvent.__proto__),
    snapshot: dart.finalFieldType(src__database.DataSnapshot),
    prevChildKey: dart.finalFieldType(core.String)
  }));
  src__database.DataSnapshot = class DataSnapshot extends src__js.JsObjectWrapper$(dart.anonymousJSType("DataSnapshotJsImpl")) {
    get key() {
      return this.jsObject.key;
    }
    get ref() {
      return src__database.DatabaseReference.getInstance(this.jsObject.ref);
    }
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__database.DataSnapshot._expando._get(jsObject);
      return t == null ? src__database.DataSnapshot._expando._set(jsObject, new src__database.DataSnapshot._fromJsObject(jsObject)) : t;
    }
    child(path) {
      return src__database.DataSnapshot.getInstance(this.jsObject.child(path));
    }
    exists() {
      return this.jsObject.exists();
    }
    exportVal() {
      return src__utils.dartify(this.jsObject.exportVal());
    }
    forEach(action) {
      let actionWrap = js.allowInterop(dynamicTodynamic(), dart.fn(d => action(src__database.DataSnapshot.getInstance(dart.anonymousJSType("DataSnapshotJsImpl")._check(d))), dynamicTodynamic()));
      return this.jsObject.forEach(actionWrap);
    }
    getPriority() {
      return this.jsObject.getPriority();
    }
    hasChild(path) {
      return this.jsObject.hasChild(path);
    }
    hasChildren() {
      return this.jsObject.hasChildren();
    }
    numChildren() {
      return this.jsObject.numChildren();
    }
    val() {
      return src__utils.dartify(this.jsObject.val());
    }
    toJson() {
      return src__utils.dartify(this.jsObject.toJSON());
    }
  };
  (src__database.DataSnapshot._fromJsObject = function(jsObject) {
    src__database.DataSnapshot.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__database.DataSnapshot.prototype;
  dart.addTypeTests(src__database.DataSnapshot);
  dart.setMethodSignature(src__database.DataSnapshot, () => ({
    __proto__: dart.getMethods(src__database.DataSnapshot.__proto__),
    child: dart.fnType(src__database.DataSnapshot, [core.String]),
    exists: dart.fnType(core.bool, []),
    exportVal: dart.fnType(dart.dynamic, []),
    forEach: dart.fnType(core.bool, [dart.fnType(dart.dynamic, [src__database.DataSnapshot])]),
    getPriority: dart.fnType(dart.dynamic, []),
    hasChild: dart.fnType(core.bool, [core.String]),
    hasChildren: dart.fnType(core.bool, []),
    numChildren: dart.fnType(core.int, []),
    val: dart.fnType(dart.dynamic, []),
    toJson: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(src__database.DataSnapshot, () => ({
    __proto__: dart.getGetters(src__database.DataSnapshot.__proto__),
    key: core.String,
    ref: src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"))
  }));
  dart.defineLazy(src__database.DataSnapshot, {
    /*src__database.DataSnapshot._expando*/get _expando() {
      return new (ExpandoOfDataSnapshot()).new();
    }
  });
  src__database.OnDisconnect = class OnDisconnect extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.database.OnDisconnect, "firebase.database.OnDisconnect")) {
    cancel() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.cancel());
    }
    remove() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.remove());
    }
    set(value) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.set(src__utils.jsify(value)));
    }
    setWithPriority(value, priority) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.setWithPriority(src__utils.jsify(value), priority));
    }
    update(values) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.update(src__utils.jsify(values)));
    }
  };
  (src__database.OnDisconnect.fromJsObject = function(jsObject) {
    src__database.OnDisconnect.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__database.OnDisconnect.prototype;
  dart.addTypeTests(src__database.OnDisconnect);
  dart.setMethodSignature(src__database.OnDisconnect, () => ({
    __proto__: dart.getMethods(src__database.OnDisconnect.__proto__),
    cancel: dart.fnType(async.Future, []),
    remove: dart.fnType(async.Future, []),
    set: dart.fnType(async.Future, [dart.dynamic]),
    setWithPriority: dart.fnType(async.Future, [dart.dynamic, dart.dynamic]),
    update: dart.fnType(async.Future, [dart.dynamic])
  }));
  const _future$ = Symbol('_future');
  src__database.ThenableReference = class ThenableReference extends src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.ThenableReference, "firebase.database.ThenableReference")) {
    get future() {
      let t = this[_future$];
      return t == null ? this[_future$] = src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"), this.jsObject).then(DatabaseReferenceOfReferenceJsImpl(), dart.fn(src__database.DatabaseReference.getInstance, ReferenceJsImplToDatabaseReferenceOfReferenceJsImpl())) : t;
    }
  };
  (src__database.ThenableReference.fromJsObject = function(jsObject) {
    this[_future$] = null;
    src__database.ThenableReference.__proto__._fromJsObject.call(this, jsObject);
  }).prototype = src__database.ThenableReference.prototype;
  dart.addTypeTests(src__database.ThenableReference);
  dart.setGetterSignature(src__database.ThenableReference, () => ({
    __proto__: dart.getGetters(src__database.ThenableReference.__proto__),
    future: async.Future$(src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")))
  }));
  dart.setFieldSignature(src__database.ThenableReference, () => ({
    __proto__: dart.getFields(src__database.ThenableReference.__proto__),
    [_future$]: dart.fieldType(FutureOfDatabaseReferenceOfReferenceJsImpl())
  }));
  src__database.Transaction = class Transaction extends src__js.JsObjectWrapper$(dart.anonymousJSType("TransactionJsImpl")) {
    get committed() {
      return this.jsObject.committed;
    }
    get snapshot() {
      return src__database.DataSnapshot.getInstance(this.jsObject.snapshot);
    }
    static new(opts) {
      let committed = opts && 'committed' in opts ? opts.committed : null;
      let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
      return new src__database.Transaction.fromJsObject({committed: committed, snapshot: snapshot.jsObject});
    }
  };
  (src__database.Transaction.fromJsObject = function(jsObject) {
    src__database.Transaction.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__database.Transaction.prototype;
  dart.addTypeTests(src__database.Transaction);
  dart.setGetterSignature(src__database.Transaction, () => ({
    __proto__: dart.getGetters(src__database.Transaction.__proto__),
    committed: core.bool,
    snapshot: src__database.DataSnapshot
  }));
  src__firestore.Firestore = class Firestore extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.Firestore, "firebase.firestore.Firestore")) {
    get app() {
      return src__app.App.getInstance(this.jsObject.app);
    }
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__firestore.Firestore._expando._get(jsObject);
      return t == null ? src__firestore.Firestore._expando._set(jsObject, new src__firestore.Firestore._fromJsObject((() => {
        jsObject.settings({timestampsInSnapshots: true});
        return jsObject;
      })())) : t;
    }
    batch() {
      return src__firestore.WriteBatch.getInstance(this.jsObject.batch());
    }
    collection(collectionPath) {
      return src__firestore.CollectionReference.getInstance(this.jsObject.collection(collectionPath));
    }
    doc(documentPath) {
      return src__firestore.DocumentReference.getInstance(this.jsObject.doc(documentPath));
    }
    enablePersistence() {
      return src__utils.handleThenable(core.Null, this.jsObject.enablePersistence());
    }
    runTransaction(updateFunction) {
      let updateFunctionWrap = js.allowInterop(dynamicToPromiseJsImpl(), dart.fn(transaction => src__utils.handleFutureWithMapper(core.Object, dart.dynamic, FutureOfObject()._check(updateFunction(src__firestore.Transaction.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.Transaction, "firebase.firestore.Transaction")._check(transaction)))), dart.fn(src__utils.jsify, ObjectTodynamic())), dynamicToPromiseJsImpl()));
      return src__utils.handleThenable(dart.dynamic, this.jsObject.runTransaction(updateFunctionWrap)).then(dart.dynamic, dart.fn(src__utils.dartify, ObjectTodynamic()));
    }
    settings(settings) {
      return this.jsObject.settings(settings);
    }
    enableNetwork() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.enableNetwork());
    }
    disableNetwork() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.disableNetwork());
    }
  };
  (src__firestore.Firestore._fromJsObject = function(jsObject) {
    src__firestore.Firestore.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__firestore.Firestore.prototype;
  dart.addTypeTests(src__firestore.Firestore);
  dart.setMethodSignature(src__firestore.Firestore, () => ({
    __proto__: dart.getMethods(src__firestore.Firestore.__proto__),
    batch: dart.fnType(src__firestore.WriteBatch, []),
    collection: dart.fnType(src__firestore.CollectionReference$(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference")), [core.String]),
    doc: dart.fnType(src__firestore.DocumentReference, [core.String]),
    enablePersistence: dart.fnType(async.Future$(core.Null), []),
    runTransaction: dart.fnType(async.Future, [dart.fnType(dart.dynamic, [src__firestore.Transaction])]),
    settings: dart.fnType(dart.void, [dart.anonymousJSType("Settings")]),
    enableNetwork: dart.fnType(async.Future, []),
    disableNetwork: dart.fnType(async.Future, [])
  }));
  dart.setGetterSignature(src__firestore.Firestore, () => ({
    __proto__: dart.getGetters(src__firestore.Firestore.__proto__),
    app: src__app.App
  }));
  dart.defineLazy(src__firestore.Firestore, {
    /*src__firestore.Firestore._expando*/get _expando() {
      return new (ExpandoOfFirestore()).new();
    }
  });
  const _wrapUpdateFunctionCall = Symbol('_wrapUpdateFunctionCall');
  src__firestore._Updatable = class _Updatable extends core.Object {
    [_wrapUpdateFunctionCall](jsObject, data, fieldsAndValues, documentRef) {
      if (documentRef === void 0) documentRef = null;
      if (data == null && fieldsAndValues == null) {
        dart.throw(new core.ArgumentError.new("Please provide either data or fieldsAndValues parameter."));
      }
      let args = data != null ? [src__utils.jsify(data)] : fieldsAndValues[$map](dart.dynamic, dart.fn(f => dart.lazyJSType(() => dart.global.firebase.firestore.FieldPath, "firebase.firestore.FieldPath").is(f) ? f : src__utils.jsify(f), dynamicTodynamic()))[$toList]();
      if (documentRef != null) {
        args[$insert](0, documentRef.jsObject);
      }
      return src__utils.callMethod(jsObject, "update", args);
    }
  };
  (src__firestore._Updatable.new = function() {
  }).prototype = src__firestore._Updatable.prototype;
  dart.addTypeTests(src__firestore._Updatable);
  dart.setMethodSignature(src__firestore._Updatable, () => ({
    __proto__: dart.getMethods(src__firestore._Updatable.__proto__),
    [_wrapUpdateFunctionCall]: dart.fnType(dart.dynamic, [dart.dynamic, core.Map$(core.String, dart.dynamic), core.List], [src__firestore.DocumentReference])
  }));
  const JsObjectWrapper__Updatable$ = class JsObjectWrapper__Updatable extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.WriteBatch, "firebase.firestore.WriteBatch")) {};
  (JsObjectWrapper__Updatable$.fromJsObject = function(jsObject) {
    JsObjectWrapper__Updatable$.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = JsObjectWrapper__Updatable$.prototype;
  dart.applyMixin(JsObjectWrapper__Updatable$, src__firestore._Updatable);
  src__firestore.WriteBatch = class WriteBatch extends JsObjectWrapper__Updatable$ {
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__firestore.WriteBatch._expando._get(jsObject);
      return t == null ? src__firestore.WriteBatch._expando._set(jsObject, new src__firestore.WriteBatch._fromJsObject(jsObject)) : t;
    }
    commit() {
      return src__utils.handleThenable(core.Null, this.jsObject.commit());
    }
    delete(documentRef) {
      return src__firestore.WriteBatch.getInstance(this.jsObject.delete(documentRef.jsObject));
    }
    set(documentRef, data, options) {
      if (options === void 0) options = null;
      let jsObjectSet = options != null ? this.jsObject.set(documentRef.jsObject, src__utils.jsify(data), options) : this.jsObject.set(documentRef.jsObject, src__utils.jsify(data));
      return src__firestore.WriteBatch.getInstance(jsObjectSet);
    }
    update(documentRef, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let fieldsAndValues = opts && 'fieldsAndValues' in opts ? opts.fieldsAndValues : null;
      return src__firestore.WriteBatch.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.WriteBatch, "firebase.firestore.WriteBatch")._check(this[_wrapUpdateFunctionCall](this.jsObject, data, fieldsAndValues, documentRef)));
    }
  };
  (src__firestore.WriteBatch._fromJsObject = function(jsObject) {
    src__firestore.WriteBatch.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__firestore.WriteBatch.prototype;
  dart.addTypeTests(src__firestore.WriteBatch);
  dart.setMethodSignature(src__firestore.WriteBatch, () => ({
    __proto__: dart.getMethods(src__firestore.WriteBatch.__proto__),
    commit: dart.fnType(async.Future$(core.Null), []),
    delete: dart.fnType(src__firestore.WriteBatch, [src__firestore.DocumentReference]),
    set: dart.fnType(src__firestore.WriteBatch, [src__firestore.DocumentReference, core.Map$(core.String, dart.dynamic)], [dart.anonymousJSType("SetOptions")]),
    update: dart.fnType(src__firestore.WriteBatch, [src__firestore.DocumentReference], {data: core.Map$(core.String, dart.dynamic), fieldsAndValues: core.List})
  }));
  dart.defineLazy(src__firestore.WriteBatch, {
    /*src__firestore.WriteBatch._expando*/get _expando() {
      return new (ExpandoOfWriteBatch()).new();
    }
  });
  const _onSnapshotController = Symbol('_onSnapshotController');
  const _onMetadataController = Symbol('_onMetadataController');
  const _createStream$ = Symbol('_createStream');
  const JsObjectWrapper__Updatable$$ = class JsObjectWrapper__Updatable extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentReference, "firebase.firestore.DocumentReference")) {};
  (JsObjectWrapper__Updatable$$.fromJsObject = function(jsObject) {
    JsObjectWrapper__Updatable$$.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = JsObjectWrapper__Updatable$$.prototype;
  dart.applyMixin(JsObjectWrapper__Updatable$$, src__firestore._Updatable);
  src__firestore.DocumentReference = class DocumentReference extends JsObjectWrapper__Updatable$$ {
    get firestore() {
      return src__firestore.Firestore.getInstance(this.jsObject.firestore);
    }
    get id() {
      return this.jsObject.id;
    }
    get parent() {
      return src__firestore.CollectionReference.getInstance(this.jsObject.parent);
    }
    get path() {
      return this.jsObject.path;
    }
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__firestore.DocumentReference._expando._get(jsObject);
      return t == null ? src__firestore.DocumentReference._expando._set(jsObject, new src__firestore.DocumentReference._fromJsObject(jsObject)) : t;
    }
    collection(collectionPath) {
      return src__firestore.CollectionReference.getInstance(this.jsObject.collection(collectionPath));
    }
    delete() {
      return src__utils.handleThenable(core.Null, this.jsObject.delete());
    }
    get() {
      return src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot"), this.jsObject.get()).then(src__firestore.DocumentSnapshot, dart.fn(src__firestore.DocumentSnapshot.getInstance, DocumentSnapshotJsImplToDocumentSnapshot()));
    }
    get onSnapshot() {
      return this[_createStream$](this[_onSnapshotController]);
    }
    get onMetadataChangesSnapshot() {
      return this[_createStream$](this[_onMetadataController], {includeMetadataChanges: true});
    }
    [_createStream$](controller, options) {
      if (options === void 0) options = null;
      if (controller == null) {
        let nextWrapper = js.allowInterop(DocumentSnapshotJsImplToNull(), dart.fn(snapshot => {
          controller.add(src__firestore.DocumentSnapshot.getInstance(snapshot));
        }, DocumentSnapshotJsImplToNull()));
        let errorWrapper = js.allowInterop(dynamicTovoid(), dart.fn(e => controller.addError(e), dynamicTovoid()));
        let onSnapshotUnsubscribe = null;
        const startListen = (function() {
          onSnapshotUnsubscribe = options != null ? this.jsObject.onSnapshot(options, nextWrapper, errorWrapper) : this.jsObject.onSnapshot(nextWrapper, errorWrapper);
        }).bind(this);
        dart.fn(startListen, VoidTovoid());
        function stopListen() {
          onSnapshotUnsubscribe();
          onSnapshotUnsubscribe = null;
        }
        dart.fn(stopListen, VoidTovoid());
        controller = StreamControllerOfDocumentSnapshot().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return controller.stream;
    }
    set(data, options) {
      if (options === void 0) options = null;
      let jsObjectSet = options != null ? this.jsObject.set(src__utils.jsify(data), options) : this.jsObject.set(src__utils.jsify(data));
      return src__utils.handleThenable(core.Null, jsObjectSet);
    }
    update(opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let fieldsAndValues = opts && 'fieldsAndValues' in opts ? opts.fieldsAndValues : null;
      return src__utils.handleThenable(core.Null, dart.anonymousJSType("ThenableJsImpl")._check(this[_wrapUpdateFunctionCall](this.jsObject, data, fieldsAndValues)));
    }
  };
  (src__firestore.DocumentReference._fromJsObject = function(jsObject) {
    this[_onSnapshotController] = null;
    this[_onMetadataController] = null;
    src__firestore.DocumentReference.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__firestore.DocumentReference.prototype;
  dart.addTypeTests(src__firestore.DocumentReference);
  dart.setMethodSignature(src__firestore.DocumentReference, () => ({
    __proto__: dart.getMethods(src__firestore.DocumentReference.__proto__),
    collection: dart.fnType(src__firestore.CollectionReference$(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference")), [core.String]),
    delete: dart.fnType(async.Future$(core.Null), []),
    get: dart.fnType(async.Future$(src__firestore.DocumentSnapshot), []),
    [_createStream$]: dart.fnType(async.Stream$(src__firestore.DocumentSnapshot), [async.StreamController$(src__firestore.DocumentSnapshot)], [dart.anonymousJSType("DocumentListenOptions")]),
    set: dart.fnType(async.Future$(core.Null), [core.Map$(core.String, dart.dynamic)], [dart.anonymousJSType("SetOptions")]),
    update: dart.fnType(async.Future$(core.Null), [], {data: core.Map$(core.String, dart.dynamic), fieldsAndValues: core.List})
  }));
  dart.setGetterSignature(src__firestore.DocumentReference, () => ({
    __proto__: dart.getGetters(src__firestore.DocumentReference.__proto__),
    firestore: src__firestore.Firestore,
    id: core.String,
    parent: src__firestore.CollectionReference$(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference")),
    path: core.String,
    onSnapshot: async.Stream$(src__firestore.DocumentSnapshot),
    onMetadataChangesSnapshot: async.Stream$(src__firestore.DocumentSnapshot)
  }));
  dart.setFieldSignature(src__firestore.DocumentReference, () => ({
    __proto__: dart.getFields(src__firestore.DocumentReference.__proto__),
    [_onSnapshotController]: dart.fieldType(StreamControllerOfDocumentSnapshot()),
    [_onMetadataController]: dart.fieldType(StreamControllerOfDocumentSnapshot())
  }));
  dart.defineLazy(src__firestore.DocumentReference, {
    /*src__firestore.DocumentReference._expando*/get _expando() {
      return new (ExpandoOfDocumentReference()).new();
    }
  });
  const _onSnapshotMetadataController = Symbol('_onSnapshotMetadataController');
  const _wrapPaginatingFunctionCall = Symbol('_wrapPaginatingFunctionCall');
  const _is_Query_default$ = Symbol('_is_Query_default');
  src__firestore.Query$ = dart.generic(T => {
    class Query extends src__js.JsObjectWrapper$(T) {
      get firestore() {
        return src__firestore.Firestore.getInstance(this.jsObject.firestore);
      }
      endAt(opts) {
        let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
        let fieldValues = opts && 'fieldValues' in opts ? opts.fieldValues : null;
        return new (QueryOfQueryJsImpl$()).fromJsObject(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")._check(this[_wrapPaginatingFunctionCall]("endAt", snapshot, fieldValues)));
      }
      endBefore(opts) {
        let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
        let fieldValues = opts && 'fieldValues' in opts ? opts.fieldValues : null;
        return new (QueryOfQueryJsImpl$()).fromJsObject(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")._check(this[_wrapPaginatingFunctionCall]("endBefore", snapshot, fieldValues)));
      }
      get() {
        return src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.firestore.QuerySnapshot, "firebase.firestore.QuerySnapshot"), this.jsObject.get()).then(src__firestore.QuerySnapshot, dart.fn(src__firestore.QuerySnapshot.getInstance, QuerySnapshotJsImplToQuerySnapshot()));
      }
      limit(limit) {
        return new (QueryOfQueryJsImpl$()).fromJsObject(this.jsObject.limit(limit));
      }
      get onSnapshot() {
        return (() => {
          let t = this[_onSnapshotController];
          return t == null ? this[_onSnapshotController] = this[_createStream$](false) : t;
        })().stream;
      }
      get onSnapshotMetadata() {
        return (() => {
          let t = this[_onSnapshotMetadataController];
          return t == null ? this[_onSnapshotMetadataController] = this[_createStream$](true) : t;
        })().stream;
      }
      [_createStream$](includeMetadataChanges) {
        let controller = null;
        let nextWrapper = js.allowInterop(QuerySnapshotJsImplToNull(), dart.fn(snapshot => {
          controller.add(new src__firestore.QuerySnapshot._fromJsObject(snapshot));
        }, QuerySnapshotJsImplToNull()));
        let errorWrapper = js.allowInterop(dynamicTovoid(), dart.fn(e => controller.addError(e), dynamicTovoid()));
        let onSnapshotUnsubscribe = null;
        let options = {includeMetadataChanges: includeMetadataChanges};
        const startListen = (function() {
          onSnapshotUnsubscribe = this.jsObject.onSnapshot(options, nextWrapper, errorWrapper);
        }).bind(this);
        dart.fn(startListen, VoidTovoid());
        function stopListen() {
          onSnapshotUnsubscribe();
          onSnapshotUnsubscribe = null;
        }
        dart.fn(stopListen, VoidTovoid());
        controller = StreamControllerOfQuerySnapshot().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
        return controller;
      }
      orderBy(fieldPath, directionStr) {
        if (directionStr === void 0) directionStr = null;
        let jsObjectOrderBy = directionStr != null ? this.jsObject.orderBy(fieldPath, directionStr) : this.jsObject.orderBy(fieldPath);
        return new (QueryOfQueryJsImpl$()).fromJsObject(jsObjectOrderBy);
      }
      startAfter(opts) {
        let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
        let fieldValues = opts && 'fieldValues' in opts ? opts.fieldValues : null;
        return new (QueryOfQueryJsImpl$()).fromJsObject(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")._check(this[_wrapPaginatingFunctionCall]("startAfter", snapshot, fieldValues)));
      }
      startAt(opts) {
        let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
        let fieldValues = opts && 'fieldValues' in opts ? opts.fieldValues : null;
        return new (QueryOfQueryJsImpl$()).fromJsObject(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")._check(this[_wrapPaginatingFunctionCall]("startAt", snapshot, fieldValues)));
      }
      where(fieldPath, opStr, value) {
        return new (QueryOfQueryJsImpl$()).fromJsObject(this.jsObject.where(fieldPath, opStr, src__utils.jsify(value)));
      }
      [_wrapPaginatingFunctionCall](method, snapshot, fieldValues) {
        if (snapshot == null && fieldValues == null) {
          dart.throw(new core.ArgumentError.new("Please provide either snapshot or fieldValues parameter."));
        }
        let args = snapshot != null ? JSArrayOfDocumentSnapshotJsImpl().of([snapshot.jsObject]) : fieldValues[$map](dart.dynamic, dart.fn(src__utils.jsify, ObjectTodynamic()))[$toList]();
        return src__utils.callMethod(this.jsObject, method, args);
      }
    }
    (Query.fromJsObject = function(jsObject) {
      this[_onSnapshotController] = null;
      this[_onSnapshotMetadataController] = null;
      Query.__proto__.fromJsObject.call(this, jsObject);
    }).prototype = Query.prototype;
    dart.addTypeTests(Query);
    Query.prototype[_is_Query_default$] = true;
    dart.setMethodSignature(Query, () => ({
      __proto__: dart.getMethods(Query.__proto__),
      endAt: dart.fnType(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [], {snapshot: src__firestore.DocumentSnapshot, fieldValues: core.List}),
      endBefore: dart.fnType(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [], {snapshot: src__firestore.DocumentSnapshot, fieldValues: core.List}),
      get: dart.fnType(async.Future$(src__firestore.QuerySnapshot), []),
      limit: dart.fnType(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [core.num]),
      [_createStream$]: dart.fnType(async.StreamController$(src__firestore.QuerySnapshot), [core.bool]),
      orderBy: dart.fnType(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [dart.dynamic], [core.String]),
      startAfter: dart.fnType(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [], {snapshot: src__firestore.DocumentSnapshot, fieldValues: core.List}),
      startAt: dart.fnType(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [], {snapshot: src__firestore.DocumentSnapshot, fieldValues: core.List}),
      where: dart.fnType(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [dart.dynamic, core.String, dart.dynamic]),
      [_wrapPaginatingFunctionCall]: dart.fnType(dart.dynamic, [core.String, src__firestore.DocumentSnapshot, core.List])
    }));
    dart.setGetterSignature(Query, () => ({
      __proto__: dart.getGetters(Query.__proto__),
      firestore: src__firestore.Firestore,
      onSnapshot: async.Stream$(src__firestore.QuerySnapshot),
      onSnapshotMetadata: async.Stream$(src__firestore.QuerySnapshot)
    }));
    dart.setFieldSignature(Query, () => ({
      __proto__: dart.getFields(Query.__proto__),
      [_onSnapshotController]: dart.fieldType(StreamControllerOfQuerySnapshot()),
      [_onSnapshotMetadataController]: dart.fieldType(StreamControllerOfQuerySnapshot())
    }));
    return Query;
  });
  src__firestore.Query = src__firestore.Query$();
  dart.addTypeTests(src__firestore.Query, _is_Query_default$);
  const _is_CollectionReference_default = Symbol('_is_CollectionReference_default');
  src__firestore.CollectionReference$ = dart.generic(T => {
    let CollectionReferenceOfT = () => (CollectionReferenceOfT = dart.constFn(src__firestore.CollectionReference$(T)))();
    class CollectionReference extends src__firestore.Query$(T) {
      get id() {
        return this.jsObject.id;
      }
      get parent() {
        return src__firestore.DocumentReference.getInstance(this.jsObject.parent);
      }
      get path() {
        return this.jsObject.path;
      }
      static getInstance(jsObject) {
        if (jsObject == null) {
          return null;
        }
        let t = src__firestore.CollectionReference._expando._get(jsObject);
        return t == null ? src__firestore.CollectionReference._expando._set(jsObject, new (CollectionReferenceOfCollectionReferenceJsImpl())._fromJsObject(jsObject)) : t;
      }
      static new() {
        return new (CollectionReferenceOfT())._fromJsObject(new dart.global.firebase.firestore.CollectionReference());
      }
      add(data) {
        return src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentReference, "firebase.firestore.DocumentReference"), this.jsObject.add(src__utils.jsify(data))).then(src__firestore.DocumentReference, dart.fn(src__firestore.DocumentReference.getInstance, DocumentReferenceJsImplToDocumentReference()));
      }
      doc(documentPath) {
        if (documentPath === void 0) documentPath = null;
        let jsObjectDoc = documentPath != null ? this.jsObject.doc(documentPath) : this.jsObject.doc();
        return src__firestore.DocumentReference.getInstance(jsObjectDoc);
      }
      isEqual(other) {
        return this.jsObject.isEqual(other.jsObject);
      }
    }
    (CollectionReference._fromJsObject = function(jsObject) {
      CollectionReference.__proto__.fromJsObject.call(this, T._check(jsObject));
    }).prototype = CollectionReference.prototype;
    dart.addTypeTests(CollectionReference);
    CollectionReference.prototype[_is_CollectionReference_default] = true;
    dart.setMethodSignature(CollectionReference, () => ({
      __proto__: dart.getMethods(CollectionReference.__proto__),
      add: dart.fnType(async.Future$(src__firestore.DocumentReference), [core.Map$(core.String, dart.dynamic)]),
      doc: dart.fnType(src__firestore.DocumentReference, [], [core.String]),
      isEqual: dart.fnType(core.bool, [src__firestore.CollectionReference$(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference"))])
    }));
    dart.setGetterSignature(CollectionReference, () => ({
      __proto__: dart.getGetters(CollectionReference.__proto__),
      id: core.String,
      parent: src__firestore.DocumentReference,
      path: core.String
    }));
    return CollectionReference;
  });
  src__firestore.CollectionReference = src__firestore.CollectionReference$();
  dart.defineLazy(src__firestore.CollectionReference, {
    /*src__firestore.CollectionReference._expando*/get _expando() {
      return new (ExpandoOfCollectionReferenceOfCollectionReferenceJsImpl()).new();
    }
  });
  dart.addTypeTests(src__firestore.CollectionReference, _is_CollectionReference_default);
  src__firestore.DocumentChange = class DocumentChange extends src__js.JsObjectWrapper$(dart.anonymousJSType("DocumentChangeJsImpl")) {
    get type() {
      return this.jsObject.type;
    }
    get doc() {
      return src__firestore.DocumentSnapshot.getInstance(this.jsObject.doc);
    }
    get oldIndex() {
      return this.jsObject.oldIndex;
    }
    get newIndex() {
      return this.jsObject.newIndex;
    }
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__firestore.DocumentChange._expando._get(jsObject);
      return t == null ? src__firestore.DocumentChange._expando._set(jsObject, new src__firestore.DocumentChange._fromJsObject(jsObject)) : t;
    }
  };
  (src__firestore.DocumentChange._fromJsObject = function(jsObject) {
    src__firestore.DocumentChange.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__firestore.DocumentChange.prototype;
  dart.addTypeTests(src__firestore.DocumentChange);
  dart.setGetterSignature(src__firestore.DocumentChange, () => ({
    __proto__: dart.getGetters(src__firestore.DocumentChange.__proto__),
    type: core.String,
    doc: src__firestore.DocumentSnapshot,
    oldIndex: core.num,
    newIndex: core.num
  }));
  dart.defineLazy(src__firestore.DocumentChange, {
    /*src__firestore.DocumentChange._expando*/get _expando() {
      return new (ExpandoOfDocumentChange()).new();
    }
  });
  src__firestore.DocumentSnapshot = class DocumentSnapshot extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")) {
    get exists() {
      return this.jsObject.exists;
    }
    get id() {
      return this.jsObject.id;
    }
    get metadata() {
      return this.jsObject.metadata;
    }
    get ref() {
      return src__firestore.DocumentReference.getInstance(this.jsObject.ref);
    }
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__firestore.DocumentSnapshot._expando._get(jsObject);
      return t == null ? src__firestore.DocumentSnapshot._expando._set(jsObject, new src__firestore.DocumentSnapshot._fromJsObject(jsObject)) : t;
    }
    data() {
      return MapOfString$dynamic()._check(src__utils.dartify(this.jsObject.data()));
    }
    get(fieldPath) {
      return src__utils.dartify(this.jsObject.get(fieldPath));
    }
    isEqual(other) {
      return this.jsObject.isEqual(other.jsObject);
    }
  };
  (src__firestore.DocumentSnapshot._fromJsObject = function(jsObject) {
    src__firestore.DocumentSnapshot.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__firestore.DocumentSnapshot.prototype;
  dart.addTypeTests(src__firestore.DocumentSnapshot);
  dart.setMethodSignature(src__firestore.DocumentSnapshot, () => ({
    __proto__: dart.getMethods(src__firestore.DocumentSnapshot.__proto__),
    data: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    get: dart.fnType(dart.dynamic, [dart.dynamic]),
    isEqual: dart.fnType(core.bool, [src__firestore.DocumentSnapshot])
  }));
  dart.setGetterSignature(src__firestore.DocumentSnapshot, () => ({
    __proto__: dart.getGetters(src__firestore.DocumentSnapshot.__proto__),
    exists: core.bool,
    id: core.String,
    metadata: dart.lazyJSType(() => dart.global.firebase.firestore.SnapshotMetadata, "firebase.firestore.SnapshotMetadata"),
    ref: src__firestore.DocumentReference
  }));
  dart.defineLazy(src__firestore.DocumentSnapshot, {
    /*src__firestore.DocumentSnapshot._expando*/get _expando() {
      return new (ExpandoOfDocumentSnapshot()).new();
    }
  });
  src__firestore.QuerySnapshot = class QuerySnapshot extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.QuerySnapshot, "firebase.firestore.QuerySnapshot")) {
    docChanges() {
      return this.jsObject.docChanges()[$map](src__firestore.DocumentChange, dart.fn(e => src__firestore.DocumentChange.getInstance(dart.anonymousJSType("DocumentChangeJsImpl")._check(e)), dynamicToDocumentChange()))[$toList]();
    }
    get docs() {
      return this.jsObject.docs[$map](src__firestore.DocumentSnapshot, dart.fn(e => src__firestore.DocumentSnapshot.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")._check(e)), dynamicToDocumentSnapshot()))[$toList]();
    }
    get empty() {
      return this.jsObject.empty;
    }
    get metadata() {
      return this.jsObject.metadata;
    }
    get query() {
      return new (QueryOfQueryJsImpl$()).fromJsObject(this.jsObject.query);
    }
    get size() {
      return this.jsObject.size;
    }
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__firestore.QuerySnapshot._expando._get(jsObject);
      return t == null ? src__firestore.QuerySnapshot._expando._set(jsObject, new src__firestore.QuerySnapshot._fromJsObject(jsObject)) : t;
    }
    forEach(callback) {
      let callbackWrap = js.allowInterop(dynamicTodynamic(), dart.fn(s => callback(src__firestore.DocumentSnapshot.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")._check(s))), dynamicTodynamic()));
      return this.jsObject.forEach(callbackWrap);
    }
    isEqual(other) {
      return this.jsObject.isEqual(other.jsObject);
    }
  };
  (src__firestore.QuerySnapshot._fromJsObject = function(jsObject) {
    src__firestore.QuerySnapshot.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__firestore.QuerySnapshot.prototype;
  dart.addTypeTests(src__firestore.QuerySnapshot);
  dart.setMethodSignature(src__firestore.QuerySnapshot, () => ({
    __proto__: dart.getMethods(src__firestore.QuerySnapshot.__proto__),
    docChanges: dart.fnType(core.List$(src__firestore.DocumentChange), []),
    forEach: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [src__firestore.DocumentSnapshot])]),
    isEqual: dart.fnType(core.bool, [src__firestore.QuerySnapshot])
  }));
  dart.setGetterSignature(src__firestore.QuerySnapshot, () => ({
    __proto__: dart.getGetters(src__firestore.QuerySnapshot.__proto__),
    docs: core.List$(src__firestore.DocumentSnapshot),
    empty: core.bool,
    metadata: dart.lazyJSType(() => dart.global.firebase.firestore.SnapshotMetadata, "firebase.firestore.SnapshotMetadata"),
    query: src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")),
    size: core.num
  }));
  dart.defineLazy(src__firestore.QuerySnapshot, {
    /*src__firestore.QuerySnapshot._expando*/get _expando() {
      return new (ExpandoOfQuerySnapshot()).new();
    }
  });
  const JsObjectWrapper__Updatable$$0 = class JsObjectWrapper__Updatable extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.Transaction, "firebase.firestore.Transaction")) {};
  (JsObjectWrapper__Updatable$$0.fromJsObject = function(jsObject) {
    JsObjectWrapper__Updatable$$0.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = JsObjectWrapper__Updatable$$0.prototype;
  dart.applyMixin(JsObjectWrapper__Updatable$$0, src__firestore._Updatable);
  src__firestore.Transaction = class Transaction extends JsObjectWrapper__Updatable$$0 {
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__firestore.Transaction._expando._get(jsObject);
      return t == null ? src__firestore.Transaction._expando._set(jsObject, new src__firestore.Transaction._fromJsObject(jsObject)) : t;
    }
    delete(documentRef) {
      return src__firestore.Transaction.getInstance(this.jsObject.delete(documentRef.jsObject));
    }
    get(documentRef) {
      return src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot"), this.jsObject.get(documentRef.jsObject)).then(src__firestore.DocumentSnapshot, dart.fn(src__firestore.DocumentSnapshot.getInstance, DocumentSnapshotJsImplToDocumentSnapshot()));
    }
    set(documentRef, data, options) {
      if (options === void 0) options = null;
      let jsObjectSet = options != null ? this.jsObject.set(documentRef.jsObject, src__utils.jsify(data), options) : this.jsObject.set(documentRef.jsObject, src__utils.jsify(data));
      return src__firestore.Transaction.getInstance(jsObjectSet);
    }
    update(documentRef, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let fieldsAndValues = opts && 'fieldsAndValues' in opts ? opts.fieldsAndValues : null;
      return src__firestore.Transaction.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.Transaction, "firebase.firestore.Transaction")._check(this[_wrapUpdateFunctionCall](this.jsObject, data, fieldsAndValues, documentRef)));
    }
  };
  (src__firestore.Transaction._fromJsObject = function(jsObject) {
    src__firestore.Transaction.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__firestore.Transaction.prototype;
  dart.addTypeTests(src__firestore.Transaction);
  dart.setMethodSignature(src__firestore.Transaction, () => ({
    __proto__: dart.getMethods(src__firestore.Transaction.__proto__),
    delete: dart.fnType(src__firestore.Transaction, [src__firestore.DocumentReference]),
    get: dart.fnType(async.Future$(src__firestore.DocumentSnapshot), [src__firestore.DocumentReference]),
    set: dart.fnType(src__firestore.Transaction, [src__firestore.DocumentReference, core.Map$(core.String, dart.dynamic)], [dart.anonymousJSType("SetOptions")]),
    update: dart.fnType(src__firestore.Transaction, [src__firestore.DocumentReference], {data: core.Map$(core.String, dart.dynamic), fieldsAndValues: core.List})
  }));
  dart.defineLazy(src__firestore.Transaction, {
    /*src__firestore.Transaction._expando*/get _expando() {
      return new (ExpandoOfTransaction()).new();
    }
  });
  src__utils.dartify = function(jsObject) {
    if (dart.test(src__utils._isBasicType(jsObject))) {
      return jsObject;
    }
    if (core.Iterable.is(jsObject)) {
      return jsObject[$map](dart.dynamic, dart.fn(src__utils.dartify, ObjectTodynamic()))[$toList]();
    }
    let jsDate = src__interop__js_interop.dartifyDate(jsObject);
    if (jsDate != null) {
      return jsDate;
    }
    if (dart.dtest(js_util.hasProperty(jsObject, "firestore")) && dart.dtest(js_util.hasProperty(jsObject, "id")) && dart.dtest(js_util.hasProperty(jsObject, "parent"))) {
      return src__firestore.DocumentReference.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentReference, "firebase.firestore.DocumentReference")._check(jsObject));
    }
    if (dart.dtest(js_util.hasProperty(jsObject, "latitude")) && dart.dtest(js_util.hasProperty(jsObject, "longitude")) && dart.global.Object.keys(jsObject)[$length] === 2) {
      return dart.lazyJSType(() => dart.global.firebase.firestore.GeoPoint, "firebase.firestore.GeoPoint").as(jsObject);
    }
    let proto = js_util.getProperty(jsObject, "__proto__");
    if (dart.dtest(js_util.hasProperty(proto, "toDate")) && dart.dtest(js_util.hasProperty(proto, "toMillis"))) {
      return new core.DateTime.fromMillisecondsSinceEpoch(dart.lazyJSType(() => dart.global.firebase.firestore.Timestamp, "firebase.firestore.Timestamp").as(jsObject).toMillis());
    }
    if (dart.dtest(js_util.hasProperty(proto, "isEqual")) && dart.dtest(js_util.hasProperty(proto, "toBase64"))) {
      return dart.anonymousJSType("Blob").as(jsObject);
    }
    let keys = dart.global.Object.keys(jsObject);
    let map = new (IdentityMapOfString$dynamic()).new();
    for (let key of keys) {
      map[$_set](key, src__utils.dartify(js_util.getProperty(jsObject, key)));
    }
    return map;
  };
  src__utils.jsify = function(dartObject) {
    if (dart.test(src__utils._isBasicType(dartObject))) {
      return dartObject;
    }
    if (core.DateTime.is(dartObject)) {
      return dart.global.firebase.firestore.Timestamp.fromMillis(dartObject.millisecondsSinceEpoch);
    }
    if (core.Iterable.is(dartObject)) {
      return dart.global.Array.from(dartObject[$map](dart.dynamic, dart.fn(src__utils.jsify, ObjectTodynamic()))[$toList]());
    }
    if (core.Map.is(dartObject)) {
      let jsMap = js_util.newObject();
      dartObject[$forEach](dart.fn((key, value) => {
        js_util.setProperty(jsMap, key, src__utils.jsify(value));
      }, dynamicAnddynamicToNull()));
      return jsMap;
    }
    if (src__firestore.DocumentReference.is(dartObject)) {
      return dartObject.jsObject;
    }
    if (dart.anonymousJSType("FieldValue").is(dartObject) || dart.anonymousJSType("Blob").is(dartObject) || dart.lazyJSType(() => dart.global.firebase.firestore.GeoPoint, "firebase.firestore.GeoPoint").is(dartObject)) {
      return dartObject;
    }
    dart.throw(new core.ArgumentError.value(dartObject, "dartObject", "Could not convert"));
  };
  src__utils.callMethod = function(jsObject, method, args) {
    return js_util.callMethod(jsObject, method, args);
  };
  src__utils._isBasicType = function(value) {
    if (value == null || typeof value == 'number' || typeof value == 'boolean' || typeof value == 'string') {
      return true;
    }
    return false;
  };
  src__utils.handleThenable = function(T, thenable) {
    return html.promiseToFuture(T, thenable);
  };
  src__utils.handleFutureWithMapper = function(T, S, future, mapper) {
    return new dart.global.firebase.Promise(js.allowInterop(core.Function, dart.fn((resolve, reject) => {
      future.then(core.Null, dart.fn(value => {
        let mappedValue = mapper(value);
        resolve(mappedValue);
      }, dart.fnType(core.Null, [T]))).catchError(dart.fn(error => {
        reject(error);
      }, dynamicToNull()));
    }, FnAndFnToNull())));
  };
  src__utils.resolveError = function(c) {
    return js.allowInterop(dynamicTovoid(), dart.bind(c, 'completeError'));
  };
  const _is_UserInfo_default = Symbol('_is_UserInfo_default');
  src__auth.UserInfo$ = dart.generic(T => {
    class UserInfo extends src__js.JsObjectWrapper$(T) {
      get displayName() {
        return this.jsObject.displayName;
      }
      get email() {
        return this.jsObject.email;
      }
      get phoneNumber() {
        return this.jsObject.phoneNumber;
      }
      get photoURL() {
        return this.jsObject.photoURL;
      }
      get providerId() {
        return this.jsObject.providerId;
      }
      get uid() {
        return this.jsObject.uid;
      }
    }
    (UserInfo.fromJsObject = function(jsObject) {
      UserInfo.__proto__.fromJsObject.call(this, jsObject);
    }).prototype = UserInfo.prototype;
    dart.addTypeTests(UserInfo);
    UserInfo.prototype[_is_UserInfo_default] = true;
    dart.setGetterSignature(UserInfo, () => ({
      __proto__: dart.getGetters(UserInfo.__proto__),
      displayName: core.String,
      email: core.String,
      phoneNumber: core.String,
      photoURL: core.String,
      providerId: core.String,
      uid: core.String
    }));
    return UserInfo;
  });
  src__auth.UserInfo = src__auth.UserInfo$();
  dart.addTypeTests(src__auth.UserInfo, _is_UserInfo_default);
  src__auth.User = class User extends src__auth.UserInfo$(dart.anonymousJSType("UserJsImpl")) {
    get emailVerified() {
      return this.jsObject.emailVerified;
    }
    get isAnonymous() {
      return this.jsObject.isAnonymous;
    }
    get metadata() {
      return this.jsObject.metadata;
    }
    get providerData() {
      return this.jsObject.providerData[$map](UserInfoOfUserInfoJsImpl(), dart.fn(data => new (UserInfoOfUserInfoJsImpl()).fromJsObject(dart.anonymousJSType("UserInfoJsImpl")._check(data)), dynamicToUserInfoOfUserInfoJsImpl()))[$toList]();
    }
    get refreshToken() {
      return this.jsObject.refreshToken;
    }
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__auth.User._expando._get(jsObject);
      return t == null ? src__auth.User._expando._set(jsObject, new src__auth.User._fromJsObject(jsObject)) : t;
    }
    delete() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.delete());
    }
    getIdToken(forceRefresh) {
      if (forceRefresh === void 0) forceRefresh = false;
      return src__utils.handleThenable(core.String, this.jsObject.getIdToken(forceRefresh));
    }
    linkAndRetrieveDataWithCredential(credential) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.linkAndRetrieveDataWithCredential(credential)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    linkWithCredential(credential) {
      return src__utils.handleThenable(dart.anonymousJSType("UserJsImpl"), this.jsObject.linkWithCredential(credential)).then(src__auth.User, dart.fn(src__auth.User.getInstance, UserJsImplToUser()));
    }
    linkWithPhoneNumber(phoneNumber, applicationVerifier) {
      return src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult"), this.jsObject.linkWithPhoneNumber(phoneNumber, applicationVerifier.jsObject)).then(src__auth.ConfirmationResult, dart.fn(c => new src__auth.ConfirmationResult.fromJsObject(c), ConfirmationResultJsImplToConfirmationResult()));
    }
    linkWithPopup(provider) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.linkWithPopup(provider.jsObject)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    linkWithRedirect(provider) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.linkWithRedirect(provider.jsObject));
    }
    reauthenticateAndRetrieveDataWithCredential(credential) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.reauthenticateAndRetrieveDataWithCredential(credential)).then(src__auth.UserCredential, dart.fn(o => new src__auth.UserCredential.fromJsObject(dart.anonymousJSType("UserCredentialJsImpl")._check(o)), dynamicToUserCredential()));
    }
    reauthenticateWithPhoneNumber(phoneNumber, applicationVerifier) {
      return src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult"), this.jsObject.reauthenticateWithPhoneNumber(phoneNumber, applicationVerifier.jsObject)).then(src__auth.ConfirmationResult, dart.fn(c => new src__auth.ConfirmationResult.fromJsObject(c), ConfirmationResultJsImplToConfirmationResult()));
    }
    reauthenticateWithCredential(credential) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.reauthenticateWithCredential(credential));
    }
    reauthenticateWithPopup(provider) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.reauthenticateWithPopup(provider.jsObject)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    reauthenticateWithRedirect(provider) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.reauthenticateWithRedirect(provider.jsObject));
    }
    reload() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.reload());
    }
    sendEmailVerification(actionCodeSettings) {
      if (actionCodeSettings === void 0) actionCodeSettings = null;
      return src__utils.handleThenable(dart.dynamic, this.jsObject.sendEmailVerification(actionCodeSettings));
    }
    unlink(providerId) {
      return src__utils.handleThenable(dart.anonymousJSType("UserJsImpl"), this.jsObject.unlink(providerId)).then(src__auth.User, dart.fn(src__auth.User.getInstance, UserJsImplToUser()));
    }
    updateEmail(newEmail) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.updateEmail(newEmail));
    }
    updatePassword(newPassword) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.updatePassword(newPassword));
    }
    updatePhoneNumber(phoneCredential) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.updatePhoneNumber(phoneCredential));
    }
    updateProfile(profile) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.updateProfile(profile));
    }
    toJson() {
      return MapOfString$dynamic()._check(src__utils.dartify(this.jsObject.toJSON()));
    }
    toString() {
      return "User: " + dart.str(this.uid);
    }
  };
  (src__auth.User._fromJsObject = function(jsObject) {
    src__auth.User.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__auth.User.prototype;
  dart.addTypeTests(src__auth.User);
  dart.setMethodSignature(src__auth.User, () => ({
    __proto__: dart.getMethods(src__auth.User.__proto__),
    delete: dart.fnType(async.Future, []),
    getIdToken: dart.fnType(async.Future$(core.String), [], [core.bool]),
    linkAndRetrieveDataWithCredential: dart.fnType(async.Future$(src__auth.UserCredential), [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    linkWithCredential: dart.fnType(async.Future$(src__auth.User), [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    linkWithPhoneNumber: dart.fnType(async.Future$(src__auth.ConfirmationResult), [core.String, src__auth.ApplicationVerifier$(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))]),
    linkWithPopup: dart.fnType(async.Future$(src__auth.UserCredential), [src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    linkWithRedirect: dart.fnType(async.Future, [src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    reauthenticateAndRetrieveDataWithCredential: dart.fnType(async.Future$(src__auth.UserCredential), [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    reauthenticateWithPhoneNumber: dart.fnType(async.Future$(src__auth.ConfirmationResult), [core.String, src__auth.ApplicationVerifier$(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))]),
    reauthenticateWithCredential: dart.fnType(async.Future, [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    reauthenticateWithPopup: dart.fnType(async.Future$(src__auth.UserCredential), [src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    reauthenticateWithRedirect: dart.fnType(async.Future, [src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    reload: dart.fnType(async.Future, []),
    sendEmailVerification: dart.fnType(async.Future, [], [dart.anonymousJSType("ActionCodeSettings")]),
    unlink: dart.fnType(async.Future$(src__auth.User), [core.String]),
    updateEmail: dart.fnType(async.Future, [core.String]),
    updatePassword: dart.fnType(async.Future, [core.String]),
    updatePhoneNumber: dart.fnType(async.Future, [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    updateProfile: dart.fnType(async.Future, [dart.anonymousJSType("UserProfile")]),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setGetterSignature(src__auth.User, () => ({
    __proto__: dart.getGetters(src__auth.User.__proto__),
    emailVerified: core.bool,
    isAnonymous: core.bool,
    metadata: dart.lazyJSType(() => dart.global.firebase.auth.UserMetadata, "firebase.auth.UserMetadata"),
    providerData: core.List$(src__auth.UserInfo$(dart.anonymousJSType("UserInfoJsImpl"))),
    refreshToken: core.String
  }));
  dart.defineExtensionMethods(src__auth.User, ['toString']);
  dart.defineLazy(src__auth.User, {
    /*src__auth.User._expando*/get _expando() {
      return new (ExpandoOfUser()).new();
    }
  });
  const _onAuthUnsubscribe = Symbol('_onAuthUnsubscribe');
  const _changeController$ = Symbol('_changeController');
  const _onIdTokenChangedUnsubscribe = Symbol('_onIdTokenChangedUnsubscribe');
  const _idTokenChangedController = Symbol('_idTokenChangedController');
  src__auth.Auth = class Auth extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.auth.Auth, "firebase.auth.Auth")) {
    get app() {
      return src__app.App.getInstance(this.jsObject.app);
    }
    get currentUser() {
      return src__auth.User.getInstance(this.jsObject.currentUser);
    }
    get languageCode() {
      return this.jsObject.languageCode;
    }
    set languageCode(s) {
      this.jsObject.languageCode = s;
    }
    get onAuthStateChanged() {
      if (this[_changeController$] == null) {
        let nextWrapper = js.allowInterop(UserJsImplToNull(), dart.fn(user => {
          this[_changeController$].add(src__auth.User.getInstance(user));
        }, UserJsImplToNull()));
        let errorWrapper = js.allowInterop(dynamicTovoid(), dart.fn(e => this[_changeController$].addError(e), dynamicTovoid()));
        const startListen = (function() {
          if (!(this[_onAuthUnsubscribe] == null)) dart.assertFailed();
          this[_onAuthUnsubscribe] = this.jsObject.onAuthStateChanged(nextWrapper, errorWrapper);
        }).bind(this);
        dart.fn(startListen, VoidTovoid());
        const stopListen = (function() {
          this[_onAuthUnsubscribe]();
          this[_onAuthUnsubscribe] = null;
        }).bind(this);
        dart.fn(stopListen, VoidTovoid());
        this[_changeController$] = StreamControllerOfUser().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return this[_changeController$].stream;
    }
    get onIdTokenChanged() {
      if (this[_idTokenChangedController] == null) {
        let nextWrapper = js.allowInterop(UserJsImplToNull(), dart.fn(user => {
          this[_idTokenChangedController].add(src__auth.User.getInstance(user));
        }, UserJsImplToNull()));
        let errorWrapper = js.allowInterop(dynamicTovoid(), dart.fn(e => this[_idTokenChangedController].addError(e), dynamicTovoid()));
        const startListen = (function() {
          if (!(this[_onIdTokenChangedUnsubscribe] == null)) dart.assertFailed();
          this[_onIdTokenChangedUnsubscribe] = this.jsObject.onIdTokenChanged(nextWrapper, errorWrapper);
        }).bind(this);
        dart.fn(startListen, VoidTovoid());
        const stopListen = (function() {
          this[_onIdTokenChangedUnsubscribe]();
          this[_onIdTokenChangedUnsubscribe] = null;
        }).bind(this);
        dart.fn(stopListen, VoidTovoid());
        this[_idTokenChangedController] = StreamControllerOfUser().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return this[_idTokenChangedController].stream;
    }
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__auth.Auth._expando._get(jsObject);
      return t == null ? src__auth.Auth._expando._set(jsObject, new src__auth.Auth._fromJsObject(jsObject)) : t;
    }
    applyActionCode(code) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.applyActionCode(code));
    }
    checkActionCode(code) {
      return src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.auth.ActionCodeInfo, "firebase.auth.ActionCodeInfo"), this.jsObject.checkActionCode(code));
    }
    confirmPasswordReset(code, newPassword) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.confirmPasswordReset(code, newPassword));
    }
    createUserWithEmailAndPassword(email, password) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.createUserWithEmailAndPassword(email, password)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    createUserAndRetrieveDataWithEmailAndPassword(email, password) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.createUserAndRetrieveDataWithEmailAndPassword(email, password)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    fetchProvidersForEmail(email) {
      return src__utils.handleThenable(ListOfString(), this.jsObject.fetchProvidersForEmail(email));
    }
    getRedirectResult() {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.getRedirectResult()).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    sendPasswordResetEmail(email, actionCodeSettings) {
      if (actionCodeSettings === void 0) actionCodeSettings = null;
      return src__utils.handleThenable(dart.dynamic, this.jsObject.sendPasswordResetEmail(email, actionCodeSettings));
    }
    setPersistence(persistence) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.setPersistence(persistence));
    }
    signInAndRetrieveDataWithCredential(credential) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInAndRetrieveDataWithCredential(credential)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInAnonymously() {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInAnonymously()).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInAnonymouslyAndRetrieveData() {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInAnonymouslyAndRetrieveData()).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInWithCredential(credential) {
      return src__utils.handleThenable(dart.anonymousJSType("UserJsImpl"), this.jsObject.signInWithCredential(credential)).then(src__auth.User, dart.fn(src__auth.User.getInstance, UserJsImplToUser()));
    }
    signInWithCustomToken(token) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInWithCustomToken(token)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInAndRetrieveDataWithCustomToken(token) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInAndRetrieveDataWithCustomToken(token)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInWithEmailAndPassword(email, password) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInWithEmailAndPassword(email, password)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInAndRetrieveDataWithEmailAndPassword(email, password) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInAndRetrieveDataWithEmailAndPassword(email, password)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInWithPhoneNumber(phoneNumber, applicationVerifier) {
      return src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult"), this.jsObject.signInWithPhoneNumber(phoneNumber, applicationVerifier.jsObject)).then(src__auth.ConfirmationResult, dart.fn(c => new src__auth.ConfirmationResult.fromJsObject(c), ConfirmationResultJsImplToConfirmationResult()));
    }
    signInWithPopup(provider) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInWithPopup(provider.jsObject)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInWithRedirect(provider) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.signInWithRedirect(provider.jsObject));
    }
    signOut() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.signOut());
    }
    useDeviceLanguage() {
      return this.jsObject.useDeviceLanguage();
    }
    verifyPasswordResetCode(code) {
      return src__utils.handleThenable(core.String, this.jsObject.verifyPasswordResetCode(code));
    }
  };
  (src__auth.Auth._fromJsObject = function(jsObject) {
    this[_onAuthUnsubscribe] = null;
    this[_changeController$] = null;
    this[_onIdTokenChangedUnsubscribe] = null;
    this[_idTokenChangedController] = null;
    src__auth.Auth.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__auth.Auth.prototype;
  dart.addTypeTests(src__auth.Auth);
  dart.setMethodSignature(src__auth.Auth, () => ({
    __proto__: dart.getMethods(src__auth.Auth.__proto__),
    applyActionCode: dart.fnType(async.Future, [core.String]),
    checkActionCode: dart.fnType(async.Future$(dart.lazyJSType(() => dart.global.firebase.auth.ActionCodeInfo, "firebase.auth.ActionCodeInfo")), [core.String]),
    confirmPasswordReset: dart.fnType(async.Future, [core.String, core.String]),
    createUserWithEmailAndPassword: dart.fnType(async.Future$(src__auth.UserCredential), [core.String, core.String]),
    createUserAndRetrieveDataWithEmailAndPassword: dart.fnType(async.Future$(src__auth.UserCredential), [core.String, core.String]),
    fetchProvidersForEmail: dart.fnType(async.Future$(core.List$(core.String)), [core.String]),
    getRedirectResult: dart.fnType(async.Future$(src__auth.UserCredential), []),
    sendPasswordResetEmail: dart.fnType(async.Future, [core.String], [dart.anonymousJSType("ActionCodeSettings")]),
    setPersistence: dart.fnType(async.Future, [core.String]),
    signInAndRetrieveDataWithCredential: dart.fnType(async.Future$(src__auth.UserCredential), [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    signInAnonymously: dart.fnType(async.Future$(src__auth.UserCredential), []),
    signInAnonymouslyAndRetrieveData: dart.fnType(async.Future$(src__auth.UserCredential), []),
    signInWithCredential: dart.fnType(async.Future$(src__auth.User), [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    signInWithCustomToken: dart.fnType(async.Future$(src__auth.UserCredential), [core.String]),
    signInAndRetrieveDataWithCustomToken: dart.fnType(async.Future$(src__auth.UserCredential), [core.String]),
    signInWithEmailAndPassword: dart.fnType(async.Future$(src__auth.UserCredential), [core.String, core.String]),
    signInAndRetrieveDataWithEmailAndPassword: dart.fnType(async.Future$(src__auth.UserCredential), [core.String, core.String]),
    signInWithPhoneNumber: dart.fnType(async.Future$(src__auth.ConfirmationResult), [core.String, src__auth.ApplicationVerifier$(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))]),
    signInWithPopup: dart.fnType(async.Future$(src__auth.UserCredential), [src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    signInWithRedirect: dart.fnType(async.Future, [src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    signOut: dart.fnType(async.Future, []),
    useDeviceLanguage: dart.fnType(dart.void, []),
    verifyPasswordResetCode: dart.fnType(async.Future$(core.String), [core.String])
  }));
  dart.setGetterSignature(src__auth.Auth, () => ({
    __proto__: dart.getGetters(src__auth.Auth.__proto__),
    app: src__app.App,
    currentUser: src__auth.User,
    languageCode: core.String,
    onAuthStateChanged: async.Stream$(src__auth.User),
    onIdTokenChanged: async.Stream$(src__auth.User)
  }));
  dart.setSetterSignature(src__auth.Auth, () => ({
    __proto__: dart.getSetters(src__auth.Auth.__proto__),
    languageCode: core.String
  }));
  dart.setFieldSignature(src__auth.Auth, () => ({
    __proto__: dart.getFields(src__auth.Auth.__proto__),
    [_onAuthUnsubscribe]: dart.fieldType(VoidTodynamic()),
    [_changeController$]: dart.fieldType(StreamControllerOfUser()),
    [_onIdTokenChangedUnsubscribe]: dart.fieldType(VoidTodynamic()),
    [_idTokenChangedController]: dart.fieldType(StreamControllerOfUser())
  }));
  dart.defineLazy(src__auth.Auth, {
    /*src__auth.Auth._expando*/get _expando() {
      return new (ExpandoOfAuth()).new();
    }
  });
  const _is_AuthProvider_default = Symbol('_is_AuthProvider_default');
  src__auth.AuthProvider$ = dart.generic(T => {
    class AuthProvider extends src__js.JsObjectWrapper$(T) {
      get providerId() {
        return this.jsObject.providerId;
      }
    }
    (AuthProvider.fromJsObject = function(jsObject) {
      AuthProvider.__proto__.fromJsObject.call(this, jsObject);
    }).prototype = AuthProvider.prototype;
    dart.addTypeTests(AuthProvider);
    AuthProvider.prototype[_is_AuthProvider_default] = true;
    dart.setGetterSignature(AuthProvider, () => ({
      __proto__: dart.getGetters(AuthProvider.__proto__),
      providerId: core.String
    }));
    return AuthProvider;
  });
  src__auth.AuthProvider = src__auth.AuthProvider$();
  dart.addTypeTests(src__auth.AuthProvider, _is_AuthProvider_default);
  src__auth.EmailAuthProvider = class EmailAuthProvider extends src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.EmailAuthProvider, "firebase.auth.EmailAuthProvider")) {
    static new() {
      return new src__auth.EmailAuthProvider.fromJsObject(new dart.global.firebase.auth.EmailAuthProvider());
    }
    static credential(email, password) {
      return dart.global.firebase.auth.EmailAuthProvider.credential(email, password);
    }
  };
  (src__auth.EmailAuthProvider.fromJsObject = function(jsObject) {
    src__auth.EmailAuthProvider.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__auth.EmailAuthProvider.prototype;
  dart.addTypeTests(src__auth.EmailAuthProvider);
  dart.defineLazy(src__auth.EmailAuthProvider, {
    /*src__auth.EmailAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.EmailAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  });
  src__auth.FacebookAuthProvider = class FacebookAuthProvider extends src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.FacebookAuthProvider, "firebase.auth.FacebookAuthProvider")) {
    static new() {
      return new src__auth.FacebookAuthProvider.fromJsObject(new dart.global.firebase.auth.FacebookAuthProvider());
    }
    addScope(scope) {
      return new src__auth.FacebookAuthProvider.fromJsObject(this.jsObject.addScope(scope));
    }
    setCustomParameters(customOAuthParameters) {
      return new src__auth.FacebookAuthProvider.fromJsObject(this.jsObject.setCustomParameters(src__utils.jsify(customOAuthParameters)));
    }
    static credential(token) {
      return dart.global.firebase.auth.FacebookAuthProvider.credential(token);
    }
  };
  (src__auth.FacebookAuthProvider.fromJsObject = function(jsObject) {
    src__auth.FacebookAuthProvider.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__auth.FacebookAuthProvider.prototype;
  dart.addTypeTests(src__auth.FacebookAuthProvider);
  dart.setMethodSignature(src__auth.FacebookAuthProvider, () => ({
    __proto__: dart.getMethods(src__auth.FacebookAuthProvider.__proto__),
    addScope: dart.fnType(src__auth.FacebookAuthProvider, [core.String]),
    setCustomParameters: dart.fnType(src__auth.FacebookAuthProvider, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.defineLazy(src__auth.FacebookAuthProvider, {
    /*src__auth.FacebookAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.FacebookAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  });
  src__auth.GithubAuthProvider = class GithubAuthProvider extends src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.GithubAuthProvider, "firebase.auth.GithubAuthProvider")) {
    static new() {
      return new src__auth.GithubAuthProvider.fromJsObject(new dart.global.firebase.auth.GithubAuthProvider());
    }
    addScope(scope) {
      return new src__auth.GithubAuthProvider.fromJsObject(this.jsObject.addScope(scope));
    }
    setCustomParameters(customOAuthParameters) {
      return new src__auth.GithubAuthProvider.fromJsObject(this.jsObject.setCustomParameters(src__utils.jsify(customOAuthParameters)));
    }
    static credential(token) {
      return dart.global.firebase.auth.GithubAuthProvider.credential(token);
    }
  };
  (src__auth.GithubAuthProvider.fromJsObject = function(jsObject) {
    src__auth.GithubAuthProvider.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__auth.GithubAuthProvider.prototype;
  dart.addTypeTests(src__auth.GithubAuthProvider);
  dart.setMethodSignature(src__auth.GithubAuthProvider, () => ({
    __proto__: dart.getMethods(src__auth.GithubAuthProvider.__proto__),
    addScope: dart.fnType(src__auth.GithubAuthProvider, [core.String]),
    setCustomParameters: dart.fnType(src__auth.GithubAuthProvider, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.defineLazy(src__auth.GithubAuthProvider, {
    /*src__auth.GithubAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.GithubAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  });
  src__auth.GoogleAuthProvider = class GoogleAuthProvider extends src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.GoogleAuthProvider, "firebase.auth.GoogleAuthProvider")) {
    static new() {
      return new src__auth.GoogleAuthProvider.fromJsObject(new dart.global.firebase.auth.GoogleAuthProvider());
    }
    addScope(scope) {
      return new src__auth.GoogleAuthProvider.fromJsObject(this.jsObject.addScope(scope));
    }
    setCustomParameters(customOAuthParameters) {
      return new src__auth.GoogleAuthProvider.fromJsObject(this.jsObject.setCustomParameters(src__utils.jsify(customOAuthParameters)));
    }
    static credential(idToken, accessToken) {
      if (idToken === void 0) idToken = null;
      if (accessToken === void 0) accessToken = null;
      return dart.global.firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    }
  };
  (src__auth.GoogleAuthProvider.fromJsObject = function(jsObject) {
    src__auth.GoogleAuthProvider.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__auth.GoogleAuthProvider.prototype;
  dart.addTypeTests(src__auth.GoogleAuthProvider);
  dart.setMethodSignature(src__auth.GoogleAuthProvider, () => ({
    __proto__: dart.getMethods(src__auth.GoogleAuthProvider.__proto__),
    addScope: dart.fnType(src__auth.GoogleAuthProvider, [core.String]),
    setCustomParameters: dart.fnType(src__auth.GoogleAuthProvider, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.defineLazy(src__auth.GoogleAuthProvider, {
    /*src__auth.GoogleAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.GoogleAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  });
  src__auth.TwitterAuthProvider = class TwitterAuthProvider extends src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.TwitterAuthProvider, "firebase.auth.TwitterAuthProvider")) {
    static new() {
      return new src__auth.TwitterAuthProvider.fromJsObject(new dart.global.firebase.auth.TwitterAuthProvider());
    }
    setCustomParameters(customOAuthParameters) {
      return new src__auth.TwitterAuthProvider.fromJsObject(this.jsObject.setCustomParameters(src__utils.jsify(customOAuthParameters)));
    }
    static credential(token, secret) {
      return dart.global.firebase.auth.TwitterAuthProvider.credential(token, secret);
    }
  };
  (src__auth.TwitterAuthProvider.fromJsObject = function(jsObject) {
    src__auth.TwitterAuthProvider.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__auth.TwitterAuthProvider.prototype;
  dart.addTypeTests(src__auth.TwitterAuthProvider);
  dart.setMethodSignature(src__auth.TwitterAuthProvider, () => ({
    __proto__: dart.getMethods(src__auth.TwitterAuthProvider.__proto__),
    setCustomParameters: dart.fnType(src__auth.TwitterAuthProvider, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.defineLazy(src__auth.TwitterAuthProvider, {
    /*src__auth.TwitterAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.TwitterAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  });
  src__auth.PhoneAuthProvider = class PhoneAuthProvider extends src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.PhoneAuthProvider, "firebase.auth.PhoneAuthProvider")) {
    static get PROVIDER_ID() {
      return dart.global.firebase.auth.PhoneAuthProvider.PROVIDER_ID;
    }
    static new(auth) {
      if (auth === void 0) auth = null;
      return new src__auth.PhoneAuthProvider.fromJsObject(auth != null ? new dart.global.firebase.auth.PhoneAuthProvider(auth.jsObject) : new dart.global.firebase.auth.PhoneAuthProvider());
    }
    verifyPhoneNumber(phoneNumber, applicationVerifier) {
      return src__utils.handleThenable(core.String, this.jsObject.verifyPhoneNumber(phoneNumber, applicationVerifier.jsObject));
    }
    static credential(verificationId, verificationCode) {
      return dart.global.firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
    }
  };
  (src__auth.PhoneAuthProvider.fromJsObject = function(jsObject) {
    src__auth.PhoneAuthProvider.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__auth.PhoneAuthProvider.prototype;
  dart.addTypeTests(src__auth.PhoneAuthProvider);
  dart.setMethodSignature(src__auth.PhoneAuthProvider, () => ({
    __proto__: dart.getMethods(src__auth.PhoneAuthProvider.__proto__),
    verifyPhoneNumber: dart.fnType(async.Future$(core.String), [core.String, src__auth.ApplicationVerifier$(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))])
  }));
  const _is_ApplicationVerifier_default = Symbol('_is_ApplicationVerifier_default');
  src__auth.ApplicationVerifier$ = dart.generic(T => {
    class ApplicationVerifier extends src__js.JsObjectWrapper$(T) {
      get type() {
        return this.jsObject.type;
      }
      verify() {
        return src__utils.handleThenable(core.String, this.jsObject.verify());
      }
    }
    (ApplicationVerifier.fromJsObject = function(jsObject) {
      ApplicationVerifier.__proto__.fromJsObject.call(this, jsObject);
    }).prototype = ApplicationVerifier.prototype;
    dart.addTypeTests(ApplicationVerifier);
    ApplicationVerifier.prototype[_is_ApplicationVerifier_default] = true;
    dart.setMethodSignature(ApplicationVerifier, () => ({
      __proto__: dart.getMethods(ApplicationVerifier.__proto__),
      verify: dart.fnType(async.Future$(core.String), [])
    }));
    dart.setGetterSignature(ApplicationVerifier, () => ({
      __proto__: dart.getGetters(ApplicationVerifier.__proto__),
      type: core.String
    }));
    return ApplicationVerifier;
  });
  src__auth.ApplicationVerifier = src__auth.ApplicationVerifier$();
  dart.addTypeTests(src__auth.ApplicationVerifier, _is_ApplicationVerifier_default);
  src__auth.RecaptchaVerifier = class RecaptchaVerifier extends src__auth.ApplicationVerifier$(dart.lazyJSType(() => dart.global.firebase.auth.RecaptchaVerifier, "firebase.auth.RecaptchaVerifier")) {
    static new(container, parameters, app) {
      if (parameters === void 0) parameters = null;
      if (app === void 0) app = null;
      return parameters != null ? app != null ? new src__auth.RecaptchaVerifier.fromJsObject(new dart.global.firebase.auth.RecaptchaVerifier(container, src__utils.jsify(parameters), app.jsObject)) : new src__auth.RecaptchaVerifier.fromJsObject(new dart.global.firebase.auth.RecaptchaVerifier(container, src__utils.jsify(parameters))) : new src__auth.RecaptchaVerifier.fromJsObject(new dart.global.firebase.auth.RecaptchaVerifier(container));
    }
    clear() {
      return this.jsObject.clear();
    }
    render() {
      return src__utils.handleThenable(core.num, this.jsObject.render());
    }
  };
  (src__auth.RecaptchaVerifier.fromJsObject = function(jsObject) {
    src__auth.RecaptchaVerifier.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__auth.RecaptchaVerifier.prototype;
  dart.addTypeTests(src__auth.RecaptchaVerifier);
  dart.setMethodSignature(src__auth.RecaptchaVerifier, () => ({
    __proto__: dart.getMethods(src__auth.RecaptchaVerifier.__proto__),
    clear: dart.fnType(dart.dynamic, []),
    render: dart.fnType(async.Future$(core.num), [])
  }));
  src__auth.ConfirmationResult = class ConfirmationResult extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult")) {
    get verificationId() {
      return this.jsObject.verificationId;
    }
    confirm(verificationCode) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.confirm(verificationCode)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
  };
  (src__auth.ConfirmationResult.fromJsObject = function(jsObject) {
    src__auth.ConfirmationResult.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__auth.ConfirmationResult.prototype;
  dart.addTypeTests(src__auth.ConfirmationResult);
  dart.setMethodSignature(src__auth.ConfirmationResult, () => ({
    __proto__: dart.getMethods(src__auth.ConfirmationResult.__proto__),
    confirm: dart.fnType(async.Future$(src__auth.UserCredential), [core.String])
  }));
  dart.setGetterSignature(src__auth.ConfirmationResult, () => ({
    __proto__: dart.getGetters(src__auth.ConfirmationResult.__proto__),
    verificationId: core.String
  }));
  src__auth.UserCredential = class UserCredential extends src__js.JsObjectWrapper$(dart.anonymousJSType("UserCredentialJsImpl")) {
    get user() {
      return src__auth.User.getInstance(this.jsObject.user);
    }
    get credential() {
      return this.jsObject.credential;
    }
    get operationType() {
      return this.jsObject.operationType;
    }
    get additionalUserInfo() {
      return new src__auth.AdditionalUserInfo.fromJsObject(this.jsObject.additionalUserInfo);
    }
  };
  (src__auth.UserCredential.fromJsObject = function(jsObject) {
    src__auth.UserCredential.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__auth.UserCredential.prototype;
  dart.addTypeTests(src__auth.UserCredential);
  dart.setGetterSignature(src__auth.UserCredential, () => ({
    __proto__: dart.getGetters(src__auth.UserCredential.__proto__),
    user: src__auth.User,
    credential: dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential"),
    operationType: core.String,
    additionalUserInfo: src__auth.AdditionalUserInfo
  }));
  src__auth.AdditionalUserInfo = class AdditionalUserInfo extends src__js.JsObjectWrapper$(dart.anonymousJSType("AdditionalUserInfoJsImpl")) {
    get providerId() {
      return this.jsObject.providerId;
    }
    get profile() {
      return MapOfString$dynamic()._check(src__utils.dartify(this.jsObject.profile));
    }
    get username() {
      return this.jsObject.username;
    }
    get isNewUser() {
      return this.jsObject.isNewUser;
    }
  };
  (src__auth.AdditionalUserInfo.fromJsObject = function(jsObject) {
    src__auth.AdditionalUserInfo.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__auth.AdditionalUserInfo.prototype;
  dart.addTypeTests(src__auth.AdditionalUserInfo);
  dart.setGetterSignature(src__auth.AdditionalUserInfo, () => ({
    __proto__: dart.getGetters(src__auth.AdditionalUserInfo.__proto__),
    providerId: core.String,
    profile: core.Map$(core.String, dart.dynamic),
    username: core.String,
    isNewUser: core.bool
  }));
  src__app.App = class App extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.app.App, "firebase.app.App")) {
    get name() {
      return this.jsObject.name;
    }
    get options() {
      return this.jsObject.options;
    }
    static getInstance(jsObject) {
      if (jsObject == null) {
        return null;
      }
      let t = src__app.App._expando._get(jsObject);
      return t == null ? src__app.App._expando._set(jsObject, new src__app.App._fromJsObject(jsObject)) : t;
    }
    auth() {
      return src__auth.Auth.getInstance(this.jsObject.auth());
    }
    database() {
      return src__database.Database.getInstance(this.jsObject.database());
    }
    delete() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.delete());
    }
    storage(url) {
      if (url === void 0) url = null;
      let jsObjectStorage = url != null ? this.jsObject.storage(url) : this.jsObject.storage();
      return src__storage.Storage.getInstance(jsObjectStorage);
    }
    firestore() {
      return src__firestore.Firestore.getInstance(this.jsObject.firestore());
    }
  };
  (src__app.App._fromJsObject = function(jsObject) {
    src__app.App.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = src__app.App.prototype;
  dart.addTypeTests(src__app.App);
  dart.setMethodSignature(src__app.App, () => ({
    __proto__: dart.getMethods(src__app.App.__proto__),
    auth: dart.fnType(src__auth.Auth, []),
    database: dart.fnType(src__database.Database, []),
    delete: dart.fnType(async.Future, []),
    storage: dart.fnType(src__storage.Storage, [], [core.String]),
    firestore: dart.fnType(src__firestore.Firestore, [])
  }));
  dart.setGetterSignature(src__app.App, () => ({
    __proto__: dart.getGetters(src__app.App.__proto__),
    name: core.String,
    options: dart.anonymousJSType("FirebaseOptions")
  }));
  dart.defineLazy(src__app.App, {
    /*src__app.App._expando*/get _expando() {
      return new (ExpandoOfApp()).new();
    }
  });
  dart.trackLibraries("packages/firebase/src/app.ddc", {
    "package:firebase/src/func.dart": src__func,
    "package:firebase/src/interop/storage_interop.dart": src__interop__storage_interop,
    "package:firebase/src/interop/messaging_interop.dart": src__interop__messaging_interop,
    "package:firebase/src/interop/firestore_interop.dart": src__interop__firestore_interop,
    "package:firebase/src/interop/firebase_interop.dart": src__interop__firebase_interop,
    "package:firebase/src/interop/database_interop.dart": src__interop__database_interop,
    "package:firebase/src/interop/app_interop.dart": src__interop__app_interop,
    "package:firebase/src/interop/auth_interop.dart": src__interop__auth_interop,
    "package:firebase/src/js.dart": src__js,
    "package:firebase/src/interop/js_interop.dart": src__interop__js_interop,
    "package:firebase/src/storage.dart": src__storage,
    "package:firebase/src/database.dart": src__database,
    "package:firebase/src/firestore.dart": src__firestore,
    "package:firebase/src/utils.dart": src__utils,
    "package:firebase/src/auth.dart": src__auth,
    "package:firebase/src/app.dart": src__app
  }, '{"version":3,"sourceRoot":"","sources":["js.dart","interop/js_interop.dart","storage.dart","database.dart","firestore.dart","utils.dart","auth.dart","app.dart"],"names":[],"mappings":"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","file":"app.ddc.js"}');
  // Exports:
  return {
    src__func: src__func,
    src__interop__storage_interop: src__interop__storage_interop,
    src__interop__messaging_interop: src__interop__messaging_interop,
    src__interop__firestore_interop: src__interop__firestore_interop,
    src__interop__firebase_interop: src__interop__firebase_interop,
    src__interop__database_interop: src__interop__database_interop,
    src__interop__app_interop: src__interop__app_interop,
    src__interop__auth_interop: src__interop__auth_interop,
    src__js: src__js,
    src__interop__js_interop: src__interop__js_interop,
    src__storage: src__storage,
    src__database: src__database,
    src__firestore: src__firestore,
    src__utils: src__utils,
    src__auth: src__auth,
    src__app: src__app
  };
});

//# sourceMappingURL=app.ddc.js.map
