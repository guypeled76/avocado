// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'clients_component.dart';
export 'clients_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:avocado_web/src/components/feed/feed_component.template.dart' as _ref1;
import 'package:angular/src/core/linker/app_view.dart';
import 'clients_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';

final List<dynamic> styles$ClientsComponent = const [];

class ViewClientsComponent0 extends AppView<import1.ClientsComponent> {
  var _expr_0;
  import2.Text _text_2;
  static RenderComponentType _renderType;
  ViewClientsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('clients-component');
    _renderType ??= import6.appViewUtils.createRenderType((import7.isDevMode ? 'asset:avocado_web/lib/src/components/clients/clients_component.dart' : null), ViewEncapsulation.None, styles$ClientsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ClientsComponent> build() {
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

AppView<import1.ClientsComponent> viewFactory_ClientsComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewClientsComponent0(parentView, parentIndex);
}

const ComponentFactory<import1.ClientsComponent> _ClientsComponentNgFactory = const ComponentFactory('clients-component', viewFactory_ClientsComponentHost0);
ComponentFactory<import1.ClientsComponent> get ClientsComponentNgFactory {
  return _ClientsComponentNgFactory;
}

final List<dynamic> styles$ClientsComponentHost = const [];

class _ViewClientsComponentHost0 extends AppView<import1.ClientsComponent> {
  ViewClientsComponent0 _compView_0;
  import1.ClientsComponent _ClientsComponent_0_5;
  _ViewClientsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.ClientsComponent> build() {
    _compView_0 = ViewClientsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ClientsComponent_0_5 = import1.ClientsComponent();
    _compView_0.create(_ClientsComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _ClientsComponent_0_5);
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

AppView<import1.ClientsComponent> viewFactory_ClientsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewClientsComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ClientsComponent, ClientsComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
