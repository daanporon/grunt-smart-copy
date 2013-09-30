# grunt-smart-copy

> Copy files and folders when the content has really changed based on a md5-hash. In the future this can be extended with other checks. This can come in handy together with the live reload task of grunt-contrib-watch. Somethimes a new file is generated which is identically the same as the previous one and is triggering a live-reload while it isn't needed.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-smart-copy --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-smart-copy');
```

## The "smart_copy" task

### Overview
In your project's Gruntfile, add a section named `smart_copy` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  smart_copy: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### your_target.src
Type: `String`

The path of the file or directory you want to copy.

#### your_target.dest
Type: `String`

The path of the file or directory you want to copy the source to.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
