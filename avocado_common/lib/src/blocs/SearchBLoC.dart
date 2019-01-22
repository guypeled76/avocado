
import 'package:avocado_common/common.dart';
import 'package:avocado_common/src/models/mocks.dart';
import 'package:rxdart/rxdart.dart';

class SearchBLoC {

  BehaviorSubject<String> _query = new BehaviorSubject(seedValue: "");

  Sink<String> get query {
    return _query;
  }

  Stream<List<SearchInfo>> get results {
    return _query.debounce(Duration(microseconds: 50)).asyncExpand(loadSearch);
  }
}