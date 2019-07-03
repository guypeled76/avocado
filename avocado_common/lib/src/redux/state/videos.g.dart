// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'videos.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$VideosState extends VideosState {
  @override
  final BuiltMap<String, VideoInfo> map;
  BuiltList<VideoInfo> __ordered;

  factory _$VideosState([void updates(VideosStateBuilder b)]) =>
      (new VideosStateBuilder()..update(updates)).build();

  _$VideosState._({this.map}) : super._() {
    if (map == null) {
      throw new BuiltValueNullFieldError('VideosState', 'map');
    }
  }

  @override
  BuiltList<VideoInfo> get ordered => __ordered ??= super.ordered;

  @override
  VideosState rebuild(void updates(VideosStateBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  VideosStateBuilder toBuilder() => new VideosStateBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is VideosState && map == other.map;
  }

  @override
  int get hashCode {
    return $jf($jc(0, map.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('VideosState')..add('map', map))
        .toString();
  }
}

class VideosStateBuilder implements Builder<VideosState, VideosStateBuilder> {
  _$VideosState _$v;

  MapBuilder<String, VideoInfo> _map;
  MapBuilder<String, VideoInfo> get map =>
      _$this._map ??= new MapBuilder<String, VideoInfo>();
  set map(MapBuilder<String, VideoInfo> map) => _$this._map = map;

  VideosStateBuilder();

  VideosStateBuilder get _$this {
    if (_$v != null) {
      _map = _$v.map?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(VideosState other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$VideosState;
  }

  @override
  void update(void updates(VideosStateBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$VideosState build() {
    _$VideosState _$result;
    try {
      _$result = _$v ?? new _$VideosState._(map: map.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'map';
        map.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'VideosState', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
