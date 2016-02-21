var gulp = require('gulp');
//concat files
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('scripts',function(){
	return gulp.src(['src/*.js','./src/**/*.js'])
	.pipe(concat('app.js'))
	.pipe(rename({suffix:'.min'}))
    // .pipe(uglify())
    .pipe(gulp.dest('build/'));
});

gulp.task('watch',function(){
	//watch .js files
	gulp.watch("src/**/*.js",['scripts']);

});

gulp.task('build-css', function(){
	return gulp.src('style/*')
	.pipe(concat('style.css'))
	.pipe(gulp.dest('build/style'));
})

gulp.task('default',['scripts','watch']);
//has to exist for CMD to start