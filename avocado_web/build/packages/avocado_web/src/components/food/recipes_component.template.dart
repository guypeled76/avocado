// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'recipes_component.dart';
export 'recipes_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'recipes_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';

final List<dynamic> styles$RecipesComponent = const [];

class ViewRecipesComponent0 extends AppView<import1.RecipesComponent> {
  var _expr_0;
  import2.Text _text_2;
  static RenderComponentType _renderType;
  ViewRecipesComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('recipes-component');
    _renderType ??= import6.appViewUtils.createRenderType((import7.isDevMode ? 'asset:avocado_web/lib/src/components/food/recipes_component.dart' : null), ViewEncapsulation.None, styles$RecipesComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.RecipesComponent> build() {
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

AppView<import1.RecipesComponent> viewFactory_RecipesComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewRecipesComponent0(parentView, parentIndex);
}

const ComponentFactory<import1.RecipesComponent> _RecipesComponentNgFactory = const ComponentFactory('recipes-component', viewFactory_RecipesComponentHost0);
ComponentFactory<import1.RecipesComponent> get RecipesComponentNgFactory {
  return _RecipesComponentNgFactory;
}

final List<dynamic> styles$RecipesComponentHost = const [];

class _ViewRecipesComponentHost0 extends AppView<import1.RecipesComponent> {
  ViewRecipesComponent0 _compView_0;
  import1.RecipesComponent _RecipesComponent_0_5;
  _ViewRecipesComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.RecipesComponent> build() {
    _compView_0 = ViewRecipesComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _RecipesComponent_0_5 = import1.RecipesComponent();
    _compView_0.create(_RecipesComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _RecipesComponent_0_5);
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

AppView<import1.RecipesComponent> viewFactory_RecipesComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewRecipesComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(RecipesComponent, RecipesComponentNgFactory);
  _ref0.initReflector();
}
