import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'waterfalls.g.dart';


abstract class WaterfallActions extends ReduxActions {
  ActionDispatcher<WaterfallInfo> update;

  WaterfallEvents events;

  WaterfallActions._();
  factory WaterfallActions() => new _$WaterfallActions();
}


abstract class WaterfallEvents extends ReduxActions {

  ActionDispatcher<EventPayload> load;
  ActionDispatcher<EventPayload> unload;


  WaterfallEvents._();
  factory WaterfallEvents() => new _$WaterfallEvents();
}