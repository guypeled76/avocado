import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:avocado_common/common.dart';

part 'clinic.g.dart';



abstract class ClinicState implements Built<ClinicState, ClinicStateBuilder> {

  ClinicState._();
  factory ClinicState([updates(ClinicStateBuilder b)]) =>
      new _$ClinicState((ClinicStateBuilder b) => b);

  ClinicInfo get info;

  PostsState get posts;

  VideosState get videos;

}


