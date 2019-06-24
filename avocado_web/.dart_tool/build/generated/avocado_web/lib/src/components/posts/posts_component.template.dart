// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'posts_component.dart';
export 'posts_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:avocado_web/src/components/posts/post_component.template.dart' as _ref1;
import 'package:angular/src/core/linker/app_view.dart';
import 'posts_component.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import3;
import 'package:angular/src/common/pipes/async_pipe.dart' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'post_component.template.dart' as import13;
import 'post_component.dart' as import14;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import15;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import16;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import17;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import18;
import 'package:angular_components/utils/browser/window/module.dart' as import19;
import 'package:angular/src/di/errors.dart' as import20;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import21;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import22;
import 'package:angular_components/utils/disposer/disposer.dart' as import23;
import 'package:angular/src/core/zone/ng_zone.dart' as import24;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import25;
import 'package:angular/src/core/linker/component_loader.dart' as import26;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import27;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import28;
import 'package:angular/src/core/di/opaque_token.dart' as import29;
import 'package:angular_components/laminate/overlay/module.dart' as import30;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import31;
import 'package:avocado_common/src/services/store.dart' as import32;

final List<dynamic> styles$PostsComponent = const [];

class ViewPostsComponent0 extends AppView<import1.PostsComponent> {
  ViewContainer _appEl_2;
  import3.NgFor _NgFor_2_9;
  var _expr_0;
  import4.AsyncPipe _pipe_async_0;
  static RenderComponentType _renderType;
  ViewPostsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import8.document.createElement('posts-component');
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:avocado_web/lib/src/components/posts/posts_component.dart' : null), ViewEncapsulation.None, styles$PostsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.PostsComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import8.Text('Posts');
    parentRenderNode.append(_text_0);
    var doc = import8.document;
    final _el_1 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_1, 'style', 'display: flex;flex-wrap: wrap;');
    final _anchor_2 = createViewContainerAnchor();
    _el_1.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_PostsComponent1);
    _NgFor_2_9 = import3.NgFor(_appEl_2, _TemplateRef_2_8);
    _pipe_async_0 = import4.AsyncPipe(ref);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _pipe_async_0.transform(_ctx.bloc.posts);
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _NgFor_2_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import9.AppViewUtils.throwOnChanges) {
      _NgFor_2_9.ngDoCheck();
    }
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _pipe_async_0.ngOnDestroy();
  }
}

AppView<import1.PostsComponent> viewFactory_PostsComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewPostsComponent0(parentView, parentIndex);
}

const ComponentFactory<import1.PostsComponent> _PostsComponentNgFactory = const ComponentFactory('posts-component', viewFactory_PostsComponentHost0);
ComponentFactory<import1.PostsComponent> get PostsComponentNgFactory {
  return _PostsComponentNgFactory;
}

