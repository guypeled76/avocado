// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'data.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

Serializer<EntityData> _$entityDataSerializer = new _$EntityDataSerializer();
Serializer<ContentData> _$contentDataSerializer = new _$ContentDataSerializer();
Serializer<PostData> _$postDataSerializer = new _$PostDataSerializer();
Serializer<UserData> _$userDataSerializer = new _$UserDataSerializer();
Serializer<ProfileData> _$profileDataSerializer = new _$ProfileDataSerializer();
Serializer<NotificationData> _$notificationDataSerializer =
    new _$NotificationDataSerializer();
Serializer<VideoData> _$videoDataSerializer = new _$VideoDataSerializer();
Serializer<MessageData> _$messageDataSerializer = new _$MessageDataSerializer();
Serializer<TargetData> _$targetDataSerializer = new _$TargetDataSerializer();

class _$EntityDataSerializer implements StructuredSerializer<EntityData> {
  @override
  final Iterable<Type> types = const [EntityData, _$EntityData];
  @override
  final String wireName = 'EntityData';

  @override
  Iterable serialize(Serializers serializers, EntityData object,
      {FullType specifiedType = FullType.unspecified}) {
    final result = <Object>[
      'key',
      serializers.serialize(object.key, specifiedType: const FullType(String)),
      'type',
      serializers.serialize(object.type,
          specifiedType: const FullType(EntityType)),
      'hashtags',
      serializers.serialize(object.hashtags,
          specifiedType: const FullType(List, const [const FullType(String)])),
    ];

    return result;
  }

  @override
  EntityData deserialize(Serializers serializers, Iterable serialized,
      {FullType specifiedType = FullType.unspecified}) {
    final result = new EntityDataBuilder();

    final iterator = serialized.iterator;
    while (iterator.moveNext()) {
      final key = iterator.current as String;
      iterator.moveNext();
      final dynamic value = iterator.current;
      switch (key) {
        case 'key':
          result.key = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'type':
          result.type = serializers.deserialize(value,
              specifiedType: const FullType(EntityType)) as EntityType;
          break;
        case 'hashtags':
          result.hashtags = serializers.deserialize(value,
                  specifiedType:
                      const FullType(List, const [const FullType(String)]))
              as List<String>;
          break;
      }
    }

    return result.build();
  }
}

class _$ContentDataSerializer implements StructuredSerializer<ContentData> {
  @override
  final Iterable<Type> types = const [ContentData, _$ContentData];
  @override
  final String wireName = 'ContentData';

  @override
  Iterable serialize(Serializers serializers, ContentData object,
      {FullType specifiedType = FullType.unspecified}) {
    final result = <Object>[
      'user',
      serializers.serialize(object.user,
          specifiedType: const FullType(UserInfo)),
      'date',
      serializers.serialize(object.date, specifiedType: const FullType(String)),
      'content',
      serializers.serialize(object.content,
          specifiedType: const FullType(String)),
      'key',
      serializers.serialize(object.key, specifiedType: const FullType(String)),
      'type',
      serializers.serialize(object.type,
          specifiedType: const FullType(EntityType)),
      'hashtags',
      serializers.serialize(object.hashtags,
          specifiedType: const FullType(List, const [const FullType(String)])),
    ];

    return result;
  }

  @override
  ContentData deserialize(Serializers serializers, Iterable serialized,
      {FullType specifiedType = FullType.unspecified}) {
    final result = new ContentDataBuilder();

    final iterator = serialized.iterator;
    while (iterator.moveNext()) {
      final key = iterator.current as String;
      iterator.moveNext();
      final dynamic value = iterator.current;
      switch (key) {
        case 'user':
          result.user = serializers.deserialize(value,
              specifiedType: const FullType(UserInfo)) as UserInfo;
          break;
        case 'date':
          result.date = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'content':
          result.content = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'key':
          result.key = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'type':
          result.type = serializers.deserialize(value,
              specifiedType: const FullType(EntityType)) as EntityType;
          break;
        case 'hashtags':
          result.hashtags = serializers.deserialize(value,
                  specifiedType:
                      const FullType(List, const [const FullType(String)]))
              as List<String>;
          break;
      }
    }

    return result.build();
  }
}

class _$PostDataSerializer implements StructuredSerializer<PostData> {
  @override
  final Iterable<Type> types = const [PostData, _$PostData];
  @override
  final String wireName = 'PostData';

  @override
  Iterable serialize(Serializers serializers, PostData object,
      {FullType specifiedType = FullType.unspecified}) {
    final result = <Object>[
      'user',
      serializers.serialize(object.user,
          specifiedType: const FullType(UserData)),
      'image',
      serializers.serialize(object.image,
          specifiedType: const FullType(String)),
      'date',
      serializers.serialize(object.date, specifiedType: const FullType(String)),
      'content',
      serializers.serialize(object.content,
          specifiedType: const FullType(String)),
      'key',
      serializers.serialize(object.key, specifiedType: const FullType(String)),
      'type',
      serializers.serialize(object.type,
          specifiedType: const FullType(EntityType)),
      'hashtags',
      serializers.serialize(object.hashtags,
          specifiedType: const FullType(List, const [const FullType(String)])),
    ];
    if (object.video != null) {
      result
        ..add('video')
        ..add(serializers.serialize(object.video,
            specifiedType: const FullType(String)));
    }

    return result;
  }

