'use client';

import BlogListItem from 'components/BlogListItem';
import dayjs from 'dayjs';
import BlogsTemplate from 'feature/blogs/BlogsPage';
import Thumbnail from 'feature/blogs/BlogsPage/Thumbnail';
import type { Blog, Tag } from 'feature/blogs/BlogsPage/types';
import { convertTagToLabel } from 'helpers/blog';

interface DoctrinesPageProps {
  doctrines: Blog[];
  tags: Tag[];
}

const DoctrinesPage = ({ doctrines, tags }: DoctrinesPageProps) => {
  return (
    <BlogsTemplate
      parentSlug="doctrines"
      blogs={doctrines}
      tags={tags}
      renderItem={doctrine => (
        <BlogListItem
          key={doctrine.fileName}
          title={doctrine.title}
          description={doctrine.description}
          thumbnail={<Thumbnail type="doctrine" name={doctrine.thumbnail} />}
          createdAt={dayjs(doctrine.createdAt)}
          href={`/doctrines/${doctrine.fileName}`}
          tag={convertTagToLabel(doctrine.tag)}
        />
      )}
    />
  );
};

export default DoctrinesPage;
