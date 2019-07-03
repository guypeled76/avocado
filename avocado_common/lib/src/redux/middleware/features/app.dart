import 'package:avocado_common/common.dart';
import 'package:built_redux_saga/built_redux_saga.dart';

Iterable<Runnable> appSaga(ServiceContainer container) sync* {
  yield register<AuthService>(container.getService<AuthService>());
  yield register<StoreService>(container.getService<StoreService>());
  yield register<RepositoryService>(container.getService<RepositoryService>());
}
