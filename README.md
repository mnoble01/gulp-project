I found this similar project after I put this starter project together: https://github.com/vigetlabs/gulp-starter/

[![Build Status](https://travis-ci.org/mnoble01/gulp-project.svg?branch=master)](https://travis-ci.org/mnoble01/gulp-project)
[![License]](/src/master/LICENSE)
[![Dependency Status]](https://david-dm.org/mnoble01/gulp-project?type=dev)

# gulp-project
Gulp, Babel, React, Backbone, Browserify, BrowserSync, Express, ESLint, Obfuscation, Minification, Testing

------ | -----
**JavaScript** | [Babel](http://babeljs.io/), [Browserify](http://browserify.org/)
**CSS** | [Less](http://lesscss.org/)
**HTML** | As-is, no preprocessor
<!-- TODO image compression -->
<!-- **Images** | Compression with [imagemin](https://www.npmjs.com/package/gulp-imagemin) -->
<!-- **Icons** | Auto-generated [SVG Sprites](https://github.com/w0rm/gulp-svgstore) and/or [Icon Fonts](https://www.npmjs.com/package/gulp-iconfont) -->
<!-- **Fonts** | Folder and `.sass` mixin for including WebFonts -->
**Live Updating** | [BrowserSync](http://www.browsersync.io/)
**Obfuscation** | JS is uglified with [uglified](https://github.com/terinjokes/gulp-uglify) and CSS is [minified](https://github.com/chilijung/gulp-cssmin)
<!-- **Production Builds** | JS and CSS are [uglified](https://github.com/terinjokes/gulp-uglify) and [minified](http://cssnano.co/), [filename md5 hashing (reving)](https://github.com/sindresorhus/gulp-rev), [file size reporting](https://github.com/jaysalvat/gulp-sizereport), local production [Express](http://expressjs.com/) server for testing builds. -->
**JS Testing** | [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), and [Sinon](http://sinonjs.org/)
<!-- [Karma](http://karma-runner.github.io/0.12/index.html), [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), and [Sinon](http://sinonjs.org/), Example [Travis CI](https://travis-ci.org/) integration -->
**Deployment** | Deploy `dist` folder to gh-pages with [`gulp-gh-pages`](https://github.com/shinnn/gulp-gh-pages), automatically on pushes to `master` branch with [`Travis CI`](https://travis-ci.org/)

# Personalize
- Edit `package.json`
  - `name`
  - `description`
  - `repository.url`
- Add `src/favicon.ico` file
- Edit `src/index.html`
  - `<title>`
  - `favicon.ico` name if changed in previous step
- Edit `README.md`
- Edit `.travis.yml`
  - `env.global.GITHUB_REPO`
  - `env.global.secure`

# Requirements
- 4.x < Node.js < 6.x

# Commands

#### Setup
`npm install`

#### Build
`gulp build`

#### Test
`gulp test`

#### Lint
`gulp lint`

#### Run
`gulp server` runs on localhost:3000

#### Make changes
`gulp watch`

#### Deploy to GH Pages
`gulp deploy` to https://mnoble01.github.io/gulp-project/
