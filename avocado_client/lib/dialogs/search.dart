import 'package:flutter/material.dart';

class SearchDialog extends SearchDelegate<int> {
  static final SearchDialog dialog = SearchDialog();

  @override
  List<Widget> buildActions(BuildContext context) {
    return [
      IconButton(
        icon: Icon(Icons.clear),
        onPressed: () {
          query = "";
        },
      )
    ];
  }

  @override
  Widget buildLeading(BuildContext context) {
    return IconButton(
      icon: Icon(Icons.arrow_back),
      onPressed: () {
        close(context, 0);
      },
    );
  }

  @override
  Widget buildResults(BuildContext context) {
    return Container();
  }

  @override
  Widget buildSuggestions(BuildContext context) {
    return Container();
  }

  static show<T>(BuildContext context,{String query = ''}) async {
    return await showSearch<int>(
        context: context, delegate: SearchDialog.dialog);
  }
}
