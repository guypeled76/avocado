import 'dart:convert';

import 'package:angular/di.dart' show PipeTransform, Pipe;


@Pipe('notnull', pure: true)
class NotNull implements PipeTransform {


  const NotNull();

  bool transform(value) => value != null;
}

@Pipe('isnull', pure: true)
class IsNull implements PipeTransform {


  const IsNull();

  bool transform(value) => value == null;
}
