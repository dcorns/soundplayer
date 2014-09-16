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
    },
    express : {
      options : {
        //For overriding defaults
        port: 8080
      },
      dev: {
        //Development server
        options: {
          script: 'app.js'
        }
      },
      prod:{
        //Production server
        options: {
          script: 'app.js'
        }
      },
      test:{
        //Testing server
        options: {
          script: 'app.js'
        }
      }
    },
    watch: {
      express: {
        files: ['**/*.js'],
        tasks: ['express: dev'],
        options: {
          spawn: true
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-casper');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint','express:dev','casper']);
  grunt.registerTask('server', 'express:dev');
  grunt.registerTask('default', ['express:dev', 'watch']);
};