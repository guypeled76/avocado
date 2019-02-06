import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

Reducer<AppState, AppStateBuilder, dynamic> createAppReducer(ServiceContainer container) {



  return (new ReducerBuilder<AppState, AppStateBuilder>()
        ..combineNested(createClinicsReducer(container))
        ..combineNested(createClientReducer(container))
  ).build();
}
