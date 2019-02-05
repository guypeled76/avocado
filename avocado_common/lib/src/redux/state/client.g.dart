// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'client.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$ClientState extends ClientState {
  factory _$ClientState([void updates(ClientStateBuilder b)]) =>
      (new ClientStateBuilder()..update(updates)).build();

  _$ClientState._() : super._();

  @override
  ClientState rebuild(void updates(ClientStateBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  ClientStateBuilder toBuilder() => new ClientStateBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ClientState;
  }

  @override
  int get hashCode {
    return 252756641;
  }

  @override
  String toString() {
    return newBuiltValueToStringHelper('ClientState').toString();
  }
}

class ClientStateBuilder implements Builder<ClientState, ClientStateBuilder> {
  _$ClientState _$v;

  ClientStateBuilder();

  @override
  void replace(ClientState other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$ClientState;
  }

  @override
  void update(void updates(ClientStateBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$ClientState build() {
    final _$result = _$v ?? new _$ClientState._();
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
