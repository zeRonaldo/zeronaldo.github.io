var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function(done){
	gulp.src('sass/**/**.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers:['last 2 versions']
		}))
		.pipe(gulp.dest('./css'));
	done();
});

gulp.task('default', function () {
	gulp.watch('sass/**/**.scss', ['styles']);
});
