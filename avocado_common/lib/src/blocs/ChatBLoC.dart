import 'package:avocado_common/common.dart';
import 'package:avocado_common/models.dart';
import 'package:avocado_common/src/models/mocks.dart';

class ChatBLoC extends BaseBLoC {

  final String chatId;

  ChatBLoC({this.chatId});

  Stream<List<MessageInfo>> get messages {
    return loadChat(this.chatId);
  }
}
