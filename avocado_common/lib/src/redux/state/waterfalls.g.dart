// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'waterfalls.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$WaterfallsState extends WaterfallsState {
  @override
  final BuiltMap<String, WaterfallState> map;
  BuiltList<WaterfallState> __ordered;

  factory _$WaterfallsState([void updates(WaterfallsStateBuilder b)]) =>
      (new WaterfallsStateBuilder()..update(updates)).build();

  _$WaterfallsState._({this.map}) : super._() {
    if (map == null) {
      throw new BuiltValueNullFieldError('WaterfallsState', 'map');
    }
  }

  @override
  BuiltList<WaterfallState> get ordered => __ordered ??= super.ordered;

  @override
  WaterfallsState rebuild(void updates(WaterfallsStateBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  WaterfallsStateBuilder toBuilder() =>
      new WaterfallsStateBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is WaterfallsState && map == other.map;
  }

  @override
  int get hashCode {
    return $jf($jc(0, map.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('WaterfallsState')..add('map', map))
        .toString();
  }
}

class WaterfallsStateBuilder
    implements Builder<WaterfallsState, WaterfallsStateBuilder> {
  _$WaterfallsState _$v;

  MapBuilder<String, WaterfallState> _map;
  MapBuilder<String, WaterfallState> get map =>
      _$this._map ??= new MapBuilder<String, WaterfallState>();
  set map(MapBuilder<String, WaterfallState> map) => _$this._map = map;

  WaterfallsStateBuilder();

  WaterfallsStateBuilder get _$this {
    if (_$v != null) {
      _map = _$v.map?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(WaterfallsState other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$WaterfallsState;
  }

  @override
  void update(void updates(WaterfallsStateBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$WaterfallsState build() {
    _$WaterfallsState _$result;
    try {
      _$result = _$v ?? new _$WaterfallsState._(map: map.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'map';
        map.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'WaterfallsState', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

class _$WaterfallState extends WaterfallState {
  @override
  final WaterfallInfo info;
  @override
  final BuiltMap<String, WaterfallItemInfo> items;
  BuiltList<WaterfallItemInfo> __ordered;

  factory _$WaterfallState([void updates(WaterfallStateBuilder b)]) =>
      (new WaterfallStateBuilder()..update(updates)).build();

  _$WaterfallState._({this.info, this.items}) : super._() {
    if (items == null) {
      throw new BuiltValueNullFieldError('WaterfallState', 'items');
    }
  }

  @override
  BuiltList<WaterfallItemInfo> get ordered => __ordered ??= super.ordered;

  @override
  WaterfallState rebuild(void updates(WaterfallStateBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  WaterfallStateBuilder toBuilder() =>
      new WaterfallStateBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is WaterfallState &&
        info == other.info &&
        items == other.items;
  }

  @override
  int get hashCode {
    return $jf($jc($jc(0, info.hashCode), items.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('WaterfallState')
          ..add('info', info)
          ..add('items', items))
        .toString();
  }
}

class WaterfallStateBuilder
    implements Builder<WaterfallState, WaterfallStateBuilder> {
  _$WaterfallState _$v;

  WaterfallInfo _info;
  WaterfallInfo get info => _$this._info;
  set info(WaterfallInfo info) => _$this._info = info;

  MapBuilder<String, WaterfallItemInfo> _items;
  MapBuilder<String, WaterfallItemInfo> get items =>
      _$this._items ??= new MapBuilder<String, WaterfallItemInfo>();
  set items(MapBuilder<String, WaterfallItemInfo> items) =>
      _$this._items = items;

  WaterfallStateBuilder();

  WaterfallStateBuilder get _$this {
    if (_$v != null) {
      _info = _$v.info;
      _items = _$v.items?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(WaterfallState other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$WaterfallState;
  }

  @override
  void update(void updates(WaterfallStateBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$WaterfallState build() {
    _$WaterfallState _$result;
    try {
      _$result =
          _$v ?? new _$WaterfallState._(info: info, items: items.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'items';
        items.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'WaterfallState', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
