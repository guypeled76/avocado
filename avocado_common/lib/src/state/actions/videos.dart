import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'videos.g.dart';

abstract class VideoActions extends ReduxActions {
  ActionDispatcher<VideoInfo> update;



  VideoActions._();
  factory VideoActions() => new _$VideoActions();
}