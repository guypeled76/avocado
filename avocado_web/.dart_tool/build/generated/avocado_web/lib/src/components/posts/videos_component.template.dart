// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'videos_component.dart';
export 'videos_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:avocado_web/src/components/posts/video_uploader_component.template.dart' as _ref2;
import 'package:angular/src/core/linker/app_view.dart';
import 'videos_component.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import3;
import 'video_uploader_component.template.dart' as import4;
import 'video_uploader_component.dart' as import5;
import 'package:angular/src/common/pipes/async_pipe.dart' as import6;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import10;
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/di/errors.dart' as import15;
import 'package:avocado_common/src/services/store.dart' as import16;
import 'package:angular_components/material_button/material_button.template.dart' as import17;
import 'package:angular_components/material_button/material_button.dart' as import18;
import 'package:angular_components/material_icon/material_icon.template.dart' as import19;
import 'package:angular_components/material_icon/material_icon.dart' as import20;
import 'package:angular_components/theme/dark_theme.dart' as import21;
import 'package:angular/src/core/di/opaque_token.dart' as import22;
import 'package:angular_components/button_decorator/button_decorator.dart' as import23;
import 'package:angular_components/interfaces/has_disabled.dart' as import24;

final List<dynamic> styles$VideosComponent = const [];

class ViewVideosComponent0 extends AppView<import1.VideosComponent> {
  ViewContainer _appEl_3;
  import3.NgFor _NgFor_3_9;
  import4.ViewVideoUploaderComponent0 _compView_4;
  import5.VideoUploaderComponent _VideoUploaderComponent_4_5;
  var _expr_0;
  import6.AsyncPipe _pipe_async_0;
  static RenderComponentType _renderType;
  ViewVideosComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import10.document.createElement('videos-component');
    _renderType ??= import11.appViewUtils.createRenderType((import12.isDevMode ? 'asset:avocado_web/lib/src/components/posts/videos_component.dart' : null), ViewEncapsulation.None, styles$VideosComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.VideosComponent> build() {
    final _rootEl = rootEl;
    final import10.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import10.document;
    final _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    final _text_1 = import10.Text('Hello Videos');
    _el_0.append(_text_1);
    final _el_2 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_2, 'style', 'display: flex;flex-wrap: wrap;');
    final _anchor_3 = createViewContainerAnchor();
    _el_2.append(_anchor_3);
    _appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_VideosComponent1);
    _NgFor_3_9 = import3.NgFor(_appEl_3, _TemplateRef_3_8);
    _compView_4 = import4.ViewVideoUploaderComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    parentRenderNode.append(_el_4);
    _VideoUploaderComponent_4_5 = (import12.isDevMode
        ? import15.debugInjectorWrap(import5.VideoUploaderComponent, () {
            return import5.VideoUploaderComponent(parentView.injectorGet(import16.StoreService, viewData.parentIndex));
          })
        : import5.VideoUploaderComponent(parentView.injectorGet(import16.StoreService, viewData.parentIndex)));
    _compView_4.create(_VideoUploaderComponent_4_5, []);
    _pipe_async_0 = import6.AsyncPipe(ref);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _pipe_async_0.transform(_ctx.bloc.videos);
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _NgFor_3_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import11.AppViewUtils.throwOnChanges) {
      _NgFor_3_9.ngDoCheck();
    }
    if (firstCheck) {
      if (!identical(_ctx.bloc, null)) {
        (_VideoUploaderComponent_4_5.bloc = _ctx.bloc);
      }
    }
    _appEl_3.detectChangesInNestedViews();
    _compView_4.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_3.destroyNestedViews();
    _compView_4.destroy();
    _pipe_async_0.ngOnDestroy();
  }
}

AppView<import1.VideosComponent> viewFactory_VideosComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewVideosComponent0(parentView, parentIndex);
}

const ComponentFactory<import1.VideosComponent> _VideosComponentNgFactory = const ComponentFactory('videos-component', viewFactory_VideosComponentHost0);
ComponentFactory<import1.VideosComponent> get VideosComponentNgFactory {
  return _VideosComponentNgFactory;
}

