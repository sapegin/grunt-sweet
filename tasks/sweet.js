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

		compile(options, done);
	});

	function compile(options, done) {
		sweet.compile(options, function(err) {
			if (err) {
				grunt.log.error(err);
				grunt.fail.warn('Sweet failed to compile.');
			}
			else {
				grunt.log.writeln('Compiled.');
			}
			done();
		});
	}
};
