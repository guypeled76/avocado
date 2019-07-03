import 'package:avocado_common/common.dart';

class ChatsStore {
  final AppStore _store;

  final Map<String, ChatStore> _chatStores = new Map();

  ChatsStore(this._store);

  Stream<ChatsState> get state {
    return this._store.state.map((state) => state.chats).distinct();
  }

  ChatStore operator [](String chatId) {
    return _chatStores.putIfAbsent(chatId, () => new ChatStore(this, chatId));
  }


}
