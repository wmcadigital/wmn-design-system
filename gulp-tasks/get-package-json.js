// Gulp requires
const fs = require('fs');

module.exports = JSON.parse(fs.readFileSync('./package.json'));
