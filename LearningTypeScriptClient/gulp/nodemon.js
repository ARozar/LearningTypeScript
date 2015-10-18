'use strict';

var gulp = require('gulp');
var nodemon  = require('gulp-nodemon');

gulp.task('nodemon', function () {
    nodemon({script: 'server.js'
            , ext: 'js html'});
        
//   return  gulp.src('dist/**/*.js')
//     .pipe(nodemon({
//                     script: 'server.js'
//                   , ext: 'js html'}));

})