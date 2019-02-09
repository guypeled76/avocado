import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:avocado_common/common.dart';

part 'clients.g.dart';



abstract class ClientsState implements Built<ClientsState, ClientsStateBuilder> {

  ClientsState._();
  factory ClientsState([updates(ClientsStateBuilder b)]) =>
      new _$ClientsState((ClientsStateBuilder b) => b);


  BuiltMap<String, ProfileInfo> get profiles;

  BuiltMap<String, ChatInfo> get chats;

  BuiltMap<String, PostInfo> get posts;


  @memoized
  BuiltList<ProfileInfo> get orderedProfiles  {
    return new BuiltList<ProfileInfo>(
        List.from(profiles.values)
    );
  }
}
