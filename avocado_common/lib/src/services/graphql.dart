
import 'dart:convert';
import 'dart:io';
import 'package:http/http.dart' as http;

abstract class GraphQLService {

  static const String _HOST = "http://avocado-services.appspot.com/";

  static final Uri _loginUrl = Uri.parse("${_HOST}login");

  static final Uri _queryUrl = Uri.parse("${_HOST}query");

  final Map<String, Cookie> _cookies = Map();

  String _cookie = null;

  get cookie => _cookie;

  void login(String idToken) async {

    var request = http.Request('POST', _loginUrl);
    request.bodyFields = {'id_token': idToken};

    var response = await request.send();
    int code = response.statusCode;

    bool hasSet = false;

    response.headers.forEach((key, value) {
      if (key.toLowerCase() == HttpHeaders.setCookieHeader) {
        var cookie = Cookie.fromSetCookieValue(value);
        _cookies[cookie.name] = cookie;
        hasSet = true;
      }
    });

    if(hasSet) {
      _generateCookie();
    }
  }

  void _generateCookie() {
    _cookie = _cookies.values.map((cookie) => "${cookie.name}=${cookie.value}").join("; ");
  }


  Future<String> query(String document) async {

    var body = json.encode({
      'operationName':null,
      'query' : document
    });


    var response = await http.post(_queryUrl, body: body, headers: {
      HttpHeaders.cookieHeader:_cookie,
      HttpHeaders.contentTypeHeader: 'application/json',
      HttpHeaders.acceptHeader: 'application/json',
    });

    return response.body;
  }


}