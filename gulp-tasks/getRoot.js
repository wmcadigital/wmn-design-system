module.exports = path => '../'.repeat(path.match(/\//gi).length); // Function which takes in a path and back counts slashes to get to baseRoot dir
