
import 'package:avocado_common/common.dart';

class VideosStore {
  final AppStore _store;
  VideosStore(this._store);

  Stream<VideosState> get state {
    return this._store.state.map((state) => state.videos).distinct();
  }

  Stream<List<VideoInfo>> get orderedVideos {
    return this.state.map((state) => List.from(state.ordered));
  }

  VideoActions get actions {
    return this._store.actions.videos;
  }

  VideoEvents get events {
    return this._store.actions.videos.events;
  }
}