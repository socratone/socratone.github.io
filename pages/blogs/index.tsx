import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BlogListItem from 'components/BlogListItem';
import { GLOBAL_HEADER_HEIGHT } from 'components/GlobalHeader/constants';
import dayjs from 'dayjs';
import { parseBlogTagForLabel } from 'helpers/blog';
import { Metadata, validateMarkdownMetadata } from 'helpers/markdown';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { getFileNames } from 'utils/file';
import { parseMarkdownFile } from 'utils/markdown';

type BlogsProps = {
  blogs: ({
    name: string;
  } & Metadata)[];
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

  return { props: { blogs } };
};

const CONTAINER_PADDING_TOP = 16;
const CATEGORY_WIDTH = 240;
const GAP = 16;

const Blogs: NextPage<BlogsProps> = ({ blogs }) => {
  return (
    <Stack direction="row" gap={`${GAP}px`}>
      <Box
        width={CATEGORY_WIDTH}
        flexShrink={0}
        display={{ xs: 'none', md: 'none', lg: 'block' }}
      >
        <Stack
          position="sticky"
          top={GLOBAL_HEADER_HEIGHT + CONTAINER_PADDING_TOP}
        >
          <Link href="/blogs">
            <Typography>전체보기</Typography>
          </Link>
        </Stack>
      </Box>
      <Stack
        gap={6}
        flexGrow={1}
        maxWidth={{
          xs: '100%',
          md: '100%',
          lg: `calc(100% - ${CATEGORY_WIDTH + GAP}px)`,
        }}
      >
        {blogs.map((blog) => (
          <BlogListItem
            key={blog.name}
            title={blog.title}
            description={blog.description}
            thumbnail={blog.thumbnail}
            createdAt={dayjs(blog.createdAt)}
            href={`/blogs/${blog.name}`}
            tag={parseBlogTagForLabel(blog.tag)}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Blogs;
