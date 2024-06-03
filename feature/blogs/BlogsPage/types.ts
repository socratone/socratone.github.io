import type { BlogTag, LifehackTag } from 'constants/blog';
import type { Metadata } from 'helpers/markdown';

export type BlogType = 'blogs' | 'lifehacks';

export type BlogsPageProps = {
  type: 'blogs';
  blogs: (Metadata<'blogs'> & {
    fileName: string;
  })[];
  tags: BlogTag[];
};

export type LifehacksPageProps = {
  type: 'lifehacks';
  blogs: (Metadata<'lifehacks'> & {
    fileName: string;
  })[];
  tags: LifehackTag[];
};
