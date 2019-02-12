import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

NestedReducerBuilder<AppState, AppStateBuilder, AuthState, AuthStateBuilder> createAuthReducer(
    ServiceContainer container) {

  setProfile(AuthState state, Action<EntityPayload<ProfileInfo>> action, AuthStateBuilder builder) {
    builder.profile = action.payload.entity;
  }



  return new NestedReducerBuilder<AppState, AppStateBuilder, AuthState, AuthStateBuilder>(
        (state) => state.auth,
        (builder) => builder.auth
  )
    ..add<EntityPayload<ProfileInfo>>(AuthActionsNames.set, setProfile);
}
