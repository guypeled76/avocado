// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/app_layout/material_persistent_drawer.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content.template.dart' as _ref2;
import 'package:angular_components/material_button/material_button.template.dart' as _ref3;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref4;
import 'package:angular_components/material_list/material_list.template.dart' as _ref5;
import 'package:angular_components/material_list/material_list_item.template.dart' as _ref6;
import 'package:angular_components/material_toggle/material_toggle.template.dart' as _ref7;
import 'package:angular_router/angular_router.template.dart' as _ref8;
import 'package:avocado_web/app_routes.template.dart' as _ref9;
import 'src/pipes/index.template.dart' as _ref10;
import 'src/todo_list/todo_list_component.template.dart' as _ref11;
import 'package:avocado_web/app_component.scss.css.shim.dart' as import0;
import 'package:angular_components/app_layout/layout.scss.css.shim.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import3;
import 'package:angular_components/app_layout/material_persistent_drawer.template.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular_components/content/deferred_content.dart' as import6;
import 'package:angular_components/material_button/material_button.template.dart' as import7;
import 'package:angular_components/material_button/material_button.dart' as import8;
import 'package:angular_components/material_icon/material_icon.template.dart' as import9;
import 'package:angular_components/material_icon/material_icon.dart' as import10;
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import11;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_router/src/directives/router_outlet_directive.dart' as import13;
import 'package:angular/src/common/pipes/async_pipe.dart' as import14;
import 'src/pipes/isnull.dart' as import15;
import 'dart:core';
import 'dart:html' as import17;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import19;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import21;
import 'package:angular/src/runtime.dart' as import22;
import 'package:angular/angular.dart';
import 'package:angular_components/app_layout/material_persistent_drawer.dart' as import24;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/di/errors.dart' as import26;
import 'package:angular_components/theme/dark_theme.dart' as import27;
import 'package:angular/src/core/di/opaque_token.dart' as import28;
import 'package:angular_router/src/directives/router_link_directive.dart' as import29;
import 'package:angular_router/src/router/router.dart' as import30;
import 'package:angular_router/src/location/location.dart' as import31;
import 'package:angular_router/src/router/router_outlet_token.dart' as import32;
import 'package:angular_router/src/router_hook.dart' as import33;
import 'package:angular_components/content/deferred_content_aware.dart' as import34;
import 'package:angular_components/button_decorator/button_decorator.dart' as import35;
import 'package:angular_components/interfaces/has_disabled.dart' as import36;
import 'app_routes.dart' as import37;
import 'package:angular_components/material_list/material_list.template.dart' as import38;
import 'package:angular_components/material_list/material_list.dart' as import39;
import 'package:angular_components/material_list/material_list_item.template.dart' as import40;
import 'package:angular_components/material_list/material_list_item.dart' as import41;
import 'package:angular_router/src/directives/router_link_active_directive.dart' as import42;
import 'package:angular_components/mixins/material_dropdown_base.dart' as import43;
import 'package:avocado_common/src/services/store.dart' as import44;

final List<dynamic> styles$AppComponent = [import0.styles, import1.styles];

