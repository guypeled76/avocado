// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'client.dart';

// **************************************************************************
// BuiltReduxGenerator
// **************************************************************************

// ignore_for_file: avoid_classes_with_only_static_members
// ignore_for_file: annotate_overrides

class _$ClientActions extends ClientActions {
  factory _$ClientActions() => new _$ClientActions._();
  _$ClientActions._() : super._();

  final ActionDispatcher<ProfileInfo> set =
      new ActionDispatcher<ProfileInfo>('ClientActions-set');
  final ClientPostActions posts = new ClientPostActions();
  final ClientVideoActions videos = new ClientVideoActions();

  @override
  void setDispatcher(Dispatcher dispatcher) {
    set.setDispatcher(dispatcher);
    posts.setDispatcher(dispatcher);
    videos.setDispatcher(dispatcher);
  }
}

class ClientActionsNames {
  static final ActionName<ProfileInfo> set =
      new ActionName<ProfileInfo>('ClientActions-set');
}
