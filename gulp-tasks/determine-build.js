let build = 'local';

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

// Function that is ran when buildAll is called to determine buildEnv
// This matches the buildDirs in package.json
module.exports = build;
