/*
 * grunt-smart-copy
 * https://github.com/daanporon/grunt-smart-copy
 *
 * Copyright (c) 2013 Daan Poron
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    smart_copy: {
      new: {
        src: 'test/fixtures/new',
        dest: 'tmp/new'
      },
      existing: {
        src: 'test/fixtures/existing',
        dest: 'tmp/existing'
      },
      changed: {
        src: 'test/fixtures/changed',
        dest: 'tmp/changed'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('setup_tests', function() {
    var done = this.async(),
        fs = require('fs');

    grunt.stats = {};

    grunt.file.copy('test/fixtures/existing', 'tmp/existing');
    grunt.stats.existing = fs.lstatSync('tmp/existing');

    var changed = grunt.file.read('test/fixtures/changed');
    grunt.file.write('tmp/changed', changed + '123');
    grunt.stats.changed = fs.lstatSync('tmp/changed');

    setTimeout(function() {
      done();
    }, 1000);
  });

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'setup_tests', 'smart_copy', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
