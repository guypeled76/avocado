// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'post_component.dart';
export 'post_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:angular_components/css/mdc_web/card/mdc-card.scss.css.shim.dart' as import0;
import 'package:avocado_web/src/components/feed/post_component.scss.css.shim.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'post_component.dart' as import3;
import 'package:angular/src/common/directives/ng_style.dart' as import4;
import 'package:angular_components/material_button/material_button.template.dart' as import5;
import 'package:angular_components/material_button/material_button.dart' as import6;
import 'package:angular_components/material_icon/material_icon.template.dart' as import7;
import 'package:angular_components/material_icon/material_icon.dart' as import8;
import 'dart:core';
import 'dart:html' as import10;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;
import 'package:angular/src/runtime.dart' as import15;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import17;
import 'package:angular_components/theme/dark_theme.dart' as import18;
import 'package:angular/src/core/di/opaque_token.dart' as import19;
import 'package:angular_components/button_decorator/button_decorator.dart' as import20;
import 'package:angular_components/interfaces/has_disabled.dart' as import21;

final List<dynamic> styles$PostComponent = [import0.styles, import1.styles];

class ViewPostComponent0 extends AppView<import3.PostComponent> {
  import4.NgStyle _NgStyle_1_5;
  import5.ViewMaterialButtonComponent0 _compView_10;
  dynamic _AcxDarkTheme_10_5;
  import6.MaterialButtonComponent _MaterialButtonComponent_10_6;
  import5.ViewMaterialButtonComponent0 _compView_12;
  dynamic _AcxDarkTheme_12_5;
  import6.MaterialButtonComponent _MaterialButtonComponent_12_6;
  import5.ViewMaterialButtonComponent0 _compView_15;
  dynamic _AcxDarkTheme_15_5;
  import6.MaterialButtonComponent _MaterialButtonComponent_15_6;
  import7.ViewMaterialIconComponent0 _compView_16;
  import8.MaterialIconComponent _MaterialIconComponent_16_5;
  import5.ViewMaterialButtonComponent0 _compView_17;
  dynamic _AcxDarkTheme_17_5;
  import6.MaterialButtonComponent _MaterialButtonComponent_17_6;
  import7.ViewMaterialIconComponent0 _compView_18;
  import8.MaterialIconComponent _MaterialIconComponent_18_5;
  import5.ViewMaterialButtonComponent0 _compView_19;
  dynamic _AcxDarkTheme_19_5;
  import6.MaterialButtonComponent _MaterialButtonComponent_19_6;
  import7.ViewMaterialIconComponent0 _compView_20;
  import8.MaterialIconComponent _MaterialIconComponent_20_5;
  Map<String, String> Function(String) _map_0;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  import10.Text _text_5;
  import10.Text _text_7;
  static RenderComponentType _renderType;
  ViewPostComponent0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import10.document.createElement('post-component');
    _renderType ??= import14.appViewUtils.createRenderType((import15.isDevMode ? 'asset:avocado_web/lib/src/components/feed/post_component.dart' : null), ViewEncapsulation.Emulated, styles$PostComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import3.PostComponent> build() {
    final _rootEl = rootEl;
    final import10.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import10.document;
    final _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'mdc-card mdc-card--outlined demo-size';
    addShimC(_el_0);
    final _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'mdc-card__media mdc-card__media--16-9 demo-card__media';
    addShimC(_el_1);
    _NgStyle_1_5 = import4.NgStyle(_el_1);
    final _el_2 = createDivAndAppend(doc, _el_0);
    _el_2.className = 'demo-card__primary';
    addShimC(_el_2);
    final _el_3 = createAndAppend(doc, 'h3', _el_2);
    _el_3.className = 'demo-card__subtitle';
    addShimE(_el_3);
    final _text_4 = import10.Text('by ');
    _el_3.append(_text_4);
    _text_5 = import10.Text('');
    _el_3.append(_text_5);
    final _el_6 = createDivAndAppend(doc, _el_0);
    _el_6.className = 'demo-card__secondary';
    addShimC(_el_6);
    _text_7 = import10.Text('');
    _el_6.append(_text_7);
    final _el_8 = createDivAndAppend(doc, _el_0);
    _el_8.className = 'mdc-card__actions';
    addShimC(_el_8);
    final _el_9 = createDivAndAppend(doc, _el_8);
    _el_9.className = 'mdc-card__action-buttons';
    addShimC(_el_9);
    _compView_10 = import5.ViewMaterialButtonComponent0(this, 10);
    final _el_10 = _compView_10.rootEl;
    _el_9.append(_el_10);
    addShimC(_el_10);
    _AcxDarkTheme_10_5 = (import15.isDevMode
        ? import17.debugInjectorWrap(import18.AcxDarkTheme, () {
            return import18.AcxDarkTheme(parentView.injectorGet(const import19.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import18.AcxDarkTheme(parentView.injectorGet(const import19.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_10_6 = import6.MaterialButtonComponent(_el_10, _AcxDarkTheme_10_5, _compView_10.ref, null);
    final _text_11 = import10.Text('Read');
    _compView_10.create(_MaterialButtonComponent_10_6, [
      [_text_11]
    ]);
    _compView_12 = import5.ViewMaterialButtonComponent0(this, 12);
    final _el_12 = _compView_12.rootEl;
    _el_9.append(_el_12);
    addShimC(_el_12);
    _AcxDarkTheme_12_5 = (import15.isDevMode
        ? import17.debugInjectorWrap(import18.AcxDarkTheme, () {
            return import18.AcxDarkTheme(parentView.injectorGet(const import19.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import18.AcxDarkTheme(parentView.injectorGet(const import19.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_12_6 = import6.MaterialButtonComponent(_el_12, _AcxDarkTheme_12_5, _compView_12.ref, null);
    final _text_13 = import10.Text('Bookmark');
    _compView_12.create(_MaterialButtonComponent_12_6, [
      [_text_13]
    ]);
    final _el_14 = createDivAndAppend(doc, _el_8);
    _el_14.className = 'mdc-card__action-icons';
    addShimC(_el_14);
    _compView_15 = import5.ViewMaterialButtonComponent0(this, 15);
    final _el_15 = _compView_15.rootEl;
    _el_14.append(_el_15);
    createAttr(_el_15, 'icon', '');
    addShimC(_el_15);
    _AcxDarkTheme_15_5 = (import15.isDevMode
        ? import17.debugInjectorWrap(import18.AcxDarkTheme, () {
            return import18.AcxDarkTheme(parentView.injectorGet(const import19.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import18.AcxDarkTheme(parentView.injectorGet(const import19.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_15_6 = import6.MaterialButtonComponent(_el_15, _AcxDarkTheme_15_5, _compView_15.ref, null);
    _compView_16 = import7.ViewMaterialIconComponent0(this, 16);
    final _el_16 = _compView_16.rootEl;
    createAttr(_el_16, 'icon', 'favorite_border');
    addShimC(_el_16);
    _MaterialIconComponent_16_5 = import8.MaterialIconComponent(_el_16);
    _compView_16.create(_MaterialIconComponent_16_5, []);
    _compView_15.create(_MaterialButtonComponent_15_6, [
      [_el_16]
    ]);
    _compView_17 = import5.ViewMaterialButtonComponent0(this, 17);
    final _el_17 = _compView_17.rootEl;
    _el_14.append(_el_17);
    createAttr(_el_17, 'icon', '');
    addShimC(_el_17);
    _AcxDarkTheme_17_5 = (import15.isDevMode
        ? import17.debugInjectorWrap(import18.AcxDarkTheme, () {
            return import18.AcxDarkTheme(parentView.injectorGet(const import19.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import18.AcxDarkTheme(parentView.injectorGet(const import19.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_17_6 = import6.MaterialButtonComponent(_el_17, _AcxDarkTheme_17_5, _compView_17.ref, null);
    _compView_18 = import7.ViewMaterialIconComponent0(this, 18);
    final _el_18 = _compView_18.rootEl;
    createAttr(_el_18, 'icon', 'share');
    addShimC(_el_18);
    _MaterialIconComponent_18_5 = import8.MaterialIconComponent(_el_18);
    _compView_18.create(_MaterialIconComponent_18_5, []);
    _compView_17.create(_MaterialButtonComponent_17_6, [
      [_el_18]
    ]);
    _compView_19 = import5.ViewMaterialButtonComponent0(this, 19);
    final _el_19 = _compView_19.rootEl;
    _el_14.append(_el_19);
    createAttr(_el_19, 'icon', '');
    addShimC(_el_19);
    _AcxDarkTheme_19_5 = (import15.isDevMode
        ? import17.debugInjectorWrap(import18.AcxDarkTheme, () {
            return import18.AcxDarkTheme(parentView.injectorGet(const import19.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import18.AcxDarkTheme(parentView.injectorGet(const import19.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_19_6 = import6.MaterialButtonComponent(_el_19, _AcxDarkTheme_19_5, _compView_19.ref, null);
    _compView_20 = import7.ViewMaterialIconComponent0(this, 20);
    final _el_20 = _compView_20.rootEl;
    createAttr(_el_20, 'icon', 'more_vert');
    addShimC(_el_20);
    _MaterialIconComponent_20_5 = import8.MaterialIconComponent(_el_20);
    _compView_20.create(_MaterialIconComponent_20_5, []);
    _compView_19.create(_MaterialButtonComponent_19_6, [
      [_el_20]
    ]);
    _map_0 = import14.pureProxy1((p0) {
      return {'background-image': p0};
    });
    init(const [], null);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.AcxDarkTheme) && ((10 <= nodeIndex) && (nodeIndex <= 11)))) {
      return _AcxDarkTheme_10_5;
    }
    if ((((identical(token, import6.MaterialButtonComponent) || identical(token, import20.ButtonDirective)) || identical(token, import21.HasDisabled)) && ((10 <= nodeIndex) && (nodeIndex <= 11)))) {
      return _MaterialButtonComponent_10_6;
    }
    if ((identical(token, import18.AcxDarkTheme) && ((12 <= nodeIndex) && (nodeIndex <= 13)))) {
      return _AcxDarkTheme_12_5;
    }
    if ((((identical(token, import6.MaterialButtonComponent) || identical(token, import20.ButtonDirective)) || identical(token, import21.HasDisabled)) && ((12 <= nodeIndex) && (nodeIndex <= 13)))) {
      return _MaterialButtonComponent_12_6;
    }
    if ((identical(token, import18.AcxDarkTheme) && ((15 <= nodeIndex) && (nodeIndex <= 16)))) {
      return _AcxDarkTheme_15_5;
    }
    if ((((identical(token, import6.MaterialButtonComponent) || identical(token, import20.ButtonDirective)) || identical(token, import21.HasDisabled)) && ((15 <= nodeIndex) && (nodeIndex <= 16)))) {
      return _MaterialButtonComponent_15_6;
    }
    if ((identical(token, import18.AcxDarkTheme) && ((17 <= nodeIndex) && (nodeIndex <= 18)))) {
      return _AcxDarkTheme_17_5;
    }
    if ((((identical(token, import6.MaterialButtonComponent) || identical(token, import20.ButtonDirective)) || identical(token, import21.HasDisabled)) && ((17 <= nodeIndex) && (nodeIndex <= 18)))) {
      return _MaterialButtonComponent_17_6;
    }
    if ((identical(token, import18.AcxDarkTheme) && ((19 <= nodeIndex) && (nodeIndex <= 20)))) {
      return _AcxDarkTheme_19_5;
    }
    if ((((identical(token, import6.MaterialButtonComponent) || identical(token, import20.ButtonDirective)) || identical(token, import21.HasDisabled)) && ((19 <= nodeIndex) && (nodeIndex <= 20)))) {
      return _MaterialButtonComponent_19_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _map_0((('url(' + ((_ctx.post == null) ? null : _ctx.post.image)) + ')'));
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _NgStyle_1_5.rawStyle = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import14.AppViewUtils.throwOnChanges) {
      _NgStyle_1_5.ngDoCheck();
    }
    changed = false;
    if (changed) {
      _compView_10.markAsCheckOnce();
    }
    if ((!import14.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_10_6.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_12.markAsCheckOnce();
    }
    if ((!import14.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_12_6.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_15.markAsCheckOnce();
    }
    if ((!import14.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_15_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_16_5.icon = 'favorite_border';
      changed = true;
    }
    if (changed) {
      _compView_16.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_17.markAsCheckOnce();
    }
    if ((!import14.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_17_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_18_5.icon = 'share';
      changed = true;
    }
    if (changed) {
      _compView_18.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_19.markAsCheckOnce();
    }
    if ((!import14.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_19_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_20_5.icon = 'more_vert';
      changed = true;
    }
    if (changed) {
      _compView_20.markAsCheckOnce();
    }
    final currVal_1 = import14.interpolate0(((((_ctx.post == null) ? null : _ctx.post.user) == null) ? null : ((_ctx.post == null) ? null : _ctx.post.user).displayName));
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _text_5.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import14.interpolate0(((_ctx.post == null) ? null : _ctx.post.content));
    if (import14.checkBinding(_expr_2, currVal_2)) {
      _text_7.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_10.detectHostChanges(firstCheck);
    _compView_12.detectHostChanges(firstCheck);
    _compView_15.detectHostChanges(firstCheck);
    _compView_17.detectHostChanges(firstCheck);
    _compView_19.detectHostChanges(firstCheck);
    _compView_10.detectChanges();
    _compView_12.detectChanges();
    _compView_15.detectChanges();
    _compView_16.detectChanges();
    _compView_17.detectChanges();
    _compView_18.detectChanges();
    _compView_19.detectChanges();
    _compView_20.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_10.destroy();
    _compView_12.destroy();
    _compView_15.destroy();
    _compView_16.destroy();
    _compView_17.destroy();
    _compView_18.destroy();
    _compView_19.destroy();
    _compView_20.destroy();
  }
}

AppView<import3.PostComponent> viewFactory_PostComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewPostComponent0(parentView, parentIndex);
}

const ComponentFactory<import3.PostComponent> _PostComponentNgFactory = const ComponentFactory('post-component', viewFactory_PostComponentHost0);
ComponentFactory<import3.PostComponent> get PostComponentNgFactory {
  return _PostComponentNgFactory;
}

final List<dynamic> styles$PostComponentHost = const [];

class _ViewPostComponentHost0 extends AppView<import3.PostComponent> {
  ViewPostComponent0 _compView_0;
  import3.PostComponent _PostComponent_0_5;
  _ViewPostComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import3.PostComponent> build() {
    _compView_0 = ViewPostComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _PostComponent_0_5 = import3.PostComponent();
    _compView_0.create(_PostComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _PostComponent_0_5);
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

AppView<import3.PostComponent> viewFactory_PostComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewPostComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(PostComponent, PostComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
