import Stack from '@mui/material/Stack';
import BlogListItem from 'components/BlogListItem';
import { BlogThumbnail } from 'constants/blog';
import dayjs from 'dayjs';
import { validateMarkdownMetadata } from 'helpers/markdown';
import { GetStaticProps, NextPage } from 'next';
import { getFileNames } from 'utils/file';
import { parseMarkdownFile } from 'utils/markdown';

type BlogsProps = {
  blogs: {
    name: string;
    title: string;
    description: string;
    thumbnail: BlogThumbnail;
    createdAt: string;
  }[];
};

export const getStaticProps: GetStaticProps<BlogsProps> = async () => {
  const fileNames = getFileNames('content/blogs');
  const fileNamesWithoutExtension = fileNames.map((fileName) => {
    return fileName.substring(0, fileName.length - 3);
  });

  const blogs = fileNamesWithoutExtension.map((name) => {
    const { metadata } = parseMarkdownFile(`content/blogs/${name}.md`);
    const validatedMetadata = validateMarkdownMetadata(metadata);

    return {
      name,
      title: validatedMetadata.title,
      description: validatedMetadata.description,
      thumbnail: validatedMetadata.thumbnail,
      createdAt: validatedMetadata.createdAt,
    };
  });

  return { props: { blogs } };
};

const Blogs: NextPage<BlogsProps> = ({ blogs }) => {
  return (
    <Stack gap={2}>
      {blogs.map((blog) => (
        <BlogListItem
          key={blog.name}
          title={blog.title}
          description={blog.description}
          thumbnail={blog.thumbnail}
          createdAt={dayjs(blog.createdAt)}
          href={`/blogs/${blog.name}`}
        />
      ))}
    </Stack>
  );
};

export default Blogs;
