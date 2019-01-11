import 'data.dart';
import 'package:built_value/serializer.dart';
import 'package:built_value/standard_json_plugin.dart';
import 'package:built_collection/built_collection.dart';

part 'serializers.g.dart';

@SerializersFor(const [
  EntityData,
  ContentData
])
final Serializers serializers = (
    _$serializers.toBuilder()..addPlugin(new StandardJsonPlugin())
).build();