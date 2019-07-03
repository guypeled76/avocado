import 'package:built_redux_saga/built_redux_saga.dart';

Iterable<Runnable> logSaga() sync* {
    while(true) {
      yield takeEverything((result) {
        print("[action: ${result}]");
      });
    }
}
