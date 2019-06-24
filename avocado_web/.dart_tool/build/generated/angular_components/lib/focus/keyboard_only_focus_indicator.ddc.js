define(['dart_sdk', 'packages/angular_components/utils/browser/dom_service/dom_service'], function(dart_sdk, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const _root = Object.create(null);
  const focus__keyboard_only_focus_indicator = Object.create(_root);
  const $outline = dartx.outline;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _element = Symbol('_element');
  const _domService = Symbol('_domService');
  const _lastInteraction = Symbol('_lastInteraction');
  focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective = class KeyboardOnlyFocusIndicatorDirective extends core.Object {
    keydown(e) {
      this[_lastInteraction] = focus__keyboard_only_focus_indicator._InteractionType.keyboard;
      this.resetOutline();
    }
    resetOutline() {
      if (this[_element].style[$outline] !== "") {
        this[_domService].scheduleWrite(dart.fn(() => {
          this[_element].style[$outline] = "";
        }, VoidToNull()));
      }
    }
    onMouseInteraction() {
      this[_lastInteraction] = focus__keyboard_only_focus_indicator._InteractionType.mouse;
      this.hideOutline();
    }
    hideOutline() {
      if (this[_element].style[$outline] !== "none") {
        this[_domService].scheduleWrite(dart.fn(() => {
          this[_element].style[$outline] = "none";
        }, VoidToNull()));
      }
    }
    onFocus(event) {
      if (this[_lastInteraction] === focus__keyboard_only_focus_indicator._InteractionType.mouse) {
        this.hideOutline();
      } else {
        this.resetOutline();
      }
    }
    focus(event) {
      if (event === void 0) event = null;
      this[_domService].scheduleWrite(dart.fn(() => {
        this[_element].focus();
      }, VoidToNull()));
      if (html.MouseEvent.is(event)) {
        this.hideOutline();
      } else {
        this.resetOutline();
      }
    }
  };
  (focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new = function(element, domService) {
    this[_lastInteraction] = focus__keyboard_only_focus_indicator._InteractionType.none;
    this[_element] = element;
    this[_domService] = domService;
  }).prototype = focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.prototype;
  dart.addTypeTests(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective);
  dart.setMethodSignature(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, () => ({
    __proto__: dart.getMethods(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.__proto__),
    keydown: dart.fnType(dart.void, [html.KeyboardEvent]),
    resetOutline: dart.fnType(dart.void, []),
    onMouseInteraction: dart.fnType(dart.void, []),
    hideOutline: dart.fnType(dart.void, []),
    onFocus: dart.fnType(dart.void, [html.Event]),
    focus: dart.fnType(dart.void, [], [html.UIEvent])
  }));
  dart.setFieldSignature(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, () => ({
    __proto__: dart.getFields(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.__proto__),
    [_element]: dart.finalFieldType(html.HtmlElement),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_lastInteraction]: dart.fieldType(focus__keyboard_only_focus_indicator._InteractionType)
  }));
  focus__keyboard_only_focus_indicator._InteractionType = class _InteractionType extends core.Object {
    toString() {
      return {
        0: "_InteractionType.mouse",
        1: "_InteractionType.keyboard",
        2: "_InteractionType.none"
      }[this.index];
    }
  };
  (focus__keyboard_only_focus_indicator._InteractionType.new = function(x) {
    this.index = x;
  }).prototype = focus__keyboard_only_focus_indicator._InteractionType.prototype;
  dart.addTypeTests(focus__keyboard_only_focus_indicator._InteractionType);
  dart.setFieldSignature(focus__keyboard_only_focus_indicator._InteractionType, () => ({
    __proto__: dart.getFields(focus__keyboard_only_focus_indicator._InteractionType.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(focus__keyboard_only_focus_indicator._InteractionType, ['toString']);
  focus__keyboard_only_focus_indicator._InteractionType.mouse = dart.const(new focus__keyboard_only_focus_indicator._InteractionType.new(0));
  focus__keyboard_only_focus_indicator._InteractionType.keyboard = dart.const(new focus__keyboard_only_focus_indicator._InteractionType.new(1));
  focus__keyboard_only_focus_indicator._InteractionType.none = dart.const(new focus__keyboard_only_focus_indicator._InteractionType.new(2));
  focus__keyboard_only_focus_indicator._InteractionType.values = dart.constList([focus__keyboard_only_focus_indicator._InteractionType.mouse, focus__keyboard_only_focus_indicator._InteractionType.keyboard, focus__keyboard_only_focus_indicator._InteractionType.none], focus__keyboard_only_focus_indicator._InteractionType);
  dart.trackLibraries("packages/angular_components/focus/keyboard_only_focus_indicator.ddc", {
    "package:angular_components/focus/keyboard_only_focus_indicator.dart": focus__keyboard_only_focus_indicator
  }, '{"version":3,"sourceRoot":"","sources":["keyboard_only_focus_indicator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;YA2Be,CAAe;AAC1B,4BAAgB,GAAG,qDAAgB,SAAS;AAC5C,uBAAY;IACd;;AAKE,UAAI,cAAQ,MAAM,UAAQ,KAAI,IAAI;AAChC,yBAAW,cAAc,CAAC;AACxB,wBAAQ,MAAM,UAAQ,GAAG;;;IAG/B;;AAME,4BAAgB,GAAG,qDAAgB,MAAM;AACzC,sBAAW;IACb;;AAIE,UAAI,cAAQ,MAAM,UAAQ,KAAI,QAAQ;AACpC,yBAAW,cAAc,CAAC;AACxB,wBAAQ,MAAM,UAAQ,GAAG;;;IAG/B;YAIa,KAAW;AAItB,UAAI,sBAAgB,KAAI,qDAAgB,MAAM,EAAE;AAC9C,wBAAW;aACN;AACL,yBAAY;;IAEhB;UAiBY,KAAa;4BAAL;AAClB,uBAAW,cAAc,CAAC;AACxB,sBAAQ,MAAM;;AAEhB,6BAAI,KAAK,GAAgB;AACvB,wBAAW;aACN;AACL,yBAAY;;IAEhB;;;IA3EiB,sBAAgB,GAAG,qDAAgB,KAAK;IAEhB,cAAQ;IAAO,iBAAW;EAAC","file":"keyboard_only_focus_indicator.ddc.js"}');
  // Exports:
  return {
    focus__keyboard_only_focus_indicator: focus__keyboard_only_focus_indicator
  };
});

//# sourceMappingURL=keyboard_only_focus_indicator.ddc.js.map
