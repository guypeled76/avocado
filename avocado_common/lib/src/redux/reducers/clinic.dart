import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

NestedReducerBuilder<AppState, AppStateBuilder, ClinicState, ClinicStateBuilder> createClinicsReducer(
    ServiceContainer container) {

  setClinic(ClinicState state, Action<ClinicInfo> action, ClinicStateBuilder builder) {
    builder..info = action.payload;
  }

  return new NestedReducerBuilder<AppState, AppStateBuilder, ClinicState, ClinicStateBuilder>(
        (state) => state.clinic,
        (builder) => builder.clinic,
  )..add<ClinicInfo>(ClinicActionsNames.set, setClinic)
  ..combineReducerBuilder(
    ReducerBuilder()
        ..combineNested(createClinicPostsReducer(container))
        ..combineNested(createClinicVideosReducer(container))
  );
}
