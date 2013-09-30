/*
 * grunt-smart-copy
 * https://github.com/daanporon/grunt-smart-copy
 *
 * Copyright (c) 2013 Daan Poron
 * Licensed under the MIT license.
 */

'use strict';

var crypto = require('crypto');

module.exports = function(grunt) {

  grunt.registerMultiTask('smart_copy', '> Copy files and folders when the content has really changed based on a md5-hash', function() {
    var config = this.data,
        calcMd5 = function(file) {
          return crypto.createHash('md5').update(grunt.file.read(file)).digest("hex");
        };

    // see if the source file exists
    if (grunt.file.exists(config.src)) {
      if (grunt.file.exists(config.dest)) {
        // we need to compare
        var srcMd5 = calcMd5(config.src),
            destMd5 = calcMd5(config.dest);

        if (srcMd5 !== destMd5) {
          grunt.log.ok('md5 does not match, let\'s copy!');
          grunt.file.copy(config.src, config.dest);
        } else {
          grunt.log.ok('md5 is the same, don\'t copy!');
        }

      } else {
        // just copy
        grunt.log.ok('destination file doesn\'t exist let\'s copy!');
        grunt.file.copy(config.src, config.dest);
      }
    } else {
      grunt.log.error('source file doesn\'t exist');
    }

  });

};
