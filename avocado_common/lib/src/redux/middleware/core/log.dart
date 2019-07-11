import 'package:built_redux_saga/built_redux_saga.dart';

import '../../../../common.dart';

Iterable<Runnable> logSaga(ServiceProvider provider) sync* {
  while(true) {

    Result result = Result();
    yield takeEverything(result);
    print("[action: ${result.value}]");
  }
}