// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'clients.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$ClientsState extends ClientsState {
  @override
  final BuiltMap<String, ProfileInfo> profiles;
  @override
  final BuiltMap<String, ChatInfo> chats;
  @override
  final BuiltMap<String, PostInfo> posts;
  BuiltList<ProfileInfo> __orderedProfiles;

  factory _$ClientsState([void updates(ClientsStateBuilder b)]) =>
      (new ClientsStateBuilder()..update(updates)).build();

  _$ClientsState._({this.profiles, this.chats, this.posts}) : super._() {
    if (profiles == null) {
      throw new BuiltValueNullFieldError('ClientsState', 'profiles');
    }
    if (chats == null) {
      throw new BuiltValueNullFieldError('ClientsState', 'chats');
    }
    if (posts == null) {
      throw new BuiltValueNullFieldError('ClientsState', 'posts');
    }
  }

  @override
  BuiltList<ProfileInfo> get orderedProfiles =>
      __orderedProfiles ??= super.orderedProfiles;

  @override
  ClientsState rebuild(void updates(ClientsStateBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  ClientsStateBuilder toBuilder() => new ClientsStateBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ClientsState &&
        profiles == other.profiles &&
        chats == other.chats &&
        posts == other.posts;
  }

  @override
  int get hashCode {
    return $jf(
        $jc($jc($jc(0, profiles.hashCode), chats.hashCode), posts.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('ClientsState')
          ..add('profiles', profiles)
          ..add('chats', chats)
          ..add('posts', posts))
        .toString();
  }
}

class ClientsStateBuilder
    implements Builder<ClientsState, ClientsStateBuilder> {
  _$ClientsState _$v;

  MapBuilder<String, ProfileInfo> _profiles;
  MapBuilder<String, ProfileInfo> get profiles =>
      _$this._profiles ??= new MapBuilder<String, ProfileInfo>();
  set profiles(MapBuilder<String, ProfileInfo> profiles) =>
      _$this._profiles = profiles;

  MapBuilder<String, ChatInfo> _chats;
  MapBuilder<String, ChatInfo> get chats =>
      _$this._chats ??= new MapBuilder<String, ChatInfo>();
  set chats(MapBuilder<String, ChatInfo> chats) => _$this._chats = chats;

  MapBuilder<String, PostInfo> _posts;
  MapBuilder<String, PostInfo> get posts =>
      _$this._posts ??= new MapBuilder<String, PostInfo>();
  set posts(MapBuilder<String, PostInfo> posts) => _$this._posts = posts;

  ClientsStateBuilder();

  ClientsStateBuilder get _$this {
    if (_$v != null) {
      _profiles = _$v.profiles?.toBuilder();
      _chats = _$v.chats?.toBuilder();
      _posts = _$v.posts?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(ClientsState other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$ClientsState;
  }

  @override
  void update(void updates(ClientsStateBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$ClientsState build() {
    _$ClientsState _$result;
    try {
      _$result = _$v ??
          new _$ClientsState._(
              profiles: profiles.build(),
              chats: chats.build(),
              posts: posts.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'profiles';
        profiles.build();
        _$failedField = 'chats';
        chats.build();
        _$failedField = 'posts';
        posts.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'ClientsState', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
