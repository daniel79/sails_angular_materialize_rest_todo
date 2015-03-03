module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'clean:vendorAssets',
		'jst:dev',
		'sass:dev',
		'bowercopy:devJs',
		'bowercopy:devFont',
		'copy:dev'
	]);
};
