import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';
import 'index.dart';

part 'app.g.dart';

abstract class AppActions extends ReduxActions {
  ActionDispatcher<Null> clear;

  ClinicActions clinic;
  ClientActions client;


  AppActions._();
  factory AppActions() => new _$AppActions();
}