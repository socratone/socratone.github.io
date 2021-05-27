const fse = require('fs-extra')
const path = require('path');

const srcDir = path.join(__dirname, 'src')
const destDir = path.join(__dirname, 'build')

// To copy a folder or file
fse.moveSync(srcDir, destDir, { overwrite: false }, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log('success!');
  }
});
