// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'chats.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$ChatsState extends ChatsState {
  @override
  final BuiltMap<String, ChatState> map;
  BuiltList<ChatState> __ordered;

  factory _$ChatsState([void updates(ChatsStateBuilder b)]) =>
      (new ChatsStateBuilder()..update(updates)).build();

  _$ChatsState._({this.map}) : super._() {
    if (map == null) {
      throw new BuiltValueNullFieldError('ChatsState', 'map');
    }
  }

  @override
  BuiltList<ChatState> get ordered => __ordered ??= super.ordered;

  @override
  ChatsState rebuild(void updates(ChatsStateBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  ChatsStateBuilder toBuilder() => new ChatsStateBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ChatsState && map == other.map;
  }

  @override
  int get hashCode {
    return $jf($jc(0, map.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('ChatsState')..add('map', map))
        .toString();
  }
}

class ChatsStateBuilder implements Builder<ChatsState, ChatsStateBuilder> {
  _$ChatsState _$v;

  MapBuilder<String, ChatState> _map;
  MapBuilder<String, ChatState> get map =>
      _$this._map ??= new MapBuilder<String, ChatState>();
  set map(MapBuilder<String, ChatState> map) => _$this._map = map;

  ChatsStateBuilder();

  ChatsStateBuilder get _$this {
    if (_$v != null) {
      _map = _$v.map?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(ChatsState other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$ChatsState;
  }

  @override
  void update(void updates(ChatsStateBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$ChatsState build() {
    _$ChatsState _$result;
    try {
      _$result = _$v ?? new _$ChatsState._(map: map.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'map';
        map.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'ChatsState', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

class _$ChatState extends ChatState {
  @override
  final ChatInfo info;
  @override
  final BuiltList<MessageInfo> messages;

  factory _$ChatState([void updates(ChatStateBuilder b)]) =>
      (new ChatStateBuilder()..update(updates)).build();

  _$ChatState._({this.info, this.messages}) : super._() {
    if (messages == null) {
      throw new BuiltValueNullFieldError('ChatState', 'messages');
    }
  }

  @override
  ChatState rebuild(void updates(ChatStateBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  ChatStateBuilder toBuilder() => new ChatStateBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ChatState &&
        info == other.info &&
        messages == other.messages;
  }

  @override
  int get hashCode {
    return $jf($jc($jc(0, info.hashCode), messages.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('ChatState')
          ..add('info', info)
          ..add('messages', messages))
        .toString();
  }
}

class ChatStateBuilder implements Builder<ChatState, ChatStateBuilder> {
  _$ChatState _$v;

  ChatInfo _info;
  ChatInfo get info => _$this._info;
  set info(ChatInfo info) => _$this._info = info;

  ListBuilder<MessageInfo> _messages;
  ListBuilder<MessageInfo> get messages =>
      _$this._messages ??= new ListBuilder<MessageInfo>();
  set messages(ListBuilder<MessageInfo> messages) =>
      _$this._messages = messages;

  ChatStateBuilder();

  ChatStateBuilder get _$this {
    if (_$v != null) {
      _info = _$v.info;
      _messages = _$v.messages?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(ChatState other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$ChatState;
  }

  @override
  void update(void updates(ChatStateBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$ChatState build() {
    _$ChatState _$result;
    try {
      _$result =
          _$v ?? new _$ChatState._(info: info, messages: messages.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'messages';
        messages.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'ChatState', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
