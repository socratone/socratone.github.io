import { getFileNames } from '../utils/file';

export const getBlogPaths = async () => {
  const fileNames = getFileNames('content/blogs');
  const fileNamesWithoutExtension = fileNames.map(fileName => {
    return fileName.substring(0, fileName.length - 3);
  });
  const paths = fileNamesWithoutExtension.map(fileName => {
    return {
      name: fileName,
    };
  });

  return paths;
};
