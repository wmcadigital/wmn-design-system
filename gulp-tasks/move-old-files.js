// Gulp requires
const { src, dest } = require('gulp');

// Local requires
const paths = require('./paths.js');

const movingOldCSS = () => {
  return src('src/wmnds/assets/old/css/wmnds-components.min.css').pipe(dest(paths.styles.output));
};

const movingOldReactNativeStyles = () => {
  return src('src/wmnds/assets/old/css/react-native/wmnds-components.min.js').pipe(
    dest(`${paths.styles.output}react-native/`)
  );
};

const movingOldIcons = () => {
  return src('src/wmnds/assets/old/img/wmnds-sprite.min.svg').pipe(dest(paths.svgs.dest)); // move config files to build
};

module.exports.moveOldCSS = movingOldCSS;
module.exports.moveOldReactNative = movingOldReactNativeStyles;
module.exports.moveOldIcons = movingOldIcons;
