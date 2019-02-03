// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'videos.dart';

// **************************************************************************
// BuiltReduxGenerator
// **************************************************************************

// ignore_for_file: avoid_classes_with_only_static_members
// ignore_for_file: annotate_overrides

class _$VideoActions extends VideoActions {
  factory _$VideoActions() => new _$VideoActions._();
  _$VideoActions._() : super._();

  final ActionDispatcher<VideoInfo> update =
      new ActionDispatcher<VideoInfo>('VideoActions-update');

  @override
  void setDispatcher(Dispatcher dispatcher) {
    update.setDispatcher(dispatcher);
  }
}

class VideoActionsNames {
  static final ActionName<VideoInfo> update =
      new ActionName<VideoInfo>('VideoActions-update');
}

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Videos extends Videos {
  @override
  final BuiltMap<String, VideoInfo> map;
  BuiltList<VideoInfo> __ordered;

  factory _$Videos([void updates(VideosBuilder b)]) =>
      (new VideosBuilder()..update(updates)).build();

  _$Videos._({this.map}) : super._() {
    if (map == null) {
      throw new BuiltValueNullFieldError('Videos', 'map');
    }
  }

  @override
  BuiltList<VideoInfo> get ordered => __ordered ??= super.ordered;

  @override
  Videos rebuild(void updates(VideosBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  VideosBuilder toBuilder() => new VideosBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Videos && map == other.map;
  }

  @override
  int get hashCode {
    return $jf($jc(0, map.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('Videos')..add('map', map)).toString();
  }
}

class VideosBuilder implements Builder<Videos, VideosBuilder> {
  _$Videos _$v;

  MapBuilder<String, VideoInfo> _map;
  MapBuilder<String, VideoInfo> get map =>
      _$this._map ??= new MapBuilder<String, VideoInfo>();
  set map(MapBuilder<String, VideoInfo> map) => _$this._map = map;

  VideosBuilder();

  VideosBuilder get _$this {
    if (_$v != null) {
      _map = _$v.map?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Videos other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$Videos;
  }

  @override
  void update(void updates(VideosBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$Videos build() {
    _$Videos _$result;
    try {
      _$result = _$v ?? new _$Videos._(map: map.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'map';
        map.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'Videos', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
