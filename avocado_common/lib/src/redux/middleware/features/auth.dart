import 'package:avocado_common/common.dart';
import 'package:built_redux_saga/built_redux_saga.dart';

Iterable<Runnable> authSaga(ServiceProvider provider) sync* {
  yield* _handledInitialize(provider);
  yield all([
    _signInWithFacebook(provider),
    _signInWithGoogle(provider),
    _signOut(provider)
  ]);
}

Iterable<Runnable> _handledInitialize(ServiceProvider provider) sync* {
  try {
    yield take(AppActionsNames.initialize);

    AuthService authService = provider.get<AuthService>();

    AuthStore authStore = provider.get<StoreService>().authStore;

    authService.profile.distinct().listen((profile) {
      authStore.actions.set(EntityPayload(profile));
    });
  } catch (e) {
    yield put(AppActionsNames.error, ErrorPayload("Failed to initialize authentication.", e));
  }
}

Iterable<Runnable> _signOut(ServiceProvider provider) sync* {
  while(true) {
    try {
      yield take(AuthActionsNames.signOut);

      AuthService authService = provider.get<AuthService>();

      authService.signOut();
    } catch(e) {
      yield put(AppActionsNames.error, ErrorPayload("Failed to signout.", e));
    }
  }
}


Iterable<Runnable> _signInWithFacebook(ServiceProvider provider) sync* {
  while(true) {
    try {
      yield take(AuthActionsNames.signInWithFacebook);

      AuthService authService = provider.get<AuthService>();

      authService.signInWithFacebook();
    }
    catch (e) {
      yield put(AppActionsNames.error, ErrorPayload("Failed to sign in with facebook.", e));
    }
  }
}


Iterable<Runnable> _signInWithGoogle(ServiceProvider provider) sync* {
  while(true) {
    try {
      yield take(AuthActionsNames.signInWithGoogle);

      AuthService authService = provider.get<AuthService>();

      authService.signInWithGoogle();
    }
    catch (e) {
      yield put(AppActionsNames.error, ErrorPayload("Failed to sign in with facebook.", e));
    }
  }
}
