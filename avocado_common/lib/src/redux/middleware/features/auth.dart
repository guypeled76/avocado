import 'package:avocado_common/common.dart';
import 'package:built_redux/built_redux.dart';
import 'package:built_redux_rx/built_redux_rx.dart';
import 'package:rxdart/rxdart.dart';

Iterable<Epic<AppState, AppStateBuilder, AppActions>> createAuthEpicBuilder(
    ServiceContainer container) {

  AuthService authService = container.getService<AuthService>();

  Observable signOut(Observable<Action<CommandPayload>> stream,
      MiddlewareApi<AppState, AppStateBuilder, AppActions> mwApi) {
      return stream.map((action)  {
        authService.signOut().then((value) {
          mwApi.actions.auth.set(EntityPayload(null));
        }).catchError((error) {

        });
      });
  }

  Observable signInWithFacebook(Observable<Action<CommandPayload>> stream,
      MiddlewareApi<AppState, AppStateBuilder, AppActions> mwApi) {
    return stream.map((action) {
      authService.signInWithFacebook().then((value) {
        mwApi.actions.auth.set(EntityPayload(value));
      }).catchError((error) {

      });
    });
  }

  Observable signInWithGoogle(Observable<Action<CommandPayload>> stream,
      MiddlewareApi<AppState, AppStateBuilder, AppActions> mwApi) {
    return stream.map((action) {
      authService.signInWithGoogle().then((value) {
        mwApi.actions.auth.set(EntityPayload(value));
      }).catchError((error) {

      });
    });
  }


  return (new EpicBuilder<AppState, AppStateBuilder, AppActions>()
    ..add<CommandPayload>(AuthActionsNames.signOut, signOut)
    ..add<CommandPayload>(AuthActionsNames.signInWithFacebook, signInWithFacebook)
    ..add<CommandPayload>(AuthActionsNames.signInWithGoogle, signInWithGoogle)
  ).build();
}

