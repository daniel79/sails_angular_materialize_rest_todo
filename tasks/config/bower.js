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
		},
		devFont: {
			options: {
				destPrefix: 'assets/font'
			},
			files: require('../pipeline').bowerFontToCopy
		}
	});

	grunt.loadNpmTasks('grunt-bowercopy');
};
