import 'package:avocado_common/common.dart';
import 'package:built_redux/built_redux.dart';
import 'package:built_redux_rx/built_redux_rx.dart';
import 'package:rxdart/rxdart.dart';

Iterable<Epic<AppState, AppStateBuilder, AppActions>> createClinicPostsEpicBuilder(
    ServiceContainer container) {


  Observable _handlePostsPageLoaded(Observable<Action<EventPayload>> stream,
      MiddlewareApi<AppState, AppStateBuilder, AppActions> mwApi) {
    return stream.map((action) {
      if(mwApi.state.posts.map.length == 0) {
        RepositoryService repository = container.getService<
            RepositoryService>();
        repository.collection("posts").get().then((list) {
          mwApi.actions.posts.setMany(EntitiesPayload(
              list.map((json) => PostInfo.fromJson(json)).toList()));
          ;
        }).catchError((error) {

        });
      }
    });
  }


  return (new EpicBuilder<AppState, AppStateBuilder, AppActions>()
    ..add(PostEventsNames.load, _handlePostsPageLoaded))
      .build();
}

