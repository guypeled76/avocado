import 'package:avocado_common/common.dart';
import 'package:avocado_common/src/models/mocks.dart';

class NotificationsBLoC extends BaseBLoC {


  NotificationsBLoC();

  Stream<List<NotificationInfo>> get notifications {
    return loadNotifications();
  }
}
