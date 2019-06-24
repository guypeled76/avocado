define(['dart_sdk', 'packages/avocado_web/src/services/repository', 'packages/avocado_web/src/services/auth', 'packages/avocado_common/common', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, repository, auth, common, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__services__repository = repository.src__services__repository;
  const src__services__auth = auth.src__services__auth;
  const src__services__store = common.src__services__store;
  const src__services__repository$ = common.src__services__repository;
  const src__services__auth$ = common.src__services__auth;
  const src__di__injector__injector = change_detection.src__di__injector__injector;
  const _root = Object.create(null);
  const src__services__store$ = Object.create(_root);
  src__services__store$.StoreServiceImpl = class StoreServiceImpl extends src__services__store.StoreService {
    get injector() {
      return this[injector$];
    }
    set injector(value) {
      super.injector = value;
    }
    get repositoryService() {
      return this[repositoryService];
    }
    set repositoryService(value) {
      super.repositoryService = value;
    }
    get authService() {
      return this[authService];
    }
    set authService(value) {
      super.authService = value;
    }
    getService(ServiceType) {
      if (ServiceType.is(this.repositoryService)) {
        return ServiceType.as(this.repositoryService);
      } else if (ServiceType.is(this.authService)) {
        return ServiceType.as(this.authService);
      } else if (ServiceType.is(this)) {
        return ServiceType.as(this);
      }
      return this.injector.provideType(ServiceType, dart.runtimeType(ServiceType));
    }
  };
  (src__services__store$.StoreServiceImpl.new = function(injector) {
    this[repositoryService] = new src__services__repository.RepositoryServiceImpl.new();
    this[authService] = new src__services__auth.AuthServiceImpl.new();
    this[injector$] = injector;
    src__services__store$.StoreServiceImpl.__proto__.new.call(this);
  }).prototype = src__services__store$.StoreServiceImpl.prototype;
  dart.addTypeTests(src__services__store$.StoreServiceImpl);
  const injector$ = Symbol("StoreServiceImpl.injector");
  const repositoryService = Symbol("StoreServiceImpl.repositoryService");
  const authService = Symbol("StoreServiceImpl.authService");
  dart.setMethodSignature(src__services__store$.StoreServiceImpl, () => ({
    __proto__: dart.getMethods(src__services__store$.StoreServiceImpl.__proto__),
    getService: dart.gFnType(ServiceType => [ServiceType, []])
  }));
  dart.setFieldSignature(src__services__store$.StoreServiceImpl, () => ({
    __proto__: dart.getFields(src__services__store$.StoreServiceImpl.__proto__),
    injector: dart.finalFieldType(src__di__injector__injector.Injector),
    repositoryService: dart.finalFieldType(src__services__repository$.RepositoryService),
    authService: dart.finalFieldType(src__services__auth$.AuthService)
  }));
  dart.trackLibraries("packages/avocado_web/src/services/store.ddc", {
    "package:avocado_web/src/services/store.dart": src__services__store$
  }, '{"version":3,"sourceRoot":"","sources":["store.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IAQiB;;;;;;IACS;;;;;;IACN;;;;;;;AAShB,yBAAI,sBAAiB,GAAiB;AACpC,8BAAO,sBAAiB;YACnB,oBAAI,gBAAW,GAAiB;AACrC,8BAAO,gBAAW;YACb,oBAAI,OAAqB;AAC9B,8BAAO;;AAET,YAAO,cAAQ,YAAY,+BAAc,WAAW;IACtD;;yDAfiB,QAAa;IAHN,uBAAiB,OAAG,mDAAqB;IAC/C,iBAAW,OAAG,uCAAe;IAEzB,eAAQ,GAAR,QAAQ;;EAG9B","file":"store.ddc.js"}');
  // Exports:
  return {
    src__services__store: src__services__store$
  };
});

//# sourceMappingURL=store.ddc.js.map
