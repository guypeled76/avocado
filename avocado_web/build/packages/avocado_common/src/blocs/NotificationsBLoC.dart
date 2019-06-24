import 'package:avocado_common/models.dart';
import 'package:avocado_common/src/models/mocks.dart';

class NotificationsBLoC {


  NotificationsBLoC();

  Stream<List<NotificationInfo>> get notifications {
    return loadNotifications();
  }
}
