const gulp = require('gulp');
const image = require('gulp-image');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

/*
	-- Top Level Functions --
	gulp.task - Define tasks
	gulp.src - Point to files to use
	gulp.build - Point to folder to output
	gulp.watch - Watch files and folders for changes
	gulp.dest - Where to piper files and folders
*/

// Logs message
gulp.task('message', function(){
	return console.log('Gulp is Running...');
});

// Copy all HTML files
gulp.task('copyHTML', function(){
	gulp.src('src/*.html')
		.pipe(gulp.dest('build'));
});

// Optimized Images

gulp.task('image', function () {
	gulp.src('src/images/*')
	  .pipe(image())
	  .pipe(gulp.dest('build/images'));
});

// Minify JS
gulp.task('minify', function(){
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});

// Compile Sass
gulp.task('sass', function(){
	gulp.src('src/sass/*.scss')
		.pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('build/css'));
});

gulp.task('default', ['message', 'copyHTML', 'image', 'minify', 'sass']);

