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
  try {
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
  } catch (e) {
    yield put(AppActionsNames.error, ErrorPayload("Failed to initialize authentication.", e));
  }
}

Iterable<Runnable> _signOut() sync* {
  while(true) {
    try {
      yield take(AuthActionsNames.signOut);

      AuthService authService;
      yield select<AuthService>((result) {
        authService = result;
      });

      authService.signOut();
    } catch(e) {
      yield put(AppActionsNames.error, ErrorPayload("Failed to signout.", e));
    }
  }
}


Iterable<Runnable> _signInWithFacebook() sync* {
  while(true) {
    try {
      yield take(AuthActionsNames.signInWithFacebook);

      AuthService authService;
      yield select<AuthService>((result) {
        authService = result;
      });

      authService.signInWithFacebook();
    }
    catch (e) {
      yield put(AppActionsNames.error, ErrorPayload("Failed to sign in with facebook.", e));
    }
  }
}


Iterable<Runnable> _signInWithGoogle() sync* {
  while(true) {
    try {
      yield take(AuthActionsNames.signInWithGoogle);

      AuthService authService;
      yield select<AuthService>((result) {
        authService = result;
      });

      authService.signInWithGoogle();
    }
    catch (e) {
      yield put(AppActionsNames.error, ErrorPayload("Failed to sign in with facebook.", e));
    }
  }
}
