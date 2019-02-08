import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'clinic.g.dart';


abstract class ClinicEvents extends ReduxActions {

  ActionDispatcher<EventPayload> postsPageLoaded;
  ActionDispatcher<EventPayload> videosPageLoaded;


  ClinicEvents._();
  factory ClinicEvents() => new _$ClinicEvents();
}

abstract class ClinicActions extends ReduxActions {

  ClinicActions._();
  factory ClinicActions() => new _$ClinicActions();



  ActionDispatcher<EntityPayload<ClinicInfo>> set;


}