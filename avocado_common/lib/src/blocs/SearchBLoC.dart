
import 'package:avocado_common/common.dart';
import 'package:avocado_common/src/models/mocks.dart';
import 'package:rxdart/rxdart.dart';

class SearchBLoC extends BaseBLoC{

  BehaviorSubject<String> _query = new BehaviorSubject.seeded("");

  Sink<String> get query {
    return _query;
  }

  Stream<List<SearchInfo>> get results {
    return null;//_query.debounce(Duration(microseconds: 50)).asyncExpand(loadSearch);
  }
}