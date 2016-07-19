var config = require('../config');
var testServer = require('../testServer');
var gulp = require('gulp');
var protractor = require('gulp-protractor').protractor;
var webdriverUpdate = require('gulp-protractor').webdrive_update;



gulp.task('webdriverUpdate', webdriverUpdate);

gulp.task('protractor', ['webdriverUpdate'], function(cb) {

  var testFiles = gulp.src(config.rootDir + 'specs/**/*.js', { read:false });

  testServer(config.buildDir, 3000).then(function(server) {
    testFiles.pipe(protractor({
        configFile: config.rootDir + 'test/protractor.conf.js',
        args: ['--baseUrl', 'http://localhost:3000/']
      }))
      .on('error', function (e) { server.close(cb); throw e; })
      .on('end', function () { server.close(cb); });
  });

});

gulp.task('live', function () {
  testServer();
});
