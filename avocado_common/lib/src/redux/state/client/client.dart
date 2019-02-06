import 'package:built_value/built_value.dart';
import 'package:avocado_common/common.dart';

part 'client.g.dart';



abstract class ClientState implements Built<ClientState, ClientStateBuilder> {

  ClientState._();
  factory ClientState([updates(ClientStateBuilder b)]) =>
      new _$ClientState((ClientStateBuilder b) => b);


  ProfileInfo get info;

  PostsState get posts;
}
