const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

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
gulp.task('imagemin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
);

gulp.task('default', function(){
	return console.log('Gulp is Running...');
});

