Package.describe({
  summary: "DDP library for CraftyJS",
  internal: true
});

Package.on_use(function (api) {
  api.add_files(['crafty.js','core.js'], //dependencies in order
                ['client']);
  api.export("Crafty",['client']);
});

Package.on_test(function (api) {
  // api.use(['tinytest', 'underscore']);
  // api.use('jsparse', 'client');

  // api.add_files('parser_tests.js',
  //               // Test just on client for faster running; should run
  //               // identically on server.
  //               'client');
  //               //['client', 'server']);
});