class ViewAppComponent0 extends AppView<import3.AppComponent> {
  import4.MaterialPersistentDrawerDirectiveNgCd _MaterialPersistentDrawerDirective_0_5;
  ViewContainer _appEl_1;
  import6.DeferredContentDirective _DeferredContentDirective_1_9;
  import7.ViewMaterialButtonComponent0 _compView_5;
  dynamic _AcxDarkTheme_5_5;
  import8.MaterialButtonComponent _MaterialButtonComponent_5_6;
  import9.ViewMaterialIconComponent0 _compView_6;
  import10.MaterialIconComponent _MaterialIconComponent_6_5;
  import7.ViewMaterialButtonComponent0 _compView_11;
  dynamic _AcxDarkTheme_11_5;
  import8.MaterialButtonComponent _MaterialButtonComponent_11_6;
  import11.RouterLinkNgCd _RouterLink_11_7;
  import9.ViewMaterialIconComponent0 _compView_12;
  import10.MaterialIconComponent _MaterialIconComponent_12_5;
  ViewContainer _appEl_14;
  NgIf _NgIf_14_9;
  ViewContainer _appEl_15;
  NgIf _NgIf_15_9;
  ViewContainer _appEl_17;
  import13.RouterOutlet _RouterOutlet_17_8;
  bool _expr_0;
  var _expr_1;
  String _expr_4;
  import14.AsyncPipe _pipe_async_0;
  import15.NotNull _pipe_notnull_1;
  bool Function(dynamic) _pipe_notnull_1_0;
  import14.AsyncPipe _pipe_async_2;
  import15.IsNull _pipe_isnull_3;
  bool Function(dynamic) _pipe_isnull_3_0;
  import17.Element _el_0;
  import17.Element _el_11;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import19.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import17.document.createElement('my-app');
    _renderType ??= import21.appViewUtils.createRenderType((import22.isDevMode ? 'asset:avocado_web/lib/app_component.dart' : null), ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    final _rootEl = rootEl;
    final import17.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import17.document;
    _el_0 = createAndAppend(doc, 'material-drawer', parentRenderNode);
    createAttr(_el_0, 'persistent', '');
    addShimE(_el_0);
    _MaterialPersistentDrawerDirective_0_5 = import4.MaterialPersistentDrawerDirectiveNgCd(import24.MaterialPersistentDrawerDirective());
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_AppComponent1);
    _DeferredContentDirective_1_9 = import6.DeferredContentDirective(_appEl_1, _TemplateRef_1_8, _MaterialPersistentDrawerDirective_0_5.instance);
    final _el_2 = createAndAppend(doc, 'material-content', parentRenderNode);
    _el_2.className = 'main-area';
    addShimE(_el_2);
    final _el_3 = createAndAppend(doc, 'header', _el_2);
    _el_3.className = 'material-dialog-title shadow';
    createAttr(_el_3, 'style', 'flex:none');
    addShimE(_el_3);
    final _el_4 = createDivAndAppend(doc, _el_3);
    _el_4.className = 'material-header-row';
    addShimC(_el_4);
    _compView_5 = import7.ViewMaterialButtonComponent0(this, 5);
    final _el_5 = _compView_5.rootEl;
    _el_4.append(_el_5);
    _el_5.className = 'material-drawer-button';
    createAttr(_el_5, 'icon', '');
    addShimC(_el_5);
    _AcxDarkTheme_5_5 = (import22.isDevMode
        ? import26.debugInjectorWrap(import27.AcxDarkTheme, () {
            return import27.AcxDarkTheme(parentView.injectorGet(const import28.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import27.AcxDarkTheme(parentView.injectorGet(const import28.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_5_6 = import8.MaterialButtonComponent(_el_5, _AcxDarkTheme_5_5, _compView_5.ref, null);
    _compView_6 = import9.ViewMaterialIconComponent0(this, 6);
    final _el_6 = _compView_6.rootEl;
    createAttr(_el_6, 'icon', 'menu');
    addShimC(_el_6);
    _MaterialIconComponent_6_5 = import10.MaterialIconComponent(_el_6);
    _compView_6.create(_MaterialIconComponent_6_5, []);
    _compView_5.create(_MaterialButtonComponent_5_6, [
      [_el_6]
    ]);
    final _el_7 = createSpanAndAppend(doc, _el_4);
    _el_7.className = 'material-header-title';
    addShimE(_el_7);
    final _text_8 = import17.Text('Avocado Clinic');
    _el_7.append(_text_8);
    final _el_9 = createDivAndAppend(doc, _el_4);
    _el_9.className = 'material-spacer';
    addShimC(_el_9);
    final _el_10 = createAndAppend(doc, 'nav', _el_4);
    _el_10.className = 'material-navigation';
    addShimE(_el_10);
    _compView_11 = import7.ViewMaterialButtonComponent0(this, 11);
    _el_11 = _compView_11.rootEl;
    _el_10.append(_el_11);
    _el_11.className = 'material-drawer-button';
    createAttr(_el_11, 'icon', '');
    createAttr(_el_11, 'materialTooltip', 'Notifications');
    addShimC(_el_11);
    _AcxDarkTheme_11_5 = (import22.isDevMode
        ? import26.debugInjectorWrap(import27.AcxDarkTheme, () {
            return import27.AcxDarkTheme(parentView.injectorGet(const import28.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import27.AcxDarkTheme(parentView.injectorGet(const import28.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_11_6 = import8.MaterialButtonComponent(_el_11, _AcxDarkTheme_11_5, _compView_11.ref, null);
    _RouterLink_11_7 = import11.RouterLinkNgCd((import22.isDevMode
        ? import26.debugInjectorWrap(import29.RouterLink, () {
            return import29.RouterLink(parentView.injectorGet(import30.Router, viewData.parentIndex), parentView.injectorGet(import31.Location, viewData.parentIndex), null, _el_11);
          })
        : import29.RouterLink(parentView.injectorGet(import30.Router, viewData.parentIndex), parentView.injectorGet(import31.Location, viewData.parentIndex), null, _el_11)));
    _compView_12 = import9.ViewMaterialIconComponent0(this, 12);
    final _el_12 = _compView_12.rootEl;
    createAttr(_el_12, 'icon', 'notifications');
    addShimC(_el_12);
    _MaterialIconComponent_12_5 = import10.MaterialIconComponent(_el_12);
    _compView_12.create(_MaterialIconComponent_12_5, []);
    _compView_11.create(_MaterialButtonComponent_11_6, [
      [_el_12]
    ]);
    final _el_13 = createAndAppend(doc, 'nav', _el_4);
    _el_13.className = 'material-navigation';
    addShimE(_el_13);
    final _anchor_14 = createViewContainerAnchor();
    _el_13.append(_anchor_14);
    _appEl_14 = ViewContainer(14, 13, this, _anchor_14);
    TemplateRef _TemplateRef_14_8 = TemplateRef(_appEl_14, viewFactory_AppComponent2);
    _NgIf_14_9 = NgIf(_appEl_14, _TemplateRef_14_8);
    final _anchor_15 = createViewContainerAnchor();
    _el_13.append(_anchor_15);
    _appEl_15 = ViewContainer(15, 13, this, _anchor_15);
    TemplateRef _TemplateRef_15_8 = TemplateRef(_appEl_15, viewFactory_AppComponent3);
    _NgIf_15_9 = NgIf(_appEl_15, _TemplateRef_15_8);
    final _el_16 = createDivAndAppend(doc, _el_2);
    _el_16.className = 'content-area';
    addShimC(_el_16);
    final _el_17 = createAndAppend(doc, 'router-outlet', _el_16);
    addShimE(_el_17);
    _appEl_17 = ViewContainer(17, 16, this, _el_17);
    _RouterOutlet_17_8 = (import22.isDevMode
        ? import26.debugInjectorWrap(import13.RouterOutlet, () {
            return import13.RouterOutlet(parentView.injectorGet(import32.RouterOutletToken, viewData.parentIndex, null), _appEl_17, parentView.injectorGet(import30.Router, viewData.parentIndex), parentView.injectorGet(import33.RouterHook, viewData.parentIndex, null));
          })
        : import13.RouterOutlet(parentView.injectorGet(import32.RouterOutletToken, viewData.parentIndex, null), _appEl_17, parentView.injectorGet(import30.Router, viewData.parentIndex), parentView.injectorGet(import33.RouterHook, viewData.parentIndex, null)));
    final subscription_0 = _MaterialButtonComponent_5_6.trigger.listen(eventHandler1(_handle_trigger_5_0));
    _el_11.addEventListener('click', eventHandler1(_RouterLink_11_7.instance.onClick));
    _pipe_async_0 = import14.AsyncPipe(ref);
    _pipe_notnull_1 = import15.NotNull();
    _pipe_notnull_1_0 = import21.pureProxy1(_pipe_notnull_1.transform);
    _pipe_async_2 = import14.AsyncPipe(ref);
    _pipe_isnull_3 = import15.IsNull();
    _pipe_isnull_3_0 = import21.pureProxy1(_pipe_isnull_3.transform);
    init(const [], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import24.MaterialPersistentDrawerDirective) || identical(token, import34.DeferredContentAware)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialPersistentDrawerDirective_0_5.instance;
    }
    if ((identical(token, import27.AcxDarkTheme) && ((5 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _AcxDarkTheme_5_5;
    }
    if ((((identical(token, import8.MaterialButtonComponent) || identical(token, import35.ButtonDirective)) || identical(token, import36.HasDisabled)) && ((5 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _MaterialButtonComponent_5_6;
    }
    if ((identical(token, import27.AcxDarkTheme) && ((11 <= nodeIndex) && (nodeIndex <= 12)))) {
      return _AcxDarkTheme_11_5;
    }
    if ((((identical(token, import8.MaterialButtonComponent) || identical(token, import35.ButtonDirective)) || identical(token, import36.HasDisabled)) && ((11 <= nodeIndex) && (nodeIndex <= 12)))) {
      return _MaterialButtonComponent_11_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if ((!import21.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialPersistentDrawerDirective_0_5.instance.ngOnInit();
    }
    if (firstCheck) {
      (_DeferredContentDirective_1_9.preserveDimensions = true);
    }
    changed = false;
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    if ((!import21.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_5_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_6_5.icon = 'menu';
      changed = true;
    }
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_11.markAsCheckOnce();
    }
    if ((!import21.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_11_6.ngOnInit();
    }
    final currVal_4 = import37.RoutePaths.notifications.toUrl();
    if (import21.checkBinding(_expr_4, currVal_4)) {
      _RouterLink_11_7.instance.routerLink = currVal_4;
      _expr_4 = currVal_4;
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_12_5.icon = 'notifications';
      changed = true;
    }
    if (changed) {
      _compView_12.markAsCheckOnce();
    }
    _NgIf_14_9.ngIf = _pipe_notnull_1_0(_pipe_async_0.transform(_ctx.auth.profile));
    _NgIf_15_9.ngIf = _pipe_isnull_3_0(_pipe_async_2.transform(_ctx.auth.profile));
    if (firstCheck) {
      if (!identical(import37.Routes.all, null)) {
        (_RouterOutlet_17_8.routes = import37.Routes.all);
      }
    }
    if ((!import21.AppViewUtils.throwOnChanges && firstCheck)) {
      _RouterOutlet_17_8.ngOnInit();
    }
    _appEl_1.detectChangesInNestedViews();
    _appEl_14.detectChangesInNestedViews();
    _appEl_15.detectChangesInNestedViews();
    _appEl_17.detectChangesInNestedViews();
    final currVal_0 = _ctx.customWidth;
    if (import21.checkBinding(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'custom-width', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.end ? '' : null);
    if (import21.checkBinding(_expr_1, currVal_1)) {
      setAttr(_el_0, 'end', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    _MaterialPersistentDrawerDirective_0_5.detectHostChanges(this, _el_0);
    _compView_5.detectHostChanges(firstCheck);
    _compView_11.detectHostChanges(firstCheck);
    _RouterLink_11_7.detectHostChanges(_compView_11, _el_11);
    _compView_5.detectChanges();
    _compView_6.detectChanges();
    _compView_11.detectChanges();
    _compView_12.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_14.destroyNestedViews();
    _appEl_15.destroyNestedViews();
    _appEl_17.destroyNestedViews();
    _compView_5.destroy();
    _compView_6.destroy();
    _compView_11.destroy();
    _compView_12.destroy();
    _DeferredContentDirective_1_9.ngOnDestroy();
    _RouterLink_11_7.instance.ngOnDestroy();
    _RouterOutlet_17_8.ngOnDestroy();
    _pipe_async_0.ngOnDestroy();
    _pipe_async_2.ngOnDestroy();
  }

  void _handle_trigger_5_0($event) {
    final import24.MaterialPersistentDrawerDirective local_drawer = _MaterialPersistentDrawerDirective_0_5.instance;
    local_drawer.toggle();
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppComponent0(parentView, parentIndex);
}

const ComponentFactory<import3.AppComponent> _AppComponentNgFactory = const ComponentFactory('my-app', viewFactory_AppComponentHost0);
ComponentFactory<import3.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

class _ViewAppComponent1 extends AppView<import3.AppComponent> {
  import38.ViewMaterialListComponent0 _compView_0;
  import39.MaterialListComponent _MaterialListComponent_0_5;
  import40.ViewMaterialListItemComponent0 _compView_3;
  import41.MaterialListItemComponent _MaterialListItemComponent_3_5;
  import11.RouterLinkNgCd _RouterLink_3_6;
  import42.RouterLinkActive _RouterLinkActive_3_7;
  import9.ViewMaterialIconComponent0 _compView_4;
  import10.MaterialIconComponent _MaterialIconComponent_4_5;
  import40.ViewMaterialListItemComponent0 _compView_6;
  import41.MaterialListItemComponent _MaterialListItemComponent_6_5;
  import11.RouterLinkNgCd _RouterLink_6_6;
  import42.RouterLinkActive _RouterLinkActive_6_7;
  import9.ViewMaterialIconComponent0 _compView_7;
  import10.MaterialIconComponent _MaterialIconComponent_7_5;
  import40.ViewMaterialListItemComponent0 _compView_9;
  import41.MaterialListItemComponent _MaterialListItemComponent_9_5;
  import11.RouterLinkNgCd _RouterLink_9_6;
  import42.RouterLinkActive _RouterLinkActive_9_7;
  import9.ViewMaterialIconComponent0 _compView_10;
  import10.MaterialIconComponent _MaterialIconComponent_10_5;
  import40.ViewMaterialListItemComponent0 _compView_12;
  import41.MaterialListItemComponent _MaterialListItemComponent_12_5;
  import11.RouterLinkNgCd _RouterLink_12_6;
  import42.RouterLinkActive _RouterLinkActive_12_7;
  import9.ViewMaterialIconComponent0 _compView_13;
  import10.MaterialIconComponent _MaterialIconComponent_13_5;
  import40.ViewMaterialListItemComponent0 _compView_15;
  import41.MaterialListItemComponent _MaterialListItemComponent_15_5;
  import11.RouterLinkNgCd _RouterLink_15_6;
  import42.RouterLinkActive _RouterLinkActive_15_7;
  import9.ViewMaterialIconComponent0 _compView_16;
  import10.MaterialIconComponent _MaterialIconComponent_16_5;
  import40.ViewMaterialListItemComponent0 _compView_18;
  import41.MaterialListItemComponent _MaterialListItemComponent_18_5;
  import11.RouterLinkNgCd _RouterLink_18_6;
  import42.RouterLinkActive _RouterLinkActive_18_7;
  import9.ViewMaterialIconComponent0 _compView_19;
  import10.MaterialIconComponent _MaterialIconComponent_19_5;
  import40.ViewMaterialListItemComponent0 _compView_24;
  import41.MaterialListItemComponent _MaterialListItemComponent_24_5;
  import9.ViewMaterialIconComponent0 _compView_25;
  import10.MaterialIconComponent _MaterialIconComponent_25_5;
  String _expr_0;
  String _expr_3;
  String _expr_6;
  String _expr_9;
  String _expr_12;
  String _expr_15;
  import17.Element _el_3;
  import17.Element _el_6;
  import17.Element _el_9;
  import17.Element _el_12;
  import17.Element _el_15;
  import17.Element _el_18;
  _ViewAppComponent1(AppView<dynamic> parentView, int parentIndex) : super(import19.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    _compView_0 = import38.ViewMaterialListComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialListComponent_0_5 = import39.MaterialListComponent();
    var doc = import17.document;
    final _el_1 = doc.createElement('div');
    _el_1.className = 'mat-drawer-spacer';
    createAttr(_el_1, 'group', '');
    addShimC(_el_1);
    final _el_2 = doc.createElement('div');
    createAttr(_el_2, 'group', '');
    addShimC(_el_2);
    _compView_3 = import40.ViewMaterialListItemComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    _el_2.append(_el_3);
    addShimC(_el_3);
    _MaterialListItemComponent_3_5 = (import22.isDevMode
        ? import26.debugInjectorWrap(import41.MaterialListItemComponent, () {
            return import41.MaterialListItemComponent(_el_3, parentView.parentView.injectorGet(import43.DropdownHandle, parentView.viewData.parentIndex, null), null, null);
          })
        : import41.MaterialListItemComponent(_el_3, parentView.parentView.injectorGet(import43.DropdownHandle, parentView.viewData.parentIndex, null), null, null));
    _RouterLink_3_6 = import11.RouterLinkNgCd((import22.isDevMode
        ? import26.debugInjectorWrap(import29.RouterLink, () {
            return import29.RouterLink(parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import31.Location, parentView.viewData.parentIndex), null, _el_3);
          })
        : import29.RouterLink(parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import31.Location, parentView.viewData.parentIndex), null, _el_3)));
    _RouterLinkActive_3_7 = (import22.isDevMode
        ? import26.debugInjectorWrap(import42.RouterLinkActive, () {
            return import42.RouterLinkActive(_el_3, parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex));
          })
        : import42.RouterLinkActive(_el_3, parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex)));
    _compView_4 = import9.ViewMaterialIconComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    createAttr(_el_4, 'icon', 'dashboard');
    addShimC(_el_4);
    _MaterialIconComponent_4_5 = import10.MaterialIconComponent(_el_4);
    _compView_4.create(_MaterialIconComponent_4_5, []);
    final _text_5 = import17.Text('Dashboard');
    _RouterLinkActive_3_7.links = [_RouterLink_3_6.instance];
    _compView_3.create(_MaterialListItemComponent_3_5, [
      [_el_4, _text_5]
    ]);
    _compView_6 = import40.ViewMaterialListItemComponent0(this, 6);
    _el_6 = _compView_6.rootEl;
    _el_2.append(_el_6);
    addShimC(_el_6);
    _MaterialListItemComponent_6_5 = (import22.isDevMode
        ? import26.debugInjectorWrap(import41.MaterialListItemComponent, () {
            return import41.MaterialListItemComponent(_el_6, parentView.parentView.injectorGet(import43.DropdownHandle, parentView.viewData.parentIndex, null), null, null);
          })
        : import41.MaterialListItemComponent(_el_6, parentView.parentView.injectorGet(import43.DropdownHandle, parentView.viewData.parentIndex, null), null, null));
    _RouterLink_6_6 = import11.RouterLinkNgCd((import22.isDevMode
        ? import26.debugInjectorWrap(import29.RouterLink, () {
            return import29.RouterLink(parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import31.Location, parentView.viewData.parentIndex), null, _el_6);
          })
        : import29.RouterLink(parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import31.Location, parentView.viewData.parentIndex), null, _el_6)));
    _RouterLinkActive_6_7 = (import22.isDevMode
        ? import26.debugInjectorWrap(import42.RouterLinkActive, () {
            return import42.RouterLinkActive(_el_6, parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex));
          })
        : import42.RouterLinkActive(_el_6, parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex)));
    _compView_7 = import9.ViewMaterialIconComponent0(this, 7);
    final _el_7 = _compView_7.rootEl;
    createAttr(_el_7, 'icon', 'people');
    addShimC(_el_7);
    _MaterialIconComponent_7_5 = import10.MaterialIconComponent(_el_7);
    _compView_7.create(_MaterialIconComponent_7_5, []);
    final _text_8 = import17.Text('Clients');
    _RouterLinkActive_6_7.links = [_RouterLink_6_6.instance];
    _compView_6.create(_MaterialListItemComponent_6_5, [
      [_el_7, _text_8]
    ]);
    _compView_9 = import40.ViewMaterialListItemComponent0(this, 9);
    _el_9 = _compView_9.rootEl;
    _el_2.append(_el_9);
    addShimC(_el_9);
    _MaterialListItemComponent_9_5 = (import22.isDevMode
        ? import26.debugInjectorWrap(import41.MaterialListItemComponent, () {
            return import41.MaterialListItemComponent(_el_9, parentView.parentView.injectorGet(import43.DropdownHandle, parentView.viewData.parentIndex, null), null, null);
          })
        : import41.MaterialListItemComponent(_el_9, parentView.parentView.injectorGet(import43.DropdownHandle, parentView.viewData.parentIndex, null), null, null));
    _RouterLink_9_6 = import11.RouterLinkNgCd((import22.isDevMode
        ? import26.debugInjectorWrap(import29.RouterLink, () {
            return import29.RouterLink(parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import31.Location, parentView.viewData.parentIndex), null, _el_9);
          })
        : import29.RouterLink(parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import31.Location, parentView.viewData.parentIndex), null, _el_9)));
    _RouterLinkActive_9_7 = (import22.isDevMode
        ? import26.debugInjectorWrap(import42.RouterLinkActive, () {
            return import42.RouterLinkActive(_el_9, parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex));
          })
        : import42.RouterLinkActive(_el_9, parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex)));
    _compView_10 = import9.ViewMaterialIconComponent0(this, 10);
    final _el_10 = _compView_10.rootEl;
    createAttr(_el_10, 'icon', 'list_all');
    addShimC(_el_10);
    _MaterialIconComponent_10_5 = import10.MaterialIconComponent(_el_10);
    _compView_10.create(_MaterialIconComponent_10_5, []);
    final _text_11 = import17.Text('Posts');
    _RouterLinkActive_9_7.links = [_RouterLink_9_6.instance];
    _compView_9.create(_MaterialListItemComponent_9_5, [
      [_el_10, _text_11]
    ]);
    _compView_12 = import40.ViewMaterialListItemComponent0(this, 12);
    _el_12 = _compView_12.rootEl;
    _el_2.append(_el_12);
    addShimC(_el_12);
    _MaterialListItemComponent_12_5 = (import22.isDevMode
        ? import26.debugInjectorWrap(import41.MaterialListItemComponent, () {
            return import41.MaterialListItemComponent(_el_12, parentView.parentView.injectorGet(import43.DropdownHandle, parentView.viewData.parentIndex, null), null, null);
          })
        : import41.MaterialListItemComponent(_el_12, parentView.parentView.injectorGet(import43.DropdownHandle, parentView.viewData.parentIndex, null), null, null));
    _RouterLink_12_6 = import11.RouterLinkNgCd((import22.isDevMode
        ? import26.debugInjectorWrap(import29.RouterLink, () {
            return import29.RouterLink(parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import31.Location, parentView.viewData.parentIndex), null, _el_12);
          })
        : import29.RouterLink(parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import31.Location, parentView.viewData.parentIndex), null, _el_12)));
    _RouterLinkActive_12_7 = (import22.isDevMode
        ? import26.debugInjectorWrap(import42.RouterLinkActive, () {
            return import42.RouterLinkActive(_el_12, parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex));
          })
        : import42.RouterLinkActive(_el_12, parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex)));
    _compView_13 = import9.ViewMaterialIconComponent0(this, 13);
    final _el_13 = _compView_13.rootEl;
    createAttr(_el_13, 'icon', 'waves');
    addShimC(_el_13);
    _MaterialIconComponent_13_5 = import10.MaterialIconComponent(_el_13);
    _compView_13.create(_MaterialIconComponent_13_5, []);
    final _text_14 = import17.Text('Waterfalls');
    _RouterLinkActive_12_7.links = [_RouterLink_12_6.instance];
    _compView_12.create(_MaterialListItemComponent_12_5, [
      [_el_13, _text_14]
    ]);
    _compView_15 = import40.ViewMaterialListItemComponent0(this, 15);
    _el_15 = _compView_15.rootEl;
    _el_2.append(_el_15);
    addShimC(_el_15);
    _MaterialListItemComponent_15_5 = (import22.isDevMode
        ? import26.debugInjectorWrap(import41.MaterialListItemComponent, () {
            return import41.MaterialListItemComponent(_el_15, parentView.parentView.injectorGet(import43.DropdownHandle, parentView.viewData.parentIndex, null), null, null);
          })
        : import41.MaterialListItemComponent(_el_15, parentView.parentView.injectorGet(import43.DropdownHandle, parentView.viewData.parentIndex, null), null, null));
    _RouterLink_15_6 = import11.RouterLinkNgCd((import22.isDevMode
        ? import26.debugInjectorWrap(import29.RouterLink, () {
            return import29.RouterLink(parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import31.Location, parentView.viewData.parentIndex), null, _el_15);
          })
        : import29.RouterLink(parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import31.Location, parentView.viewData.parentIndex), null, _el_15)));
    _RouterLinkActive_15_7 = (import22.isDevMode
        ? import26.debugInjectorWrap(import42.RouterLinkActive, () {
            return import42.RouterLinkActive(_el_15, parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex));
          })
        : import42.RouterLinkActive(_el_15, parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex)));
    _compView_16 = import9.ViewMaterialIconComponent0(this, 16);
    final _el_16 = _compView_16.rootEl;
    createAttr(_el_16, 'icon', 'local_dining');
    addShimC(_el_16);
    _MaterialIconComponent_16_5 = import10.MaterialIconComponent(_el_16);
    _compView_16.create(_MaterialIconComponent_16_5, []);
    final _text_17 = import17.Text('Food');
    _RouterLinkActive_15_7.links = [_RouterLink_15_6.instance];
    _compView_15.create(_MaterialListItemComponent_15_5, [
      [_el_16, _text_17]
    ]);
    _compView_18 = import40.ViewMaterialListItemComponent0(this, 18);
    _el_18 = _compView_18.rootEl;
    _el_2.append(_el_18);
    addShimC(_el_18);
    _MaterialListItemComponent_18_5 = (import22.isDevMode
        ? import26.debugInjectorWrap(import41.MaterialListItemComponent, () {
            return import41.MaterialListItemComponent(_el_18, parentView.parentView.injectorGet(import43.DropdownHandle, parentView.viewData.parentIndex, null), null, null);
          })
        : import41.MaterialListItemComponent(_el_18, parentView.parentView.injectorGet(import43.DropdownHandle, parentView.viewData.parentIndex, null), null, null));
    _RouterLink_18_6 = import11.RouterLinkNgCd((import22.isDevMode
        ? import26.debugInjectorWrap(import29.RouterLink, () {
            return import29.RouterLink(parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import31.Location, parentView.viewData.parentIndex), null, _el_18);
          })
        : import29.RouterLink(parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import31.Location, parentView.viewData.parentIndex), null, _el_18)));
    _RouterLinkActive_18_7 = (import22.isDevMode
        ? import26.debugInjectorWrap(import42.RouterLinkActive, () {
            return import42.RouterLinkActive(_el_18, parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex));
          })
        : import42.RouterLinkActive(_el_18, parentView.parentView.injectorGet(import30.Router, parentView.viewData.parentIndex)));
    _compView_19 = import9.ViewMaterialIconComponent0(this, 19);
    final _el_19 = _compView_19.rootEl;
    createAttr(_el_19, 'icon', 'videocam');
    addShimC(_el_19);
    _MaterialIconComponent_19_5 = import10.MaterialIconComponent(_el_19);
    _compView_19.create(_MaterialIconComponent_19_5, []);
    final _text_20 = import17.Text('Videos');
    _RouterLinkActive_18_7.links = [_RouterLink_18_6.instance];
    _compView_18.create(_MaterialListItemComponent_18_5, [
      [_el_19, _text_20]
    ]);
    final _el_21 = doc.createElement('div');
    createAttr(_el_21, 'group', '');
    addShimC(_el_21);
    final _el_22 = createDivAndAppend(doc, _el_21);
    createAttr(_el_22, 'label', '');
    addShimC(_el_22);
    final _text_23 = import17.Text('Tags');
    _el_22.append(_text_23);
    _compView_24 = import40.ViewMaterialListItemComponent0(this, 24);
    final _el_24 = _compView_24.rootEl;
    _el_21.append(_el_24);
    addShimC(_el_24);
    _MaterialListItemComponent_24_5 = (import22.isDevMode
        ? import26.debugInjectorWrap(import41.MaterialListItemComponent, () {
            return import41.MaterialListItemComponent(_el_24, parentView.parentView.injectorGet(import43.DropdownHandle, parentView.viewData.parentIndex, null), null, null);
          })
        : import41.MaterialListItemComponent(_el_24, parentView.parentView.injectorGet(import43.DropdownHandle, parentView.viewData.parentIndex, null), null, null));
    _compView_25 = import9.ViewMaterialIconComponent0(this, 25);
    final _el_25 = _compView_25.rootEl;
    createAttr(_el_25, 'icon', 'star');
    addShimC(_el_25);
    _MaterialIconComponent_25_5 = import10.MaterialIconComponent(_el_25);
    _compView_25.create(_MaterialIconComponent_25_5, []);
    final _text_26 = import17.Text('Favorites');
    _compView_24.create(_MaterialListItemComponent_24_5, [
      [_el_25, _text_26]
    ]);
    _compView_0.create(_MaterialListComponent_0_5, [
      [_el_1, _el_2, _el_21]
    ]);
    _el_3.addEventListener('click', eventHandler1(_RouterLink_3_6.instance.onClick));
    _el_6.addEventListener('click', eventHandler1(_RouterLink_6_6.instance.onClick));
    _el_9.addEventListener('click', eventHandler1(_RouterLink_9_6.instance.onClick));
    _el_12.addEventListener('click', eventHandler1(_RouterLink_12_6.instance.onClick));
    _el_15.addEventListener('click', eventHandler1(_RouterLink_15_6.instance.onClick));
    _el_18.addEventListener('click', eventHandler1(_RouterLink_18_6.instance.onClick));
    init0(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import36.HasDisabled) && ((3 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _MaterialListItemComponent_3_5;
    }
    if ((identical(token, import36.HasDisabled) && ((6 <= nodeIndex) && (nodeIndex <= 8)))) {
      return _MaterialListItemComponent_6_5;
    }
    if ((identical(token, import36.HasDisabled) && ((9 <= nodeIndex) && (nodeIndex <= 11)))) {
      return _MaterialListItemComponent_9_5;
    }
    if ((identical(token, import36.HasDisabled) && ((12 <= nodeIndex) && (nodeIndex <= 14)))) {
      return _MaterialListItemComponent_12_5;
    }
    if ((identical(token, import36.HasDisabled) && ((15 <= nodeIndex) && (nodeIndex <= 17)))) {
      return _MaterialListItemComponent_15_5;
    }
    if ((identical(token, import36.HasDisabled) && ((18 <= nodeIndex) && (nodeIndex <= 20)))) {
      return _MaterialListItemComponent_18_5;
    }
    if ((identical(token, import36.HasDisabled) && ((24 <= nodeIndex) && (nodeIndex <= 26)))) {
      return _MaterialListItemComponent_24_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    if ((!import21.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialListItemComponent_3_5.ngOnInit();
    }
    final currVal_0 = import37.RoutePaths.dashboard.toUrl();
    if (import21.checkBinding(_expr_0, currVal_0)) {
      _RouterLink_3_6.instance.routerLink = currVal_0;
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      (_RouterLinkActive_3_7.routerLinkActive = 'active');
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_4_5.icon = 'dashboard';
      changed = true;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    if ((!import21.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialListItemComponent_6_5.ngOnInit();
    }
    final currVal_3 = import37.RoutePaths.clients.toUrl();
    if (import21.checkBinding(_expr_3, currVal_3)) {
      _RouterLink_6_6.instance.routerLink = currVal_3;
      _expr_3 = currVal_3;
    }
    if (firstCheck) {
      (_RouterLinkActive_6_7.routerLinkActive = 'active');
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_7_5.icon = 'people';
      changed = true;
    }
    if (changed) {
      _compView_7.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    if ((!import21.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialListItemComponent_9_5.ngOnInit();
    }
    final currVal_6 = import37.RoutePaths.posts.toUrl();
    if (import21.checkBinding(_expr_6, currVal_6)) {
      _RouterLink_9_6.instance.routerLink = currVal_6;
      _expr_6 = currVal_6;
    }
    if (firstCheck) {
      (_RouterLinkActive_9_7.routerLinkActive = 'active');
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_10_5.icon = 'list_all';
      changed = true;
    }
    if (changed) {
      _compView_10.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_12.markAsCheckOnce();
    }
    if ((!import21.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialListItemComponent_12_5.ngOnInit();
    }
    final currVal_9 = import37.RoutePaths.waterfalls.toUrl();
    if (import21.checkBinding(_expr_9, currVal_9)) {
      _RouterLink_12_6.instance.routerLink = currVal_9;
      _expr_9 = currVal_9;
    }
    if (firstCheck) {
      (_RouterLinkActive_12_7.routerLinkActive = 'active');
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_13_5.icon = 'waves';
      changed = true;
    }
    if (changed) {
      _compView_13.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_15.markAsCheckOnce();
    }
    if ((!import21.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialListItemComponent_15_5.ngOnInit();
    }
    final currVal_12 = import37.RoutePaths.food.toUrl();
    if (import21.checkBinding(_expr_12, currVal_12)) {
      _RouterLink_15_6.instance.routerLink = currVal_12;
      _expr_12 = currVal_12;
    }
    if (firstCheck) {
      (_RouterLinkActive_15_7.routerLinkActive = 'active');
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_16_5.icon = 'local_dining';
      changed = true;
    }
    if (changed) {
      _compView_16.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_18.markAsCheckOnce();
    }
    if ((!import21.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialListItemComponent_18_5.ngOnInit();
    }
    final currVal_15 = import37.RoutePaths.videos.toUrl();
    if (import21.checkBinding(_expr_15, currVal_15)) {
      _RouterLink_18_6.instance.routerLink = currVal_15;
      _expr_15 = currVal_15;
    }
    if (firstCheck) {
      (_RouterLinkActive_18_7.routerLinkActive = 'active');
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_19_5.icon = 'videocam';
      changed = true;
    }
    if (changed) {
      _compView_19.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_24.markAsCheckOnce();
    }
    if ((!import21.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialListItemComponent_24_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_25_5.icon = 'star';
      changed = true;
    }
    if (changed) {
      _compView_25.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_3.detectHostChanges(firstCheck);
    _RouterLink_3_6.detectHostChanges(_compView_3, _el_3);
    _compView_6.detectHostChanges(firstCheck);
    _RouterLink_6_6.detectHostChanges(_compView_6, _el_6);
    _compView_9.detectHostChanges(firstCheck);
    _RouterLink_9_6.detectHostChanges(_compView_9, _el_9);
    _compView_12.detectHostChanges(firstCheck);
    _RouterLink_12_6.detectHostChanges(_compView_12, _el_12);
    _compView_15.detectHostChanges(firstCheck);
    _RouterLink_15_6.detectHostChanges(_compView_15, _el_15);
    _compView_18.detectHostChanges(firstCheck);
    _RouterLink_18_6.detectHostChanges(_compView_18, _el_18);
    _compView_24.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_3.detectChanges();
    _compView_4.detectChanges();
    _compView_6.detectChanges();
    _compView_7.detectChanges();
    _compView_9.detectChanges();
    _compView_10.detectChanges();
    _compView_12.detectChanges();
    _compView_13.detectChanges();
    _compView_15.detectChanges();
    _compView_16.detectChanges();
    _compView_18.detectChanges();
    _compView_19.detectChanges();
    _compView_24.detectChanges();
    _compView_25.detectChanges();
    if (!import21.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _RouterLinkActive_3_7.ngAfterViewInit();
        _RouterLinkActive_6_7.ngAfterViewInit();
        _RouterLinkActive_9_7.ngAfterViewInit();
        _RouterLinkActive_12_7.ngAfterViewInit();
        _RouterLinkActive_15_7.ngAfterViewInit();
        _RouterLinkActive_18_7.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _compView_3.destroy();
    _compView_4.destroy();
    _compView_6.destroy();
    _compView_7.destroy();
    _compView_9.destroy();
    _compView_10.destroy();
    _compView_12.destroy();
    _compView_13.destroy();
    _compView_15.destroy();
    _compView_16.destroy();
    _compView_18.destroy();
    _compView_19.destroy();
    _compView_24.destroy();
    _compView_25.destroy();
    _MaterialListItemComponent_3_5.ngOnDestroy();
    _RouterLink_3_6.instance.ngOnDestroy();
    _RouterLinkActive_3_7.ngOnDestroy();
    _MaterialListItemComponent_6_5.ngOnDestroy();
    _RouterLink_6_6.instance.ngOnDestroy();
    _RouterLinkActive_6_7.ngOnDestroy();
    _MaterialListItemComponent_9_5.ngOnDestroy();
    _RouterLink_9_6.instance.ngOnDestroy();
    _RouterLinkActive_9_7.ngOnDestroy();
    _MaterialListItemComponent_12_5.ngOnDestroy();
    _RouterLink_12_6.instance.ngOnDestroy();
    _RouterLinkActive_12_7.ngOnDestroy();
    _MaterialListItemComponent_15_5.ngOnDestroy();
    _RouterLink_15_6.instance.ngOnDestroy();
    _RouterLinkActive_15_7.ngOnDestroy();
    _MaterialListItemComponent_18_5.ngOnDestroy();
    _RouterLink_18_6.instance.ngOnDestroy();
    _RouterLinkActive_18_7.ngOnDestroy();
    _MaterialListItemComponent_24_5.ngOnDestroy();
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent1(parentView, parentIndex);
}

class _ViewAppComponent2 extends AppView<import3.AppComponent> {
  import7.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import8.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import9.ViewMaterialIconComponent0 _compView_1;
  import10.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewAppComponent2(AppView<dynamic> parentView, int parentIndex) : super(import19.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    _compView_0 = import7.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _el_0.className = 'material-drawer-button';
    createAttr(_el_0, 'icon', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import22.isDevMode
        ? import26.debugInjectorWrap(import27.AcxDarkTheme, () {
            return import27.AcxDarkTheme(parentView.parentView.injectorGet(const import28.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import27.AcxDarkTheme(parentView.parentView.injectorGet(const import28.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_0_6 = import8.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0.ref, null);
    _compView_1 = import9.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    createAttr(_el_1, 'icon', 'cancel');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import10.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import27.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _AcxDarkTheme_0_5;
    }
    if ((((identical(token, import8.MaterialButtonComponent) || identical(token, import35.ButtonDirective)) || identical(token, import36.HasDisabled)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialButtonComponent_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import21.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_0_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_1_5.icon = 'cancel';
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _compView_1.destroy();
  }

  void _handle_trigger_0_0($event) {
    ctx.auth.signOut();
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent2(parentView, parentIndex);
}

class _ViewAppComponent3 extends AppView<import3.AppComponent> {
  import7.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import8.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import9.ViewMaterialIconComponent0 _compView_1;
  import10.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewAppComponent3(AppView<dynamic> parentView, int parentIndex) : super(import19.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import3.AppComponent> build() {
    _compView_0 = import7.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _el_0.className = 'material-drawer-button';
    createAttr(_el_0, 'icon', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import22.isDevMode
        ? import26.debugInjectorWrap(import27.AcxDarkTheme, () {
            return import27.AcxDarkTheme(parentView.parentView.injectorGet(const import28.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import27.AcxDarkTheme(parentView.parentView.injectorGet(const import28.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_0_6 = import8.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0.ref, null);
    _compView_1 = import9.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    createAttr(_el_1, 'icon', 'face');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import10.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import27.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _AcxDarkTheme_0_5;
    }
    if ((((identical(token, import8.MaterialButtonComponent) || identical(token, import35.ButtonDirective)) || identical(token, import36.HasDisabled)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialButtonComponent_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import21.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_0_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_1_5.icon = 'face';
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _compView_1.destroy();
  }

  void _handle_trigger_0_0($event) {
    ctx.auth.signInWithFacebook();
  }
}

AppView<import3.AppComponent> viewFactory_AppComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent3(parentView, parentIndex);
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import3.AppComponent> {
  ViewAppComponent0 _compView_0;
  import3.AppComponent _AppComponent_0_5;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import19.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import3.AppComponent> build() {
    _compView_0 = ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = (import22.isDevMode
        ? import26.debugInjectorWrap(import3.AppComponent, () {
            return import3.AppComponent(this.injectorGet(import44.StoreService, viewData.parentIndex));
          })
        : import3.AppComponent(this.injectorGet(import44.StoreService, viewData.parentIndex)));
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
  }
}

AppView<import3.AppComponent> viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
  _ref11.initReflector();
}
