import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BlogListItem from 'components/BlogListItem';
import { GLOBAL_HEADER_HEIGHT } from 'components/GlobalHeader/constants';
import { BlogTag } from 'constants/blog';
import dayjs from 'dayjs';
import { parseBlogTagForLabel } from 'helpers/blog';
import { Metadata, validateMarkdownMetadata } from 'helpers/markdown';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getFileNames } from 'utils/file';
import { parseMarkdownFile } from 'utils/markdown';

type BlogsProps = {
  blogs: ({
    name: string;
  } & Metadata)[];
  tags: BlogTag[];
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

  const tags = [...new Set(blogs.map((blog) => blog.tag))];

  tags.sort();

  return { props: { blogs, tags } };
};

const CONTAINER_PADDING_TOP = 16;
const CATEGORY_WIDTH = 240;
const GAP = 16;
const COUNT_PER_PAGE = 5;

const Blogs: NextPage<BlogsProps> = ({ blogs, tags }) => {
  const router = useRouter();
  const tagQuery = router.query.tag;
  const pageQuery = router.query.page;

  const page = pageQuery ? Number(pageQuery) : 1;
  /** tag로 필터링된 모든 blogs */
  const filteredBlogs = tagQuery
    ? blogs.filter((blog) => blog.tag === tagQuery)
    : blogs;
  const pageCount = Math.ceil(filteredBlogs.length / COUNT_PER_PAGE);
  const pageFirstBlogIndex = (page - 1) * COUNT_PER_PAGE;
  /** 현재 페이지의 blogs */
  const pagedBlogs = filteredBlogs.slice(
    pageFirstBlogIndex,
    pageFirstBlogIndex + COUNT_PER_PAGE
  );

  const handlePageChange = (_: unknown, page: number) => {
    const tag = tagQuery ? `tag=${tagQuery}&` : '';
    router.push(`/blogs?${tag}page=${page}`);
  };

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
          gap={1}
        >
          <Link href="/blogs">
            <Typography>전체보기</Typography>
          </Link>
          {tags.map((tag) => (
            <Link key={tag} href={`/blogs?tag=${tag}`}>
              <Typography
                color="text.primary"
                sx={{ textTransform: 'capitalize' }}
              >
                {parseBlogTagForLabel(tag)}
              </Typography>
            </Link>
          ))}
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
        {pagedBlogs.map((blog) => (
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
        {pageCount > 1 ? (
          <Box display="flex" justifyContent="center">
            <Pagination
              page={page}
              count={pageCount}
              onChange={handlePageChange}
            />
          </Box>
        ) : null}
      </Stack>
    </Stack>
  );
};

export default Blogs;
