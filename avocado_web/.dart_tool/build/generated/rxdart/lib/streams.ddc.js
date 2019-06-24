define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const streams = Object.create(_root);
  dart.trackLibraries("packages/rxdart/streams.ddc", {
    "package:rxdart/streams.dart": streams
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"streams.ddc.js"}');
  // Exports:
  return {
    streams: streams
  };
});

//# sourceMappingURL=streams.ddc.js.map
