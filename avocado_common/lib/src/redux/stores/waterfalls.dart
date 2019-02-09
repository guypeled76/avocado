import 'package:avocado_common/common.dart';

class WaterfallsStore {
  final AppStore _store;
  WaterfallsStore(this._store);

  Stream<WaterfallsState> get state {
    return this._store.state.map((state) => state.waterfalls).distinct();
  }

  Stream<List<WaterfallInfo>> get orderedWaterfalls {
    return this.state.map((state) => List.from(state.ordered));
  }

  WaterfallActions get actions {
    return this._store.actions.waterfalls;
  }

  WaterfallEvents get events {
    return this._store.actions.waterfalls.events;
  }
}