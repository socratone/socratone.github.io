import { BlogThumbnail } from 'constants/blog';
import { isStringInEnum } from 'socratone-utils';

export type Metadata = {
  title: string;
  description: string;
  thumbnail: BlogThumbnail;
  createdAt: string;
};

export const validateMarkdownMetadata = (metadata: any) => {
  if (typeof metadata.title !== 'string') {
    throw new Error('Invalid title.');
  }

  if (typeof metadata.description !== 'string') {
    throw new Error('Invalid description.');
  }

  if (
    typeof metadata.createdAt !== 'string' ||
    new Date(metadata.createdAt).toString() === 'Invalid Date'
  ) {
    throw new Error('Invalid createdAt.');
  }

  if (!isStringInEnum(metadata.thumbnail, BlogThumbnail)) {
    throw new Error('Invalid thumbnail.');
  }

  return metadata as Metadata;
};
