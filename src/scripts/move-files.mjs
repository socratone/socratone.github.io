/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';

const sourceDir = './out';
const targetDir = './../';

fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach((file) => {
    const sourceFile = path.join(sourceDir, file);
    const targetFile = path.join(targetDir, file);

    fs.rename(sourceFile, targetFile, (err) => {
      if (err) {
        console.error(`Error moving file ${file}:`, err);
      } else {
        console.log(`Moved file ${file} to ${targetDir}`);
      }
    });
  });
});
