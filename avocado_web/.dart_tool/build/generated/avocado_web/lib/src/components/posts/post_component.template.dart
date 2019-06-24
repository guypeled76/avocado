// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'post_component.dart';
export 'post_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:avocado_web/src/components/posts/video_component.template.dart' as _ref2;
import 'package:angular_components/css/mdc_web/card/mdc-card.scss.css.shim.dart' as import0;
import 'package:avocado_web/src/components/posts/post_component.scss.css.shim.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'post_component.dart' as import3;
import 'package:angular/src/common/directives/ng_style.dart' as import4;
import 'package:angular_components/material_button/material_button.template.dart' as import5;
import 'package:angular_components/material_button/material_button.dart' as import6;
import 'package:angular_components/material_icon/material_icon.template.dart' as import7;
import 'package:angular_components/material_icon/material_icon.dart' as import8;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as import9;
import 'package:angular_components/laminate/components/modal/modal.dart' as import10;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as import11;
import 'package:angular_components/material_dialog/material_dialog.dart' as import12;
import 'video_component.template.dart' as import13;
import 'video_component.dart' as import14;
import 'package:angular_components/material_input/material_input.template.dart' as import15;
import 'package:angular_components/material_input/deferred_validator.dart' as import16;
import 'package:angular_forms/src/directives/ng_model.dart' as import17;
import 'package:angular_components/material_input/material_input.dart' as import18;
import 'package:angular_components/material_input/material_input_default_value_accessor.dart' as import19;
import 'dart:core';
import 'dart:html' as import21;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import23;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import25;
import 'package:angular/src/runtime.dart' as import26;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import28;
import 'package:angular_components/theme/dark_theme.dart' as import29;
import 'package:angular/src/core/di/opaque_token.dart' as import30;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import31;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import32;
import 'package:angular_components/button_decorator/button_decorator.dart' as import33;
import 'package:angular_components/interfaces/has_disabled.dart' as import34;
import 'package:angular_forms/src/directives/ng_control.dart' as import35;
import 'package:angular_components/utils/angular/reference/reference.dart' as import36;
import 'package:angular_components/focus/focus_interface.dart' as import37;
import 'package:angular_components/material_input/base_material_input.dart' as import38;
import 'package:angular_components/content/deferred_content_aware.dart' as import39;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import40;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import41;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import42;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import43;
import 'package:angular_components/utils/browser/window/module.dart' as import44;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import45;
import 'package:angular_components/utils/disposer/disposer.dart' as import46;
import 'package:angular/src/core/zone/ng_zone.dart' as import47;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import48;
import 'package:angular/src/core/linker/component_loader.dart' as import49;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import50;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import51;
import 'package:angular_components/laminate/overlay/module.dart' as import52;

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
  import9.ViewModalComponent0 _compView_21;
  import10.ModalComponent _ModalComponent_21_5;
  import11.ViewMaterialDialogComponent0 _compView_22;
  import12.MaterialDialogComponent _MaterialDialogComponent_22_5;
  import13.ViewVideoComponent0 _compView_25;
  import14.VideoComponent _VideoComponent_25_5;
  import15.ViewMaterialInputComponent0 _compView_26;
  import16.DeferredValidator _DeferredValidator_26_5;
  List<dynamic> _NgValidators_26_6;
  import17.NgModel _NgModel_26_7;
  import17.NgModel _NgControl_26_8;
  import18.MaterialInputComponent _MaterialInputComponent_26_9;
  import18.MaterialInputComponent _BaseMaterialInput_26_10;
  import19.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_26_11;
  import5.ViewMaterialButtonComponent0 _compView_28;
  dynamic _AcxDarkTheme_28_5;
  import6.MaterialButtonComponent _MaterialButtonComponent_28_6;
  Map<String, String> Function(String) _map_0;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_6;
  var _expr_7;
  var _expr_8;
  String _expr_9;
  import21.Text _text_5;
  import21.Text _text_7;
  import21.Text _text_24;
  import21.Element _el_25;
  static RenderComponentType _renderType;
  ViewPostComponent0(AppView<dynamic> parentView, int parentIndex) : super(import23.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import21.document.createElement('post-component');
    _renderType ??= import25.appViewUtils.createRenderType((import26.isDevMode ? 'asset:avocado_web/lib/src/components/posts/post_component.dart' : null), ViewEncapsulation.Emulated, styles$PostComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import3.PostComponent> build() {
    final _rootEl = rootEl;
    final import21.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import21.document;
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
    final _text_4 = import21.Text('by ');
    _el_3.append(_text_4);
    _text_5 = import21.Text('');
    _el_3.append(_text_5);
    final _el_6 = createDivAndAppend(doc, _el_0);
    _el_6.className = 'demo-card__secondary';
    addShimC(_el_6);
    _text_7 = import21.Text('');
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
    _AcxDarkTheme_10_5 = (import26.isDevMode
        ? import28.debugInjectorWrap(import29.AcxDarkTheme, () {
            return import29.AcxDarkTheme(parentView.injectorGet(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import29.AcxDarkTheme(parentView.injectorGet(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_10_6 = import6.MaterialButtonComponent(_el_10, _AcxDarkTheme_10_5, _compView_10.ref, null);
    final _text_11 = import21.Text('Read');
    _compView_10.create(_MaterialButtonComponent_10_6, [
      [_text_11]
    ]);
    _compView_12 = import5.ViewMaterialButtonComponent0(this, 12);
    final _el_12 = _compView_12.rootEl;
    _el_9.append(_el_12);
    addShimC(_el_12);
    _AcxDarkTheme_12_5 = (import26.isDevMode
        ? import28.debugInjectorWrap(import29.AcxDarkTheme, () {
            return import29.AcxDarkTheme(parentView.injectorGet(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import29.AcxDarkTheme(parentView.injectorGet(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_12_6 = import6.MaterialButtonComponent(_el_12, _AcxDarkTheme_12_5, _compView_12.ref, null);
    final _text_13 = import21.Text('Bookmark');
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
    _AcxDarkTheme_15_5 = (import26.isDevMode
        ? import28.debugInjectorWrap(import29.AcxDarkTheme, () {
            return import29.AcxDarkTheme(parentView.injectorGet(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import29.AcxDarkTheme(parentView.injectorGet(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
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
    _AcxDarkTheme_17_5 = (import26.isDevMode
        ? import28.debugInjectorWrap(import29.AcxDarkTheme, () {
            return import29.AcxDarkTheme(parentView.injectorGet(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import29.AcxDarkTheme(parentView.injectorGet(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
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
    _AcxDarkTheme_19_5 = (import26.isDevMode
        ? import28.debugInjectorWrap(import29.AcxDarkTheme, () {
            return import29.AcxDarkTheme(parentView.injectorGet(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import29.AcxDarkTheme(parentView.injectorGet(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
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
    _compView_21 = import9.ViewModalComponent0(this, 21);
    final _el_21 = _compView_21.rootEl;
    parentRenderNode.append(_el_21);
    addShimC(_el_21);
    _ModalComponent_21_5 = (import26.isDevMode
        ? import28.debugInjectorWrap(import10.ModalComponent, () {
            return import10.ModalComponent(parentView.injectorGet(import31.OverlayService, viewData.parentIndex), _el_21, parentView.injectorGet(import32.DomService, viewData.parentIndex), parentView.injectorGet(import10.Modal, viewData.parentIndex, null), parentView.injectorGet(import10.GlobalModalStack, viewData.parentIndex, null));
          })
        : import10.ModalComponent(parentView.injectorGet(import31.OverlayService, viewData.parentIndex), _el_21, parentView.injectorGet(import32.DomService, viewData.parentIndex), parentView.injectorGet(import10.Modal, viewData.parentIndex, null), parentView.injectorGet(import10.GlobalModalStack, viewData.parentIndex, null)));
    _compView_22 = import11.ViewMaterialDialogComponent0(this, 22);
    final _el_22 = _compView_22.rootEl;
    _el_22.className = 'basic-dialog';
    addShimC(_el_22);
    _MaterialDialogComponent_22_5 = (import26.isDevMode
        ? import28.debugInjectorWrap(import12.MaterialDialogComponent, () {
            return import12.MaterialDialogComponent(_el_22, parentView.injectorGet(import32.DomService, viewData.parentIndex), _compView_22.ref, _ModalComponent_21_5);
          })
        : import12.MaterialDialogComponent(_el_22, parentView.injectorGet(import32.DomService, viewData.parentIndex), _compView_22.ref, _ModalComponent_21_5));
    final _el_23 = doc.createElement('h1');
    createAttr(_el_23, 'header', '');
    addShimE(_el_23);
    _text_24 = import21.Text('');
    _el_23.append(_text_24);
    _compView_25 = import13.ViewVideoComponent0(this, 25);
    _el_25 = _compView_25.rootEl;
    createAttr(_el_25, 'style', 'width: 300px');
    addShimC(_el_25);
    _VideoComponent_25_5 = import14.VideoComponent();
    _compView_25.create(_VideoComponent_25_5, []);
    _compView_26 = import15.ViewMaterialInputComponent0(this, 26);
    final _el_26 = _compView_26.rootEl;
    createAttr(_el_26, 'floatingLabel', '');
    createAttr(_el_26, 'label', 'Type positive numbers from 10 to 99999');
    createAttr(_el_26, 'type', 'string');
    addShimC(_el_26);
    _DeferredValidator_26_5 = import16.DeferredValidator();
    _NgValidators_26_6 = [_DeferredValidator_26_5];
    _NgModel_26_7 = import17.NgModel(_NgValidators_26_6, null);
    _NgControl_26_8 = _NgModel_26_7;
    _MaterialInputComponent_26_9 = import18.MaterialInputComponent('string', null, null, _NgControl_26_8, _compView_26.ref, _DeferredValidator_26_5);
    _BaseMaterialInput_26_10 = _MaterialInputComponent_26_9;
    _MaterialInputDefaultValueAccessor_26_11 = import19.MaterialInputDefaultValueAccessor(_BaseMaterialInput_26_10, _NgControl_26_8);
    _compView_26.create(_MaterialInputComponent_26_9, [const [], const []]);
    final _el_27 = doc.createElement('div');
    createAttr(_el_27, 'footer', '');
    addShimC(_el_27);
    _compView_28 = import5.ViewMaterialButtonComponent0(this, 28);
    final _el_28 = _compView_28.rootEl;
    _el_27.append(_el_28);
    createAttr(_el_28, 'autoFocus', '');
    createAttr(_el_28, 'clear-size', '');
    addShimC(_el_28);
    _AcxDarkTheme_28_5 = (import26.isDevMode
        ? import28.debugInjectorWrap(import29.AcxDarkTheme, () {
            return import29.AcxDarkTheme(parentView.injectorGet(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import29.AcxDarkTheme(parentView.injectorGet(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_28_6 = import6.MaterialButtonComponent(_el_28, _AcxDarkTheme_28_5, _compView_28.ref, null);
    final _text_29 = import21.Text('Close');
    _compView_28.create(_MaterialButtonComponent_28_6, [
      [_text_29]
    ]);
    _compView_22.create(_MaterialDialogComponent_22_5, [
      [_el_23],
      [_el_25, _el_26],
      [_el_27]
    ]);
    _compView_21.create(_ModalComponent_21_5, [
      [_el_22]
    ]);
    _map_0 = import25.pureProxy1((p0) {
      return {'background-image': p0};
    });
    final subscription_0 = _MaterialButtonComponent_17_6.trigger.listen(eventHandler0(ctx.onClick));
    final subscription_1 = _NgModel_26_7.update.listen(eventHandler1(_handle_ngModelChange_26_0));
    final subscription_2 = _MaterialButtonComponent_28_6.trigger.listen(eventHandler1(_handle_trigger_28_0));
    init(const [], [subscription_0, subscription_1, subscription_2]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import29.AcxDarkTheme) && ((10 <= nodeIndex) && (nodeIndex <= 11)))) {
      return _AcxDarkTheme_10_5;
    }
    if ((((identical(token, import6.MaterialButtonComponent) || identical(token, import33.ButtonDirective)) || identical(token, import34.HasDisabled)) && ((10 <= nodeIndex) && (nodeIndex <= 11)))) {
      return _MaterialButtonComponent_10_6;
    }
    if ((identical(token, import29.AcxDarkTheme) && ((12 <= nodeIndex) && (nodeIndex <= 13)))) {
      return _AcxDarkTheme_12_5;
    }
    if ((((identical(token, import6.MaterialButtonComponent) || identical(token, import33.ButtonDirective)) || identical(token, import34.HasDisabled)) && ((12 <= nodeIndex) && (nodeIndex <= 13)))) {
      return _MaterialButtonComponent_12_6;
    }
    if ((identical(token, import29.AcxDarkTheme) && ((15 <= nodeIndex) && (nodeIndex <= 16)))) {
      return _AcxDarkTheme_15_5;
    }
    if ((((identical(token, import6.MaterialButtonComponent) || identical(token, import33.ButtonDirective)) || identical(token, import34.HasDisabled)) && ((15 <= nodeIndex) && (nodeIndex <= 16)))) {
      return _MaterialButtonComponent_15_6;
    }
    if ((identical(token, import29.AcxDarkTheme) && ((17 <= nodeIndex) && (nodeIndex <= 18)))) {
      return _AcxDarkTheme_17_5;
    }
    if ((((identical(token, import6.MaterialButtonComponent) || identical(token, import33.ButtonDirective)) || identical(token, import34.HasDisabled)) && ((17 <= nodeIndex) && (nodeIndex <= 18)))) {
      return _MaterialButtonComponent_17_6;
    }
    if ((identical(token, import29.AcxDarkTheme) && ((19 <= nodeIndex) && (nodeIndex <= 20)))) {
      return _AcxDarkTheme_19_5;
    }
    if ((((identical(token, import6.MaterialButtonComponent) || identical(token, import33.ButtonDirective)) || identical(token, import34.HasDisabled)) && ((19 <= nodeIndex) && (nodeIndex <= 20)))) {
      return _MaterialButtonComponent_19_6;
    }
    if ((identical(token, import16.DeferredValidator) && (26 == nodeIndex))) {
      return _DeferredValidator_26_5;
    }
    if ((identical(token, const import30.MultiToken<dynamic>('NgValidators')) && (26 == nodeIndex))) {
      return _NgValidators_26_6;
    }
    if ((identical(token, import17.NgModel) && (26 == nodeIndex))) {
      return _NgModel_26_7;
    }
    if ((identical(token, import35.NgControl) && (26 == nodeIndex))) {
      return _NgControl_26_8;
    }
    if (((((identical(token, import18.MaterialInputComponent) || identical(token, import36.ReferenceDirective)) || identical(token, import37.Focusable)) || identical(token, import34.HasDisabled)) && (26 == nodeIndex))) {
      return _MaterialInputComponent_26_9;
    }
    if ((identical(token, import38.BaseMaterialInput) && (26 == nodeIndex))) {
      return _BaseMaterialInput_26_10;
    }
    if ((identical(token, import19.MaterialInputDefaultValueAccessor) && (26 == nodeIndex))) {
      return _MaterialInputDefaultValueAccessor_26_11;
    }
    if ((identical(token, import29.AcxDarkTheme) && ((28 <= nodeIndex) && (nodeIndex <= 29)))) {
      return _AcxDarkTheme_28_5;
    }
    if ((((identical(token, import6.MaterialButtonComponent) || identical(token, import33.ButtonDirective)) || identical(token, import34.HasDisabled)) && ((28 <= nodeIndex) && (nodeIndex <= 29)))) {
      return _MaterialButtonComponent_28_6;
    }
    if ((((identical(token, import10.ModalComponent) || identical(token, import39.DeferredContentAware)) || identical(token, import10.Modal)) && ((21 <= nodeIndex) && (nodeIndex <= 29)))) {
      return _ModalComponent_21_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _map_0((('url(' + ((_ctx.post == null) ? null : _ctx.post.image)) + ')'));
    if (import25.checkBinding(_expr_0, currVal_0)) {
      _NgStyle_1_5.rawStyle = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import25.AppViewUtils.throwOnChanges) {
      _NgStyle_1_5.ngDoCheck();
    }
    changed = false;
    if (changed) {
      _compView_10.markAsCheckOnce();
    }
    if ((!import25.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_10_6.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_12.markAsCheckOnce();
    }
    if ((!import25.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_12_6.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_15.markAsCheckOnce();
    }
    if ((!import25.AppViewUtils.throwOnChanges && firstCheck)) {
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
    if ((!import25.AppViewUtils.throwOnChanges && firstCheck)) {
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
    if ((!import25.AppViewUtils.throwOnChanges && firstCheck)) {
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
    final currVal_6 = _ctx.showEditor;
    if (import25.checkBinding(_expr_6, currVal_6)) {
      _ModalComponent_21_5.visible = currVal_6;
      _expr_6 = currVal_6;
    }
    changed = false;
    if (changed) {
      _compView_22.markAsCheckOnce();
    }
    final currVal_9 = ((_ctx.post == null) ? null : _ctx.post.video);
    if (import25.checkBinding(_expr_9, currVal_9)) {
      _VideoComponent_25_5.video = currVal_9;
      _expr_9 = currVal_9;
    }
    changed = false;
    _NgModel_26_7.model = _ctx.value;
    _NgModel_26_7.ngAfterChanges();
    if ((!import25.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_26_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_26_9.label = 'Type positive numbers from 10 to 99999';
      changed = true;
      _MaterialInputComponent_26_9.floatingLabel = true;
      changed = true;
    }
    if (changed) {
      _compView_26.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_28.markAsCheckOnce();
    }
    if ((!import25.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_28_6.ngOnInit();
    }
    if (!import25.AppViewUtils.throwOnChanges) {
      _MaterialDialogComponent_22_5.ngAfterContentChecked();
    }
    final currVal_1 = import25.interpolate0(((((_ctx.post == null) ? null : _ctx.post.user) == null) ? null : ((_ctx.post == null) ? null : _ctx.post.user).displayName));
    if (import25.checkBinding(_expr_1, currVal_1)) {
      _text_5.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import25.interpolate0(((_ctx.post == null) ? null : _ctx.post.content));
    if (import25.checkBinding(_expr_2, currVal_2)) {
      _text_7.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_10.detectHostChanges(firstCheck);
    _compView_12.detectHostChanges(firstCheck);
    _compView_15.detectHostChanges(firstCheck);
    _compView_17.detectHostChanges(firstCheck);
    _compView_19.detectHostChanges(firstCheck);
    _compView_21.detectHostChanges(firstCheck);
    final currVal_7 = import25.interpolate0(((_ctx.post == null) ? null : _ctx.post.content));
    if (import25.checkBinding(_expr_7, currVal_7)) {
      _text_24.text = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_8 = (((_ctx.post == null) ? null : _ctx.post.video) != null);
    if (import25.checkBinding(_expr_8, currVal_8)) {
      setProp(_el_25, 'visible', currVal_8);
      _expr_8 = currVal_8;
    }
    _compView_28.detectHostChanges(firstCheck);
    _compView_10.detectChanges();
    _compView_12.detectChanges();
    _compView_15.detectChanges();
    _compView_16.detectChanges();
    _compView_17.detectChanges();
    _compView_18.detectChanges();
    _compView_19.detectChanges();
    _compView_20.detectChanges();
    _compView_21.detectChanges();
    _compView_22.detectChanges();
    _compView_25.detectChanges();
    _compView_26.detectChanges();
    _compView_28.detectChanges();
    if (!import25.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialInputComponent_26_9.ngAfterViewInit();
        _ModalComponent_21_5.ngAfterViewInit();
      }
    }
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
    _compView_21.destroy();
    _compView_22.destroy();
    _compView_25.destroy();
    _compView_26.destroy();
    _compView_28.destroy();
    _MaterialInputComponent_26_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_26_11.ngOnDestroy();
    _MaterialDialogComponent_22_5.ngOnDestroy();
    _ModalComponent_21_5.ngOnDestroy();
  }

  void _handle_ngModelChange_26_0($event) {
    ctx.value = $event;
  }

  void _handle_trigger_28_0($event) {
    ctx.showEditor = false;
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
  dynamic __Document_0_6;
  dynamic __Window_0_7;
  dynamic __DomService_0_8;
  dynamic __AcxImperativeViewUtils_0_9;
  import40.DomRuler __DomRuler_0_10;
  dynamic __ManagedZone_0_11;
  dynamic __overlayContainerName_0_12;
  dynamic __overlayContainerParent_0_13;
  dynamic __overlayContainer_0_14;
  bool __overlaySyncDom_0_15;
  bool __overlayRepositionLoop_0_16;
  import41.OverlayStyleConfig __OverlayStyleConfig_0_17;
  import42.ZIndexer __ZIndexer_0_18;
  import43.OverlayDomRenderService __OverlayDomRenderService_0_19;
  dynamic __OverlayService_0_20;
  _ViewPostComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import23.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _Document_0_6 {
    if ((__Document_0_6 == null)) {
      (__Document_0_6 = import44.getDocument());
    }
    return __Document_0_6;
  }

  dynamic get _Window_0_7 {
    if ((__Window_0_7 == null)) {
      (__Window_0_7 = import44.getWindow());
    }
    return __Window_0_7;
  }

  dynamic get _DomService_0_8 {
    if ((__DomService_0_8 == null)) {
      (__DomService_0_8 = (import26.isDevMode
          ? import28.debugInjectorWrap(import32.DomService, () {
              return import45.createDomService(this.injectorGet(import32.DomService, viewData.parentIndex, null), this.injectorGet(import46.Disposer, viewData.parentIndex, null), this.injectorGet(import47.NgZone, viewData.parentIndex), _Window_0_7);
            })
          : import45.createDomService(this.injectorGet(import32.DomService, viewData.parentIndex, null), this.injectorGet(import46.Disposer, viewData.parentIndex, null), this.injectorGet(import47.NgZone, viewData.parentIndex), _Window_0_7)));
    }
    return __DomService_0_8;
  }

  dynamic get _AcxImperativeViewUtils_0_9 {
    if ((__AcxImperativeViewUtils_0_9 == null)) {
      (__AcxImperativeViewUtils_0_9 = (import26.isDevMode
          ? import28.debugInjectorWrap(import48.AcxImperativeViewUtils, () {
              return import48.AcxImperativeViewUtils(this.injectorGet(import49.ComponentLoader, viewData.parentIndex), _DomService_0_8);
            })
          : import48.AcxImperativeViewUtils(this.injectorGet(import49.ComponentLoader, viewData.parentIndex), _DomService_0_8)));
    }
    return __AcxImperativeViewUtils_0_9;
  }

  import40.DomRuler get _DomRuler_0_10 {
    if ((__DomRuler_0_10 == null)) {
      (__DomRuler_0_10 = import40.DomRuler(_Document_0_6, _DomService_0_8));
    }
    return __DomRuler_0_10;
  }

  dynamic get _ManagedZone_0_11 {
    if ((__ManagedZone_0_11 == null)) {
      (__ManagedZone_0_11 = (import26.isDevMode
          ? import28.debugInjectorWrap(import50.ManagedZone, () {
              return import51.Angular2ManagedZone(this.injectorGet(import47.NgZone, viewData.parentIndex));
            })
          : import51.Angular2ManagedZone(this.injectorGet(import47.NgZone, viewData.parentIndex))));
    }
    return __ManagedZone_0_11;
  }

  dynamic get _overlayContainerName_0_12 {
    if ((__overlayContainerName_0_12 == null)) {
      (__overlayContainerName_0_12 = (import26.isDevMode
          ? import28.debugInjectorWrap(const import30.OpaqueToken<dynamic>('overlayContainerName'), () {
              return import52.getDefaultContainerName(this.injectorGet(const import30.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex, null));
            })
          : import52.getDefaultContainerName(this.injectorGet(const import30.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex, null))));
    }
    return __overlayContainerName_0_12;
  }

  dynamic get _overlayContainerParent_0_13 {
    if ((__overlayContainerParent_0_13 == null)) {
      (__overlayContainerParent_0_13 = (import26.isDevMode
          ? import28.debugInjectorWrap(const import30.OpaqueToken<dynamic>('overlayContainerParent'), () {
              return import52.getOverlayContainerParent(_Document_0_6, this.injectorGet(const import30.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex, null));
            })
          : import52.getOverlayContainerParent(_Document_0_6, this.injectorGet(const import30.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex, null))));
    }
    return __overlayContainerParent_0_13;
  }

  dynamic get _overlayContainer_0_14 {
    if ((__overlayContainer_0_14 == null)) {
      (__overlayContainer_0_14 = (import26.isDevMode
          ? import28.debugInjectorWrap(const import30.OpaqueToken<dynamic>('overlayContainer'), () {
              return import52.getDefaultContainer(_overlayContainerName_0_12, _overlayContainerParent_0_13, this.injectorGet(const import30.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex, null));
            })
          : import52.getDefaultContainer(_overlayContainerName_0_12, _overlayContainerParent_0_13, this.injectorGet(const import30.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex, null))));
    }
    return __overlayContainer_0_14;
  }

  bool get _overlaySyncDom_0_15 {
    if ((__overlaySyncDom_0_15 == null)) {
      (__overlaySyncDom_0_15 = true);
    }
    return __overlaySyncDom_0_15;
  }

  bool get _overlayRepositionLoop_0_16 {
    if ((__overlayRepositionLoop_0_16 == null)) {
      (__overlayRepositionLoop_0_16 = true);
    }
    return __overlayRepositionLoop_0_16;
  }

  import41.OverlayStyleConfig get _OverlayStyleConfig_0_17 {
    if ((__OverlayStyleConfig_0_17 == null)) {
      (__OverlayStyleConfig_0_17 = import41.OverlayStyleConfig(_Document_0_6));
    }
    return __OverlayStyleConfig_0_17;
  }

  import42.ZIndexer get _ZIndexer_0_18 {
    if ((__ZIndexer_0_18 == null)) {
      (__ZIndexer_0_18 = import42.ZIndexer());
    }
    return __ZIndexer_0_18;
  }

  import43.OverlayDomRenderService get _OverlayDomRenderService_0_19 {
    if ((__OverlayDomRenderService_0_19 == null)) {
      (__OverlayDomRenderService_0_19 = import43.OverlayDomRenderService(_OverlayStyleConfig_0_17, _overlayContainer_0_14, _overlayContainerName_0_12, _DomRuler_0_10, _DomService_0_8, _AcxImperativeViewUtils_0_9, _overlaySyncDom_0_15, _overlayRepositionLoop_0_16, _ZIndexer_0_18));
    }
    return __OverlayDomRenderService_0_19;
  }

  dynamic get _OverlayService_0_20 {
    if ((__OverlayService_0_20 == null)) {
      (__OverlayService_0_20 = (import26.isDevMode
          ? import28.debugInjectorWrap(import31.OverlayService, () {
              return import31.OverlayService(this.injectorGet(import47.NgZone, viewData.parentIndex), _overlaySyncDom_0_15, _OverlayDomRenderService_0_19, this.injectorGet(import31.OverlayService, viewData.parentIndex, null));
            })
          : import31.OverlayService(this.injectorGet(import47.NgZone, viewData.parentIndex), _overlaySyncDom_0_15, _OverlayDomRenderService_0_19, this.injectorGet(import31.OverlayService, viewData.parentIndex, null))));
    }
    return __OverlayService_0_20;
  }

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
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import21.Document) && (0 == nodeIndex))) {
      return _Document_0_6;
    }
    if ((identical(token, import21.Window) && (0 == nodeIndex))) {
      return _Window_0_7;
    }
    if ((identical(token, import32.DomService) && (0 == nodeIndex))) {
      return _DomService_0_8;
    }
    if ((identical(token, import48.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_9;
    }
    if ((identical(token, import40.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_10;
    }
    if ((identical(token, import50.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_11;
    }
    if ((identical(token, const import30.OpaqueToken<dynamic>('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_12;
    }
    if ((identical(token, const import30.OpaqueToken<dynamic>('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_13;
    }
    if ((identical(token, const import30.OpaqueToken<dynamic>('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_14;
    }
    if ((identical(token, const import30.OpaqueToken<dynamic>('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_15;
    }
    if ((identical(token, const import30.OpaqueToken<dynamic>('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_16;
    }
    if ((identical(token, import41.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_17;
    }
    if ((identical(token, import42.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_18;
    }
    if ((identical(token, import43.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_19;
    }
    if ((identical(token, import31.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_20;
    }
    return notFoundResult;
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
  _ref2.initReflector();
}
