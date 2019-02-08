// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'app.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$AppState extends AppState {
  @override
  final ClinicState clinic;
  @override
  final ClientState client;
  @override
  final PostsState posts;
  @override
  final VideosState videos;

  factory _$AppState([void updates(AppStateBuilder b)]) =>
      (new AppStateBuilder()..update(updates)).build();

  _$AppState._({this.clinic, this.client, this.posts, this.videos})
      : super._() {
    if (clinic == null) {
      throw new BuiltValueNullFieldError('AppState', 'clinic');
    }
    if (client == null) {
      throw new BuiltValueNullFieldError('AppState', 'client');
    }
    if (posts == null) {
      throw new BuiltValueNullFieldError('AppState', 'posts');
    }
    if (videos == null) {
      throw new BuiltValueNullFieldError('AppState', 'videos');
    }
  }

  @override
  AppState rebuild(void updates(AppStateBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  AppStateBuilder toBuilder() => new AppStateBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is AppState &&
        clinic == other.clinic &&
        client == other.client &&
        posts == other.posts &&
        videos == other.videos;
  }

  @override
  int get hashCode {
    return $jf($jc(
        $jc($jc($jc(0, clinic.hashCode), client.hashCode), posts.hashCode),
        videos.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('AppState')
          ..add('clinic', clinic)
          ..add('client', client)
          ..add('posts', posts)
          ..add('videos', videos))
        .toString();
  }
}

class AppStateBuilder implements Builder<AppState, AppStateBuilder> {
  _$AppState _$v;

  ClinicStateBuilder _clinic;
  ClinicStateBuilder get clinic => _$this._clinic ??= new ClinicStateBuilder();
  set clinic(ClinicStateBuilder clinic) => _$this._clinic = clinic;

  ClientStateBuilder _client;
  ClientStateBuilder get client => _$this._client ??= new ClientStateBuilder();
  set client(ClientStateBuilder client) => _$this._client = client;

  PostsStateBuilder _posts;
  PostsStateBuilder get posts => _$this._posts ??= new PostsStateBuilder();
  set posts(PostsStateBuilder posts) => _$this._posts = posts;

  VideosStateBuilder _videos;
  VideosStateBuilder get videos => _$this._videos ??= new VideosStateBuilder();
  set videos(VideosStateBuilder videos) => _$this._videos = videos;

  AppStateBuilder();

  AppStateBuilder get _$this {
    if (_$v != null) {
      _clinic = _$v.clinic?.toBuilder();
      _client = _$v.client?.toBuilder();
      _posts = _$v.posts?.toBuilder();
      _videos = _$v.videos?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(AppState other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$AppState;
  }

  @override
  void update(void updates(AppStateBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$AppState build() {
    _$AppState _$result;
    try {
      _$result = _$v ??
          new _$AppState._(
              clinic: clinic.build(),
              client: client.build(),
              posts: posts.build(),
              videos: videos.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'clinic';
        clinic.build();
        _$failedField = 'client';
        client.build();
        _$failedField = 'posts';
        posts.build();
        _$failedField = 'videos';
        videos.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'AppState', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
