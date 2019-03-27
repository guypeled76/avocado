import 'package:avocado_common/common.dart';
import 'package:built_redux/built_redux.dart';
import 'package:built_redux_saga/built_redux_saga.dart';
import 'package:avocado_common/src/redux/middleware/api/index.dart';

Iterable<Runnable> videosSaga() sync* {

  RepositoryService repository;
  yield select<RepositoryService>((result) {
    repository = result;
  });

  yield all([
    _handleVideosLoad(repository),
    _handleCreateVideo(repository)
  ]);
}

Iterable<Runnable> _handleCreateVideo(RepositoryService repository) sync* {
  while(true) {
    try {
      Action<EntityWithImageAndVideoPayload<VideoInfo>> createAction;
      yield take(VideoActionsNames.create, (result) {
        createAction = result;
      }, (error) {
        print(error);
      });

      yield fork(_createVideo(repository, createAction));

    } catch(e) {

      yield put(AppActionsNames.error, ErrorPayload("Failed to create videos.", e));
    }

  }
}

Iterable<Runnable> _createVideo(RepositoryService repository, Action<EntityWithImageAndVideoPayload<VideoInfo>> createAction) sync* {

  try {
    VideoInfo createdVideo;
    yield call(
        createVideo(repository, createAction.payload.entity), (result) {
      createdVideo = result;
    }, (error) {
      print(error);
    });

    if (createAction.payload.image != null) {

    }

    if (createAction.payload.video != null) {

    }

    yield put(VideoActionsNames.set, EntityPayload(createdVideo));
  } catch (e) {
    yield put(AppActionsNames.error, ErrorPayload("Failed to create video.", e));
  }
}

Iterable<Runnable> _handleVideosLoad(RepositoryService repository) sync* {
  try {
    yield take(VideoEventsNames.load);

    List<VideoInfo> videos;
    yield call(loadVideos(repository), (results) {
      videos = results;
    }, (error) {
      print(error);
    });

    yield put(VideoActionsNames.setMany, EntitiesPayload(videos));
  } catch(e) {
    yield put(AppActionsNames.error, ErrorPayload("Failed to load videos.", e));
  }
}

