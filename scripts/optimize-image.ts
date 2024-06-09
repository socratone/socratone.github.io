import path from 'path';
import fs from 'fs';
import { resizeAndConvertImage } from '../utils/image';

const getFilesInFolder = (folderPath: string) => {
  return fs.readdirSync(folderPath);
};

const filterImageFileNames = (fileNames: string[]) => {
  return fileNames.filter(fileName => {
    const splited = fileName.split('.');
    const fileExtension = splited[splited.length - 1];
    return fileExtension === 'png' || fileExtension === 'webp';
  });
};

const main = async () => {
  // 첫 두 개의 인수는 node와 스크립트 경로임
  const [, , inputFolderPath, outputFolderPath, ...widthFlags] = process.argv;

  if (!inputFolderPath) {
    throw new Error('inputFolderPath is not defined.');
  }

  if (!outputFolderPath) {
    throw new Error('outputFolderPath is not defined.');
  }

  const widths: number[] = [];
  for (let i = 0; i < widthFlags.length; i++) {
    if (widthFlags[i] === '--width' && !isNaN(Number(widthFlags[i + 1]))) {
      widths.push(Number(widthFlags[i + 1]));
      i++;
    }
  }

  if (widths.length === 0) {
    throw new Error('At least one width must be specified using --width.');
  }

  const fullPath = path.join(process.cwd(), inputFolderPath);
  const fileNames = getFilesInFolder(fullPath);
  const imageFileNames = filterImageFileNames(fileNames);

  imageFileNames.forEach(imageFileName => {
    widths.forEach(width => {
      resizeAndConvertImage({
        inputFilePath: path.join(fullPath, imageFileName),
        outputFolderPath,
        width,
      });
    });
  });
};

main();
