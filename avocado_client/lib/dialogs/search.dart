import 'package:avocado_common/common.dart';
import 'package:flutter/material.dart';

class SearchDialog extends SearchDelegate<int> {
  static final SearchDialog dialog = SearchDialog();

  final SearchBLoC bloc = new SearchBLoC();



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
    this.bloc.query.add(query);
    return StreamBuilder<List<SearchInfo>>(
        stream: this.bloc.results,
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
    this.bloc.query.add(query);
    return StreamBuilder<List<SearchInfo>>(
        stream: this.bloc.results,
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
