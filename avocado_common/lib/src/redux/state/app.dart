import 'package:avocado_common/common.dart';
import 'package:built_value/built_value.dart';


import 'clinic.dart';
import 'client.dart';

part 'app.g.dart';


abstract class AppState implements Built<AppState, AppStateBuilder> {


  ClinicState get clinic;

  ClientState get client;


  AppState._();
  factory AppState([updates(AppStateBuilder b)]) => new _$AppState((AppStateBuilder b) => b);

}


