# Sweet task for Grunt

## Installation

Install `grunt-sweet`:

```
npm install grunt-sweet
```

Add somewhere in your `grunt.js`:

```javascript
grunt.loadNpmTasks('grunt-sweet');
```

Inside your `grunt.js` file add a section named `sweet`. See [Sweet documentation](https://github.com/sapegin/sweet#configuration) for available options.


## Using `server` and `watch` tasks

Just add to your `grunt.js` something like this:

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


---

## License

The MIT License, see the included `License.md` file.
