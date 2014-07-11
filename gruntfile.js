module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'js/scripts.js' : [	'vendor/html5shiv/dist/html5shiv.js',
										'vendor/smartmenus/src/jquery.smartmenus.js',
										'_/components/js/*.js'
										]
				} // files
			}, // target
			options: {
				preserveComments: 'some'
			}
		}, //uglify
		compass: {
			dev: {
				options: {
					bundleExec: true,
					config: 'dev.rb'
				} // options
			}, // dev
			production: {
				options: {
					bundleExec: true,
					config: 'production.rb'
				} // options
			} // dev
		}, //compass
		watch: {
			options: {livereload: true },
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']
			}, // scripts
			sass: {
				files:['_/components/sass/*.scss'],
				tasks:['compass:dev']
			}, // sass
			html: {
				files: ['*.html']
			} //html
		} //watch
	})  // initConfig
	// setup watch as the default task.. just run  > grunt
	grunt.registerTask('default','watch');
} //exports