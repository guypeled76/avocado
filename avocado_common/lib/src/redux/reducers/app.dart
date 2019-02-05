import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

Reducer<AppState, AppStateBuilder, dynamic> createAppReducer(ServiceContainer container) {
  _clear(AppState state, Action<Null> action, AppStateBuilder builder) {
    return builder
      ..clinic = new ClinicState().toBuilder();
  }

  return (new ReducerBuilder<AppState, AppStateBuilder>()
        ..add<Null>(AppActionsNames.clear, _clear)
        ..combineNested(createClinicsReducer(container)))
      .build();
}
