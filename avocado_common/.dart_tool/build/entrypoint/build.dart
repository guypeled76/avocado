import 'package:build_runner_core/build_runner_core.dart' as _i1;
import 'package:built_redux/builder.dart' as _i2;
import 'package:json_serializable/builder.dart' as _i3;
import 'package:built_value_generator/builder.dart' as _i4;
import 'package:source_gen/builder.dart' as _i5;
import 'package:build_config/build_config.dart' as _i6;
import 'dart:isolate' as _i7;
import 'package:build_runner/build_runner.dart' as _i8;

final _builders = <_i1.BuilderApplication>[
  _i1.apply('built_redux|built_redux', [_i2.builtRedux],
      _i1.toDependentsOf('built_redux'),
      hideOutput: true, appliesBuilders: ['source_gen|combining_builder']),
  _i1.apply('json_serializable|json_serializable', [_i3.jsonSerializable],
      _i1.toDependentsOf('json_serializable'),
      hideOutput: true, appliesBuilders: ['source_gen|combining_builder']),
  _i1.apply('built_value_generator|built_value', [_i4.builtValue],
      _i1.toDependentsOf('built_value_generator'),
      hideOutput: true, appliesBuilders: ['source_gen|combining_builder']),
  _i1.apply('source_gen|combining_builder', [_i5.combiningBuilder],
      _i1.toNoneByDefault(),
      hideOutput: false, appliesBuilders: ['source_gen|part_cleanup']),
  _i1.applyPostProcess('source_gen|part_cleanup', _i5.partCleanup,
      defaultGenerateFor: const _i6.InputSet())
];
main(List<String> args, [_i7.SendPort sendPort]) async {
  var result = await _i8.run(args, _builders);
  sendPort?.send(result);
}
