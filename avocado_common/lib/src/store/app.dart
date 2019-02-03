import 'package:built_value/built_value.dart';
import 'package:built_redux/built_redux.dart';

import 'posts.dart';

part 'app.g.dart';


/// [AppActions]
abstract class AppActions extends ReduxActions {
  ActionDispatcher<Null> clear;

  PostActions posts;

  // factory to create on instance of the generated implementation of AppActions
  AppActions._();
  factory AppActions() => new _$AppActions();
}

abstract class App implements Built<App, AppBuilder> {

  /// [posts]
  Posts get posts;

  // Built value boilerplate
  App._();
  factory App([updates(AppBuilder b)]) => new _$App((AppBuilder b) => b);

}

////////////////////
/// Main Reducer
///////////////////
Reducer<App, AppBuilder, dynamic> createReducer() =>
    (new ReducerBuilder<App, AppBuilder>()
      ..add<Null>(AppActionsNames.clear, _clear)
      ..combineNested(createPostsReducer()))
      .build();

////////////////////
/// Reducers
///////////////////
_clear(App state, Action<Null> action, AppBuilder builder) => builder
  ..posts = new Posts().toBuilder();