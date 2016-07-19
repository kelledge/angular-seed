/*
*  This file is a step up from the previous work, but still has plenty of room
*  for improvements.
*/

var path = require('path');

var rootDir = path.normalize(path.join(__dirname, '../'));
var sourceDir = rootDir + 'app/';
var buildDir = rootDir + 'build/';

module.exports = {

  rootDir: rootDir,
  sourceDir: sourceDir,
  buildDir: buildDir,

  scripts: {
    src: [
      sourceDir + 'js/**/*.js',
    ],
    dest: buildDir + 'js/',
    test: sourceDir + 'js/**/*_test.js',
    gulp: 'gulp/**/*.js'
  },

  styles: {
    src: sourceDir + 'styles/*.css',
    dest: buildDir + 'styles/'
  },

  //TODO: Dedup the members
  views: {
    index: sourceDir + 'index.html',
    src: sourceDir + 'js/**/*.html',
    dest: sourceDir + 'js/',
    watch: [sourceDir + 'index.html', sourceDir + 'js/**/*.html']
  },

  images: {
    src: sourceDir + 'img/**/*',
    dest: buildDir + 'img/'
  },

  fonts: {
    src: [sourceDir + 'fonts/**/*'],
    dest: buildDir + 'fonts'
  },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js'
  }
};
