import type { LifehackTag } from 'constants/blog';
import { BlogTag } from 'constants/blog';

import type { BlogsPageProps, LifehacksPageProps } from './types';

export const isBlogsPage = (
  props: BlogsPageProps | LifehacksPageProps
): props is BlogsPageProps => {
  return props.type === 'blogs';
};

export const isBlogTag = (tag: BlogTag | LifehackTag): tag is BlogTag => {
  return Object.values<BlogTag>(BlogTag).includes(tag as BlogTag);
};
