import 'package:avocado_common/common.dart';
import 'package:built_redux_saga/built_redux_saga.dart';

Iterable<Runnable> authSaga() sync* {
  yield* _handledInitialize();
  yield all([
    _signInWithFacebook(),
    _signInWithGoogle(),
    _signOut()
  ]);
}

Iterable<Runnable> _handledInitialize() sync* {
  yield take(AppActionsNames.initialize);

  AuthService authService;
  yield select<AuthService>((result) {
    authService = result;
  });

  AppActions appActions;
  yield select<AppActions>((result) {
    appActions = result;
  });

  authService.profile.distinct().listen((profile) {
    appActions.auth.set(EntityPayload(profile));
  });
}

Iterable<Runnable> _signOut() sync* {
  while(true) {
    yield take(AuthActionsNames.signOut);

    AuthService authService;
    yield select<AuthService>((result) {
      authService = result;
    });

    authService.signOut();
  }
}


Iterable<Runnable> _signInWithFacebook() sync* {
  while(true) {
    yield take(AuthActionsNames.signInWithFacebook);

    AuthService authService;
    yield select<AuthService>((result) {
      authService = result;
    });

    authService.signInWithFacebook();
  }
}


Iterable<Runnable> _signInWithGoogle() sync* {
  while(true) {
    yield take(AuthActionsNames.signInWithGoogle);

    AuthService authService;
    yield select<AuthService>((result) {
      authService = result;
    });

    authService.signInWithGoogle();
  }
}
