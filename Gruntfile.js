module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js','app.js'],
      options: {
        jshintrc: true
      }
    },
    casper : {
      acceptance : {
        options : {
          test : true
        },
        files : {
          'test/acceptance/casper-results.xml' : ['test/casperTests/*_test.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-casper');

  grunt.registerTask('default', ['jshint', 'casper']);
};