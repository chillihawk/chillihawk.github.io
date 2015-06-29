var gulp = require('gulp');
var replace = require('gulp-replace-task');

gulp.task('default', function() {
	
});

gulp.task('images', function(){
	gulp.src('**\*.html')
		.pipe(replace({
			patterns: [
				{
					match:'?v=4ca203a46b',
					replacement:''
				},
				{
					match:'/assets/public/jquery',
					replacement:'src="https://code.jquery.com/jquery-2.1.4.min.js"'
				}
			]
		}))
		.pipe(gulp.dest('build'));
});