import 'package:built_redux/built_redux.dart';
import 'package:avocado_common/common.dart';

part 'posts.g.dart';


abstract class PostActions extends ReduxActions {

  PostActions._();
  factory PostActions() => new _$PostActions();

  ActionDispatcher<PostInfo> update;

}