  @override
  PostData deserialize(Serializers serializers, Iterable serialized,
      {FullType specifiedType = FullType.unspecified}) {
    final result = new PostDataBuilder();

    final iterator = serialized.iterator;
    while (iterator.moveNext()) {
      final key = iterator.current as String;
      iterator.moveNext();
      final dynamic value = iterator.current;
      switch (key) {
        case 'user':
          result.user.replace(serializers.deserialize(value,
              specifiedType: const FullType(UserData)) as UserData);
          break;
        case 'video':
          result.video = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'image':
          result.image = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'date':
          result.date = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'content':
          result.content = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'key':
          result.key = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'type':
          result.type = serializers.deserialize(value,
              specifiedType: const FullType(EntityType)) as EntityType;
          break;
        case 'hashtags':
          result.hashtags = serializers.deserialize(value,
                  specifiedType:
                      const FullType(List, const [const FullType(String)]))
              as List<String>;
          break;
      }
    }

    return result.build();
  }
}

class _$UserDataSerializer implements StructuredSerializer<UserData> {
  @override
  final Iterable<Type> types = const [UserData, _$UserData];
  @override
  final String wireName = 'UserData';

  @override
  Iterable serialize(Serializers serializers, UserData object,
      {FullType specifiedType = FullType.unspecified}) {
    final result = <Object>[
      'image',
      serializers.serialize(object.image,
          specifiedType: const FullType(String)),
      'displayName',
      serializers.serialize(object.displayName,
          specifiedType: const FullType(String)),
      'key',
      serializers.serialize(object.key, specifiedType: const FullType(String)),
      'type',
      serializers.serialize(object.type,
          specifiedType: const FullType(EntityType)),
      'hashtags',
      serializers.serialize(object.hashtags,
          specifiedType: const FullType(List, const [const FullType(String)])),
    ];

    return result;
  }

  @override
  UserData deserialize(Serializers serializers, Iterable serialized,
      {FullType specifiedType = FullType.unspecified}) {
    final result = new UserDataBuilder();

    final iterator = serialized.iterator;
    while (iterator.moveNext()) {
      final key = iterator.current as String;
      iterator.moveNext();
      final dynamic value = iterator.current;
      switch (key) {
        case 'image':
          result.image = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'displayName':
          result.displayName = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'key':
          result.key = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'type':
          result.type = serializers.deserialize(value,
              specifiedType: const FullType(EntityType)) as EntityType;
          break;
        case 'hashtags':
          result.hashtags = serializers.deserialize(value,
                  specifiedType:
                      const FullType(List, const [const FullType(String)]))
              as List<String>;
          break;
      }
    }

    return result.build();
  }
}

class _$ProfileDataSerializer implements StructuredSerializer<ProfileData> {
  @override
  final Iterable<Type> types = const [ProfileData, _$ProfileData];
  @override
  final String wireName = 'ProfileData';

  @override
  Iterable serialize(Serializers serializers, ProfileData object,
      {FullType specifiedType = FullType.unspecified}) {
    final result = <Object>[
      'email',
      serializers.serialize(object.email,
          specifiedType: const FullType(String)),
      'image',
      serializers.serialize(object.image,
          specifiedType: const FullType(String)),
      'displayName',
      serializers.serialize(object.displayName,
          specifiedType: const FullType(String)),
      'key',
      serializers.serialize(object.key, specifiedType: const FullType(String)),
      'type',
      serializers.serialize(object.type,
          specifiedType: const FullType(EntityType)),
      'hashtags',
      serializers.serialize(object.hashtags,
          specifiedType: const FullType(List, const [const FullType(String)])),
    ];

    return result;
  }

  @override
  ProfileData deserialize(Serializers serializers, Iterable serialized,
      {FullType specifiedType = FullType.unspecified}) {
    final result = new ProfileDataBuilder();

    final iterator = serialized.iterator;
    while (iterator.moveNext()) {
      final key = iterator.current as String;
      iterator.moveNext();
      final dynamic value = iterator.current;
      switch (key) {
        case 'email':
          result.email = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'image':
          result.image = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'displayName':
          result.displayName = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'key':
          result.key = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'type':
          result.type = serializers.deserialize(value,
              specifiedType: const FullType(EntityType)) as EntityType;
          break;
        case 'hashtags':
          result.hashtags = serializers.deserialize(value,
                  specifiedType:
                      const FullType(List, const [const FullType(String)]))
              as List<String>;
          break;
      }
    }

    return result.build();
  }
}

class _$NotificationDataSerializer
    implements StructuredSerializer<NotificationData> {
  @override
  final Iterable<Type> types = const [NotificationData, _$NotificationData];
  @override
  final String wireName = 'NotificationData';

  @override
  Iterable serialize(Serializers serializers, NotificationData object,
      {FullType specifiedType = FullType.unspecified}) {
    final result = <Object>[
      'user',
      serializers.serialize(object.user,
          specifiedType: const FullType(UserData)),
      'target',
      serializers.serialize(object.target,
          specifiedType: const FullType(TargetData)),
      'date',
      serializers.serialize(object.date, specifiedType: const FullType(String)),
      'content',
      serializers.serialize(object.content,
          specifiedType: const FullType(String)),
      'key',
      serializers.serialize(object.key, specifiedType: const FullType(String)),
      'type',
      serializers.serialize(object.type,
          specifiedType: const FullType(EntityType)),
      'hashtags',
      serializers.serialize(object.hashtags,
          specifiedType: const FullType(List, const [const FullType(String)])),
    ];

    return result;
  }

  @override
  NotificationData deserialize(Serializers serializers, Iterable serialized,
      {FullType specifiedType = FullType.unspecified}) {
    final result = new NotificationDataBuilder();

    final iterator = serialized.iterator;
    while (iterator.moveNext()) {
      final key = iterator.current as String;
      iterator.moveNext();
      final dynamic value = iterator.current;
      switch (key) {
        case 'user':
          result.user.replace(serializers.deserialize(value,
              specifiedType: const FullType(UserData)) as UserData);
          break;
        case 'target':
          result.target.replace(serializers.deserialize(value,
              specifiedType: const FullType(TargetData)) as TargetData);
          break;
        case 'date':
          result.date = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'content':
          result.content = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'key':
          result.key = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'type':
          result.type = serializers.deserialize(value,
              specifiedType: const FullType(EntityType)) as EntityType;
          break;
        case 'hashtags':
          result.hashtags = serializers.deserialize(value,
                  specifiedType:
                      const FullType(List, const [const FullType(String)]))
              as List<String>;
          break;
      }
    }

    return result.build();
  }
}

