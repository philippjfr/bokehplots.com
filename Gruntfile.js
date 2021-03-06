
module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({

    sass: {
      options: {
        sourceMap: false,
        outputStyle: 'compressed',
        includePaths: ['theme/static/scss/bourbon', 'theme/static/scss/neat', 'theme/static/scss/base']
      },
      dist: {
        files: {
          'theme/static/css/main.css': 'theme/static/scss/main.scss'
        }
      }
    },

    shell: {
      html: {
        command: 'pelican content -o output'
      },
      publish: {
        command: 'pelican content -o output -s publishconf.py'
      },
      compress_images: {
        command: 'optipng theme/static/images/*.png'
      }
    },

    watch: {
      files: ['content/**/*.*', 'theme/templates/**/*.*', 'theme/static/scss/*.*', 'theme/static/scss/**/*.*'],
      tasks: ['sass:dist', 'build'],
      options: {
        livereload: 35729,
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'theme/static/',
        src: ['**'],
        dest: 'output/static/',
      },
    },

    connect: {
      server: {
        options: {
          port: 8003,
          livereload: 35729,
          base: 'output',
          open: true,
          debug: false
        }
      }
    },

    clean: {
      build: {
        src: ["output/*"]
      }
    }

  });

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('build', ['clean', 'sass:dist', 'shell:html', ]);
  grunt.registerTask('serve', ['build', 'connect:server', 'watch']);
  grunt.registerTask('deploy', ['clean', 'shell:compress_images', 'sass:dist', 'shell:publish']);
  grunt.registerTask('compress_images', ['shell:compress_images']);

};
