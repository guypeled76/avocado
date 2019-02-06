import 'package:avocado_common/common.dart';
import 'package:built_redux/built_redux.dart';
import 'package:built_redux_rx/built_redux_rx.dart';
import 'package:rxdart/rxdart.dart';


Iterable<Epic<AppState, AppStateBuilder, ReduxActions>> createEpicBuilder(ServiceContainer container) {





  return (new EpicBuilder<AppState, AppStateBuilder, ReduxActions>()
    ..add(AppEventsNames.close, _httpRequestEpic))
      .build();
}

Observable _httpRequestEpic(Observable<Action<dynamic>> stream,
    MiddlewareApi<AppState, AppStateBuilder, ReduxActions> mwApi) =>
    stream.ofType(TypeToken<EntityPayload<PostInfo>>());