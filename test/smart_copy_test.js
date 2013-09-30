'use strict';

var grunt = require('grunt'),
    fs = require('fs');

exports.smart_copy = {
  setUp: function(done) {

    done();
  },
  new: function(test) {
    test.expect(1);

    test.equal(grunt.file.read('tmp/new'), grunt.file.read('test/fixtures/new'), 'the file should have the same content');

    test.done();
  },
  existing: function(test) {
    test.expect(2);

    test.equal(grunt.file.read('tmp/existing'), grunt.file.read('test/fixtures/existing'), 'the file should have the same content');
    test.equal(fs.lstatSync('tmp/existing').mtime.getTime(), grunt.stats.existing.mtime.getTime(), 'the file should not have been modified');

    test.done();
  },
  changed: function(test) {
    test.expect(2);

    test.equal(grunt.file.read('tmp/changed'), grunt.file.read('test/fixtures/changed'), 'the file should have the same content');
    test.notEqual(fs.lstatSync('tmp/changed').mtime.getTime(), grunt.stats.changed.mtime.getTime(), 'the file should have been modified');

    test.done();
  }
};
