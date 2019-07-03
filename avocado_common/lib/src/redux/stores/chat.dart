import 'package:avocado_common/common.dart';

class ChatStore {

  final ChatsStore _store;

  final String _chatId;

  ChatStore(this._store, this._chatId) {

  }

  Stream<ChatState> get state {
    return this._store.state.map((state) => state.map[this._chatId]);
  }

  Stream<BuiltList<MessageInfo>> get messages {
    return this.state.map((chatStore) => chatStore.messages);
  }
}