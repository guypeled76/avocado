// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'posts.dart';

// **************************************************************************
// BuiltReduxGenerator
// **************************************************************************

// ignore_for_file: avoid_classes_with_only_static_members
// ignore_for_file: annotate_overrides

class _$PostActions extends PostActions {
  factory _$PostActions() => new _$PostActions._();
  _$PostActions._() : super._();

  final ActionDispatcher<PostInfo> update =
      new ActionDispatcher<PostInfo>('PostActions-update');

  @override
  void setDispatcher(Dispatcher dispatcher) {
    update.setDispatcher(dispatcher);
  }
}

class PostActionsNames {
  static final ActionName<PostInfo> update =
      new ActionName<PostInfo>('PostActions-update');
}

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Posts extends Posts {
  @override
  final BuiltMap<String, PostInfo> map;
  BuiltList<PostInfo> __ordered;

  factory _$Posts([void updates(PostsBuilder b)]) =>
      (new PostsBuilder()..update(updates)).build();

  _$Posts._({this.map}) : super._() {
    if (map == null) {
      throw new BuiltValueNullFieldError('Posts', 'map');
    }
  }

  @override
  BuiltList<PostInfo> get ordered => __ordered ??= super.ordered;

  @override
  Posts rebuild(void updates(PostsBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  PostsBuilder toBuilder() => new PostsBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Posts && map == other.map;
  }

  @override
  int get hashCode {
    return $jf($jc(0, map.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('Posts')..add('map', map)).toString();
  }
}

class PostsBuilder implements Builder<Posts, PostsBuilder> {
  _$Posts _$v;

  MapBuilder<String, PostInfo> _map;
  MapBuilder<String, PostInfo> get map =>
      _$this._map ??= new MapBuilder<String, PostInfo>();
  set map(MapBuilder<String, PostInfo> map) => _$this._map = map;

  PostsBuilder();

  PostsBuilder get _$this {
    if (_$v != null) {
      _map = _$v.map?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Posts other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$Posts;
  }

  @override
  void update(void updates(PostsBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$Posts build() {
    _$Posts _$result;
    try {
      _$result = _$v ?? new _$Posts._(map: map.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'map';
        map.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'Posts', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
