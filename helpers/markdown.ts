import { BlogThumbnail } from 'constants/blog';
import { isStringInEnum } from 'utils/enum';

export const validateMarkdownMetadata = (metadata: any) => {
  if (typeof metadata.title !== 'string') {
    throw new Error('Invalid title.');
  }

  if (typeof metadata.description !== 'string') {
    throw new Error('Invalid description.');
  }

  if (!isStringInEnum(metadata.thumbnail, BlogThumbnail)) {
    throw new Error('Invalid thumbnail.');
  }
};
