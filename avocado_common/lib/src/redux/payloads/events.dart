
import 'package:avocado_common/common.dart';

import 'payload.dart';

class EventPayload extends Payload {
  static final EventPayload empty = EventPayload();
}

class SignedInPayload extends EventPayload {
  SignedInStatus status;
  SignedInPayload(this.status);
}