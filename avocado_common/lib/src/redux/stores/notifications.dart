
import 'package:avocado_common/common.dart';

class NotificationsStore {
  final AppStore _store;
  NotificationsStore(this._store);

  Stream<NotificationsState> get state {
    return this._store.state.map((state) => state.notifications).distinct();
  }

  Stream<List<NotificationInfo>> get orderedNotifications {
    return this.state.map((state) => List.from(state.ordered));
  }

  PostActions get actions {
    return this._store.actions.posts;
  }

  PostEvents get events {
    return this._store.actions.posts.events;
  }
}