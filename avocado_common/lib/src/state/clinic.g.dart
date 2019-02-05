// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'clinic.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$ClinicState extends ClinicState {
  @override
  final BuiltMap<String, ClinicInfo> map;
  BuiltList<ClinicInfo> __ordered;

  factory _$ClinicState([void updates(ClinicStateBuilder b)]) =>
      (new ClinicStateBuilder()..update(updates)).build();

  _$ClinicState._({this.map}) : super._() {
    if (map == null) {
      throw new BuiltValueNullFieldError('ClinicState', 'map');
    }
  }

  @override
  BuiltList<ClinicInfo> get ordered => __ordered ??= super.ordered;

  @override
  ClinicState rebuild(void updates(ClinicStateBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  ClinicStateBuilder toBuilder() => new ClinicStateBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ClinicState && map == other.map;
  }

  @override
  int get hashCode {
    return $jf($jc(0, map.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('ClinicState')..add('map', map))
        .toString();
  }
}

class ClinicStateBuilder implements Builder<ClinicState, ClinicStateBuilder> {
  _$ClinicState _$v;

  MapBuilder<String, ClinicInfo> _map;
  MapBuilder<String, ClinicInfo> get map =>
      _$this._map ??= new MapBuilder<String, ClinicInfo>();
  set map(MapBuilder<String, ClinicInfo> map) => _$this._map = map;

  ClinicStateBuilder();

  ClinicStateBuilder get _$this {
    if (_$v != null) {
      _map = _$v.map?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(ClinicState other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$ClinicState;
  }

  @override
  void update(void updates(ClinicStateBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$ClinicState build() {
    _$ClinicState _$result;
    try {
      _$result = _$v ?? new _$ClinicState._(map: map.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'map';
        map.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'ClinicState', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
