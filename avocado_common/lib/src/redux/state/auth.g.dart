// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'auth.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$AuthState extends AuthState {
  @override
  final ProfileInfo profile;

  factory _$AuthState([void updates(AuthStateBuilder b)]) =>
      (new AuthStateBuilder()..update(updates)).build();

  _$AuthState._({this.profile}) : super._();

  @override
  AuthState rebuild(void updates(AuthStateBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  AuthStateBuilder toBuilder() => new AuthStateBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is AuthState && profile == other.profile;
  }

  @override
  int get hashCode {
    return $jf($jc(0, profile.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('AuthState')..add('profile', profile))
        .toString();
  }
}

class AuthStateBuilder implements Builder<AuthState, AuthStateBuilder> {
  _$AuthState _$v;

  ProfileInfo _profile;
  ProfileInfo get profile => _$this._profile;
  set profile(ProfileInfo profile) => _$this._profile = profile;

  AuthStateBuilder();

  AuthStateBuilder get _$this {
    if (_$v != null) {
      _profile = _$v.profile;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(AuthState other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$AuthState;
  }

  @override
  void update(void updates(AuthStateBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$AuthState build() {
    final _$result = _$v ?? new _$AuthState._(profile: profile);
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
