import 'package:avocado_common/common.dart';
import 'package:built_redux/built_redux.dart';
import 'package:built_redux_rx/built_redux_rx.dart';
import 'package:rxdart/rxdart.dart';

Iterable<Epic<AppState, AppStateBuilder, ReduxActions>> createClinicEpicBuilder(
    ServiceContainer container) {
  return (new EpicBuilder<AppState, AppStateBuilder, ReduxActions>()
        ..add(ClinicEventsNames.postsPageLoaded,
            (stream, _) => _handlePostsPageLoaded(stream)))
      .build();
}

Observable _handlePostsPageLoaded(Observable<Action<EventPayload>> stream) {
  return stream.expand((action) {
    return [];
  });
}
