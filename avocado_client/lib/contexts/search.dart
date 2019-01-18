import 'package:avocado_client/models/info.dart';
import 'package:flutter/material.dart';

class SearchContext extends InheritedWidget {


  final SearchStore store;

  SearchContext({ Key key, Widget child, this.store })
      : super(key: key, child: child);

  @override
  bool updateShouldNotify(InheritedWidget oldWidget) {
    return true;
  }

  static SearchContext of(BuildContext context) {
    return context.inheritFromWidgetOfExactType(SearchContext);
  }

  Stream<List<SearchInfo>> search(String wildCard) {
    return store.search(wildCard);
  }

}


abstract class SearchStore {
  Stream<List<SearchInfo>> search(String wildCard);
}