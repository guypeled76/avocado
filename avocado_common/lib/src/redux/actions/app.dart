import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';
import 'index.dart';

part 'app.g.dart';

abstract class AppActions extends ReduxActions {
  ActionDispatcher<Null> clear;
  PostActions posts;
  VideoActions videos;


  AppActions._();
  factory AppActions() => new _$AppActions();
}