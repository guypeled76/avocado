// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'images.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$ImagesState extends ImagesState {
  @override
  final BuiltMap<String, ImageInfo> map;
  BuiltList<ImageInfo> __ordered;

  factory _$ImagesState([void updates(ImagesStateBuilder b)]) =>
      (new ImagesStateBuilder()..update(updates)).build();

  _$ImagesState._({this.map}) : super._() {
    if (map == null) {
      throw new BuiltValueNullFieldError('ImagesState', 'map');
    }
  }

  @override
  BuiltList<ImageInfo> get ordered => __ordered ??= super.ordered;

  @override
  ImagesState rebuild(void updates(ImagesStateBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  ImagesStateBuilder toBuilder() => new ImagesStateBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ImagesState && map == other.map;
  }

  @override
  int get hashCode {
    return $jf($jc(0, map.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('ImagesState')..add('map', map))
        .toString();
  }
}

class ImagesStateBuilder implements Builder<ImagesState, ImagesStateBuilder> {
  _$ImagesState _$v;

  MapBuilder<String, ImageInfo> _map;
  MapBuilder<String, ImageInfo> get map =>
      _$this._map ??= new MapBuilder<String, ImageInfo>();
  set map(MapBuilder<String, ImageInfo> map) => _$this._map = map;

  ImagesStateBuilder();

  ImagesStateBuilder get _$this {
    if (_$v != null) {
      _map = _$v.map?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(ImagesState other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$ImagesState;
  }

  @override
  void update(void updates(ImagesStateBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$ImagesState build() {
    _$ImagesState _$result;
    try {
      _$result = _$v ?? new _$ImagesState._(map: map.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'map';
        map.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'ImagesState', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
