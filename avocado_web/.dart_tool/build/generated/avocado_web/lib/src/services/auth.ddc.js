define(['dart_sdk', 'packages/avocado_common/common', 'packages/rxdart/futures', 'packages/firebase/firebase', 'packages/firebase/src/app'], function(dart_sdk, common, futures, firebase, app) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__models__users = common.src__models__users;
  const src__services__auth = common.src__services__auth;
  const src__subjects__behavior_subject = futures.src__subjects__behavior_subject;
  const src__top_level = firebase.src__top_level;
  const src__auth = app.src__auth;
  const _root = Object.create(null);
  const src__services__auth$ = Object.create(_root);
  let BehaviorSubjectOfProfileInfo = () => (BehaviorSubjectOfProfileInfo = dart.constFn(src__subjects__behavior_subject.BehaviorSubject$(src__models__users.ProfileInfo)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let ObjectToNull = () => (ObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object])))();
  const _profile = Symbol('_profile');
  const _fbAuth = Symbol('_fbAuth');
  const _authChanged = Symbol('_authChanged');
  src__services__auth$.AuthServiceImpl = class AuthServiceImpl extends core.Object {
    get profile() {
      return this[_profile];
    }
    [_authChanged](user) {
      if (user != null) {
        this[_profile].add(new src__models__users.ProfileInfo.new({key: user.uid, image: user.photoURL, displayName: user.displayName}));
      } else {
        this[_profile].add(null);
      }
    }
    signInWithGoogle() {
      return async.async(dart.dynamic, (function* signInWithGoogle() {
        let _fbGoogleAuthProvider = src__auth.GoogleAuthProvider.new();
        yield this[_fbAuth].signInWithPopup(_fbGoogleAuthProvider);
      }).bind(this));
    }
    signInWithFacebook() {
      return async.async(dart.dynamic, (function* signInWithFacebook() {
        let _fbFacebookAuthProvider = src__auth.FacebookAuthProvider.new();
        yield this[_fbAuth].signInWithPopup(_fbFacebookAuthProvider);
      }).bind(this));
    }
    signOut() {
      return async.async(dart.dynamic, (function* signOut() {
        this[_fbAuth].signOut();
      }).bind(this));
    }
  };
  (src__services__auth$.AuthServiceImpl.new = function() {
    this[_profile] = BehaviorSubjectOfProfileInfo().new({seedValue: null});
    this[_fbAuth] = null;
    src__top_level.initializeApp({apiKey: "AIzaSyDZZbKWz5B2ofJAkbI_jw2u51aPdNnNmO0", authDomain: "avocado-backend.firebaseapp.com", databaseURL: "https://avocado-backend.firebaseio.com", projectId: "avocado-backend", storageBucket: "avocado-backend.appspot.com", messagingSenderId: "219538454820"});
    src__top_level.firestore().enablePersistence().then(core.Null, dart.fn(success => {
      core.print("Enabled presistance.");
    }, ObjectToNull())).catchError(dart.fn(error => {
      core.print("Failed to enable presistance: " + dart.notNull(core.String._check(error)));
    }, dynamicToNull()));
    this[_fbAuth] = src__top_level.auth();
    this[_fbAuth].onAuthStateChanged.listen(dart.bind(this, _authChanged));
  }).prototype = src__services__auth$.AuthServiceImpl.prototype;
  dart.addTypeTests(src__services__auth$.AuthServiceImpl);
  src__services__auth$.AuthServiceImpl[dart.implements] = () => [src__services__auth.AuthService];
  dart.setMethodSignature(src__services__auth$.AuthServiceImpl, () => ({
    __proto__: dart.getMethods(src__services__auth$.AuthServiceImpl.__proto__),
    [_authChanged]: dart.fnType(dart.void, [src__auth.User]),
    signInWithGoogle: dart.fnType(async.Future, []),
    signInWithFacebook: dart.fnType(async.Future, []),
    signOut: dart.fnType(async.Future, [])
  }));
  dart.setGetterSignature(src__services__auth$.AuthServiceImpl, () => ({
    __proto__: dart.getGetters(src__services__auth$.AuthServiceImpl.__proto__),
    profile: async.Stream$(src__models__users.ProfileInfo)
  }));
  dart.setFieldSignature(src__services__auth$.AuthServiceImpl, () => ({
    __proto__: dart.getFields(src__services__auth$.AuthServiceImpl.__proto__),
    [_profile]: dart.finalFieldType(BehaviorSubjectOfProfileInfo()),
    [_fbAuth]: dart.fieldType(src__auth.Auth)
  }));
  dart.trackLibraries("packages/avocado_web/src/services/auth.ddc", {
    "package:avocado_web/src/services/auth.dart": src__services__auth$
  }, '{"version":3,"sourceRoot":"","sources":["auth.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AAiCI,YAAO,eAAQ;IACjB;mBAGkB,IAAY;AAC5B,UAAI,IAAI,IAAI,MAAM;AAChB,sBAAQ,IAAI,KAAC,kCAAW,OACf,IAAI,IAAI,SACN,IAAI,SAAS,eACP,IAAI,YAAY;aAE5B;AACL,sBAAQ,IAAI,CAAC;;IAEjB;;AAE0B;AACxB,YAAI,wBAAwB,AAAI,gCAAqB;AACrD,cAAM,aAAO,gBAAgB,CAAC,qBAAqB;MACrD;;;AAE4B;AAC1B,YAAI,0BAA0B,AAAI,kCAAuB;AACzD,cAAM,aAAO,gBAAgB,CAAC,uBAAuB;MACvD;;;AAEiB;AACf,qBAAO,QAAQ;MACjB;;;;IArDmC,cAAQ,GAAG,kCAAe,aAC9C;IAEP,aAAO;AAGb,IAAG,4BAAa,UACJ,uDACI,gDACC,qDACF,kCACI,kDACI;AAEvB,IAAG,wBAAS,oBAAoB,OAAO,YAAC,QAAC,OAAO;AAC9C,gBAAK,CAAC;kCACK,CAAC,QAAC,KAAK;AAClB,gBAAK,CAAC,AAAiC,mEAAE,KAAK;;AAGhD,iBAAO,GAAG,AAAG,mBAAI;AACjB,iBAAO,mBAAmB,OAAO,CAAC,6BAAY;EAChD","file":"auth.ddc.js"}');
  // Exports:
  return {
    src__services__auth: src__services__auth$
  };
});

//# sourceMappingURL=auth.ddc.js.map
