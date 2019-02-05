import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'videos.g.dart';

abstract class ClinicVideoActions extends ReduxActions {
  ActionDispatcher<VideoInfo> update;



  ClinicVideoActions._();
  factory ClinicVideoActions() => new _$ClinicVideoActions();
}

abstract class ClientVideoActions extends ReduxActions {
  ActionDispatcher<VideoInfo> update;



  ClientVideoActions._();
  factory ClientVideoActions() => new _$ClientVideoActions();
}