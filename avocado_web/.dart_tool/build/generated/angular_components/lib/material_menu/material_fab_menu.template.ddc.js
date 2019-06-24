define(['dart_sdk', 'packages/angular_components/material_menu/material_fab_menu.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/material_button/material_fab.template', 'packages/angular_components/material_button/material_fab', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_menu/material_fab_menu', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular_components/material_list/material_list_item', 'packages/angular_components/material_menu/material_menu.template', 'packages/angular_components/focus/focus', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/material_menu/menu_root', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_menu/menu_root.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/mixins/track_layout_changes.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/menu/menu.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, material_fab_menu$46scss$46css, view_type, change_detection, modules, tooltip_controller, disposer, module, material_fab, material_fab$, icon_tooltip, dom_popup_source, popup_hierarchy, reference, focus_interface, material_icon, material_icon$, material_fab_menu, material_popup, material_popup$, ng_zone, overlay_ref, dom_service, zindexer, alignment, deferred_content, deferred_content_aware, material_dropdown_base, material_list_item, material_list_item$, material_menu, focus, modal, menu_root, material_menu$, id_generator, has_disabled, angular, deferred_content$, focus$, alignment$, popup, menu_root$, material_tooltip, track_layout_changes, keyboard_handler_mixin, menu, observable, events, id_generator$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_menu__material_fab_menu$46scss$46css$46shim = material_fab_menu$46scss$46css.material_menu__material_fab_menu$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__errors = change_detection.src__di__errors;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const material_tooltip__module = module.material_tooltip__module;
  const material_button__material_fab$46template = material_fab.material_button__material_fab$46template;
  const material_button__material_fab = material_fab$.material_button__material_fab;
  const src__material_tooltip__tooltip = icon_tooltip.src__material_tooltip__tooltip;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const src__laminate__popup__popup_source_directive = popup_hierarchy.src__laminate__popup__popup_source_directive;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const material_menu__material_fab_menu = material_fab_menu.material_menu__material_fab_menu;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const content__deferred_content = deferred_content.content__deferred_content;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_list__material_list_item$46template = material_list_item.material_list__material_list_item$46template;
  const material_list__material_list_item = material_list_item$.material_list__material_list_item;
  const material_menu__menu_item_groups$46template = material_menu.material_menu__menu_item_groups$46template;
  const focus__focus = focus.focus__focus;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const material_menu__menu_root = menu_root.material_menu__menu_root;
  const material_menu__menu_item_groups = material_menu$.material_menu__menu_item_groups;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const angular$46template = angular.angular$46template;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const focus__focus$46template = focus$.focus__focus$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_menu__menu_root$46template = menu_root$.material_menu__menu_root$46template;
  const material_tooltip__material_tooltip$46template = material_tooltip.material_tooltip__material_tooltip$46template;
  const mixins__track_layout_changes$46template = track_layout_changes.mixins__track_layout_changes$46template;
  const model__a11y__keyboard_handler_mixin$46template = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin$46template;
  const model__menu__menu$46template = menu.model__menu__menu$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const utils__id_generator__id_generator$46template = id_generator$.utils__id_generator__id_generator$46template;
  const _root = Object.create(null);
  const material_menu__material_fab_menu$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let VoidToTooltipController = () => (VoidToTooltipController = dart.constFn(dart.fnType(src__material_tooltip__tooltip_controller.TooltipController, [])))();
  let VoidToMaterialTooltipDirective = () => (VoidToMaterialTooltipDirective = dart.constFn(dart.fnType(src__material_tooltip__tooltip.MaterialTooltipDirective, [])))();
  let VoidToPopupSourceDirective = () => (VoidToPopupSourceDirective = dart.constFn(dart.fnType(src__laminate__popup__popup_source_directive.PopupSourceDirective, [])))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let AppViewOfMaterialFabMenuComponent = () => (AppViewOfMaterialFabMenuComponent = dart.constFn(src__core__linker__app_view.AppView$(material_menu__material_fab_menu.MaterialFabMenuComponent)))();
  let AppViewAndintToAppViewOfMaterialFabMenuComponent = () => (AppViewAndintToAppViewOfMaterialFabMenuComponent = dart.constFn(dart.fnType(AppViewOfMaterialFabMenuComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialFabMenuComponent = () => (ComponentFactoryOfMaterialFabMenuComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_menu__material_fab_menu.MaterialFabMenuComponent)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let VoidToMaterialPopupComponent = () => (VoidToMaterialPopupComponent = dart.constFn(dart.fnType(material_popup__material_popup.MaterialPopupComponent, [])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let VoidToAutoFocusDirective = () => (VoidToAutoFocusDirective = dart.constFn(dart.fnType(focus__focus.AutoFocusDirective, [])))();
  let VoidToMenuItemGroupsComponent = () => (VoidToMenuItemGroupsComponent = dart.constFn(dart.fnType(material_menu__menu_item_groups.MenuItemGroupsComponent, [])))();
  let VoidToMaterialFabMenuComponent = () => (VoidToMaterialFabMenuComponent = dart.constFn(dart.fnType(material_menu__material_fab_menu.MaterialFabMenuComponent, [])))();
  let ComponentRefOfMaterialFabMenuComponent = () => (ComponentRefOfMaterialFabMenuComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_menu__material_fab_menu.MaterialFabMenuComponent)))();
  dart.defineLazy(material_menu__material_fab_menu$46template, {
    /*material_menu__material_fab_menu$46template.styles$MaterialFabMenuComponent*/get styles$MaterialFabMenuComponent() {
      return [material_menu__material_fab_menu$46scss$46css$46shim.styles];
    }
  });
  const _compView_1 = Symbol('_compView_1');
  const _appEl_1 = Symbol('_appEl_1');
  const _MaterialFabComponent_1_8 = Symbol('_MaterialFabComponent_1_8');
  const _MaterialTooltipDirective_1_9 = Symbol('_MaterialTooltipDirective_1_9');
  const _PopupSourceDirective_1_10 = Symbol('_PopupSourceDirective_1_10');
  const __TooltipController_1_11 = Symbol('__TooltipController_1_11');
  const _compView_3 = Symbol('_compView_3');
  const _MaterialIconComponent_3_5 = Symbol('_MaterialIconComponent_3_5');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _el_1 = Symbol('_el_1');
  const _TooltipController_1_11 = Symbol('_TooltipController_1_11');
  let const$;
  material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0 = class ViewMaterialFabMenuComponent0 extends src__core__linker__app_view.AppView$(material_menu__material_fab_menu.MaterialFabMenuComponent) {
    get [_TooltipController_1_11]() {
      if (this[__TooltipController_1_11] == null) {
        this[__TooltipController_1_11] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_tooltip__tooltip_controller.TooltipController, dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), dart.fn(() => material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.parentView.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null))), VoidToTooltipController())) : material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.parentView.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)));
      }
      return this[__TooltipController_1_11];
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new("\n");
      parentRenderNode[$append](_text_0);
      this[_compView_1] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      parentRenderNode[$append](this[_el_1]);
      this.createAttr(this[_el_1], "popupSource", "");
      this.createAttr(this[_el_1], "raised", "");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, this[_el_1]);
      this[_MaterialFabComponent_1_8] = new material_button__material_fab.MaterialFabComponent.new(html.HtmlElement._check(this[_el_1]), this[_compView_1].ref);
      this[_MaterialTooltipDirective_1_9] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_tooltip__tooltip.MaterialTooltipDirective, dart.wrapType(src__material_tooltip__tooltip.MaterialTooltipDirective), dart.fn(() => new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_appEl_1], html.HtmlElement._check(this[_el_1]), this[_appEl_1], this[_compView_1].ref, html.Window._check(this.parentView.injectorGet(dart.wrapType(html.Window), this.viewData.parentIndex))), VoidToMaterialTooltipDirective())) : new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_appEl_1], html.HtmlElement._check(this[_el_1]), this[_appEl_1], this[_compView_1].ref, html.Window._check(this.parentView.injectorGet(dart.wrapType(html.Window), this.viewData.parentIndex)));
      this[_PopupSourceDirective_1_10] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__popup__popup_source_directive.PopupSourceDirective, dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective), dart.fn(() => new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), html.HtmlElement._check(this[_el_1]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)), focus__focus_interface.Focusable._check(this.parentView.injectorGet(dart.wrapType(focus__focus_interface.Focusable), this.viewData.parentIndex, null)), null), VoidToPopupSourceDirective())) : new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), html.HtmlElement._check(this[_el_1]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)), focus__focus_interface.Focusable._check(this.parentView.injectorGet(dart.wrapType(focus__focus_interface.Focusable), this.viewData.parentIndex, null)), null);
      let _text_2 = html.Text.new("\n  ");
      this[_compView_3] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootEl;
      this.addShimC(_el_3);
      this[_MaterialIconComponent_3_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_3);
      this[_compView_3].create(this[_MaterialIconComponent_3_5], []);
      let _text_4 = html.Text.new("\n");
      this[_compView_1].create(this[_MaterialFabComponent_1_8], [JSArrayOfNode().of([_text_2, _el_3, _text_4])]);
      let _text_5 = html.Text.new("\n");
      parentRenderNode[$append](_text_5);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, null, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponent1, AppViewAndintToAppViewOfMaterialFabMenuComponent()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _text_7 = html.Text.new("\n");
      parentRenderNode[$append](_text_7);
      this[_el_1][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyDown')));
      this[_el_1][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
      let subscription_0 = this[_MaterialFabComponent_1_8].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'trigger')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), [subscription_0]);
      _rootEl[$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyDown')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_TooltipController_1_11];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialFabComponent_1_8].raised = true;
        changed = true;
      }
      let currVal_3 = !dart.test(_ctx.isFabEnabled);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialFabComponent_1_8].disabled = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialFabComponent_1_8].ngOnInit();
      }
      if (firstCheck) {
        if (!(_ctx.tooltipPositions == null)) {
          this[_MaterialTooltipDirective_1_9].positions = _ctx.tooltipPositions;
        }
      }
      let currVal_6 = _ctx.tooltip;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialTooltipDirective_1_9].text = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.hasTooltip;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_MaterialTooltipDirective_1_9].canShow = currVal_7;
        this[_expr_7] = currVal_7;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTooltipDirective_1_9].ngOnInit();
      }
      changed = false;
      let currVal_8 = _ctx.glyph;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MaterialIconComponent_3_5].icon = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_NgIf_6_9].ngIf = _ctx.hasMenu;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_0 = _ctx.isFabHidden;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateElemClass(this[_el_1], "invisible", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.ariaLabel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.setAttr(this[_el_1], "aria-label", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.naviId;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.setAttr(this[_el_1], "navi-id", currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      this[_compView_3].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialTooltipDirective_1_9].ngAfterViewInit();
          this[_PopupSourceDirective_1_10].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_compView_1].destroy();
      this[_compView_3].destroy();
      this[_MaterialTooltipDirective_1_9].ngOnDestroy();
      this[_PopupSourceDirective_1_10].ngOnDestroy();
    }
  };
  (material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_appEl_1] = null;
    this[_MaterialFabComponent_1_8] = null;
    this[_MaterialTooltipDirective_1_9] = null;
    this[_PopupSourceDirective_1_10] = null;
    this[__TooltipController_1_11] = null;
    this[_compView_3] = null;
    this[_MaterialIconComponent_3_5] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_el_1] = null;
    material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-fab-menu"));
    let t = material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0._renderType;
    t == null ? material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/material_fab_menu.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_menu__material_fab_menu$46template.styles$MaterialFabMenuComponent) : t;
    this.setupComponentType(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0._renderType);
  }).prototype = material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.prototype;
  dart.addTypeTests(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0);
  dart.setMethodSignature(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0, () => ({
    __proto__: dart.getMethods(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__material_fab_menu.MaterialFabMenuComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0, () => ({
    __proto__: dart.getGetters(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__),
    [_TooltipController_1_11]: dart.dynamic
  }));
  dart.setFieldSignature(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0, () => ({
    __proto__: dart.getFields(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__),
    [_compView_1]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialFabComponent_1_8]: dart.fieldType(material_button__material_fab.MaterialFabComponent),
    [_MaterialTooltipDirective_1_9]: dart.fieldType(src__material_tooltip__tooltip.MaterialTooltipDirective),
    [_PopupSourceDirective_1_10]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [__TooltipController_1_11]: dart.fieldType(dart.dynamic),
    [_compView_3]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_3_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.String),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0, {
    /*material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponent0 = function(parentView, parentIndex) {
    return new material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__material_fab_menu$46template, {
    /*material_menu__material_fab_menu$46template._MaterialFabMenuComponentNgFactory*/get _MaterialFabMenuComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialFabMenuComponent()).new("material-fab-menu", dart.fn(material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponentHost0, AppViewAndintToAppViewOfMaterialFabMenuComponent())));
    }
  });
  dart.copyProperties(material_menu__material_fab_menu$46template, {
    get MaterialFabMenuComponentNgFactory() {
      return material_menu__material_fab_menu$46template._MaterialFabMenuComponentNgFactory;
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _appEl_0 = Symbol('_appEl_0');
  const _MaterialPopupComponent_0_8 = Symbol('_MaterialPopupComponent_0_8');
  const __PopupRef_0_11 = Symbol('__PopupRef_0_11');
  const __PopupHierarchy_0_12 = Symbol('__PopupHierarchy_0_12');
  const _appEl_2 = Symbol('_appEl_2');
  const _DeferredContentDirective_2_9 = Symbol('_DeferredContentDirective_2_9');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _PopupRef_0_11 = Symbol('_PopupRef_0_11');
  const _PopupHierarchy_0_12 = Symbol('_PopupHierarchy_0_12');
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1 = class _ViewMaterialFabMenuComponent1 extends src__core__linker__app_view.AppView$(material_menu__material_fab_menu.MaterialFabMenuComponent) {
    get [_PopupRef_0_11]() {
      if (this[__PopupRef_0_11] == null) {
        this[__PopupRef_0_11] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupRef_0_11];
    }
    get [_PopupHierarchy_0_12]() {
      if (this[__PopupHierarchy_0_12] == null) {
        this[__PopupHierarchy_0_12] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_12];
    }
    build() {
      this[_compView_0] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.createAttr(_el_0, "autoDismiss", "");
      this.createAttr(_el_0, "enforceSpaceConstraints", "");
      this.addShimC(_el_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _el_0);
      this[_MaterialPopupComponent_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_popup__material_popup.MaterialPopupComponent, dart.wrapType(material_popup__material_popup.MaterialPopupComponent), dart.fn(() => new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_0].ref, this[_appEl_0], new src__core__linker__element_ref.ElementRef.new(_el_0)), VoidToMaterialPopupComponent())) : new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$2 || (const$2 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$3 || (const$3 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_0].ref, this[_appEl_0], new src__core__linker__element_ref.ElementRef.new(_el_0));
      let _text_1 = html.Text.new("\n  ");
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponent2, AppViewAndintToAppViewOfMaterialFabMenuComponent()));
      this[_DeferredContentDirective_2_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_2], _TemplateRef_2_8, this[_MaterialPopupComponent_0_8]);
      let _text_3 = html.Text.new("\n");
      this[_compView_0].create(this[_MaterialPopupComponent_0_8], [const$4 || (const$4 = dart.constList([], dart.dynamic)), JSArrayOfObject().of([_text_1, this[_appEl_2], _text_3]), const$5 || (const$5 = dart.constList([], dart.dynamic))]);
      let subscription_0 = this[_MaterialPopupComponent_0_8].onClose.listen(this.eventHandler0(dart.void, dart.bind(this.ctx, 'onPopupClosed')));
      let subscription_1 = this[_MaterialPopupComponent_0_8].onOpened.listen(this.eventHandler0(dart.void, dart.bind(this.ctx, 'onPopupOpened')));
      this.init([this[_appEl_0]], [subscription_0, subscription_1]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialPopupComponent_0_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupRef_0_11];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupHierarchy_0_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_source = src__runtime__optimizations.unsafeCast(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0, this.parentView)[_PopupSourceDirective_1_10];
      if (firstCheck) {
        this[_MaterialPopupComponent_0_8].autoDismiss = true;
        this[_MaterialPopupComponent_0_8].enforceSpaceConstraints = true;
        this[_MaterialPopupComponent_0_8].hasBox = false;
      }
      let currVal_2 = _ctx.preferredPopupPositions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = local_source;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialPopupComponent_0_8].source = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.trackLayoutChanges;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialPopupComponent_0_8].trackLayoutChanges = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.showPopup;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialPopupComponent_0_8].visible = currVal_5;
        this[_expr_5] = currVal_5;
      }
      if (firstCheck) {
        this[_DeferredContentDirective_2_9].preserveDimensions = true;
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialPopupComponent_0_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_compView_0].destroy();
      this[_DeferredContentDirective_2_9].ngOnDestroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
  };
  (material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupRef_0_11] = null;
    this[__PopupHierarchy_0_12] = null;
    this[_appEl_2] = null;
    this[_DeferredContentDirective_2_9] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0._renderType;
  }).prototype = material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.prototype;
  dart.addTypeTests(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1);
  dart.setMethodSignature(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1, () => ({
    __proto__: dart.getMethods(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__material_fab_menu.MaterialFabMenuComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1, () => ({
    __proto__: dart.getGetters(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__),
    [_PopupRef_0_11]: dart.dynamic,
    [_PopupHierarchy_0_12]: dart.dynamic
  }));
  dart.setFieldSignature(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1, () => ({
    __proto__: dart.getFields(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__),
    [_compView_0]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_0_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupRef_0_11]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_0_12]: dart.fieldType(dart.dynamic),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DeferredContentDirective_2_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool)
  }));
  material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponent1 = function(parentView, parentIndex) {
    return new material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.new(parentView, parentIndex);
  };
  const _compView_4 = Symbol('_compView_4');
  const _MaterialListItemComponent_4_5 = Symbol('_MaterialListItemComponent_4_5');
  const _compView_6 = Symbol('_compView_6');
  const _MaterialIconComponent_6_5 = Symbol('_MaterialIconComponent_6_5');
  const _compView_9 = Symbol('_compView_9');
  const _AutoFocusDirective_9_5 = Symbol('_AutoFocusDirective_9_5');
  const _MenuRootDirective_9_6 = Symbol('_MenuRootDirective_9_6');
  const _MenuRoot_9_7 = Symbol('_MenuRoot_9_7');
  const _MenuItemGroupsComponent_9_8 = Symbol('_MenuItemGroupsComponent_9_8');
  const _expr_9 = Symbol('_expr_9');
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _el_9 = Symbol('_el_9');
  material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2 = class _ViewMaterialFabMenuComponent2 extends src__core__linker__app_view.AppView$(material_menu__material_fab_menu.MaterialFabMenuComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "menu-content";
      this.createAttr(this[_el_0], "elevation", "2");
      this.addShimC(this[_el_0]);
      let _text_1 = html.Text.new("\n    ");
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_2].className = "content-wrapper";
      this.addShimC(this[_el_2]);
      let _text_3 = html.Text.new("\n      ");
      this[_el_2][$append](_text_3);
      this[_compView_4] = new material_list__material_list_item$46template.ViewMaterialListItemComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      this[_el_2][$append](_el_4);
      _el_4.className = src__core__linker__app_view_utils.interpolate2("", "close-menu", " ", material_list__material_list_item.MaterialListItemComponent.hostClass, "");
      this.addShimC(_el_4);
      this[_MaterialListItemComponent_4_5] = new material_list__material_list_item.MaterialListItemComponent.new(_el_4, src__runtime__optimizations.unsafeCast(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1, this.parentView)[_MaterialPopupComponent_0_8], null, null);
      let _text_5 = html.Text.new("\n        ");
      this[_compView_6] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootEl;
      _el_6.className = "close-icon material-list-item-primary";
      this.createAttr(_el_6, "icon", "close");
      this.addShimC(_el_6);
      this[_MaterialIconComponent_6_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_6);
      this[_compView_6].create(this[_MaterialIconComponent_6_5], []);
      let _text_7 = html.Text.new("\n      ");
      this[_compView_4].create(this[_MaterialListItemComponent_4_5], [JSArrayOfNode().of([_text_5, _el_6, _text_7])]);
      let _text_8 = html.Text.new("\n      ");
      this[_el_2][$append](_text_8);
      this[_compView_9] = new material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 9);
      this[_el_9] = this[_compView_9].rootEl;
      this[_el_2][$append](this[_el_9]);
      this.createAttr(this[_el_9], "autoFocus", "");
      this[_el_9].className = "menu-groups";
      this.createAttr(this[_el_9], "menu-root", "");
      this.createAttr(this[_el_9], "preventCloseOnPressLeft", "");
      this.addShimC(html.HtmlElement._check(this[_el_9]));
      this[_AutoFocusDirective_9_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__focus.AutoFocusDirective, dart.wrapType(focus__focus.AutoFocusDirective), dart.fn(() => new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_9]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(src__runtime__optimizations.unsafeCast(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1, this.parentView)[_PopupRef_0_11])), VoidToAutoFocusDirective())) : new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_9]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(src__runtime__optimizations.unsafeCast(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1, this.parentView)[_PopupRef_0_11]));
      this[_MenuRootDirective_9_6] = new material_menu__menu_root.MenuRootDirective.new(src__runtime__optimizations.unsafeCast(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1, this.parentView)[_MaterialPopupComponent_0_8]);
      this[_MenuRoot_9_7] = this[_MenuRootDirective_9_6];
      this[_MenuItemGroupsComponent_9_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_menu__menu_item_groups.MenuItemGroupsComponent, dart.wrapType(material_menu__menu_item_groups.MenuItemGroupsComponent), dart.fn(() => material_menu__menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRoot_9_7], this[_compView_9].ref, src__runtime__optimizations.unsafeCast(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1, this.parentView)[_MaterialPopupComponent_0_8], utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.viewData.parentIndex, null))), VoidToMenuItemGroupsComponent())) : material_menu__menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRoot_9_7], this[_compView_9].ref, src__runtime__optimizations.unsafeCast(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1, this.parentView)[_MaterialPopupComponent_0_8], utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.viewData.parentIndex, null)));
      let _text_10 = html.Text.new("\n      ");
      this[_compView_9].create(this[_MenuItemGroupsComponent_9_8], []);
      let _text_11 = html.Text.new("\n    ");
      this[_el_2][$append](_text_11);
      let _text_12 = html.Text.new("\n  ");
      this[_el_0][$append](_text_12);
      let subscription_0 = this[_MaterialListItemComponent_4_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'hideMenu')));
      this.init([this[_el_0]], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_MaterialListItemComponent_4_5];
      }
      if (token === dart.wrapType(material_menu__menu_root.MenuRoot) && 9 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 10) {
        return this[_MenuRoot_9_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialListItemComponent_4_5].closeOnActivate = false;
        changed = true;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialListItemComponent_4_5].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_6_5].icon = "close";
        changed = true;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_AutoFocusDirective_9_5].autoFocus = true;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_9_5].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MenuItemGroupsComponent_9_8].preventCloseOnPressLeft = "";
        changed = true;
        if (!(_ctx.activeModel == null)) {
          this[_MenuItemGroupsComponent_9_8].activeModel = _ctx.activeModel;
          changed = true;
        }
      }
      let currVal_9 = _ctx.menuItem.subMenu;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_MenuItemGroupsComponent_9_8].menu = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      if (changed) {
        this[_compView_9].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MenuItemGroupsComponent_9_8].ngOnInit();
      }
      let currVal_0 = _ctx.menuVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(this[_el_0], "visible", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.closing;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.updateClass(this[_el_0], "closing", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.hasIcons;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.updateClass(this[_el_0], "has-icons", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.menuVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this.updateClass(this[_el_2], "visible", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.closing;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this.updateClass(this[_el_2], "closing", currVal_4);
        this[_expr_4] = currVal_4;
      }
      this[_compView_4].detectHostChanges(firstCheck);
      let currVal_7 = _ctx.activeModel.activeId;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this.setAttr(this[_el_9], "aria-activedescendant", currVal_7);
        this[_expr_7] = currVal_7;
      }
      this[_compView_4].detectChanges();
      this[_compView_6].detectChanges();
      this[_compView_9].detectChanges();
    }
    destroyInternal() {
      this[_compView_4].destroy();
      this[_compView_6].destroy();
      this[_compView_9].destroy();
      this[_MaterialListItemComponent_4_5].ngOnDestroy();
      this[_AutoFocusDirective_9_5].ngOnDestroy();
      this[_MenuItemGroupsComponent_9_8].ngOnDestroy();
    }
  };
  (material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2.new = function(parentView, parentIndex) {
    this[_compView_4] = null;
    this[_MaterialListItemComponent_4_5] = null;
    this[_compView_6] = null;
    this[_MaterialIconComponent_6_5] = null;
    this[_compView_9] = null;
    this[_AutoFocusDirective_9_5] = null;
    this[_MenuRootDirective_9_6] = null;
    this[_MenuRoot_9_7] = null;
    this[_MenuItemGroupsComponent_9_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_7] = null;
    this[_expr_9] = null;
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_9] = null;
    material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0._renderType;
  }).prototype = material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2.prototype;
  dart.addTypeTests(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2);
  dart.setMethodSignature(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2, () => ({
    __proto__: dart.getMethods(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__material_fab_menu.MaterialFabMenuComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2, () => ({
    __proto__: dart.getFields(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2.__proto__),
    [_compView_4]: dart.fieldType(material_list__material_list_item$46template.ViewMaterialListItemComponent0),
    [_MaterialListItemComponent_4_5]: dart.fieldType(material_list__material_list_item.MaterialListItemComponent),
    [_compView_6]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_6_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_9]: dart.fieldType(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0),
    [_AutoFocusDirective_9_5]: dart.fieldType(focus__focus.AutoFocusDirective),
    [_MenuRootDirective_9_6]: dart.fieldType(material_menu__menu_root.MenuRootDirective),
    [_MenuRoot_9_7]: dart.fieldType(material_menu__menu_root.MenuRootDirective),
    [_MenuItemGroupsComponent_9_8]: dart.fieldType(material_menu__menu_item_groups.MenuItemGroupsComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_9]: dart.fieldType(html.Element)
  }));
  material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponent2 = function(parentView, parentIndex) {
    return new material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__material_fab_menu$46template, {
    /*material_menu__material_fab_menu$46template.styles$MaterialFabMenuComponentHost*/get styles$MaterialFabMenuComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialFabMenuComponent_0_5 = Symbol('_MaterialFabMenuComponent_0_5');
  material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0 = class _ViewMaterialFabMenuComponentHost0 extends src__core__linker__app_view.AppView$(material_menu__material_fab_menu.MaterialFabMenuComponent) {
    build() {
      this[_compView_0] = new material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialFabMenuComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_menu__material_fab_menu.MaterialFabMenuComponent, dart.wrapType(material_menu__material_fab_menu.MaterialFabMenuComponent), dart.fn(() => material_menu__material_fab_menu.MaterialFabMenuComponent.new(this[_compView_0].ref, utils__id_generator__id_generator.IdGenerator._check(this.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex, null))), VoidToMaterialFabMenuComponent())) : material_menu__material_fab_menu.MaterialFabMenuComponent.new(this[_compView_0].ref, utils__id_generator__id_generator.IdGenerator._check(this.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialFabMenuComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialFabMenuComponent()).new(0, this, this.rootEl, this[_MaterialFabMenuComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
      this[_MaterialFabMenuComponent_0_5].ngOnDestroy();
    }
  };
  (material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialFabMenuComponent_0_5] = null;
    material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.prototype;
  dart.addTypeTests(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0);
  dart.setMethodSignature(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0, () => ({
    __proto__: dart.getMethods(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__material_fab_menu.MaterialFabMenuComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0, () => ({
    __proto__: dart.getFields(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0),
    [_MaterialFabMenuComponent_0_5]: dart.fieldType(material_menu__material_fab_menu.MaterialFabMenuComponent)
  }));
  material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponentHost0 = function(parentView, parentIndex) {
    return new material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__material_fab_menu$46template, {
    /*material_menu__material_fab_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__material_fab_menu$46template.initReflector = function() {
    if (dart.test(material_menu__material_fab_menu$46template._visited)) {
      return;
    }
    material_menu__material_fab_menu$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_menu__material_fab_menu.MaterialFabMenuComponent), material_menu__material_fab_menu$46template.MaterialFabMenuComponentNgFactory);
    material_menu__menu_item_groups$46template.initReflector();
    angular$46template.initReflector();
    content__deferred_content$46template.initReflector();
    focus__focus$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_button__material_fab$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_list__material_list_item$46template.initReflector();
    material_menu__menu_root$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_tooltip__material_tooltip$46template.initReflector();
    mixins__track_layout_changes$46template.initReflector();
    model__a11y__keyboard_handler_mixin$46template.initReflector();
    model__menu__menu$46template.initReflector();
    model__observable__observable$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_menu/material_fab_menu.template.ddc", {
    "package:angular_components/material_menu/material_fab_menu.template.dart": material_menu__material_fab_menu$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_fab_menu.template.dart"],"names":[],"mappings":"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","file":"material_fab_menu.template.ddc.js"}');
  // Exports:
  return {
    material_menu__material_fab_menu$46template: material_menu__material_fab_menu$46template
  };
});

//# sourceMappingURL=material_fab_menu.template.ddc.js.map
