import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:avocado_common/common.dart';

part 'images.g.dart';

abstract class ImagesState implements Built<ImagesState, ImagesStateBuilder> {


  BuiltMap<String, ImageInfo> get map;


  ImagesState._();
  factory ImagesState([updates(ImagesStateBuilder b)]) =>
      new _$ImagesState((ImagesStateBuilder b) => b);


  @memoized
  BuiltList<ImageInfo> get ordered =>
      new BuiltList<ImageInfo>(map.values);
}
