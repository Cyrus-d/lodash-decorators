'use strict';

import config from '../config';
import gulp from 'gulp';
import {argv} from 'yargs';
import _ from 'lodash';

export default gulp.task('watch', ['jshint'], () => {
  gulp.watch(config.paths.lint, ['jshint']);
});
