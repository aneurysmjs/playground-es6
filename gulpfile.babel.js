'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';

gulp.task("default", (o) => {

   console.log('--- o ---');
   console.dir(this);

  /* return gulp.src("src/!**!/!*.js")
      .pipe(babel())
      .pipe(gulp.dest("dist"));*/

});