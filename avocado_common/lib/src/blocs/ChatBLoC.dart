import 'package:avocado_common/models.dart';
import 'package:avocado_common/mocks.dart';

class ChatBLoC {

  final String chatId;

  ChatBLoC({this.chatId});

  Stream<List<MessageInfo>> get messages {
    return loadChat(this.chatId);
  }
}
