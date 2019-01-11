// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'data.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

Serializer<EntityData> _$entityDataSerializer = new _$EntityDataSerializer();
Serializer<ContentData> _$contentDataSerializer = new _$ContentDataSerializer();

class _$EntityDataSerializer implements StructuredSerializer<EntityData> {
  @override
  final Iterable<Type> types = const [EntityData, _$EntityData];
  @override
  final String wireName = 'EntityData';

  @override
  Iterable serialize(Serializers serializers, EntityData object,
      {FullType specifiedType = FullType.unspecified}) {
    final result = <Object>[
      'key',
      serializers.serialize(object.key, specifiedType: const FullType(String)),
    ];

    return result;
  }

  @override
  EntityData deserialize(Serializers serializers, Iterable serialized,
      {FullType specifiedType = FullType.unspecified}) {
    final result = new EntityDataBuilder();

    final iterator = serialized.iterator;
    while (iterator.moveNext()) {
      final key = iterator.current as String;
      iterator.moveNext();
      final dynamic value = iterator.current;
      switch (key) {
        case 'key':
          result.key = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
      }
    }

    return result.build();
  }
}

class _$ContentDataSerializer implements StructuredSerializer<ContentData> {
  @override
  final Iterable<Type> types = const [ContentData, _$ContentData];
  @override
  final String wireName = 'ContentData';

  @override
  Iterable serialize(Serializers serializers, ContentData object,
      {FullType specifiedType = FullType.unspecified}) {
    final result = <Object>[
      'key',
      serializers.serialize(object.key, specifiedType: const FullType(String)),
    ];

    return result;
  }

  @override
  ContentData deserialize(Serializers serializers, Iterable serialized,
      {FullType specifiedType = FullType.unspecified}) {
    final result = new ContentDataBuilder();

    final iterator = serialized.iterator;
    while (iterator.moveNext()) {
      final key = iterator.current as String;
      iterator.moveNext();
      final dynamic value = iterator.current;
      switch (key) {
        case 'key':
          result.key = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
      }
    }

    return result.build();
  }
}

class _$EntityData extends EntityData {
  @override
  final String key;

  factory _$EntityData([void updates(EntityDataBuilder b)]) =>
      (new EntityDataBuilder()..update(updates)).build();

  _$EntityData._({this.key}) : super._() {
    if (key == null) {
      throw new BuiltValueNullFieldError('EntityData', 'key');
    }
  }

  @override
  EntityData rebuild(void updates(EntityDataBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  EntityDataBuilder toBuilder() => new EntityDataBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is EntityData && key == other.key;
  }

  @override
  int get hashCode {
    return $jf($jc(0, key.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('EntityData')..add('key', key))
        .toString();
  }
}

class EntityDataBuilder implements Builder<EntityData, EntityDataBuilder> {
  _$EntityData _$v;

  String _key;
  String get key => _$this._key;
  set key(String key) => _$this._key = key;

  EntityDataBuilder();

  EntityDataBuilder get _$this {
    if (_$v != null) {
      _key = _$v.key;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(EntityData other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$EntityData;
  }

  @override
  void update(void updates(EntityDataBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$EntityData build() {
    final _$result = _$v ?? new _$EntityData._(key: key);
    replace(_$result);
    return _$result;
  }
}

class _$ContentData extends ContentData {
  @override
  final String key;

  factory _$ContentData([void updates(ContentDataBuilder b)]) =>
      (new ContentDataBuilder()..update(updates)).build();

  _$ContentData._({this.key}) : super._() {
    if (key == null) {
      throw new BuiltValueNullFieldError('ContentData', 'key');
    }
  }

  @override
  ContentData rebuild(void updates(ContentDataBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  ContentDataBuilder toBuilder() => new ContentDataBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ContentData && key == other.key;
  }

  @override
  int get hashCode {
    return $jf($jc(0, key.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('ContentData')..add('key', key))
        .toString();
  }
}

class ContentDataBuilder implements Builder<ContentData, ContentDataBuilder> {
  _$ContentData _$v;

  String _key;
  String get key => _$this._key;
  set key(String key) => _$this._key = key;

  ContentDataBuilder();

  ContentDataBuilder get _$this {
    if (_$v != null) {
      _key = _$v.key;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(ContentData other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$ContentData;
  }

  @override
  void update(void updates(ContentDataBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$ContentData build() {
    final _$result = _$v ?? new _$ContentData._(key: key);
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
