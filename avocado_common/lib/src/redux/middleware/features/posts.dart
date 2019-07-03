import 'package:avocado_common/common.dart';
import 'package:built_redux_saga/built_redux_saga.dart';
import 'package:avocado_common/src/redux/middleware/api/index.dart';

Iterable<Runnable> postsSaga() sync* {
  yield all([
    _handlePostsLoad()
  ]);
}


Iterable<Runnable> _handlePostsLoad() sync* {
  try {
    yield take(PostEventsNames.load);

    RepositoryService repositoryService;
    yield select<RepositoryService>((result) {
      repositoryService = result;
    });

    List<PostInfo> posts;
    yield call(loadPosts(repositoryService), (results) {
      posts = results;
    }, (error) {
      print(error);
    });

    yield put(PostActionsNames.setMany, EntitiesPayload(posts));
  } catch(e) {
    yield put(AppActionsNames.error, ErrorPayload("Failed to load posts.", e));
  }
}



