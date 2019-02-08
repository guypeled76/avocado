// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'foods.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

IngredientInfo _$IngredientInfoFromJson(Map<String, dynamic> json) {
  return IngredientInfo(
      key: EntityInfo.undefinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      name: EntityInfo.undefinedToNull(json['name']),
      servings: (json['servings'] as List)
              ?.map((e) => e == null
                  ? null
                  : ServingInfo.fromJson(e as Map<String, dynamic>))
              ?.toList() ??
          []);
}

Map<String, dynamic> _$IngredientInfoToJson(IngredientInfo instance) {
  final val = <String, dynamic>{
    'key': instance.key,
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('hashtags', instance.hashtags);
  val['name'] = instance.name;
  writeNotNull('servings', instance.servings);
  return val;
}

ServingInfo _$ServingInfoFromJson(Map<String, dynamic> json) {
  return ServingInfo(
      size: (json['size'] as num).toDouble(),
      type: _$enumDecode(_$ServingTypeEnumMap, json['type']));
}

Map<String, dynamic> _$ServingInfoToJson(ServingInfo instance) =>
    <String, dynamic>{
      'size': instance.size,
      'type': _$ServingTypeEnumMap[instance.type]
    };

T _$enumDecode<T>(Map<T, dynamic> enumValues, dynamic source) {
  if (source == null) {
    throw ArgumentError('A value must be provided. Supported values: '
        '${enumValues.values.join(', ')}');
  }
  return enumValues.entries
      .singleWhere((e) => e.value == source,
          orElse: () => throw ArgumentError(
              '`$source` is not one of the supported values: '
              '${enumValues.values.join(', ')}'))
      .key;
}

const _$ServingTypeEnumMap = <ServingType, dynamic>{
  ServingType.cup: 'cup',
  ServingType.spoon: 'spoon',
  ServingType.tablespoon: 'tablespoon',
  ServingType.small: 'small',
  ServingType.medium: 'medium',
  ServingType.large: 'large'
};

CourseInfo _$CourseInfoFromJson(Map<String, dynamic> json) {
  return CourseInfo(
      key: EntityInfo.undefinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      name: EntityInfo.undefinedToNull(json['name']),
      ingredients: (json['ingredients'] as List)
              ?.map((e) => e == null
                  ? null
                  : IngredientInfo.fromJson(e as Map<String, dynamic>))
              ?.toList() ??
          []);
}

Map<String, dynamic> _$CourseInfoToJson(CourseInfo instance) {
  final val = <String, dynamic>{
    'key': instance.key,
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('hashtags', instance.hashtags);
  val['name'] = instance.name;
  writeNotNull('ingredients', instance.ingredients);
  return val;
}

MealInfo _$MealInfoFromJson(Map<String, dynamic> json) {
  return MealInfo(
      key: EntityInfo.undefinedToNull(json['key']),
      hashtags:
          (json['hashtags'] as List)?.map((e) => e as String)?.toList() ?? [],
      name: EntityInfo.undefinedToNull(json['name']),
      courses: (json['courses'] as List)
              ?.map((e) => e == null
                  ? null
                  : CourseInfo.fromJson(e as Map<String, dynamic>))
              ?.toList() ??
          []);
}

Map<String, dynamic> _$MealInfoToJson(MealInfo instance) {
  final val = <String, dynamic>{
    'key': instance.key,
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('hashtags', instance.hashtags);
  val['name'] = instance.name;
  writeNotNull('courses', instance.courses);
  return val;
}
