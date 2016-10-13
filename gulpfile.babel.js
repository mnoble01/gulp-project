import gulp from 'gulp'
import path from 'path'
import transform from 'vinyl-transform'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import express from 'express'
import less from 'gulp-less'
import browserSync from 'browser-sync'
import cssmin from 'gulp-cssmin'
import ghPages from 'gulp-gh-pages'
import eslint from 'gulp-eslint'

const SERVER = {
  PORT: 3000,
  ROOT: __dirname + '/dist'
}
const DIRS = {
  SRC: 'src',
  DEST: 'dist'
}
const PATHS = {
  APP_ENTRY: path.join(DIRS.SRC, 'app.js'),
  JS: path.join(DIRS.SRC, '**/*.js'),
  HTML: path.join(DIRS.SRC, '**/*.html'),
  CSS: path.join(DIRS.SRC, '**/*.less'),
  IMAGES: [path.join(DIRS.SRC, 'favicon.ico'), path.join(DIRS.SRC, '*images/**/*')]
}

gulp.task('html', () => {
  return gulp.src(PATHS.HTML)
    .pipe(gulp.dest(DIRS.DEST))
})

gulp.task('css', () => {
  return gulp.src(PATHS.CSS)
    .pipe(less({
      paths: ['.', './node_modules/']
    }))
    .pipe(cssmin())
    .pipe(gulp.dest(DIRS.DEST))
})

gulp.task('images', () => {
  return gulp.src(PATHS.IMAGES)
    .pipe(gulp.dest(DIRS.DEST))
})

gulp.task('js', () => {
  return browserify({
      debug: true,
      paths: [DIRS.SRC]
    })
    .transform(babelify, {presets: ['es2015', 'react']})
    .require(PATHS.APP_ENTRY, {entry: true})
    .bundle()
    .pipe(source(path.basename(PATHS.APP_ENTRY)))
    .pipe(gulp.dest(DIRS.DEST))
})

gulp.task('lint', () => {
  return gulp.src(PATHS.JS)
    .pipe(eslint({
      parser: 'babel-eslint',
      extends: 'airbnb/base'
    }))
    .pipe(eslint.format()) // output results to console
    .pipe(eslint.failOnError())
})

gulp.task('build', ['html', 'js', 'lint', 'css', 'images'])

gulp.task('server', ['build'], () => {
  let app = express()
  app.use('/', express.static(SERVER.ROOT))
  app.listen(SERVER.PORT, function() {
    console.info('Server listening on port 3000')
  })
})

gulp.task('watch', ['build'], () => {
  browserSync({server: {
    baseDir: DIRS.DEST
  }})

  gulp.watch(PATHS.JS, ['js', 'lint', browserSync.reload])
  gulp.watch(PATHS.HTML, ['html', browserSync.reload])
  gulp.watch(PATHS.CSS, ['css', browserSync.reload])
  gulp.watch(PATHS.IMAGES, ['images', browserSync.reload])
})

gulp.task('deploy', ['build'], () => {
  // deploy to gh-pages
  return gulp.src(path.join(DIRS.SRC, '/**/*'))
    .pipe(ghPages())
})
