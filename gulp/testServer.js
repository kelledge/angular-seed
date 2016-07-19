var express = require('express');
var q = require('q');

function testServer(directory, port) {
  var deferred = q.defer();
  var app = express();

  app.use(express.static(directory));

  var server = app.listen(port, function() {
    deferred.resolve(server);
  });

  return deferred.promise;
}

module.exports = testServer;
