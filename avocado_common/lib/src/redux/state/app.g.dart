// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'app.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$AppState extends AppState {
  @override
  final AuthState auth;
  @override
  final ClientsState clients;
  @override
  final PostsState posts;
  @override
  final VideosState videos;
  @override
  final ImagesState images;
  @override
  final ChatsState chats;
  @override
  final WaterfallsState waterfalls;
  @override
  final NotificationsState notifications;

  factory _$AppState([void updates(AppStateBuilder b)]) =>
      (new AppStateBuilder()..update(updates)).build();

  _$AppState._(
      {this.auth,
      this.clients,
      this.posts,
      this.videos,
      this.images,
      this.chats,
      this.waterfalls,
      this.notifications})
      : super._() {
    if (auth == null) {
      throw new BuiltValueNullFieldError('AppState', 'auth');
    }
    if (clients == null) {
      throw new BuiltValueNullFieldError('AppState', 'clients');
    }
    if (posts == null) {
      throw new BuiltValueNullFieldError('AppState', 'posts');
    }
    if (videos == null) {
      throw new BuiltValueNullFieldError('AppState', 'videos');
    }
    if (images == null) {
      throw new BuiltValueNullFieldError('AppState', 'images');
    }
    if (chats == null) {
      throw new BuiltValueNullFieldError('AppState', 'chats');
    }
    if (waterfalls == null) {
      throw new BuiltValueNullFieldError('AppState', 'waterfalls');
    }
    if (notifications == null) {
      throw new BuiltValueNullFieldError('AppState', 'notifications');
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
        auth == other.auth &&
        clients == other.clients &&
        posts == other.posts &&
        videos == other.videos &&
        images == other.images &&
        chats == other.chats &&
        waterfalls == other.waterfalls &&
        notifications == other.notifications;
  }

  @override
  int get hashCode {
    return $jf($jc(
        $jc(
            $jc(
                $jc(
                    $jc(
                        $jc($jc($jc(0, auth.hashCode), clients.hashCode),
                            posts.hashCode),
                        videos.hashCode),
                    images.hashCode),
                chats.hashCode),
            waterfalls.hashCode),
        notifications.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('AppState')
          ..add('auth', auth)
          ..add('clients', clients)
          ..add('posts', posts)
          ..add('videos', videos)
          ..add('images', images)
          ..add('chats', chats)
          ..add('waterfalls', waterfalls)
          ..add('notifications', notifications))
        .toString();
  }
}

class AppStateBuilder implements Builder<AppState, AppStateBuilder> {
  _$AppState _$v;

  AuthStateBuilder _auth;
  AuthStateBuilder get auth => _$this._auth ??= new AuthStateBuilder();
  set auth(AuthStateBuilder auth) => _$this._auth = auth;

  ClientsStateBuilder _clients;
  ClientsStateBuilder get clients =>
      _$this._clients ??= new ClientsStateBuilder();
  set clients(ClientsStateBuilder clients) => _$this._clients = clients;

  PostsStateBuilder _posts;
  PostsStateBuilder get posts => _$this._posts ??= new PostsStateBuilder();
  set posts(PostsStateBuilder posts) => _$this._posts = posts;

  VideosStateBuilder _videos;
  VideosStateBuilder get videos => _$this._videos ??= new VideosStateBuilder();
  set videos(VideosStateBuilder videos) => _$this._videos = videos;

  ImagesStateBuilder _images;
  ImagesStateBuilder get images => _$this._images ??= new ImagesStateBuilder();
  set images(ImagesStateBuilder images) => _$this._images = images;

  ChatsStateBuilder _chats;
  ChatsStateBuilder get chats => _$this._chats ??= new ChatsStateBuilder();
  set chats(ChatsStateBuilder chats) => _$this._chats = chats;

  WaterfallsStateBuilder _waterfalls;
  WaterfallsStateBuilder get waterfalls =>
      _$this._waterfalls ??= new WaterfallsStateBuilder();
  set waterfalls(WaterfallsStateBuilder waterfalls) =>
      _$this._waterfalls = waterfalls;

  NotificationsStateBuilder _notifications;
  NotificationsStateBuilder get notifications =>
      _$this._notifications ??= new NotificationsStateBuilder();
  set notifications(NotificationsStateBuilder notifications) =>
      _$this._notifications = notifications;

  AppStateBuilder();

  AppStateBuilder get _$this {
    if (_$v != null) {
      _auth = _$v.auth?.toBuilder();
      _clients = _$v.clients?.toBuilder();
      _posts = _$v.posts?.toBuilder();
      _videos = _$v.videos?.toBuilder();
      _images = _$v.images?.toBuilder();
      _chats = _$v.chats?.toBuilder();
      _waterfalls = _$v.waterfalls?.toBuilder();
      _notifications = _$v.notifications?.toBuilder();
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
              auth: auth.build(),
              clients: clients.build(),
              posts: posts.build(),
              videos: videos.build(),
              images: images.build(),
              chats: chats.build(),
              waterfalls: waterfalls.build(),
              notifications: notifications.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'auth';
        auth.build();
        _$failedField = 'clients';
        clients.build();
        _$failedField = 'posts';
        posts.build();
        _$failedField = 'videos';
        videos.build();
        _$failedField = 'images';
        images.build();
        _$failedField = 'chats';
        chats.build();
        _$failedField = 'waterfalls';
        waterfalls.build();
        _$failedField = 'notifications';
        notifications.build();
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
