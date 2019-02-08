import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:avocado_common/common.dart';

part 'waterfalls.g.dart';

abstract class WaterfallsState implements Built<WaterfallsState, WaterfallsStateBuilder> {


  BuiltMap<String, WaterfallState> get map;


  WaterfallsState._();
  factory WaterfallsState([updates(WaterfallsStateBuilder b)]) =>
      new _$WaterfallsState((WaterfallsStateBuilder b) => b);


  @memoized
  BuiltList<WaterfallState> get ordered =>
      new BuiltList<WaterfallState>(map.values);
}


abstract class WaterfallState implements Built<WaterfallState, WaterfallStateBuilder> {

  @nullable
  WaterfallInfo get info;

  BuiltMap<String, WaterfallItemInfo> get items;


  @memoized
  BuiltList<WaterfallItemInfo> get ordered =>
      new BuiltList<WaterfallItemInfo>(items.values);

  WaterfallState._();
  factory WaterfallState([updates(WaterfallStateBuilder b)]) =>
      new _$WaterfallState((WaterfallStateBuilder b) => b);

}
