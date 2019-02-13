import 'package:avocado_common/common.dart';
import 'package:built_redux/built_redux.dart';
import 'package:built_redux_rx/built_redux_rx.dart';
import 'package:rxdart/rxdart.dart';

Iterable<Epic<AppState, AppStateBuilder, AppActions>> createAuthEpicBuilder(
    ServiceContainer container) {

  AuthService authService = container.getService<AuthService>();
  StoreService storeService = container.getService<StoreService>();

  authService.profile.forEach((profile) {
    storeService.authStore.events.profileChanged(EntityPayload(profile));
  });

  Observable signOut(Observable<Action<CommandPayload>> stream,
      MiddlewareApi<AppState, AppStateBuilder, AppActions> mwApi) {
      return stream.map((action)  {
        authService.signOut().then((_) {
          mwApi.actions.auth.events.signedOut(EventPayload.empty);
        }).catchError((error) {

        });
      });
  }

  Observable signInWithFacebook(Observable<Action<CommandPayload>> stream,
      MiddlewareApi<AppState, AppStateBuilder, AppActions> mwApi) {
    return stream.map((action) {
      authService.signInWithFacebook().then((_) {
        mwApi.actions.auth.events.signedIn(SignedInPayload(SignedInStatus.SignedInWithFacebook));
      }).catchError((error) {

      });
    });
  }

  Observable signInWithGoogle(Observable<Action<CommandPayload>> stream,
      MiddlewareApi<AppState, AppStateBuilder, AppActions> mwApi) {
    return stream.map((action) {
      authService.signInWithGoogle().then((_) {
        mwApi.actions.auth.events.signedIn(SignedInPayload(SignedInStatus.SignedInWithGoogle));
      }).catchError((error) {

      });
    });
  }


  Observable onProfileChanged(Observable<Action<EntityPayload<ProfileInfo>>> stream,
      MiddlewareApi<AppState, AppStateBuilder, AppActions> mwApi) {
    return stream.map((action) {
      mwApi.actions.auth.set(EntityPayload(action.payload.entity));
    });
  }

  return (new EpicBuilder<AppState, AppStateBuilder, AppActions>()
    ..add<CommandPayload>(AuthActionsNames.signOut, signOut)
    ..add<CommandPayload>(AuthActionsNames.signInWithFacebook, signInWithFacebook)
    ..add<CommandPayload>(AuthActionsNames.signInWithGoogle, signInWithGoogle)
    ..add<EntityPayload<ProfileInfo>>(AuthEventsNames.profileChanged, onProfileChanged)
  ).build();
}

