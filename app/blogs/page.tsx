import {
  BASE_URL,
  BLOGS_DESCRIPTION,
  BLOGS_TITLE,
  HOME_IMAGES,
} from 'constants/seo';
import dayjs from 'dayjs';
import { validateMarkdownMetadata } from 'helpers/markdown';
import type { Metadata } from 'next';
import { cache } from 'react';
import { getFileNames } from 'utils/file';
import { parseMarkdownFile } from 'utils/markdown';

import BlogsPage from './blogs-page';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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
    canonical: '/blogs',
  },
};

const getBlogs = cache(async () => {
  const fileNames = getFileNames('content/blogs');
  const fileNamesWithoutExtension = fileNames.map(fileName => {
    return fileName.substring(0, fileName.length - 3);
  });

  const blogs = fileNamesWithoutExtension.map(name => {
    const { metadata } = parseMarkdownFile(`content/blogs/${name}.md`);
    const validatedMetadata = validateMarkdownMetadata(metadata);

    return {
      name,
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

  return <BlogsPage blogs={blogs} tags={tags} />;
};

export default Page;
