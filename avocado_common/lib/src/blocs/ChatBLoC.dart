import 'package:avocado_common/common.dart';

class ChatBLoC extends BaseBLoC {

  final ChatStore _store;

  ChatBLoC(this._store);

  Stream<BuiltList<MessageInfo>> get messages {
    return this._store.state.map((chatState) => chatState.messages);
  }
}
