define(['dart_sdk', 'packages/angular_components/material_select/material_dropdown_select', 'packages/angular_components/model/selection/selection_model', 'packages/angular_forms/src/directives', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, material_dropdown_select, selection_model, directives, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_select__material_dropdown_select = material_dropdown_select.material_select__material_dropdown_select;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const src__directives__control_value_accessor = directives.src__directives__control_value_accessor;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const material_select__material_dropdown_select_accessor = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $first = dartx.first;
  const $toList = dartx.toList;
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  const _selectionChangesSub = Symbol('_selectionChangesSub');
  const _select = Symbol('_select');
  const _visibileSub = Symbol('_visibileSub');
  const _is_BaseDropdownSelectValueAccessor_default = Symbol('_is_BaseDropdownSelectValueAccessor_default');
  material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor$ = dart.generic(T => {
    let MaterialDropdownSelectComponentOfT = () => (MaterialDropdownSelectComponentOfT = dart.constFn(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)))();
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    class BaseDropdownSelectValueAccessor extends core.Object {
      get selectionModel() {
        return this[selectionModel$];
      }
      set selectionModel(value) {
        super.selectionModel = value;
      }
      get initialized() {
        return this[initialized];
      }
      set initialized(value) {
        this[initialized] = value;
      }
      initializeSelectionModel() {
        if (dart.test(this.initialized)) return;
        this.initialized = true;
        if (!(this[_select].selection == null)) dart.assertFailed("Cannot set [selection] when using a Dropdown control value accessor.");
        this[_select].selection = this.selectionModel;
      }
      registerOnTouched(callback) {
        this[_visibileSub] = this[_select].visibleStream.listen(dart.fn(_ => {
          this[_visibileSub].cancel();
          callback();
        }, boolToNull()));
      }
      ngOnDestroy() {
        let t = this[_visibileSub];
        t == null ? null : t.cancel();
      }
      onDisabledChanged(isDisabled) {}
    }
    (BaseDropdownSelectValueAccessor.new = function(select, selectionModel) {
      this[_visibileSub] = null;
      this[initialized] = false;
      this[_select] = select;
      this[selectionModel$] = selectionModel;
    }).prototype = BaseDropdownSelectValueAccessor.prototype;
    dart.addTypeTests(BaseDropdownSelectValueAccessor);
    BaseDropdownSelectValueAccessor.prototype[_is_BaseDropdownSelectValueAccessor_default] = true;
    const selectionModel$ = Symbol("BaseDropdownSelectValueAccessor.selectionModel");
    const initialized = Symbol("BaseDropdownSelectValueAccessor.initialized");
    BaseDropdownSelectValueAccessor[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, src__core__metadata__lifecycle_hooks.OnDestroy];
    dart.setMethodSignature(BaseDropdownSelectValueAccessor, () => ({
      __proto__: dart.getMethods(BaseDropdownSelectValueAccessor.__proto__),
      initializeSelectionModel: dart.fnType(dart.dynamic, []),
      registerOnTouched: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [])]),
      ngOnDestroy: dart.fnType(dart.void, []),
      onDisabledChanged: dart.fnType(dart.void, [core.bool])
    }));
    dart.setFieldSignature(BaseDropdownSelectValueAccessor, () => ({
      __proto__: dart.getFields(BaseDropdownSelectValueAccessor.__proto__),
      [_select]: dart.finalFieldType(MaterialDropdownSelectComponentOfT()),
      selectionModel: dart.finalFieldType(SelectionModelOfT()),
      [_visibileSub]: dart.fieldType(async.StreamSubscription),
      initialized: dart.fieldType(core.bool)
    }));
    return BaseDropdownSelectValueAccessor;
  });
  material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor = material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor$();
  dart.addTypeTests(material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor, _is_BaseDropdownSelectValueAccessor_default);
  const _is_DropdownSelectValueAccessor_default = Symbol('_is_DropdownSelectValueAccessor_default');
  material_select__material_dropdown_select_accessor.DropdownSelectValueAccessor$ = dart.generic(T => {
    let MaterialDropdownSelectComponentOfT = () => (MaterialDropdownSelectComponentOfT = dart.constFn(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)))();
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let SelectionChangeRecordOfT = () => (SelectionChangeRecordOfT = dart.constFn(model__selection__selection_model.SelectionChangeRecord$(T)))();
    let ListOfSelectionChangeRecordOfT = () => (ListOfSelectionChangeRecordOfT = dart.constFn(core.List$(SelectionChangeRecordOfT())))();
    let ListOfSelectionChangeRecordOfTToNull = () => (ListOfSelectionChangeRecordOfTToNull = dart.constFn(dart.fnType(core.Null, [ListOfSelectionChangeRecordOfT()])))();
    class DropdownSelectValueAccessor extends material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor$(T) {
      registerOnChange(callback) {
        this[_selectionChangesSub] = this.selectionModel.selectionChanges.listen(dart.fn(_ => {
          let value = this.selectionModel.selectedValues == null || dart.test(this.selectionModel.selectedValues[$isEmpty]) ? null : (() => {
            let t = this.selectionModel.selectedValues;
            return t == null ? null : t[$first];
          })();
          callback(value);
        }, ListOfSelectionChangeRecordOfTToNull()));
      }
      writeValue(newValue) {
        this.initializeSelectionModel();
        if (newValue != null) {
          this.selectionModel.select(T._check(newValue));
        } else {
          this.selectionModel.clear();
        }
      }
      ngOnDestroy() {
        let t = this[_selectionChangesSub];
        t == null ? null : t.cancel();
        super.ngOnDestroy();
      }
    }
    (DropdownSelectValueAccessor.new = function(select) {
      this[_selectionChangesSub] = null;
      DropdownSelectValueAccessor.__proto__.new.call(this, MaterialDropdownSelectComponentOfT()._check(select), SelectionModelOfT().single());
    }).prototype = DropdownSelectValueAccessor.prototype;
    dart.addTypeTests(DropdownSelectValueAccessor);
    DropdownSelectValueAccessor.prototype[_is_DropdownSelectValueAccessor_default] = true;
    DropdownSelectValueAccessor[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, src__core__metadata__lifecycle_hooks.OnDestroy];
    dart.setMethodSignature(DropdownSelectValueAccessor, () => ({
      __proto__: dart.getMethods(DropdownSelectValueAccessor.__proto__),
      registerOnChange: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [dart.dynamic], {rawValue: core.String})]),
      writeValue: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setFieldSignature(DropdownSelectValueAccessor, () => ({
      __proto__: dart.getFields(DropdownSelectValueAccessor.__proto__),
      [_selectionChangesSub]: dart.fieldType(async.StreamSubscription)
    }));
    return DropdownSelectValueAccessor;
  });
  material_select__material_dropdown_select_accessor.DropdownSelectValueAccessor = material_select__material_dropdown_select_accessor.DropdownSelectValueAccessor$();
  dart.addTypeTests(material_select__material_dropdown_select_accessor.DropdownSelectValueAccessor, _is_DropdownSelectValueAccessor_default);
  const _is_MultiDropdownSelectValueAccessor_default = Symbol('_is_MultiDropdownSelectValueAccessor_default');
  material_select__material_dropdown_select_accessor.MultiDropdownSelectValueAccessor$ = dart.generic(T => {
    let MultiSelectionModelOfT = () => (MultiSelectionModelOfT = dart.constFn(model__selection__selection_model.MultiSelectionModel$(T)))();
    let SelectionChangeRecordOfT = () => (SelectionChangeRecordOfT = dart.constFn(model__selection__selection_model.SelectionChangeRecord$(T)))();
    let ListOfSelectionChangeRecordOfT = () => (ListOfSelectionChangeRecordOfT = dart.constFn(core.List$(SelectionChangeRecordOfT())))();
    let StreamSubscriptionOfListOfSelectionChangeRecordOfT = () => (StreamSubscriptionOfListOfSelectionChangeRecordOfT = dart.constFn(async.StreamSubscription$(ListOfSelectionChangeRecordOfT())))();
    let ListOfSelectionChangeRecordOfTToNull = () => (ListOfSelectionChangeRecordOfTToNull = dart.constFn(dart.fnType(core.Null, [ListOfSelectionChangeRecordOfT()])))();
    class MultiDropdownSelectValueAccessor extends material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor$(T) {
      get selectionChangesSub() {
        return this[selectionChangesSub];
      }
      set selectionChangesSub(value) {
        this[selectionChangesSub] = StreamSubscriptionOfListOfSelectionChangeRecordOfT()._check(value);
      }
      registerOnChange(callback) {
        this.selectionChangesSub = this.selectionModel.selectionChanges.listen(dart.fn(_ => {
          callback((() => {
            let t = this.selectionModel.selectedValues;
            return t == null ? null : t[$toList]();
          })());
        }, ListOfSelectionChangeRecordOfTToNull()));
      }
      writeValue(newValue) {
        this.initializeSelectionModel();
        this.selectionModel.clear();
        if (newValue == null) return;
        if (!core.Iterable.is(newValue)) dart.assertFailed("Multi select must be backed by an iterable");
        for (let value of core.Iterable._check(newValue)) {
          this.selectionModel.select(T._check(value));
        }
      }
      ngOnDestroy() {
        let t = this.selectionChangesSub;
        t == null ? null : t.cancel();
        super.ngOnDestroy();
      }
    }
    (MultiDropdownSelectValueAccessor.new = function(select) {
      this[selectionChangesSub] = null;
      MultiDropdownSelectValueAccessor.__proto__.new.call(this, select, MultiSelectionModelOfT().new());
    }).prototype = MultiDropdownSelectValueAccessor.prototype;
    dart.addTypeTests(MultiDropdownSelectValueAccessor);
    MultiDropdownSelectValueAccessor.prototype[_is_MultiDropdownSelectValueAccessor_default] = true;
    const selectionChangesSub = Symbol("MultiDropdownSelectValueAccessor.selectionChangesSub");
    MultiDropdownSelectValueAccessor[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, src__core__metadata__lifecycle_hooks.OnDestroy];
    dart.setMethodSignature(MultiDropdownSelectValueAccessor, () => ({
      __proto__: dart.getMethods(MultiDropdownSelectValueAccessor.__proto__),
      registerOnChange: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [dart.dynamic], {rawValue: core.String})]),
      writeValue: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setFieldSignature(MultiDropdownSelectValueAccessor, () => ({
      __proto__: dart.getFields(MultiDropdownSelectValueAccessor.__proto__),
      selectionChangesSub: dart.fieldType(StreamSubscriptionOfListOfSelectionChangeRecordOfT())
    }));
    return MultiDropdownSelectValueAccessor;
  });
  material_select__material_dropdown_select_accessor.MultiDropdownSelectValueAccessor = material_select__material_dropdown_select_accessor.MultiDropdownSelectValueAccessor$();
  dart.addTypeTests(material_select__material_dropdown_select_accessor.MultiDropdownSelectValueAccessor, _is_MultiDropdownSelectValueAccessor_default);
  dart.trackLibraries("packages/angular_components/material_select/material_dropdown_select_accessor.ddc", {
    "package:angular_components/material_select/material_dropdown_select_accessor.dart": material_select__material_dropdown_select_accessor
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_select_accessor.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;MA2G0B;;;;;;MAEnB;;;;;;;AAMH,sBAAI,gBAAW,GAAE;AACjB,wBAAW,GAAG;AACd,cAAO,aAAO,UAAU,IAAI,yBACxB;AACJ,qBAAO,UAAU,GAAG,mBAAc;MACpC;wBAGuB,QAAQ;AAC7B,0BAAY,GAAG,aAAO,cAAc,OAAO,CAAC,QAAC,CAAC;AAE5C,4BAAY,OAAO;AACnB,kBAAQ;;MAEZ;;AAIE,kCAAY;;MACd;wBAGuB,UAAe,GAAG;;4DA1BK,cAAmB;MAH9C,kBAAY;MAC1B,iBAAW,GAAG;MAEkB,aAAO;MAAO,qBAAc,GAAd,cAAc;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;uBAjF5C,QAAQ;AAC5B,kCAAoB,GAAG,mBAAc,iBAAiB,OAAO,CAAC,QAAC,CAAC;AAC9D,cAAI,QAAQ,AAAC,mBAAc,eAAe,IAAI,kBACtC,mBAAc,eAAe,UAAQ,IACvC;oBACA,mBAAc,eAAe;;;AACnC,kBAAQ,CAAC,KAAK;;MAElB;iBAGgB,QAAQ;AACtB,qCAAwB;AACxB,YAAI,QAAQ,IAAI,MAAM;AACpB,6BAAc,OAAO,UAAC,QAAQ;eACzB;AACL,6BAAc,MAAM;;MAExB;;AAIE,0CAAoB;;AACpB,yBAAiB;MACnB;;gDA5B4B,MAAsC;MAD/C,0BAAoB;AAEjC,uGAAM,MAAM,GAAE,0BAAqB;IAAG;;;;;;;;;;;;;;;;;;;;;;;;;MA4CO;;;;;;uBAM7B,QAAQ;AAC5B,gCAAmB,GAAG,mBAAc,iBAAiB,OAAO,CAAC,QAAC,CAAC;AAC7D,kBAAQ;oBAAC,mBAAc,eAAe;;;;MAE1C;iBAGgB,QAAQ;AACtB,qCAAwB;AACxB,2BAAc,MAAM;AACpB,YAAI,QAAQ,IAAI,MAAM;AACtB,8BAAO,QAAQ,qBAAc;AAC7B,iBAAW,8BAAS,QAAQ,GAAE;AAC5B,6BAAc,OAAO,UAAC,KAAK;;MAE/B;;AAIE,wCAAmB;;AACnB,yBAAiB;MACnB;;qDAzBiC,MAAyC;MAFvB,yBAAmB;AAGhE,gEAAM,MAAM,EAAE,4BAAsB;IAAG","file":"material_dropdown_select_accessor.ddc.js"}');
  // Exports:
  return {
    material_select__material_dropdown_select_accessor: material_select__material_dropdown_select_accessor
  };
});

//# sourceMappingURL=material_dropdown_select_accessor.ddc.js.map
