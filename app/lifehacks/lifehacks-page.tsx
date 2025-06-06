'use client';

import BlogListItem from 'components/BlogListItem';
import dayjs from 'dayjs';
import BlogsTemplate from 'feature/blogs/BlogsPage';
import Thumbnail from 'feature/blogs/BlogsPage/Thumbnail';
import type { Blog, Tag } from 'feature/blogs/BlogsPage/types';
import { convertTagToLabel } from 'helpers/blog';

interface LifehacksPageProps {
  lifehacks: Blog[];
  tags: Tag[];
}

const LifehacksPage = ({ lifehacks, tags }: LifehacksPageProps) => {
  return (
    <BlogsTemplate
      parentSlug="lifehacks"
      blogs={lifehacks}
      tags={tags}
      renderItem={lifehack => (
        <BlogListItem
          key={lifehack.fileName}
          title={lifehack.title}
          description={lifehack.description}
          thumbnail={<Thumbnail type="lifehack" name={lifehack.thumbnail} />}
          createdAt={dayjs(lifehack.createdAt)}
          href={`/lifehacks/${lifehack.fileName}`}
          tag={convertTagToLabel(lifehack.tag)}
        />
      )}
    />
  );
};

export default LifehacksPage;
