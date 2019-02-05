import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'clinic.g.dart';


abstract class ClinicActions extends ReduxActions {

  ClinicActions._();
  factory ClinicActions() => new _$ClinicActions();

  ActionDispatcher<ClinicInfo> update;

}