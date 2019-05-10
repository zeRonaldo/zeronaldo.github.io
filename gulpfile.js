var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function(done){
	gulp.src('src/Assets/Styles/sass/**/**.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers:['last 2 versions']
		}))
		.pipe(gulp.dest('src/Assets/Styles/css'));
	done();
});

gulp.task('default', function () {
	gulp.watch('src/Assets/Styles/sass/**/**.scss', ['styles']);
});
