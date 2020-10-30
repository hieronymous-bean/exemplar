var gulp = require('gulp');

// delete all previously-created vendor css and js files //
gulp.task('cleanFolders', () => {
    return del(['./src/assets/public/*']);
});
// // //





gulp.task('defaultBuild', gulp.series('cleanFolders'));