class _$VideoDataSerializer implements StructuredSerializer<VideoData> {
  @override
  final Iterable<Type> types = const [VideoData, _$VideoData];
  @override
  final String wireName = 'VideoData';

  @override
  Iterable serialize(Serializers serializers, VideoData object,
      {FullType specifiedType = FullType.unspecified}) {
    final result = <Object>[
      'user',
      serializers.serialize(object.user,
          specifiedType: const FullType(UserData)),
      'image',
      serializers.serialize(object.image,
          specifiedType: const FullType(String)),
      'video',
      serializers.serialize(object.video,
          specifiedType: const FullType(String)),
      'date',
      serializers.serialize(object.date, specifiedType: const FullType(String)),
      'content',
      serializers.serialize(object.content,
          specifiedType: const FullType(String)),
      'key',
      serializers.serialize(object.key, specifiedType: const FullType(String)),
      'type',
      serializers.serialize(object.type,
          specifiedType: const FullType(EntityType)),
      'hashtags',
      serializers.serialize(object.hashtags,
          specifiedType: const FullType(List, const [const FullType(String)])),
    ];

    return result;
  }

  @override
  VideoData deserialize(Serializers serializers, Iterable serialized,
      {FullType specifiedType = FullType.unspecified}) {
    final result = new VideoDataBuilder();

    final iterator = serialized.iterator;
    while (iterator.moveNext()) {
      final key = iterator.current as String;
      iterator.moveNext();
      final dynamic value = iterator.current;
      switch (key) {
        case 'user':
          result.user.replace(serializers.deserialize(value,
              specifiedType: const FullType(UserData)) as UserData);
          break;
        case 'image':
          result.image = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'video':
          result.video = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'date':
          result.date = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'content':
          result.content = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'key':
          result.key = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'type':
          result.type = serializers.deserialize(value,
              specifiedType: const FullType(EntityType)) as EntityType;
          break;
        case 'hashtags':
          result.hashtags = serializers.deserialize(value,
                  specifiedType:
                      const FullType(List, const [const FullType(String)]))
              as List<String>;
          break;
      }
    }

    return result.build();
  }
}

class _$MessageDataSerializer implements StructuredSerializer<MessageData> {
  @override
  final Iterable<Type> types = const [MessageData, _$MessageData];
  @override
  final String wireName = 'MessageData';

  @override
  Iterable serialize(Serializers serializers, MessageData object,
      {FullType specifiedType = FullType.unspecified}) {
    final result = <Object>[
      'user',
      serializers.serialize(object.user,
          specifiedType: const FullType(UserData)),
      'date',
      serializers.serialize(object.date, specifiedType: const FullType(String)),
      'content',
      serializers.serialize(object.content,
          specifiedType: const FullType(String)),
      'key',
      serializers.serialize(object.key, specifiedType: const FullType(String)),
      'type',
      serializers.serialize(object.type,
          specifiedType: const FullType(EntityType)),
      'hashtags',
      serializers.serialize(object.hashtags,
          specifiedType: const FullType(List, const [const FullType(String)])),
    ];
    if (object.image != null) {
      result
        ..add('image')
        ..add(serializers.serialize(object.image,
            specifiedType: const FullType(String)));
    }

    return result;
  }

  @override
  MessageData deserialize(Serializers serializers, Iterable serialized,
      {FullType specifiedType = FullType.unspecified}) {
    final result = new MessageDataBuilder();

    final iterator = serialized.iterator;
    while (iterator.moveNext()) {
      final key = iterator.current as String;
      iterator.moveNext();
      final dynamic value = iterator.current;
      switch (key) {
        case 'user':
          result.user.replace(serializers.deserialize(value,
              specifiedType: const FullType(UserData)) as UserData);
          break;
        case 'image':
          result.image = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'date':
          result.date = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'content':
          result.content = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'key':
          result.key = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'type':
          result.type = serializers.deserialize(value,
              specifiedType: const FullType(EntityType)) as EntityType;
          break;
        case 'hashtags':
          result.hashtags = serializers.deserialize(value,
                  specifiedType:
                      const FullType(List, const [const FullType(String)]))
              as List<String>;
          break;
      }
    }

    return result.build();
  }
}

class _$TargetDataSerializer implements StructuredSerializer<TargetData> {
  @override
  final Iterable<Type> types = const [TargetData, _$TargetData];
  @override
  final String wireName = 'TargetData';

  @override
  Iterable serialize(Serializers serializers, TargetData object,
      {FullType specifiedType = FullType.unspecified}) {
    final result = <Object>[
      'key',
      serializers.serialize(object.key, specifiedType: const FullType(String)),
      'type',
      serializers.serialize(object.type,
          specifiedType: const FullType(EntityType)),
    ];

    return result;
  }

  @override
  TargetData deserialize(Serializers serializers, Iterable serialized,
      {FullType specifiedType = FullType.unspecified}) {
    final result = new TargetDataBuilder();

    final iterator = serialized.iterator;
    while (iterator.moveNext()) {
      final key = iterator.current as String;
      iterator.moveNext();
      final dynamic value = iterator.current;
      switch (key) {
        case 'key':
          result.key = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'type':
          result.type = serializers.deserialize(value,
              specifiedType: const FullType(EntityType)) as EntityType;
          break;
      }
    }

    return result.build();
  }
}

