import 'data.dart';
import 'package:built_value/serializer.dart';
import 'package:built_value/standard_json_plugin.dart';

part 'serializers.g.dart';

@SerializersFor(const [
  EntityData,
  ContentData,
  PostData,
  UserData
])
final Serializers serializers = (
    _$serializers.toBuilder()..addPlugin(new StandardJsonPlugin())
).build();