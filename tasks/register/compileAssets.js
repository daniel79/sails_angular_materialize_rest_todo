module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'clean:vendorJs',
		'jst:dev',
		'sass:dev',
		'bowercopy:devJs',
		'copy:dev'
	]);
};
