'use client';

import BlogListItem from 'components/BlogListItem';
import dayjs from 'dayjs';
import BlogsPage from 'feature/blogs/BlogsPage';
import Thumbnail from 'feature/blogs/BlogsPage/Thumbnail';
import type { Blog, Tag } from 'feature/blogs/BlogsPage/types';
import { convertTagToLabel } from 'helpers/blog';

interface DevelopersPageProps {
  blogs: Blog[];
  tags: Tag[];
}

const DevelopersPage = ({ blogs, tags }: DevelopersPageProps) => {
  return (
    <BlogsPage
      blogs={blogs}
      tags={tags}
      renderItem={blog => (
        <BlogListItem
          key={blog.fileName}
          title={blog.title}
          description={blog.description}
          thumbnail={<Thumbnail type="blog" name={blog.thumbnail} />}
          createdAt={dayjs(blog.createdAt)}
          href={`/blogs/${blog.fileName}`}
          tag={convertTagToLabel(blog.tag)}
        />
      )}
    />
  );
};

export default DevelopersPage;
