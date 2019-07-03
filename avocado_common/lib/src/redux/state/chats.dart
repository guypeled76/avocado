import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:avocado_common/common.dart';

part 'chats.g.dart';

abstract class ChatsState implements Built<ChatsState, ChatsStateBuilder> {


  BuiltMap<String, ChatState> get map;


  ChatsState._();
  factory ChatsState([updates(ChatsStateBuilder b)]) =>
      new _$ChatsState((ChatsStateBuilder b) => b);


  @memoized
  BuiltList<ChatState> get ordered =>
      new BuiltList<ChatState>(map.values);
}


abstract class ChatState implements Built<ChatState, ChatStateBuilder> {

  @nullable
  ChatInfo get info;

  BuiltList<MessageInfo> get messages;

  ChatState._();
  factory ChatState([updates(ChatStateBuilder b)]) =>
      new _$ChatState((ChatStateBuilder b) => b);

}
