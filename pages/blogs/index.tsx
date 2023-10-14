import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BlogListItem from 'components/BlogListItem';
import { GLOBAL_HEADER_HEIGHT } from 'components/GlobalHeader/constants';
import { BlogThumbnail } from 'constants/blog';
import dayjs from 'dayjs';
import { validateMarkdownMetadata } from 'helpers/markdown';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
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

const CONTAINER_PADDING_TOP = 16;

const Blogs: NextPage<BlogsProps> = ({ blogs }) => {
  return (
    <Stack direction="row" gap={2}>
      <Box width={240} flexShrink={0}>
        <Stack
          position="sticky"
          top={GLOBAL_HEADER_HEIGHT + CONTAINER_PADDING_TOP}
        >
          <Link href="/blogs">
            <Typography>전체보기</Typography>
          </Link>
        </Stack>
      </Box>
      <Stack gap={2} flexGrow={1}>
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
    </Stack>
  );
};

export default Blogs;
