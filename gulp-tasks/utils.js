// Gulp requires
const fs = require('fs');
const { src, dest } = require('gulp');

let build = 'local';
// Function that is ran when buildAll is called to determine buildEnv
// This matches the buildDirs in package.json
switch (process.env.npm_config_build) {
case 'staging':
  build = 'staging';
  break;
case 'live':
  build = 'live';
  break;
case 'netlify':
  build = 'netlify';
  break;
default:
  build = 'local';
  break;
}

module.exports.build = build;
module.exports.packageJson = JSON.parse(fs.readFileSync('./package.json'));
module.exports.getRoot = path => '../'.repeat(path.match(/\//gi).length); // Function which takes in a path and back counts slashes to get to baseRoot dir
