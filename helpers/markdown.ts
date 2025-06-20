import {
  BlogTag,
  BlogThumbnail,
  DoctrineTag,
  DoctrineThumbnail,
  LifehackTag,
  LifehackThumbnail,
  MusicTag,
} from 'constants/blog';
import { isStringInEnum } from 'socratone-utils';

type ThumbnailMap = {
  blog: BlogThumbnail;
  lifehack: LifehackThumbnail;
  doctrine: DoctrineThumbnail;
};

type TagMap = {
  blog: BlogTag;
  lifehack: LifehackTag;
  doctrine: DoctrineTag;
};

type ThumbnailFor<T extends keyof ThumbnailMap> = ThumbnailMap[T];
type TagFor<T extends keyof TagMap> = TagMap[T];

type Metadata<T extends 'blog' | 'doctrine' | 'lifehack'> = {
  title: string;
  description: string;
  thumbnail: ThumbnailFor<T>;
  tag: TagFor<T>;
  createdAt: string;
};

type MusicMetadata = {
  title: string;
  artist: string;
  videoId: string;
  startTime?: string;
  endTime?: string;
  tag: MusicTag;
  createdAt: string;
};

const validateCommonMetadata = (metadata: any) => {
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
};

export const validateBlogMarkdownMetadata = (metadata: any) => {
  validateCommonMetadata(metadata);

  if (!isStringInEnum(metadata.thumbnail, BlogThumbnail)) {
    throw new Error('Invalid thumbnail.');
  }

  if (!isStringInEnum(metadata.tag, BlogTag)) {
    throw new Error('Invalid tag.');
  }

  return metadata as Metadata<'blog'>;
};

export const validateLifehackMarkdownMetadata = (metadata: any) => {
  validateCommonMetadata(metadata);

  if (!isStringInEnum(metadata.thumbnail, LifehackThumbnail)) {
    throw new Error('Invalid thumbnail.');
  }

  if (!isStringInEnum(metadata.tag, LifehackTag)) {
    throw new Error('Invalid tag.');
  }

  return metadata as Metadata<'lifehack'>;
};

export const validateDoctrineMarkdownMetadata = (metadata: any) => {
  validateCommonMetadata(metadata);

  if (!isStringInEnum(metadata.thumbnail, DoctrineThumbnail)) {
    throw new Error('Invalid thumbnail.');
  }

  if (!isStringInEnum(metadata.tag, DoctrineTag)) {
    throw new Error('Invalid tag.');
  }

  return metadata as Metadata<'doctrine'>;
};

export const validateMusicMarkdownMetadata = (metadata: any) => {
  if (typeof metadata.title !== 'string') {
    throw new Error('Invalid title.');
  }

  if (typeof metadata.artist !== 'string') {
    throw new Error('Invalid artist.');
  }

  if (
    typeof metadata.createdAt !== 'string' ||
    new Date(metadata.createdAt).toString() === 'Invalid Date'
  ) {
    throw new Error('Invalid createdAt.');
  }

  if (!isStringInEnum(metadata.tag, MusicTag)) {
    throw new Error('Invalid tag.');
  }

  if (typeof metadata.videoId !== 'string') {
    throw new Error('Invalid videoId.');
  }

  return metadata as MusicMetadata;
};
