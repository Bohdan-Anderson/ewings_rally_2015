module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		minified: {
			files: {
				src: 'application/static/js/main.js',
				dest: 'application/static/js/min/'
			},
			options: {
				sourcemap: true,
				allinone: false
			}
		},


		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'application/static/sass',
					src: ['*.scss'],
					dest: 'application/static/css',
					ext: '.css'
				}]
			}
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'application/static/css',
					src: ['*.css', '!*.min.css'],
					dest: 'application/static/stylesheets',
					ext: '.css'
				}]
			}
		},


		watch: {
			scripts: {
				files: ['application/static/js/main.js'],
				tasks: ['minified'],
				options: {
					spawn: false
				}
			},
			css: {
				files: ['**/*.scss'],
				tasks: ['sass', 'cssmin'] //
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-minified');
	grunt.registerTask('default', ['watch']);
};