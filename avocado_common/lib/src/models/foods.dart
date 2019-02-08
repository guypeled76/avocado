import 'package:json_annotation/json_annotation.dart';
import 'package:avocado_common/common.dart';

part 'foods.g.dart';

@JsonSerializable(nullable: false)
class IngredientInfo extends EntityInfo {

  @JsonKey(fromJson: EntityInfo.undefinedToNull)
  final String name;

  @JsonKey(nullable: true, defaultValue: [])
  final List<ServingInfo> servings;

  IngredientInfo({String key, List<String> hashtags, this.name, this.servings}) : super(
      key:key,
      type:EntityType.ingredient,
      hashtags:hashtags
  );

  factory IngredientInfo.fromJson(Map<String, dynamic> json) => _$IngredientInfoFromJson(json);
  Map<String, dynamic> toJson() => _$IngredientInfoToJson(this);



}

@JsonSerializable(nullable: false)
class ServingInfo {


  final double size;

  final ServingType type;

  ServingInfo({this.size, this.type});

  factory ServingInfo.fromJson(Map<String, dynamic> json) => _$ServingInfoFromJson(json);
  Map<String, dynamic> toJson() => _$ServingInfoToJson(this);
}

enum ServingType {
  cup,
  spoon,
  tablespoon,
  small,
  medium,
  large,
}

@JsonSerializable(nullable: false)
class CourseInfo extends EntityInfo {

  @JsonKey(fromJson: EntityInfo.undefinedToNull)
  final String name;

  @JsonKey(nullable: true, defaultValue: [])
  final List<IngredientInfo> ingredients;

  CourseInfo({String key, List<String> hashtags, this.name, this.ingredients}) : super(
      key:key,
      type:EntityType.course,
      hashtags:hashtags
  );

  factory CourseInfo.fromJson(Map<String, dynamic> json) => _$CourseInfoFromJson(json);
  Map<String, dynamic> toJson() => _$CourseInfoToJson(this);

}

@JsonSerializable(nullable: false)
class MealInfo extends EntityInfo {

  @JsonKey(fromJson: EntityInfo.undefinedToNull)
  final String name;

  @JsonKey(nullable: true, defaultValue: [])
  final List<CourseInfo> courses;

  MealInfo({String key, List<String> hashtags, this.name, this.courses}) : super(
      key:key,
      type:EntityType.meal,
      hashtags:hashtags
  );

  factory MealInfo.fromJson(Map<String, dynamic> json) => _$MealInfoFromJson(json);
  Map<String, dynamic> toJson() => _$MealInfoToJson(this);

}