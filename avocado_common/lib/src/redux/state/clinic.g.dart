// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'clinic.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$ClinicState extends ClinicState {
  @override
  final ClinicInfo info;
  @override
  final BuiltMap<String, ClientState> clients;

  factory _$ClinicState([void updates(ClinicStateBuilder b)]) =>
      (new ClinicStateBuilder()..update(updates)).build();

  _$ClinicState._({this.info, this.clients}) : super._() {
    if (clients == null) {
      throw new BuiltValueNullFieldError('ClinicState', 'clients');
    }
  }

  @override
  ClinicState rebuild(void updates(ClinicStateBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  ClinicStateBuilder toBuilder() => new ClinicStateBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ClinicState &&
        info == other.info &&
        clients == other.clients;
  }

  @override
  int get hashCode {
    return $jf($jc($jc(0, info.hashCode), clients.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('ClinicState')
          ..add('info', info)
          ..add('clients', clients))
        .toString();
  }
}

class ClinicStateBuilder implements Builder<ClinicState, ClinicStateBuilder> {
  _$ClinicState _$v;

  ClinicInfo _info;
  ClinicInfo get info => _$this._info;
  set info(ClinicInfo info) => _$this._info = info;

  MapBuilder<String, ClientState> _clients;
  MapBuilder<String, ClientState> get clients =>
      _$this._clients ??= new MapBuilder<String, ClientState>();
  set clients(MapBuilder<String, ClientState> clients) =>
      _$this._clients = clients;

  ClinicStateBuilder();

  ClinicStateBuilder get _$this {
    if (_$v != null) {
      _info = _$v.info;
      _clients = _$v.clients?.toBuilder();
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
      _$result =
          _$v ?? new _$ClinicState._(info: info, clients: clients.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'clients';
        clients.build();
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
