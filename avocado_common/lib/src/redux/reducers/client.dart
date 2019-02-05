import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

NestedReducerBuilder<AppState, AppStateBuilder, ClientState, ClientStateBuilder> createClientReducer(
    ServiceContainer container) {

  setClient(ClientState state, Action<ProfileInfo> action, ClientStateBuilder builder) {
    builder..info = action.payload;
  }

  return new NestedReducerBuilder<AppState, AppStateBuilder, ClientState, ClientStateBuilder>(
        (state) => state.client,
        (builder) => builder.client,
  )..add<ProfileInfo>(ClientActionsNames.set, setClient)
    ..combineReducerBuilder(
        ReducerBuilder()
    );
}
