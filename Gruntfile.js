module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ['rectangle.js', 'util.js'],
        dest: 'dist/bundle.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);
};