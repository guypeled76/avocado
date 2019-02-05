import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:avocado_common/common.dart';

part 'client.g.dart';



abstract class ClientState implements Built<ClientState, ClientStateBuilder> {

  ClientState._();
  factory ClientState([updates(ClientStateBuilder b)]) =>
      new _$ClientState((ClientStateBuilder b) => b);


}
