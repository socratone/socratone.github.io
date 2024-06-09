import type { BlogTag, LifehackTag } from 'constants/blog';
import type { Metadata } from 'helpers/markdown';

export type BlogsPageProps = {
  type: 'blog';
  blogs: (Metadata<'blog'> & {
    fileName: string;
  })[];
  tags: BlogTag[];
};

export type LifehacksPageProps = {
  type: 'lifehack';
  blogs: (Metadata<'lifehack'> & {
    fileName: string;
  })[];
  tags: LifehackTag[];
};
