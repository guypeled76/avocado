import 'package:avocado_common/common.dart';
import 'package:built_redux_saga/built_redux_saga.dart';

Iterable<Runnable> postsSaga() sync* {
  yield all([
    _handlePostsLoad()
  ]);
}


Iterable<Runnable> _handlePostsLoad() sync* {
  yield take(PostEventsNames.load);

  RepositoryService repositoryService;
  yield select<RepositoryService>((result) {
    repositoryService = result;
  });

  List<Map> maps;
  yield call(repositoryService.collection("posts").get(), (result) {
    maps = result;
  }, (error) {
    print(error);
  });

  List<PostInfo> posts = maps.map((json) => PostInfo.fromJson(json)).toList();

  yield put(PostActionsNames.setMany, EntitiesPayload(posts));
}



