import {
  BASE_URL,
  BLOGS_DESCRIPTION,
  BLOGS_TITLE,
  HOME_IMAGES,
} from 'constants/seo';
import dayjs from 'dayjs';
import BlogsPage from 'feature/blogs/BlogsPage';
import { validateBlogMarkdownMetadata } from 'helpers/markdown';
import type { Metadata } from 'next';
import { cache } from 'react';
import { getFileNames } from 'utils/file';
import { parseMarkdownFile } from 'utils/markdown';

export const metadata: Metadata = {
  title: BLOGS_TITLE,
  description: BLOGS_DESCRIPTION,
  openGraph: {
    title: BLOGS_TITLE,
    description: BLOGS_DESCRIPTION,
    type: 'website',
    siteName: 'Socratone',
    images: HOME_IMAGES,
  },
  alternates: {
    canonical: `${BASE_URL}/blogs`,
  },
};

const getBlogs = cache(async () => {
  const fileNames = getFileNames('content/blogs');
  const fileNamesWithoutExtension = fileNames.map(fileName => {
    return fileName.substring(0, fileName.length - 3);
  });

  const blogs = fileNamesWithoutExtension.map(fileName => {
    const { metadata } = parseMarkdownFile(`content/blogs/${fileName}.md`);
    const validatedMetadata = validateBlogMarkdownMetadata(metadata);

    return {
      fileName,
      ...validatedMetadata,
    };
  });

  blogs.sort((a, b) => {
    const first = dayjs(a.createdAt);
    const second = dayjs(b.createdAt);
    if (first.isAfter(second)) return -1;
    else if (first.isBefore(second)) return 1;
    return 0;
  });

  return blogs;
});

const Page = async () => {
  const blogs = await getBlogs();
  const tags = [...new Set(blogs.map(blog => blog.tag))];
  tags.sort();

  return <BlogsPage type="blog" blogs={blogs} tags={tags} />;
};

export default Page;
