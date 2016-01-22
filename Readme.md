# Sweet task for Grunt

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

## Installation

This plugin requires Grunt 0.4.

Install `grunt-sweet`:

```
npm install grunt-sweet --save-dev
```

Add somewhere in your `Gruntfile.js`:

```javascript
grunt.loadNpmTasks('grunt-sweet');
```

Inside your `grunt.js` file add a section named `sweet`. See [Sweet documentation](https://github.com/sapegin/sweet#configuration) for available options.


## Using `server` and `watch` tasks

Just add to your `Gruntfile.js` something like this:

```json
watch: {
	sweet: {
		files: ['content/**', 'templates/**'],
		tasks: 'sweet'
	}
},
server: {
	port: 8000,
	base: '.'
}
```


## Handling of `--debug` option

`--debug` command line switch enables debug mode in Sweet.

## Changelog

The changelog can be found in the [Changelog.md](Changelog.md) file.

---

## License

The MIT License, see the included `License.md` file.
