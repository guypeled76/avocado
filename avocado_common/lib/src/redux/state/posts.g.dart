// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'posts.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$PostsState extends PostsState {
  @override
  final BuiltMap<String, PostInfo> map;
  BuiltList<PostInfo> __ordered;

  factory _$PostsState([void updates(PostsStateBuilder b)]) =>
      (new PostsStateBuilder()..update(updates)).build();

  _$PostsState._({this.map}) : super._() {
    if (map == null) {
      throw new BuiltValueNullFieldError('PostsState', 'map');
    }
  }

  @override
  BuiltList<PostInfo> get ordered => __ordered ??= super.ordered;

  @override
  PostsState rebuild(void updates(PostsStateBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  PostsStateBuilder toBuilder() => new PostsStateBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is PostsState && map == other.map;
  }

  @override
  int get hashCode {
    return $jf($jc(0, map.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('PostsState')..add('map', map))
        .toString();
  }
}

class PostsStateBuilder implements Builder<PostsState, PostsStateBuilder> {
  _$PostsState _$v;

  MapBuilder<String, PostInfo> _map;
  MapBuilder<String, PostInfo> get map =>
      _$this._map ??= new MapBuilder<String, PostInfo>();
  set map(MapBuilder<String, PostInfo> map) => _$this._map = map;

  PostsStateBuilder();

  PostsStateBuilder get _$this {
    if (_$v != null) {
      _map = _$v.map?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(PostsState other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$PostsState;
  }

  @override
  void update(void updates(PostsStateBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$PostsState build() {
    _$PostsState _$result;
    try {
      _$result = _$v ?? new _$PostsState._(map: map.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'map';
        map.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'PostsState', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
