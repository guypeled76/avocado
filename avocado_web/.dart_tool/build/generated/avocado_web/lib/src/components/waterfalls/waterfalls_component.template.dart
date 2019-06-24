// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'waterfalls_component.dart';
export 'waterfalls_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'waterfalls_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';

final List<dynamic> styles$WaterfallsComponent = const [];

class ViewWaterfallsComponent0 extends AppView<import1.WaterfallsComponent> {
  var _expr_0;
  import2.Text _text_2;
  static RenderComponentType _renderType;
  ViewWaterfallsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('waterfalls-component');
    _renderType ??= import6.appViewUtils.createRenderType((import7.isDevMode ? 'asset:avocado_web/lib/src/components/waterfalls/waterfalls_component.dart' : null), ViewEncapsulation.None, styles$WaterfallsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.WaterfallsComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    final _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    final _text_1 = import2.Text('Hello ');
    _el_0.append(_text_1);
    _text_2 = import2.Text('');
    _el_0.append(_text_2);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = (_ctx.name ?? '');
    if (import6.checkBinding(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.WaterfallsComponent> viewFactory_WaterfallsComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewWaterfallsComponent0(parentView, parentIndex);
}

const ComponentFactory<import1.WaterfallsComponent> _WaterfallsComponentNgFactory = const ComponentFactory('waterfalls-component', viewFactory_WaterfallsComponentHost0);
ComponentFactory<import1.WaterfallsComponent> get WaterfallsComponentNgFactory {
  return _WaterfallsComponentNgFactory;
}

final List<dynamic> styles$WaterfallsComponentHost = const [];

class _ViewWaterfallsComponentHost0 extends AppView<import1.WaterfallsComponent> {
  ViewWaterfallsComponent0 _compView_0;
  import1.WaterfallsComponent _WaterfallsComponent_0_5;
  _ViewWaterfallsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.WaterfallsComponent> build() {
    _compView_0 = ViewWaterfallsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _WaterfallsComponent_0_5 = import1.WaterfallsComponent();
    _compView_0.create(_WaterfallsComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _WaterfallsComponent_0_5);
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

AppView<import1.WaterfallsComponent> viewFactory_WaterfallsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWaterfallsComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(WaterfallsComponent, WaterfallsComponentNgFactory);
  _ref0.initReflector();
}