class _ViewVideosComponent1 extends AppView<import1.VideosComponent> {
  import17.ViewMaterialButtonComponent0 _compView_9;
  dynamic _AcxDarkTheme_9_5;
  import18.MaterialButtonComponent _MaterialButtonComponent_9_6;
  import19.ViewMaterialIconComponent0 _compView_10;
  import20.MaterialIconComponent _MaterialIconComponent_10_5;
  var _expr_0;
  var _expr_1;
  import10.Text _text_2;
  import10.Text _text_6;
  _ViewVideosComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewVideosComponent0._renderType;
  }
  @override
  ComponentRef<import1.VideosComponent> build() {
    var doc = import10.document;
    final _el_0 = doc.createElement('div');
    createAttr(_el_0, 'style', 'border: 1px solid red; margin: 5px');
    final _text_1 = import10.Text('key:');
    _el_0.append(_text_1);
    _text_2 = import10.Text('');
    _el_0.append(_text_2);
    final _text_3 = import10.Text(' ');
    _el_0.append(_text_3);
    final _el_4 = createAndAppend(doc, 'br', _el_0);
    final _text_5 = import10.Text(' ');
    _el_0.append(_text_5);
    _text_6 = import10.Text('');
    _el_0.append(_text_6);
    final _text_7 = import10.Text(' ');
    _el_0.append(_text_7);
    final _el_8 = createAndAppend(doc, 'br', _el_0);
    _compView_9 = import17.ViewMaterialButtonComponent0(this, 9);
    final _el_9 = _compView_9.rootEl;
    _el_0.append(_el_9);
    _el_9.className = 'material-drawer-button';
    createAttr(_el_9, 'icon', '');
    _AcxDarkTheme_9_5 = (import12.isDevMode
        ? import15.debugInjectorWrap(import21.AcxDarkTheme, () {
            return import21.AcxDarkTheme(parentView.parentView.injectorGet(const import22.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import21.AcxDarkTheme(parentView.parentView.injectorGet(const import22.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_9_6 = import18.MaterialButtonComponent(_el_9, _AcxDarkTheme_9_5, _compView_9.ref, null);
    _compView_10 = import19.ViewMaterialIconComponent0(this, 10);
    final _el_10 = _compView_10.rootEl;
    createAttr(_el_10, 'icon', 'menu');
    _MaterialIconComponent_10_5 = import20.MaterialIconComponent(_el_10);
    _compView_10.create(_MaterialIconComponent_10_5, []);
    _compView_9.create(_MaterialButtonComponent_9_6, [
      [_el_10]
    ]);
    final subscription_0 = _MaterialButtonComponent_9_6.trigger.listen(eventHandler1(_handle_trigger_9_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import21.AcxDarkTheme) && ((9 <= nodeIndex) && (nodeIndex <= 10)))) {
      return _AcxDarkTheme_9_5;
    }
    if ((((identical(token, import18.MaterialButtonComponent) || identical(token, import23.ButtonDirective)) || identical(token, import24.HasDisabled)) && ((9 <= nodeIndex) && (nodeIndex <= 10)))) {
      return _MaterialButtonComponent_9_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_video = locals['\$implicit'];
    changed = false;
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    if ((!import11.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_9_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_10_5.icon = 'menu';
      changed = true;
    }
    if (changed) {
      _compView_10.markAsCheckOnce();
    }
    final currVal_0 = import11.interpolate0(local_video.key);
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import11.interpolate0(local_video.content);
    if (import11.checkBinding(_expr_1, currVal_1)) {
      _text_6.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_9.detectHostChanges(firstCheck);
    _compView_9.detectChanges();
    _compView_10.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_9.destroy();
    _compView_10.destroy();
  }

  void _handle_trigger_9_0($event) {
    final local_video = locals['\$implicit'];
    ctx.delete(local_video);
  }
}

AppView<import1.VideosComponent> viewFactory_VideosComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVideosComponent1(parentView, parentIndex);
}

final List<dynamic> styles$VideosComponentHost = const [];

class _ViewVideosComponentHost0 extends AppView<import1.VideosComponent> {
  ViewVideosComponent0 _compView_0;
  import1.VideosComponent _VideosComponent_0_5;
  _ViewVideosComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.VideosComponent> build() {
    _compView_0 = ViewVideosComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _VideosComponent_0_5 = (import12.isDevMode
        ? import15.debugInjectorWrap(import1.VideosComponent, () {
            return import1.VideosComponent(this.injectorGet(import16.StoreService, viewData.parentIndex));
          })
        : import1.VideosComponent(this.injectorGet(import16.StoreService, viewData.parentIndex)));
    _compView_0.create(_VideosComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _VideosComponent_0_5);
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

AppView<import1.VideosComponent> viewFactory_VideosComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVideosComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(VideosComponent, VideosComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
