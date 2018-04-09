const fs = require('fs');

function writeTreeToDir(tree, dir) {
  fs.writeFile(dir, tree, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

module.exports = writeTreeToDir;
