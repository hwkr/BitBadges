
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    svgmin: {
        dist: {
            cwd: 'svg',
            src: ["*.svg","!template.svg"],
            dest: "svg/",
            expand: true
        }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-svgmin');

  // Tasks.
  grunt.registerTask('default', ['svgmin']);

};