import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

import 'app.dart';

part 'clinic.g.dart';



abstract class ClinicState implements Built<ClinicState, ClinicStateBuilder> {

  ClinicState._();
  factory ClinicState([updates(ClinicStateBuilder b)]) =>
      new _$ClinicState((ClinicStateBuilder b) => b);

  BuiltMap<String, ClinicInfo> get map;


  @memoized
  BuiltList<ClinicInfo> get ordered => new BuiltList<ClinicInfo>(map.values);
}


