import 'package:avocado_common/common.dart';
import 'package:built_redux/built_redux.dart';
import 'package:rxdart/rxdart.dart';

Observable logEpic(Observable<Action<dynamic>> stream,
    MiddlewareApi<AppState, AppStateBuilder, AppActions> mwApi) =>
    stream
        .map((action) {
      print("[${action.name}]");

      return action;
});