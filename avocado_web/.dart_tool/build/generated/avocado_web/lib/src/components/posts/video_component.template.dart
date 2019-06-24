// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'video_component.dart';
export 'video_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'video_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';

final List<dynamic> styles$VideoComponent = const [];

class ViewVideoComponent0 extends AppView<import1.VideoComponent> {
  var _expr_0;
  import2.Element _el_1;
  static RenderComponentType _renderType;
  ViewVideoComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('video-component');
    _renderType ??= import6.appViewUtils.createRenderType((import7.isDevMode ? 'asset:avocado_web/lib/src/components/posts/video_component.dart' : null), ViewEncapsulation.None, styles$VideoComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.VideoComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    final _el_0 = createAndAppend(doc, 'video', parentRenderNode);
    createAttr(_el_0, 'controls', '');
    createAttr(_el_0, 'style', 'width: 100%;');
    _el_1 = createAndAppend(doc, 'source', _el_0);
    createAttr(_el_1, 'type', 'video/mp4');
    final _text_2 = import2.Text('Your browser does not support the video tag.');
    _el_0.append(_text_2);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = (_ctx.video ?? '');
    if (import6.checkBinding(_expr_0, currVal_0)) {
      setProp(_el_1, 'src', import6.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.VideoComponent> viewFactory_VideoComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewVideoComponent0(parentView, parentIndex);
}

const ComponentFactory<import1.VideoComponent> _VideoComponentNgFactory = const ComponentFactory('video-component', viewFactory_VideoComponentHost0);
ComponentFactory<import1.VideoComponent> get VideoComponentNgFactory {
  return _VideoComponentNgFactory;
}

final List<dynamic> styles$VideoComponentHost = const [];

class _ViewVideoComponentHost0 extends AppView<import1.VideoComponent> {
  ViewVideoComponent0 _compView_0;
  import1.VideoComponent _VideoComponent_0_5;
  _ViewVideoComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.VideoComponent> build() {
    _compView_0 = ViewVideoComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _VideoComponent_0_5 = import1.VideoComponent();
    _compView_0.create(_VideoComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _VideoComponent_0_5);
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

AppView<import1.VideoComponent> viewFactory_VideoComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVideoComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(VideoComponent, VideoComponentNgFactory);
  _ref0.initReflector();
}
