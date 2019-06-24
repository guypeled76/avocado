define(['dart_sdk', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/comparison.template', 'packages/angular_components/material_datepicker/comparison_option.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/src/material_datepicker/sequential.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/src/material_datepicker/comparison_range_editor', 'packages/angular_components/material_toggle/material_toggle.template', 'packages/angular_components/material_toggle/material_toggle', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_datepicker/comparison_option', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/date_range_input.template', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular_components/material_select/material_dropdown_select.template', 'packages/angular_components/utils/angular/scroll_host/angular_2.template'], function(dart_sdk, calendar, comparison, comparison_option, range, date, observable, sequential, disposer, view_type, change_detection, modules, comparison_range_editor, material_toggle, material_toggle$, has_disabled, material_select_item, material_select_item$, material_dropdown_base, activation_handler, selection_container, has_renderer, comparison_option$, ng_zone, scroll_host_interface, angular, date_range_input, material_list, material_list_item, material_dropdown_select, angular_2) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__calendar$46template = calendar.material_datepicker__calendar$46template;
  const material_datepicker__comparison$46template = comparison.material_datepicker__comparison$46template;
  const material_datepicker__comparison_option$46template = comparison_option.material_datepicker__comparison_option$46template;
  const material_datepicker__range$46template = range.material_datepicker__range$46template;
  const model__date__date$46template = date.model__date__date$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const src__material_datepicker__sequential$46template = sequential.src__material_datepicker__sequential$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__material_datepicker__comparison_range_editor = comparison_range_editor.src__material_datepicker__comparison_range_editor;
  const material_toggle__material_toggle$46template = material_toggle.material_toggle__material_toggle$46template;
  const material_toggle__material_toggle = material_toggle$.material_toggle__material_toggle;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const material_select__material_select_item = material_select_item$.material_select__material_select_item;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const material_datepicker__comparison_option = comparison_option$.material_datepicker__comparison_option;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__utils__angular__scroll_host__scroll_host_interface = scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const angular$46template = angular.angular$46template;
  const material_datepicker__date_range_input$46template = date_range_input.material_datepicker__date_range_input$46template;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const material_list__material_list_item$46template = material_list_item.material_list__material_list_item$46template;
  const material_select__material_dropdown_select$46template = material_dropdown_select.material_select__material_dropdown_select$46template;
  const utils__angular__scroll_host__angular_2$46template = angular_2.utils__angular__scroll_host__angular_2$46template;
  const _root = Object.create(null);
  const src__material_datepicker__date_range_editor_model$46template = Object.create(_root);
  const src__material_datepicker__comparison_range_editor$46scss$46css$46shim = Object.create(_root);
  const src__material_datepicker__comparison_range_editor$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfComparisonRangeEditorComponent = () => (AppViewOfComparisonRangeEditorComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent)))();
  let AppViewAndintToAppViewOfComparisonRangeEditorComponent = () => (AppViewAndintToAppViewOfComparisonRangeEditorComponent = dart.constFn(dart.fnType(AppViewOfComparisonRangeEditorComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfComparisonRangeEditorComponent = () => (ComponentFactoryOfComparisonRangeEditorComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent)))();
  let VoidToMaterialSelectItemComponent = () => (VoidToMaterialSelectItemComponent = dart.constFn(dart.fnType(material_select__material_select_item.MaterialSelectItemComponent, [])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let VoidToComparisonRangeEditorComponent = () => (VoidToComparisonRangeEditorComponent = dart.constFn(dart.fnType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent, [])))();
  let ComponentRefOfComparisonRangeEditorComponent = () => (ComponentRefOfComparisonRangeEditorComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent)))();
  dart.defineLazy(src__material_datepicker__date_range_editor_model$46template, {
    /*src__material_datepicker__date_range_editor_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_datepicker__date_range_editor_model$46template.initReflector = function() {
    if (dart.test(src__material_datepicker__date_range_editor_model$46template._visited)) {
      return;
    }
    src__material_datepicker__date_range_editor_model$46template._visited = true;
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__comparison$46template.initReflector();
    material_datepicker__comparison_option$46template.initReflector();
    material_datepicker__range$46template.initReflector();
    model__date__date$46template.initReflector();
    model__observable__observable$46template.initReflector();
    src__material_datepicker__sequential$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46scss$46css$46shim, {
    /*src__material_datepicker__comparison_range_editor$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{display:flex;flex-direction:column}.comparison-toggle-section._ngcontent-%ID%{display:flex;justify-content:space-between;align-items:center;flex-grow:1;height:32px;padding:0 16px}.comparison-toggle._ngcontent-%ID%{display:inline-flex}.comparison-option-dropdown._ngcontent-%ID%{flex-grow:1;display:inline-block;padding:0 8px;position:relative}material-select-item._ngcontent-%ID%{font-size:inherit}.fake-popup._ngcontent-%ID%{background-color:#fff;left:0;position:absolute;top:0;z-index:1}"];
    }
  });
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template, {
    /*src__material_datepicker__comparison_range_editor$46template.styles$ComparisonRangeEditorComponent*/get styles$ComparisonRangeEditorComponent() {
      return [src__material_datepicker__comparison_range_editor$46scss$46css$46shim.styles];
    }
  });
  const _compView_3 = Symbol('_compView_3');
  const _MaterialToggleComponent_3_5 = Symbol('_MaterialToggleComponent_3_5');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  let const$;
  const _handle_checkedChange_3_0 = Symbol('_handle_checkedChange_3_0');
  let const$0;
  src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0 = class ViewComparisonRangeEditorComponent0 extends src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      _el_0.className = "comparison-toggle-section";
      this.addShimC(_el_0);
      let _el_1 = src__core__linker__app_view.createSpanAndAppend(doc, _el_0);
      _el_1.className = "compare-header";
      this.addShimE(_el_1);
      let _text_2 = html.Text.new((() => {
        let l = src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.comparisonHeaderMsg;
        return l != null ? l : "";
      })());
      _el_1[$append](_text_2);
      this[_compView_3] = new material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootEl;
      _el_0[$append](_el_3);
      _el_3.className = src__core__linker__app_view_utils.interpolate2("", "comparison-toggle", " ", material_toggle__material_toggle.MaterialToggleComponent.hostClass, "");
      this.addShimC(_el_3);
      this[_MaterialToggleComponent_3_5] = new material_toggle__material_toggle.MaterialToggleComponent.new(this[_compView_3].ref, null);
      this[_compView_3].create(this[_MaterialToggleComponent_3_5], [const$ || (const$ = dart.constList([], dart.dynamic))]);
      let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent1, AppViewAndintToAppViewOfComparisonRangeEditorComponent()));
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let subscription_0 = this[_MaterialToggleComponent_3_5].onChecked.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_checkedChange_3_0)));
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 3 === nodeIndex) {
        return this[_MaterialToggleComponent_3_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (!(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.comparisonHeaderMsg == null)) {
          this[_MaterialToggleComponent_3_5].ariaLabel = src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.comparisonHeaderMsg;
          changed = true;
        }
      }
      let currVal_0 = !dart.test(_ctx.model.comparisonSupported);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialToggleComponent_3_5].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.comparisonEnabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialToggleComponent_3_5].checked = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_NgIf_4_9].ngIf = _ctx.model.comparisonEnabled;
      this[_appEl_4].detectChangesInNestedViews();
      this[_compView_3].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialToggleComponent_3_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_4].destroyNestedViews();
      this[_compView_3].destroy();
    }
    [_handle_checkedChange_3_0]($event) {
      this.ctx.comparisonEnabled = core.bool._check($event);
    }
  };
  (src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new = function(parentView, parentIndex) {
    this[_compView_3] = null;
    this[_MaterialToggleComponent_3_5] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("comparison-range-editor"));
    let t = src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType;
    t == null ? src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_datepicker/comparison_range_editor.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__material_datepicker__comparison_range_editor$46template.styles$ComparisonRangeEditorComponent) : t;
    this.setupComponentType(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType);
  }).prototype = src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0);
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_checkedChange_3_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__),
    [_compView_3]: dart.fieldType(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0),
    [_MaterialToggleComponent_3_5]: dart.fieldType(material_toggle__material_toggle.MaterialToggleComponent),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, {
    /*src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent0 = function(parentView, parentIndex) {
    return new src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template, {
    /*src__material_datepicker__comparison_range_editor$46template._ComparisonRangeEditorComponentNgFactory*/get _ComparisonRangeEditorComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfComparisonRangeEditorComponent()).new("comparison-range-editor", dart.fn(src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponentHost0, AppViewAndintToAppViewOfComparisonRangeEditorComponent())));
    }
  });
  dart.copyProperties(src__material_datepicker__comparison_range_editor$46template, {
    get ComparisonRangeEditorComponentNgFactory() {
      return src__material_datepicker__comparison_range_editor$46template._ComparisonRangeEditorComponentNgFactory;
    }
  });
  const _appEl_1 = Symbol('_appEl_1');
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1 = class _ViewComparisonRangeEditorComponent1 extends src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      _el_0[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent2, AppViewAndintToAppViewOfComparisonRangeEditorComponent()));
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.model.validComparisonOptions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
  };
  (src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType;
  }).prototype = src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1);
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent1 = function(parentView, parentIndex) {
    return new src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.new(parentView, parentIndex);
  };
  const _compView_0 = Symbol('_compView_0');
  const _MaterialSelectItemComponent_0_5 = Symbol('_MaterialSelectItemComponent_0_5');
  const _expr_2 = Symbol('_expr_2');
  const _text_1 = Symbol('_text_1');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2 = class _ViewComparisonRangeEditorComponent2 extends src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.createAttr(_el_0, "closeOnActivate", "false");
      this.addShimC(_el_0);
      this[_MaterialSelectItemComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_select__material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select__material_select_item.MaterialSelectItemComponent.new(_el_0, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex, null)), this[_compView_0].ref, null), VoidToMaterialSelectItemComponent())) : new material_select__material_select_item.MaterialSelectItemComponent.new(_el_0, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex, null)), this[_compView_0].ref, null);
      this[_text_1] = html.Text.new("");
      this[_compView_0].create(this[_MaterialSelectItemComponent_0_5], [JSArrayOfText().of([this[_text_1]])]);
      let subscription_0 = this[_MaterialSelectItemComponent_0_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([_el_0], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialSelectItemComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_option = src__runtime__optimizations.unsafeCast(material_datepicker__comparison_option.ComparisonOption, this.locals[$_get]("$implicit"));
      if (firstCheck) {
        this[_MaterialSelectItemComponent_0_5].closeOnActivate = "false";
      }
      let currVal_0 = dart.equals(_ctx.model.comparisonOption, local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_0_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialSelectItemComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(_ctx.comparisonOptionMsg(local_option));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_text_1][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
      this[_MaterialSelectItemComponent_0_5].ngOnDestroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_option = src__runtime__optimizations.unsafeCast(material_datepicker__comparison_option.ComparisonOption, this.locals[$_get]("$implicit"));
      this.ctx.model.comparisonOption = local_option;
    }
  };
  (src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialSelectItemComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_text_1] = null;
    src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType;
  }).prototype = src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2);
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__),
    [_compView_0]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_0_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_text_1]: dart.fieldType(html.Text)
  }));
  src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent2 = function(parentView, parentIndex) {
    return new src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template, {
    /*src__material_datepicker__comparison_range_editor$46template.styles$ComparisonRangeEditorComponentHost*/get styles$ComparisonRangeEditorComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _ComparisonRangeEditorComponent_0_5 = Symbol('_ComparisonRangeEditorComponent_0_5');
  src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0 = class _ViewComparisonRangeEditorComponentHost0 extends src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      this[_compView_0] = new src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ComparisonRangeEditorComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent, dart.wrapType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), dart.fn(() => new src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__utils__angular__scroll_host__scroll_host_interface.ScrollHost._check(this.injectorGet(dart.wrapType(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost), this.viewData.parentIndex, null))), VoidToComparisonRangeEditorComponent())) : new src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__utils__angular__scroll_host__scroll_host_interface.ScrollHost._check(this.injectorGet(dart.wrapType(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_ComparisonRangeEditorComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfComparisonRangeEditorComponent()).new(0, this, this.rootEl, this[_ComparisonRangeEditorComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
    }
  };
  (src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ComparisonRangeEditorComponent_0_5] = null;
    src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0);
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0),
    [_ComparisonRangeEditorComponent_0_5]: dart.fieldType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent)
  }));
  src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponentHost0 = function(parentView, parentIndex) {
    return new src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template, {
    /*src__material_datepicker__comparison_range_editor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_datepicker__comparison_range_editor$46template.initReflector = function() {
    if (dart.test(src__material_datepicker__comparison_range_editor$46template._visited)) {
      return;
    }
    src__material_datepicker__comparison_range_editor$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), src__material_datepicker__comparison_range_editor$46template.ComparisonRangeEditorComponentNgFactory);
    angular$46template.initReflector();
    material_datepicker__comparison_option$46template.initReflector();
    material_datepicker__date_range_input$46template.initReflector();
    material_datepicker__range$46template.initReflector();
    material_list__material_list$46template.initReflector();
    material_list__material_list_item$46template.initReflector();
    material_select__material_dropdown_select$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    material_toggle__material_toggle$46template.initReflector();
    model__date__date$46template.initReflector();
    src__material_datepicker__date_range_editor_model$46template.initReflector();
    utils__angular__scroll_host__angular_2$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim.ddc", {
    "package:angular_components/src/material_datepicker/date_range_editor_model.template.dart": src__material_datepicker__date_range_editor_model$46template,
    "package:angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim.dart": src__material_datepicker__comparison_range_editor$46scss$46css$46shim,
    "package:angular_components/src/material_datepicker/comparison_range_editor.template.dart": src__material_datepicker__comparison_range_editor$46template
  }, '{"version":3,"sourceRoot":"","sources":["date_range_editor_model.template.dart","comparison_range_editor.scss.css.shim.dart","comparison_range_editor.template.dart"],"names":[],"mappings":"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","file":"comparison_range_editor.scss.css.shim.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__date_range_editor_model$46template: src__material_datepicker__date_range_editor_model$46template,
    src__material_datepicker__comparison_range_editor$46scss$46css$46shim: src__material_datepicker__comparison_range_editor$46scss$46css$46shim,
    src__material_datepicker__comparison_range_editor$46template: src__material_datepicker__comparison_range_editor$46template
  };
});

//# sourceMappingURL=comparison_range_editor.scss.css.shim.ddc.js.map
