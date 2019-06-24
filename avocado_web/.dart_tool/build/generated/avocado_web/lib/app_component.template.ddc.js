define(['dart_sdk', 'packages/avocado_web/app_component.scss.css.shim', 'packages/angular_components/app_layout/layout.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/app_layout/material_persistent_drawer', 'packages/angular_components/app_layout/material_persistent_drawer.template', 'packages/avocado_web/app_component', 'packages/angular_components/content/deferred_content', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_router/src/constants', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_router/angular_router.template', 'packages/avocado_web/src/pipes/index', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/avocado_web/app_routes', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular_components/material_list/material_list_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/avocado_common/common', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/material_toggle/material_toggle.template', 'packages/avocado_web/app_routes.template', 'packages/angular/di.template', 'packages/angular/core.template', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_button/material_fab.template', 'packages/angular_components/material_button/material_fab', 'packages/avocado_web/src/components/clients/client_component', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/angular_components.template'], function(dart_sdk, app_component$46scss$46css, layout$46scss$46css, view_type, change_detection, modules, material_persistent_drawer, material_persistent_drawer$, app_component, deferred_content, material_button, dark_theme, material_button$, material_icon, material_icon$, constants, router_outlet_directive, angular_router, index, deferred_content_aware, button_decorator, has_disabled, app_routes, material_list, material_list$, material_list_item, material_list_item$, material_dropdown_base, common, angular, deferred_content$, material_toggle, app_routes$, di, core, material_input, deferred_validator, directives, material_input$, material_input_default_value_accessor, material_fab, material_fab$, client_component, reference, focus_interface, base_material_input, material_checkbox, material_checkbox$, angular_components) {
  'use strict';
  const core$ = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_component$46scss$46css$46shim = app_component$46scss$46css.app_component$46scss$46css$46shim;
  const app_layout__layout$46scss$46css$46shim = layout$46scss$46css.app_layout__layout$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__common__pipes__async_pipe = modules.src__common__pipes__async_pipe;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const app_layout__material_persistent_drawer = material_persistent_drawer.app_layout__material_persistent_drawer;
  const app_layout__material_persistent_drawer$46template = material_persistent_drawer$.app_layout__material_persistent_drawer$46template;
  const app_component$ = app_component.app_component;
  const content__deferred_content = deferred_content.content__deferred_content;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const src__directives__router_link_directive = constants.src__directives__router_link_directive;
  const src__directives__router_link_active_directive = constants.src__directives__router_link_active_directive;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__location__location = router_outlet_directive.src__location__location;
  const src__directives__router_outlet_directive = router_outlet_directive.src__directives__router_outlet_directive;
  const src__router__router_outlet_token = router_outlet_directive.src__router__router_outlet_token;
  const src__router_hook = router_outlet_directive.src__router_hook;
  const src__directives__router_link_directive$46template = angular_router.src__directives__router_link_directive$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__pipes__isnull = index.src__pipes__isnull;
  const src__todo_list__todo_list_service = index.src__todo_list__todo_list_service;
  const src__todo_list__todo_list_component = index.src__todo_list__todo_list_component;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const app_routes$0 = app_routes.app_routes;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const material_list__material_list = material_list$.material_list__material_list;
  const material_list__material_list_item$46template = material_list_item.material_list__material_list_item$46template;
  const material_list__material_list_item = material_list_item$.material_list__material_list_item;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__services__store = common.src__services__store;
  const angular$46template = angular.angular$46template;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const material_toggle__material_toggle$46template = material_toggle.material_toggle__material_toggle$46template;
  const app_routes$46template = app_routes$.app_routes$46template;
  const di$46template = di.di$46template;
  const core$46template = core.core$46template;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const material_input__material_input = material_input$.material_input__material_input;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_button__material_fab$46template = material_fab.material_button__material_fab$46template;
  const material_button__material_fab = material_fab$.material_button__material_fab;
  const src__components__feed__feed_component$46template = client_component.src__components__feed__feed_component$46template;
  const src__components__feed__feed_component = client_component.src__components__feed__feed_component;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const material_checkbox__material_checkbox$46template = material_checkbox.material_checkbox__material_checkbox$46template;
  const material_checkbox__material_checkbox = material_checkbox$.material_checkbox__material_checkbox;
  const angular_components$46template = angular_components.angular_components$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const src__pipes__isnull$46template = Object.create(_root);
  const src__pipes__index$46template = Object.create(_root);
  const src__todo_list__todo_list_service$46template = Object.create(_root);
  const src__todo_list__todo_list_component$46css$46shim = Object.create(_root);
  const src__todo_list__todo_list_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core$.String, dart.dynamic)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(theme__dark_theme.AcxDarkTheme, [])))();
  let JSArrayOfHtmlElement = () => (JSArrayOfHtmlElement = dart.constFn(_interceptors.JSArray$(html.HtmlElement)))();
  let VoidToRouterLink = () => (VoidToRouterLink = dart.constFn(dart.fnType(src__directives__router_link_directive.RouterLink, [])))();
  let VoidToRouterOutlet = () => (VoidToRouterOutlet = dart.constFn(dart.fnType(src__directives__router_outlet_directive.RouterOutlet, [])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core$.bool, [dart.dynamic])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  let VoidToMaterialListItemComponent = () => (VoidToMaterialListItemComponent = dart.constFn(dart.fnType(material_list__material_list_item.MaterialListItemComponent, [])))();
  let VoidToRouterLinkActive = () => (VoidToRouterLinkActive = dart.constFn(dart.fnType(src__directives__router_link_active_directive.RouterLinkActive, [])))();
  let JSArrayOfRouterLink = () => (JSArrayOfRouterLink = dart.constFn(_interceptors.JSArray$(src__directives__router_link_directive.RouterLink)))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let VoidToAppComponent = () => (VoidToAppComponent = dart.constFn(dart.fnType(app_component$.AppComponent, [])))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let VoidToTodoListService = () => (VoidToTodoListService = dart.constFn(dart.fnType(src__todo_list__todo_list_service.TodoListService, [])))();
  let AppViewOfTodoListComponent = () => (AppViewOfTodoListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__todo_list__todo_list_component.TodoListComponent)))();
  let AppViewAndintToAppViewOfTodoListComponent = () => (AppViewAndintToAppViewOfTodoListComponent = dart.constFn(dart.fnType(AppViewOfTodoListComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let VoidToFeedComponent = () => (VoidToFeedComponent = dart.constFn(dart.fnType(src__components__feed__feed_component.FeedComponent, [])))();
  let ComponentFactoryOfTodoListComponent = () => (ComponentFactoryOfTodoListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__todo_list__todo_list_component.TodoListComponent)))();
  let ComponentRefOfTodoListComponent = () => (ComponentRefOfTodoListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__todo_list__todo_list_component.TodoListComponent)))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return [app_component$46scss$46css$46shim.styles, app_layout__layout$46scss$46css$46shim.styles];
    }
  });
  const _MaterialPersistentDrawerDirective_0_5 = Symbol('_MaterialPersistentDrawerDirective_0_5');
  const _appEl_1 = Symbol('_appEl_1');
  const _DeferredContentDirective_1_9 = Symbol('_DeferredContentDirective_1_9');
  const _compView_5 = Symbol('_compView_5');
  const _AcxDarkTheme_5_5 = Symbol('_AcxDarkTheme_5_5');
  const _MaterialButtonComponent_5_6 = Symbol('_MaterialButtonComponent_5_6');
  const _compView_6 = Symbol('_compView_6');
  const _MaterialIconComponent_6_5 = Symbol('_MaterialIconComponent_6_5');
  const _compView_11 = Symbol('_compView_11');
  const _AcxDarkTheme_11_5 = Symbol('_AcxDarkTheme_11_5');
  const _MaterialButtonComponent_11_6 = Symbol('_MaterialButtonComponent_11_6');
  const _RouterLink_11_7 = Symbol('_RouterLink_11_7');
  const _compView_12 = Symbol('_compView_12');
  const _MaterialIconComponent_12_5 = Symbol('_MaterialIconComponent_12_5');
  const _appEl_14 = Symbol('_appEl_14');
  const _NgIf_14_9 = Symbol('_NgIf_14_9');
  const _appEl_15 = Symbol('_appEl_15');
  const _NgIf_15_9 = Symbol('_NgIf_15_9');
  const _appEl_17 = Symbol('_appEl_17');
  const _RouterOutlet_17_8 = Symbol('_RouterOutlet_17_8');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_4 = Symbol('_expr_4');
  const _pipe_async_0 = Symbol('_pipe_async_0');
  const _pipe_notnull_1 = Symbol('_pipe_notnull_1');
  const _pipe_notnull_1_0 = Symbol('_pipe_notnull_1_0');
  const _pipe_async_2 = Symbol('_pipe_async_2');
  const _pipe_isnull_3 = Symbol('_pipe_isnull_3');
  const _pipe_isnull_3_0 = Symbol('_pipe_isnull_3_0');
  const _el_0 = Symbol('_el_0');
  const _el_11 = Symbol('_el_11');
  let const$;
  let const$0;
  let const$1;
  let const$2;
  const _handle_trigger_5_0 = Symbol('_handle_trigger_5_0');
  let const$3;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, "material-drawer", parentRenderNode);
      this.createAttr(this[_el_0], "persistent", "");
      this.addShimE(this[_el_0]);
      this[_MaterialPersistentDrawerDirective_0_5] = new app_layout__material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd.new(new app_layout__material_persistent_drawer.MaterialPersistentDrawerDirective.new());
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(app_component$46template.viewFactory_AppComponent1, AppViewAndintToAppViewOfAppComponent()));
      this[_DeferredContentDirective_1_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_1], _TemplateRef_1_8, this[_MaterialPersistentDrawerDirective_0_5].instance);
      let _el_2 = src__core__linker__app_view.createAndAppend(doc, "material-content", parentRenderNode);
      _el_2.className = "main-area";
      this.addShimE(_el_2);
      let _el_3 = src__core__linker__app_view.createAndAppend(doc, "header", _el_2);
      _el_3.className = "material-dialog-title shadow";
      this.createAttr(_el_3, "style", "flex:none");
      this.addShimE(_el_3);
      let _el_4 = src__core__linker__app_view.createDivAndAppend(doc, _el_3);
      _el_4.className = "material-header-row";
      this.addShimC(_el_4);
      this[_compView_5] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootEl;
      _el_4[$append](_el_5);
      _el_5.className = "material-drawer-button";
      this.createAttr(_el_5, "icon", "");
      this.addShimC(_el_5);
      this[_AcxDarkTheme_5_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.injectorGet(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_5_6] = new material_button__material_button.MaterialButtonComponent.new(_el_5, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_5_5]), this[_compView_5].ref, null);
      this[_compView_6] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootEl;
      this.createAttr(_el_6, "icon", "menu");
      this.addShimC(_el_6);
      this[_MaterialIconComponent_6_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_6);
      this[_compView_6].create(this[_MaterialIconComponent_6_5], []);
      this[_compView_5].create(this[_MaterialButtonComponent_5_6], [JSArrayOfHtmlElement().of([_el_6])]);
      let _el_7 = src__core__linker__app_view.createSpanAndAppend(doc, _el_4);
      _el_7.className = "material-header-title";
      this.addShimE(_el_7);
      let _text_8 = html.Text.new("Avocado Clinic");
      _el_7[$append](_text_8);
      let _el_9 = src__core__linker__app_view.createDivAndAppend(doc, _el_4);
      _el_9.className = "material-spacer";
      this.addShimC(_el_9);
      let _el_10 = src__core__linker__app_view.createAndAppend(doc, "nav", _el_4);
      _el_10.className = "material-navigation";
      this.addShimE(_el_10);
      this[_compView_11] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 11);
      this[_el_11] = this[_compView_11].rootEl;
      _el_10[$append](this[_el_11]);
      this[_el_11].className = "material-drawer-button";
      this.createAttr(this[_el_11], "icon", "");
      this.createAttr(this[_el_11], "materialTooltip", "Notifications");
      this.addShimC(html.HtmlElement._check(this[_el_11]));
      this[_AcxDarkTheme_11_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.injectorGet(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_11_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_11]), theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_11_5]), this[_compView_11].ref, null);
      this[_RouterLink_11_7] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_directive.RouterLink, dart.wrapType(src__directives__router_link_directive.RouterLink), dart.fn(() => new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_11]), VoidToRouterLink())) : new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_11]));
      this[_compView_12] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 12);
      let _el_12 = this[_compView_12].rootEl;
      this.createAttr(_el_12, "icon", "notifications");
      this.addShimC(_el_12);
      this[_MaterialIconComponent_12_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_12);
      this[_compView_12].create(this[_MaterialIconComponent_12_5], []);
      this[_compView_11].create(this[_MaterialButtonComponent_11_6], [JSArrayOfHtmlElement().of([_el_12])]);
      let _el_13 = src__core__linker__app_view.createAndAppend(doc, "nav", _el_4);
      _el_13.className = "material-navigation";
      this.addShimE(_el_13);
      let _anchor_14 = src__core__linker__app_view.createViewContainerAnchor();
      _el_13[$append](_anchor_14);
      this[_appEl_14] = new src__core__linker__view_container.ViewContainer.new(14, 13, this, _anchor_14);
      let _TemplateRef_14_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_14], dart.fn(app_component$46template.viewFactory_AppComponent2, AppViewAndintToAppViewOfAppComponent()));
      this[_NgIf_14_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_14], _TemplateRef_14_8);
      let _anchor_15 = src__core__linker__app_view.createViewContainerAnchor();
      _el_13[$append](_anchor_15);
      this[_appEl_15] = new src__core__linker__view_container.ViewContainer.new(15, 13, this, _anchor_15);
      let _TemplateRef_15_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_15], dart.fn(app_component$46template.viewFactory_AppComponent3, AppViewAndintToAppViewOfAppComponent()));
      this[_NgIf_15_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_15], _TemplateRef_15_8);
      let _el_16 = src__core__linker__app_view.createDivAndAppend(doc, _el_2);
      _el_16.className = "content-area";
      this.addShimC(_el_16);
      let _el_17 = src__core__linker__app_view.createAndAppend(doc, "router-outlet", _el_16);
      this.addShimE(_el_17);
      this[_appEl_17] = new src__core__linker__view_container.ViewContainer.new(17, 16, this, _el_17);
      this[_RouterOutlet_17_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_outlet_directive.RouterOutlet, dart.wrapType(src__directives__router_outlet_directive.RouterOutlet), dart.fn(() => new src__directives__router_outlet_directive.RouterOutlet.new(src__router__router_outlet_token.RouterOutletToken._check(this.parentView.injectorGet(dart.wrapType(src__router__router_outlet_token.RouterOutletToken), this.viewData.parentIndex, null)), this[_appEl_17], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__router_hook.RouterHook._check(this.parentView.injectorGet(dart.wrapType(src__router_hook.RouterHook), this.viewData.parentIndex, null))), VoidToRouterOutlet())) : new src__directives__router_outlet_directive.RouterOutlet.new(src__router__router_outlet_token.RouterOutletToken._check(this.parentView.injectorGet(dart.wrapType(src__router__router_outlet_token.RouterOutletToken), this.viewData.parentIndex, null)), this[_appEl_17], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__router_hook.RouterHook._check(this.parentView.injectorGet(dart.wrapType(src__router_hook.RouterHook), this.viewData.parentIndex, null)));
      let subscription_0 = this[_MaterialButtonComponent_5_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_5_0)));
      this[_el_11][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_11_7].instance, 'onClick')));
      this[_pipe_async_0] = new src__common__pipes__async_pipe.AsyncPipe.new(this.ref);
      this[_pipe_notnull_1] = new src__pipes__isnull.NotNull.new();
      this[_pipe_notnull_1_0] = src__core__linker__app_view_utils.pureProxy1(core$.bool, dart.dynamic, dart.bind(this[_pipe_notnull_1], 'transform'));
      this[_pipe_async_2] = new src__common__pipes__async_pipe.AsyncPipe.new(this.ref);
      this[_pipe_isnull_3] = new src__pipes__isnull.IsNull.new();
      this[_pipe_isnull_3_0] = src__core__linker__app_view_utils.pureProxy1(core$.bool, dart.dynamic, dart.bind(this[_pipe_isnull_3], 'transform'));
      this.init(const$3 || (const$3 = dart.constList([], dart.dynamic)), [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(app_layout__material_persistent_drawer.MaterialPersistentDrawerDirective) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialPersistentDrawerDirective_0_5].instance;
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_AcxDarkTheme_5_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_MaterialButtonComponent_5_6];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 11 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 12) {
        return this[_AcxDarkTheme_11_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 11 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 12) {
        return this[_MaterialButtonComponent_11_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialPersistentDrawerDirective_0_5].instance.ngOnInit();
      }
      if (firstCheck) {
        this[_DeferredContentDirective_1_9].preserveDimensions = true;
      }
      changed = false;
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_5_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_6_5].icon = "menu";
        changed = true;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_11].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_11_6].ngOnInit();
      }
      let currVal_4 = app_routes$0.RoutePaths.notifications.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_RouterLink_11_7].instance.routerLink = currVal_4;
        this[_expr_4] = currVal_4;
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_12_5].icon = "notifications";
        changed = true;
      }
      if (changed) {
        this[_compView_12].markAsCheckOnce();
      }
      this[_NgIf_14_9].ngIf = this[_pipe_notnull_1_0](this[_pipe_async_0].transform(_ctx.auth.profile));
      this[_NgIf_15_9].ngIf = this[_pipe_isnull_3_0](this[_pipe_async_2].transform(_ctx.auth.profile));
      if (firstCheck) {
        if (!(app_routes$0.Routes.all == null)) {
          this[_RouterOutlet_17_8].routes = app_routes$0.Routes.all;
        }
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_RouterOutlet_17_8].ngOnInit();
      }
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_14].detectChangesInNestedViews();
      this[_appEl_15].detectChangesInNestedViews();
      this[_appEl_17].detectChangesInNestedViews();
      let currVal_0 = _ctx.customWidth;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateElemClass(this[_el_0], "custom-width", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = dart.test(_ctx.end) ? "" : null;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.setAttr(this[_el_0], "end", currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      this[_MaterialPersistentDrawerDirective_0_5].detectHostChanges(this, this[_el_0]);
      this[_compView_5].detectHostChanges(firstCheck);
      this[_compView_11].detectHostChanges(firstCheck);
      this[_RouterLink_11_7].detectHostChanges(this[_compView_11], this[_el_11]);
      this[_compView_5].detectChanges();
      this[_compView_6].detectChanges();
      this[_compView_11].detectChanges();
      this[_compView_12].detectChanges();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_14].destroyNestedViews();
      this[_appEl_15].destroyNestedViews();
      this[_appEl_17].destroyNestedViews();
      this[_compView_5].destroy();
      this[_compView_6].destroy();
      this[_compView_11].destroy();
      this[_compView_12].destroy();
      this[_DeferredContentDirective_1_9].ngOnDestroy();
      this[_RouterLink_11_7].instance.ngOnDestroy();
      this[_RouterOutlet_17_8].ngOnDestroy();
      this[_pipe_async_0].ngOnDestroy();
      this[_pipe_async_2].ngOnDestroy();
    }
    [_handle_trigger_5_0]($event) {
      let local_drawer = this[_MaterialPersistentDrawerDirective_0_5].instance;
      local_drawer.toggle();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_MaterialPersistentDrawerDirective_0_5] = null;
    this[_appEl_1] = null;
    this[_DeferredContentDirective_1_9] = null;
    this[_compView_5] = null;
    this[_AcxDarkTheme_5_5] = null;
    this[_MaterialButtonComponent_5_6] = null;
    this[_compView_6] = null;
    this[_MaterialIconComponent_6_5] = null;
    this[_compView_11] = null;
    this[_AcxDarkTheme_11_5] = null;
    this[_MaterialButtonComponent_11_6] = null;
    this[_RouterLink_11_7] = null;
    this[_compView_12] = null;
    this[_MaterialIconComponent_12_5] = null;
    this[_appEl_14] = null;
    this[_NgIf_14_9] = null;
    this[_appEl_15] = null;
    this[_NgIf_15_9] = null;
    this[_appEl_17] = null;
    this[_RouterOutlet_17_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    this[_pipe_async_0] = null;
    this[_pipe_notnull_1] = null;
    this[_pipe_notnull_1_0] = null;
    this[_pipe_async_2] = null;
    this[_pipe_isnull_3] = null;
    this[_pipe_isnull_3_0] = null;
    this[_el_0] = null;
    this[_el_11] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-app"));
    let t = app_component$46template.ViewAppComponent0._renderType;
    t == null ? app_component$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:avocado_web/lib/app_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, app_component$46template.styles$AppComponent) : t;
    this.setupComponentType(app_component$46template.ViewAppComponent0._renderType);
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_5_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_MaterialPersistentDrawerDirective_0_5]: dart.fieldType(app_layout__material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DeferredContentDirective_1_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_compView_5]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_5_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_5_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_6]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_6_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_11]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_11_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_11_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_RouterLink_11_7]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_compView_12]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_12_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_appEl_14]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_14_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_15]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_15_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_17]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_RouterOutlet_17_8]: dart.fieldType(src__directives__router_outlet_directive.RouterOutlet),
    [_expr_0]: dart.fieldType(core$.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(core$.String),
    [_pipe_async_0]: dart.fieldType(src__common__pipes__async_pipe.AsyncPipe),
    [_pipe_notnull_1]: dart.fieldType(src__pipes__isnull.NotNull),
    [_pipe_notnull_1_0]: dart.fieldType(dynamicTobool()),
    [_pipe_async_2]: dart.fieldType(src__common__pipes__async_pipe.AsyncPipe),
    [_pipe_isnull_3]: dart.fieldType(src__pipes__isnull.IsNull),
    [_pipe_isnull_3_0]: dart.fieldType(dynamicTobool()),
    [_el_0]: dart.fieldType(html.Element),
    [_el_11]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_component$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new app_component$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template._AppComponentNgFactory*/get _AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new("my-app", dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppViewOfAppComponent())));
    }
  });
  dart.copyProperties(app_component$46template, {
    get AppComponentNgFactory() {
      return app_component$46template._AppComponentNgFactory;
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialListComponent_0_5 = Symbol('_MaterialListComponent_0_5');
  const _compView_3 = Symbol('_compView_3');
  const _MaterialListItemComponent_3_5 = Symbol('_MaterialListItemComponent_3_5');
  const _RouterLink_3_6 = Symbol('_RouterLink_3_6');
  const _RouterLinkActive_3_7 = Symbol('_RouterLinkActive_3_7');
  const _compView_4 = Symbol('_compView_4');
  const _MaterialIconComponent_4_5 = Symbol('_MaterialIconComponent_4_5');
  const _MaterialListItemComponent_6_5 = Symbol('_MaterialListItemComponent_6_5');
  const _RouterLink_6_6 = Symbol('_RouterLink_6_6');
  const _RouterLinkActive_6_7 = Symbol('_RouterLinkActive_6_7');
  const _compView_7 = Symbol('_compView_7');
  const _MaterialIconComponent_7_5 = Symbol('_MaterialIconComponent_7_5');
  const _compView_9 = Symbol('_compView_9');
  const _MaterialListItemComponent_9_5 = Symbol('_MaterialListItemComponent_9_5');
  const _RouterLink_9_6 = Symbol('_RouterLink_9_6');
  const _RouterLinkActive_9_7 = Symbol('_RouterLinkActive_9_7');
  const _compView_10 = Symbol('_compView_10');
  const _MaterialIconComponent_10_5 = Symbol('_MaterialIconComponent_10_5');
  const _MaterialListItemComponent_12_5 = Symbol('_MaterialListItemComponent_12_5');
  const _RouterLink_12_6 = Symbol('_RouterLink_12_6');
  const _RouterLinkActive_12_7 = Symbol('_RouterLinkActive_12_7');
  const _compView_13 = Symbol('_compView_13');
  const _MaterialIconComponent_13_5 = Symbol('_MaterialIconComponent_13_5');
  const _compView_15 = Symbol('_compView_15');
  const _MaterialListItemComponent_15_5 = Symbol('_MaterialListItemComponent_15_5');
  const _RouterLink_15_6 = Symbol('_RouterLink_15_6');
  const _RouterLinkActive_15_7 = Symbol('_RouterLinkActive_15_7');
  const _compView_16 = Symbol('_compView_16');
  const _MaterialIconComponent_16_5 = Symbol('_MaterialIconComponent_16_5');
  const _compView_18 = Symbol('_compView_18');
  const _MaterialListItemComponent_18_5 = Symbol('_MaterialListItemComponent_18_5');
  const _RouterLink_18_6 = Symbol('_RouterLink_18_6');
  const _RouterLinkActive_18_7 = Symbol('_RouterLinkActive_18_7');
  const _compView_19 = Symbol('_compView_19');
  const _MaterialIconComponent_19_5 = Symbol('_MaterialIconComponent_19_5');
  const _compView_24 = Symbol('_compView_24');
  const _MaterialListItemComponent_24_5 = Symbol('_MaterialListItemComponent_24_5');
  const _compView_25 = Symbol('_compView_25');
  const _MaterialIconComponent_25_5 = Symbol('_MaterialIconComponent_25_5');
  const _expr_3 = Symbol('_expr_3');
  const _expr_6 = Symbol('_expr_6');
  const _expr_9 = Symbol('_expr_9');
  const _expr_12 = Symbol('_expr_12');
  const _expr_15 = Symbol('_expr_15');
  const _el_3 = Symbol('_el_3');
  const _el_6 = Symbol('_el_6');
  const _el_9 = Symbol('_el_9');
  const _el_12 = Symbol('_el_12');
  const _el_15 = Symbol('_el_15');
  const _el_18 = Symbol('_el_18');
  app_component$46template._ViewAppComponent1 = class _ViewAppComponent1 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      this[_compView_0] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.addShimC(_el_0);
      this[_MaterialListComponent_0_5] = new material_list__material_list.MaterialListComponent.new();
      let doc = html.document;
      let _el_1 = doc[$createElement]("div");
      _el_1.className = "mat-drawer-spacer";
      this.createAttr(_el_1, "group", "");
      this.addShimC(html.HtmlElement._check(_el_1));
      let _el_2 = doc[$createElement]("div");
      this.createAttr(_el_2, "group", "");
      this.addShimC(html.HtmlElement._check(_el_2));
      this[_compView_3] = new material_list__material_list_item$46template.ViewMaterialListItemComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      _el_2[$append](this[_el_3]);
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_MaterialListItemComponent_3_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_list__material_list_item.MaterialListItemComponent, dart.wrapType(material_list__material_list_item.MaterialListItemComponent), dart.fn(() => new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_3]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null), VoidToMaterialListItemComponent())) : new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_3]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null);
      this[_RouterLink_3_6] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_directive.RouterLink, dart.wrapType(src__directives__router_link_directive.RouterLink), dart.fn(() => new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)), src__location__location.Location._check(this.parentView.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.parentView.viewData.parentIndex)), null, this[_el_3]), VoidToRouterLink())) : new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)), src__location__location.Location._check(this.parentView.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.parentView.viewData.parentIndex)), null, this[_el_3]));
      this[_RouterLinkActive_3_7] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_active_directive.RouterLinkActive, dart.wrapType(src__directives__router_link_active_directive.RouterLinkActive), dart.fn(() => new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_3], src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex))), VoidToRouterLinkActive())) : new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_3], src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)));
      this[_compView_4] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      this.createAttr(_el_4, "icon", "dashboard");
      this.addShimC(_el_4);
      this[_MaterialIconComponent_4_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_4);
      this[_compView_4].create(this[_MaterialIconComponent_4_5], []);
      let _text_5 = html.Text.new("Dashboard");
      this[_RouterLinkActive_3_7].links = JSArrayOfRouterLink().of([this[_RouterLink_3_6].instance]);
      this[_compView_3].create(this[_MaterialListItemComponent_3_5], [JSArrayOfNode().of([_el_4, _text_5])]);
      this[_compView_6] = new material_list__material_list_item$46template.ViewMaterialListItemComponent0.new(this, 6);
      this[_el_6] = this[_compView_6].rootEl;
      _el_2[$append](this[_el_6]);
      this.addShimC(html.HtmlElement._check(this[_el_6]));
      this[_MaterialListItemComponent_6_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_list__material_list_item.MaterialListItemComponent, dart.wrapType(material_list__material_list_item.MaterialListItemComponent), dart.fn(() => new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_6]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null), VoidToMaterialListItemComponent())) : new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_6]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null);
      this[_RouterLink_6_6] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_directive.RouterLink, dart.wrapType(src__directives__router_link_directive.RouterLink), dart.fn(() => new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)), src__location__location.Location._check(this.parentView.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.parentView.viewData.parentIndex)), null, this[_el_6]), VoidToRouterLink())) : new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)), src__location__location.Location._check(this.parentView.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.parentView.viewData.parentIndex)), null, this[_el_6]));
      this[_RouterLinkActive_6_7] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_active_directive.RouterLinkActive, dart.wrapType(src__directives__router_link_active_directive.RouterLinkActive), dart.fn(() => new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_6], src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex))), VoidToRouterLinkActive())) : new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_6], src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)));
      this[_compView_7] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 7);
      let _el_7 = this[_compView_7].rootEl;
      this.createAttr(_el_7, "icon", "people");
      this.addShimC(_el_7);
      this[_MaterialIconComponent_7_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_7);
      this[_compView_7].create(this[_MaterialIconComponent_7_5], []);
      let _text_8 = html.Text.new("Clients");
      this[_RouterLinkActive_6_7].links = JSArrayOfRouterLink().of([this[_RouterLink_6_6].instance]);
      this[_compView_6].create(this[_MaterialListItemComponent_6_5], [JSArrayOfNode().of([_el_7, _text_8])]);
      this[_compView_9] = new material_list__material_list_item$46template.ViewMaterialListItemComponent0.new(this, 9);
      this[_el_9] = this[_compView_9].rootEl;
      _el_2[$append](this[_el_9]);
      this.addShimC(html.HtmlElement._check(this[_el_9]));
      this[_MaterialListItemComponent_9_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_list__material_list_item.MaterialListItemComponent, dart.wrapType(material_list__material_list_item.MaterialListItemComponent), dart.fn(() => new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_9]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null), VoidToMaterialListItemComponent())) : new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_9]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null);
      this[_RouterLink_9_6] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_directive.RouterLink, dart.wrapType(src__directives__router_link_directive.RouterLink), dart.fn(() => new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)), src__location__location.Location._check(this.parentView.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.parentView.viewData.parentIndex)), null, this[_el_9]), VoidToRouterLink())) : new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)), src__location__location.Location._check(this.parentView.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.parentView.viewData.parentIndex)), null, this[_el_9]));
      this[_RouterLinkActive_9_7] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_active_directive.RouterLinkActive, dart.wrapType(src__directives__router_link_active_directive.RouterLinkActive), dart.fn(() => new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_9], src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex))), VoidToRouterLinkActive())) : new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_9], src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)));
      this[_compView_10] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 10);
      let _el_10 = this[_compView_10].rootEl;
      this.createAttr(_el_10, "icon", "list_all");
      this.addShimC(_el_10);
      this[_MaterialIconComponent_10_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_10);
      this[_compView_10].create(this[_MaterialIconComponent_10_5], []);
      let _text_11 = html.Text.new("Posts");
      this[_RouterLinkActive_9_7].links = JSArrayOfRouterLink().of([this[_RouterLink_9_6].instance]);
      this[_compView_9].create(this[_MaterialListItemComponent_9_5], [JSArrayOfNode().of([_el_10, _text_11])]);
      this[_compView_12] = new material_list__material_list_item$46template.ViewMaterialListItemComponent0.new(this, 12);
      this[_el_12] = this[_compView_12].rootEl;
      _el_2[$append](this[_el_12]);
      this.addShimC(html.HtmlElement._check(this[_el_12]));
      this[_MaterialListItemComponent_12_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_list__material_list_item.MaterialListItemComponent, dart.wrapType(material_list__material_list_item.MaterialListItemComponent), dart.fn(() => new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_12]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null), VoidToMaterialListItemComponent())) : new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_12]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null);
      this[_RouterLink_12_6] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_directive.RouterLink, dart.wrapType(src__directives__router_link_directive.RouterLink), dart.fn(() => new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)), src__location__location.Location._check(this.parentView.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.parentView.viewData.parentIndex)), null, this[_el_12]), VoidToRouterLink())) : new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)), src__location__location.Location._check(this.parentView.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.parentView.viewData.parentIndex)), null, this[_el_12]));
      this[_RouterLinkActive_12_7] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_active_directive.RouterLinkActive, dart.wrapType(src__directives__router_link_active_directive.RouterLinkActive), dart.fn(() => new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_12], src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex))), VoidToRouterLinkActive())) : new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_12], src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)));
      this[_compView_13] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 13);
      let _el_13 = this[_compView_13].rootEl;
      this.createAttr(_el_13, "icon", "waves");
      this.addShimC(_el_13);
      this[_MaterialIconComponent_13_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_13);
      this[_compView_13].create(this[_MaterialIconComponent_13_5], []);
      let _text_14 = html.Text.new("Waterfalls");
      this[_RouterLinkActive_12_7].links = JSArrayOfRouterLink().of([this[_RouterLink_12_6].instance]);
      this[_compView_12].create(this[_MaterialListItemComponent_12_5], [JSArrayOfNode().of([_el_13, _text_14])]);
      this[_compView_15] = new material_list__material_list_item$46template.ViewMaterialListItemComponent0.new(this, 15);
      this[_el_15] = this[_compView_15].rootEl;
      _el_2[$append](this[_el_15]);
      this.addShimC(html.HtmlElement._check(this[_el_15]));
      this[_MaterialListItemComponent_15_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_list__material_list_item.MaterialListItemComponent, dart.wrapType(material_list__material_list_item.MaterialListItemComponent), dart.fn(() => new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_15]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null), VoidToMaterialListItemComponent())) : new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_15]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null);
      this[_RouterLink_15_6] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_directive.RouterLink, dart.wrapType(src__directives__router_link_directive.RouterLink), dart.fn(() => new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)), src__location__location.Location._check(this.parentView.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.parentView.viewData.parentIndex)), null, this[_el_15]), VoidToRouterLink())) : new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)), src__location__location.Location._check(this.parentView.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.parentView.viewData.parentIndex)), null, this[_el_15]));
      this[_RouterLinkActive_15_7] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_active_directive.RouterLinkActive, dart.wrapType(src__directives__router_link_active_directive.RouterLinkActive), dart.fn(() => new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_15], src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex))), VoidToRouterLinkActive())) : new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_15], src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)));
      this[_compView_16] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 16);
      let _el_16 = this[_compView_16].rootEl;
      this.createAttr(_el_16, "icon", "local_dining");
      this.addShimC(_el_16);
      this[_MaterialIconComponent_16_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_16);
      this[_compView_16].create(this[_MaterialIconComponent_16_5], []);
      let _text_17 = html.Text.new("Food");
      this[_RouterLinkActive_15_7].links = JSArrayOfRouterLink().of([this[_RouterLink_15_6].instance]);
      this[_compView_15].create(this[_MaterialListItemComponent_15_5], [JSArrayOfNode().of([_el_16, _text_17])]);
      this[_compView_18] = new material_list__material_list_item$46template.ViewMaterialListItemComponent0.new(this, 18);
      this[_el_18] = this[_compView_18].rootEl;
      _el_2[$append](this[_el_18]);
      this.addShimC(html.HtmlElement._check(this[_el_18]));
      this[_MaterialListItemComponent_18_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_list__material_list_item.MaterialListItemComponent, dart.wrapType(material_list__material_list_item.MaterialListItemComponent), dart.fn(() => new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_18]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null), VoidToMaterialListItemComponent())) : new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_18]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null);
      this[_RouterLink_18_6] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_directive.RouterLink, dart.wrapType(src__directives__router_link_directive.RouterLink), dart.fn(() => new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)), src__location__location.Location._check(this.parentView.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.parentView.viewData.parentIndex)), null, this[_el_18]), VoidToRouterLink())) : new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)), src__location__location.Location._check(this.parentView.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.parentView.viewData.parentIndex)), null, this[_el_18]));
      this[_RouterLinkActive_18_7] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_active_directive.RouterLinkActive, dart.wrapType(src__directives__router_link_active_directive.RouterLinkActive), dart.fn(() => new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_18], src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex))), VoidToRouterLinkActive())) : new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_18], src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)));
      this[_compView_19] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 19);
      let _el_19 = this[_compView_19].rootEl;
      this.createAttr(_el_19, "icon", "videocam");
      this.addShimC(_el_19);
      this[_MaterialIconComponent_19_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_19);
      this[_compView_19].create(this[_MaterialIconComponent_19_5], []);
      let _text_20 = html.Text.new("Videos");
      this[_RouterLinkActive_18_7].links = JSArrayOfRouterLink().of([this[_RouterLink_18_6].instance]);
      this[_compView_18].create(this[_MaterialListItemComponent_18_5], [JSArrayOfNode().of([_el_19, _text_20])]);
      let _el_21 = doc[$createElement]("div");
      this.createAttr(_el_21, "group", "");
      this.addShimC(html.HtmlElement._check(_el_21));
      let _el_22 = src__core__linker__app_view.createDivAndAppend(doc, _el_21);
      this.createAttr(_el_22, "label", "");
      this.addShimC(_el_22);
      let _text_23 = html.Text.new("Tags");
      _el_22[$append](_text_23);
      this[_compView_24] = new material_list__material_list_item$46template.ViewMaterialListItemComponent0.new(this, 24);
      let _el_24 = this[_compView_24].rootEl;
      _el_21[$append](_el_24);
      this.addShimC(_el_24);
      this[_MaterialListItemComponent_24_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_list__material_list_item.MaterialListItemComponent, dart.wrapType(material_list__material_list_item.MaterialListItemComponent), dart.fn(() => new material_list__material_list_item.MaterialListItemComponent.new(_el_24, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null), VoidToMaterialListItemComponent())) : new material_list__material_list_item.MaterialListItemComponent.new(_el_24, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null);
      this[_compView_25] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 25);
      let _el_25 = this[_compView_25].rootEl;
      this.createAttr(_el_25, "icon", "star");
      this.addShimC(_el_25);
      this[_MaterialIconComponent_25_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_25);
      this[_compView_25].create(this[_MaterialIconComponent_25_5], []);
      let _text_26 = html.Text.new("Favorites");
      this[_compView_24].create(this[_MaterialListItemComponent_24_5], [JSArrayOfNode().of([_el_25, _text_26])]);
      this[_compView_0].create(this[_MaterialListComponent_0_5], [JSArrayOfElement().of([_el_1, _el_2, _el_21])]);
      this[_el_3][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_3_6].instance, 'onClick')));
      this[_el_6][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_6_6].instance, 'onClick')));
      this[_el_9][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_9_6].instance, 'onClick')));
      this[_el_12][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_12_6].instance, 'onClick')));
      this[_el_15][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_15_6].instance, 'onClick')));
      this[_el_18][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_18_6].instance, 'onClick')));
      this.init0(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_MaterialListItemComponent_3_5];
      }
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 6 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_MaterialListItemComponent_6_5];
      }
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 9 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 11) {
        return this[_MaterialListItemComponent_9_5];
      }
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 12 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 14) {
        return this[_MaterialListItemComponent_12_5];
      }
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 15 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 17) {
        return this[_MaterialListItemComponent_15_5];
      }
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 18 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 20) {
        return this[_MaterialListItemComponent_18_5];
      }
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 24 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 26) {
        return this[_MaterialListItemComponent_24_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialListItemComponent_3_5].ngOnInit();
      }
      let currVal_0 = app_routes$0.RoutePaths.dashboard.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_RouterLink_3_6].instance.routerLink = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (firstCheck) {
        this[_RouterLinkActive_3_7].routerLinkActive = "active";
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_4_5].icon = "dashboard";
        changed = true;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialListItemComponent_6_5].ngOnInit();
      }
      let currVal_3 = app_routes$0.RoutePaths.clients.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_RouterLink_6_6].instance.routerLink = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (firstCheck) {
        this[_RouterLinkActive_6_7].routerLinkActive = "active";
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_7_5].icon = "people";
        changed = true;
      }
      if (changed) {
        this[_compView_7].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_9].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialListItemComponent_9_5].ngOnInit();
      }
      let currVal_6 = app_routes$0.RoutePaths.posts.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_RouterLink_9_6].instance.routerLink = currVal_6;
        this[_expr_6] = currVal_6;
      }
      if (firstCheck) {
        this[_RouterLinkActive_9_7].routerLinkActive = "active";
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_10_5].icon = "list_all";
        changed = true;
      }
      if (changed) {
        this[_compView_10].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_12].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialListItemComponent_12_5].ngOnInit();
      }
      let currVal_9 = app_routes$0.RoutePaths.waterfalls.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_RouterLink_12_6].instance.routerLink = currVal_9;
        this[_expr_9] = currVal_9;
      }
      if (firstCheck) {
        this[_RouterLinkActive_12_7].routerLinkActive = "active";
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_13_5].icon = "waves";
        changed = true;
      }
      if (changed) {
        this[_compView_13].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_15].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialListItemComponent_15_5].ngOnInit();
      }
      let currVal_12 = app_routes$0.RoutePaths.food.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_RouterLink_15_6].instance.routerLink = currVal_12;
        this[_expr_12] = currVal_12;
      }
      if (firstCheck) {
        this[_RouterLinkActive_15_7].routerLinkActive = "active";
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_16_5].icon = "local_dining";
        changed = true;
      }
      if (changed) {
        this[_compView_16].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_18].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialListItemComponent_18_5].ngOnInit();
      }
      let currVal_15 = app_routes$0.RoutePaths.videos.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        this[_RouterLink_18_6].instance.routerLink = currVal_15;
        this[_expr_15] = currVal_15;
      }
      if (firstCheck) {
        this[_RouterLinkActive_18_7].routerLinkActive = "active";
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_19_5].icon = "videocam";
        changed = true;
      }
      if (changed) {
        this[_compView_19].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_24].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialListItemComponent_24_5].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_25_5].icon = "star";
        changed = true;
      }
      if (changed) {
        this[_compView_25].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_3].detectHostChanges(firstCheck);
      this[_RouterLink_3_6].detectHostChanges(this[_compView_3], this[_el_3]);
      this[_compView_6].detectHostChanges(firstCheck);
      this[_RouterLink_6_6].detectHostChanges(this[_compView_6], this[_el_6]);
      this[_compView_9].detectHostChanges(firstCheck);
      this[_RouterLink_9_6].detectHostChanges(this[_compView_9], this[_el_9]);
      this[_compView_12].detectHostChanges(firstCheck);
      this[_RouterLink_12_6].detectHostChanges(this[_compView_12], this[_el_12]);
      this[_compView_15].detectHostChanges(firstCheck);
      this[_RouterLink_15_6].detectHostChanges(this[_compView_15], this[_el_15]);
      this[_compView_18].detectHostChanges(firstCheck);
      this[_RouterLink_18_6].detectHostChanges(this[_compView_18], this[_el_18]);
      this[_compView_24].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_3].detectChanges();
      this[_compView_4].detectChanges();
      this[_compView_6].detectChanges();
      this[_compView_7].detectChanges();
      this[_compView_9].detectChanges();
      this[_compView_10].detectChanges();
      this[_compView_12].detectChanges();
      this[_compView_13].detectChanges();
      this[_compView_15].detectChanges();
      this[_compView_16].detectChanges();
      this[_compView_18].detectChanges();
      this[_compView_19].detectChanges();
      this[_compView_24].detectChanges();
      this[_compView_25].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_RouterLinkActive_3_7].ngAfterViewInit();
          this[_RouterLinkActive_6_7].ngAfterViewInit();
          this[_RouterLinkActive_9_7].ngAfterViewInit();
          this[_RouterLinkActive_12_7].ngAfterViewInit();
          this[_RouterLinkActive_15_7].ngAfterViewInit();
          this[_RouterLinkActive_18_7].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroy();
      this[_compView_3].destroy();
      this[_compView_4].destroy();
      this[_compView_6].destroy();
      this[_compView_7].destroy();
      this[_compView_9].destroy();
      this[_compView_10].destroy();
      this[_compView_12].destroy();
      this[_compView_13].destroy();
      this[_compView_15].destroy();
      this[_compView_16].destroy();
      this[_compView_18].destroy();
      this[_compView_19].destroy();
      this[_compView_24].destroy();
      this[_compView_25].destroy();
      this[_MaterialListItemComponent_3_5].ngOnDestroy();
      this[_RouterLink_3_6].instance.ngOnDestroy();
      this[_RouterLinkActive_3_7].ngOnDestroy();
      this[_MaterialListItemComponent_6_5].ngOnDestroy();
      this[_RouterLink_6_6].instance.ngOnDestroy();
      this[_RouterLinkActive_6_7].ngOnDestroy();
      this[_MaterialListItemComponent_9_5].ngOnDestroy();
      this[_RouterLink_9_6].instance.ngOnDestroy();
      this[_RouterLinkActive_9_7].ngOnDestroy();
      this[_MaterialListItemComponent_12_5].ngOnDestroy();
      this[_RouterLink_12_6].instance.ngOnDestroy();
      this[_RouterLinkActive_12_7].ngOnDestroy();
      this[_MaterialListItemComponent_15_5].ngOnDestroy();
      this[_RouterLink_15_6].instance.ngOnDestroy();
      this[_RouterLinkActive_15_7].ngOnDestroy();
      this[_MaterialListItemComponent_18_5].ngOnDestroy();
      this[_RouterLink_18_6].instance.ngOnDestroy();
      this[_RouterLinkActive_18_7].ngOnDestroy();
      this[_MaterialListItemComponent_24_5].ngOnDestroy();
    }
  };
  (app_component$46template._ViewAppComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialListComponent_0_5] = null;
    this[_compView_3] = null;
    this[_MaterialListItemComponent_3_5] = null;
    this[_RouterLink_3_6] = null;
    this[_RouterLinkActive_3_7] = null;
    this[_compView_4] = null;
    this[_MaterialIconComponent_4_5] = null;
    this[_compView_6] = null;
    this[_MaterialListItemComponent_6_5] = null;
    this[_RouterLink_6_6] = null;
    this[_RouterLinkActive_6_7] = null;
    this[_compView_7] = null;
    this[_MaterialIconComponent_7_5] = null;
    this[_compView_9] = null;
    this[_MaterialListItemComponent_9_5] = null;
    this[_RouterLink_9_6] = null;
    this[_RouterLinkActive_9_7] = null;
    this[_compView_10] = null;
    this[_MaterialIconComponent_10_5] = null;
    this[_compView_12] = null;
    this[_MaterialListItemComponent_12_5] = null;
    this[_RouterLink_12_6] = null;
    this[_RouterLinkActive_12_7] = null;
    this[_compView_13] = null;
    this[_MaterialIconComponent_13_5] = null;
    this[_compView_15] = null;
    this[_MaterialListItemComponent_15_5] = null;
    this[_RouterLink_15_6] = null;
    this[_RouterLinkActive_15_7] = null;
    this[_compView_16] = null;
    this[_MaterialIconComponent_16_5] = null;
    this[_compView_18] = null;
    this[_MaterialListItemComponent_18_5] = null;
    this[_RouterLink_18_6] = null;
    this[_RouterLinkActive_18_7] = null;
    this[_compView_19] = null;
    this[_MaterialIconComponent_19_5] = null;
    this[_compView_24] = null;
    this[_MaterialListItemComponent_24_5] = null;
    this[_compView_25] = null;
    this[_MaterialIconComponent_25_5] = null;
    this[_expr_0] = null;
    this[_expr_3] = null;
    this[_expr_6] = null;
    this[_expr_9] = null;
    this[_expr_12] = null;
    this[_expr_15] = null;
    this[_el_3] = null;
    this[_el_6] = null;
    this[_el_9] = null;
    this[_el_12] = null;
    this[_el_15] = null;
    this[_el_18] = null;
    app_component$46template._ViewAppComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = app_component$46template.ViewAppComponent0._renderType;
  }).prototype = app_component$46template._ViewAppComponent1.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponent1);
  dart.setMethodSignature(app_component$46template._ViewAppComponent1, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponent1, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponent1.__proto__),
    [_compView_0]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
    [_MaterialListComponent_0_5]: dart.fieldType(material_list__material_list.MaterialListComponent),
    [_compView_3]: dart.fieldType(material_list__material_list_item$46template.ViewMaterialListItemComponent0),
    [_MaterialListItemComponent_3_5]: dart.fieldType(material_list__material_list_item.MaterialListItemComponent),
    [_RouterLink_3_6]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_3_7]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_compView_4]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_4_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_6]: dart.fieldType(material_list__material_list_item$46template.ViewMaterialListItemComponent0),
    [_MaterialListItemComponent_6_5]: dart.fieldType(material_list__material_list_item.MaterialListItemComponent),
    [_RouterLink_6_6]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_6_7]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_compView_7]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_7_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_9]: dart.fieldType(material_list__material_list_item$46template.ViewMaterialListItemComponent0),
    [_MaterialListItemComponent_9_5]: dart.fieldType(material_list__material_list_item.MaterialListItemComponent),
    [_RouterLink_9_6]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_9_7]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_compView_10]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_10_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_12]: dart.fieldType(material_list__material_list_item$46template.ViewMaterialListItemComponent0),
    [_MaterialListItemComponent_12_5]: dart.fieldType(material_list__material_list_item.MaterialListItemComponent),
    [_RouterLink_12_6]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_12_7]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_compView_13]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_13_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_15]: dart.fieldType(material_list__material_list_item$46template.ViewMaterialListItemComponent0),
    [_MaterialListItemComponent_15_5]: dart.fieldType(material_list__material_list_item.MaterialListItemComponent),
    [_RouterLink_15_6]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_15_7]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_compView_16]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_16_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_18]: dart.fieldType(material_list__material_list_item$46template.ViewMaterialListItemComponent0),
    [_MaterialListItemComponent_18_5]: dart.fieldType(material_list__material_list_item.MaterialListItemComponent),
    [_RouterLink_18_6]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_18_7]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_compView_19]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_19_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_24]: dart.fieldType(material_list__material_list_item$46template.ViewMaterialListItemComponent0),
    [_MaterialListItemComponent_24_5]: dart.fieldType(material_list__material_list_item.MaterialListItemComponent),
    [_compView_25]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_25_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core$.String),
    [_expr_3]: dart.fieldType(core$.String),
    [_expr_6]: dart.fieldType(core$.String),
    [_expr_9]: dart.fieldType(core$.String),
    [_expr_12]: dart.fieldType(core$.String),
    [_expr_15]: dart.fieldType(core$.String),
    [_el_3]: dart.fieldType(html.Element),
    [_el_6]: dart.fieldType(html.Element),
    [_el_9]: dart.fieldType(html.Element),
    [_el_12]: dart.fieldType(html.Element),
    [_el_15]: dart.fieldType(html.Element),
    [_el_18]: dart.fieldType(html.Element)
  }));
  app_component$46template.viewFactory_AppComponent1 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponent1.new(parentView, parentIndex);
  };
  const _AcxDarkTheme_0_5 = Symbol('_AcxDarkTheme_0_5');
  const _MaterialButtonComponent_0_6 = Symbol('_MaterialButtonComponent_0_6');
  const _compView_1 = Symbol('_compView_1');
  const _MaterialIconComponent_1_5 = Symbol('_MaterialIconComponent_1_5');
  let const$4;
  let const$5;
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  app_component$46template._ViewAppComponent2 = class _ViewAppComponent2 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      _el_0.className = "material-drawer-button";
      this.createAttr(_el_0, "icon", "");
      this.addShimC(_el_0);
      this[_AcxDarkTheme_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.parentView.injectorGet(const$4 || (const$4 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.parentView.injectorGet(const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(_el_0, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_5]), this[_compView_0].ref, null);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      this.createAttr(_el_1, "icon", "cancel");
      this.addShimC(_el_1);
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_1);
      this[_compView_1].create(this[_MaterialIconComponent_1_5], []);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], [JSArrayOfHtmlElement().of([_el_1])]);
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([_el_0], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_AcxDarkTheme_0_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialButtonComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_0_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_1_5].icon = "cancel";
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
      this[_compView_1].destroy();
    }
    [_handle_trigger_0_0]($event) {
      this.ctx.auth.signOut();
    }
  };
  (app_component$46template._ViewAppComponent2.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    app_component$46template._ViewAppComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = app_component$46template.ViewAppComponent0._renderType;
  }).prototype = app_component$46template._ViewAppComponent2.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponent2);
  dart.setMethodSignature(app_component$46template._ViewAppComponent2, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponent2, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponent2.__proto__),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  app_component$46template.viewFactory_AppComponent2 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponent2.new(parentView, parentIndex);
  };
  let const$6;
  let const$7;
  app_component$46template._ViewAppComponent3 = class _ViewAppComponent3 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      _el_0.className = "material-drawer-button";
      this.createAttr(_el_0, "icon", "");
      this.addShimC(_el_0);
      this[_AcxDarkTheme_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.parentView.injectorGet(const$6 || (const$6 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.parentView.injectorGet(const$7 || (const$7 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(_el_0, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_5]), this[_compView_0].ref, null);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      this.createAttr(_el_1, "icon", "face");
      this.addShimC(_el_1);
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_1);
      this[_compView_1].create(this[_MaterialIconComponent_1_5], []);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], [JSArrayOfHtmlElement().of([_el_1])]);
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([_el_0], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_AcxDarkTheme_0_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialButtonComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_0_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_1_5].icon = "face";
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
      this[_compView_1].destroy();
    }
    [_handle_trigger_0_0]($event) {
      this.ctx.auth.signInWithFacebook();
    }
  };
  (app_component$46template._ViewAppComponent3.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    app_component$46template._ViewAppComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = app_component$46template.ViewAppComponent0._renderType;
  }).prototype = app_component$46template._ViewAppComponent3.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponent3);
  dart.setMethodSignature(app_component$46template._ViewAppComponent3, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponent3, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponent3.__proto__),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  app_component$46template.viewFactory_AppComponent3 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _AppComponent_0_5 = Symbol('_AppComponent_0_5');
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(app_component$.AppComponent, dart.wrapType(app_component$.AppComponent), dart.fn(() => new app_component$.AppComponent.new(src__services__store.StoreService._check(this.injectorGet(dart.wrapType(src__services__store.StoreService), this.viewData.parentIndex))), VoidToAppComponent())) : new app_component$.AppComponent.new(src__services__store.StoreService._check(this.injectorGet(dart.wrapType(src__services__store.StoreService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_AppComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppComponent_0_5] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(app_component$.AppComponent)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_component$46template.initReflector = function() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_component$.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    app_layout__material_persistent_drawer$46template.initReflector();
    content__deferred_content$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_list__material_list$46template.initReflector();
    material_list__material_list_item$46template.initReflector();
    material_toggle__material_toggle$46template.initReflector();
    angular_router$46template.initReflector();
    app_routes$46template.initReflector();
    src__pipes__index$46template.initReflector();
    src__todo_list__todo_list_component$46template.initReflector();
  };
  dart.defineLazy(src__pipes__isnull$46template, {
    /*src__pipes__isnull$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__pipes__isnull$46template.initReflector = function() {
    if (dart.test(src__pipes__isnull$46template._visited)) {
      return;
    }
    src__pipes__isnull$46template._visited = true;
    di$46template.initReflector();
  };
  dart.defineLazy(src__pipes__index$46template, {
    /*src__pipes__index$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__pipes__index$46template.initReflector = function() {
    if (dart.test(src__pipes__index$46template._visited)) {
      return;
    }
    src__pipes__index$46template._visited = true;
    src__pipes__isnull$46template.initReflector();
  };
  dart.defineLazy(src__todo_list__todo_list_service$46template, {
    /*src__todo_list__todo_list_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__todo_list__todo_list_service$46template.initReflector = function() {
    if (dart.test(src__todo_list__todo_list_service$46template._visited)) {
      return;
    }
    src__todo_list__todo_list_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__todo_list__todo_list_service.TodoListService), dart.fn(() => new src__todo_list__todo_list_service.TodoListService.new(), VoidToTodoListService()));
    core$46template.initReflector();
  };
  dart.defineLazy(src__todo_list__todo_list_component$46css$46shim, {
    /*src__todo_list__todo_list_component$46css$46shim.styles*/get styles() {
      return ["ul._ngcontent-%ID%{list-style:none;padding-left:0}li._ngcontent-%ID%{line-height:3em}li:hover._ngcontent-%ID%{background-color:#EEE}li._ngcontent-%ID% material-checkbox._ngcontent-%ID%{vertical-align:middle}li._ngcontent-%ID% material-fab._ngcontent-%ID%{float:right;vertical-align:middle}.done._ngcontent-%ID%{text-decoration:line-through}"];
    }
  });
  dart.defineLazy(src__todo_list__todo_list_component$46template, {
    /*src__todo_list__todo_list_component$46template.styles$TodoListComponent*/get styles$TodoListComponent() {
      return [src__todo_list__todo_list_component$46css$46shim.styles];
    }
  });
  const _compView_1$ = Symbol('_compView_1');
  const _DeferredValidator_1_5 = Symbol('_DeferredValidator_1_5');
  const _NgValidators_1_6 = Symbol('_NgValidators_1_6');
  const _NgModel_1_7 = Symbol('_NgModel_1_7');
  const _NgControl_1_8 = Symbol('_NgControl_1_8');
  const _MaterialInputComponent_1_9 = Symbol('_MaterialInputComponent_1_9');
  const _BaseMaterialInput_1_10 = Symbol('_BaseMaterialInput_1_10');
  const _MaterialInputDefaultValueAccessor_1_11 = Symbol('_MaterialInputDefaultValueAccessor_1_11');
  const _compView_2 = Symbol('_compView_2');
  const _MaterialFabComponent_2_5 = Symbol('_MaterialFabComponent_2_5');
  const _compView_3$ = Symbol('_compView_3');
  const _MaterialIconComponent_3_5 = Symbol('_MaterialIconComponent_3_5');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  const _compView_6$ = Symbol('_compView_6');
  const _FeedComponent_6_5 = Symbol('_FeedComponent_6_5');
  const _expr_3$ = Symbol('_expr_3');
  const _expr_6$ = Symbol('_expr_6');
  const _anchor_4 = Symbol('_anchor_4');
  const _el_4_0 = Symbol('_el_4_0');
  let const$8;
  let const$9;
  const _handle_ngModelChange_1_1 = Symbol('_handle_ngModelChange_1_1');
  let const$10;
  src__todo_list__todo_list_component$46template.ViewTodoListComponent0 = class ViewTodoListComponent0 extends src__core__linker__app_view.AppView$(src__todo_list__todo_list_component.TodoListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(_el_0);
      this[_compView_1$] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 1);
      let _el_1 = this[_compView_1$].rootEl;
      _el_0[$append](_el_1);
      this.createAttr(_el_1, "autoFocus", "");
      this.createAttr(_el_1, "floatingLabel", "");
      this.createAttr(_el_1, "label", "What do you need to do?");
      this.createAttr(_el_1, "style", "width:80%");
      this.addShimC(_el_1);
      this[_DeferredValidator_1_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_1_6] = [this[_DeferredValidator_1_5]];
      this[_NgModel_1_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_1_6], null);
      this[_NgControl_1_8] = this[_NgModel_1_7];
      this[_MaterialInputComponent_1_9] = new material_input__material_input.MaterialInputComponent.new(null, null, null, this[_NgControl_1_8], this[_compView_1$].ref, this[_DeferredValidator_1_5]);
      this[_BaseMaterialInput_1_10] = this[_MaterialInputComponent_1_9];
      this[_MaterialInputDefaultValueAccessor_1_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_1_10], this[_NgControl_1_8]);
      this[_compView_1$].create(this[_MaterialInputComponent_1_9], [const$8 || (const$8 = dart.constList([], dart.dynamic)), const$9 || (const$9 = dart.constList([], dart.dynamic))]);
      this[_compView_2] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      _el_0[$append](_el_2);
      this.createAttr(_el_2, "mini", "");
      this.createAttr(_el_2, "raised", "");
      this.addShimC(_el_2);
      this[_MaterialFabComponent_2_5] = new material_button__material_fab.MaterialFabComponent.new(_el_2, this[_compView_2].ref);
      this[_compView_3$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 3);
      let _el_3 = this[_compView_3$].rootEl;
      this.createAttr(_el_3, "icon", "add");
      this.addShimC(_el_3);
      this[_MaterialIconComponent_3_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_3);
      this[_compView_3$].create(this[_MaterialIconComponent_3_5], []);
      this[_compView_2].create(this[_MaterialFabComponent_2_5], [JSArrayOfHtmlElement().of([_el_3])]);
      this[_anchor_4] = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](this[_anchor_4]);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, null, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(src__todo_list__todo_list_component$46template.viewFactory_TodoListComponent2, AppViewAndintToAppViewOfTodoListComponent()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      this[_compView_6$] = new src__components__feed__feed_component$46template.ViewFeedComponent0.new(this, 6);
      let _el_6 = this[_compView_6$].rootEl;
      parentRenderNode[$append](_el_6);
      this.addShimC(_el_6);
      this[_FeedComponent_6_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__components__feed__feed_component.FeedComponent, dart.wrapType(src__components__feed__feed_component.FeedComponent), dart.fn(() => new src__components__feed__feed_component.FeedComponent.new(src__services__store.StoreService._check(this.parentView.injectorGet(dart.wrapType(src__services__store.StoreService), this.viewData.parentIndex))), VoidToFeedComponent())) : new src__components__feed__feed_component.FeedComponent.new(src__services__store.StoreService._check(this.parentView.injectorGet(dart.wrapType(src__services__store.StoreService), this.viewData.parentIndex)));
      this[_compView_6$].create(this[_FeedComponent_6_5], []);
      src__core__linker__app_view_utils.appViewUtils.eventManager.addEventListener(_el_1, "keyup.enter", this.eventHandler0(dart.dynamic, dart.bind(this.ctx, 'add')));
      let subscription_0 = this[_NgModel_1_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_1_1)));
      let subscription_1 = this[_MaterialFabComponent_2_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'add')));
      this.init([], [subscription_0, subscription_1]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 1 === nodeIndex) {
        return this[_DeferredValidator_1_5];
      }
      if (token === (const$10 || (const$10 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators")))) && 1 === nodeIndex) {
        return this[_NgValidators_1_6];
      }
      if (token === dart.wrapType(src__directives__ng_model.NgModel) && 1 === nodeIndex) {
        return this[_NgModel_1_7];
      }
      if (token === dart.wrapType(src__directives__ng_control.NgControl) && 1 === nodeIndex) {
        return this[_NgControl_1_8];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 1 === nodeIndex) {
        return this[_MaterialInputComponent_1_9];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 1 === nodeIndex) {
        return this[_BaseMaterialInput_1_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 1 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_1_11];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_1_7].model = _ctx.newTodo;
      this[_NgModel_1_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_1_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_1_9].label = "What do you need to do?";
        changed = true;
        this[_MaterialInputComponent_1_9].floatingLabel = true;
        changed = true;
      }
      if (changed) {
        this[_compView_1$].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialFabComponent_2_5].raised = true;
        changed = true;
      }
      let currVal_3 = _ctx.newTodo[$isEmpty];
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
        this[_MaterialFabComponent_2_5].disabled = currVal_3;
        changed = true;
        this[_expr_3$] = currVal_3;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialFabComponent_2_5].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_3_5].icon = "add";
        changed = true;
      }
      if (changed) {
        this[_compView_3$].markAsCheckOnce();
      }
      let currVal_6 = _ctx.items[$isEmpty] === true;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6$], currVal_6))) {
        if (currVal_6) {
          let doc = html.document;
          this[_el_4_0] = doc[$createElement]("p");
          this.addShimE(this[_el_4_0]);
          let _text_4_1 = html.Text.new("Nothing to do here! Add items above.");
          this[_el_4_0][$append](_text_4_1);
          this.addInlinedNodes(this[_anchor_4], JSArrayOfNode().of([this[_el_4_0]]), true);
        } else {
          this.removeInlinedNodes(JSArrayOfNode().of([this[_el_4_0]]), true);
        }
        this[_expr_6$] = currVal_6;
      }
      this[_NgIf_5_9].ngIf = _ctx.items[$isNotEmpty];
      this[_appEl_5].detectChangesInNestedViews();
      this[_compView_2].detectHostChanges(firstCheck);
      this[_compView_1$].detectChanges();
      this[_compView_2].detectChanges();
      this[_compView_3$].detectChanges();
      this[_compView_6$].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_1_9].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_5].destroyNestedViews();
      this[_compView_1$].destroy();
      this[_compView_2].destroy();
      this[_compView_3$].destroy();
      this[_compView_6$].destroy();
      this[_MaterialInputComponent_1_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_1_11].ngOnDestroy();
    }
    [_handle_ngModelChange_1_1]($event) {
      this.ctx.newTodo = core$.String._check($event);
    }
  };
  (src__todo_list__todo_list_component$46template.ViewTodoListComponent0.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_DeferredValidator_1_5] = null;
    this[_NgValidators_1_6] = null;
    this[_NgModel_1_7] = null;
    this[_NgControl_1_8] = null;
    this[_MaterialInputComponent_1_9] = null;
    this[_BaseMaterialInput_1_10] = null;
    this[_MaterialInputDefaultValueAccessor_1_11] = null;
    this[_compView_2] = null;
    this[_MaterialFabComponent_2_5] = null;
    this[_compView_3$] = null;
    this[_MaterialIconComponent_3_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_compView_6$] = null;
    this[_FeedComponent_6_5] = null;
    this[_expr_3$] = null;
    this[_expr_6$] = false;
    this[_anchor_4] = null;
    this[_el_4_0] = null;
    src__todo_list__todo_list_component$46template.ViewTodoListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("todo-list"));
    let t = src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType;
    t == null ? src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:avocado_web/lib/src/todo_list/todo_list_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__todo_list__todo_list_component$46template.styles$TodoListComponent) : t;
    this.setupComponentType(src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType);
  }).prototype = src__todo_list__todo_list_component$46template.ViewTodoListComponent0.prototype;
  dart.addTypeTests(src__todo_list__todo_list_component$46template.ViewTodoListComponent0);
  dart.setMethodSignature(src__todo_list__todo_list_component$46template.ViewTodoListComponent0, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_component$46template.ViewTodoListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__todo_list__todo_list_component.TodoListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_1_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_component$46template.ViewTodoListComponent0, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_component$46template.ViewTodoListComponent0.__proto__),
    [_compView_1$]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_1_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_1_6]: dart.fieldType(core$.List),
    [_NgModel_1_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_NgControl_1_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_1_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_BaseMaterialInput_1_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_1_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_compView_2]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_MaterialFabComponent_2_5]: dart.fieldType(material_button__material_fab.MaterialFabComponent),
    [_compView_3$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_3_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_compView_6$]: dart.fieldType(src__components__feed__feed_component$46template.ViewFeedComponent0),
    [_FeedComponent_6_5]: dart.fieldType(src__components__feed__feed_component.FeedComponent),
    [_expr_3$]: dart.fieldType(core$.bool),
    [_expr_6$]: dart.fieldType(core$.bool),
    [_anchor_4]: dart.fieldType(html.Comment),
    [_el_4_0]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__todo_list__todo_list_component$46template.ViewTodoListComponent0, {
    /*src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__todo_list__todo_list_component$46template.viewFactory_TodoListComponent0 = function(parentView, parentIndex) {
    return new src__todo_list__todo_list_component$46template.ViewTodoListComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__todo_list__todo_list_component$46template, {
    /*src__todo_list__todo_list_component$46template._TodoListComponentNgFactory*/get _TodoListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfTodoListComponent()).new("todo-list", dart.fn(src__todo_list__todo_list_component$46template.viewFactory_TodoListComponentHost0, AppViewAndintToAppViewOfTodoListComponent())));
    }
  });
  dart.copyProperties(src__todo_list__todo_list_component$46template, {
    get TodoListComponentNgFactory() {
      return src__todo_list__todo_list_component$46template._TodoListComponentNgFactory;
    }
  });
  const _appEl_2 = Symbol('_appEl_2');
  const _NgFor_2_9 = Symbol('_NgFor_2_9');
  const _expr_0$ = Symbol('_expr_0');
  src__todo_list__todo_list_component$46template._ViewTodoListComponent2 = class _ViewTodoListComponent2 extends src__core__linker__app_view.AppView$(src__todo_list__todo_list_component.TodoListComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__core__linker__app_view.createAndAppend(doc, "ul", _el_0);
      this.addShimC(html.HtmlElement._check(_el_1));
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      _el_1[$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(src__todo_list__todo_list_component$46template.viewFactory_TodoListComponent3, AppViewAndintToAppViewOfTodoListComponent()));
      this[_NgFor_2_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.items;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_NgFor_2_9].ngForOf = currVal_0;
        this[_expr_0$] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_2_9].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
    }
  };
  (src__todo_list__todo_list_component$46template._ViewTodoListComponent2.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_NgFor_2_9] = null;
    this[_expr_0$] = null;
    src__todo_list__todo_list_component$46template._ViewTodoListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType;
  }).prototype = src__todo_list__todo_list_component$46template._ViewTodoListComponent2.prototype;
  dart.addTypeTests(src__todo_list__todo_list_component$46template._ViewTodoListComponent2);
  dart.setMethodSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponent2, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_component$46template._ViewTodoListComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__todo_list__todo_list_component.TodoListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponent2, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_component$46template._ViewTodoListComponent2.__proto__),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_2_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  src__todo_list__todo_list_component$46template.viewFactory_TodoListComponent2 = function(parentView, parentIndex) {
    return new src__todo_list__todo_list_component$46template._ViewTodoListComponent2.new(parentView, parentIndex);
  };
  const _MaterialCheckboxComponent_1_5 = Symbol('_MaterialCheckboxComponent_1_5');
  const _compView_4$ = Symbol('_compView_4');
  const _MaterialFabComponent_4_5 = Symbol('_MaterialFabComponent_4_5');
  const _compView_5$ = Symbol('_compView_5');
  const _MaterialIconComponent_5_5 = Symbol('_MaterialIconComponent_5_5');
  const _expr_1$ = Symbol('_expr_1');
  const _el_2 = Symbol('_el_2');
  const _text_3 = Symbol('_text_3');
  let const$11;
  const _handle_trigger_4_0 = Symbol('_handle_trigger_4_0');
  src__todo_list__todo_list_component$46template._ViewTodoListComponent3 = class _ViewTodoListComponent3 extends src__core__linker__app_view.AppView$(src__todo_list__todo_list_component.TodoListComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("li");
      this.addShimE(_el_0);
      this[_compView_1$] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 1);
      let _el_1 = this[_compView_1$].rootEl;
      _el_0[$append](_el_1);
      this.createAttr(_el_1, "materialTooltip", "Mark item as done");
      this.addShimC(_el_1);
      this[_MaterialCheckboxComponent_1_5] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(_el_1, this[_compView_1$].ref, null, null, null);
      this[_compView_1$].create(this[_MaterialCheckboxComponent_1_5], [const$11 || (const$11 = dart.constList([], dart.dynamic))]);
      this[_el_2] = src__core__linker__app_view.createSpanAndAppend(doc, _el_0);
      this.addShimE(this[_el_2]);
      this[_text_3] = html.Text.new("");
      this[_el_2][$append](this[_text_3]);
      this[_compView_4$] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 4);
      let _el_4 = this[_compView_4$].rootEl;
      _el_0[$append](_el_4);
      this.createAttr(_el_4, "mini", "");
      this.addShimC(_el_4);
      this[_MaterialFabComponent_4_5] = new material_button__material_fab.MaterialFabComponent.new(_el_4, this[_compView_4$].ref);
      this[_compView_5$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 5);
      let _el_5 = this[_compView_5$].rootEl;
      this.createAttr(_el_5, "icon", "delete");
      this.addShimC(_el_5);
      this[_MaterialIconComponent_5_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_5);
      this[_compView_5$].create(this[_MaterialIconComponent_5_5], []);
      this[_compView_4$].create(this[_MaterialFabComponent_4_5], [JSArrayOfHtmlElement().of([_el_5])]);
      let subscription_0 = this[_MaterialFabComponent_4_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_4_0)));
      this.init([_el_0], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 1 === nodeIndex) {
        return this[_MaterialCheckboxComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_done = this[_MaterialCheckboxComponent_1_5];
      let local_item = src__runtime__optimizations.unsafeCast(core$.String, this.locals[$_get]("$implicit"));
      changed = false;
      if (changed) {
        this[_compView_1$].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_4$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialFabComponent_4_5].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_5_5].icon = "delete";
        changed = true;
      }
      if (changed) {
        this[_compView_5$].markAsCheckOnce();
      }
      this[_compView_1$].detectHostChanges(firstCheck);
      let currVal_0 = local_done.checked;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this.updateClass(html.HtmlElement._check(this[_el_2]), "done", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_item);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_text_3][$text] = core$.String._check(currVal_1);
        this[_expr_1$] = currVal_1;
      }
      this[_compView_4$].detectHostChanges(firstCheck);
      this[_compView_1$].detectChanges();
      this[_compView_4$].detectChanges();
      this[_compView_5$].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$].destroy();
      this[_compView_4$].destroy();
      this[_compView_5$].destroy();
      this[_MaterialCheckboxComponent_1_5].ngOnDestroy();
    }
    [_handle_trigger_4_0]($event) {
      let local_i = src__runtime__optimizations.unsafeCast(core$.int, this.locals[$_get]("index"));
      this.ctx.remove(local_i);
    }
  };
  (src__todo_list__todo_list_component$46template._ViewTodoListComponent3.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_MaterialCheckboxComponent_1_5] = null;
    this[_compView_4$] = null;
    this[_MaterialFabComponent_4_5] = null;
    this[_compView_5$] = null;
    this[_MaterialIconComponent_5_5] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_el_2] = null;
    this[_text_3] = null;
    src__todo_list__todo_list_component$46template._ViewTodoListComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null, "index", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType;
  }).prototype = src__todo_list__todo_list_component$46template._ViewTodoListComponent3.prototype;
  dart.addTypeTests(src__todo_list__todo_list_component$46template._ViewTodoListComponent3);
  dart.setMethodSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponent3, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_component$46template._ViewTodoListComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__todo_list__todo_list_component.TodoListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_4_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponent3, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_component$46template._ViewTodoListComponent3.__proto__),
    [_compView_1$]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
    [_MaterialCheckboxComponent_1_5]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
    [_compView_4$]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_MaterialFabComponent_4_5]: dart.fieldType(material_button__material_fab.MaterialFabComponent),
    [_compView_5$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_5_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0$]: dart.fieldType(core$.bool),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_el_2]: dart.fieldType(html.Element),
    [_text_3]: dart.fieldType(html.Text)
  }));
  src__todo_list__todo_list_component$46template.viewFactory_TodoListComponent3 = function(parentView, parentIndex) {
    return new src__todo_list__todo_list_component$46template._ViewTodoListComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(src__todo_list__todo_list_component$46template, {
    /*src__todo_list__todo_list_component$46template.styles$TodoListComponentHost*/get styles$TodoListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$ = Symbol('_compView_0');
  const _TodoListService_0_5 = Symbol('_TodoListService_0_5');
  const _TodoListComponent_0_6 = Symbol('_TodoListComponent_0_6');
  src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0 = class _ViewTodoListComponentHost0 extends src__core__linker__app_view.AppView$(src__todo_list__todo_list_component.TodoListComponent) {
    build() {
      this[_compView_0$] = new src__todo_list__todo_list_component$46template.ViewTodoListComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_TodoListService_0_5] = new src__todo_list__todo_list_service.TodoListService.new();
      this[_TodoListComponent_0_6] = new src__todo_list__todo_list_component.TodoListComponent.new(this[_TodoListService_0_5]);
      this[_compView_0$].create(this[_TodoListComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfTodoListComponent()).new(0, this, this.rootEl, this[_TodoListComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__todo_list__todo_list_service.TodoListService) && 0 === nodeIndex) {
        return this[_TodoListService_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_TodoListComponent_0_6].ngOnInit();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroy();
    }
  };
  (src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_TodoListService_0_5] = null;
    this[_TodoListComponent_0_6] = null;
    src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.prototype;
  dart.addTypeTests(src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0);
  dart.setMethodSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__todo_list__todo_list_component.TodoListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__todo_list__todo_list_component$46template.ViewTodoListComponent0),
    [_TodoListService_0_5]: dart.fieldType(src__todo_list__todo_list_service.TodoListService),
    [_TodoListComponent_0_6]: dart.fieldType(src__todo_list__todo_list_component.TodoListComponent)
  }));
  src__todo_list__todo_list_component$46template.viewFactory_TodoListComponentHost0 = function(parentView, parentIndex) {
    return new src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__todo_list__todo_list_component$46template, {
    /*src__todo_list__todo_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__todo_list__todo_list_component$46template.initReflector = function() {
    if (dart.test(src__todo_list__todo_list_component$46template._visited)) {
      return;
    }
    src__todo_list__todo_list_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__todo_list__todo_list_component.TodoListComponent), src__todo_list__todo_list_component$46template.TodoListComponentNgFactory);
    angular$46template.initReflector();
    angular_components$46template.initReflector();
    src__components__feed__feed_component$46template.initReflector();
    src__todo_list__todo_list_service$46template.initReflector();
  };
  dart.trackLibraries("packages/avocado_web/app_component.template.ddc", {
    "package:avocado_web/app_component.template.dart": app_component$46template,
    "package:avocado_web/src/pipes/isnull.template.dart": src__pipes__isnull$46template,
    "package:avocado_web/src/pipes/index.template.dart": src__pipes__index$46template,
    "package:avocado_web/src/todo_list/todo_list_service.template.dart": src__todo_list__todo_list_service$46template,
    "package:avocado_web/src/todo_list/todo_list_component.css.shim.dart": src__todo_list__todo_list_component$46css$46shim,
    "package:avocado_web/src/todo_list/todo_list_component.template.dart": src__todo_list__todo_list_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart","src/pipes/isnull.template.dart","src/pipes/index.template.dart","src/todo_list/todo_list_service.template.dart","src/todo_list/todo_list_component.css.shim.dart","src/todo_list/todo_list_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template,
    src__pipes__isnull$46template: src__pipes__isnull$46template,
    src__pipes__index$46template: src__pipes__index$46template,
    src__todo_list__todo_list_service$46template: src__todo_list__todo_list_service$46template,
    src__todo_list__todo_list_component$46css$46shim: src__todo_list__todo_list_component$46css$46shim,
    src__todo_list__todo_list_component$46template: src__todo_list__todo_list_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
