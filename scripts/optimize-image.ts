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
  const [, , inputFolderPath, outputFolderPath, widthParam] = process.argv;

  if (!inputFolderPath) {
    throw new Error('inputFolderPath is not defined.');
  }

  if (!outputFolderPath) {
    throw new Error('outputFolderPath is not defined.');
  }

  if (!widthParam) {
    throw new Error('widthParam is not defined.');
  }

  const width = Number(widthParam);
  if (isNaN(width) || width <= 0) {
    throw new Error(
      'Invalid width value. Please provide a valid number greater than 0.'
    );
  }

  const fullPath = path.join(process.cwd(), inputFolderPath);
  const fileNames = getFilesInFolder(fullPath);
  const imageFileNames = filterImageFileNames(fileNames);

  imageFileNames.forEach(imageFileName =>
    resizeAndConvertImage({
      inputFilePath: path.join(fullPath, imageFileName),
      outputFolderPath,
      width,
    })
  );
};

main();
