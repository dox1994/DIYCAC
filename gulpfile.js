var gulp = require('gulp');

gulp.task('copy', function(){
    gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('app/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('app/css/*/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('app/js/vendors/*')
        .pipe(gulp.dest('dist/js'));
    gulp.src('app/js/*')
        .pipe(gulp.dest('dist/js'));
    gulp.src('app/images/*')
        .pipe(gulp.dest('dist/images'));
    gulp.src('app/images/svg/**')
        .pipe(gulp.dest('dist/images/svg'));
    gulp.src('app/images/people/*')
        .pipe(gulp.dest('dist/images/people'));
    gulp.src('app/images/team/*')
        .pipe(gulp.dest('dist/images/team'));
});

gulp.task('default', ['copy']);