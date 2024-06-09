import {
  BlogTag,
  BlogThumbnail,
  LifehackTag,
  LifehackThumbnail,
} from 'constants/blog';
import { isStringInEnum } from 'socratone-utils';

type ThumbnailFor<T> = T extends 'blog' ? BlogThumbnail : LifehackThumbnail;
type TagFor<T> = T extends 'blog' ? BlogTag : LifehackTag;

export type Metadata<T extends 'blog' | 'lifehack'> = {
  title: string;
  description: string;
  thumbnail: ThumbnailFor<T>;
  tag: TagFor<T>;
  createdAt: string;
};

export const validateBlogMarkdownMetadata = (metadata: any) => {
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

  if (!isStringInEnum(metadata.tag, BlogTag)) {
    throw new Error('Invalid tag.');
  }

  return metadata as Metadata<'blog'>;
};

export const validateLifehackMarkdownMetadata = (metadata: any) => {
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

  if (!isStringInEnum(metadata.thumbnail, LifehackThumbnail)) {
    throw new Error('Invalid thumbnail.');
  }

  if (!isStringInEnum(metadata.tag, LifehackTag)) {
    throw new Error('Invalid tag.');
  }

  return metadata as Metadata<'lifehack'>;
};
