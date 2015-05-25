module.exports = function(grunt){
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			src: {
				files: ['src/**/*', 'index.html'],
				tasks: ['sass', 'includereplace', 'concat', 'copy'],
				options: {
					spawn: false
				}
			}
		},
		copy: {
			dist: {
				src: ['js/vendor/**/*.js', 'img/**/*', 'css/style.css.map'],
				dest: 'dist',
				expand: true,
				cwd: 'src'
			}
		},
		sass: {
			dist: {
				files: {
					'src/css/styles.css' : 'src/sass/all.scss'
				}
			}
		},
		concat: {
			css: {
		    	src: ['src/css/base/normalize.css', 'src/css/base/main.css', 'src/css/base/grid.css', 'src/css/base/layout.css', 'src/css/styles.css'],
		    	dest: 'dist/css/styles.css'
		  	},
		  	js: {
		    	src: ['src/js/plugins.js', 'src/js/main.js'],
		    	dest: 'dist/js/concat.js'
		  	}
		},
		includereplace: {
			files: {
		    	src: 'index.html',
		    	dest: 'dist/'
		  	}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-include-replace');
	grunt.registerTask('default', ['sass', 'copy', 'concat', 'includereplace', 'watch']);
}