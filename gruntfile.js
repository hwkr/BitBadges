
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    svgmin: {
        dist: {
            cwd: 'svg',
            src: "**/*.svg",
            dest: "dist/",
            ext: ".min.svg",
            expand: true
        }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-svgmin');

  // Tasks.
  grunt.registerTask('default', ['svgmin']);

};