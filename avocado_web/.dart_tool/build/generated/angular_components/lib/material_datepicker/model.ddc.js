define(['dart_sdk', 'packages/angular_components/material_datepicker/comparison', 'packages/angular_components/model/observable/observable'], function(dart_sdk, comparison, observable) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__comparison = comparison.material_datepicker__comparison;
  const model__observable__observable = observable.model__observable__observable;
  const _root = Object.create(null);
  const material_datepicker__model = Object.create(_root);
  material_datepicker__model.DatepickerModel = class DatepickerModel extends model__observable__observable.ObservableReference$(material_datepicker__comparison.DatepickerComparison) {};
  (material_datepicker__model.DatepickerModel.new = function(value) {
    if (value === void 0) value = null;
    material_datepicker__model.DatepickerModel.__proto__.new.call(this, value);
  }).prototype = material_datepicker__model.DatepickerModel.prototype;
  dart.addTypeTests(material_datepicker__model.DatepickerModel);
  material_datepicker__model.DateRangePickerConfiguration = class DateRangePickerConfiguration extends core.Object {
    toString() {
      return {
        0: "DateRangePickerConfiguration.basic",
        1: "DateRangePickerConfiguration.predefinedRangesOnly",
        2: "DateRangePickerConfiguration.fullyLoaded"
      }[this.index];
    }
  };
  (material_datepicker__model.DateRangePickerConfiguration.new = function(x) {
    this.index = x;
  }).prototype = material_datepicker__model.DateRangePickerConfiguration.prototype;
  dart.addTypeTests(material_datepicker__model.DateRangePickerConfiguration);
  dart.setFieldSignature(material_datepicker__model.DateRangePickerConfiguration, () => ({
    __proto__: dart.getFields(material_datepicker__model.DateRangePickerConfiguration.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(material_datepicker__model.DateRangePickerConfiguration, ['toString']);
  material_datepicker__model.DateRangePickerConfiguration.basic = dart.const(new material_datepicker__model.DateRangePickerConfiguration.new(0));
  material_datepicker__model.DateRangePickerConfiguration.predefinedRangesOnly = dart.const(new material_datepicker__model.DateRangePickerConfiguration.new(1));
  material_datepicker__model.DateRangePickerConfiguration.fullyLoaded = dart.const(new material_datepicker__model.DateRangePickerConfiguration.new(2));
  material_datepicker__model.DateRangePickerConfiguration.values = dart.constList([material_datepicker__model.DateRangePickerConfiguration.basic, material_datepicker__model.DateRangePickerConfiguration.predefinedRangesOnly, material_datepicker__model.DateRangePickerConfiguration.fullyLoaded], material_datepicker__model.DateRangePickerConfiguration);
  dart.trackLibraries("packages/angular_components/material_datepicker/model.ddc", {
    "package:angular_components/material_datepicker/model.dart": material_datepicker__model
  }, '{"version":3,"sourceRoot":"","sources":["model.dart"],"names":[],"mappings":";;;;;;;;;;6DAiBmB,KAA0B;0BAAL;AAAU,wEAAM,KAAK;EAAC","file":"model.ddc.js"}');
  // Exports:
  return {
    material_datepicker__model: material_datepicker__model
  };
});

//# sourceMappingURL=model.ddc.js.map
