// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'video_uploader_component.dart';
export 'video_uploader_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:angular_components/css/mdc_web/card/mdc-card.scss.css.shim.dart' as import0;
import 'package:avocado_web/src/components/posts/video_uploader_component.scss.css.shim.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'video_uploader_component.dart' as import3;
import 'package:angular_components/material_input/material_input.template.dart' as import4;
import 'package:angular_components/material_input/deferred_validator.dart' as import5;
import 'package:angular_forms/src/directives/ng_model.dart' as import6;
import 'package:angular_components/material_input/material_input.dart' as import7;
import 'package:angular_components/material_input/material_input_default_value_accessor.dart' as import8;
import 'package:angular_components/material_button/material_button.template.dart' as import9;
import 'package:angular_components/material_button/material_button.dart' as import10;
import 'dart:html' as import11;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import13;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import15;
import 'package:angular/src/runtime.dart' as import16;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import18;
import 'package:angular_components/theme/dark_theme.dart' as import19;
import 'package:angular/src/core/di/opaque_token.dart' as import20;
import 'package:angular_forms/src/directives/ng_control.dart' as import21;
import 'package:angular_components/utils/angular/reference/reference.dart' as import22;
import 'package:angular_components/focus/focus_interface.dart' as import23;
import 'package:angular_components/interfaces/has_disabled.dart' as import24;
import 'package:angular_components/material_input/base_material_input.dart' as import25;
import 'package:angular_components/button_decorator/button_decorator.dart' as import26;
import 'package:avocado_common/src/services/store.dart' as import27;

final List<dynamic> styles$VideoUploaderComponent = [import0.styles, import1.styles];

