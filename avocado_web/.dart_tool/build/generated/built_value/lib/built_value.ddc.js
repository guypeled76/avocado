define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const built_value = Object.create(_root);
  const $rightShift = dartx['>>'];
  const $times = dartx['*'];
  let StringToIndentingBuiltValueToStringHelper = () => (StringToIndentingBuiltValueToStringHelper = dart.constFn(dart.fnType(built_value.IndentingBuiltValueToStringHelper, [core.String])))();
  const _is_Built_default = Symbol('_is_Built_default');
  built_value.Built$ = dart.generic((V, B) => {
    class Built extends core.Object {}
    (Built.new = function() {
    }).prototype = Built.prototype;
    dart.addTypeTests(Built);
    Built.prototype[_is_Built_default] = true;
    return Built;
  });
  built_value.Built = built_value.Built$();
  dart.addTypeTests(built_value.Built, _is_Built_default);
  const _is_Builder_default = Symbol('_is_Builder_default');
  built_value.Builder$ = dart.generic((V, B) => {
    class Builder extends core.Object {}
    (Builder.new = function() {
    }).prototype = Builder.prototype;
    dart.addTypeTests(Builder);
    Builder.prototype[_is_Builder_default] = true;
    return Builder;
  });
  built_value.Builder = built_value.Builder$();
  dart.addTypeTests(built_value.Builder, _is_Builder_default);
  built_value.BuiltValue = class BuiltValue extends core.Object {
    get instantiable() {
      return this[instantiable$];
    }
    set instantiable(value) {
      super.instantiable = value;
    }
    get nestedBuilders() {
      return this[nestedBuilders$];
    }
    set nestedBuilders(value) {
      super.nestedBuilders = value;
    }
    get autoCreateNestedBuilders() {
      return this[autoCreateNestedBuilders$];
    }
    set autoCreateNestedBuilders(value) {
      super.autoCreateNestedBuilders = value;
    }
    get comparableBuilders() {
      return this[comparableBuilders$];
    }
    set comparableBuilders(value) {
      super.comparableBuilders = value;
    }
    get wireName() {
      return this[wireName$];
    }
    set wireName(value) {
      super.wireName = value;
    }
  };
  (built_value.BuiltValue.new = function(opts) {
    let instantiable = opts && 'instantiable' in opts ? opts.instantiable : true;
    let nestedBuilders = opts && 'nestedBuilders' in opts ? opts.nestedBuilders : true;
    let autoCreateNestedBuilders = opts && 'autoCreateNestedBuilders' in opts ? opts.autoCreateNestedBuilders : true;
    let comparableBuilders = opts && 'comparableBuilders' in opts ? opts.comparableBuilders : false;
    let wireName = opts && 'wireName' in opts ? opts.wireName : null;
    this[instantiable$] = instantiable;
    this[nestedBuilders$] = nestedBuilders;
    this[autoCreateNestedBuilders$] = autoCreateNestedBuilders;
    this[comparableBuilders$] = comparableBuilders;
    this[wireName$] = wireName;
  }).prototype = built_value.BuiltValue.prototype;
  dart.addTypeTests(built_value.BuiltValue);
  const instantiable$ = Symbol("BuiltValue.instantiable");
  const nestedBuilders$ = Symbol("BuiltValue.nestedBuilders");
  const autoCreateNestedBuilders$ = Symbol("BuiltValue.autoCreateNestedBuilders");
  const comparableBuilders$ = Symbol("BuiltValue.comparableBuilders");
  const wireName$ = Symbol("BuiltValue.wireName");
  dart.setFieldSignature(built_value.BuiltValue, () => ({
    __proto__: dart.getFields(built_value.BuiltValue.__proto__),
    instantiable: dart.finalFieldType(core.bool),
    nestedBuilders: dart.finalFieldType(core.bool),
    autoCreateNestedBuilders: dart.finalFieldType(core.bool),
    comparableBuilders: dart.finalFieldType(core.bool),
    wireName: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(built_value, {
    /*built_value.nullable*/get nullable() {
      return "nullable";
    }
  });
  built_value.BuiltValueField = class BuiltValueField extends core.Object {
    get compare() {
      return this[compare$];
    }
    set compare(value) {
      super.compare = value;
    }
    get serialize() {
      return this[serialize$];
    }
    set serialize(value) {
      super.serialize = value;
    }
    get wireName() {
      return this[wireName$0];
    }
    set wireName(value) {
      super.wireName = value;
    }
  };
  (built_value.BuiltValueField.new = function(opts) {
    let compare = opts && 'compare' in opts ? opts.compare : true;
    let serialize = opts && 'serialize' in opts ? opts.serialize : true;
    let wireName = opts && 'wireName' in opts ? opts.wireName : null;
    this[compare$] = compare;
    this[serialize$] = serialize;
    this[wireName$0] = wireName;
  }).prototype = built_value.BuiltValueField.prototype;
  dart.addTypeTests(built_value.BuiltValueField);
  const compare$ = Symbol("BuiltValueField.compare");
  const serialize$ = Symbol("BuiltValueField.serialize");
  const wireName$0 = Symbol("BuiltValueField.wireName");
  dart.setFieldSignature(built_value.BuiltValueField, () => ({
    __proto__: dart.getFields(built_value.BuiltValueField.__proto__),
    compare: dart.finalFieldType(core.bool),
    serialize: dart.finalFieldType(core.bool),
    wireName: dart.finalFieldType(core.String)
  }));
  built_value.BuiltValueSerializer = class BuiltValueSerializer extends core.Object {
    get custom() {
      return this[custom$];
    }
    set custom(value) {
      super.custom = value;
    }
  };
  (built_value.BuiltValueSerializer.new = function(opts) {
    let custom = opts && 'custom' in opts ? opts.custom : false;
    this[custom$] = custom;
  }).prototype = built_value.BuiltValueSerializer.prototype;
  dart.addTypeTests(built_value.BuiltValueSerializer);
  const custom$ = Symbol("BuiltValueSerializer.custom");
  dart.setFieldSignature(built_value.BuiltValueSerializer, () => ({
    __proto__: dart.getFields(built_value.BuiltValueSerializer.__proto__),
    custom: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(built_value, {
    /*built_value.memoized*/get memoized() {
      return "memoized";
    }
  });
  built_value.BuiltValueEnum = class BuiltValueEnum extends core.Object {
    get wireName() {
      return this[wireName$1];
    }
    set wireName(value) {
      super.wireName = value;
    }
  };
  (built_value.BuiltValueEnum.new = function(opts) {
    let wireName = opts && 'wireName' in opts ? opts.wireName : null;
    this[wireName$1] = wireName;
  }).prototype = built_value.BuiltValueEnum.prototype;
  dart.addTypeTests(built_value.BuiltValueEnum);
  const wireName$1 = Symbol("BuiltValueEnum.wireName");
  dart.setFieldSignature(built_value.BuiltValueEnum, () => ({
    __proto__: dart.getFields(built_value.BuiltValueEnum.__proto__),
    wireName: dart.finalFieldType(core.String)
  }));
  built_value.BuiltValueEnumConst = class BuiltValueEnumConst extends core.Object {
    get wireName() {
      return this[wireName$2];
    }
    set wireName(value) {
      super.wireName = value;
    }
  };
  (built_value.BuiltValueEnumConst.new = function(opts) {
    let wireName = opts && 'wireName' in opts ? opts.wireName : null;
    this[wireName$2] = wireName;
  }).prototype = built_value.BuiltValueEnumConst.prototype;
  dart.addTypeTests(built_value.BuiltValueEnumConst);
  const wireName$2 = Symbol("BuiltValueEnumConst.wireName");
  dart.setFieldSignature(built_value.BuiltValueEnumConst, () => ({
    __proto__: dart.getFields(built_value.BuiltValueEnumConst.__proto__),
    wireName: dart.finalFieldType(core.String)
  }));
  built_value.EnumClass = class EnumClass extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    toString() {
      return this.name;
    }
  };
  (built_value.EnumClass.new = function(name) {
    this[name$] = name;
  }).prototype = built_value.EnumClass.prototype;
  dart.addTypeTests(built_value.EnumClass);
  const name$ = Symbol("EnumClass.name");
  dart.setFieldSignature(built_value.EnumClass, () => ({
    __proto__: dart.getFields(built_value.EnumClass.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(built_value.EnumClass, ['toString']);
  built_value.$jc = function(hash, value) {
    hash = 536870911 & dart.notNull(hash) + dart.notNull(value);
    hash = 536870911 & dart.notNull(hash) + ((524287 & dart.notNull(hash)) << 10);
    return (dart.notNull(hash) ^ hash[$rightShift](6)) >>> 0;
  };
  built_value.$jf = function(hash) {
    hash = 536870911 & dart.notNull(hash) + ((67108863 & dart.notNull(hash)) << 3);
    hash = (dart.notNull(hash) ^ hash[$rightShift](11)) >>> 0;
    return 536870911 & dart.notNull(hash) + ((16383 & dart.notNull(hash)) << 15);
  };
  dart.defineLazy(built_value, {
    /*built_value.newBuiltValueToStringHelper*/get newBuiltValueToStringHelper() {
      return dart.lazyFn(className => new built_value.IndentingBuiltValueToStringHelper.new(className), StringToIndentingBuiltValueToStringHelper);
    },
    set newBuiltValueToStringHelper(_) {}
  });
  built_value.BuiltValueToStringHelper = class BuiltValueToStringHelper extends core.Object {};
  (built_value.BuiltValueToStringHelper.new = function() {
  }).prototype = built_value.BuiltValueToStringHelper.prototype;
  dart.addTypeTests(built_value.BuiltValueToStringHelper);
  const _result = Symbol('_result');
  built_value.IndentingBuiltValueToStringHelper = class IndentingBuiltValueToStringHelper extends core.Object {
    add(field, value) {
      if (value != null) {
        let _ = this[_result];
        _.write(" "[$times](built_value._indentingBuiltValueToStringHelperIndent));
        _.write(field);
        _.write("=");
        _.write(value);
        _.write(",\n");
      }
    }
    toString() {
      built_value._indentingBuiltValueToStringHelperIndent = dart.notNull(built_value._indentingBuiltValueToStringHelperIndent) - 2;
      let _ = this[_result];
      _.write(" "[$times](built_value._indentingBuiltValueToStringHelperIndent));
      _.write("}");
      let stringResult = dart.toString(this[_result]);
      this[_result] = null;
      return stringResult;
    }
  };
  (built_value.IndentingBuiltValueToStringHelper.new = function(className) {
    this[_result] = new core.StringBuffer.new();
    let _ = this[_result];
    _.write(className);
    _.write(" {\n");
    built_value._indentingBuiltValueToStringHelperIndent = dart.notNull(built_value._indentingBuiltValueToStringHelperIndent) + 2;
  }).prototype = built_value.IndentingBuiltValueToStringHelper.prototype;
  dart.addTypeTests(built_value.IndentingBuiltValueToStringHelper);
  built_value.IndentingBuiltValueToStringHelper[dart.implements] = () => [built_value.BuiltValueToStringHelper];
  dart.setMethodSignature(built_value.IndentingBuiltValueToStringHelper, () => ({
    __proto__: dart.getMethods(built_value.IndentingBuiltValueToStringHelper.__proto__),
    add: dart.fnType(dart.void, [core.String, core.Object])
  }));
  dart.setFieldSignature(built_value.IndentingBuiltValueToStringHelper, () => ({
    __proto__: dart.getFields(built_value.IndentingBuiltValueToStringHelper.__proto__),
    [_result]: dart.fieldType(core.StringBuffer)
  }));
  dart.defineExtensionMethods(built_value.IndentingBuiltValueToStringHelper, ['toString']);
  dart.defineLazy(built_value, {
    /*built_value._indentingBuiltValueToStringHelperIndent*/get _indentingBuiltValueToStringHelperIndent() {
      return 0;
    },
    set _indentingBuiltValueToStringHelperIndent(_) {}
  });
  const _previousField = Symbol('_previousField');
  built_value.FlatBuiltValueToStringHelper = class FlatBuiltValueToStringHelper extends core.Object {
    add(field, value) {
      if (value != null) {
        if (dart.test(this[_previousField])) this[_result].write(",");
        let _ = this[_result];
        _.write(field);
        _.write("=");
        _.write(value);
        this[_previousField] = true;
      }
    }
    toString() {
      this[_result].write("}");
      let stringResult = dart.toString(this[_result]);
      this[_result] = null;
      return stringResult;
    }
  };
  (built_value.FlatBuiltValueToStringHelper.new = function(className) {
    this[_result] = new core.StringBuffer.new();
    this[_previousField] = false;
    let _ = this[_result];
    _.write(className);
    _.write(" {");
  }).prototype = built_value.FlatBuiltValueToStringHelper.prototype;
  dart.addTypeTests(built_value.FlatBuiltValueToStringHelper);
  built_value.FlatBuiltValueToStringHelper[dart.implements] = () => [built_value.BuiltValueToStringHelper];
  dart.setMethodSignature(built_value.FlatBuiltValueToStringHelper, () => ({
    __proto__: dart.getMethods(built_value.FlatBuiltValueToStringHelper.__proto__),
    add: dart.fnType(dart.void, [core.String, core.Object])
  }));
  dart.setFieldSignature(built_value.FlatBuiltValueToStringHelper, () => ({
    __proto__: dart.getFields(built_value.FlatBuiltValueToStringHelper.__proto__),
    [_result]: dart.fieldType(core.StringBuffer),
    [_previousField]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(built_value.FlatBuiltValueToStringHelper, ['toString']);
  built_value.BuiltValueNullFieldError = class BuiltValueNullFieldError extends core.Error {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get field() {
      return this[field$];
    }
    set field(value) {
      super.field = value;
    }
    toString() {
      return "Tried to construct class \"" + dart.str(this.type) + "\" with null field \"" + dart.str(this.field) + "\". " + ("This is forbidden; to allow it, mark \"" + dart.str(this.field) + "\" with @nullable.");
    }
  };
  (built_value.BuiltValueNullFieldError.new = function(type, field) {
    this[type$] = type;
    this[field$] = field;
    built_value.BuiltValueNullFieldError.__proto__.new.call(this);
  }).prototype = built_value.BuiltValueNullFieldError.prototype;
  dart.addTypeTests(built_value.BuiltValueNullFieldError);
  const type$ = Symbol("BuiltValueNullFieldError.type");
  const field$ = Symbol("BuiltValueNullFieldError.field");
  dart.setFieldSignature(built_value.BuiltValueNullFieldError, () => ({
    __proto__: dart.getFields(built_value.BuiltValueNullFieldError.__proto__),
    type: dart.finalFieldType(core.String),
    field: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(built_value.BuiltValueNullFieldError, ['toString']);
  built_value.BuiltValueMissingGenericsError = class BuiltValueMissingGenericsError extends core.Error {
    get type() {
      return this[type$0];
    }
    set type(value) {
      super.type = value;
    }
    get parameter() {
      return this[parameter$];
    }
    set parameter(value) {
      super.parameter = value;
    }
    toString() {
      return "Tried to construct class \"" + dart.str(this.type) + "\" with missing or dynamic " + ("type argument \"" + dart.str(this.parameter) + "\". All type arguments must be specified.");
    }
  };
  (built_value.BuiltValueMissingGenericsError.new = function(type, parameter) {
    this[type$0] = type;
    this[parameter$] = parameter;
    built_value.BuiltValueMissingGenericsError.__proto__.new.call(this);
  }).prototype = built_value.BuiltValueMissingGenericsError.prototype;
  dart.addTypeTests(built_value.BuiltValueMissingGenericsError);
  const type$0 = Symbol("BuiltValueMissingGenericsError.type");
  const parameter$ = Symbol("BuiltValueMissingGenericsError.parameter");
  dart.setFieldSignature(built_value.BuiltValueMissingGenericsError, () => ({
    __proto__: dart.getFields(built_value.BuiltValueMissingGenericsError.__proto__),
    type: dart.finalFieldType(core.String),
    parameter: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(built_value.BuiltValueMissingGenericsError, ['toString']);
  built_value.BuiltValueNestedFieldError = class BuiltValueNestedFieldError extends core.Error {
    get type() {
      return this[type$1];
    }
    set type(value) {
      super.type = value;
    }
    get field() {
      return this[field$0];
    }
    set field(value) {
      super.field = value;
    }
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    toString() {
      return "Tried to build class \"" + dart.str(this.type) + "\" but nested builder for field \"" + dart.str(this.field) + "\" " + ("threw: " + dart.str(this.error));
    }
  };
  (built_value.BuiltValueNestedFieldError.new = function(type, field, error) {
    this[type$1] = type;
    this[field$0] = field;
    this[error$] = error;
    built_value.BuiltValueNestedFieldError.__proto__.new.call(this);
  }).prototype = built_value.BuiltValueNestedFieldError.prototype;
  dart.addTypeTests(built_value.BuiltValueNestedFieldError);
  const type$1 = Symbol("BuiltValueNestedFieldError.type");
  const field$0 = Symbol("BuiltValueNestedFieldError.field");
  const error$ = Symbol("BuiltValueNestedFieldError.error");
  dart.setFieldSignature(built_value.BuiltValueNestedFieldError, () => ({
    __proto__: dart.getFields(built_value.BuiltValueNestedFieldError.__proto__),
    type: dart.finalFieldType(core.String),
    field: dart.finalFieldType(core.String),
    error: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(built_value.BuiltValueNestedFieldError, ['toString']);
  dart.trackLibraries("packages/built_value/built_value.ddc", {
    "package:built_value/built_value.dart": built_value
  }, '{"version":3,"sourceRoot":"","sources":["built_value.dart"],"names":[],"mappings":"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","file":"built_value.ddc.js"}');
  // Exports:
  return {
    built_value: built_value
  };
});

//# sourceMappingURL=built_value.ddc.js.map
