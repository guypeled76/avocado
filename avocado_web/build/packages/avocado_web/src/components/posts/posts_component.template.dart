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

final List<dynamic> styles$PostsComponent = const [];

class ViewPostsComponent0 extends AppView<import1.PostsComponent> {
  ViewContainer _appEl_1;
  import3.NgFor _NgFor_1_9;
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
    var doc = import8.document;
    final _el_0 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_0, 'style', 'display: flex;flex-wrap: wrap;');
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_PostsComponent1);
    _NgFor_1_9 = import3.NgFor(_appEl_1, _TemplateRef_1_8);
    _pipe_async_0 = import4.AsyncPipe(ref);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _pipe_async_0.transform(_ctx.bloc.posts);
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _NgFor_1_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import9.AppViewUtils.throwOnChanges) {
      _NgFor_1_9.ngDoCheck();
    }
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
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
  var _expr_0;
  _ViewPostsComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewPostsComponent0._renderType;
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
    _PostsComponent_0_5 = import1.PostsComponent();
    _compView_0.create(_PostsComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _PostsComponent_0_5);
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
