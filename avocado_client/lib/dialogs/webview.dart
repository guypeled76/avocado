import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class WebViewDialog extends StatelessWidget {
  WebViewDialog({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Web View"),
        ),
        body: WebView(
          initialUrl: "http://www.google.com",
          javascriptMode: JavascriptMode.unrestricted,

        )
    );
  }
}
