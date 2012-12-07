/**
 * Sweet task for Grunt
 *
 * @author Artem Sapegin (http://sapegin.me)
 */

/*jshint node:true */
module.exports = function(grunt) {
	'use strict';

	var sweet = require('swe');

	grunt.registerTask('sweet', 'Sweet: Simplest Web Engine Ever, The', function() {
		this.requiresConfig('sweet');

		var done = this.async(),
			options = grunt.config('sweet');

		// If --debug was specified
		if (grunt.option('debug'))
			options.debug = true;

		grunt.helper('sweet', options, function() {
			done();
		});
	});

	grunt.registerHelper('sweet', function(options, done) {
		sweet.compile(options, function(err) {
			if (err) {
				// @todo In Grunt 0.4 don't fail when watching
				grunt.fatal('Sweet: ' + err);
			}
			else {
				grunt.log.writeln('Compiled.');
			}
			done();
		});
	});
};
