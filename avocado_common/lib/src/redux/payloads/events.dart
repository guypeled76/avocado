
import 'package:avocado_common/common.dart';

import 'payload.dart';

class EventPayload extends Payload {
  static final EventPayload empty = EventPayload();
}

class SignedInPayload extends EventPayload {
  SignedInStatus status;
  SignedInPayload(this.status);
}

class ErrorPayload extends EventPayload {
  Object error;
  String message;
  ErrorPayload(this.message, this.error);
}