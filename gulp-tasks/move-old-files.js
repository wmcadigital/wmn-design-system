// Gulp requires
const { src, dest } = require('gulp');

// Local requires
const paths = require('./paths.js');

module.exports.moveOldCSS = () => {
  return src('src/wmnds/assets/old/css/wmnds-components.min.css').pipe(dest(paths.styles.output));
};

module.exports.moveOldReactNative = () => {
  return src('src/wmnds/assets/old/css/react-native/wmnds-components.min.js').pipe(
    dest(`${paths.styles.output}react-native/`)
  );
};

module.exports.moveOldIcons = () => {
  return src('src/wmnds/assets/old/img/wmnds-sprite.min.svg').pipe(dest(paths.svgs.dest)); // move config files to build
};
