const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
	// 1. where is my css file 
	return gulp.src('./src/scss/**/*.scss')
	// 2. pass that file through sass compiler
	.pipe(sass().on('error', sass.logError))
	// 3. where do I save that complied CSS?
	.pipe(gulp.dest('build/css'))
	// 4.) stream changes to all browserSync
	.pipe(browserSync.stream())
}	

function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./src/scss/**/*.scss', style);
	gulp.watch('./*.html').on('change',browserSync.reload);
	gulp.watch('./src/js/**/*.js').on('change',browserSync.reload);
}

exports.style = style; 
exports.watch = watch;

