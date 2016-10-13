I found this similar project after I put this starter project together: https://github.com/vigetlabs/gulp-starter/

[![Build Status](https://travis-ci.org/mnoble01/gulp-project.svg?branch=master)](https://travis-ci.org/mnoble01/gulp-project)

# gulp-project
Gulp, Babel, React, Backbone, Browserify, BrowserSync, Express, ESLint, Obfuscation, Minification, Testing

#### Personalize
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
  - deploy script in `after_success`
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
