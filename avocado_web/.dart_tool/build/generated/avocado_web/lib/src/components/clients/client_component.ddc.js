define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular/angular.template', 'packages/avocado_common/common', 'packages/angular_components/css/mdc_web/card/mdc-card.scss.css.shim', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/angular_components.template', 'packages/angular_components/laminate/components/modal/modal.template', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/material_dialog/material_dialog.template', 'packages/angular_components/material_dialog/material_dialog', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/utils/browser/window/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/laminate/overlay/module', 'packages/angular_components/laminate/overlay/zindexer'], function(dart_sdk, view_type, change_detection, modules, angular, common, mdc$45card$46scss$46css, material_button, dark_theme, material_button$, material_icon, material_icon$, button_decorator, has_disabled, angular_components, modal, modal$, overlay_ref, dom_service, material_dialog, material_dialog$, material_input, deferred_validator, directives, material_input$, material_input_default_value_accessor, reference, focus_interface, base_material_input, deferred_content_aware, module, disposer, ng_zone, angular_2, imperative_view, dom_ruler, managed_zone, angular_2$, module$, zindexer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__errors = change_detection.src__di__errors;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__common__directives__ng_style = modules.src__common__directives__ng_style;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__common__pipes__async_pipe = modules.src__common__pipes__async_pipe;
  const src__core__linker__component_loader = modules.src__core__linker__component_loader;
  const angular$46template = angular.angular$46template;
  const src__models__posts = common.src__models__posts;
  const src__blocs__FeedBLoC = common.src__blocs__FeedBLoC;
  const src__services__store = common.src__services__store;
  const src__blocs__PostsBLoC = common.src__blocs__PostsBLoC;
  const src__blocs__VideosBLoC = common.src__blocs__VideosBLoC;
  const src__models__videos = common.src__models__videos;
  const css__mdc_web__card__mdc$45card$46scss$46css$46shim = mdc$45card$46scss$46css.css__mdc_web__card__mdc$45card$46scss$46css$46shim;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const angular_components$46template = angular_components.angular_components$46template;
  const laminate__components__modal__modal$46template = modal.laminate__components__modal__modal$46template;
  const laminate__components__modal__modal = modal$.laminate__components__modal__modal;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const src__laminate__overlay__render__overlay_style_config = overlay_ref.src__laminate__overlay__render__overlay_style_config;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_ref.src__laminate__overlay__render__overlay_dom_render_service;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const material_dialog__material_dialog$46template = material_dialog.material_dialog__material_dialog$46template;
  const material_dialog__material_dialog = material_dialog$.material_dialog__material_dialog;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const material_input__material_input = material_input$.material_input__material_input;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const utils__browser__window__module = module.utils__browser__window__module;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const utils__angular__managed_zone__angular_2 = angular_2$.utils__angular__managed_zone__angular_2;
  const laminate__overlay__module = module$.laminate__overlay__module;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const _root = Object.create(null);
  const src__components__dashborad__dashboard_component = Object.create(_root);
  const src__components__dashborad__dashboard_component$46template = Object.create(_root);
  const src__components__feed__post_component = Object.create(_root);
  const src__components__feed__feed_component = Object.create(_root);
  const src__components__clients__clients_component = Object.create(_root);
  const src__components__feed__post_component$46scss$46css$46shim = Object.create(_root);
  const src__components__feed__post_component$46template = Object.create(_root);
  const src__components__feed__feed_component$46template = Object.create(_root);
  const src__components__clients__clients_component$46template = Object.create(_root);
  const src__components__clients__client_component = Object.create(_root);
  const src__components__clients__client_component$46template = Object.create(_root);
  const src__components__posts__video_component = Object.create(_root);
  const src__components__posts__post_component = Object.create(_root);
  const src__components__posts__posts_component = Object.create(_root);
  const src__components__posts__video_component$46template = Object.create(_root);
  const src__components__posts__post_component$46scss$46css$46shim = Object.create(_root);
  const src__components__posts__post_component$46template = Object.create(_root);
  const src__components__posts__posts_component$46template = Object.create(_root);
  const src__components__waterfalls__waterfalls_component = Object.create(_root);
  const src__components__waterfalls__waterfalls_component$46template = Object.create(_root);
  const src__components__food__food_component = Object.create(_root);
  const src__components__food__food_component$46template = Object.create(_root);
  const src__components__notifications__notifications_component = Object.create(_root);
  const src__components__notifications__notifications_component$46template = Object.create(_root);
  const src__components__posts__video_uploader_component = Object.create(_root);
  const src__components__posts__videos_component = Object.create(_root);
  const src__components__posts__video_uploader_component$46scss$46css$46shim = Object.create(_root);
  const src__components__posts__video_uploader_component$46template = Object.create(_root);
  const src__components__posts__videos_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfDashboardComponent = () => (AppViewOfDashboardComponent = dart.constFn(src__core__linker__app_view.AppView$(src__components__dashborad__dashboard_component.DashboardComponent)))();
  let AppViewAndintToAppViewOfDashboardComponent = () => (AppViewAndintToAppViewOfDashboardComponent = dart.constFn(dart.fnType(AppViewOfDashboardComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfDashboardComponent = () => (ComponentFactoryOfDashboardComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__dashborad__dashboard_component.DashboardComponent)))();
  let ComponentRefOfDashboardComponent = () => (ComponentRefOfDashboardComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__dashborad__dashboard_component.DashboardComponent)))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(theme__dark_theme.AcxDarkTheme, [])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let JSArrayOfHtmlElement = () => (JSArrayOfHtmlElement = dart.constFn(_interceptors.JSArray$(html.HtmlElement)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let StringToMapOfString$String = () => (StringToMapOfString$String = dart.constFn(dart.fnType(MapOfString$String(), [core.String])))();
  let AppViewOfPostComponent = () => (AppViewOfPostComponent = dart.constFn(src__core__linker__app_view.AppView$(src__components__feed__post_component.PostComponent)))();
  let AppViewAndintToAppViewOfPostComponent = () => (AppViewAndintToAppViewOfPostComponent = dart.constFn(dart.fnType(AppViewOfPostComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfPostComponent = () => (ComponentFactoryOfPostComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__feed__post_component.PostComponent)))();
  let ComponentRefOfPostComponent = () => (ComponentRefOfPostComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__feed__post_component.PostComponent)))();
  let AppViewOfFeedComponent = () => (AppViewOfFeedComponent = dart.constFn(src__core__linker__app_view.AppView$(src__components__feed__feed_component.FeedComponent)))();
  let AppViewAndintToAppViewOfFeedComponent = () => (AppViewAndintToAppViewOfFeedComponent = dart.constFn(dart.fnType(AppViewOfFeedComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfFeedComponent = () => (ComponentFactoryOfFeedComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__feed__feed_component.FeedComponent)))();
  let VoidToFeedComponent = () => (VoidToFeedComponent = dart.constFn(dart.fnType(src__components__feed__feed_component.FeedComponent, [])))();
  let ComponentRefOfFeedComponent = () => (ComponentRefOfFeedComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__feed__feed_component.FeedComponent)))();
  let AppViewOfClientsComponent = () => (AppViewOfClientsComponent = dart.constFn(src__core__linker__app_view.AppView$(src__components__clients__clients_component.ClientsComponent)))();
  let AppViewAndintToAppViewOfClientsComponent = () => (AppViewAndintToAppViewOfClientsComponent = dart.constFn(dart.fnType(AppViewOfClientsComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfClientsComponent = () => (ComponentFactoryOfClientsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__clients__clients_component.ClientsComponent)))();
  let ComponentRefOfClientsComponent = () => (ComponentRefOfClientsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__clients__clients_component.ClientsComponent)))();
  let AppViewOfClientComponent = () => (AppViewOfClientComponent = dart.constFn(src__core__linker__app_view.AppView$(src__components__clients__client_component.ClientComponent)))();
  let AppViewAndintToAppViewOfClientComponent = () => (AppViewAndintToAppViewOfClientComponent = dart.constFn(dart.fnType(AppViewOfClientComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfClientComponent = () => (ComponentFactoryOfClientComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__clients__client_component.ClientComponent)))();
  let ComponentRefOfClientComponent = () => (ComponentRefOfClientComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__clients__client_component.ClientComponent)))();
  let AppViewOfVideoComponent = () => (AppViewOfVideoComponent = dart.constFn(src__core__linker__app_view.AppView$(src__components__posts__video_component.VideoComponent)))();
  let AppViewAndintToAppViewOfVideoComponent = () => (AppViewAndintToAppViewOfVideoComponent = dart.constFn(dart.fnType(AppViewOfVideoComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfVideoComponent = () => (ComponentFactoryOfVideoComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__posts__video_component.VideoComponent)))();
  let ComponentRefOfVideoComponent = () => (ComponentRefOfVideoComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__posts__video_component.VideoComponent)))();
  let VoidToModalComponent = () => (VoidToModalComponent = dart.constFn(dart.fnType(laminate__components__modal__modal.ModalComponent, [])))();
  let VoidToMaterialDialogComponent = () => (VoidToMaterialDialogComponent = dart.constFn(dart.fnType(material_dialog__material_dialog.MaterialDialogComponent, [])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let AppViewOfPostComponent$ = () => (AppViewOfPostComponent$ = dart.constFn(src__core__linker__app_view.AppView$(src__components__posts__post_component.PostComponent)))();
  let AppViewAndintToAppViewOfPostComponent$ = () => (AppViewAndintToAppViewOfPostComponent$ = dart.constFn(dart.fnType(AppViewOfPostComponent$(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfPostComponent$ = () => (ComponentFactoryOfPostComponent$ = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__posts__post_component.PostComponent)))();
  let VoidToDomService = () => (VoidToDomService = dart.constFn(dart.fnType(utils__browser__dom_service__dom_service.DomService, [])))();
  let VoidToAcxImperativeViewUtils = () => (VoidToAcxImperativeViewUtils = dart.constFn(dart.fnType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, [])))();
  let VoidToAngular2ManagedZone = () => (VoidToAngular2ManagedZone = dart.constFn(dart.fnType(utils__angular__managed_zone__angular_2.Angular2ManagedZone, [])))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let VoidToHtmlElement = () => (VoidToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [])))();
  let VoidToOverlayService = () => (VoidToOverlayService = dart.constFn(dart.fnType(src__laminate__overlay__overlay_service.OverlayService, [])))();
  let ComponentRefOfPostComponent$ = () => (ComponentRefOfPostComponent$ = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__posts__post_component.PostComponent)))();
  let AppViewOfPostsComponent = () => (AppViewOfPostsComponent = dart.constFn(src__core__linker__app_view.AppView$(src__components__posts__posts_component.PostsComponent)))();
  let AppViewAndintToAppViewOfPostsComponent = () => (AppViewAndintToAppViewOfPostsComponent = dart.constFn(dart.fnType(AppViewOfPostsComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfPostsComponent = () => (ComponentFactoryOfPostsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__posts__posts_component.PostsComponent)))();
  let VoidToPostsComponent = () => (VoidToPostsComponent = dart.constFn(dart.fnType(src__components__posts__posts_component.PostsComponent, [])))();
  let ComponentRefOfPostsComponent = () => (ComponentRefOfPostsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__posts__posts_component.PostsComponent)))();
  let AppViewOfWaterfallsComponent = () => (AppViewOfWaterfallsComponent = dart.constFn(src__core__linker__app_view.AppView$(src__components__waterfalls__waterfalls_component.WaterfallsComponent)))();
  let AppViewAndintToAppViewOfWaterfallsComponent = () => (AppViewAndintToAppViewOfWaterfallsComponent = dart.constFn(dart.fnType(AppViewOfWaterfallsComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfWaterfallsComponent = () => (ComponentFactoryOfWaterfallsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__waterfalls__waterfalls_component.WaterfallsComponent)))();
  let ComponentRefOfWaterfallsComponent = () => (ComponentRefOfWaterfallsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__waterfalls__waterfalls_component.WaterfallsComponent)))();
  let AppViewOfFoodComponent = () => (AppViewOfFoodComponent = dart.constFn(src__core__linker__app_view.AppView$(src__components__food__food_component.FoodComponent)))();
  let AppViewAndintToAppViewOfFoodComponent = () => (AppViewAndintToAppViewOfFoodComponent = dart.constFn(dart.fnType(AppViewOfFoodComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfFoodComponent = () => (ComponentFactoryOfFoodComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__food__food_component.FoodComponent)))();
  let ComponentRefOfFoodComponent = () => (ComponentRefOfFoodComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__food__food_component.FoodComponent)))();
  let AppViewOfNotificationsComponent = () => (AppViewOfNotificationsComponent = dart.constFn(src__core__linker__app_view.AppView$(src__components__notifications__notifications_component.NotificationsComponent)))();
  let AppViewAndintToAppViewOfNotificationsComponent = () => (AppViewAndintToAppViewOfNotificationsComponent = dart.constFn(dart.fnType(AppViewOfNotificationsComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfNotificationsComponent = () => (ComponentFactoryOfNotificationsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__notifications__notifications_component.NotificationsComponent)))();
  let ComponentRefOfNotificationsComponent = () => (ComponentRefOfNotificationsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__notifications__notifications_component.NotificationsComponent)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let AppViewOfVideoUploaderComponent = () => (AppViewOfVideoUploaderComponent = dart.constFn(src__core__linker__app_view.AppView$(src__components__posts__video_uploader_component.VideoUploaderComponent)))();
  let AppViewAndintToAppViewOfVideoUploaderComponent = () => (AppViewAndintToAppViewOfVideoUploaderComponent = dart.constFn(dart.fnType(AppViewOfVideoUploaderComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfVideoUploaderComponent = () => (ComponentFactoryOfVideoUploaderComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__posts__video_uploader_component.VideoUploaderComponent)))();
  let VoidToVideoUploaderComponent = () => (VoidToVideoUploaderComponent = dart.constFn(dart.fnType(src__components__posts__video_uploader_component.VideoUploaderComponent, [])))();
  let ComponentRefOfVideoUploaderComponent = () => (ComponentRefOfVideoUploaderComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__posts__video_uploader_component.VideoUploaderComponent)))();
  let AppViewOfVideosComponent = () => (AppViewOfVideosComponent = dart.constFn(src__core__linker__app_view.AppView$(src__components__posts__videos_component.VideosComponent)))();
  let AppViewAndintToAppViewOfVideosComponent = () => (AppViewAndintToAppViewOfVideosComponent = dart.constFn(dart.fnType(AppViewOfVideosComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfVideosComponent = () => (ComponentFactoryOfVideosComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__posts__videos_component.VideosComponent)))();
  let VoidToVideosComponent = () => (VoidToVideosComponent = dart.constFn(dart.fnType(src__components__posts__videos_component.VideosComponent, [])))();
  let ComponentRefOfVideosComponent = () => (ComponentRefOfVideosComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__posts__videos_component.VideosComponent)))();
  src__components__dashborad__dashboard_component.DashboardComponent = class DashboardComponent extends core.Object {
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
  };
  (src__components__dashborad__dashboard_component.DashboardComponent.new = function() {
    this[name] = "Dashboard";
  }).prototype = src__components__dashborad__dashboard_component.DashboardComponent.prototype;
  dart.addTypeTests(src__components__dashborad__dashboard_component.DashboardComponent);
  const name = Symbol("DashboardComponent.name");
  dart.setFieldSignature(src__components__dashborad__dashboard_component.DashboardComponent, () => ({
    __proto__: dart.getFields(src__components__dashborad__dashboard_component.DashboardComponent.__proto__),
    name: dart.fieldType(core.String)
  }));
  dart.defineLazy(src__components__dashborad__dashboard_component$46template, {
    /*src__components__dashborad__dashboard_component$46template.styles$DashboardComponent*/get styles$DashboardComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _expr_0 = Symbol('_expr_0');
  const _text_2 = Symbol('_text_2');
  let const$;
  src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0 = class ViewDashboardComponent0 extends src__core__linker__app_view.AppView$(src__components__dashborad__dashboard_component.DashboardComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createAndAppend(doc, "h1", parentRenderNode);
      let _text_1 = html.Text.new("Hello ");
      _el_0[$append](_text_1);
      this[_text_2] = html.Text.new("");
      _el_0[$append](this[_text_2]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.name;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_2][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_text_2] = null;
    src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("dashboard-component"));
    let t = src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0._renderType;
    t == null ? src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:avocado_web/lib/src/components/dashborad/dashboard_component.dart" : null, src__core__metadata__view.ViewEncapsulation.None, src__components__dashborad__dashboard_component$46template.styles$DashboardComponent) : t;
    this.setupComponentType(src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0._renderType);
  }).prototype = src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0.prototype;
  dart.addTypeTests(src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0);
  dart.setMethodSignature(src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0, () => ({
    __proto__: dart.getMethods(src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__dashborad__dashboard_component.DashboardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0, () => ({
    __proto__: dart.getFields(src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_text_2]: dart.fieldType(html.Text)
  }));
  dart.defineLazy(src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0, {
    /*src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__dashborad__dashboard_component$46template.viewFactory_DashboardComponent0 = function(parentView, parentIndex) {
    return new src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__dashborad__dashboard_component$46template, {
    /*src__components__dashborad__dashboard_component$46template._DashboardComponentNgFactory*/get _DashboardComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDashboardComponent()).new("dashboard-component", dart.fn(src__components__dashborad__dashboard_component$46template.viewFactory_DashboardComponentHost0, AppViewAndintToAppViewOfDashboardComponent())));
    }
  });
  dart.copyProperties(src__components__dashborad__dashboard_component$46template, {
    get DashboardComponentNgFactory() {
      return src__components__dashborad__dashboard_component$46template._DashboardComponentNgFactory;
    }
  });
  dart.defineLazy(src__components__dashborad__dashboard_component$46template, {
    /*src__components__dashborad__dashboard_component$46template.styles$DashboardComponentHost*/get styles$DashboardComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _DashboardComponent_0_5 = Symbol('_DashboardComponent_0_5');
  src__components__dashborad__dashboard_component$46template._ViewDashboardComponentHost0 = class _ViewDashboardComponentHost0 extends src__core__linker__app_view.AppView$(src__components__dashborad__dashboard_component.DashboardComponent) {
    build() {
      this[_compView_0] = new src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DashboardComponent_0_5] = new src__components__dashborad__dashboard_component.DashboardComponent.new();
      this[_compView_0].create(this[_DashboardComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfDashboardComponent()).new(0, this, this.rootEl, this[_DashboardComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
    }
  };
  (src__components__dashborad__dashboard_component$46template._ViewDashboardComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DashboardComponent_0_5] = null;
    src__components__dashborad__dashboard_component$46template._ViewDashboardComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__dashborad__dashboard_component$46template._ViewDashboardComponentHost0.prototype;
  dart.addTypeTests(src__components__dashborad__dashboard_component$46template._ViewDashboardComponentHost0);
  dart.setMethodSignature(src__components__dashborad__dashboard_component$46template._ViewDashboardComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__dashborad__dashboard_component$46template._ViewDashboardComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__dashborad__dashboard_component.DashboardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__dashborad__dashboard_component$46template._ViewDashboardComponentHost0, () => ({
    __proto__: dart.getFields(src__components__dashborad__dashboard_component$46template._ViewDashboardComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__components__dashborad__dashboard_component$46template.ViewDashboardComponent0),
    [_DashboardComponent_0_5]: dart.fieldType(src__components__dashborad__dashboard_component.DashboardComponent)
  }));
  src__components__dashborad__dashboard_component$46template.viewFactory_DashboardComponentHost0 = function(parentView, parentIndex) {
    return new src__components__dashborad__dashboard_component$46template._ViewDashboardComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__dashborad__dashboard_component$46template, {
    /*src__components__dashborad__dashboard_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__dashborad__dashboard_component$46template.initReflector = function() {
    if (dart.test(src__components__dashborad__dashboard_component$46template._visited)) {
      return;
    }
    src__components__dashborad__dashboard_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__dashborad__dashboard_component.DashboardComponent), src__components__dashborad__dashboard_component$46template.DashboardComponentNgFactory);
    angular$46template.initReflector();
  };
  src__components__feed__post_component.PostComponent = class PostComponent extends core.Object {
    get post() {
      return this[post];
    }
    set post(value) {
      this[post] = value;
    }
  };
  (src__components__feed__post_component.PostComponent.new = function() {
    this[post] = null;
  }).prototype = src__components__feed__post_component.PostComponent.prototype;
  dart.addTypeTests(src__components__feed__post_component.PostComponent);
  const post = Symbol("PostComponent.post");
  dart.setFieldSignature(src__components__feed__post_component.PostComponent, () => ({
    __proto__: dart.getFields(src__components__feed__post_component.PostComponent.__proto__),
    post: dart.fieldType(src__models__posts.PostInfo)
  }));
  src__components__feed__feed_component.FeedComponent = class FeedComponent extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get bloc() {
      return this[bloc];
    }
    set bloc(value) {
      this[bloc] = value;
    }
    get store() {
      return this[store$];
    }
    set store(value) {
      super.store = value;
    }
  };
  (src__components__feed__feed_component.FeedComponent.new = function(store) {
    this[name$] = "Angular";
    this[bloc] = null;
    this[store$] = store;
    this.bloc = new src__blocs__FeedBLoC.FeedBLoC.new(this.store.postsStore);
  }).prototype = src__components__feed__feed_component.FeedComponent.prototype;
  dart.addTypeTests(src__components__feed__feed_component.FeedComponent);
  const name$ = Symbol("FeedComponent.name");
  const bloc = Symbol("FeedComponent.bloc");
  const store$ = Symbol("FeedComponent.store");
  dart.setFieldSignature(src__components__feed__feed_component.FeedComponent, () => ({
    __proto__: dart.getFields(src__components__feed__feed_component.FeedComponent.__proto__),
    name: dart.fieldType(core.String),
    bloc: dart.fieldType(src__blocs__FeedBLoC.FeedBLoC),
    store: dart.finalFieldType(src__services__store.StoreService)
  }));
  src__components__clients__clients_component.ClientsComponent = class ClientsComponent extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      this[name$0] = value;
    }
  };
  (src__components__clients__clients_component.ClientsComponent.new = function() {
    this[name$0] = "Clients";
  }).prototype = src__components__clients__clients_component.ClientsComponent.prototype;
  dart.addTypeTests(src__components__clients__clients_component.ClientsComponent);
  const name$0 = Symbol("ClientsComponent.name");
  dart.setFieldSignature(src__components__clients__clients_component.ClientsComponent, () => ({
    __proto__: dart.getFields(src__components__clients__clients_component.ClientsComponent.__proto__),
    name: dart.fieldType(core.String)
  }));
  dart.defineLazy(src__components__feed__post_component$46scss$46css$46shim, {
    /*src__components__feed__post_component$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{display:flex;margin:2px}.demo-size._ngcontent-%ID%{width:352px}.demo-card__title._ngcontent-%ID%{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:rgba(0,0,0,0.87);font:500 20px/32px Roboto,Noto,sans-serif;letter-spacing:0.005em;line-height:1em;margin:0}.demo-card__subtitle._ngcontent-%ID%{color:rgba(0,0,0,0.87);font:400 15px/24px Roboto,Noto,sans-serif;letter-spacing:0.01em;margin:0}.demo-card__media._ngcontent-%ID%{background-image:url(\"http://material-components-web.appspot.com/images/16-9.jpg\")}.demo-card__primary._ngcontent-%ID%{padding:16px}.demo-card__secondary._ngcontent-%ID%{color:rgba(0,0,0,0.87);font:400 13px/20px Roboto,Noto,sans-serif;letter-spacing:0.01em;padding:0 16px 8px}section._ngcontent-%ID%{display:block}section._ngcontent-%ID% + section._ngcontent-%ID%{margin-left:32px}"];
    }
  });
  dart.defineLazy(src__components__feed__post_component$46template, {
    /*src__components__feed__post_component$46template.styles$PostComponent*/get styles$PostComponent() {
      return [css__mdc_web__card__mdc$45card$46scss$46css$46shim.styles, src__components__feed__post_component$46scss$46css$46shim.styles];
    }
  });
  const _NgStyle_1_5 = Symbol('_NgStyle_1_5');
  const _compView_10 = Symbol('_compView_10');
  const _AcxDarkTheme_10_5 = Symbol('_AcxDarkTheme_10_5');
  const _MaterialButtonComponent_10_6 = Symbol('_MaterialButtonComponent_10_6');
  const _compView_12 = Symbol('_compView_12');
  const _AcxDarkTheme_12_5 = Symbol('_AcxDarkTheme_12_5');
  const _MaterialButtonComponent_12_6 = Symbol('_MaterialButtonComponent_12_6');
  const _compView_15 = Symbol('_compView_15');
  const _AcxDarkTheme_15_5 = Symbol('_AcxDarkTheme_15_5');
  const _MaterialButtonComponent_15_6 = Symbol('_MaterialButtonComponent_15_6');
  const _compView_16 = Symbol('_compView_16');
  const _MaterialIconComponent_16_5 = Symbol('_MaterialIconComponent_16_5');
  const _compView_17 = Symbol('_compView_17');
  const _AcxDarkTheme_17_5 = Symbol('_AcxDarkTheme_17_5');
  const _MaterialButtonComponent_17_6 = Symbol('_MaterialButtonComponent_17_6');
  const _compView_18 = Symbol('_compView_18');
  const _MaterialIconComponent_18_5 = Symbol('_MaterialIconComponent_18_5');
  const _compView_19 = Symbol('_compView_19');
  const _AcxDarkTheme_19_5 = Symbol('_AcxDarkTheme_19_5');
  const _MaterialButtonComponent_19_6 = Symbol('_MaterialButtonComponent_19_6');
  const _compView_20 = Symbol('_compView_20');
  const _MaterialIconComponent_20_5 = Symbol('_MaterialIconComponent_20_5');
  const _map_0 = Symbol('_map_0');
  const _expr_0$ = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _text_5 = Symbol('_text_5');
  const _text_7 = Symbol('_text_7');
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  src__components__feed__post_component$46template.ViewPostComponent0 = class ViewPostComponent0 extends src__core__linker__app_view.AppView$(src__components__feed__post_component.PostComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      _el_0.className = "mdc-card mdc-card--outlined demo-size";
      this.addShimC(_el_0);
      let _el_1 = src__core__linker__app_view.createDivAndAppend(doc, _el_0);
      _el_1.className = "mdc-card__media mdc-card__media--16-9 demo-card__media";
      this.addShimC(_el_1);
      this[_NgStyle_1_5] = new src__common__directives__ng_style.NgStyle.new(_el_1);
      let _el_2 = src__core__linker__app_view.createDivAndAppend(doc, _el_0);
      _el_2.className = "demo-card__primary";
      this.addShimC(_el_2);
      let _el_3 = src__core__linker__app_view.createAndAppend(doc, "h3", _el_2);
      _el_3.className = "demo-card__subtitle";
      this.addShimE(_el_3);
      let _text_4 = html.Text.new("by ");
      _el_3[$append](_text_4);
      this[_text_5] = html.Text.new("");
      _el_3[$append](this[_text_5]);
      let _el_6 = src__core__linker__app_view.createDivAndAppend(doc, _el_0);
      _el_6.className = "demo-card__secondary";
      this.addShimC(_el_6);
      this[_text_7] = html.Text.new("");
      _el_6[$append](this[_text_7]);
      let _el_8 = src__core__linker__app_view.createDivAndAppend(doc, _el_0);
      _el_8.className = "mdc-card__actions";
      this.addShimC(_el_8);
      let _el_9 = src__core__linker__app_view.createDivAndAppend(doc, _el_8);
      _el_9.className = "mdc-card__action-buttons";
      this.addShimC(_el_9);
      this[_compView_10] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 10);
      let _el_10 = this[_compView_10].rootEl;
      _el_9[$append](_el_10);
      this.addShimC(_el_10);
      this[_AcxDarkTheme_10_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_10_6] = new material_button__material_button.MaterialButtonComponent.new(_el_10, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_10_5]), this[_compView_10].ref, null);
      let _text_11 = html.Text.new("Read");
      this[_compView_10].create(this[_MaterialButtonComponent_10_6], [JSArrayOfText().of([_text_11])]);
      this[_compView_12] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 12);
      let _el_12 = this[_compView_12].rootEl;
      _el_9[$append](_el_12);
      this.addShimC(_el_12);
      this[_AcxDarkTheme_12_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$3 || (const$3 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_12_6] = new material_button__material_button.MaterialButtonComponent.new(_el_12, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_12_5]), this[_compView_12].ref, null);
      let _text_13 = html.Text.new("Bookmark");
      this[_compView_12].create(this[_MaterialButtonComponent_12_6], [JSArrayOfText().of([_text_13])]);
      let _el_14 = src__core__linker__app_view.createDivAndAppend(doc, _el_8);
      _el_14.className = "mdc-card__action-icons";
      this.addShimC(_el_14);
      this[_compView_15] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 15);
      let _el_15 = this[_compView_15].rootEl;
      _el_14[$append](_el_15);
      this.createAttr(_el_15, "icon", "");
      this.addShimC(_el_15);
      this[_AcxDarkTheme_15_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$4 || (const$4 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_15_6] = new material_button__material_button.MaterialButtonComponent.new(_el_15, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_15_5]), this[_compView_15].ref, null);
      this[_compView_16] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 16);
      let _el_16 = this[_compView_16].rootEl;
      this.createAttr(_el_16, "icon", "favorite_border");
      this.addShimC(_el_16);
      this[_MaterialIconComponent_16_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_16);
      this[_compView_16].create(this[_MaterialIconComponent_16_5], []);
      this[_compView_15].create(this[_MaterialButtonComponent_15_6], [JSArrayOfHtmlElement().of([_el_16])]);
      this[_compView_17] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 17);
      let _el_17 = this[_compView_17].rootEl;
      _el_14[$append](_el_17);
      this.createAttr(_el_17, "icon", "");
      this.addShimC(_el_17);
      this[_AcxDarkTheme_17_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$6 || (const$6 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$7 || (const$7 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_17_6] = new material_button__material_button.MaterialButtonComponent.new(_el_17, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_17_5]), this[_compView_17].ref, null);
      this[_compView_18] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 18);
      let _el_18 = this[_compView_18].rootEl;
      this.createAttr(_el_18, "icon", "share");
      this.addShimC(_el_18);
      this[_MaterialIconComponent_18_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_18);
      this[_compView_18].create(this[_MaterialIconComponent_18_5], []);
      this[_compView_17].create(this[_MaterialButtonComponent_17_6], [JSArrayOfHtmlElement().of([_el_18])]);
      this[_compView_19] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 19);
      let _el_19 = this[_compView_19].rootEl;
      _el_14[$append](_el_19);
      this.createAttr(_el_19, "icon", "");
      this.addShimC(_el_19);
      this[_AcxDarkTheme_19_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$8 || (const$8 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$9 || (const$9 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_19_6] = new material_button__material_button.MaterialButtonComponent.new(_el_19, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_19_5]), this[_compView_19].ref, null);
      this[_compView_20] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 20);
      let _el_20 = this[_compView_20].rootEl;
      this.createAttr(_el_20, "icon", "more_vert");
      this.addShimC(_el_20);
      this[_MaterialIconComponent_20_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_20);
      this[_compView_20].create(this[_MaterialIconComponent_20_5], []);
      this[_compView_19].create(this[_MaterialButtonComponent_19_6], [JSArrayOfHtmlElement().of([_el_20])]);
      this[_map_0] = src__core__linker__app_view_utils.pureProxy1(MapOfString$String(), core.String, dart.fn(p0 => new (IdentityMapOfString$String()).from(["background-image", p0]), StringToMapOfString$String()));
      this.init(const$10 || (const$10 = dart.constList([], dart.dynamic)), null);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 10 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 11) {
        return this[_AcxDarkTheme_10_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 10 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 11) {
        return this[_MaterialButtonComponent_10_6];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 12 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 13) {
        return this[_AcxDarkTheme_12_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 12 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 13) {
        return this[_MaterialButtonComponent_12_6];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 15 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 16) {
        return this[_AcxDarkTheme_15_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 15 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 16) {
        return this[_MaterialButtonComponent_15_6];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 17 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 18) {
        return this[_AcxDarkTheme_17_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 17 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 18) {
        return this[_MaterialButtonComponent_17_6];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 19 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 20) {
        return this[_AcxDarkTheme_19_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 19 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 20) {
        return this[_MaterialButtonComponent_19_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let currVal_0 = this[_map_0]("url(" + dart.notNull(_ctx.post == null ? null : _ctx.post.image) + ")");
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_NgStyle_1_5].rawStyle = currVal_0;
        this[_expr_0$] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgStyle_1_5].ngDoCheck();
      }
      changed = false;
      if (changed) {
        this[_compView_10].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_10_6].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_12].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_12_6].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_15].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_15_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_16_5].icon = "favorite_border";
        changed = true;
      }
      if (changed) {
        this[_compView_16].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_17].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_17_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_18_5].icon = "share";
        changed = true;
      }
      if (changed) {
        this[_compView_18].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_19].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_19_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_20_5].icon = "more_vert";
        changed = true;
      }
      if (changed) {
        this[_compView_20].markAsCheckOnce();
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0((_ctx.post == null ? null : _ctx.post.user) == null ? null : (_ctx.post == null ? null : _ctx.post.user).displayName);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_5][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(_ctx.post == null ? null : _ctx.post.content);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_text_7][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_10].detectHostChanges(firstCheck);
      this[_compView_12].detectHostChanges(firstCheck);
      this[_compView_15].detectHostChanges(firstCheck);
      this[_compView_17].detectHostChanges(firstCheck);
      this[_compView_19].detectHostChanges(firstCheck);
      this[_compView_10].detectChanges();
      this[_compView_12].detectChanges();
      this[_compView_15].detectChanges();
      this[_compView_16].detectChanges();
      this[_compView_17].detectChanges();
      this[_compView_18].detectChanges();
      this[_compView_19].detectChanges();
      this[_compView_20].detectChanges();
    }
    destroyInternal() {
      this[_compView_10].destroy();
      this[_compView_12].destroy();
      this[_compView_15].destroy();
      this[_compView_16].destroy();
      this[_compView_17].destroy();
      this[_compView_18].destroy();
      this[_compView_19].destroy();
      this[_compView_20].destroy();
    }
  };
  (src__components__feed__post_component$46template.ViewPostComponent0.new = function(parentView, parentIndex) {
    this[_NgStyle_1_5] = null;
    this[_compView_10] = null;
    this[_AcxDarkTheme_10_5] = null;
    this[_MaterialButtonComponent_10_6] = null;
    this[_compView_12] = null;
    this[_AcxDarkTheme_12_5] = null;
    this[_MaterialButtonComponent_12_6] = null;
    this[_compView_15] = null;
    this[_AcxDarkTheme_15_5] = null;
    this[_MaterialButtonComponent_15_6] = null;
    this[_compView_16] = null;
    this[_MaterialIconComponent_16_5] = null;
    this[_compView_17] = null;
    this[_AcxDarkTheme_17_5] = null;
    this[_MaterialButtonComponent_17_6] = null;
    this[_compView_18] = null;
    this[_MaterialIconComponent_18_5] = null;
    this[_compView_19] = null;
    this[_AcxDarkTheme_19_5] = null;
    this[_MaterialButtonComponent_19_6] = null;
    this[_compView_20] = null;
    this[_MaterialIconComponent_20_5] = null;
    this[_map_0] = null;
    this[_expr_0$] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_text_5] = null;
    this[_text_7] = null;
    src__components__feed__post_component$46template.ViewPostComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("post-component"));
    let t = src__components__feed__post_component$46template.ViewPostComponent0._renderType;
    t == null ? src__components__feed__post_component$46template.ViewPostComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:avocado_web/lib/src/components/feed/post_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__components__feed__post_component$46template.styles$PostComponent) : t;
    this.setupComponentType(src__components__feed__post_component$46template.ViewPostComponent0._renderType);
  }).prototype = src__components__feed__post_component$46template.ViewPostComponent0.prototype;
  dart.addTypeTests(src__components__feed__post_component$46template.ViewPostComponent0);
  dart.setMethodSignature(src__components__feed__post_component$46template.ViewPostComponent0, () => ({
    __proto__: dart.getMethods(src__components__feed__post_component$46template.ViewPostComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__feed__post_component.PostComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__feed__post_component$46template.ViewPostComponent0, () => ({
    __proto__: dart.getFields(src__components__feed__post_component$46template.ViewPostComponent0.__proto__),
    [_NgStyle_1_5]: dart.fieldType(src__common__directives__ng_style.NgStyle),
    [_compView_10]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_10_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_10_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_12]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_12_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_12_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_15]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_15_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_15_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_16]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_16_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_17]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_17_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_17_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_18]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_18_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_19]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_19_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_19_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_20]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_20_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_map_0]: dart.fieldType(StringToMapOfString$String()),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_text_5]: dart.fieldType(html.Text),
    [_text_7]: dart.fieldType(html.Text)
  }));
  dart.defineLazy(src__components__feed__post_component$46template.ViewPostComponent0, {
    /*src__components__feed__post_component$46template.ViewPostComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__feed__post_component$46template.viewFactory_PostComponent0 = function(parentView, parentIndex) {
    return new src__components__feed__post_component$46template.ViewPostComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__feed__post_component$46template, {
    /*src__components__feed__post_component$46template._PostComponentNgFactory*/get _PostComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfPostComponent()).new("post-component", dart.fn(src__components__feed__post_component$46template.viewFactory_PostComponentHost0, AppViewAndintToAppViewOfPostComponent())));
    }
  });
  dart.copyProperties(src__components__feed__post_component$46template, {
    get PostComponentNgFactory() {
      return src__components__feed__post_component$46template._PostComponentNgFactory;
    }
  });
  dart.defineLazy(src__components__feed__post_component$46template, {
    /*src__components__feed__post_component$46template.styles$PostComponentHost*/get styles$PostComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$ = Symbol('_compView_0');
  const _PostComponent_0_5 = Symbol('_PostComponent_0_5');
  src__components__feed__post_component$46template._ViewPostComponentHost0 = class _ViewPostComponentHost0 extends src__core__linker__app_view.AppView$(src__components__feed__post_component.PostComponent) {
    build() {
      this[_compView_0$] = new src__components__feed__post_component$46template.ViewPostComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_PostComponent_0_5] = new src__components__feed__post_component.PostComponent.new();
      this[_compView_0$].create(this[_PostComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfPostComponent()).new(0, this, this.rootEl, this[_PostComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroy();
    }
  };
  (src__components__feed__post_component$46template._ViewPostComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_PostComponent_0_5] = null;
    src__components__feed__post_component$46template._ViewPostComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__feed__post_component$46template._ViewPostComponentHost0.prototype;
  dart.addTypeTests(src__components__feed__post_component$46template._ViewPostComponentHost0);
  dart.setMethodSignature(src__components__feed__post_component$46template._ViewPostComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__feed__post_component$46template._ViewPostComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__feed__post_component.PostComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__feed__post_component$46template._ViewPostComponentHost0, () => ({
    __proto__: dart.getFields(src__components__feed__post_component$46template._ViewPostComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__components__feed__post_component$46template.ViewPostComponent0),
    [_PostComponent_0_5]: dart.fieldType(src__components__feed__post_component.PostComponent)
  }));
  src__components__feed__post_component$46template.viewFactory_PostComponentHost0 = function(parentView, parentIndex) {
    return new src__components__feed__post_component$46template._ViewPostComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__feed__post_component$46template, {
    /*src__components__feed__post_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__feed__post_component$46template.initReflector = function() {
    if (dart.test(src__components__feed__post_component$46template._visited)) {
      return;
    }
    src__components__feed__post_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__feed__post_component.PostComponent), src__components__feed__post_component$46template.PostComponentNgFactory);
    angular$46template.initReflector();
    angular_components$46template.initReflector();
  };
  dart.defineLazy(src__components__feed__feed_component$46template, {
    /*src__components__feed__feed_component$46template.styles$FeedComponent*/get styles$FeedComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _appEl_1 = Symbol('_appEl_1');
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  const _expr_0$0 = Symbol('_expr_0');
  const _pipe_async_0 = Symbol('_pipe_async_0');
  let const$11;
  src__components__feed__feed_component$46template.ViewFeedComponent0 = class ViewFeedComponent0 extends src__core__linker__app_view.AppView$(src__components__feed__feed_component.FeedComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(_el_0, "style", "display: flex;flex-wrap: wrap;");
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      _el_0[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(src__components__feed__feed_component$46template.viewFactory_FeedComponent1, AppViewAndintToAppViewOfFeedComponent()));
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this[_pipe_async_0] = new src__common__pipes__async_pipe.AsyncPipe.new(this.ref);
      this.init(const$11 || (const$11 = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = this[_pipe_async_0].transform(_ctx.bloc.posts);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_NgFor_1_9].ngForOf = core.Iterable._check(currVal_0);
        this[_expr_0$0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_pipe_async_0].ngOnDestroy();
    }
  };
  (src__components__feed__feed_component$46template.ViewFeedComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0$0] = null;
    this[_pipe_async_0] = null;
    src__components__feed__feed_component$46template.ViewFeedComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("feed-component"));
    let t = src__components__feed__feed_component$46template.ViewFeedComponent0._renderType;
    t == null ? src__components__feed__feed_component$46template.ViewFeedComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:avocado_web/lib/src/components/feed/feed_component.dart" : null, src__core__metadata__view.ViewEncapsulation.None, src__components__feed__feed_component$46template.styles$FeedComponent) : t;
    this.setupComponentType(src__components__feed__feed_component$46template.ViewFeedComponent0._renderType);
  }).prototype = src__components__feed__feed_component$46template.ViewFeedComponent0.prototype;
  dart.addTypeTests(src__components__feed__feed_component$46template.ViewFeedComponent0);
  dart.setMethodSignature(src__components__feed__feed_component$46template.ViewFeedComponent0, () => ({
    __proto__: dart.getMethods(src__components__feed__feed_component$46template.ViewFeedComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__feed__feed_component.FeedComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__feed__feed_component$46template.ViewFeedComponent0, () => ({
    __proto__: dart.getFields(src__components__feed__feed_component$46template.ViewFeedComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_pipe_async_0]: dart.fieldType(src__common__pipes__async_pipe.AsyncPipe)
  }));
  dart.defineLazy(src__components__feed__feed_component$46template.ViewFeedComponent0, {
    /*src__components__feed__feed_component$46template.ViewFeedComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__feed__feed_component$46template.viewFactory_FeedComponent0 = function(parentView, parentIndex) {
    return new src__components__feed__feed_component$46template.ViewFeedComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__feed__feed_component$46template, {
    /*src__components__feed__feed_component$46template._FeedComponentNgFactory*/get _FeedComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfFeedComponent()).new("feed-component", dart.fn(src__components__feed__feed_component$46template.viewFactory_FeedComponentHost0, AppViewAndintToAppViewOfFeedComponent())));
    }
  });
  dart.copyProperties(src__components__feed__feed_component$46template, {
    get FeedComponentNgFactory() {
      return src__components__feed__feed_component$46template._FeedComponentNgFactory;
    }
  });
  const _compView_0$0 = Symbol('_compView_0');
  const _PostComponent_0_5$ = Symbol('_PostComponent_0_5');
  src__components__feed__feed_component$46template._ViewFeedComponent1 = class _ViewFeedComponent1 extends src__core__linker__app_view.AppView$(src__components__feed__feed_component.FeedComponent) {
    build() {
      this[_compView_0$0] = new src__components__feed__post_component$46template.ViewPostComponent0.new(this, 0);
      let _el_0 = this[_compView_0$0].rootEl;
      this[_PostComponent_0_5$] = new src__components__feed__post_component.PostComponent.new();
      this[_compView_0$0].create(this[_PostComponent_0_5$], []);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let local_post = this.locals[$_get]("$implicit");
      let currVal_0 = local_post;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_PostComponent_0_5$].post = src__models__posts.PostInfo._check(currVal_0);
        this[_expr_0$0] = currVal_0;
      }
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroy();
    }
  };
  (src__components__feed__feed_component$46template._ViewFeedComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_PostComponent_0_5$] = null;
    this[_expr_0$0] = null;
    src__components__feed__feed_component$46template._ViewFeedComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__components__feed__feed_component$46template.ViewFeedComponent0._renderType;
  }).prototype = src__components__feed__feed_component$46template._ViewFeedComponent1.prototype;
  dart.addTypeTests(src__components__feed__feed_component$46template._ViewFeedComponent1);
  dart.setMethodSignature(src__components__feed__feed_component$46template._ViewFeedComponent1, () => ({
    __proto__: dart.getMethods(src__components__feed__feed_component$46template._ViewFeedComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__feed__feed_component.FeedComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__feed__feed_component$46template._ViewFeedComponent1, () => ({
    __proto__: dart.getFields(src__components__feed__feed_component$46template._ViewFeedComponent1.__proto__),
    [_compView_0$0]: dart.fieldType(src__components__feed__post_component$46template.ViewPostComponent0),
    [_PostComponent_0_5$]: dart.fieldType(src__components__feed__post_component.PostComponent),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  src__components__feed__feed_component$46template.viewFactory_FeedComponent1 = function(parentView, parentIndex) {
    return new src__components__feed__feed_component$46template._ViewFeedComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__feed__feed_component$46template, {
    /*src__components__feed__feed_component$46template.styles$FeedComponentHost*/get styles$FeedComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _FeedComponent_0_5 = Symbol('_FeedComponent_0_5');
  src__components__feed__feed_component$46template._ViewFeedComponentHost0 = class _ViewFeedComponentHost0 extends src__core__linker__app_view.AppView$(src__components__feed__feed_component.FeedComponent) {
    build() {
      this[_compView_0$0] = new src__components__feed__feed_component$46template.ViewFeedComponent0.new(this, 0);
      this.rootEl = this[_compView_0$0].rootEl;
      this[_FeedComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__components__feed__feed_component.FeedComponent, dart.wrapType(src__components__feed__feed_component.FeedComponent), dart.fn(() => new src__components__feed__feed_component.FeedComponent.new(src__services__store.StoreService._check(this.injectorGet(dart.wrapType(src__services__store.StoreService), this.viewData.parentIndex))), VoidToFeedComponent())) : new src__components__feed__feed_component.FeedComponent.new(src__services__store.StoreService._check(this.injectorGet(dart.wrapType(src__services__store.StoreService), this.viewData.parentIndex)));
      this[_compView_0$0].create(this[_FeedComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfFeedComponent()).new(0, this, this.rootEl, this[_FeedComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroy();
    }
  };
  (src__components__feed__feed_component$46template._ViewFeedComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_FeedComponent_0_5] = null;
    src__components__feed__feed_component$46template._ViewFeedComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__feed__feed_component$46template._ViewFeedComponentHost0.prototype;
  dart.addTypeTests(src__components__feed__feed_component$46template._ViewFeedComponentHost0);
  dart.setMethodSignature(src__components__feed__feed_component$46template._ViewFeedComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__feed__feed_component$46template._ViewFeedComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__feed__feed_component.FeedComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__feed__feed_component$46template._ViewFeedComponentHost0, () => ({
    __proto__: dart.getFields(src__components__feed__feed_component$46template._ViewFeedComponentHost0.__proto__),
    [_compView_0$0]: dart.fieldType(src__components__feed__feed_component$46template.ViewFeedComponent0),
    [_FeedComponent_0_5]: dart.fieldType(src__components__feed__feed_component.FeedComponent)
  }));
  src__components__feed__feed_component$46template.viewFactory_FeedComponentHost0 = function(parentView, parentIndex) {
    return new src__components__feed__feed_component$46template._ViewFeedComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__feed__feed_component$46template, {
    /*src__components__feed__feed_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__feed__feed_component$46template.initReflector = function() {
    if (dart.test(src__components__feed__feed_component$46template._visited)) {
      return;
    }
    src__components__feed__feed_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__feed__feed_component.FeedComponent), src__components__feed__feed_component$46template.FeedComponentNgFactory);
    angular$46template.initReflector();
    src__components__feed__post_component$46template.initReflector();
  };
  dart.defineLazy(src__components__clients__clients_component$46template, {
    /*src__components__clients__clients_component$46template.styles$ClientsComponent*/get styles$ClientsComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _expr_0$1 = Symbol('_expr_0');
  const _text_2$ = Symbol('_text_2');
  let const$12;
  src__components__clients__clients_component$46template.ViewClientsComponent0 = class ViewClientsComponent0 extends src__core__linker__app_view.AppView$(src__components__clients__clients_component.ClientsComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createAndAppend(doc, "h1", parentRenderNode);
      let _text_1 = html.Text.new("Hello ");
      _el_0[$append](_text_1);
      this[_text_2$] = html.Text.new("");
      _el_0[$append](this[_text_2$]);
      this.init(const$12 || (const$12 = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.name;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
        this[_text_2$][$text] = currVal_0;
        this[_expr_0$1] = currVal_0;
      }
    }
  };
  (src__components__clients__clients_component$46template.ViewClientsComponent0.new = function(parentView, parentIndex) {
    this[_expr_0$1] = null;
    this[_text_2$] = null;
    src__components__clients__clients_component$46template.ViewClientsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("clients-component"));
    let t = src__components__clients__clients_component$46template.ViewClientsComponent0._renderType;
    t == null ? src__components__clients__clients_component$46template.ViewClientsComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:avocado_web/lib/src/components/clients/clients_component.dart" : null, src__core__metadata__view.ViewEncapsulation.None, src__components__clients__clients_component$46template.styles$ClientsComponent) : t;
    this.setupComponentType(src__components__clients__clients_component$46template.ViewClientsComponent0._renderType);
  }).prototype = src__components__clients__clients_component$46template.ViewClientsComponent0.prototype;
  dart.addTypeTests(src__components__clients__clients_component$46template.ViewClientsComponent0);
  dart.setMethodSignature(src__components__clients__clients_component$46template.ViewClientsComponent0, () => ({
    __proto__: dart.getMethods(src__components__clients__clients_component$46template.ViewClientsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__clients__clients_component.ClientsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__clients__clients_component$46template.ViewClientsComponent0, () => ({
    __proto__: dart.getFields(src__components__clients__clients_component$46template.ViewClientsComponent0.__proto__),
    [_expr_0$1]: dart.fieldType(dart.dynamic),
    [_text_2$]: dart.fieldType(html.Text)
  }));
  dart.defineLazy(src__components__clients__clients_component$46template.ViewClientsComponent0, {
    /*src__components__clients__clients_component$46template.ViewClientsComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__clients__clients_component$46template.viewFactory_ClientsComponent0 = function(parentView, parentIndex) {
    return new src__components__clients__clients_component$46template.ViewClientsComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__clients__clients_component$46template, {
    /*src__components__clients__clients_component$46template._ClientsComponentNgFactory*/get _ClientsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfClientsComponent()).new("clients-component", dart.fn(src__components__clients__clients_component$46template.viewFactory_ClientsComponentHost0, AppViewAndintToAppViewOfClientsComponent())));
    }
  });
  dart.copyProperties(src__components__clients__clients_component$46template, {
    get ClientsComponentNgFactory() {
      return src__components__clients__clients_component$46template._ClientsComponentNgFactory;
    }
  });
  dart.defineLazy(src__components__clients__clients_component$46template, {
    /*src__components__clients__clients_component$46template.styles$ClientsComponentHost*/get styles$ClientsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$1 = Symbol('_compView_0');
  const _ClientsComponent_0_5 = Symbol('_ClientsComponent_0_5');
  src__components__clients__clients_component$46template._ViewClientsComponentHost0 = class _ViewClientsComponentHost0 extends src__core__linker__app_view.AppView$(src__components__clients__clients_component.ClientsComponent) {
    build() {
      this[_compView_0$1] = new src__components__clients__clients_component$46template.ViewClientsComponent0.new(this, 0);
      this.rootEl = this[_compView_0$1].rootEl;
      this[_ClientsComponent_0_5] = new src__components__clients__clients_component.ClientsComponent.new();
      this[_compView_0$1].create(this[_ClientsComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfClientsComponent()).new(0, this, this.rootEl, this[_ClientsComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$1].destroy();
    }
  };
  (src__components__clients__clients_component$46template._ViewClientsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$1] = null;
    this[_ClientsComponent_0_5] = null;
    src__components__clients__clients_component$46template._ViewClientsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__clients__clients_component$46template._ViewClientsComponentHost0.prototype;
  dart.addTypeTests(src__components__clients__clients_component$46template._ViewClientsComponentHost0);
  dart.setMethodSignature(src__components__clients__clients_component$46template._ViewClientsComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__clients__clients_component$46template._ViewClientsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__clients__clients_component.ClientsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__clients__clients_component$46template._ViewClientsComponentHost0, () => ({
    __proto__: dart.getFields(src__components__clients__clients_component$46template._ViewClientsComponentHost0.__proto__),
    [_compView_0$1]: dart.fieldType(src__components__clients__clients_component$46template.ViewClientsComponent0),
    [_ClientsComponent_0_5]: dart.fieldType(src__components__clients__clients_component.ClientsComponent)
  }));
  src__components__clients__clients_component$46template.viewFactory_ClientsComponentHost0 = function(parentView, parentIndex) {
    return new src__components__clients__clients_component$46template._ViewClientsComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__clients__clients_component$46template, {
    /*src__components__clients__clients_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__clients__clients_component$46template.initReflector = function() {
    if (dart.test(src__components__clients__clients_component$46template._visited)) {
      return;
    }
    src__components__clients__clients_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__clients__clients_component.ClientsComponent), src__components__clients__clients_component$46template.ClientsComponentNgFactory);
    angular$46template.initReflector();
    src__components__feed__feed_component$46template.initReflector();
  };
  src__components__clients__client_component.ClientComponent = class ClientComponent extends core.Object {
    get name() {
      return this[name$1];
    }
    set name(value) {
      this[name$1] = value;
    }
  };
  (src__components__clients__client_component.ClientComponent.new = function() {
    this[name$1] = "Client";
  }).prototype = src__components__clients__client_component.ClientComponent.prototype;
  dart.addTypeTests(src__components__clients__client_component.ClientComponent);
  const name$1 = Symbol("ClientComponent.name");
  dart.setFieldSignature(src__components__clients__client_component.ClientComponent, () => ({
    __proto__: dart.getFields(src__components__clients__client_component.ClientComponent.__proto__),
    name: dart.fieldType(core.String)
  }));
  dart.defineLazy(src__components__clients__client_component$46template, {
    /*src__components__clients__client_component$46template.styles$ClientComponent*/get styles$ClientComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _expr_0$2 = Symbol('_expr_0');
  const _text_2$0 = Symbol('_text_2');
  let const$13;
  src__components__clients__client_component$46template.ViewClientComponent0 = class ViewClientComponent0 extends src__core__linker__app_view.AppView$(src__components__clients__client_component.ClientComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createAndAppend(doc, "h1", parentRenderNode);
      let _text_1 = html.Text.new("Hello ");
      _el_0[$append](_text_1);
      this[_text_2$0] = html.Text.new("");
      _el_0[$append](this[_text_2$0]);
      this.init(const$13 || (const$13 = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.name;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$2], currVal_0))) {
        this[_text_2$0][$text] = currVal_0;
        this[_expr_0$2] = currVal_0;
      }
    }
  };
  (src__components__clients__client_component$46template.ViewClientComponent0.new = function(parentView, parentIndex) {
    this[_expr_0$2] = null;
    this[_text_2$0] = null;
    src__components__clients__client_component$46template.ViewClientComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("client-component"));
    let t = src__components__clients__client_component$46template.ViewClientComponent0._renderType;
    t == null ? src__components__clients__client_component$46template.ViewClientComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:avocado_web/lib/src/components/clients/client_component.dart" : null, src__core__metadata__view.ViewEncapsulation.None, src__components__clients__client_component$46template.styles$ClientComponent) : t;
    this.setupComponentType(src__components__clients__client_component$46template.ViewClientComponent0._renderType);
  }).prototype = src__components__clients__client_component$46template.ViewClientComponent0.prototype;
  dart.addTypeTests(src__components__clients__client_component$46template.ViewClientComponent0);
  dart.setMethodSignature(src__components__clients__client_component$46template.ViewClientComponent0, () => ({
    __proto__: dart.getMethods(src__components__clients__client_component$46template.ViewClientComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__clients__client_component.ClientComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__clients__client_component$46template.ViewClientComponent0, () => ({
    __proto__: dart.getFields(src__components__clients__client_component$46template.ViewClientComponent0.__proto__),
    [_expr_0$2]: dart.fieldType(dart.dynamic),
    [_text_2$0]: dart.fieldType(html.Text)
  }));
  dart.defineLazy(src__components__clients__client_component$46template.ViewClientComponent0, {
    /*src__components__clients__client_component$46template.ViewClientComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__clients__client_component$46template.viewFactory_ClientComponent0 = function(parentView, parentIndex) {
    return new src__components__clients__client_component$46template.ViewClientComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__clients__client_component$46template, {
    /*src__components__clients__client_component$46template._ClientComponentNgFactory*/get _ClientComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfClientComponent()).new("client-component", dart.fn(src__components__clients__client_component$46template.viewFactory_ClientComponentHost0, AppViewAndintToAppViewOfClientComponent())));
    }
  });
  dart.copyProperties(src__components__clients__client_component$46template, {
    get ClientComponentNgFactory() {
      return src__components__clients__client_component$46template._ClientComponentNgFactory;
    }
  });
  dart.defineLazy(src__components__clients__client_component$46template, {
    /*src__components__clients__client_component$46template.styles$ClientComponentHost*/get styles$ClientComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$2 = Symbol('_compView_0');
  const _ClientComponent_0_5 = Symbol('_ClientComponent_0_5');
  src__components__clients__client_component$46template._ViewClientComponentHost0 = class _ViewClientComponentHost0 extends src__core__linker__app_view.AppView$(src__components__clients__client_component.ClientComponent) {
    build() {
      this[_compView_0$2] = new src__components__clients__client_component$46template.ViewClientComponent0.new(this, 0);
      this.rootEl = this[_compView_0$2].rootEl;
      this[_ClientComponent_0_5] = new src__components__clients__client_component.ClientComponent.new();
      this[_compView_0$2].create(this[_ClientComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfClientComponent()).new(0, this, this.rootEl, this[_ClientComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$2].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$2].destroy();
    }
  };
  (src__components__clients__client_component$46template._ViewClientComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$2] = null;
    this[_ClientComponent_0_5] = null;
    src__components__clients__client_component$46template._ViewClientComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__clients__client_component$46template._ViewClientComponentHost0.prototype;
  dart.addTypeTests(src__components__clients__client_component$46template._ViewClientComponentHost0);
  dart.setMethodSignature(src__components__clients__client_component$46template._ViewClientComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__clients__client_component$46template._ViewClientComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__clients__client_component.ClientComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__clients__client_component$46template._ViewClientComponentHost0, () => ({
    __proto__: dart.getFields(src__components__clients__client_component$46template._ViewClientComponentHost0.__proto__),
    [_compView_0$2]: dart.fieldType(src__components__clients__client_component$46template.ViewClientComponent0),
    [_ClientComponent_0_5]: dart.fieldType(src__components__clients__client_component.ClientComponent)
  }));
  src__components__clients__client_component$46template.viewFactory_ClientComponentHost0 = function(parentView, parentIndex) {
    return new src__components__clients__client_component$46template._ViewClientComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__clients__client_component$46template, {
    /*src__components__clients__client_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__clients__client_component$46template.initReflector = function() {
    if (dart.test(src__components__clients__client_component$46template._visited)) {
      return;
    }
    src__components__clients__client_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__clients__client_component.ClientComponent), src__components__clients__client_component$46template.ClientComponentNgFactory);
    angular$46template.initReflector();
  };
  src__components__posts__video_component.VideoComponent = class VideoComponent extends core.Object {
    get video() {
      return this[video];
    }
    set video(value) {
      this[video] = value;
    }
  };
  (src__components__posts__video_component.VideoComponent.new = function() {
    this[video] = null;
  }).prototype = src__components__posts__video_component.VideoComponent.prototype;
  dart.addTypeTests(src__components__posts__video_component.VideoComponent);
  const video = Symbol("VideoComponent.video");
  dart.setFieldSignature(src__components__posts__video_component.VideoComponent, () => ({
    __proto__: dart.getFields(src__components__posts__video_component.VideoComponent.__proto__),
    video: dart.fieldType(core.String)
  }));
  src__components__posts__post_component.PostComponent = class PostComponent extends core.Object {
    get showEditor() {
      return this[showEditor];
    }
    set showEditor(value) {
      this[showEditor] = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get post() {
      return this[post$];
    }
    set post(value) {
      this[post$] = value;
    }
    onClick() {
      this.showEditor = true;
    }
  };
  (src__components__posts__post_component.PostComponent.new = function() {
    this[showEditor] = false;
    this[value$] = "";
    this[post$] = null;
  }).prototype = src__components__posts__post_component.PostComponent.prototype;
  dart.addTypeTests(src__components__posts__post_component.PostComponent);
  const showEditor = Symbol("PostComponent.showEditor");
  const value$ = Symbol("PostComponent.value");
  const post$ = Symbol("PostComponent.post");
  dart.setMethodSignature(src__components__posts__post_component.PostComponent, () => ({
    __proto__: dart.getMethods(src__components__posts__post_component.PostComponent.__proto__),
    onClick: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(src__components__posts__post_component.PostComponent, () => ({
    __proto__: dart.getFields(src__components__posts__post_component.PostComponent.__proto__),
    showEditor: dart.fieldType(core.bool),
    value: dart.fieldType(core.String),
    post: dart.fieldType(src__models__posts.PostInfo)
  }));
  src__components__posts__posts_component.PostsComponent = class PostsComponent extends core.Object {
    get bloc() {
      return this[bloc$];
    }
    set bloc(value) {
      this[bloc$] = value;
    }
    get store() {
      return this[store$0];
    }
    set store(value) {
      super.store = value;
    }
    ngOnInit() {
      this.bloc.actions.events.load.call(null);
    }
    ngOnDestroy() {
      this.bloc.actions.events.unload.call(null);
    }
  };
  (src__components__posts__posts_component.PostsComponent.new = function(store) {
    this[bloc$] = null;
    this[store$0] = store;
    this.bloc = new src__blocs__PostsBLoC.PostsBLoC.new(this.store.postsStore);
  }).prototype = src__components__posts__posts_component.PostsComponent.prototype;
  dart.addTypeTests(src__components__posts__posts_component.PostsComponent);
  const bloc$ = Symbol("PostsComponent.bloc");
  const store$0 = Symbol("PostsComponent.store");
  src__components__posts__posts_component.PostsComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__components__posts__posts_component.PostsComponent, () => ({
    __proto__: dart.getMethods(src__components__posts__posts_component.PostsComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__posts__posts_component.PostsComponent, () => ({
    __proto__: dart.getFields(src__components__posts__posts_component.PostsComponent.__proto__),
    bloc: dart.fieldType(src__blocs__PostsBLoC.PostsBLoC),
    store: dart.finalFieldType(src__services__store.StoreService)
  }));
  dart.defineLazy(src__components__posts__video_component$46template, {
    /*src__components__posts__video_component$46template.styles$VideoComponent*/get styles$VideoComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _expr_0$3 = Symbol('_expr_0');
  const _el_1 = Symbol('_el_1');
  let const$14;
  src__components__posts__video_component$46template.ViewVideoComponent0 = class ViewVideoComponent0 extends src__core__linker__app_view.AppView$(src__components__posts__video_component.VideoComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createAndAppend(doc, "video", parentRenderNode);
      this.createAttr(_el_0, "controls", "");
      this.createAttr(_el_0, "style", "width: 100%;");
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, "source", _el_0);
      this.createAttr(this[_el_1], "type", "video/mp4");
      let _text_2 = html.Text.new("Your browser does not support the video tag.");
      _el_0[$append](_text_2);
      this.init(const$14 || (const$14 = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.video;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$3], currVal_0))) {
        this.setProp(this[_el_1], "src", src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$3] = currVal_0;
      }
    }
  };
  (src__components__posts__video_component$46template.ViewVideoComponent0.new = function(parentView, parentIndex) {
    this[_expr_0$3] = null;
    this[_el_1] = null;
    src__components__posts__video_component$46template.ViewVideoComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("video-component"));
    let t = src__components__posts__video_component$46template.ViewVideoComponent0._renderType;
    t == null ? src__components__posts__video_component$46template.ViewVideoComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:avocado_web/lib/src/components/posts/video_component.dart" : null, src__core__metadata__view.ViewEncapsulation.None, src__components__posts__video_component$46template.styles$VideoComponent) : t;
    this.setupComponentType(src__components__posts__video_component$46template.ViewVideoComponent0._renderType);
  }).prototype = src__components__posts__video_component$46template.ViewVideoComponent0.prototype;
  dart.addTypeTests(src__components__posts__video_component$46template.ViewVideoComponent0);
  dart.setMethodSignature(src__components__posts__video_component$46template.ViewVideoComponent0, () => ({
    __proto__: dart.getMethods(src__components__posts__video_component$46template.ViewVideoComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__posts__video_component.VideoComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__posts__video_component$46template.ViewVideoComponent0, () => ({
    __proto__: dart.getFields(src__components__posts__video_component$46template.ViewVideoComponent0.__proto__),
    [_expr_0$3]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__components__posts__video_component$46template.ViewVideoComponent0, {
    /*src__components__posts__video_component$46template.ViewVideoComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__posts__video_component$46template.viewFactory_VideoComponent0 = function(parentView, parentIndex) {
    return new src__components__posts__video_component$46template.ViewVideoComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__posts__video_component$46template, {
    /*src__components__posts__video_component$46template._VideoComponentNgFactory*/get _VideoComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfVideoComponent()).new("video-component", dart.fn(src__components__posts__video_component$46template.viewFactory_VideoComponentHost0, AppViewAndintToAppViewOfVideoComponent())));
    }
  });
  dart.copyProperties(src__components__posts__video_component$46template, {
    get VideoComponentNgFactory() {
      return src__components__posts__video_component$46template._VideoComponentNgFactory;
    }
  });
  dart.defineLazy(src__components__posts__video_component$46template, {
    /*src__components__posts__video_component$46template.styles$VideoComponentHost*/get styles$VideoComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$3 = Symbol('_compView_0');
  const _VideoComponent_0_5 = Symbol('_VideoComponent_0_5');
  src__components__posts__video_component$46template._ViewVideoComponentHost0 = class _ViewVideoComponentHost0 extends src__core__linker__app_view.AppView$(src__components__posts__video_component.VideoComponent) {
    build() {
      this[_compView_0$3] = new src__components__posts__video_component$46template.ViewVideoComponent0.new(this, 0);
      this.rootEl = this[_compView_0$3].rootEl;
      this[_VideoComponent_0_5] = new src__components__posts__video_component.VideoComponent.new();
      this[_compView_0$3].create(this[_VideoComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfVideoComponent()).new(0, this, this.rootEl, this[_VideoComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$3].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$3].destroy();
    }
  };
  (src__components__posts__video_component$46template._ViewVideoComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$3] = null;
    this[_VideoComponent_0_5] = null;
    src__components__posts__video_component$46template._ViewVideoComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__posts__video_component$46template._ViewVideoComponentHost0.prototype;
  dart.addTypeTests(src__components__posts__video_component$46template._ViewVideoComponentHost0);
  dart.setMethodSignature(src__components__posts__video_component$46template._ViewVideoComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__posts__video_component$46template._ViewVideoComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__posts__video_component.VideoComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__posts__video_component$46template._ViewVideoComponentHost0, () => ({
    __proto__: dart.getFields(src__components__posts__video_component$46template._ViewVideoComponentHost0.__proto__),
    [_compView_0$3]: dart.fieldType(src__components__posts__video_component$46template.ViewVideoComponent0),
    [_VideoComponent_0_5]: dart.fieldType(src__components__posts__video_component.VideoComponent)
  }));
  src__components__posts__video_component$46template.viewFactory_VideoComponentHost0 = function(parentView, parentIndex) {
    return new src__components__posts__video_component$46template._ViewVideoComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__posts__video_component$46template, {
    /*src__components__posts__video_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__posts__video_component$46template.initReflector = function() {
    if (dart.test(src__components__posts__video_component$46template._visited)) {
      return;
    }
    src__components__posts__video_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__posts__video_component.VideoComponent), src__components__posts__video_component$46template.VideoComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.defineLazy(src__components__posts__post_component$46scss$46css$46shim, {
    /*src__components__posts__post_component$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{display:flex;margin:2px}.demo-size._ngcontent-%ID%{width:352px}.demo-card__title._ngcontent-%ID%{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:rgba(0,0,0,0.87);font:500 20px/32px Roboto,Noto,sans-serif;letter-spacing:0.005em;line-height:1em;margin:0}.demo-card__subtitle._ngcontent-%ID%{color:rgba(0,0,0,0.87);font:400 15px/24px Roboto,Noto,sans-serif;letter-spacing:0.01em;margin:0}.demo-card__media._ngcontent-%ID%{background-image:url(\"http://material-components-web.appspot.com/images/16-9.jpg\")}.demo-card__primary._ngcontent-%ID%{padding:16px}.demo-card__secondary._ngcontent-%ID%{color:rgba(0,0,0,0.87);font:400 13px/20px Roboto,Noto,sans-serif;letter-spacing:0.01em;padding:0 16px 8px}section._ngcontent-%ID%{display:block}section._ngcontent-%ID% + section._ngcontent-%ID%{margin-left:32px}"];
    }
  });
  dart.defineLazy(src__components__posts__post_component$46template, {
    /*src__components__posts__post_component$46template.styles$PostComponent*/get styles$PostComponent() {
      return [css__mdc_web__card__mdc$45card$46scss$46css$46shim.styles, src__components__posts__post_component$46scss$46css$46shim.styles];
    }
  });
  const _NgStyle_1_5$ = Symbol('_NgStyle_1_5');
  const _compView_10$ = Symbol('_compView_10');
  const _AcxDarkTheme_10_5$ = Symbol('_AcxDarkTheme_10_5');
  const _MaterialButtonComponent_10_6$ = Symbol('_MaterialButtonComponent_10_6');
  const _compView_12$ = Symbol('_compView_12');
  const _AcxDarkTheme_12_5$ = Symbol('_AcxDarkTheme_12_5');
  const _MaterialButtonComponent_12_6$ = Symbol('_MaterialButtonComponent_12_6');
  const _compView_15$ = Symbol('_compView_15');
  const _AcxDarkTheme_15_5$ = Symbol('_AcxDarkTheme_15_5');
  const _MaterialButtonComponent_15_6$ = Symbol('_MaterialButtonComponent_15_6');
  const _compView_16$ = Symbol('_compView_16');
  const _MaterialIconComponent_16_5$ = Symbol('_MaterialIconComponent_16_5');
  const _compView_17$ = Symbol('_compView_17');
  const _AcxDarkTheme_17_5$ = Symbol('_AcxDarkTheme_17_5');
  const _MaterialButtonComponent_17_6$ = Symbol('_MaterialButtonComponent_17_6');
  const _compView_18$ = Symbol('_compView_18');
  const _MaterialIconComponent_18_5$ = Symbol('_MaterialIconComponent_18_5');
  const _compView_19$ = Symbol('_compView_19');
  const _AcxDarkTheme_19_5$ = Symbol('_AcxDarkTheme_19_5');
  const _MaterialButtonComponent_19_6$ = Symbol('_MaterialButtonComponent_19_6');
  const _compView_20$ = Symbol('_compView_20');
  const _MaterialIconComponent_20_5$ = Symbol('_MaterialIconComponent_20_5');
  const _compView_21 = Symbol('_compView_21');
  const _ModalComponent_21_5 = Symbol('_ModalComponent_21_5');
  const _compView_22 = Symbol('_compView_22');
  const _MaterialDialogComponent_22_5 = Symbol('_MaterialDialogComponent_22_5');
  const _compView_25 = Symbol('_compView_25');
  const _VideoComponent_25_5 = Symbol('_VideoComponent_25_5');
  const _compView_26 = Symbol('_compView_26');
  const _DeferredValidator_26_5 = Symbol('_DeferredValidator_26_5');
  const _NgValidators_26_6 = Symbol('_NgValidators_26_6');
  const _NgModel_26_7 = Symbol('_NgModel_26_7');
  const _NgControl_26_8 = Symbol('_NgControl_26_8');
  const _MaterialInputComponent_26_9 = Symbol('_MaterialInputComponent_26_9');
  const _BaseMaterialInput_26_10 = Symbol('_BaseMaterialInput_26_10');
  const _MaterialInputDefaultValueAccessor_26_11 = Symbol('_MaterialInputDefaultValueAccessor_26_11');
  const _compView_28 = Symbol('_compView_28');
  const _AcxDarkTheme_28_5 = Symbol('_AcxDarkTheme_28_5');
  const _MaterialButtonComponent_28_6 = Symbol('_MaterialButtonComponent_28_6');
  const _map_0$ = Symbol('_map_0');
  const _expr_0$4 = Symbol('_expr_0');
  const _expr_1$ = Symbol('_expr_1');
  const _expr_2$ = Symbol('_expr_2');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _text_5$ = Symbol('_text_5');
  const _text_7$ = Symbol('_text_7');
  const _text_24 = Symbol('_text_24');
  const _el_25 = Symbol('_el_25');
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  const _handle_ngModelChange_26_0 = Symbol('_handle_ngModelChange_26_0');
  const _handle_trigger_28_0 = Symbol('_handle_trigger_28_0');
  let const$29;
  let const$30;
  src__components__posts__post_component$46template.ViewPostComponent0 = class ViewPostComponent0 extends src__core__linker__app_view.AppView$(src__components__posts__post_component.PostComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      _el_0.className = "mdc-card mdc-card--outlined demo-size";
      this.addShimC(_el_0);
      let _el_1 = src__core__linker__app_view.createDivAndAppend(doc, _el_0);
      _el_1.className = "mdc-card__media mdc-card__media--16-9 demo-card__media";
      this.addShimC(_el_1);
      this[_NgStyle_1_5$] = new src__common__directives__ng_style.NgStyle.new(_el_1);
      let _el_2 = src__core__linker__app_view.createDivAndAppend(doc, _el_0);
      _el_2.className = "demo-card__primary";
      this.addShimC(_el_2);
      let _el_3 = src__core__linker__app_view.createAndAppend(doc, "h3", _el_2);
      _el_3.className = "demo-card__subtitle";
      this.addShimE(_el_3);
      let _text_4 = html.Text.new("by ");
      _el_3[$append](_text_4);
      this[_text_5$] = html.Text.new("");
      _el_3[$append](this[_text_5$]);
      let _el_6 = src__core__linker__app_view.createDivAndAppend(doc, _el_0);
      _el_6.className = "demo-card__secondary";
      this.addShimC(_el_6);
      this[_text_7$] = html.Text.new("");
      _el_6[$append](this[_text_7$]);
      let _el_8 = src__core__linker__app_view.createDivAndAppend(doc, _el_0);
      _el_8.className = "mdc-card__actions";
      this.addShimC(_el_8);
      let _el_9 = src__core__linker__app_view.createDivAndAppend(doc, _el_8);
      _el_9.className = "mdc-card__action-buttons";
      this.addShimC(_el_9);
      this[_compView_10$] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 10);
      let _el_10 = this[_compView_10$].rootEl;
      _el_9[$append](_el_10);
      this.addShimC(_el_10);
      this[_AcxDarkTheme_10_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$15 || (const$15 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$16 || (const$16 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_10_6$] = new material_button__material_button.MaterialButtonComponent.new(_el_10, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_10_5$]), this[_compView_10$].ref, null);
      let _text_11 = html.Text.new("Read");
      this[_compView_10$].create(this[_MaterialButtonComponent_10_6$], [JSArrayOfText().of([_text_11])]);
      this[_compView_12$] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 12);
      let _el_12 = this[_compView_12$].rootEl;
      _el_9[$append](_el_12);
      this.addShimC(_el_12);
      this[_AcxDarkTheme_12_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$17 || (const$17 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$18 || (const$18 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_12_6$] = new material_button__material_button.MaterialButtonComponent.new(_el_12, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_12_5$]), this[_compView_12$].ref, null);
      let _text_13 = html.Text.new("Bookmark");
      this[_compView_12$].create(this[_MaterialButtonComponent_12_6$], [JSArrayOfText().of([_text_13])]);
      let _el_14 = src__core__linker__app_view.createDivAndAppend(doc, _el_8);
      _el_14.className = "mdc-card__action-icons";
      this.addShimC(_el_14);
      this[_compView_15$] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 15);
      let _el_15 = this[_compView_15$].rootEl;
      _el_14[$append](_el_15);
      this.createAttr(_el_15, "icon", "");
      this.addShimC(_el_15);
      this[_AcxDarkTheme_15_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$19 || (const$19 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$20 || (const$20 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_15_6$] = new material_button__material_button.MaterialButtonComponent.new(_el_15, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_15_5$]), this[_compView_15$].ref, null);
      this[_compView_16$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 16);
      let _el_16 = this[_compView_16$].rootEl;
      this.createAttr(_el_16, "icon", "favorite_border");
      this.addShimC(_el_16);
      this[_MaterialIconComponent_16_5$] = new material_icon__material_icon.MaterialIconComponent.new(_el_16);
      this[_compView_16$].create(this[_MaterialIconComponent_16_5$], []);
      this[_compView_15$].create(this[_MaterialButtonComponent_15_6$], [JSArrayOfHtmlElement().of([_el_16])]);
      this[_compView_17$] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 17);
      let _el_17 = this[_compView_17$].rootEl;
      _el_14[$append](_el_17);
      this.createAttr(_el_17, "icon", "");
      this.addShimC(_el_17);
      this[_AcxDarkTheme_17_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$21 || (const$21 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$22 || (const$22 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_17_6$] = new material_button__material_button.MaterialButtonComponent.new(_el_17, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_17_5$]), this[_compView_17$].ref, null);
      this[_compView_18$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 18);
      let _el_18 = this[_compView_18$].rootEl;
      this.createAttr(_el_18, "icon", "share");
      this.addShimC(_el_18);
      this[_MaterialIconComponent_18_5$] = new material_icon__material_icon.MaterialIconComponent.new(_el_18);
      this[_compView_18$].create(this[_MaterialIconComponent_18_5$], []);
      this[_compView_17$].create(this[_MaterialButtonComponent_17_6$], [JSArrayOfHtmlElement().of([_el_18])]);
      this[_compView_19$] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 19);
      let _el_19 = this[_compView_19$].rootEl;
      _el_14[$append](_el_19);
      this.createAttr(_el_19, "icon", "");
      this.addShimC(_el_19);
      this[_AcxDarkTheme_19_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$23 || (const$23 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$24 || (const$24 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_19_6$] = new material_button__material_button.MaterialButtonComponent.new(_el_19, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_19_5$]), this[_compView_19$].ref, null);
      this[_compView_20$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 20);
      let _el_20 = this[_compView_20$].rootEl;
      this.createAttr(_el_20, "icon", "more_vert");
      this.addShimC(_el_20);
      this[_MaterialIconComponent_20_5$] = new material_icon__material_icon.MaterialIconComponent.new(_el_20);
      this[_compView_20$].create(this[_MaterialIconComponent_20_5$], []);
      this[_compView_19$].create(this[_MaterialButtonComponent_19_6$], [JSArrayOfHtmlElement().of([_el_20])]);
      this[_compView_21] = new laminate__components__modal__modal$46template.ViewModalComponent0.new(this, 21);
      let _el_21 = this[_compView_21].rootEl;
      parentRenderNode[$append](_el_21);
      this.addShimC(_el_21);
      this[_ModalComponent_21_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(laminate__components__modal__modal.ModalComponent, dart.wrapType(laminate__components__modal__modal.ModalComponent), dart.fn(() => new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_21, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null))), VoidToModalComponent())) : new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_21, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null)));
      this[_compView_22] = new material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new(this, 22);
      let _el_22 = this[_compView_22].rootEl;
      _el_22.className = "basic-dialog";
      this.addShimC(_el_22);
      this[_MaterialDialogComponent_22_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_dialog__material_dialog.MaterialDialogComponent, dart.wrapType(material_dialog__material_dialog.MaterialDialogComponent), dart.fn(() => new material_dialog__material_dialog.MaterialDialogComponent.new(_el_22, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_22].ref, this[_ModalComponent_21_5]), VoidToMaterialDialogComponent())) : new material_dialog__material_dialog.MaterialDialogComponent.new(_el_22, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_22].ref, this[_ModalComponent_21_5]);
      let _el_23 = doc[$createElement]("h1");
      this.createAttr(_el_23, "header", "");
      this.addShimE(_el_23);
      this[_text_24] = html.Text.new("");
      _el_23[$append](this[_text_24]);
      this[_compView_25] = new src__components__posts__video_component$46template.ViewVideoComponent0.new(this, 25);
      this[_el_25] = this[_compView_25].rootEl;
      this.createAttr(this[_el_25], "style", "width: 300px");
      this.addShimC(html.HtmlElement._check(this[_el_25]));
      this[_VideoComponent_25_5] = new src__components__posts__video_component.VideoComponent.new();
      this[_compView_25].create(this[_VideoComponent_25_5], []);
      this[_compView_26] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 26);
      let _el_26 = this[_compView_26].rootEl;
      this.createAttr(_el_26, "floatingLabel", "");
      this.createAttr(_el_26, "label", "Type positive numbers from 10 to 99999");
      this.createAttr(_el_26, "type", "string");
      this.addShimC(_el_26);
      this[_DeferredValidator_26_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_26_6] = [this[_DeferredValidator_26_5]];
      this[_NgModel_26_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_26_6], null);
      this[_NgControl_26_8] = this[_NgModel_26_7];
      this[_MaterialInputComponent_26_9] = new material_input__material_input.MaterialInputComponent.new("string", null, null, this[_NgControl_26_8], this[_compView_26].ref, this[_DeferredValidator_26_5]);
      this[_BaseMaterialInput_26_10] = this[_MaterialInputComponent_26_9];
      this[_MaterialInputDefaultValueAccessor_26_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_26_10], this[_NgControl_26_8]);
      this[_compView_26].create(this[_MaterialInputComponent_26_9], [const$25 || (const$25 = dart.constList([], dart.dynamic)), const$26 || (const$26 = dart.constList([], dart.dynamic))]);
      let _el_27 = doc[$createElement]("div");
      this.createAttr(_el_27, "footer", "");
      this.addShimC(html.HtmlElement._check(_el_27));
      this[_compView_28] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 28);
      let _el_28 = this[_compView_28].rootEl;
      _el_27[$append](_el_28);
      this.createAttr(_el_28, "autoFocus", "");
      this.createAttr(_el_28, "clear-size", "");
      this.addShimC(_el_28);
      this[_AcxDarkTheme_28_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$27 || (const$27 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$28 || (const$28 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_28_6] = new material_button__material_button.MaterialButtonComponent.new(_el_28, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_28_5]), this[_compView_28].ref, null);
      let _text_29 = html.Text.new("Close");
      this[_compView_28].create(this[_MaterialButtonComponent_28_6], [JSArrayOfText().of([_text_29])]);
      this[_compView_22].create(this[_MaterialDialogComponent_22_5], [JSArrayOfElement().of([_el_23]), JSArrayOfElement().of([this[_el_25], _el_26]), JSArrayOfElement().of([_el_27])]);
      this[_compView_21].create(this[_ModalComponent_21_5], [JSArrayOfHtmlElement().of([_el_22])]);
      this[_map_0$] = src__core__linker__app_view_utils.pureProxy1(MapOfString$String(), core.String, dart.fn(p0 => new (IdentityMapOfString$String()).from(["background-image", p0]), StringToMapOfString$String()));
      let subscription_0 = this[_MaterialButtonComponent_17_6$].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'onClick')));
      let subscription_1 = this[_NgModel_26_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_26_0)));
      let subscription_2 = this[_MaterialButtonComponent_28_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_28_0)));
      this.init(const$29 || (const$29 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1, subscription_2]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 10 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 11) {
        return this[_AcxDarkTheme_10_5$];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 10 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 11) {
        return this[_MaterialButtonComponent_10_6$];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 12 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 13) {
        return this[_AcxDarkTheme_12_5$];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 12 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 13) {
        return this[_MaterialButtonComponent_12_6$];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 15 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 16) {
        return this[_AcxDarkTheme_15_5$];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 15 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 16) {
        return this[_MaterialButtonComponent_15_6$];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 17 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 18) {
        return this[_AcxDarkTheme_17_5$];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 17 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 18) {
        return this[_MaterialButtonComponent_17_6$];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 19 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 20) {
        return this[_AcxDarkTheme_19_5$];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 19 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 20) {
        return this[_MaterialButtonComponent_19_6$];
      }
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 26 === nodeIndex) {
        return this[_DeferredValidator_26_5];
      }
      if (token === (const$30 || (const$30 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators")))) && 26 === nodeIndex) {
        return this[_NgValidators_26_6];
      }
      if (token === dart.wrapType(src__directives__ng_model.NgModel) && 26 === nodeIndex) {
        return this[_NgModel_26_7];
      }
      if (token === dart.wrapType(src__directives__ng_control.NgControl) && 26 === nodeIndex) {
        return this[_NgControl_26_8];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 26 === nodeIndex) {
        return this[_MaterialInputComponent_26_9];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 26 === nodeIndex) {
        return this[_BaseMaterialInput_26_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 26 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_26_11];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 28 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 29) {
        return this[_AcxDarkTheme_28_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 28 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 29) {
        return this[_MaterialButtonComponent_28_6];
      }
      if ((token === dart.wrapType(laminate__components__modal__modal.ModalComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(laminate__components__modal__modal.Modal)) && 21 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 29) {
        return this[_ModalComponent_21_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let currVal_0 = this[_map_0$]("url(" + dart.notNull(_ctx.post == null ? null : _ctx.post.image) + ")");
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$4], currVal_0))) {
        this[_NgStyle_1_5$].rawStyle = currVal_0;
        this[_expr_0$4] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgStyle_1_5$].ngDoCheck();
      }
      changed = false;
      if (changed) {
        this[_compView_10$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_10_6$].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_12$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_12_6$].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_15$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_15_6$].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_16_5$].icon = "favorite_border";
        changed = true;
      }
      if (changed) {
        this[_compView_16$].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_17$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_17_6$].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_18_5$].icon = "share";
        changed = true;
      }
      if (changed) {
        this[_compView_18$].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_19$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_19_6$].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_20_5$].icon = "more_vert";
        changed = true;
      }
      if (changed) {
        this[_compView_20$].markAsCheckOnce();
      }
      let currVal_6 = _ctx.showEditor;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_ModalComponent_21_5].visible = currVal_6;
        this[_expr_6] = currVal_6;
      }
      changed = false;
      if (changed) {
        this[_compView_22].markAsCheckOnce();
      }
      let currVal_9 = _ctx.post == null ? null : _ctx.post.video;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_VideoComponent_25_5].video = currVal_9;
        this[_expr_9] = currVal_9;
      }
      changed = false;
      this[_NgModel_26_7].model = _ctx.value;
      this[_NgModel_26_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_26_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_26_9].label = "Type positive numbers from 10 to 99999";
        changed = true;
        this[_MaterialInputComponent_26_9].floatingLabel = true;
        changed = true;
      }
      if (changed) {
        this[_compView_26].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_28].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_28_6].ngOnInit();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_MaterialDialogComponent_22_5].ngAfterContentChecked();
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0((_ctx.post == null ? null : _ctx.post.user) == null ? null : (_ctx.post == null ? null : _ctx.post.user).displayName);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_text_5$][$text] = core.String._check(currVal_1);
        this[_expr_1$] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(_ctx.post == null ? null : _ctx.post.content);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
        this[_text_7$][$text] = core.String._check(currVal_2);
        this[_expr_2$] = currVal_2;
      }
      this[_compView_10$].detectHostChanges(firstCheck);
      this[_compView_12$].detectHostChanges(firstCheck);
      this[_compView_15$].detectHostChanges(firstCheck);
      this[_compView_17$].detectHostChanges(firstCheck);
      this[_compView_19$].detectHostChanges(firstCheck);
      this[_compView_21].detectHostChanges(firstCheck);
      let currVal_7 = src__core__linker__app_view_utils.interpolate0(_ctx.post == null ? null : _ctx.post.content);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_text_24][$text] = core.String._check(currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = (_ctx.post == null ? null : _ctx.post.video) != null;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this.setProp(this[_el_25], "visible", currVal_8);
        this[_expr_8] = currVal_8;
      }
      this[_compView_28].detectHostChanges(firstCheck);
      this[_compView_10$].detectChanges();
      this[_compView_12$].detectChanges();
      this[_compView_15$].detectChanges();
      this[_compView_16$].detectChanges();
      this[_compView_17$].detectChanges();
      this[_compView_18$].detectChanges();
      this[_compView_19$].detectChanges();
      this[_compView_20$].detectChanges();
      this[_compView_21].detectChanges();
      this[_compView_22].detectChanges();
      this[_compView_25].detectChanges();
      this[_compView_26].detectChanges();
      this[_compView_28].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_26_9].ngAfterViewInit();
          this[_ModalComponent_21_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_10$].destroy();
      this[_compView_12$].destroy();
      this[_compView_15$].destroy();
      this[_compView_16$].destroy();
      this[_compView_17$].destroy();
      this[_compView_18$].destroy();
      this[_compView_19$].destroy();
      this[_compView_20$].destroy();
      this[_compView_21].destroy();
      this[_compView_22].destroy();
      this[_compView_25].destroy();
      this[_compView_26].destroy();
      this[_compView_28].destroy();
      this[_MaterialInputComponent_26_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_26_11].ngOnDestroy();
      this[_MaterialDialogComponent_22_5].ngOnDestroy();
      this[_ModalComponent_21_5].ngOnDestroy();
    }
    [_handle_ngModelChange_26_0]($event) {
      this.ctx.value = core.String._check($event);
    }
    [_handle_trigger_28_0]($event) {
      this.ctx.showEditor = false;
    }
  };
  (src__components__posts__post_component$46template.ViewPostComponent0.new = function(parentView, parentIndex) {
    this[_NgStyle_1_5$] = null;
    this[_compView_10$] = null;
    this[_AcxDarkTheme_10_5$] = null;
    this[_MaterialButtonComponent_10_6$] = null;
    this[_compView_12$] = null;
    this[_AcxDarkTheme_12_5$] = null;
    this[_MaterialButtonComponent_12_6$] = null;
    this[_compView_15$] = null;
    this[_AcxDarkTheme_15_5$] = null;
    this[_MaterialButtonComponent_15_6$] = null;
    this[_compView_16$] = null;
    this[_MaterialIconComponent_16_5$] = null;
    this[_compView_17$] = null;
    this[_AcxDarkTheme_17_5$] = null;
    this[_MaterialButtonComponent_17_6$] = null;
    this[_compView_18$] = null;
    this[_MaterialIconComponent_18_5$] = null;
    this[_compView_19$] = null;
    this[_AcxDarkTheme_19_5$] = null;
    this[_MaterialButtonComponent_19_6$] = null;
    this[_compView_20$] = null;
    this[_MaterialIconComponent_20_5$] = null;
    this[_compView_21] = null;
    this[_ModalComponent_21_5] = null;
    this[_compView_22] = null;
    this[_MaterialDialogComponent_22_5] = null;
    this[_compView_25] = null;
    this[_VideoComponent_25_5] = null;
    this[_compView_26] = null;
    this[_DeferredValidator_26_5] = null;
    this[_NgValidators_26_6] = null;
    this[_NgModel_26_7] = null;
    this[_NgControl_26_8] = null;
    this[_MaterialInputComponent_26_9] = null;
    this[_BaseMaterialInput_26_10] = null;
    this[_MaterialInputDefaultValueAccessor_26_11] = null;
    this[_compView_28] = null;
    this[_AcxDarkTheme_28_5] = null;
    this[_MaterialButtonComponent_28_6] = null;
    this[_map_0$] = null;
    this[_expr_0$4] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_text_5$] = null;
    this[_text_7$] = null;
    this[_text_24] = null;
    this[_el_25] = null;
    src__components__posts__post_component$46template.ViewPostComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("post-component"));
    let t = src__components__posts__post_component$46template.ViewPostComponent0._renderType;
    t == null ? src__components__posts__post_component$46template.ViewPostComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:avocado_web/lib/src/components/posts/post_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__components__posts__post_component$46template.styles$PostComponent) : t;
    this.setupComponentType(src__components__posts__post_component$46template.ViewPostComponent0._renderType);
  }).prototype = src__components__posts__post_component$46template.ViewPostComponent0.prototype;
  dart.addTypeTests(src__components__posts__post_component$46template.ViewPostComponent0);
  dart.setMethodSignature(src__components__posts__post_component$46template.ViewPostComponent0, () => ({
    __proto__: dart.getMethods(src__components__posts__post_component$46template.ViewPostComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__posts__post_component.PostComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_26_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_28_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__components__posts__post_component$46template.ViewPostComponent0, () => ({
    __proto__: dart.getFields(src__components__posts__post_component$46template.ViewPostComponent0.__proto__),
    [_NgStyle_1_5$]: dart.fieldType(src__common__directives__ng_style.NgStyle),
    [_compView_10$]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_10_5$]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_10_6$]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_12$]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_12_5$]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_12_6$]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_15$]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_15_5$]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_15_6$]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_16$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_16_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_17$]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_17_5$]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_17_6$]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_18$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_18_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_19$]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_19_5$]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_19_6$]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_20$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_20_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_21]: dart.fieldType(laminate__components__modal__modal$46template.ViewModalComponent0),
    [_ModalComponent_21_5]: dart.fieldType(laminate__components__modal__modal.ModalComponent),
    [_compView_22]: dart.fieldType(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0),
    [_MaterialDialogComponent_22_5]: dart.fieldType(material_dialog__material_dialog.MaterialDialogComponent),
    [_compView_25]: dart.fieldType(src__components__posts__video_component$46template.ViewVideoComponent0),
    [_VideoComponent_25_5]: dart.fieldType(src__components__posts__video_component.VideoComponent),
    [_compView_26]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_26_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_26_6]: dart.fieldType(core.List),
    [_NgModel_26_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_NgControl_26_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_26_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_BaseMaterialInput_26_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_26_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_compView_28]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_28_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_28_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_map_0$]: dart.fieldType(StringToMapOfString$String()),
    [_expr_0$4]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(core.String),
    [_text_5$]: dart.fieldType(html.Text),
    [_text_7$]: dart.fieldType(html.Text),
    [_text_24]: dart.fieldType(html.Text),
    [_el_25]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__components__posts__post_component$46template.ViewPostComponent0, {
    /*src__components__posts__post_component$46template.ViewPostComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__posts__post_component$46template.viewFactory_PostComponent0 = function(parentView, parentIndex) {
    return new src__components__posts__post_component$46template.ViewPostComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__posts__post_component$46template, {
    /*src__components__posts__post_component$46template._PostComponentNgFactory*/get _PostComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfPostComponent$()).new("post-component", dart.fn(src__components__posts__post_component$46template.viewFactory_PostComponentHost0, AppViewAndintToAppViewOfPostComponent$())));
    }
  });
  dart.copyProperties(src__components__posts__post_component$46template, {
    get PostComponentNgFactory() {
      return src__components__posts__post_component$46template._PostComponentNgFactory;
    }
  });
  dart.defineLazy(src__components__posts__post_component$46template, {
    /*src__components__posts__post_component$46template.styles$PostComponentHost*/get styles$PostComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$4 = Symbol('_compView_0');
  const _PostComponent_0_5$0 = Symbol('_PostComponent_0_5');
  const __Document_0_6 = Symbol('__Document_0_6');
  const __Window_0_7 = Symbol('__Window_0_7');
  const __DomService_0_8 = Symbol('__DomService_0_8');
  const __AcxImperativeViewUtils_0_9 = Symbol('__AcxImperativeViewUtils_0_9');
  const __DomRuler_0_10 = Symbol('__DomRuler_0_10');
  const __ManagedZone_0_11 = Symbol('__ManagedZone_0_11');
  const __overlayContainerName_0_12 = Symbol('__overlayContainerName_0_12');
  const __overlayContainerParent_0_13 = Symbol('__overlayContainerParent_0_13');
  const __overlayContainer_0_14 = Symbol('__overlayContainer_0_14');
  const __overlaySyncDom_0_15 = Symbol('__overlaySyncDom_0_15');
  const __overlayRepositionLoop_0_16 = Symbol('__overlayRepositionLoop_0_16');
  const __OverlayStyleConfig_0_17 = Symbol('__OverlayStyleConfig_0_17');
  const __ZIndexer_0_18 = Symbol('__ZIndexer_0_18');
  const __OverlayDomRenderService_0_19 = Symbol('__OverlayDomRenderService_0_19');
  const __OverlayService_0_20 = Symbol('__OverlayService_0_20');
  const _Document_0_6 = Symbol('_Document_0_6');
  const _Window_0_7 = Symbol('_Window_0_7');
  const _DomService_0_8 = Symbol('_DomService_0_8');
  const _AcxImperativeViewUtils_0_9 = Symbol('_AcxImperativeViewUtils_0_9');
  const _DomRuler_0_10 = Symbol('_DomRuler_0_10');
  const _ManagedZone_0_11 = Symbol('_ManagedZone_0_11');
  let const$31;
  let const$32;
  let const$33;
  const _overlayContainerName_0_12 = Symbol('_overlayContainerName_0_12');
  let const$34;
  let const$35;
  let const$36;
  const _overlayContainerParent_0_13 = Symbol('_overlayContainerParent_0_13');
  let const$37;
  let const$38;
  let const$39;
  const _overlayContainer_0_14 = Symbol('_overlayContainer_0_14');
  const _overlaySyncDom_0_15 = Symbol('_overlaySyncDom_0_15');
  const _overlayRepositionLoop_0_16 = Symbol('_overlayRepositionLoop_0_16');
  const _OverlayStyleConfig_0_17 = Symbol('_OverlayStyleConfig_0_17');
  const _ZIndexer_0_18 = Symbol('_ZIndexer_0_18');
  const _OverlayDomRenderService_0_19 = Symbol('_OverlayDomRenderService_0_19');
  const _OverlayService_0_20 = Symbol('_OverlayService_0_20');
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  src__components__posts__post_component$46template._ViewPostComponentHost0 = class _ViewPostComponentHost0 extends src__core__linker__app_view.AppView$(src__components__posts__post_component.PostComponent) {
    get [_Document_0_6]() {
      if (this[__Document_0_6] == null) {
        this[__Document_0_6] = utils__browser__window__module.getDocument();
      }
      return this[__Document_0_6];
    }
    get [_Window_0_7]() {
      if (this[__Window_0_7] == null) {
        this[__Window_0_7] = utils__browser__window__module.getWindow();
      }
      return this[__Window_0_7];
    }
    get [_DomService_0_8]() {
      if (this[__DomService_0_8] == null) {
        this[__DomService_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__browser__dom_service__dom_service.DomService, dart.wrapType(utils__browser__dom_service__dom_service.DomService), dart.fn(() => utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_7])), VoidToDomService())) : utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_7]));
      }
      return this[__DomService_0_8];
    }
    get [_AcxImperativeViewUtils_0_9]() {
      if (this[__AcxImperativeViewUtils_0_9] == null) {
        this[__AcxImperativeViewUtils_0_9] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils), dart.fn(() => new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8])), VoidToAcxImperativeViewUtils())) : new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]));
      }
      return this[__AcxImperativeViewUtils_0_9];
    }
    get [_DomRuler_0_10]() {
      if (this[__DomRuler_0_10] == null) {
        this[__DomRuler_0_10] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_0_6]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]));
      }
      return this[__DomRuler_0_10];
    }
    get [_ManagedZone_0_11]() {
      if (this[__ManagedZone_0_11] == null) {
        this[__ManagedZone_0_11] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__managed_zone__angular_2.Angular2ManagedZone, dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), dart.fn(() => new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToAngular2ManagedZone())) : new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_0_11];
    }
    get [_overlayContainerName_0_12]() {
      if (this[__overlayContainerName_0_12] == null) {
        this[__overlayContainerName_0_12] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(core.String, const$31 || (const$31 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), dart.fn(() => laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$32 || (const$32 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null)), VoidToString())) : laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$33 || (const$33 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_12];
    }
    get [_overlayContainerParent_0_13]() {
      if (this[__overlayContainerParent_0_13] == null) {
        this[__overlayContainerParent_0_13] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$34 || (const$34 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), dart.fn(() => laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6]), this.injectorGet(const$35 || (const$35 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null)), VoidToHtmlElement())) : laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6]), this.injectorGet(const$36 || (const$36 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_13];
    }
    get [_overlayContainer_0_14]() {
      if (this[__overlayContainer_0_14] == null) {
        this[__overlayContainer_0_14] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$37 || (const$37 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), dart.fn(() => laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_0_12]), html.HtmlElement._check(this[_overlayContainerParent_0_13]), this.injectorGet(const$38 || (const$38 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null)), VoidToHtmlElement())) : laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_0_12]), html.HtmlElement._check(this[_overlayContainerParent_0_13]), this.injectorGet(const$39 || (const$39 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_0_14];
    }
    get [_overlaySyncDom_0_15]() {
      if (this[__overlaySyncDom_0_15] == null) {
        this[__overlaySyncDom_0_15] = true;
      }
      return this[__overlaySyncDom_0_15];
    }
    get [_overlayRepositionLoop_0_16]() {
      if (this[__overlayRepositionLoop_0_16] == null) {
        this[__overlayRepositionLoop_0_16] = true;
      }
      return this[__overlayRepositionLoop_0_16];
    }
    get [_OverlayStyleConfig_0_17]() {
      if (this[__OverlayStyleConfig_0_17] == null) {
        this[__OverlayStyleConfig_0_17] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_0_6]));
      }
      return this[__OverlayStyleConfig_0_17];
    }
    get [_ZIndexer_0_18]() {
      if (this[__ZIndexer_0_18] == null) {
        this[__ZIndexer_0_18] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_0_18];
    }
    get [_OverlayDomRenderService_0_19]() {
      if (this[__OverlayDomRenderService_0_19] == null) {
        this[__OverlayDomRenderService_0_19] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_0_17], html.HtmlElement._check(this[_overlayContainer_0_14]), core.String._check(this[_overlayContainerName_0_12]), this[_DomRuler_0_10], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]), utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils._check(this[_AcxImperativeViewUtils_0_9]), this[_overlaySyncDom_0_15], this[_overlayRepositionLoop_0_16], this[_ZIndexer_0_18]);
      }
      return this[__OverlayDomRenderService_0_19];
    }
    get [_OverlayService_0_20]() {
      if (this[__OverlayService_0_20] == null) {
        this[__OverlayService_0_20] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__overlay__overlay_service.OverlayService, dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), dart.fn(() => new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_15], this[_OverlayDomRenderService_0_19], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null))), VoidToOverlayService())) : new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_15], this[_OverlayDomRenderService_0_19], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_0_20];
    }
    build() {
      this[_compView_0$4] = new src__components__posts__post_component$46template.ViewPostComponent0.new(this, 0);
      this.rootEl = this[_compView_0$4].rootEl;
      this[_PostComponent_0_5$0] = new src__components__posts__post_component.PostComponent.new();
      this[_compView_0$4].create(this[_PostComponent_0_5$0], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfPostComponent$()).new(0, this, this.rootEl, this[_PostComponent_0_5$0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(html.Document) && 0 === nodeIndex) {
        return this[_Document_0_6];
      }
      if (token === dart.wrapType(html.Window) && 0 === nodeIndex) {
        return this[_Window_0_7];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 0 === nodeIndex) {
        return this[_DomService_0_8];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 0 === nodeIndex) {
        return this[_AcxImperativeViewUtils_0_9];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 0 === nodeIndex) {
        return this[_DomRuler_0_10];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 0 === nodeIndex) {
        return this[_ManagedZone_0_11];
      }
      if (token === (const$40 || (const$40 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName")))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_12];
      }
      if (token === (const$41 || (const$41 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent")))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_13];
      }
      if (token === (const$42 || (const$42 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer")))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_14];
      }
      if (token === (const$43 || (const$43 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom")))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_15];
      }
      if (token === (const$44 || (const$44 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop")))) && 0 === nodeIndex) {
        return this[_overlayRepositionLoop_0_16];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 0 === nodeIndex) {
        return this[_OverlayStyleConfig_0_17];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 0 === nodeIndex) {
        return this[_ZIndexer_0_18];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 0 === nodeIndex) {
        return this[_OverlayDomRenderService_0_19];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 0 === nodeIndex) {
        return this[_OverlayService_0_20];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0$4].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$4].destroy();
    }
  };
  (src__components__posts__post_component$46template._ViewPostComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$4] = null;
    this[_PostComponent_0_5$0] = null;
    this[__Document_0_6] = null;
    this[__Window_0_7] = null;
    this[__DomService_0_8] = null;
    this[__AcxImperativeViewUtils_0_9] = null;
    this[__DomRuler_0_10] = null;
    this[__ManagedZone_0_11] = null;
    this[__overlayContainerName_0_12] = null;
    this[__overlayContainerParent_0_13] = null;
    this[__overlayContainer_0_14] = null;
    this[__overlaySyncDom_0_15] = null;
    this[__overlayRepositionLoop_0_16] = null;
    this[__OverlayStyleConfig_0_17] = null;
    this[__ZIndexer_0_18] = null;
    this[__OverlayDomRenderService_0_19] = null;
    this[__OverlayService_0_20] = null;
    src__components__posts__post_component$46template._ViewPostComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__posts__post_component$46template._ViewPostComponentHost0.prototype;
  dart.addTypeTests(src__components__posts__post_component$46template._ViewPostComponentHost0);
  dart.setMethodSignature(src__components__posts__post_component$46template._ViewPostComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__posts__post_component$46template._ViewPostComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__posts__post_component.PostComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__components__posts__post_component$46template._ViewPostComponentHost0, () => ({
    __proto__: dart.getGetters(src__components__posts__post_component$46template._ViewPostComponentHost0.__proto__),
    [_Document_0_6]: dart.dynamic,
    [_Window_0_7]: dart.dynamic,
    [_DomService_0_8]: dart.dynamic,
    [_AcxImperativeViewUtils_0_9]: dart.dynamic,
    [_DomRuler_0_10]: laminate__ruler__dom_ruler.DomRuler,
    [_ManagedZone_0_11]: dart.dynamic,
    [_overlayContainerName_0_12]: dart.dynamic,
    [_overlayContainerParent_0_13]: dart.dynamic,
    [_overlayContainer_0_14]: dart.dynamic,
    [_overlaySyncDom_0_15]: core.bool,
    [_overlayRepositionLoop_0_16]: core.bool,
    [_OverlayStyleConfig_0_17]: src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig,
    [_ZIndexer_0_18]: laminate__overlay__zindexer.ZIndexer,
    [_OverlayDomRenderService_0_19]: src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService,
    [_OverlayService_0_20]: dart.dynamic
  }));
  dart.setFieldSignature(src__components__posts__post_component$46template._ViewPostComponentHost0, () => ({
    __proto__: dart.getFields(src__components__posts__post_component$46template._ViewPostComponentHost0.__proto__),
    [_compView_0$4]: dart.fieldType(src__components__posts__post_component$46template.ViewPostComponent0),
    [_PostComponent_0_5$0]: dart.fieldType(src__components__posts__post_component.PostComponent),
    [__Document_0_6]: dart.fieldType(dart.dynamic),
    [__Window_0_7]: dart.fieldType(dart.dynamic),
    [__DomService_0_8]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_0_9]: dart.fieldType(dart.dynamic),
    [__DomRuler_0_10]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_0_11]: dart.fieldType(dart.dynamic),
    [__overlayContainerName_0_12]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_0_13]: dart.fieldType(dart.dynamic),
    [__overlayContainer_0_14]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_0_15]: dart.fieldType(core.bool),
    [__overlayRepositionLoop_0_16]: dart.fieldType(core.bool),
    [__OverlayStyleConfig_0_17]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_0_18]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_0_19]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_0_20]: dart.fieldType(dart.dynamic)
  }));
  src__components__posts__post_component$46template.viewFactory_PostComponentHost0 = function(parentView, parentIndex) {
    return new src__components__posts__post_component$46template._ViewPostComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__posts__post_component$46template, {
    /*src__components__posts__post_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__posts__post_component$46template.initReflector = function() {
    if (dart.test(src__components__posts__post_component$46template._visited)) {
      return;
    }
    src__components__posts__post_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__posts__post_component.PostComponent), src__components__posts__post_component$46template.PostComponentNgFactory);
    angular$46template.initReflector();
    angular_components$46template.initReflector();
    src__components__posts__video_component$46template.initReflector();
  };
  dart.defineLazy(src__components__posts__posts_component$46template, {
    /*src__components__posts__posts_component$46template.styles$PostsComponent*/get styles$PostsComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _appEl_2 = Symbol('_appEl_2');
  const _NgFor_2_9 = Symbol('_NgFor_2_9');
  const _expr_0$5 = Symbol('_expr_0');
  const _pipe_async_0$ = Symbol('_pipe_async_0');
  let const$45;
  src__components__posts__posts_component$46template.ViewPostsComponent0 = class ViewPostsComponent0 extends src__core__linker__app_view.AppView$(src__components__posts__posts_component.PostsComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new("Posts");
      parentRenderNode[$append](_text_0);
      let doc = html.document;
      let _el_1 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(_el_1, "style", "display: flex;flex-wrap: wrap;");
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      _el_1[$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(src__components__posts__posts_component$46template.viewFactory_PostsComponent1, AppViewAndintToAppViewOfPostsComponent()));
      this[_NgFor_2_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
      this[_pipe_async_0$] = new src__common__pipes__async_pipe.AsyncPipe.new(this.ref);
      this.init(const$45 || (const$45 = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = this[_pipe_async_0$].transform(_ctx.bloc.posts);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$5], currVal_0))) {
        this[_NgFor_2_9].ngForOf = core.Iterable._check(currVal_0);
        this[_expr_0$5] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_2_9].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_pipe_async_0$].ngOnDestroy();
    }
  };
  (src__components__posts__posts_component$46template.ViewPostsComponent0.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_NgFor_2_9] = null;
    this[_expr_0$5] = null;
    this[_pipe_async_0$] = null;
    src__components__posts__posts_component$46template.ViewPostsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("posts-component"));
    let t = src__components__posts__posts_component$46template.ViewPostsComponent0._renderType;
    t == null ? src__components__posts__posts_component$46template.ViewPostsComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:avocado_web/lib/src/components/posts/posts_component.dart" : null, src__core__metadata__view.ViewEncapsulation.None, src__components__posts__posts_component$46template.styles$PostsComponent) : t;
    this.setupComponentType(src__components__posts__posts_component$46template.ViewPostsComponent0._renderType);
  }).prototype = src__components__posts__posts_component$46template.ViewPostsComponent0.prototype;
  dart.addTypeTests(src__components__posts__posts_component$46template.ViewPostsComponent0);
  dart.setMethodSignature(src__components__posts__posts_component$46template.ViewPostsComponent0, () => ({
    __proto__: dart.getMethods(src__components__posts__posts_component$46template.ViewPostsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__posts__posts_component.PostsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__posts__posts_component$46template.ViewPostsComponent0, () => ({
    __proto__: dart.getFields(src__components__posts__posts_component$46template.ViewPostsComponent0.__proto__),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_2_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$5]: dart.fieldType(dart.dynamic),
    [_pipe_async_0$]: dart.fieldType(src__common__pipes__async_pipe.AsyncPipe)
  }));
  dart.defineLazy(src__components__posts__posts_component$46template.ViewPostsComponent0, {
    /*src__components__posts__posts_component$46template.ViewPostsComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__posts__posts_component$46template.viewFactory_PostsComponent0 = function(parentView, parentIndex) {
    return new src__components__posts__posts_component$46template.ViewPostsComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__posts__posts_component$46template, {
    /*src__components__posts__posts_component$46template._PostsComponentNgFactory*/get _PostsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfPostsComponent()).new("posts-component", dart.fn(src__components__posts__posts_component$46template.viewFactory_PostsComponentHost0, AppViewAndintToAppViewOfPostsComponent())));
    }
  });
  dart.copyProperties(src__components__posts__posts_component$46template, {
    get PostsComponentNgFactory() {
      return src__components__posts__posts_component$46template._PostsComponentNgFactory;
    }
  });
  const _compView_0$5 = Symbol('_compView_0');
  const _PostComponent_0_5$1 = Symbol('_PostComponent_0_5');
  const __Document_0_6$ = Symbol('__Document_0_6');
  const __Window_0_7$ = Symbol('__Window_0_7');
  const __DomService_0_8$ = Symbol('__DomService_0_8');
  const __AcxImperativeViewUtils_0_9$ = Symbol('__AcxImperativeViewUtils_0_9');
  const __DomRuler_0_10$ = Symbol('__DomRuler_0_10');
  const __ManagedZone_0_11$ = Symbol('__ManagedZone_0_11');
  const __overlayContainerName_0_12$ = Symbol('__overlayContainerName_0_12');
  const __overlayContainerParent_0_13$ = Symbol('__overlayContainerParent_0_13');
  const __overlayContainer_0_14$ = Symbol('__overlayContainer_0_14');
  const __overlaySyncDom_0_15$ = Symbol('__overlaySyncDom_0_15');
  const __overlayRepositionLoop_0_16$ = Symbol('__overlayRepositionLoop_0_16');
  const __OverlayStyleConfig_0_17$ = Symbol('__OverlayStyleConfig_0_17');
  const __ZIndexer_0_18$ = Symbol('__ZIndexer_0_18');
  const __OverlayDomRenderService_0_19$ = Symbol('__OverlayDomRenderService_0_19');
  const __OverlayService_0_20$ = Symbol('__OverlayService_0_20');
  const _Document_0_6$ = Symbol('_Document_0_6');
  const _Window_0_7$ = Symbol('_Window_0_7');
  const _DomService_0_8$ = Symbol('_DomService_0_8');
  const _AcxImperativeViewUtils_0_9$ = Symbol('_AcxImperativeViewUtils_0_9');
  const _DomRuler_0_10$ = Symbol('_DomRuler_0_10');
  const _ManagedZone_0_11$ = Symbol('_ManagedZone_0_11');
  let const$46;
  let const$47;
  let const$48;
  const _overlayContainerName_0_12$ = Symbol('_overlayContainerName_0_12');
  let const$49;
  let const$50;
  let const$51;
  const _overlayContainerParent_0_13$ = Symbol('_overlayContainerParent_0_13');
  let const$52;
  let const$53;
  let const$54;
  const _overlayContainer_0_14$ = Symbol('_overlayContainer_0_14');
  const _overlaySyncDom_0_15$ = Symbol('_overlaySyncDom_0_15');
  const _overlayRepositionLoop_0_16$ = Symbol('_overlayRepositionLoop_0_16');
  const _OverlayStyleConfig_0_17$ = Symbol('_OverlayStyleConfig_0_17');
  const _ZIndexer_0_18$ = Symbol('_ZIndexer_0_18');
  const _OverlayDomRenderService_0_19$ = Symbol('_OverlayDomRenderService_0_19');
  const _OverlayService_0_20$ = Symbol('_OverlayService_0_20');
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  src__components__posts__posts_component$46template._ViewPostsComponent1 = class _ViewPostsComponent1 extends src__core__linker__app_view.AppView$(src__components__posts__posts_component.PostsComponent) {
    get [_Document_0_6$]() {
      if (this[__Document_0_6$] == null) {
        this[__Document_0_6$] = utils__browser__window__module.getDocument();
      }
      return this[__Document_0_6$];
    }
    get [_Window_0_7$]() {
      if (this[__Window_0_7$] == null) {
        this[__Window_0_7$] = utils__browser__window__module.getWindow();
      }
      return this[__Window_0_7$];
    }
    get [_DomService_0_8$]() {
      if (this[__DomService_0_8$] == null) {
        this[__DomService_0_8$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__browser__dom_service__dom_service.DomService, dart.wrapType(utils__browser__dom_service__dom_service.DomService), dart.fn(() => utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.parentView.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.viewData.parentIndex)), html.Window._check(this[_Window_0_7$])), VoidToDomService())) : utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.parentView.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.viewData.parentIndex)), html.Window._check(this[_Window_0_7$]));
      }
      return this[__DomService_0_8$];
    }
    get [_AcxImperativeViewUtils_0_9$]() {
      if (this[__AcxImperativeViewUtils_0_9$] == null) {
        this[__AcxImperativeViewUtils_0_9$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils), dart.fn(() => new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.parentView.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8$])), VoidToAcxImperativeViewUtils())) : new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.parentView.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8$]));
      }
      return this[__AcxImperativeViewUtils_0_9$];
    }
    get [_DomRuler_0_10$]() {
      if (this[__DomRuler_0_10$] == null) {
        this[__DomRuler_0_10$] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_0_6$]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8$]));
      }
      return this[__DomRuler_0_10$];
    }
    get [_ManagedZone_0_11$]() {
      if (this[__ManagedZone_0_11$] == null) {
        this[__ManagedZone_0_11$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__managed_zone__angular_2.Angular2ManagedZone, dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), dart.fn(() => new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.viewData.parentIndex))), VoidToAngular2ManagedZone())) : new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.viewData.parentIndex)));
      }
      return this[__ManagedZone_0_11$];
    }
    get [_overlayContainerName_0_12$]() {
      if (this[__overlayContainerName_0_12$] == null) {
        this[__overlayContainerName_0_12$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(core.String, const$46 || (const$46 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), dart.fn(() => laminate__overlay__module.getDefaultContainerName(this.parentView.parentView.injectorGet(const$47 || (const$47 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.parentView.viewData.parentIndex, null)), VoidToString())) : laminate__overlay__module.getDefaultContainerName(this.parentView.parentView.injectorGet(const$48 || (const$48 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.parentView.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_12$];
    }
    get [_overlayContainerParent_0_13$]() {
      if (this[__overlayContainerParent_0_13$] == null) {
        this[__overlayContainerParent_0_13$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$49 || (const$49 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), dart.fn(() => laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6$]), this.parentView.parentView.injectorGet(const$50 || (const$50 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.parentView.viewData.parentIndex, null)), VoidToHtmlElement())) : laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6$]), this.parentView.parentView.injectorGet(const$51 || (const$51 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.parentView.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_13$];
    }
    get [_overlayContainer_0_14$]() {
      if (this[__overlayContainer_0_14$] == null) {
        this[__overlayContainer_0_14$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$52 || (const$52 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), dart.fn(() => laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_0_12$]), html.HtmlElement._check(this[_overlayContainerParent_0_13$]), this.parentView.parentView.injectorGet(const$53 || (const$53 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.parentView.viewData.parentIndex, null)), VoidToHtmlElement())) : laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_0_12$]), html.HtmlElement._check(this[_overlayContainerParent_0_13$]), this.parentView.parentView.injectorGet(const$54 || (const$54 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.parentView.viewData.parentIndex, null));
      }
      return this[__overlayContainer_0_14$];
    }
    get [_overlaySyncDom_0_15$]() {
      if (this[__overlaySyncDom_0_15$] == null) {
        this[__overlaySyncDom_0_15$] = true;
      }
      return this[__overlaySyncDom_0_15$];
    }
    get [_overlayRepositionLoop_0_16$]() {
      if (this[__overlayRepositionLoop_0_16$] == null) {
        this[__overlayRepositionLoop_0_16$] = true;
      }
      return this[__overlayRepositionLoop_0_16$];
    }
    get [_OverlayStyleConfig_0_17$]() {
      if (this[__OverlayStyleConfig_0_17$] == null) {
        this[__OverlayStyleConfig_0_17$] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_0_6$]));
      }
      return this[__OverlayStyleConfig_0_17$];
    }
    get [_ZIndexer_0_18$]() {
      if (this[__ZIndexer_0_18$] == null) {
        this[__ZIndexer_0_18$] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_0_18$];
    }
    get [_OverlayDomRenderService_0_19$]() {
      if (this[__OverlayDomRenderService_0_19$] == null) {
        this[__OverlayDomRenderService_0_19$] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_0_17$], html.HtmlElement._check(this[_overlayContainer_0_14$]), core.String._check(this[_overlayContainerName_0_12$]), this[_DomRuler_0_10$], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8$]), utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils._check(this[_AcxImperativeViewUtils_0_9$]), this[_overlaySyncDom_0_15$], this[_overlayRepositionLoop_0_16$], this[_ZIndexer_0_18$]);
      }
      return this[__OverlayDomRenderService_0_19$];
    }
    get [_OverlayService_0_20$]() {
      if (this[__OverlayService_0_20$] == null) {
        this[__OverlayService_0_20$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__overlay__overlay_service.OverlayService, dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), dart.fn(() => new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.viewData.parentIndex)), this[_overlaySyncDom_0_15$], this[_OverlayDomRenderService_0_19$], src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.parentView.viewData.parentIndex, null))), VoidToOverlayService())) : new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.viewData.parentIndex)), this[_overlaySyncDom_0_15$], this[_OverlayDomRenderService_0_19$], src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.parentView.viewData.parentIndex, null)));
      }
      return this[__OverlayService_0_20$];
    }
    build() {
      this[_compView_0$5] = new src__components__posts__post_component$46template.ViewPostComponent0.new(this, 0);
      let _el_0 = this[_compView_0$5].rootEl;
      this[_PostComponent_0_5$1] = new src__components__posts__post_component.PostComponent.new();
      this[_compView_0$5].create(this[_PostComponent_0_5$1], []);
      this.init0(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(html.Document) && 0 === nodeIndex) {
        return this[_Document_0_6$];
      }
      if (token === dart.wrapType(html.Window) && 0 === nodeIndex) {
        return this[_Window_0_7$];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 0 === nodeIndex) {
        return this[_DomService_0_8$];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 0 === nodeIndex) {
        return this[_AcxImperativeViewUtils_0_9$];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 0 === nodeIndex) {
        return this[_DomRuler_0_10$];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 0 === nodeIndex) {
        return this[_ManagedZone_0_11$];
      }
      if (token === (const$55 || (const$55 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName")))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_12$];
      }
      if (token === (const$56 || (const$56 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent")))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_13$];
      }
      if (token === (const$57 || (const$57 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer")))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_14$];
      }
      if (token === (const$58 || (const$58 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom")))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_15$];
      }
      if (token === (const$59 || (const$59 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop")))) && 0 === nodeIndex) {
        return this[_overlayRepositionLoop_0_16$];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 0 === nodeIndex) {
        return this[_OverlayStyleConfig_0_17$];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 0 === nodeIndex) {
        return this[_ZIndexer_0_18$];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 0 === nodeIndex) {
        return this[_OverlayDomRenderService_0_19$];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 0 === nodeIndex) {
        return this[_OverlayService_0_20$];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let local_post = this.locals[$_get]("$implicit");
      let currVal_0 = local_post;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$5], currVal_0))) {
        this[_PostComponent_0_5$1].post = src__models__posts.PostInfo._check(currVal_0);
        this[_expr_0$5] = currVal_0;
      }
      this[_compView_0$5].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$5].destroy();
    }
  };
  (src__components__posts__posts_component$46template._ViewPostsComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$5] = null;
    this[_PostComponent_0_5$1] = null;
    this[__Document_0_6$] = null;
    this[__Window_0_7$] = null;
    this[__DomService_0_8$] = null;
    this[__AcxImperativeViewUtils_0_9$] = null;
    this[__DomRuler_0_10$] = null;
    this[__ManagedZone_0_11$] = null;
    this[__overlayContainerName_0_12$] = null;
    this[__overlayContainerParent_0_13$] = null;
    this[__overlayContainer_0_14$] = null;
    this[__overlaySyncDom_0_15$] = null;
    this[__overlayRepositionLoop_0_16$] = null;
    this[__OverlayStyleConfig_0_17$] = null;
    this[__ZIndexer_0_18$] = null;
    this[__OverlayDomRenderService_0_19$] = null;
    this[__OverlayService_0_20$] = null;
    this[_expr_0$5] = null;
    src__components__posts__posts_component$46template._ViewPostsComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__components__posts__posts_component$46template.ViewPostsComponent0._renderType;
  }).prototype = src__components__posts__posts_component$46template._ViewPostsComponent1.prototype;
  dart.addTypeTests(src__components__posts__posts_component$46template._ViewPostsComponent1);
  dart.setMethodSignature(src__components__posts__posts_component$46template._ViewPostsComponent1, () => ({
    __proto__: dart.getMethods(src__components__posts__posts_component$46template._ViewPostsComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__posts__posts_component.PostsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__components__posts__posts_component$46template._ViewPostsComponent1, () => ({
    __proto__: dart.getGetters(src__components__posts__posts_component$46template._ViewPostsComponent1.__proto__),
    [_Document_0_6$]: dart.dynamic,
    [_Window_0_7$]: dart.dynamic,
    [_DomService_0_8$]: dart.dynamic,
    [_AcxImperativeViewUtils_0_9$]: dart.dynamic,
    [_DomRuler_0_10$]: laminate__ruler__dom_ruler.DomRuler,
    [_ManagedZone_0_11$]: dart.dynamic,
    [_overlayContainerName_0_12$]: dart.dynamic,
    [_overlayContainerParent_0_13$]: dart.dynamic,
    [_overlayContainer_0_14$]: dart.dynamic,
    [_overlaySyncDom_0_15$]: core.bool,
    [_overlayRepositionLoop_0_16$]: core.bool,
    [_OverlayStyleConfig_0_17$]: src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig,
    [_ZIndexer_0_18$]: laminate__overlay__zindexer.ZIndexer,
    [_OverlayDomRenderService_0_19$]: src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService,
    [_OverlayService_0_20$]: dart.dynamic
  }));
  dart.setFieldSignature(src__components__posts__posts_component$46template._ViewPostsComponent1, () => ({
    __proto__: dart.getFields(src__components__posts__posts_component$46template._ViewPostsComponent1.__proto__),
    [_compView_0$5]: dart.fieldType(src__components__posts__post_component$46template.ViewPostComponent0),
    [_PostComponent_0_5$1]: dart.fieldType(src__components__posts__post_component.PostComponent),
    [__Document_0_6$]: dart.fieldType(dart.dynamic),
    [__Window_0_7$]: dart.fieldType(dart.dynamic),
    [__DomService_0_8$]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_0_9$]: dart.fieldType(dart.dynamic),
    [__DomRuler_0_10$]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_0_11$]: dart.fieldType(dart.dynamic),
    [__overlayContainerName_0_12$]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_0_13$]: dart.fieldType(dart.dynamic),
    [__overlayContainer_0_14$]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_0_15$]: dart.fieldType(core.bool),
    [__overlayRepositionLoop_0_16$]: dart.fieldType(core.bool),
    [__OverlayStyleConfig_0_17$]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_0_18$]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_0_19$]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_0_20$]: dart.fieldType(dart.dynamic),
    [_expr_0$5]: dart.fieldType(dart.dynamic)
  }));
  src__components__posts__posts_component$46template.viewFactory_PostsComponent1 = function(parentView, parentIndex) {
    return new src__components__posts__posts_component$46template._ViewPostsComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__posts__posts_component$46template, {
    /*src__components__posts__posts_component$46template.styles$PostsComponentHost*/get styles$PostsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _PostsComponent_0_5 = Symbol('_PostsComponent_0_5');
  src__components__posts__posts_component$46template._ViewPostsComponentHost0 = class _ViewPostsComponentHost0 extends src__core__linker__app_view.AppView$(src__components__posts__posts_component.PostsComponent) {
    build() {
      this[_compView_0$5] = new src__components__posts__posts_component$46template.ViewPostsComponent0.new(this, 0);
      this.rootEl = this[_compView_0$5].rootEl;
      this[_PostsComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__components__posts__posts_component.PostsComponent, dart.wrapType(src__components__posts__posts_component.PostsComponent), dart.fn(() => new src__components__posts__posts_component.PostsComponent.new(src__services__store.StoreService._check(this.injectorGet(dart.wrapType(src__services__store.StoreService), this.viewData.parentIndex))), VoidToPostsComponent())) : new src__components__posts__posts_component.PostsComponent.new(src__services__store.StoreService._check(this.injectorGet(dart.wrapType(src__services__store.StoreService), this.viewData.parentIndex)));
      this[_compView_0$5].create(this[_PostsComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfPostsComponent()).new(0, this, this.rootEl, this[_PostsComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_PostsComponent_0_5].ngOnInit();
      }
      this[_compView_0$5].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$5].destroy();
      this[_PostsComponent_0_5].ngOnDestroy();
    }
  };
  (src__components__posts__posts_component$46template._ViewPostsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$5] = null;
    this[_PostsComponent_0_5] = null;
    src__components__posts__posts_component$46template._ViewPostsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__posts__posts_component$46template._ViewPostsComponentHost0.prototype;
  dart.addTypeTests(src__components__posts__posts_component$46template._ViewPostsComponentHost0);
  dart.setMethodSignature(src__components__posts__posts_component$46template._ViewPostsComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__posts__posts_component$46template._ViewPostsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__posts__posts_component.PostsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__posts__posts_component$46template._ViewPostsComponentHost0, () => ({
    __proto__: dart.getFields(src__components__posts__posts_component$46template._ViewPostsComponentHost0.__proto__),
    [_compView_0$5]: dart.fieldType(src__components__posts__posts_component$46template.ViewPostsComponent0),
    [_PostsComponent_0_5]: dart.fieldType(src__components__posts__posts_component.PostsComponent)
  }));
  src__components__posts__posts_component$46template.viewFactory_PostsComponentHost0 = function(parentView, parentIndex) {
    return new src__components__posts__posts_component$46template._ViewPostsComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__posts__posts_component$46template, {
    /*src__components__posts__posts_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__posts__posts_component$46template.initReflector = function() {
    if (dart.test(src__components__posts__posts_component$46template._visited)) {
      return;
    }
    src__components__posts__posts_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__posts__posts_component.PostsComponent), src__components__posts__posts_component$46template.PostsComponentNgFactory);
    angular$46template.initReflector();
    src__components__posts__post_component$46template.initReflector();
  };
  src__components__waterfalls__waterfalls_component.WaterfallsComponent = class WaterfallsComponent extends core.Object {
    get name() {
      return this[name$2];
    }
    set name(value) {
      this[name$2] = value;
    }
  };
  (src__components__waterfalls__waterfalls_component.WaterfallsComponent.new = function() {
    this[name$2] = "Waterfalls";
  }).prototype = src__components__waterfalls__waterfalls_component.WaterfallsComponent.prototype;
  dart.addTypeTests(src__components__waterfalls__waterfalls_component.WaterfallsComponent);
  const name$2 = Symbol("WaterfallsComponent.name");
  dart.setFieldSignature(src__components__waterfalls__waterfalls_component.WaterfallsComponent, () => ({
    __proto__: dart.getFields(src__components__waterfalls__waterfalls_component.WaterfallsComponent.__proto__),
    name: dart.fieldType(core.String)
  }));
  dart.defineLazy(src__components__waterfalls__waterfalls_component$46template, {
    /*src__components__waterfalls__waterfalls_component$46template.styles$WaterfallsComponent*/get styles$WaterfallsComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _expr_0$6 = Symbol('_expr_0');
  const _text_2$1 = Symbol('_text_2');
  let const$60;
  src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0 = class ViewWaterfallsComponent0 extends src__core__linker__app_view.AppView$(src__components__waterfalls__waterfalls_component.WaterfallsComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createAndAppend(doc, "h1", parentRenderNode);
      let _text_1 = html.Text.new("Hello ");
      _el_0[$append](_text_1);
      this[_text_2$1] = html.Text.new("");
      _el_0[$append](this[_text_2$1]);
      this.init(const$60 || (const$60 = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.name;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$6], currVal_0))) {
        this[_text_2$1][$text] = currVal_0;
        this[_expr_0$6] = currVal_0;
      }
    }
  };
  (src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0.new = function(parentView, parentIndex) {
    this[_expr_0$6] = null;
    this[_text_2$1] = null;
    src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("waterfalls-component"));
    let t = src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0._renderType;
    t == null ? src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:avocado_web/lib/src/components/waterfalls/waterfalls_component.dart" : null, src__core__metadata__view.ViewEncapsulation.None, src__components__waterfalls__waterfalls_component$46template.styles$WaterfallsComponent) : t;
    this.setupComponentType(src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0._renderType);
  }).prototype = src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0.prototype;
  dart.addTypeTests(src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0);
  dart.setMethodSignature(src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0, () => ({
    __proto__: dart.getMethods(src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__waterfalls__waterfalls_component.WaterfallsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0, () => ({
    __proto__: dart.getFields(src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0.__proto__),
    [_expr_0$6]: dart.fieldType(dart.dynamic),
    [_text_2$1]: dart.fieldType(html.Text)
  }));
  dart.defineLazy(src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0, {
    /*src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__waterfalls__waterfalls_component$46template.viewFactory_WaterfallsComponent0 = function(parentView, parentIndex) {
    return new src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__waterfalls__waterfalls_component$46template, {
    /*src__components__waterfalls__waterfalls_component$46template._WaterfallsComponentNgFactory*/get _WaterfallsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfWaterfallsComponent()).new("waterfalls-component", dart.fn(src__components__waterfalls__waterfalls_component$46template.viewFactory_WaterfallsComponentHost0, AppViewAndintToAppViewOfWaterfallsComponent())));
    }
  });
  dart.copyProperties(src__components__waterfalls__waterfalls_component$46template, {
    get WaterfallsComponentNgFactory() {
      return src__components__waterfalls__waterfalls_component$46template._WaterfallsComponentNgFactory;
    }
  });
  dart.defineLazy(src__components__waterfalls__waterfalls_component$46template, {
    /*src__components__waterfalls__waterfalls_component$46template.styles$WaterfallsComponentHost*/get styles$WaterfallsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$6 = Symbol('_compView_0');
  const _WaterfallsComponent_0_5 = Symbol('_WaterfallsComponent_0_5');
  src__components__waterfalls__waterfalls_component$46template._ViewWaterfallsComponentHost0 = class _ViewWaterfallsComponentHost0 extends src__core__linker__app_view.AppView$(src__components__waterfalls__waterfalls_component.WaterfallsComponent) {
    build() {
      this[_compView_0$6] = new src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0.new(this, 0);
      this.rootEl = this[_compView_0$6].rootEl;
      this[_WaterfallsComponent_0_5] = new src__components__waterfalls__waterfalls_component.WaterfallsComponent.new();
      this[_compView_0$6].create(this[_WaterfallsComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfWaterfallsComponent()).new(0, this, this.rootEl, this[_WaterfallsComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$6].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$6].destroy();
    }
  };
  (src__components__waterfalls__waterfalls_component$46template._ViewWaterfallsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$6] = null;
    this[_WaterfallsComponent_0_5] = null;
    src__components__waterfalls__waterfalls_component$46template._ViewWaterfallsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__waterfalls__waterfalls_component$46template._ViewWaterfallsComponentHost0.prototype;
  dart.addTypeTests(src__components__waterfalls__waterfalls_component$46template._ViewWaterfallsComponentHost0);
  dart.setMethodSignature(src__components__waterfalls__waterfalls_component$46template._ViewWaterfallsComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__waterfalls__waterfalls_component$46template._ViewWaterfallsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__waterfalls__waterfalls_component.WaterfallsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__waterfalls__waterfalls_component$46template._ViewWaterfallsComponentHost0, () => ({
    __proto__: dart.getFields(src__components__waterfalls__waterfalls_component$46template._ViewWaterfallsComponentHost0.__proto__),
    [_compView_0$6]: dart.fieldType(src__components__waterfalls__waterfalls_component$46template.ViewWaterfallsComponent0),
    [_WaterfallsComponent_0_5]: dart.fieldType(src__components__waterfalls__waterfalls_component.WaterfallsComponent)
  }));
  src__components__waterfalls__waterfalls_component$46template.viewFactory_WaterfallsComponentHost0 = function(parentView, parentIndex) {
    return new src__components__waterfalls__waterfalls_component$46template._ViewWaterfallsComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__waterfalls__waterfalls_component$46template, {
    /*src__components__waterfalls__waterfalls_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__waterfalls__waterfalls_component$46template.initReflector = function() {
    if (dart.test(src__components__waterfalls__waterfalls_component$46template._visited)) {
      return;
    }
    src__components__waterfalls__waterfalls_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__waterfalls__waterfalls_component.WaterfallsComponent), src__components__waterfalls__waterfalls_component$46template.WaterfallsComponentNgFactory);
    angular$46template.initReflector();
  };
  src__components__food__food_component.FoodComponent = class FoodComponent extends core.Object {
    get name() {
      return this[name$3];
    }
    set name(value) {
      this[name$3] = value;
    }
  };
  (src__components__food__food_component.FoodComponent.new = function() {
    this[name$3] = "Food";
  }).prototype = src__components__food__food_component.FoodComponent.prototype;
  dart.addTypeTests(src__components__food__food_component.FoodComponent);
  const name$3 = Symbol("FoodComponent.name");
  dart.setFieldSignature(src__components__food__food_component.FoodComponent, () => ({
    __proto__: dart.getFields(src__components__food__food_component.FoodComponent.__proto__),
    name: dart.fieldType(core.String)
  }));
  dart.defineLazy(src__components__food__food_component$46template, {
    /*src__components__food__food_component$46template.styles$FoodComponent*/get styles$FoodComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _expr_0$7 = Symbol('_expr_0');
  const _text_2$2 = Symbol('_text_2');
  let const$61;
  src__components__food__food_component$46template.ViewFoodComponent0 = class ViewFoodComponent0 extends src__core__linker__app_view.AppView$(src__components__food__food_component.FoodComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createAndAppend(doc, "h1", parentRenderNode);
      let _text_1 = html.Text.new("Hello ");
      _el_0[$append](_text_1);
      this[_text_2$2] = html.Text.new("");
      _el_0[$append](this[_text_2$2]);
      this.init(const$61 || (const$61 = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.name;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$7], currVal_0))) {
        this[_text_2$2][$text] = currVal_0;
        this[_expr_0$7] = currVal_0;
      }
    }
  };
  (src__components__food__food_component$46template.ViewFoodComponent0.new = function(parentView, parentIndex) {
    this[_expr_0$7] = null;
    this[_text_2$2] = null;
    src__components__food__food_component$46template.ViewFoodComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("food-component"));
    let t = src__components__food__food_component$46template.ViewFoodComponent0._renderType;
    t == null ? src__components__food__food_component$46template.ViewFoodComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:avocado_web/lib/src/components/food/food_component.dart" : null, src__core__metadata__view.ViewEncapsulation.None, src__components__food__food_component$46template.styles$FoodComponent) : t;
    this.setupComponentType(src__components__food__food_component$46template.ViewFoodComponent0._renderType);
  }).prototype = src__components__food__food_component$46template.ViewFoodComponent0.prototype;
  dart.addTypeTests(src__components__food__food_component$46template.ViewFoodComponent0);
  dart.setMethodSignature(src__components__food__food_component$46template.ViewFoodComponent0, () => ({
    __proto__: dart.getMethods(src__components__food__food_component$46template.ViewFoodComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__food__food_component.FoodComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__food__food_component$46template.ViewFoodComponent0, () => ({
    __proto__: dart.getFields(src__components__food__food_component$46template.ViewFoodComponent0.__proto__),
    [_expr_0$7]: dart.fieldType(dart.dynamic),
    [_text_2$2]: dart.fieldType(html.Text)
  }));
  dart.defineLazy(src__components__food__food_component$46template.ViewFoodComponent0, {
    /*src__components__food__food_component$46template.ViewFoodComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__food__food_component$46template.viewFactory_FoodComponent0 = function(parentView, parentIndex) {
    return new src__components__food__food_component$46template.ViewFoodComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__food__food_component$46template, {
    /*src__components__food__food_component$46template._FoodComponentNgFactory*/get _FoodComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfFoodComponent()).new("food-component", dart.fn(src__components__food__food_component$46template.viewFactory_FoodComponentHost0, AppViewAndintToAppViewOfFoodComponent())));
    }
  });
  dart.copyProperties(src__components__food__food_component$46template, {
    get FoodComponentNgFactory() {
      return src__components__food__food_component$46template._FoodComponentNgFactory;
    }
  });
  dart.defineLazy(src__components__food__food_component$46template, {
    /*src__components__food__food_component$46template.styles$FoodComponentHost*/get styles$FoodComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$7 = Symbol('_compView_0');
  const _FoodComponent_0_5 = Symbol('_FoodComponent_0_5');
  src__components__food__food_component$46template._ViewFoodComponentHost0 = class _ViewFoodComponentHost0 extends src__core__linker__app_view.AppView$(src__components__food__food_component.FoodComponent) {
    build() {
      this[_compView_0$7] = new src__components__food__food_component$46template.ViewFoodComponent0.new(this, 0);
      this.rootEl = this[_compView_0$7].rootEl;
      this[_FoodComponent_0_5] = new src__components__food__food_component.FoodComponent.new();
      this[_compView_0$7].create(this[_FoodComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfFoodComponent()).new(0, this, this.rootEl, this[_FoodComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$7].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$7].destroy();
    }
  };
  (src__components__food__food_component$46template._ViewFoodComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$7] = null;
    this[_FoodComponent_0_5] = null;
    src__components__food__food_component$46template._ViewFoodComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__food__food_component$46template._ViewFoodComponentHost0.prototype;
  dart.addTypeTests(src__components__food__food_component$46template._ViewFoodComponentHost0);
  dart.setMethodSignature(src__components__food__food_component$46template._ViewFoodComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__food__food_component$46template._ViewFoodComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__food__food_component.FoodComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__food__food_component$46template._ViewFoodComponentHost0, () => ({
    __proto__: dart.getFields(src__components__food__food_component$46template._ViewFoodComponentHost0.__proto__),
    [_compView_0$7]: dart.fieldType(src__components__food__food_component$46template.ViewFoodComponent0),
    [_FoodComponent_0_5]: dart.fieldType(src__components__food__food_component.FoodComponent)
  }));
  src__components__food__food_component$46template.viewFactory_FoodComponentHost0 = function(parentView, parentIndex) {
    return new src__components__food__food_component$46template._ViewFoodComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__food__food_component$46template, {
    /*src__components__food__food_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__food__food_component$46template.initReflector = function() {
    if (dart.test(src__components__food__food_component$46template._visited)) {
      return;
    }
    src__components__food__food_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__food__food_component.FoodComponent), src__components__food__food_component$46template.FoodComponentNgFactory);
    angular$46template.initReflector();
  };
  src__components__notifications__notifications_component.NotificationsComponent = class NotificationsComponent extends core.Object {
    get name() {
      return this[name$4];
    }
    set name(value) {
      this[name$4] = value;
    }
  };
  (src__components__notifications__notifications_component.NotificationsComponent.new = function() {
    this[name$4] = "Notifications";
  }).prototype = src__components__notifications__notifications_component.NotificationsComponent.prototype;
  dart.addTypeTests(src__components__notifications__notifications_component.NotificationsComponent);
  const name$4 = Symbol("NotificationsComponent.name");
  dart.setFieldSignature(src__components__notifications__notifications_component.NotificationsComponent, () => ({
    __proto__: dart.getFields(src__components__notifications__notifications_component.NotificationsComponent.__proto__),
    name: dart.fieldType(core.String)
  }));
  dart.defineLazy(src__components__notifications__notifications_component$46template, {
    /*src__components__notifications__notifications_component$46template.styles$NotificationsComponent*/get styles$NotificationsComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _expr_0$8 = Symbol('_expr_0');
  const _text_2$3 = Symbol('_text_2');
  let const$62;
  src__components__notifications__notifications_component$46template.ViewNotificationsComponent0 = class ViewNotificationsComponent0 extends src__core__linker__app_view.AppView$(src__components__notifications__notifications_component.NotificationsComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createAndAppend(doc, "h1", parentRenderNode);
      let _text_1 = html.Text.new("Hello ");
      _el_0[$append](_text_1);
      this[_text_2$3] = html.Text.new("");
      _el_0[$append](this[_text_2$3]);
      this.init(const$62 || (const$62 = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.name;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$8], currVal_0))) {
        this[_text_2$3][$text] = currVal_0;
        this[_expr_0$8] = currVal_0;
      }
    }
  };
  (src__components__notifications__notifications_component$46template.ViewNotificationsComponent0.new = function(parentView, parentIndex) {
    this[_expr_0$8] = null;
    this[_text_2$3] = null;
    src__components__notifications__notifications_component$46template.ViewNotificationsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("notifications-component"));
    let t = src__components__notifications__notifications_component$46template.ViewNotificationsComponent0._renderType;
    t == null ? src__components__notifications__notifications_component$46template.ViewNotificationsComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:avocado_web/lib/src/components/notifications/notifications_component.dart" : null, src__core__metadata__view.ViewEncapsulation.None, src__components__notifications__notifications_component$46template.styles$NotificationsComponent) : t;
    this.setupComponentType(src__components__notifications__notifications_component$46template.ViewNotificationsComponent0._renderType);
  }).prototype = src__components__notifications__notifications_component$46template.ViewNotificationsComponent0.prototype;
  dart.addTypeTests(src__components__notifications__notifications_component$46template.ViewNotificationsComponent0);
  dart.setMethodSignature(src__components__notifications__notifications_component$46template.ViewNotificationsComponent0, () => ({
    __proto__: dart.getMethods(src__components__notifications__notifications_component$46template.ViewNotificationsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__notifications__notifications_component.NotificationsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__notifications__notifications_component$46template.ViewNotificationsComponent0, () => ({
    __proto__: dart.getFields(src__components__notifications__notifications_component$46template.ViewNotificationsComponent0.__proto__),
    [_expr_0$8]: dart.fieldType(dart.dynamic),
    [_text_2$3]: dart.fieldType(html.Text)
  }));
  dart.defineLazy(src__components__notifications__notifications_component$46template.ViewNotificationsComponent0, {
    /*src__components__notifications__notifications_component$46template.ViewNotificationsComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__notifications__notifications_component$46template.viewFactory_NotificationsComponent0 = function(parentView, parentIndex) {
    return new src__components__notifications__notifications_component$46template.ViewNotificationsComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__notifications__notifications_component$46template, {
    /*src__components__notifications__notifications_component$46template._NotificationsComponentNgFactory*/get _NotificationsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfNotificationsComponent()).new("notifications-component", dart.fn(src__components__notifications__notifications_component$46template.viewFactory_NotificationsComponentHost0, AppViewAndintToAppViewOfNotificationsComponent())));
    }
  });
  dart.copyProperties(src__components__notifications__notifications_component$46template, {
    get NotificationsComponentNgFactory() {
      return src__components__notifications__notifications_component$46template._NotificationsComponentNgFactory;
    }
  });
  dart.defineLazy(src__components__notifications__notifications_component$46template, {
    /*src__components__notifications__notifications_component$46template.styles$NotificationsComponentHost*/get styles$NotificationsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$8 = Symbol('_compView_0');
  const _NotificationsComponent_0_5 = Symbol('_NotificationsComponent_0_5');
  src__components__notifications__notifications_component$46template._ViewNotificationsComponentHost0 = class _ViewNotificationsComponentHost0 extends src__core__linker__app_view.AppView$(src__components__notifications__notifications_component.NotificationsComponent) {
    build() {
      this[_compView_0$8] = new src__components__notifications__notifications_component$46template.ViewNotificationsComponent0.new(this, 0);
      this.rootEl = this[_compView_0$8].rootEl;
      this[_NotificationsComponent_0_5] = new src__components__notifications__notifications_component.NotificationsComponent.new();
      this[_compView_0$8].create(this[_NotificationsComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfNotificationsComponent()).new(0, this, this.rootEl, this[_NotificationsComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$8].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$8].destroy();
    }
  };
  (src__components__notifications__notifications_component$46template._ViewNotificationsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$8] = null;
    this[_NotificationsComponent_0_5] = null;
    src__components__notifications__notifications_component$46template._ViewNotificationsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__notifications__notifications_component$46template._ViewNotificationsComponentHost0.prototype;
  dart.addTypeTests(src__components__notifications__notifications_component$46template._ViewNotificationsComponentHost0);
  dart.setMethodSignature(src__components__notifications__notifications_component$46template._ViewNotificationsComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__notifications__notifications_component$46template._ViewNotificationsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__notifications__notifications_component.NotificationsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__notifications__notifications_component$46template._ViewNotificationsComponentHost0, () => ({
    __proto__: dart.getFields(src__components__notifications__notifications_component$46template._ViewNotificationsComponentHost0.__proto__),
    [_compView_0$8]: dart.fieldType(src__components__notifications__notifications_component$46template.ViewNotificationsComponent0),
    [_NotificationsComponent_0_5]: dart.fieldType(src__components__notifications__notifications_component.NotificationsComponent)
  }));
  src__components__notifications__notifications_component$46template.viewFactory_NotificationsComponentHost0 = function(parentView, parentIndex) {
    return new src__components__notifications__notifications_component$46template._ViewNotificationsComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__notifications__notifications_component$46template, {
    /*src__components__notifications__notifications_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__notifications__notifications_component$46template.initReflector = function() {
    if (dart.test(src__components__notifications__notifications_component$46template._visited)) {
      return;
    }
    src__components__notifications__notifications_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__notifications__notifications_component.NotificationsComponent), src__components__notifications__notifications_component$46template.NotificationsComponentNgFactory);
    angular$46template.initReflector();
  };
  src__components__posts__video_uploader_component.VideoUploaderComponent = class VideoUploaderComponent extends core.Object {
    get bloc() {
      return this[bloc$0];
    }
    set bloc(value) {
      this[bloc$0] = value;
    }
    get progress() {
      return this[progress];
    }
    set progress(value) {
      this[progress] = value;
    }
    get output() {
      return this[output];
    }
    set output(value) {
      this[output] = value;
    }
    get name() {
      return this[name$5];
    }
    set name(value) {
      this[name$5] = value;
    }
    get content() {
      return this[content];
    }
    set content(value) {
      this[content] = value;
    }
    get status() {
      return this[status];
    }
    set status(value) {
      this[status] = value;
    }
    get imageUpload() {
      return this[imageUpload];
    }
    set imageUpload(value) {
      this[imageUpload] = value;
    }
    get videoUpload() {
      return this[videoUpload];
    }
    set videoUpload(value) {
      this[videoUpload] = value;
    }
    create() {
      this.bloc.create(new src__models__videos.VideoInfo.new({key: null, hashtags: JSArrayOfString().of([]), content: this.content, user: null, date: new core.DateTime.now(), video: null, image: null}), null, null);
    }
  };
  (src__components__posts__video_uploader_component.VideoUploaderComponent.new = function(store) {
    this[progress] = 20;
    this[output] = "";
    this[name$5] = "d";
    this[content] = "test";
    this[status] = "done.";
    this[imageUpload] = null;
    this[videoUpload] = null;
    this[bloc$0] = new src__blocs__VideosBLoC.VideosBLoC.new(store.videosStore);
  }).prototype = src__components__posts__video_uploader_component.VideoUploaderComponent.prototype;
  dart.addTypeTests(src__components__posts__video_uploader_component.VideoUploaderComponent);
  const bloc$0 = Symbol("VideoUploaderComponent.bloc");
  const progress = Symbol("VideoUploaderComponent.progress");
  const output = Symbol("VideoUploaderComponent.output");
  const name$5 = Symbol("VideoUploaderComponent.name");
  const content = Symbol("VideoUploaderComponent.content");
  const status = Symbol("VideoUploaderComponent.status");
  const imageUpload = Symbol("VideoUploaderComponent.imageUpload");
  const videoUpload = Symbol("VideoUploaderComponent.videoUpload");
  dart.setMethodSignature(src__components__posts__video_uploader_component.VideoUploaderComponent, () => ({
    __proto__: dart.getMethods(src__components__posts__video_uploader_component.VideoUploaderComponent.__proto__),
    create: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__posts__video_uploader_component.VideoUploaderComponent, () => ({
    __proto__: dart.getFields(src__components__posts__video_uploader_component.VideoUploaderComponent.__proto__),
    bloc: dart.fieldType(src__blocs__VideosBLoC.VideosBLoC),
    progress: dart.fieldType(core.int),
    output: dart.fieldType(core.String),
    name: dart.fieldType(core.String),
    content: dart.fieldType(core.String),
    status: dart.fieldType(core.String),
    imageUpload: dart.fieldType(html.FileUploadInputElement),
    videoUpload: dart.fieldType(html.FileUploadInputElement)
  }));
  src__components__posts__videos_component.VideosComponent = class VideosComponent extends core.Object {
    get bloc() {
      return this[bloc$1];
    }
    set bloc(value) {
      super.bloc = value;
    }
    delete(video) {}
  };
  (src__components__posts__videos_component.VideosComponent.new = function(store) {
    this[bloc$1] = new src__blocs__VideosBLoC.VideosBLoC.new(store.videosStore);
  }).prototype = src__components__posts__videos_component.VideosComponent.prototype;
  dart.addTypeTests(src__components__posts__videos_component.VideosComponent);
  const bloc$1 = Symbol("VideosComponent.bloc");
  dart.setMethodSignature(src__components__posts__videos_component.VideosComponent, () => ({
    __proto__: dart.getMethods(src__components__posts__videos_component.VideosComponent.__proto__),
    delete: dart.fnType(dart.dynamic, [src__models__videos.VideoInfo])
  }));
  dart.setFieldSignature(src__components__posts__videos_component.VideosComponent, () => ({
    __proto__: dart.getFields(src__components__posts__videos_component.VideosComponent.__proto__),
    bloc: dart.finalFieldType(src__blocs__VideosBLoC.VideosBLoC)
  }));
  dart.defineLazy(src__components__posts__video_uploader_component$46scss$46css$46shim, {
    /*src__components__posts__video_uploader_component$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{width:100%}form._ngcontent-%ID%{display:flex;flex-direction:column}"];
    }
  });
  dart.defineLazy(src__components__posts__video_uploader_component$46template, {
    /*src__components__posts__video_uploader_component$46template.styles$VideoUploaderComponent*/get styles$VideoUploaderComponent() {
      return [css__mdc_web__card__mdc$45card$46scss$46css$46shim.styles, src__components__posts__video_uploader_component$46scss$46css$46shim.styles];
    }
  });
  const _compView_0$9 = Symbol('_compView_0');
  const _DeferredValidator_0_5 = Symbol('_DeferredValidator_0_5');
  const _NgValidators_0_6 = Symbol('_NgValidators_0_6');
  const _NgModel_0_7 = Symbol('_NgModel_0_7');
  const _NgControl_0_8 = Symbol('_NgControl_0_8');
  const _MaterialInputComponent_0_9 = Symbol('_MaterialInputComponent_0_9');
  const _BaseMaterialInput_0_10 = Symbol('_BaseMaterialInput_0_10');
  const _MaterialInputChangeValueAccessor_0_11 = Symbol('_MaterialInputChangeValueAccessor_0_11');
  const _compView_2 = Symbol('_compView_2');
  const _DeferredValidator_2_5 = Symbol('_DeferredValidator_2_5');
  const _NgValidators_2_6 = Symbol('_NgValidators_2_6');
  const _NgModel_2_7 = Symbol('_NgModel_2_7');
  const _NgControl_2_8 = Symbol('_NgControl_2_8');
  const _MaterialInputComponent_2_9 = Symbol('_MaterialInputComponent_2_9');
  const _BaseMaterialInput_2_10 = Symbol('_BaseMaterialInput_2_10');
  const _MaterialInputChangeValueAccessor_2_11 = Symbol('_MaterialInputChangeValueAccessor_2_11');
  const _compView_10$0 = Symbol('_compView_10');
  const _AcxDarkTheme_10_5$0 = Symbol('_AcxDarkTheme_10_5');
  const _MaterialButtonComponent_10_6$0 = Symbol('_MaterialButtonComponent_10_6');
  const _expr_7$ = Symbol('_expr_7');
  const _expr_8$ = Symbol('_expr_8');
  const _expr_9$ = Symbol('_expr_9');
  const _expr_10 = Symbol('_expr_10');
  const _text_14 = Symbol('_text_14');
  const _text_18 = Symbol('_text_18');
  const _text_22 = Symbol('_text_22');
  const _text_26 = Symbol('_text_26');
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  const _handle_ngModelChange_0_0 = Symbol('_handle_ngModelChange_0_0');
  const _handle_ngModelChange_2_0 = Symbol('_handle_ngModelChange_2_0');
  let const$69;
  let const$70;
  let const$71;
  src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0 = class ViewVideoUploaderComponent0 extends src__core__linker__app_view.AppView$(src__components__posts__video_uploader_component.VideoUploaderComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0$9] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 0);
      let _el_0 = this[_compView_0$9].rootEl;
      parentRenderNode[$append](_el_0);
      this.createAttr(_el_0, "changeUpdate", "");
      this.createAttr(_el_0, "label", "name");
      this.addShimC(_el_0);
      this[_DeferredValidator_0_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_0_6] = [this[_DeferredValidator_0_5]];
      this[_NgModel_0_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_0_6], null);
      this[_NgControl_0_8] = this[_NgModel_0_7];
      this[_MaterialInputComponent_0_9] = new material_input__material_input.MaterialInputComponent.new(null, null, null, this[_NgControl_0_8], this[_compView_0$9].ref, this[_DeferredValidator_0_5]);
      this[_BaseMaterialInput_0_10] = this[_MaterialInputComponent_0_9];
      this[_MaterialInputChangeValueAccessor_0_11] = new material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor.new(this[_BaseMaterialInput_0_10], this[_NgControl_0_8]);
      this[_compView_0$9].create(this[_MaterialInputComponent_0_9], [const$63 || (const$63 = dart.constList([], dart.dynamic)), const$64 || (const$64 = dart.constList([], dart.dynamic))]);
      let doc = html.document;
      let _el_1 = src__core__linker__app_view.createAndAppend(doc, "br", parentRenderNode);
      this.addShimE(_el_1);
      this[_compView_2] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      parentRenderNode[$append](_el_2);
      this.createAttr(_el_2, "changeUpdate", "");
      this.createAttr(_el_2, "label", "content");
      this.addShimC(_el_2);
      this[_DeferredValidator_2_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_2_6] = [this[_DeferredValidator_2_5]];
      this[_NgModel_2_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_2_6], null);
      this[_NgControl_2_8] = this[_NgModel_2_7];
      this[_MaterialInputComponent_2_9] = new material_input__material_input.MaterialInputComponent.new(null, null, null, this[_NgControl_2_8], this[_compView_2].ref, this[_DeferredValidator_2_5]);
      this[_BaseMaterialInput_2_10] = this[_MaterialInputComponent_2_9];
      this[_MaterialInputChangeValueAccessor_2_11] = new material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor.new(this[_BaseMaterialInput_2_10], this[_NgControl_2_8]);
      this[_compView_2].create(this[_MaterialInputComponent_2_9], [const$65 || (const$65 = dart.constList([], dart.dynamic)), const$66 || (const$66 = dart.constList([], dart.dynamic))]);
      let _el_3 = src__core__linker__app_view.createAndAppend(doc, "br", parentRenderNode);
      this.addShimE(_el_3);
      let _text_4 = html.Text.new(" ");
      parentRenderNode[$append](_text_4);
      let _el_5 = src__core__linker__app_view.createAndAppend(doc, "input", parentRenderNode);
      this.createAttr(_el_5, "name", "file");
      this.createAttr(_el_5, "type", "file");
      this.addShimC(html.HtmlElement._check(_el_5));
      let _el_6 = src__core__linker__app_view.createAndAppend(doc, "br", parentRenderNode);
      this.addShimE(_el_6);
      let _text_7 = html.Text.new("\n");
      parentRenderNode[$append](_text_7);
      let _el_8 = src__core__linker__app_view.createAndAppend(doc, "input", parentRenderNode);
      this.createAttr(_el_8, "name", "file");
      this.createAttr(_el_8, "type", "file");
      this.addShimC(html.HtmlElement._check(_el_8));
      let _el_9 = src__core__linker__app_view.createAndAppend(doc, "br", parentRenderNode);
      this.addShimE(_el_9);
      this[_compView_10$0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 10);
      let _el_10 = this[_compView_10$0].rootEl;
      parentRenderNode[$append](_el_10);
      _el_10.className = "blue";
      this.createAttr(_el_10, "raised", "");
      this.addShimC(_el_10);
      this[_AcxDarkTheme_10_5$0] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$67 || (const$67 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$68 || (const$68 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_10_6$0] = new material_button__material_button.MaterialButtonComponent.new(_el_10, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_10_5$0]), this[_compView_10$0].ref, null);
      let _text_11 = html.Text.new("Add");
      this[_compView_10$0].create(this[_MaterialButtonComponent_10_6$0], [JSArrayOfText().of([_text_11])]);
      let _el_12 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(_el_12);
      let _text_13 = html.Text.new("--");
      _el_12[$append](_text_13);
      this[_text_14] = html.Text.new("");
      _el_12[$append](this[_text_14]);
      let _text_15 = html.Text.new("--");
      _el_12[$append](_text_15);
      let _el_16 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(_el_16);
      let _text_17 = html.Text.new("--");
      _el_16[$append](_text_17);
      this[_text_18] = html.Text.new("");
      _el_16[$append](this[_text_18]);
      let _text_19 = html.Text.new("--");
      _el_16[$append](_text_19);
      let _el_20 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(_el_20);
      let _text_21 = html.Text.new("--");
      _el_20[$append](_text_21);
      this[_text_22] = html.Text.new("");
      _el_20[$append](this[_text_22]);
      let _text_23 = html.Text.new("--");
      _el_20[$append](_text_23);
      let _el_24 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(_el_24);
      let _text_25 = html.Text.new("--");
      _el_24[$append](_text_25);
      this[_text_26] = html.Text.new("");
      _el_24[$append](this[_text_26]);
      let _text_27 = html.Text.new("--");
      _el_24[$append](_text_27);
      let subscription_0 = this[_NgModel_0_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_0_0)));
      let subscription_1 = this[_NgModel_2_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_2_0)));
      let subscription_2 = this[_MaterialButtonComponent_10_6$0].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'create')));
      this.ctx.imageUpload = html.FileUploadInputElement._check(_el_8);
      this.ctx.videoUpload = html.FileUploadInputElement._check(_el_5);
      this.init(const$69 || (const$69 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1, subscription_2]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 0 === nodeIndex) {
        return this[_DeferredValidator_0_5];
      }
      if (token === (const$70 || (const$70 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators")))) && 0 === nodeIndex) {
        return this[_NgValidators_0_6];
      }
      if (token === dart.wrapType(src__directives__ng_model.NgModel) && 0 === nodeIndex) {
        return this[_NgModel_0_7];
      }
      if (token === dart.wrapType(src__directives__ng_control.NgControl) && 0 === nodeIndex) {
        return this[_NgControl_0_8];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 === nodeIndex) {
        return this[_MaterialInputComponent_0_9];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 0 === nodeIndex) {
        return this[_BaseMaterialInput_0_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor) && 0 === nodeIndex) {
        return this[_MaterialInputChangeValueAccessor_0_11];
      }
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 2 === nodeIndex) {
        return this[_DeferredValidator_2_5];
      }
      if (token === (const$71 || (const$71 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators")))) && 2 === nodeIndex) {
        return this[_NgValidators_2_6];
      }
      if (token === dart.wrapType(src__directives__ng_model.NgModel) && 2 === nodeIndex) {
        return this[_NgModel_2_7];
      }
      if (token === dart.wrapType(src__directives__ng_control.NgControl) && 2 === nodeIndex) {
        return this[_NgControl_2_8];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 2 === nodeIndex) {
        return this[_MaterialInputComponent_2_9];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 2 === nodeIndex) {
        return this[_BaseMaterialInput_2_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor) && 2 === nodeIndex) {
        return this[_MaterialInputChangeValueAccessor_2_11];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 10 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 11) {
        return this[_AcxDarkTheme_10_5$0];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 10 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 11) {
        return this[_MaterialButtonComponent_10_6$0];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_0_7].model = _ctx.name;
      this[_NgModel_0_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_0_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_0_9].label = "name";
        changed = true;
        this[_MaterialInputComponent_0_9].floatingLabel = true;
        changed = true;
      }
      if (changed) {
        this[_compView_0$9].markAsCheckOnce();
      }
      changed = false;
      this[_NgModel_2_7].model = _ctx.content;
      this[_NgModel_2_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_2_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_2_9].label = "content";
        changed = true;
        this[_MaterialInputComponent_2_9].floatingLabel = true;
        changed = true;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialButtonComponent_10_6$0].raised = true;
        changed = true;
      }
      if (changed) {
        this[_compView_10$0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_10_6$0].ngOnInit();
      }
      this[_compView_10$0].detectHostChanges(firstCheck);
      let l = _ctx.output;
      let currVal_7 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7$], currVal_7))) {
        this[_text_14][$text] = currVal_7;
        this[_expr_7$] = currVal_7;
      }
      let l$ = _ctx.name;
      let currVal_8 = l$ != null ? l$ : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8$], currVal_8))) {
        this[_text_18][$text] = currVal_8;
        this[_expr_8$] = currVal_8;
      }
      let l$0 = _ctx.content;
      let currVal_9 = l$0 != null ? l$0 : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9$], currVal_9))) {
        this[_text_22][$text] = currVal_9;
        this[_expr_9$] = currVal_9;
      }
      let l$1 = _ctx.status;
      let currVal_10 = l$1 != null ? l$1 : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_text_26][$text] = currVal_10;
        this[_expr_10] = currVal_10;
      }
      this[_compView_0$9].detectChanges();
      this[_compView_2].detectChanges();
      this[_compView_10$0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_0_9].ngAfterViewInit();
          this[_MaterialInputComponent_2_9].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0$9].destroy();
      this[_compView_2].destroy();
      this[_compView_10$0].destroy();
      this[_MaterialInputComponent_0_9].ngOnDestroy();
      this[_MaterialInputChangeValueAccessor_0_11].ngOnDestroy();
      this[_MaterialInputComponent_2_9].ngOnDestroy();
      this[_MaterialInputChangeValueAccessor_2_11].ngOnDestroy();
    }
    [_handle_ngModelChange_0_0]($event) {
      this.ctx.name = core.String._check($event);
    }
    [_handle_ngModelChange_2_0]($event) {
      this.ctx.content = core.String._check($event);
    }
  };
  (src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0.new = function(parentView, parentIndex) {
    this[_compView_0$9] = null;
    this[_DeferredValidator_0_5] = null;
    this[_NgValidators_0_6] = null;
    this[_NgModel_0_7] = null;
    this[_NgControl_0_8] = null;
    this[_MaterialInputComponent_0_9] = null;
    this[_BaseMaterialInput_0_10] = null;
    this[_MaterialInputChangeValueAccessor_0_11] = null;
    this[_compView_2] = null;
    this[_DeferredValidator_2_5] = null;
    this[_NgValidators_2_6] = null;
    this[_NgModel_2_7] = null;
    this[_NgControl_2_8] = null;
    this[_MaterialInputComponent_2_9] = null;
    this[_BaseMaterialInput_2_10] = null;
    this[_MaterialInputChangeValueAccessor_2_11] = null;
    this[_compView_10$0] = null;
    this[_AcxDarkTheme_10_5$0] = null;
    this[_MaterialButtonComponent_10_6$0] = null;
    this[_expr_7$] = null;
    this[_expr_8$] = null;
    this[_expr_9$] = null;
    this[_expr_10] = null;
    this[_text_14] = null;
    this[_text_18] = null;
    this[_text_22] = null;
    this[_text_26] = null;
    src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("video-uploader-component"));
    let t = src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0._renderType;
    t == null ? src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:avocado_web/lib/src/components/posts/video_uploader_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__components__posts__video_uploader_component$46template.styles$VideoUploaderComponent) : t;
    this.setupComponentType(src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0._renderType);
  }).prototype = src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0.prototype;
  dart.addTypeTests(src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0);
  dart.setMethodSignature(src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0, () => ({
    __proto__: dart.getMethods(src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__posts__video_uploader_component.VideoUploaderComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_2_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0, () => ({
    __proto__: dart.getFields(src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0.__proto__),
    [_compView_0$9]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_0_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_0_6]: dart.fieldType(core.List),
    [_NgModel_0_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_NgControl_0_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_0_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_BaseMaterialInput_0_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputChangeValueAccessor_0_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor),
    [_compView_2]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_2_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_2_6]: dart.fieldType(core.List),
    [_NgModel_2_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_NgControl_2_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_2_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_BaseMaterialInput_2_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputChangeValueAccessor_2_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor),
    [_compView_10$0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_10_5$0]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_10_6$0]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_expr_7$]: dart.fieldType(dart.dynamic),
    [_expr_8$]: dart.fieldType(dart.dynamic),
    [_expr_9$]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_text_14]: dart.fieldType(html.Text),
    [_text_18]: dart.fieldType(html.Text),
    [_text_22]: dart.fieldType(html.Text),
    [_text_26]: dart.fieldType(html.Text)
  }));
  dart.defineLazy(src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0, {
    /*src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__posts__video_uploader_component$46template.viewFactory_VideoUploaderComponent0 = function(parentView, parentIndex) {
    return new src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__posts__video_uploader_component$46template, {
    /*src__components__posts__video_uploader_component$46template._VideoUploaderComponentNgFactory*/get _VideoUploaderComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfVideoUploaderComponent()).new("video-uploader-component", dart.fn(src__components__posts__video_uploader_component$46template.viewFactory_VideoUploaderComponentHost0, AppViewAndintToAppViewOfVideoUploaderComponent())));
    }
  });
  dart.copyProperties(src__components__posts__video_uploader_component$46template, {
    get VideoUploaderComponentNgFactory() {
      return src__components__posts__video_uploader_component$46template._VideoUploaderComponentNgFactory;
    }
  });
  dart.defineLazy(src__components__posts__video_uploader_component$46template, {
    /*src__components__posts__video_uploader_component$46template.styles$VideoUploaderComponentHost*/get styles$VideoUploaderComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _VideoUploaderComponent_0_5 = Symbol('_VideoUploaderComponent_0_5');
  src__components__posts__video_uploader_component$46template._ViewVideoUploaderComponentHost0 = class _ViewVideoUploaderComponentHost0 extends src__core__linker__app_view.AppView$(src__components__posts__video_uploader_component.VideoUploaderComponent) {
    build() {
      this[_compView_0$9] = new src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0.new(this, 0);
      this.rootEl = this[_compView_0$9].rootEl;
      this[_VideoUploaderComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__components__posts__video_uploader_component.VideoUploaderComponent, dart.wrapType(src__components__posts__video_uploader_component.VideoUploaderComponent), dart.fn(() => new src__components__posts__video_uploader_component.VideoUploaderComponent.new(src__services__store.StoreService._check(this.injectorGet(dart.wrapType(src__services__store.StoreService), this.viewData.parentIndex))), VoidToVideoUploaderComponent())) : new src__components__posts__video_uploader_component.VideoUploaderComponent.new(src__services__store.StoreService._check(this.injectorGet(dart.wrapType(src__services__store.StoreService), this.viewData.parentIndex)));
      this[_compView_0$9].create(this[_VideoUploaderComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfVideoUploaderComponent()).new(0, this, this.rootEl, this[_VideoUploaderComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$9].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$9].destroy();
    }
  };
  (src__components__posts__video_uploader_component$46template._ViewVideoUploaderComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$9] = null;
    this[_VideoUploaderComponent_0_5] = null;
    src__components__posts__video_uploader_component$46template._ViewVideoUploaderComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__posts__video_uploader_component$46template._ViewVideoUploaderComponentHost0.prototype;
  dart.addTypeTests(src__components__posts__video_uploader_component$46template._ViewVideoUploaderComponentHost0);
  dart.setMethodSignature(src__components__posts__video_uploader_component$46template._ViewVideoUploaderComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__posts__video_uploader_component$46template._ViewVideoUploaderComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__posts__video_uploader_component.VideoUploaderComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__posts__video_uploader_component$46template._ViewVideoUploaderComponentHost0, () => ({
    __proto__: dart.getFields(src__components__posts__video_uploader_component$46template._ViewVideoUploaderComponentHost0.__proto__),
    [_compView_0$9]: dart.fieldType(src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0),
    [_VideoUploaderComponent_0_5]: dart.fieldType(src__components__posts__video_uploader_component.VideoUploaderComponent)
  }));
  src__components__posts__video_uploader_component$46template.viewFactory_VideoUploaderComponentHost0 = function(parentView, parentIndex) {
    return new src__components__posts__video_uploader_component$46template._ViewVideoUploaderComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__posts__video_uploader_component$46template, {
    /*src__components__posts__video_uploader_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__posts__video_uploader_component$46template.initReflector = function() {
    if (dart.test(src__components__posts__video_uploader_component$46template._visited)) {
      return;
    }
    src__components__posts__video_uploader_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__posts__video_uploader_component.VideoUploaderComponent), src__components__posts__video_uploader_component$46template.VideoUploaderComponentNgFactory);
    angular$46template.initReflector();
    angular_components$46template.initReflector();
  };
  dart.defineLazy(src__components__posts__videos_component$46template, {
    /*src__components__posts__videos_component$46template.styles$VideosComponent*/get styles$VideosComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _appEl_3 = Symbol('_appEl_3');
  const _NgFor_3_9 = Symbol('_NgFor_3_9');
  const _compView_4 = Symbol('_compView_4');
  const _VideoUploaderComponent_4_5 = Symbol('_VideoUploaderComponent_4_5');
  const _expr_0$9 = Symbol('_expr_0');
  const _pipe_async_0$0 = Symbol('_pipe_async_0');
  let const$72;
  src__components__posts__videos_component$46template.ViewVideosComponent0 = class ViewVideosComponent0 extends src__core__linker__app_view.AppView$(src__components__posts__videos_component.VideosComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createAndAppend(doc, "h1", parentRenderNode);
      let _text_1 = html.Text.new("Hello Videos");
      _el_0[$append](_text_1);
      let _el_2 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(_el_2, "style", "display: flex;flex-wrap: wrap;");
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      _el_2[$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(src__components__posts__videos_component$46template.viewFactory_VideosComponent1, AppViewAndintToAppViewOfVideosComponent()));
      this[_NgFor_3_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      this[_compView_4] = new src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      parentRenderNode[$append](_el_4);
      this[_VideoUploaderComponent_4_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__components__posts__video_uploader_component.VideoUploaderComponent, dart.wrapType(src__components__posts__video_uploader_component.VideoUploaderComponent), dart.fn(() => new src__components__posts__video_uploader_component.VideoUploaderComponent.new(src__services__store.StoreService._check(this.parentView.injectorGet(dart.wrapType(src__services__store.StoreService), this.viewData.parentIndex))), VoidToVideoUploaderComponent())) : new src__components__posts__video_uploader_component.VideoUploaderComponent.new(src__services__store.StoreService._check(this.parentView.injectorGet(dart.wrapType(src__services__store.StoreService), this.viewData.parentIndex)));
      this[_compView_4].create(this[_VideoUploaderComponent_4_5], []);
      this[_pipe_async_0$0] = new src__common__pipes__async_pipe.AsyncPipe.new(this.ref);
      this.init(const$72 || (const$72 = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_0 = this[_pipe_async_0$0].transform(_ctx.bloc.videos);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$9], currVal_0))) {
        this[_NgFor_3_9].ngForOf = core.Iterable._check(currVal_0);
        this[_expr_0$9] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_3_9].ngDoCheck();
      }
      if (firstCheck) {
        if (!(_ctx.bloc == null)) {
          this[_VideoUploaderComponent_4_5].bloc = _ctx.bloc;
        }
      }
      this[_appEl_3].detectChangesInNestedViews();
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      this[_appEl_3].destroyNestedViews();
      this[_compView_4].destroy();
      this[_pipe_async_0$0].ngOnDestroy();
    }
  };
  (src__components__posts__videos_component$46template.ViewVideosComponent0.new = function(parentView, parentIndex) {
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_compView_4] = null;
    this[_VideoUploaderComponent_4_5] = null;
    this[_expr_0$9] = null;
    this[_pipe_async_0$0] = null;
    src__components__posts__videos_component$46template.ViewVideosComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("videos-component"));
    let t = src__components__posts__videos_component$46template.ViewVideosComponent0._renderType;
    t == null ? src__components__posts__videos_component$46template.ViewVideosComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:avocado_web/lib/src/components/posts/videos_component.dart" : null, src__core__metadata__view.ViewEncapsulation.None, src__components__posts__videos_component$46template.styles$VideosComponent) : t;
    this.setupComponentType(src__components__posts__videos_component$46template.ViewVideosComponent0._renderType);
  }).prototype = src__components__posts__videos_component$46template.ViewVideosComponent0.prototype;
  dart.addTypeTests(src__components__posts__videos_component$46template.ViewVideosComponent0);
  dart.setMethodSignature(src__components__posts__videos_component$46template.ViewVideosComponent0, () => ({
    __proto__: dart.getMethods(src__components__posts__videos_component$46template.ViewVideosComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__posts__videos_component.VideosComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__posts__videos_component$46template.ViewVideosComponent0, () => ({
    __proto__: dart.getFields(src__components__posts__videos_component$46template.ViewVideosComponent0.__proto__),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_3_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_compView_4]: dart.fieldType(src__components__posts__video_uploader_component$46template.ViewVideoUploaderComponent0),
    [_VideoUploaderComponent_4_5]: dart.fieldType(src__components__posts__video_uploader_component.VideoUploaderComponent),
    [_expr_0$9]: dart.fieldType(dart.dynamic),
    [_pipe_async_0$0]: dart.fieldType(src__common__pipes__async_pipe.AsyncPipe)
  }));
  dart.defineLazy(src__components__posts__videos_component$46template.ViewVideosComponent0, {
    /*src__components__posts__videos_component$46template.ViewVideosComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__posts__videos_component$46template.viewFactory_VideosComponent0 = function(parentView, parentIndex) {
    return new src__components__posts__videos_component$46template.ViewVideosComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__posts__videos_component$46template, {
    /*src__components__posts__videos_component$46template._VideosComponentNgFactory*/get _VideosComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfVideosComponent()).new("videos-component", dart.fn(src__components__posts__videos_component$46template.viewFactory_VideosComponentHost0, AppViewAndintToAppViewOfVideosComponent())));
    }
  });
  dart.copyProperties(src__components__posts__videos_component$46template, {
    get VideosComponentNgFactory() {
      return src__components__posts__videos_component$46template._VideosComponentNgFactory;
    }
  });
  const _compView_9 = Symbol('_compView_9');
  const _AcxDarkTheme_9_5 = Symbol('_AcxDarkTheme_9_5');
  const _MaterialButtonComponent_9_6 = Symbol('_MaterialButtonComponent_9_6');
  const _compView_10$1 = Symbol('_compView_10');
  const _MaterialIconComponent_10_5 = Symbol('_MaterialIconComponent_10_5');
  const _expr_1$0 = Symbol('_expr_1');
  const _text_2$4 = Symbol('_text_2');
  const _text_6 = Symbol('_text_6');
  let const$73;
  let const$74;
  const _handle_trigger_9_0 = Symbol('_handle_trigger_9_0');
  src__components__posts__videos_component$46template._ViewVideosComponent1 = class _ViewVideosComponent1 extends src__core__linker__app_view.AppView$(src__components__posts__videos_component.VideosComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.createAttr(_el_0, "style", "border: 1px solid red; margin: 5px");
      let _text_1 = html.Text.new("key:");
      _el_0[$append](_text_1);
      this[_text_2$4] = html.Text.new("");
      _el_0[$append](this[_text_2$4]);
      let _text_3 = html.Text.new(" ");
      _el_0[$append](_text_3);
      let _el_4 = src__core__linker__app_view.createAndAppend(doc, "br", _el_0);
      let _text_5 = html.Text.new(" ");
      _el_0[$append](_text_5);
      this[_text_6] = html.Text.new("");
      _el_0[$append](this[_text_6]);
      let _text_7 = html.Text.new(" ");
      _el_0[$append](_text_7);
      let _el_8 = src__core__linker__app_view.createAndAppend(doc, "br", _el_0);
      this[_compView_9] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 9);
      let _el_9 = this[_compView_9].rootEl;
      _el_0[$append](_el_9);
      _el_9.className = "material-drawer-button";
      this.createAttr(_el_9, "icon", "");
      this[_AcxDarkTheme_9_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$73 || (const$73 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$74 || (const$74 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_9_6] = new material_button__material_button.MaterialButtonComponent.new(_el_9, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_9_5]), this[_compView_9].ref, null);
      this[_compView_10$1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 10);
      let _el_10 = this[_compView_10$1].rootEl;
      this.createAttr(_el_10, "icon", "menu");
      this[_MaterialIconComponent_10_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_10);
      this[_compView_10$1].create(this[_MaterialIconComponent_10_5], []);
      this[_compView_9].create(this[_MaterialButtonComponent_9_6], [JSArrayOfHtmlElement().of([_el_10])]);
      let subscription_0 = this[_MaterialButtonComponent_9_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_9_0)));
      this.init([_el_0], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 9 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 10) {
        return this[_AcxDarkTheme_9_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 9 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 10) {
        return this[_MaterialButtonComponent_9_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_video = this.locals[$_get]("$implicit");
      changed = false;
      if (changed) {
        this[_compView_9].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_9_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_10_5].icon = "menu";
        changed = true;
      }
      if (changed) {
        this[_compView_10$1].markAsCheckOnce();
      }
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(dart.dload(local_video, 'key'));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$9], currVal_0))) {
        this[_text_2$4][$text] = core.String._check(currVal_0);
        this[_expr_0$9] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(dart.dload(local_video, 'content'));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$0], currVal_1))) {
        this[_text_6][$text] = core.String._check(currVal_1);
        this[_expr_1$0] = currVal_1;
      }
      this[_compView_9].detectHostChanges(firstCheck);
      this[_compView_9].detectChanges();
      this[_compView_10$1].detectChanges();
    }
    destroyInternal() {
      this[_compView_9].destroy();
      this[_compView_10$1].destroy();
    }
    [_handle_trigger_9_0]($event) {
      let local_video = this.locals[$_get]("$implicit");
      this.ctx.delete(src__models__videos.VideoInfo._check(local_video));
    }
  };
  (src__components__posts__videos_component$46template._ViewVideosComponent1.new = function(parentView, parentIndex) {
    this[_compView_9] = null;
    this[_AcxDarkTheme_9_5] = null;
    this[_MaterialButtonComponent_9_6] = null;
    this[_compView_10$1] = null;
    this[_MaterialIconComponent_10_5] = null;
    this[_expr_0$9] = null;
    this[_expr_1$0] = null;
    this[_text_2$4] = null;
    this[_text_6] = null;
    src__components__posts__videos_component$46template._ViewVideosComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__components__posts__videos_component$46template.ViewVideosComponent0._renderType;
  }).prototype = src__components__posts__videos_component$46template._ViewVideosComponent1.prototype;
  dart.addTypeTests(src__components__posts__videos_component$46template._ViewVideosComponent1);
  dart.setMethodSignature(src__components__posts__videos_component$46template._ViewVideosComponent1, () => ({
    __proto__: dart.getMethods(src__components__posts__videos_component$46template._ViewVideosComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__posts__videos_component.VideosComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_9_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__components__posts__videos_component$46template._ViewVideosComponent1, () => ({
    __proto__: dart.getFields(src__components__posts__videos_component$46template._ViewVideosComponent1.__proto__),
    [_compView_9]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_9_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_9_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_10$1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_10_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0$9]: dart.fieldType(dart.dynamic),
    [_expr_1$0]: dart.fieldType(dart.dynamic),
    [_text_2$4]: dart.fieldType(html.Text),
    [_text_6]: dart.fieldType(html.Text)
  }));
  src__components__posts__videos_component$46template.viewFactory_VideosComponent1 = function(parentView, parentIndex) {
    return new src__components__posts__videos_component$46template._ViewVideosComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__posts__videos_component$46template, {
    /*src__components__posts__videos_component$46template.styles$VideosComponentHost*/get styles$VideosComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$10 = Symbol('_compView_0');
  const _VideosComponent_0_5 = Symbol('_VideosComponent_0_5');
  src__components__posts__videos_component$46template._ViewVideosComponentHost0 = class _ViewVideosComponentHost0 extends src__core__linker__app_view.AppView$(src__components__posts__videos_component.VideosComponent) {
    build() {
      this[_compView_0$10] = new src__components__posts__videos_component$46template.ViewVideosComponent0.new(this, 0);
      this.rootEl = this[_compView_0$10].rootEl;
      this[_VideosComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__components__posts__videos_component.VideosComponent, dart.wrapType(src__components__posts__videos_component.VideosComponent), dart.fn(() => new src__components__posts__videos_component.VideosComponent.new(src__services__store.StoreService._check(this.injectorGet(dart.wrapType(src__services__store.StoreService), this.viewData.parentIndex))), VoidToVideosComponent())) : new src__components__posts__videos_component.VideosComponent.new(src__services__store.StoreService._check(this.injectorGet(dart.wrapType(src__services__store.StoreService), this.viewData.parentIndex)));
      this[_compView_0$10].create(this[_VideosComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfVideosComponent()).new(0, this, this.rootEl, this[_VideosComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$10].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$10].destroy();
    }
  };
  (src__components__posts__videos_component$46template._ViewVideosComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$10] = null;
    this[_VideosComponent_0_5] = null;
    src__components__posts__videos_component$46template._ViewVideosComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__posts__videos_component$46template._ViewVideosComponentHost0.prototype;
  dart.addTypeTests(src__components__posts__videos_component$46template._ViewVideosComponentHost0);
  dart.setMethodSignature(src__components__posts__videos_component$46template._ViewVideosComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__posts__videos_component$46template._ViewVideosComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__posts__videos_component.VideosComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__posts__videos_component$46template._ViewVideosComponentHost0, () => ({
    __proto__: dart.getFields(src__components__posts__videos_component$46template._ViewVideosComponentHost0.__proto__),
    [_compView_0$10]: dart.fieldType(src__components__posts__videos_component$46template.ViewVideosComponent0),
    [_VideosComponent_0_5]: dart.fieldType(src__components__posts__videos_component.VideosComponent)
  }));
  src__components__posts__videos_component$46template.viewFactory_VideosComponentHost0 = function(parentView, parentIndex) {
    return new src__components__posts__videos_component$46template._ViewVideosComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__posts__videos_component$46template, {
    /*src__components__posts__videos_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__posts__videos_component$46template.initReflector = function() {
    if (dart.test(src__components__posts__videos_component$46template._visited)) {
      return;
    }
    src__components__posts__videos_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__posts__videos_component.VideosComponent), src__components__posts__videos_component$46template.VideosComponentNgFactory);
    angular$46template.initReflector();
    angular_components$46template.initReflector();
    src__components__posts__video_uploader_component$46template.initReflector();
  };
  dart.trackLibraries("packages/avocado_web/src/components/clients/client_component.ddc", {
    "package:avocado_web/src/components/dashborad/dashboard_component.dart": src__components__dashborad__dashboard_component,
    "package:avocado_web/src/components/dashborad/dashboard_component.template.dart": src__components__dashborad__dashboard_component$46template,
    "package:avocado_web/src/components/feed/post_component.dart": src__components__feed__post_component,
    "package:avocado_web/src/components/feed/feed_component.dart": src__components__feed__feed_component,
    "package:avocado_web/src/components/clients/clients_component.dart": src__components__clients__clients_component,
    "package:avocado_web/src/components/feed/post_component.scss.css.shim.dart": src__components__feed__post_component$46scss$46css$46shim,
    "package:avocado_web/src/components/feed/post_component.template.dart": src__components__feed__post_component$46template,
    "package:avocado_web/src/components/feed/feed_component.template.dart": src__components__feed__feed_component$46template,
    "package:avocado_web/src/components/clients/clients_component.template.dart": src__components__clients__clients_component$46template,
    "package:avocado_web/src/components/clients/client_component.dart": src__components__clients__client_component,
    "package:avocado_web/src/components/clients/client_component.template.dart": src__components__clients__client_component$46template,
    "package:avocado_web/src/components/posts/video_component.dart": src__components__posts__video_component,
    "package:avocado_web/src/components/posts/post_component.dart": src__components__posts__post_component,
    "package:avocado_web/src/components/posts/posts_component.dart": src__components__posts__posts_component,
    "package:avocado_web/src/components/posts/video_component.template.dart": src__components__posts__video_component$46template,
    "package:avocado_web/src/components/posts/post_component.scss.css.shim.dart": src__components__posts__post_component$46scss$46css$46shim,
    "package:avocado_web/src/components/posts/post_component.template.dart": src__components__posts__post_component$46template,
    "package:avocado_web/src/components/posts/posts_component.template.dart": src__components__posts__posts_component$46template,
    "package:avocado_web/src/components/waterfalls/waterfalls_component.dart": src__components__waterfalls__waterfalls_component,
    "package:avocado_web/src/components/waterfalls/waterfalls_component.template.dart": src__components__waterfalls__waterfalls_component$46template,
    "package:avocado_web/src/components/food/food_component.dart": src__components__food__food_component,
    "package:avocado_web/src/components/food/food_component.template.dart": src__components__food__food_component$46template,
    "package:avocado_web/src/components/notifications/notifications_component.dart": src__components__notifications__notifications_component,
    "package:avocado_web/src/components/notifications/notifications_component.template.dart": src__components__notifications__notifications_component$46template,
    "package:avocado_web/src/components/posts/video_uploader_component.dart": src__components__posts__video_uploader_component,
    "package:avocado_web/src/components/posts/videos_component.dart": src__components__posts__videos_component,
    "package:avocado_web/src/components/posts/video_uploader_component.scss.css.shim.dart": src__components__posts__video_uploader_component$46scss$46css$46shim,
    "package:avocado_web/src/components/posts/video_uploader_component.template.dart": src__components__posts__video_uploader_component$46template,
    "package:avocado_web/src/components/posts/videos_component.template.dart": src__components__posts__videos_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["../dashborad/dashboard_component.dart","../dashborad/dashboard_component.template.dart","../feed/post_component.dart","../feed/feed_component.dart","clients_component.dart","../feed/post_component.scss.css.shim.dart","../feed/post_component.template.dart","../feed/feed_component.template.dart","clients_component.template.dart","client_component.dart","client_component.template.dart","../posts/video_component.dart","../posts/post_component.dart","../posts/posts_component.dart","../posts/video_component.template.dart","../posts/post_component.scss.css.shim.dart","../posts/post_component.template.dart","../posts/posts_component.template.dart","../waterfalls/waterfalls_component.dart","../waterfalls/waterfalls_component.template.dart","../food/food_component.dart","../food/food_component.template.dart","../notifications/notifications_component.dart","../notifications/notifications_component.template.dart","../posts/video_uploader_component.dart","../posts/videos_component.dart","../posts/video_uploader_component.scss.css.shim.dart","../posts/video_uploader_component.template.dart","../posts/videos_component.template.dart"],"names":[],"mappings":"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","file":"client_component.ddc.js"}');
  // Exports:
  return {
    src__components__dashborad__dashboard_component: src__components__dashborad__dashboard_component,
    src__components__dashborad__dashboard_component$46template: src__components__dashborad__dashboard_component$46template,
    src__components__feed__post_component: src__components__feed__post_component,
    src__components__feed__feed_component: src__components__feed__feed_component,
    src__components__clients__clients_component: src__components__clients__clients_component,
    src__components__feed__post_component$46scss$46css$46shim: src__components__feed__post_component$46scss$46css$46shim,
    src__components__feed__post_component$46template: src__components__feed__post_component$46template,
    src__components__feed__feed_component$46template: src__components__feed__feed_component$46template,
    src__components__clients__clients_component$46template: src__components__clients__clients_component$46template,
    src__components__clients__client_component: src__components__clients__client_component,
    src__components__clients__client_component$46template: src__components__clients__client_component$46template,
    src__components__posts__video_component: src__components__posts__video_component,
    src__components__posts__post_component: src__components__posts__post_component,
    src__components__posts__posts_component: src__components__posts__posts_component,
    src__components__posts__video_component$46template: src__components__posts__video_component$46template,
    src__components__posts__post_component$46scss$46css$46shim: src__components__posts__post_component$46scss$46css$46shim,
    src__components__posts__post_component$46template: src__components__posts__post_component$46template,
    src__components__posts__posts_component$46template: src__components__posts__posts_component$46template,
    src__components__waterfalls__waterfalls_component: src__components__waterfalls__waterfalls_component,
    src__components__waterfalls__waterfalls_component$46template: src__components__waterfalls__waterfalls_component$46template,
    src__components__food__food_component: src__components__food__food_component,
    src__components__food__food_component$46template: src__components__food__food_component$46template,
    src__components__notifications__notifications_component: src__components__notifications__notifications_component,
    src__components__notifications__notifications_component$46template: src__components__notifications__notifications_component$46template,
    src__components__posts__video_uploader_component: src__components__posts__video_uploader_component,
    src__components__posts__videos_component: src__components__posts__videos_component,
    src__components__posts__video_uploader_component$46scss$46css$46shim: src__components__posts__video_uploader_component$46scss$46css$46shim,
    src__components__posts__video_uploader_component$46template: src__components__posts__video_uploader_component$46template,
    src__components__posts__videos_component$46template: src__components__posts__videos_component$46template
  };
});

//# sourceMappingURL=client_component.ddc.js.map
