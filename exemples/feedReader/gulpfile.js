
const gulp = require('gulp');

var
concat = require('gulp-concat'),            // Merging
del = require('del'),                       // Deleting
templateCache = require('gulp-angular-templatecache'), // concat AngularJs templates in the $templateCcache
replace = require('gulp-replace'); // A string replace plugin for gulp
var Server = require('karma').Server;


var packagePath = 'dist';

/**
 * Créé un fichier app-template.js contenant tous les partials html (templates et vues)
 * Dépose le fichier dans /dist
 */
gulp.task('templateCache',  function (callback) {
    return gulp.src(['src/list/**/*.html','src/detail/**/*.html' ])
        .pipe(templateCache('app-templates.js', { module: 'app' }))
        .pipe(gulp.dest(packagePath ));
});

/**
* concat JS files into one js
*/
gulp.task('concat-js',["templateCache"], function () {
  gulp.src(['src/**/*.js'])
    .pipe(concat('app.js'))  // Merge to 1 file
    .pipe(gulp.dest(packagePath));
});

/**
* Copie les fichiers sur dist.
**/
gulp.task('copy', function () {

    gulp.src(['src/index.html'])
    .pipe(gulp.dest(packagePath + '/'));
    gulp.src(['vendor/**.*'])
    .pipe(gulp.dest(packagePath + '/lib/'));
    gulp.src(['src/*.css'])
    .pipe(gulp.dest(packagePath));        
});

/**
 * Nettoie le répertoire /dist
 */
gulp.task('clean', function (callback) {
  del(packagePath, callback);
});


/**
* Build global du projet
* Lancement de la tache clean avant la tache build
* Lancement des taches copy et concat-js en parallele
*/
gulp.task('build',['clean'],function() {
  gulp.start(['copy', 'concat-js']);
})


/**
 * Reconstruit partiellement a chaud lors de la modification des sources
 */
gulp.task('watch', function () {
    gulp.watch(['src/**/*.js'], ['concat-js']);
    gulp.watch(['src/**/*.html'], ['templateCache']);
    gulp.watch(['src/*.css'], ['copy']);
    gulp.watch(['src/index.html'], ['build']);
});


/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Taches executées par défault lorsqu'on tape gulp sur la console
 */
gulp.task('default', ['build', 'watch']);