class _ViewPostsComponent1 extends AppView<import1.PostsComponent> {
  import13.ViewPostComponent0 _compView_0;
  import14.PostComponent _PostComponent_0_5;
  dynamic __Document_0_6;
  dynamic __Window_0_7;
  dynamic __DomService_0_8;
  dynamic __AcxImperativeViewUtils_0_9;
  import15.DomRuler __DomRuler_0_10;
  dynamic __ManagedZone_0_11;
  dynamic __overlayContainerName_0_12;
  dynamic __overlayContainerParent_0_13;
  dynamic __overlayContainer_0_14;
  bool __overlaySyncDom_0_15;
  bool __overlayRepositionLoop_0_16;
  import16.OverlayStyleConfig __OverlayStyleConfig_0_17;
  import17.ZIndexer __ZIndexer_0_18;
  import18.OverlayDomRenderService __OverlayDomRenderService_0_19;
  dynamic __OverlayService_0_20;
  var _expr_0;
  _ViewPostsComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewPostsComponent0._renderType;
  }
  dynamic get _Document_0_6 {
    if ((__Document_0_6 == null)) {
      (__Document_0_6 = import19.getDocument());
    }
    return __Document_0_6;
  }

  dynamic get _Window_0_7 {
    if ((__Window_0_7 == null)) {
      (__Window_0_7 = import19.getWindow());
    }
    return __Window_0_7;
  }

  dynamic get _DomService_0_8 {
    if ((__DomService_0_8 == null)) {
      (__DomService_0_8 = (import10.isDevMode
          ? import20.debugInjectorWrap(import21.DomService, () {
              return import22.createDomService(parentView.parentView.injectorGet(import21.DomService, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import23.Disposer, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import24.NgZone, parentView.viewData.parentIndex), _Window_0_7);
            })
          : import22.createDomService(parentView.parentView.injectorGet(import21.DomService, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import23.Disposer, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import24.NgZone, parentView.viewData.parentIndex), _Window_0_7)));
    }
    return __DomService_0_8;
  }

  dynamic get _AcxImperativeViewUtils_0_9 {
    if ((__AcxImperativeViewUtils_0_9 == null)) {
      (__AcxImperativeViewUtils_0_9 = (import10.isDevMode
          ? import20.debugInjectorWrap(import25.AcxImperativeViewUtils, () {
              return import25.AcxImperativeViewUtils(parentView.parentView.injectorGet(import26.ComponentLoader, parentView.viewData.parentIndex), _DomService_0_8);
            })
          : import25.AcxImperativeViewUtils(parentView.parentView.injectorGet(import26.ComponentLoader, parentView.viewData.parentIndex), _DomService_0_8)));
    }
    return __AcxImperativeViewUtils_0_9;
  }

  import15.DomRuler get _DomRuler_0_10 {
    if ((__DomRuler_0_10 == null)) {
      (__DomRuler_0_10 = import15.DomRuler(_Document_0_6, _DomService_0_8));
    }
    return __DomRuler_0_10;
  }

  dynamic get _ManagedZone_0_11 {
    if ((__ManagedZone_0_11 == null)) {
      (__ManagedZone_0_11 = (import10.isDevMode
          ? import20.debugInjectorWrap(import27.ManagedZone, () {
              return import28.Angular2ManagedZone(parentView.parentView.injectorGet(import24.NgZone, parentView.viewData.parentIndex));
            })
          : import28.Angular2ManagedZone(parentView.parentView.injectorGet(import24.NgZone, parentView.viewData.parentIndex))));
    }
    return __ManagedZone_0_11;
  }

  dynamic get _overlayContainerName_0_12 {
    if ((__overlayContainerName_0_12 == null)) {
      (__overlayContainerName_0_12 = (import10.isDevMode
          ? import20.debugInjectorWrap(const import29.OpaqueToken<dynamic>('overlayContainerName'), () {
              return import30.getDefaultContainerName(parentView.parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayContainerName'), parentView.viewData.parentIndex, null));
            })
          : import30.getDefaultContainerName(parentView.parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayContainerName'), parentView.viewData.parentIndex, null))));
    }
    return __overlayContainerName_0_12;
  }

  dynamic get _overlayContainerParent_0_13 {
    if ((__overlayContainerParent_0_13 == null)) {
      (__overlayContainerParent_0_13 = (import10.isDevMode
          ? import20.debugInjectorWrap(const import29.OpaqueToken<dynamic>('overlayContainerParent'), () {
              return import30.getOverlayContainerParent(_Document_0_6, parentView.parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayContainerParent'), parentView.viewData.parentIndex, null));
            })
          : import30.getOverlayContainerParent(_Document_0_6, parentView.parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayContainerParent'), parentView.viewData.parentIndex, null))));
    }
    return __overlayContainerParent_0_13;
  }

  dynamic get _overlayContainer_0_14 {
    if ((__overlayContainer_0_14 == null)) {
      (__overlayContainer_0_14 = (import10.isDevMode
          ? import20.debugInjectorWrap(const import29.OpaqueToken<dynamic>('overlayContainer'), () {
              return import30.getDefaultContainer(_overlayContainerName_0_12, _overlayContainerParent_0_13, parentView.parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayContainer'), parentView.viewData.parentIndex, null));
            })
          : import30.getDefaultContainer(_overlayContainerName_0_12, _overlayContainerParent_0_13, parentView.parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayContainer'), parentView.viewData.parentIndex, null))));
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

  import16.OverlayStyleConfig get _OverlayStyleConfig_0_17 {
    if ((__OverlayStyleConfig_0_17 == null)) {
      (__OverlayStyleConfig_0_17 = import16.OverlayStyleConfig(_Document_0_6));
    }
    return __OverlayStyleConfig_0_17;
  }

  import17.ZIndexer get _ZIndexer_0_18 {
    if ((__ZIndexer_0_18 == null)) {
      (__ZIndexer_0_18 = import17.ZIndexer());
    }
    return __ZIndexer_0_18;
  }

  import18.OverlayDomRenderService get _OverlayDomRenderService_0_19 {
    if ((__OverlayDomRenderService_0_19 == null)) {
      (__OverlayDomRenderService_0_19 = import18.OverlayDomRenderService(_OverlayStyleConfig_0_17, _overlayContainer_0_14, _overlayContainerName_0_12, _DomRuler_0_10, _DomService_0_8, _AcxImperativeViewUtils_0_9, _overlaySyncDom_0_15, _overlayRepositionLoop_0_16, _ZIndexer_0_18));
    }
    return __OverlayDomRenderService_0_19;
  }

  dynamic get _OverlayService_0_20 {
    if ((__OverlayService_0_20 == null)) {
      (__OverlayService_0_20 = (import10.isDevMode
          ? import20.debugInjectorWrap(import31.OverlayService, () {
              return import31.OverlayService(parentView.parentView.injectorGet(import24.NgZone, parentView.viewData.parentIndex), _overlaySyncDom_0_15, _OverlayDomRenderService_0_19, parentView.parentView.injectorGet(import31.OverlayService, parentView.viewData.parentIndex, null));
            })
          : import31.OverlayService(parentView.parentView.injectorGet(import24.NgZone, parentView.viewData.parentIndex), _overlaySyncDom_0_15, _OverlayDomRenderService_0_19, parentView.parentView.injectorGet(import31.OverlayService, parentView.viewData.parentIndex, null))));
    }
    return __OverlayService_0_20;
  }

  @override
  ComponentRef<import1.PostsComponent> build() {
    _compView_0 = import13.ViewPostComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _PostComponent_0_5 = import14.PostComponent();
    _compView_0.create(_PostComponent_0_5, []);
    init0(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import8.Document) && (0 == nodeIndex))) {
      return _Document_0_6;
    }
    if ((identical(token, import8.Window) && (0 == nodeIndex))) {
      return _Window_0_7;
    }
    if ((identical(token, import21.DomService) && (0 == nodeIndex))) {
      return _DomService_0_8;
    }
    if ((identical(token, import25.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_9;
    }
    if ((identical(token, import15.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_10;
    }
    if ((identical(token, import27.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_11;
    }
    if ((identical(token, const import29.OpaqueToken<dynamic>('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_12;
    }
    if ((identical(token, const import29.OpaqueToken<dynamic>('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_13;
    }
    if ((identical(token, const import29.OpaqueToken<dynamic>('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_14;
    }
    if ((identical(token, const import29.OpaqueToken<dynamic>('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_15;
    }
    if ((identical(token, const import29.OpaqueToken<dynamic>('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_16;
    }
    if ((identical(token, import16.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_17;
    }
    if ((identical(token, import17.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_18;
    }
    if ((identical(token, import18.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_19;
    }
    if ((identical(token, import31.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_20;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final local_post = locals['\$implicit'];
    final currVal_0 = local_post;
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _PostComponent_0_5.post = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
  }
}

AppView<import1.PostsComponent> viewFactory_PostsComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewPostsComponent1(parentView, parentIndex);
}

final List<dynamic> styles$PostsComponentHost = const [];

class _ViewPostsComponentHost0 extends AppView<import1.PostsComponent> {
  ViewPostsComponent0 _compView_0;
  import1.PostsComponent _PostsComponent_0_5;
  _ViewPostsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.PostsComponent> build() {
    _compView_0 = ViewPostsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _PostsComponent_0_5 = (import10.isDevMode
        ? import20.debugInjectorWrap(import1.PostsComponent, () {
            return import1.PostsComponent(this.injectorGet(import32.StoreService, viewData.parentIndex));
          })
        : import1.PostsComponent(this.injectorGet(import32.StoreService, viewData.parentIndex)));
    _compView_0.create(_PostsComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _PostsComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import9.AppViewUtils.throwOnChanges && firstCheck)) {
      _PostsComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _PostsComponent_0_5.ngOnDestroy();
  }
}

AppView<import1.PostsComponent> viewFactory_PostsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewPostsComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(PostsComponent, PostsComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
