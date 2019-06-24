// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'food_component.dart';
export 'food_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'food_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';

final List<dynamic> styles$FoodComponent = const [];

class ViewFoodComponent0 extends AppView<import1.FoodComponent> {
  var _expr_0;
  import2.Text _text_2;
  static RenderComponentType _renderType;
  ViewFoodComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('food-component');
    _renderType ??= import6.appViewUtils.createRenderType((import7.isDevMode ? 'asset:avocado_web/lib/src/components/food/food_component.dart' : null), ViewEncapsulation.None, styles$FoodComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.FoodComponent> build() {
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

AppView<import1.FoodComponent> viewFactory_FoodComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewFoodComponent0(parentView, parentIndex);
}

const ComponentFactory<import1.FoodComponent> _FoodComponentNgFactory = const ComponentFactory('food-component', viewFactory_FoodComponentHost0);
ComponentFactory<import1.FoodComponent> get FoodComponentNgFactory {
  return _FoodComponentNgFactory;
}

final List<dynamic> styles$FoodComponentHost = const [];

class _ViewFoodComponentHost0 extends AppView<import1.FoodComponent> {
  ViewFoodComponent0 _compView_0;
  import1.FoodComponent _FoodComponent_0_5;
  _ViewFoodComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.FoodComponent> build() {
    _compView_0 = ViewFoodComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _FoodComponent_0_5 = import1.FoodComponent();
    _compView_0.create(_FoodComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _FoodComponent_0_5);
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

AppView<import1.FoodComponent> viewFactory_FoodComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewFoodComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(FoodComponent, FoodComponentNgFactory);
  _ref0.initReflector();
}
