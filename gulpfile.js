const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const prefix = require('gulp-autoprefixer')
const plumber = require('gulp-plumber')
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

// complie scss into css
function style() {
	// 1. where is my scss file
	return gulp.src('./scss/*.scss')
	// 2. pass thet file through sass compiler
	.pipe(sass().on('error',sass.logError))
	// 3. where do I save the compiled CSS?
	.pipe(plumber([{ errorHandler: false }]))
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(prefix())
	.pipe(cleanCSS())
	.pipe(gulp.dest('./css'))
	// 4. stream changes to all browser
	.pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: './'
		},
		port: 4646
	});
	gulp.watch('./scss/**/*.scss', style);
	gulp.watch('./*.html').on('change', reload);
	gulp.watch('./js/**/*.js').on('change', reload);
}
exports.style = style;
exports.w = watch;