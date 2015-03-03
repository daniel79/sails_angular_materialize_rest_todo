/**
 * Copy your bower JavaScript files.
 *
 */
 module.exports = function(grunt) {

	grunt.config.set('bowercopy', {
		devJs: {
			options: {
				destPrefix: 'assets/js/vendor'
			},
			files: require('../pipeline').bowerJsToCopy
		}
	});

	grunt.loadNpmTasks('grunt-bowercopy');
};
