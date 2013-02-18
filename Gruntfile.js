/*jshint node:true*/
module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		sweet: {
			content_dir: 'test/src/content',
			publish_dir: 'test/src/htdocs',
			templates_dir: 'test/src/templates',
			dot_html: true
		},
		nodeunit: {
			all: ['test/sweet_test.js']
		},
		jshint: {
			all: ['Gruntfile.js', 'tasks/*.js', 'test/*.js'],
			options: {
				node: true,
				white: false,
				smarttabs: true,
				eqeqeq: true,
				immed: true,
				latedef: false,
				newcap: true,
				undef: true
			}
		},
		clean: ['test/src/htdocs']
	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['jshint', 'clean', 'sweet', 'nodeunit', 'clean']);

};
