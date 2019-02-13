import 'package:avocado_common/common.dart';
import 'package:built_redux/built_redux.dart';
import 'package:built_redux_rx/built_redux_rx.dart';
import 'package:rxdart/rxdart.dart';

Iterable<Epic<AppState, AppStateBuilder, AppActions>> createAuthEpicBuilder(
    ServiceContainer container) {

  AuthService authService = container.getService<AuthService>();
  StoreService storeService = container.getService<StoreService>();




  Observable initialize(Observable<Action<CommandPayload>> stream,
      MiddlewareApi<AppState, AppStateBuilder, AppActions> mwApi) {
    authService.profile.distinct().listen((profile) {
      mwApi.actions.auth.set(EntityPayload(profile));
    });
    return stream;
  }

  Observable signOut(Observable<Action<CommandPayload>> stream,
      MiddlewareApi<AppState, AppStateBuilder, AppActions> mwApi) {
      return stream.map((action)  {
        authService.signOut().then((_) {
          mwApi.actions.auth.events.signedOut(EventPayload.empty);
        }).catchError((error) {

        });

        return action;
      });
  }

  Observable signInWithFacebook(Observable<Action<CommandPayload>> stream,
      MiddlewareApi<AppState, AppStateBuilder, AppActions> mwApi) {
    return stream.map((action) {
      authService.signInWithFacebook().then((_) {
        mwApi.actions.auth.events.signedIn(SignedInPayload(SignedInStatus.SignedInWithFacebook));
      }).catchError((error) {

      });

      return action;
    });
  }

  Observable signInWithGoogle(Observable<Action<CommandPayload>> stream,
      MiddlewareApi<AppState, AppStateBuilder, AppActions> mwApi) {
    return stream.map((action) {
      authService.signInWithGoogle().then((_) {
        mwApi.actions.auth.events.signedIn(SignedInPayload(SignedInStatus.SignedInWithGoogle));
      }).catchError((error) {

      });

      return action;
    });
  }




  return (new EpicBuilder<AppState, AppStateBuilder, AppActions>()
    ..add<CommandPayload>(AppActionsNames.initialize, initialize)
    ..add<CommandPayload>(AuthActionsNames.signOut, signOut)
    ..add<CommandPayload>(AuthActionsNames.signInWithFacebook, signInWithFacebook)
    ..add<CommandPayload>(AuthActionsNames.signInWithGoogle, signInWithGoogle)
  ).build();
}

