import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

Reducer<AppState, AppStateBuilder, dynamic> createAppReducer(
    ServiceProvider provider) {
  return (new ReducerBuilder<AppState, AppStateBuilder>()
        ..combineNested(createClientReducer())
        ..combineNested(createClinicPostsReducer())
        ..combineNested(createClinicVideosReducer())
        ..combineNested(createAuthReducer())
  ).build();
}
