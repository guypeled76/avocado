import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

NestedReducerBuilder<AppState, AppStateBuilder, ClientsState, ClientsStateBuilder> createClientReducer(
    ServiceContainer container) {

  setClient(ClientsState state, Action<ProfileInfo> action, ClientsStateBuilder builder) {

  }

  return new NestedReducerBuilder<AppState, AppStateBuilder, ClientsState, ClientsStateBuilder>(
        (state) => state.clients,
        (builder) => builder.clients,
  )..add<ProfileInfo>(ClientsActionsNames.set, setClient)
    ..combineReducerBuilder(
        ReducerBuilder()
    );
}
