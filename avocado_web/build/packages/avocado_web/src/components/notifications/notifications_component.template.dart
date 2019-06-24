// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'notifications_component.dart';
export 'notifications_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'notifications_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';

final List<dynamic> styles$NotificationsComponent = const [];

class ViewNotificationsComponent0 extends AppView<import1.NotificationsComponent> {
  var _expr_0;
  import2.Text _text_2;
  static RenderComponentType _renderType;
  ViewNotificationsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('notifications-component');
    _renderType ??= import6.appViewUtils.createRenderType((import7.isDevMode ? 'asset:avocado_web/lib/src/components/notifications/notifications_component.dart' : null), ViewEncapsulation.None, styles$NotificationsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.NotificationsComponent> build() {
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

AppView<import1.NotificationsComponent> viewFactory_NotificationsComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewNotificationsComponent0(parentView, parentIndex);
}

const ComponentFactory<import1.NotificationsComponent> _NotificationsComponentNgFactory = const ComponentFactory('notifications-component', viewFactory_NotificationsComponentHost0);
ComponentFactory<import1.NotificationsComponent> get NotificationsComponentNgFactory {
  return _NotificationsComponentNgFactory;
}

final List<dynamic> styles$NotificationsComponentHost = const [];

class _ViewNotificationsComponentHost0 extends AppView<import1.NotificationsComponent> {
  ViewNotificationsComponent0 _compView_0;
  import1.NotificationsComponent _NotificationsComponent_0_5;
  _ViewNotificationsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.NotificationsComponent> build() {
    _compView_0 = ViewNotificationsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _NotificationsComponent_0_5 = import1.NotificationsComponent();
    _compView_0.create(_NotificationsComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _NotificationsComponent_0_5);
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

AppView<import1.NotificationsComponent> viewFactory_NotificationsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewNotificationsComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(NotificationsComponent, NotificationsComponentNgFactory);
  _ref0.initReflector();
}
