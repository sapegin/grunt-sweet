/*jshint node:true*/
'use strict';

var fs = require('fs');
var path = require('path');
var grunt = require('grunt');

exports.sweet = {
	test: function(test) {
		grunt.file.expand('test/src/expected/*.html').forEach(function(fileExpected) {
			var filename = path.basename(fileExpected);
			var fileReal = fileExpected.replace('/expected/', '/htdocs/');
			test.ok(fs.existsSync(fileReal), filename + ' file created.');
			test.equal(grunt.file.read(fileExpected), grunt.file.read(fileReal), filename + ' is equal to expected file.');
		});

		test.done();
	}
};
