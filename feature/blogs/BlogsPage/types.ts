import type {
  BlogTag,
  BlogThumbnail,
  DoctrineTag,
  DoctrineThumbnail,
  LifehackTag,
  LifehackThumbnail,
} from 'constants/blog';

export type Tag = BlogTag | DoctrineTag | LifehackTag;
type Thumbnail = BlogThumbnail | DoctrineThumbnail | LifehackThumbnail;

export type Blog = {
  fileName: string;
  title: string;
  description: string;
  createdAt: string;
  thumbnail: Thumbnail;
  tag: Tag;
};

export interface BlogsPageProps {
  parentSlug: string;
  blogs: Blog[];
  tags: Tag[];
  renderItem: (blog: Blog) => React.ReactNode;
}
