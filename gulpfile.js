const { src, dest } = require('gulp');
const pkg = require('./package.json');

const babel  = require('gulp-babel');
const header = require('gulp-header');
const rename = require('gulp-rename');
const terser = require('gulp-terser');

const { watch, series } = require('gulp');


function banner() {
  var banner = [
  	'/**',
		' * <%= pkg.name %>',
		' * @version v<%= pkg.version %>',
		' * @author <%= pkg.author %>',
		' * @license <%= pkg.license %>',
		' * @see <%= pkg.docs %>',
		' */',
		''
	].join('\n');
	return banner;
}

function javascript(cb) {

  src('src/js/*.js')
    .pipe(babel())
    .pipe(terser({
      compress: true,
      keep_fnames: false,
      mangle: true
    }))
    .pipe(rename({ extname: '.min.js' }))
//    .pipe(header(banner(), { pkg : pkg }))
    .pipe(dest('output/'))
    .pipe(rename({ prefix: 'bookmarklet-' }))
    .pipe(header('javascript:'))
    .pipe(dest('output/'));
    
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

exports.default = function() {
  // You can use a single task
  //watch('src/*.css', css);
  watch('src/js/*.js', javascript );
  // Or a composed task
  //watch('src/js/*.js', series(css, javascript));
};
