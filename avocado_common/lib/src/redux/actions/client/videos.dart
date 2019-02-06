import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'videos.g.dart';


abstract class ClientVideoActions extends ReduxActions {
  ActionDispatcher<VideoInfo> update;



  ClientVideoActions._();
  factory ClientVideoActions() => new _$ClientVideoActions();
}