const gulp = require('gulp');
const livereload = require('gulp-livereload');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const zip = require('gulp-zip');

// postcss plugins
const autoprefixer = require('autoprefixer');
const colorFunction = require('@csstools/postcss-color-mix-function');
const cssnano = require('cssnano');
const customProperties = require('postcss-custom-properties');
const easyimport = require('postcss-easy-import');

// utility function to handle errors
function swallowError(error) {
    console.error(error.toString());
    this.emit('end');
}

// CSS task
function css() {
    const processors = [
        easyimport,
        customProperties,
        colorFunction(),
        autoprefixer({ overrideBrowserslist: ['last 2 versions'] }),
        cssnano()
    ];

    return gulp.src('assets/css/*.css')
        .on('error', swallowError)
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/built/'))
        .pipe(livereload());
}

// Watch task
function watchFiles() {
    livereload.listen(1234);
    gulp.watch('assets/css/**', css);
}

// Zip task
function zipFiles() {
    const targetDir = 'dist/';
    const themeName = require('./package.json').name;
    const filename = `${themeName}.zip`;

    return gulp.src([
        '**',
        '!node_modules/**',
        '!dist/**'
    ])
        .pipe(zip(filename))
        .pipe(gulp.dest(targetDir));
}

// Define tasks
exports.css = css;
exports.watch = gulp.series(css, watchFiles);
exports.zip = gulp.series(css, zipFiles);
exports.build = gulp.series(css, watchFiles);
exports.default = gulp.series(css, watchFiles);
