import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'videos.g.dart';


abstract class VideoActions extends ReduxActions {
  ActionDispatcher<VideoInfo> update;

  VideoEvents events;

  VideoActions._();
  factory VideoActions() => new _$VideoActions();
}


abstract class VideoEvents extends ReduxActions {

  ActionDispatcher<EventPayload> load;
  ActionDispatcher<EventPayload> unload;


  VideoEvents._();
  factory VideoEvents() => new _$VideoEvents();
}