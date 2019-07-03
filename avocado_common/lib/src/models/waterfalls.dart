import 'package:json_annotation/json_annotation.dart';
import 'package:avocado_common/common.dart';

part 'waterfalls.g.dart';


@JsonSerializable(nullable: false)
class WaterfallInfo extends EntityInfo {

  WaterfallInfo({String key, List<String> hashtags}) : super(
      key:key,
      type: EntityType.waterfall,
      hashtags:hashtags
  );
}

@JsonSerializable(nullable: false)
class WaterfallItemInfo extends EntityInfo {

  WaterfallItemInfo({String key, List<String> hashtags}) : super(
      key:key,
      type: EntityType.waterfallItem,
      hashtags:hashtags
  );
}