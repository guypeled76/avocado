import 'package:built_value/built_value.dart';
import 'package:avocado_common/common.dart';

part 'auth.g.dart';

abstract class AuthState implements Built<AuthState, AuthStateBuilder> {

  @nullable
  ProfileInfo get profile;


  AuthState._();
  factory AuthState([updates(AuthStateBuilder b)]) =>
      new _$AuthState((AuthStateBuilder b) => b);


}