class _$EntityData extends EntityData {
  @override
  final String key;
  @override
  final EntityType type;
  @override
  final List<String> hashtags;

  factory _$EntityData([void updates(EntityDataBuilder b)]) =>
      (new EntityDataBuilder()..update(updates)).build();

  _$EntityData._({this.key, this.type, this.hashtags}) : super._() {
    if (key == null) {
      throw new BuiltValueNullFieldError('EntityData', 'key');
    }
    if (type == null) {
      throw new BuiltValueNullFieldError('EntityData', 'type');
    }
    if (hashtags == null) {
      throw new BuiltValueNullFieldError('EntityData', 'hashtags');
    }
  }

  @override
  EntityData rebuild(void updates(EntityDataBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  EntityDataBuilder toBuilder() => new EntityDataBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is EntityData &&
        key == other.key &&
        type == other.type &&
        hashtags == other.hashtags;
  }

  @override
  int get hashCode {
    return $jf(
        $jc($jc($jc(0, key.hashCode), type.hashCode), hashtags.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('EntityData')
          ..add('key', key)
          ..add('type', type)
          ..add('hashtags', hashtags))
        .toString();
  }
}

class EntityDataBuilder implements Builder<EntityData, EntityDataBuilder> {
  _$EntityData _$v;

  String _key;
  String get key => _$this._key;
  set key(String key) => _$this._key = key;

  EntityType _type;
  EntityType get type => _$this._type;
  set type(EntityType type) => _$this._type = type;

  List<String> _hashtags;
  List<String> get hashtags => _$this._hashtags;
  set hashtags(List<String> hashtags) => _$this._hashtags = hashtags;

  EntityDataBuilder();

  EntityDataBuilder get _$this {
    if (_$v != null) {
      _key = _$v.key;
      _type = _$v.type;
      _hashtags = _$v.hashtags;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(EntityData other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$EntityData;
  }

  @override
  void update(void updates(EntityDataBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$EntityData build() {
    final _$result =
        _$v ?? new _$EntityData._(key: key, type: type, hashtags: hashtags);
    replace(_$result);
    return _$result;
  }
}

class _$ContentData extends ContentData {
  @override
  final UserInfo user;
  @override
  final String date;
  @override
  final String content;
  @override
  final String key;
  @override
  final EntityType type;
  @override
  final List<String> hashtags;

  factory _$ContentData([void updates(ContentDataBuilder b)]) =>
      (new ContentDataBuilder()..update(updates)).build();

  _$ContentData._(
      {this.user, this.date, this.content, this.key, this.type, this.hashtags})
      : super._() {
    if (user == null) {
      throw new BuiltValueNullFieldError('ContentData', 'user');
    }
    if (date == null) {
      throw new BuiltValueNullFieldError('ContentData', 'date');
    }
    if (content == null) {
      throw new BuiltValueNullFieldError('ContentData', 'content');
    }
    if (key == null) {
      throw new BuiltValueNullFieldError('ContentData', 'key');
    }
    if (type == null) {
      throw new BuiltValueNullFieldError('ContentData', 'type');
    }
    if (hashtags == null) {
      throw new BuiltValueNullFieldError('ContentData', 'hashtags');
    }
  }

  @override
  ContentData rebuild(void updates(ContentDataBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  ContentDataBuilder toBuilder() => new ContentDataBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ContentData &&
        user == other.user &&
        date == other.date &&
        content == other.content &&
        key == other.key &&
        type == other.type &&
        hashtags == other.hashtags;
  }

  @override
  int get hashCode {
    return $jf($jc(
        $jc(
            $jc(
                $jc($jc($jc(0, user.hashCode), date.hashCode),
                    content.hashCode),
                key.hashCode),
            type.hashCode),
        hashtags.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('ContentData')
          ..add('user', user)
          ..add('date', date)
          ..add('content', content)
          ..add('key', key)
          ..add('type', type)
          ..add('hashtags', hashtags))
        .toString();
  }
}

class ContentDataBuilder implements Builder<ContentData, ContentDataBuilder> {
  _$ContentData _$v;

  UserInfo _user;
  UserInfo get user => _$this._user;
  set user(UserInfo user) => _$this._user = user;

  String _date;
  String get date => _$this._date;
  set date(String date) => _$this._date = date;

  String _content;
  String get content => _$this._content;
  set content(String content) => _$this._content = content;

  String _key;
  String get key => _$this._key;
  set key(String key) => _$this._key = key;

  EntityType _type;
  EntityType get type => _$this._type;
  set type(EntityType type) => _$this._type = type;

  List<String> _hashtags;
  List<String> get hashtags => _$this._hashtags;
  set hashtags(List<String> hashtags) => _$this._hashtags = hashtags;

  ContentDataBuilder();

  ContentDataBuilder get _$this {
    if (_$v != null) {
      _user = _$v.user;
      _date = _$v.date;
      _content = _$v.content;
      _key = _$v.key;
      _type = _$v.type;
      _hashtags = _$v.hashtags;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(ContentData other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$ContentData;
  }

  @override
  void update(void updates(ContentDataBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$ContentData build() {
    final _$result = _$v ??
        new _$ContentData._(
            user: user,
            date: date,
            content: content,
            key: key,
            type: type,
            hashtags: hashtags);
    replace(_$result);
    return _$result;
  }
}

class _$PostData extends PostData {
  @override
  final UserData user;
  @override
  final String video;
  @override
  final String image;
  @override
  final String date;
  @override
  final String content;
  @override
  final String key;
  @override
  final EntityType type;
  @override
  final List<String> hashtags;

  factory _$PostData([void updates(PostDataBuilder b)]) =>
      (new PostDataBuilder()..update(updates)).build();

  _$PostData._(
      {this.user,
      this.video,
      this.image,
      this.date,
      this.content,
      this.key,
      this.type,
      this.hashtags})
      : super._() {
    if (user == null) {
      throw new BuiltValueNullFieldError('PostData', 'user');
    }
    if (image == null) {
      throw new BuiltValueNullFieldError('PostData', 'image');
    }
    if (date == null) {
      throw new BuiltValueNullFieldError('PostData', 'date');
    }
    if (content == null) {
      throw new BuiltValueNullFieldError('PostData', 'content');
    }
    if (key == null) {
      throw new BuiltValueNullFieldError('PostData', 'key');
    }
    if (type == null) {
      throw new BuiltValueNullFieldError('PostData', 'type');
    }
    if (hashtags == null) {
      throw new BuiltValueNullFieldError('PostData', 'hashtags');
    }
  }

  @override
  PostData rebuild(void updates(PostDataBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  PostDataBuilder toBuilder() => new PostDataBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is PostData &&
        user == other.user &&
        video == other.video &&
        image == other.image &&
        date == other.date &&
        content == other.content &&
        key == other.key &&
        type == other.type &&
        hashtags == other.hashtags;
  }

  @override
  int get hashCode {
    return $jf($jc(
        $jc(
            $jc(
                $jc(
                    $jc(
                        $jc($jc($jc(0, user.hashCode), video.hashCode),
                            image.hashCode),
                        date.hashCode),
                    content.hashCode),
                key.hashCode),
            type.hashCode),
        hashtags.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('PostData')
          ..add('user', user)
          ..add('video', video)
          ..add('image', image)
          ..add('date', date)
          ..add('content', content)
          ..add('key', key)
          ..add('type', type)
          ..add('hashtags', hashtags))
        .toString();
  }
}

class PostDataBuilder implements Builder<PostData, PostDataBuilder> {
  _$PostData _$v;

  UserDataBuilder _user;
  UserDataBuilder get user => _$this._user ??= new UserDataBuilder();
  set user(UserDataBuilder user) => _$this._user = user;

  String _video;
  String get video => _$this._video;
  set video(String video) => _$this._video = video;

  String _image;
  String get image => _$this._image;
  set image(String image) => _$this._image = image;

  String _date;
  String get date => _$this._date;
  set date(String date) => _$this._date = date;

  String _content;
  String get content => _$this._content;
  set content(String content) => _$this._content = content;

  String _key;
  String get key => _$this._key;
  set key(String key) => _$this._key = key;

  EntityType _type;
  EntityType get type => _$this._type;
  set type(EntityType type) => _$this._type = type;

  List<String> _hashtags;
  List<String> get hashtags => _$this._hashtags;
  set hashtags(List<String> hashtags) => _$this._hashtags = hashtags;

  PostDataBuilder();

  PostDataBuilder get _$this {
    if (_$v != null) {
      _user = _$v.user?.toBuilder();
      _video = _$v.video;
      _image = _$v.image;
      _date = _$v.date;
      _content = _$v.content;
      _key = _$v.key;
      _type = _$v.type;
      _hashtags = _$v.hashtags;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(PostData other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$PostData;
  }

  @override
  void update(void updates(PostDataBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$PostData build() {
    _$PostData _$result;
    try {
      _$result = _$v ??
          new _$PostData._(
              user: user.build(),
              video: video,
              image: image,
              date: date,
              content: content,
              key: key,
              type: type,
              hashtags: hashtags);
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'user';
        user.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'PostData', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

class _$UserData extends UserData {
  @override
  final String image;
  @override
  final String displayName;
  @override
  final String key;
  @override
  final EntityType type;
  @override
  final List<String> hashtags;

  factory _$UserData([void updates(UserDataBuilder b)]) =>
      (new UserDataBuilder()..update(updates)).build();

  _$UserData._(
      {this.image, this.displayName, this.key, this.type, this.hashtags})
      : super._() {
    if (image == null) {
      throw new BuiltValueNullFieldError('UserData', 'image');
    }
    if (displayName == null) {
      throw new BuiltValueNullFieldError('UserData', 'displayName');
    }
    if (key == null) {
      throw new BuiltValueNullFieldError('UserData', 'key');
    }
    if (type == null) {
      throw new BuiltValueNullFieldError('UserData', 'type');
    }
    if (hashtags == null) {
      throw new BuiltValueNullFieldError('UserData', 'hashtags');
    }
  }

  @override
  UserData rebuild(void updates(UserDataBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  UserDataBuilder toBuilder() => new UserDataBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is UserData &&
        image == other.image &&
        displayName == other.displayName &&
        key == other.key &&
        type == other.type &&
        hashtags == other.hashtags;
  }

  @override
  int get hashCode {
    return $jf($jc(
        $jc(
            $jc($jc($jc(0, image.hashCode), displayName.hashCode),
                key.hashCode),
            type.hashCode),
        hashtags.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('UserData')
          ..add('image', image)
          ..add('displayName', displayName)
          ..add('key', key)
          ..add('type', type)
          ..add('hashtags', hashtags))
        .toString();
  }
}

class UserDataBuilder implements Builder<UserData, UserDataBuilder> {
  _$UserData _$v;

  String _image;
  String get image => _$this._image;
  set image(String image) => _$this._image = image;

  String _displayName;
  String get displayName => _$this._displayName;
  set displayName(String displayName) => _$this._displayName = displayName;

  String _key;
  String get key => _$this._key;
  set key(String key) => _$this._key = key;

  EntityType _type;
  EntityType get type => _$this._type;
  set type(EntityType type) => _$this._type = type;

  List<String> _hashtags;
  List<String> get hashtags => _$this._hashtags;
  set hashtags(List<String> hashtags) => _$this._hashtags = hashtags;

  UserDataBuilder();

  UserDataBuilder get _$this {
    if (_$v != null) {
      _image = _$v.image;
      _displayName = _$v.displayName;
      _key = _$v.key;
      _type = _$v.type;
      _hashtags = _$v.hashtags;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(UserData other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$UserData;
  }

  @override
  void update(void updates(UserDataBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$UserData build() {
    final _$result = _$v ??
        new _$UserData._(
            image: image,
            displayName: displayName,
            key: key,
            type: type,
            hashtags: hashtags);
    replace(_$result);
    return _$result;
  }
}

class _$ProfileData extends ProfileData {
  @override
  final String email;
  @override
  final String image;
  @override
  final String displayName;
  @override
  final String key;
  @override
  final EntityType type;
  @override
  final List<String> hashtags;

  factory _$ProfileData([void updates(ProfileDataBuilder b)]) =>
      (new ProfileDataBuilder()..update(updates)).build();

  _$ProfileData._(
      {this.email,
      this.image,
      this.displayName,
      this.key,
      this.type,
      this.hashtags})
      : super._() {
    if (email == null) {
      throw new BuiltValueNullFieldError('ProfileData', 'email');
    }
    if (image == null) {
      throw new BuiltValueNullFieldError('ProfileData', 'image');
    }
    if (displayName == null) {
      throw new BuiltValueNullFieldError('ProfileData', 'displayName');
    }
    if (key == null) {
      throw new BuiltValueNullFieldError('ProfileData', 'key');
    }
    if (type == null) {
      throw new BuiltValueNullFieldError('ProfileData', 'type');
    }
    if (hashtags == null) {
      throw new BuiltValueNullFieldError('ProfileData', 'hashtags');
    }
  }

  @override
  ProfileData rebuild(void updates(ProfileDataBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  ProfileDataBuilder toBuilder() => new ProfileDataBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ProfileData &&
        email == other.email &&
        image == other.image &&
        displayName == other.displayName &&
        key == other.key &&
        type == other.type &&
        hashtags == other.hashtags;
  }

  @override
  int get hashCode {
    return $jf($jc(
        $jc(
            $jc(
                $jc($jc($jc(0, email.hashCode), image.hashCode),
                    displayName.hashCode),
                key.hashCode),
            type.hashCode),
        hashtags.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('ProfileData')
          ..add('email', email)
          ..add('image', image)
          ..add('displayName', displayName)
          ..add('key', key)
          ..add('type', type)
          ..add('hashtags', hashtags))
        .toString();
  }
}

class ProfileDataBuilder implements Builder<ProfileData, ProfileDataBuilder> {
  _$ProfileData _$v;

  String _email;
  String get email => _$this._email;
  set email(String email) => _$this._email = email;

  String _image;
  String get image => _$this._image;
  set image(String image) => _$this._image = image;

  String _displayName;
  String get displayName => _$this._displayName;
  set displayName(String displayName) => _$this._displayName = displayName;

  String _key;
  String get key => _$this._key;
  set key(String key) => _$this._key = key;

  EntityType _type;
  EntityType get type => _$this._type;
  set type(EntityType type) => _$this._type = type;

  List<String> _hashtags;
  List<String> get hashtags => _$this._hashtags;
  set hashtags(List<String> hashtags) => _$this._hashtags = hashtags;

  ProfileDataBuilder();

  ProfileDataBuilder get _$this {
    if (_$v != null) {
      _email = _$v.email;
      _image = _$v.image;
      _displayName = _$v.displayName;
      _key = _$v.key;
      _type = _$v.type;
      _hashtags = _$v.hashtags;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(ProfileData other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$ProfileData;
  }

  @override
  void update(void updates(ProfileDataBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$ProfileData build() {
    final _$result = _$v ??
        new _$ProfileData._(
            email: email,
            image: image,
            displayName: displayName,
            key: key,
            type: type,
            hashtags: hashtags);
    replace(_$result);
    return _$result;
  }
}

class _$NotificationData extends NotificationData {
  @override
  final UserData user;
  @override
  final TargetData target;
  @override
  final String date;
  @override
  final String content;
  @override
  final String key;
  @override
  final EntityType type;
  @override
  final List<String> hashtags;

  factory _$NotificationData([void updates(NotificationDataBuilder b)]) =>
      (new NotificationDataBuilder()..update(updates)).build();

  _$NotificationData._(
      {this.user,
      this.target,
      this.date,
      this.content,
      this.key,
      this.type,
      this.hashtags})
      : super._() {
    if (user == null) {
      throw new BuiltValueNullFieldError('NotificationData', 'user');
    }
    if (target == null) {
      throw new BuiltValueNullFieldError('NotificationData', 'target');
    }
    if (date == null) {
      throw new BuiltValueNullFieldError('NotificationData', 'date');
    }
    if (content == null) {
      throw new BuiltValueNullFieldError('NotificationData', 'content');
    }
    if (key == null) {
      throw new BuiltValueNullFieldError('NotificationData', 'key');
    }
    if (type == null) {
      throw new BuiltValueNullFieldError('NotificationData', 'type');
    }
    if (hashtags == null) {
      throw new BuiltValueNullFieldError('NotificationData', 'hashtags');
    }
  }

  @override
  NotificationData rebuild(void updates(NotificationDataBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  NotificationDataBuilder toBuilder() =>
      new NotificationDataBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is NotificationData &&
        user == other.user &&
        target == other.target &&
        date == other.date &&
        content == other.content &&
        key == other.key &&
        type == other.type &&
        hashtags == other.hashtags;
  }

  @override
  int get hashCode {
    return $jf($jc(
        $jc(
            $jc(
                $jc(
                    $jc($jc($jc(0, user.hashCode), target.hashCode),
                        date.hashCode),
                    content.hashCode),
                key.hashCode),
            type.hashCode),
        hashtags.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('NotificationData')
          ..add('user', user)
          ..add('target', target)
          ..add('date', date)
          ..add('content', content)
          ..add('key', key)
          ..add('type', type)
          ..add('hashtags', hashtags))
        .toString();
  }
}

class NotificationDataBuilder
    implements Builder<NotificationData, NotificationDataBuilder> {
  _$NotificationData _$v;

  UserDataBuilder _user;
  UserDataBuilder get user => _$this._user ??= new UserDataBuilder();
  set user(UserDataBuilder user) => _$this._user = user;

  TargetDataBuilder _target;
  TargetDataBuilder get target => _$this._target ??= new TargetDataBuilder();
  set target(TargetDataBuilder target) => _$this._target = target;

  String _date;
  String get date => _$this._date;
  set date(String date) => _$this._date = date;

  String _content;
  String get content => _$this._content;
  set content(String content) => _$this._content = content;

  String _key;
  String get key => _$this._key;
  set key(String key) => _$this._key = key;

  EntityType _type;
  EntityType get type => _$this._type;
  set type(EntityType type) => _$this._type = type;

  List<String> _hashtags;
  List<String> get hashtags => _$this._hashtags;
  set hashtags(List<String> hashtags) => _$this._hashtags = hashtags;

  NotificationDataBuilder();

  NotificationDataBuilder get _$this {
    if (_$v != null) {
      _user = _$v.user?.toBuilder();
      _target = _$v.target?.toBuilder();
      _date = _$v.date;
      _content = _$v.content;
      _key = _$v.key;
      _type = _$v.type;
      _hashtags = _$v.hashtags;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(NotificationData other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$NotificationData;
  }

  @override
  void update(void updates(NotificationDataBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$NotificationData build() {
    _$NotificationData _$result;
    try {
      _$result = _$v ??
          new _$NotificationData._(
              user: user.build(),
              target: target.build(),
              date: date,
              content: content,
              key: key,
              type: type,
              hashtags: hashtags);
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'user';
        user.build();
        _$failedField = 'target';
        target.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'NotificationData', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

class _$VideoData extends VideoData {
  @override
  final UserData user;
  @override
  final String image;
  @override
  final String video;
  @override
  final String date;
  @override
  final String content;
  @override
  final String key;
  @override
  final EntityType type;
  @override
  final List<String> hashtags;

  factory _$VideoData([void updates(VideoDataBuilder b)]) =>
      (new VideoDataBuilder()..update(updates)).build();

  _$VideoData._(
      {this.user,
      this.image,
      this.video,
      this.date,
      this.content,
      this.key,
      this.type,
      this.hashtags})
      : super._() {
    if (user == null) {
      throw new BuiltValueNullFieldError('VideoData', 'user');
    }
    if (image == null) {
      throw new BuiltValueNullFieldError('VideoData', 'image');
    }
    if (video == null) {
      throw new BuiltValueNullFieldError('VideoData', 'video');
    }
    if (date == null) {
      throw new BuiltValueNullFieldError('VideoData', 'date');
    }
    if (content == null) {
      throw new BuiltValueNullFieldError('VideoData', 'content');
    }
    if (key == null) {
      throw new BuiltValueNullFieldError('VideoData', 'key');
    }
    if (type == null) {
      throw new BuiltValueNullFieldError('VideoData', 'type');
    }
    if (hashtags == null) {
      throw new BuiltValueNullFieldError('VideoData', 'hashtags');
    }
  }

  @override
  VideoData rebuild(void updates(VideoDataBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  VideoDataBuilder toBuilder() => new VideoDataBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is VideoData &&
        user == other.user &&
        image == other.image &&
        video == other.video &&
        date == other.date &&
        content == other.content &&
        key == other.key &&
        type == other.type &&
        hashtags == other.hashtags;
  }

  @override
  int get hashCode {
    return $jf($jc(
        $jc(
            $jc(
                $jc(
                    $jc(
                        $jc($jc($jc(0, user.hashCode), image.hashCode),
                            video.hashCode),
                        date.hashCode),
                    content.hashCode),
                key.hashCode),
            type.hashCode),
        hashtags.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('VideoData')
          ..add('user', user)
          ..add('image', image)
          ..add('video', video)
          ..add('date', date)
          ..add('content', content)
          ..add('key', key)
          ..add('type', type)
          ..add('hashtags', hashtags))
        .toString();
  }
}

class VideoDataBuilder implements Builder<VideoData, VideoDataBuilder> {
  _$VideoData _$v;

  UserDataBuilder _user;
  UserDataBuilder get user => _$this._user ??= new UserDataBuilder();
  set user(UserDataBuilder user) => _$this._user = user;

  String _image;
  String get image => _$this._image;
  set image(String image) => _$this._image = image;

  String _video;
  String get video => _$this._video;
  set video(String video) => _$this._video = video;

  String _date;
  String get date => _$this._date;
  set date(String date) => _$this._date = date;

  String _content;
  String get content => _$this._content;
  set content(String content) => _$this._content = content;

  String _key;
  String get key => _$this._key;
  set key(String key) => _$this._key = key;

  EntityType _type;
  EntityType get type => _$this._type;
  set type(EntityType type) => _$this._type = type;

  List<String> _hashtags;
  List<String> get hashtags => _$this._hashtags;
  set hashtags(List<String> hashtags) => _$this._hashtags = hashtags;

  VideoDataBuilder();

  VideoDataBuilder get _$this {
    if (_$v != null) {
      _user = _$v.user?.toBuilder();
      _image = _$v.image;
      _video = _$v.video;
      _date = _$v.date;
      _content = _$v.content;
      _key = _$v.key;
      _type = _$v.type;
      _hashtags = _$v.hashtags;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(VideoData other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$VideoData;
  }

  @override
  void update(void updates(VideoDataBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$VideoData build() {
    _$VideoData _$result;
    try {
      _$result = _$v ??
          new _$VideoData._(
              user: user.build(),
              image: image,
              video: video,
              date: date,
              content: content,
              key: key,
              type: type,
              hashtags: hashtags);
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'user';
        user.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'VideoData', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

class _$MessageData extends MessageData {
  @override
  final UserData user;
  @override
  final String image;
  @override
  final String date;
  @override
  final String content;
  @override
  final String key;
  @override
  final EntityType type;
  @override
  final List<String> hashtags;

  factory _$MessageData([void updates(MessageDataBuilder b)]) =>
      (new MessageDataBuilder()..update(updates)).build();

  _$MessageData._(
      {this.user,
      this.image,
      this.date,
      this.content,
      this.key,
      this.type,
      this.hashtags})
      : super._() {
    if (user == null) {
      throw new BuiltValueNullFieldError('MessageData', 'user');
    }
    if (date == null) {
      throw new BuiltValueNullFieldError('MessageData', 'date');
    }
    if (content == null) {
      throw new BuiltValueNullFieldError('MessageData', 'content');
    }
    if (key == null) {
      throw new BuiltValueNullFieldError('MessageData', 'key');
    }
    if (type == null) {
      throw new BuiltValueNullFieldError('MessageData', 'type');
    }
    if (hashtags == null) {
      throw new BuiltValueNullFieldError('MessageData', 'hashtags');
    }
  }

  @override
  MessageData rebuild(void updates(MessageDataBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  MessageDataBuilder toBuilder() => new MessageDataBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is MessageData &&
        user == other.user &&
        image == other.image &&
        date == other.date &&
        content == other.content &&
        key == other.key &&
        type == other.type &&
        hashtags == other.hashtags;
  }

  @override
  int get hashCode {
    return $jf($jc(
        $jc(
            $jc(
                $jc(
                    $jc($jc($jc(0, user.hashCode), image.hashCode),
                        date.hashCode),
                    content.hashCode),
                key.hashCode),
            type.hashCode),
        hashtags.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('MessageData')
          ..add('user', user)
          ..add('image', image)
          ..add('date', date)
          ..add('content', content)
          ..add('key', key)
          ..add('type', type)
          ..add('hashtags', hashtags))
        .toString();
  }
}

class MessageDataBuilder implements Builder<MessageData, MessageDataBuilder> {
  _$MessageData _$v;

  UserDataBuilder _user;
  UserDataBuilder get user => _$this._user ??= new UserDataBuilder();
  set user(UserDataBuilder user) => _$this._user = user;

  String _image;
  String get image => _$this._image;
  set image(String image) => _$this._image = image;

  String _date;
  String get date => _$this._date;
  set date(String date) => _$this._date = date;

  String _content;
  String get content => _$this._content;
  set content(String content) => _$this._content = content;

  String _key;
  String get key => _$this._key;
  set key(String key) => _$this._key = key;

  EntityType _type;
  EntityType get type => _$this._type;
  set type(EntityType type) => _$this._type = type;

  List<String> _hashtags;
  List<String> get hashtags => _$this._hashtags;
  set hashtags(List<String> hashtags) => _$this._hashtags = hashtags;

  MessageDataBuilder();

  MessageDataBuilder get _$this {
    if (_$v != null) {
      _user = _$v.user?.toBuilder();
      _image = _$v.image;
      _date = _$v.date;
      _content = _$v.content;
      _key = _$v.key;
      _type = _$v.type;
      _hashtags = _$v.hashtags;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(MessageData other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$MessageData;
  }

  @override
  void update(void updates(MessageDataBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$MessageData build() {
    _$MessageData _$result;
    try {
      _$result = _$v ??
          new _$MessageData._(
              user: user.build(),
              image: image,
              date: date,
              content: content,
              key: key,
              type: type,
              hashtags: hashtags);
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'user';
        user.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'MessageData', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

class _$TargetData extends TargetData {
  @override
  final String key;
  @override
  final EntityType type;

  factory _$TargetData([void updates(TargetDataBuilder b)]) =>
      (new TargetDataBuilder()..update(updates)).build();

  _$TargetData._({this.key, this.type}) : super._() {
    if (key == null) {
      throw new BuiltValueNullFieldError('TargetData', 'key');
    }
    if (type == null) {
      throw new BuiltValueNullFieldError('TargetData', 'type');
    }
  }

  @override
  TargetData rebuild(void updates(TargetDataBuilder b)) =>
      (toBuilder()..update(updates)).build();

  @override
  TargetDataBuilder toBuilder() => new TargetDataBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is TargetData && key == other.key && type == other.type;
  }

  @override
  int get hashCode {
    return $jf($jc($jc(0, key.hashCode), type.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('TargetData')
          ..add('key', key)
          ..add('type', type))
        .toString();
  }
}

class TargetDataBuilder implements Builder<TargetData, TargetDataBuilder> {
  _$TargetData _$v;

  String _key;
  String get key => _$this._key;
  set key(String key) => _$this._key = key;

  EntityType _type;
  EntityType get type => _$this._type;
  set type(EntityType type) => _$this._type = type;

  TargetDataBuilder();

  TargetDataBuilder get _$this {
    if (_$v != null) {
      _key = _$v.key;
      _type = _$v.type;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(TargetData other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$TargetData;
  }

  @override
  void update(void updates(TargetDataBuilder b)) {
    if (updates != null) updates(this);
  }

  @override
  _$TargetData build() {
    final _$result = _$v ?? new _$TargetData._(key: key, type: type);
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
