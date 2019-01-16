import 'package:avocado_client/models/info.dart';
import 'package:avocado_client/models/mocks.dart';
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
    return StreamBuilder<List<SearchInfo>>(
        stream: loadSearch(query),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            if (snapshot.hasError) {
              return new Text(snapshot.error.toString());
            }
            return ListView.builder(
                padding: EdgeInsets.all(0),
                itemCount: snapshot.data.length,
                itemBuilder: (context, index) {
                  return ListTile(
                      title: Text(snapshot.data[index].content),
                  );
                });
          } else {
            return Text("Loading");
          }
        });
  }

  @override
  Widget buildSuggestions(BuildContext context) {
    return StreamBuilder<List<SearchInfo>>(
        stream: loadSearch(query),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            if (snapshot.hasError) {
              return new Text(snapshot.error.toString());
            }
            return ListView.builder(
                padding: EdgeInsets.all(0),
                itemCount: snapshot.data.length,
                itemBuilder: (context, index) {
                  return ListTile(
                    title: Text(snapshot.data[index].content),
                  );
                });
          } else {
            return Text("Loading");
          }
        });
  }

  static show<T>(BuildContext context,{String query = ''}) async {
    return await showSearch<int>(
        context: context, delegate: SearchDialog.dialog);
  }
}
