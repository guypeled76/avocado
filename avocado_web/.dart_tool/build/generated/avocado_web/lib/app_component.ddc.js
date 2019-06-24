define(['dart_sdk', 'packages/avocado_common/common'], function(dart_sdk, common) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__blocs__AuthBLoC = common.src__blocs__AuthBLoC;
  const _root = Object.create(null);
  const app_component = Object.create(_root);
  app_component.AppComponent = class AppComponent extends core.Object {
    get customWidth() {
      return this[customWidth];
    }
    set customWidth(value) {
      this[customWidth] = value;
    }
    get end() {
      return this[end];
    }
    set end(value) {
      this[end] = value;
    }
    get basicPopupVisible() {
      return this[basicPopupVisible];
    }
    set basicPopupVisible(value) {
      this[basicPopupVisible] = value;
    }
    get auth() {
      return this[auth];
    }
    set auth(value) {
      super.auth = value;
    }
  };
  (app_component.AppComponent.new = function(store) {
    this[customWidth] = false;
    this[end] = false;
    this[basicPopupVisible] = false;
    this[auth] = new src__blocs__AuthBLoC.AuthBLoC.new(store);
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  const customWidth = Symbol("AppComponent.customWidth");
  const end = Symbol("AppComponent.end");
  const basicPopupVisible = Symbol("AppComponent.basicPopupVisible");
  const auth = Symbol("AppComponent.auth");
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    customWidth: dart.fieldType(core.bool),
    end: dart.fieldType(core.bool),
    basicPopupVisible: dart.fieldType(core.bool),
    auth: dart.finalFieldType(src__blocs__AuthBLoC.AuthBLoC)
  }));
  dart.trackLibraries("packages/avocado_web/app_component.ddc", {
    "package:avocado_web/app_component.dart": app_component
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;;IAuCO;;;;;;IACA;;;;;;IACA;;;;;;IAEU;;;;;;;6CAEF,KAAkB;IAN1B,iBAAW,GAAG;IACd,SAAG,GAAG;IACN,uBAAiB,GAAG;IAKnB,UAAI,OAAG,iCAAQ,CAAC,KAAK;EAAC","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