class ViewVideoUploaderComponent0 extends AppView<import3.VideoUploaderComponent> {
  import4.ViewMaterialInputComponent0 _compView_0;
  import5.DeferredValidator _DeferredValidator_0_5;
  List<dynamic> _NgValidators_0_6;
  import6.NgModel _NgModel_0_7;
  import6.NgModel _NgControl_0_8;
  import7.MaterialInputComponent _MaterialInputComponent_0_9;
  import7.MaterialInputComponent _BaseMaterialInput_0_10;
  import8.MaterialInputChangeValueAccessor _MaterialInputChangeValueAccessor_0_11;
  import4.ViewMaterialInputComponent0 _compView_2;
  import5.DeferredValidator _DeferredValidator_2_5;
  List<dynamic> _NgValidators_2_6;
  import6.NgModel _NgModel_2_7;
  import6.NgModel _NgControl_2_8;
  import7.MaterialInputComponent _MaterialInputComponent_2_9;
  import7.MaterialInputComponent _BaseMaterialInput_2_10;
  import8.MaterialInputChangeValueAccessor _MaterialInputChangeValueAccessor_2_11;
  import9.ViewMaterialButtonComponent0 _compView_10;
  dynamic _AcxDarkTheme_10_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_10_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_10;
  import11.Text _text_14;
  import11.Text _text_18;
  import11.Text _text_22;
  import11.Text _text_26;
  static RenderComponentType _renderType;
  ViewVideoUploaderComponent0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import11.document.createElement('video-uploader-component');
    _renderType ??= import15.appViewUtils.createRenderType((import16.isDevMode ? 'asset:avocado_web/lib/src/components/posts/video_uploader_component.dart' : null), ViewEncapsulation.Emulated, styles$VideoUploaderComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import3.VideoUploaderComponent> build() {
    final _rootEl = rootEl;
    final import11.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import4.ViewMaterialInputComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    createAttr(_el_0, 'changeUpdate', '');
    createAttr(_el_0, 'label', 'name');
    addShimC(_el_0);
    _DeferredValidator_0_5 = import5.DeferredValidator();
    _NgValidators_0_6 = [_DeferredValidator_0_5];
    _NgModel_0_7 = import6.NgModel(_NgValidators_0_6, null);
    _NgControl_0_8 = _NgModel_0_7;
    _MaterialInputComponent_0_9 = import7.MaterialInputComponent(null, null, null, _NgControl_0_8, _compView_0.ref, _DeferredValidator_0_5);
    _BaseMaterialInput_0_10 = _MaterialInputComponent_0_9;
    _MaterialInputChangeValueAccessor_0_11 = import8.MaterialInputChangeValueAccessor(_BaseMaterialInput_0_10, _NgControl_0_8);
    _compView_0.create(_MaterialInputComponent_0_9, [const [], const []]);
    var doc = import11.document;
    final _el_1 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_1);
    _compView_2 = import4.ViewMaterialInputComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    createAttr(_el_2, 'changeUpdate', '');
    createAttr(_el_2, 'label', 'content');
    addShimC(_el_2);
    _DeferredValidator_2_5 = import5.DeferredValidator();
    _NgValidators_2_6 = [_DeferredValidator_2_5];
    _NgModel_2_7 = import6.NgModel(_NgValidators_2_6, null);
    _NgControl_2_8 = _NgModel_2_7;
    _MaterialInputComponent_2_9 = import7.MaterialInputComponent(null, null, null, _NgControl_2_8, _compView_2.ref, _DeferredValidator_2_5);
    _BaseMaterialInput_2_10 = _MaterialInputComponent_2_9;
    _MaterialInputChangeValueAccessor_2_11 = import8.MaterialInputChangeValueAccessor(_BaseMaterialInput_2_10, _NgControl_2_8);
    _compView_2.create(_MaterialInputComponent_2_9, [const [], const []]);
    final _el_3 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_3);
    final _text_4 = import11.Text(' ');
    parentRenderNode.append(_text_4);
    final _el_5 = createAndAppend(doc, 'input', parentRenderNode);
    createAttr(_el_5, 'name', 'file');
    createAttr(_el_5, 'type', 'file');
    addShimC(_el_5);
    final _el_6 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_6);
    final _text_7 = import11.Text('\n');
    parentRenderNode.append(_text_7);
    final _el_8 = createAndAppend(doc, 'input', parentRenderNode);
    createAttr(_el_8, 'name', 'file');
    createAttr(_el_8, 'type', 'file');
    addShimC(_el_8);
    final _el_9 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_9);
    _compView_10 = import9.ViewMaterialButtonComponent0(this, 10);
    final _el_10 = _compView_10.rootEl;
    parentRenderNode.append(_el_10);
    _el_10.className = 'blue';
    createAttr(_el_10, 'raised', '');
    addShimC(_el_10);
    _AcxDarkTheme_10_5 = (import16.isDevMode
        ? import18.debugInjectorWrap(import19.AcxDarkTheme, () {
            return import19.AcxDarkTheme(parentView.injectorGet(const import20.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import19.AcxDarkTheme(parentView.injectorGet(const import20.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_10_6 = import10.MaterialButtonComponent(_el_10, _AcxDarkTheme_10_5, _compView_10.ref, null);
    final _text_11 = import11.Text('Add');
    _compView_10.create(_MaterialButtonComponent_10_6, [
      [_text_11]
    ]);
    final _el_12 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_12);
    final _text_13 = import11.Text('--');
    _el_12.append(_text_13);
    _text_14 = import11.Text('');
    _el_12.append(_text_14);
    final _text_15 = import11.Text('--');
    _el_12.append(_text_15);
    final _el_16 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_16);
    final _text_17 = import11.Text('--');
    _el_16.append(_text_17);
    _text_18 = import11.Text('');
    _el_16.append(_text_18);
    final _text_19 = import11.Text('--');
    _el_16.append(_text_19);
    final _el_20 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_20);
    final _text_21 = import11.Text('--');
    _el_20.append(_text_21);
    _text_22 = import11.Text('');
    _el_20.append(_text_22);
    final _text_23 = import11.Text('--');
    _el_20.append(_text_23);
    final _el_24 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_24);
    final _text_25 = import11.Text('--');
    _el_24.append(_text_25);
    _text_26 = import11.Text('');
    _el_24.append(_text_26);
    final _text_27 = import11.Text('--');
    _el_24.append(_text_27);
    final subscription_0 = _NgModel_0_7.update.listen(eventHandler1(_handle_ngModelChange_0_0));
    final subscription_1 = _NgModel_2_7.update.listen(eventHandler1(_handle_ngModelChange_2_0));
    final subscription_2 = _MaterialButtonComponent_10_6.trigger.listen(eventHandler0(ctx.create));
    ctx.imageUpload = _el_8;
    ctx.videoUpload = _el_5;
    init(const [], [subscription_0, subscription_1, subscription_2]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.DeferredValidator) && (0 == nodeIndex))) {
      return _DeferredValidator_0_5;
    }
    if ((identical(token, const import20.MultiToken<dynamic>('NgValidators')) && (0 == nodeIndex))) {
      return _NgValidators_0_6;
    }
    if ((identical(token, import6.NgModel) && (0 == nodeIndex))) {
      return _NgModel_0_7;
    }
    if ((identical(token, import21.NgControl) && (0 == nodeIndex))) {
      return _NgControl_0_8;
    }
    if (((((identical(token, import7.MaterialInputComponent) || identical(token, import22.ReferenceDirective)) || identical(token, import23.Focusable)) || identical(token, import24.HasDisabled)) && (0 == nodeIndex))) {
      return _MaterialInputComponent_0_9;
    }
    if ((identical(token, import25.BaseMaterialInput) && (0 == nodeIndex))) {
      return _BaseMaterialInput_0_10;
    }
    if ((identical(token, import8.MaterialInputChangeValueAccessor) && (0 == nodeIndex))) {
      return _MaterialInputChangeValueAccessor_0_11;
    }
    if ((identical(token, import5.DeferredValidator) && (2 == nodeIndex))) {
      return _DeferredValidator_2_5;
    }
    if ((identical(token, const import20.MultiToken<dynamic>('NgValidators')) && (2 == nodeIndex))) {
      return _NgValidators_2_6;
    }
    if ((identical(token, import6.NgModel) && (2 == nodeIndex))) {
      return _NgModel_2_7;
    }
    if ((identical(token, import21.NgControl) && (2 == nodeIndex))) {
      return _NgControl_2_8;
    }
    if (((((identical(token, import7.MaterialInputComponent) || identical(token, import22.ReferenceDirective)) || identical(token, import23.Focusable)) || identical(token, import24.HasDisabled)) && (2 == nodeIndex))) {
      return _MaterialInputComponent_2_9;
    }
    if ((identical(token, import25.BaseMaterialInput) && (2 == nodeIndex))) {
      return _BaseMaterialInput_2_10;
    }
    if ((identical(token, import8.MaterialInputChangeValueAccessor) && (2 == nodeIndex))) {
      return _MaterialInputChangeValueAccessor_2_11;
    }
    if ((identical(token, import19.AcxDarkTheme) && ((10 <= nodeIndex) && (nodeIndex <= 11)))) {
      return _AcxDarkTheme_10_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import26.ButtonDirective)) || identical(token, import24.HasDisabled)) && ((10 <= nodeIndex) && (nodeIndex <= 11)))) {
      return _MaterialButtonComponent_10_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_0_7.model = _ctx.name;
    _NgModel_0_7.ngAfterChanges();
    if ((!import15.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_0_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_0_9.label = 'name';
      changed = true;
      _MaterialInputComponent_0_9.floatingLabel = true;
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    changed = false;
    _NgModel_2_7.model = _ctx.content;
    _NgModel_2_7.ngAfterChanges();
    if ((!import15.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_2_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_2_9.label = 'content';
      changed = true;
      _MaterialInputComponent_2_9.floatingLabel = true;
      changed = true;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_10_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_10.markAsCheckOnce();
    }
    if ((!import15.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_10_6.ngOnInit();
    }
    _compView_10.detectHostChanges(firstCheck);
    final currVal_7 = (_ctx.output ?? '');
    if (import15.checkBinding(_expr_7, currVal_7)) {
      _text_14.text = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_8 = (_ctx.name ?? '');
    if (import15.checkBinding(_expr_8, currVal_8)) {
      _text_18.text = currVal_8;
      _expr_8 = currVal_8;
    }
    final currVal_9 = (_ctx.content ?? '');
    if (import15.checkBinding(_expr_9, currVal_9)) {
      _text_22.text = currVal_9;
      _expr_9 = currVal_9;
    }
    final currVal_10 = (_ctx.status ?? '');
    if (import15.checkBinding(_expr_10, currVal_10)) {
      _text_26.text = currVal_10;
      _expr_10 = currVal_10;
    }
    _compView_0.detectChanges();
    _compView_2.detectChanges();
    _compView_10.detectChanges();
    if (!import15.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialInputComponent_0_9.ngAfterViewInit();
        _MaterialInputComponent_2_9.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _compView_2.destroy();
    _compView_10.destroy();
    _MaterialInputComponent_0_9.ngOnDestroy();
    _MaterialInputChangeValueAccessor_0_11.ngOnDestroy();
    _MaterialInputComponent_2_9.ngOnDestroy();
    _MaterialInputChangeValueAccessor_2_11.ngOnDestroy();
  }

  void _handle_ngModelChange_0_0($event) {
    ctx.name = $event;
  }

  void _handle_ngModelChange_2_0($event) {
    ctx.content = $event;
  }
}

AppView<import3.VideoUploaderComponent> viewFactory_VideoUploaderComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewVideoUploaderComponent0(parentView, parentIndex);
}

const ComponentFactory<import3.VideoUploaderComponent> _VideoUploaderComponentNgFactory = const ComponentFactory('video-uploader-component', viewFactory_VideoUploaderComponentHost0);
ComponentFactory<import3.VideoUploaderComponent> get VideoUploaderComponentNgFactory {
  return _VideoUploaderComponentNgFactory;
}

final List<dynamic> styles$VideoUploaderComponentHost = const [];

class _ViewVideoUploaderComponentHost0 extends AppView<import3.VideoUploaderComponent> {
  ViewVideoUploaderComponent0 _compView_0;
  import3.VideoUploaderComponent _VideoUploaderComponent_0_5;
  _ViewVideoUploaderComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import3.VideoUploaderComponent> build() {
    _compView_0 = ViewVideoUploaderComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _VideoUploaderComponent_0_5 = (import16.isDevMode
        ? import18.debugInjectorWrap(import3.VideoUploaderComponent, () {
            return import3.VideoUploaderComponent(this.injectorGet(import27.StoreService, viewData.parentIndex));
          })
        : import3.VideoUploaderComponent(this.injectorGet(import27.StoreService, viewData.parentIndex)));
    _compView_0.create(_VideoUploaderComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _VideoUploaderComponent_0_5);
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

AppView<import3.VideoUploaderComponent> viewFactory_VideoUploaderComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVideoUploaderComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(VideoUploaderComponent, VideoUploaderComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
