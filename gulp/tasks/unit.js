var config = require('../config');
var gulp = require('gulp');
var path = require('path');
var Server = require('karma').Server;

// TODO: Sometimes this task just hangs ... but only when you're not using strace
gulp.task('unit', function(done) {

  new Server({
    // TODO: Crazy paths. Define something absolute project root?
    configFile: path.resolve(__dirname, '../..', config.test.karma),
    singleRun: true
  }, function(code) {
    if (code == 1) {
      done('Tests failed'); // This causes the test gulp task to 'fail'
    } else {
      done();
    }
  }).start();

});
