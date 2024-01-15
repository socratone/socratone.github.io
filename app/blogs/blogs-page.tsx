'use client';

import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BlogListItem from 'components/BlogListItem';
import { GLOBAL_HEADER_HEIGHT } from 'components/GlobalHeader/constants';
import { BlogTag } from 'constants/blog';
import dayjs from 'dayjs';
import { convertBlogTagForLabel } from 'helpers/blog';
import { Metadata } from 'helpers/markdown';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

type PageProps = {
  blogs: ({
    name: string;
  } & Metadata)[];
  tags: BlogTag[];
};

const CONTAINER_PADDING_TOP = 16;
const CATEGORY_WIDTH = 240;
const GAP = 16;
const COUNT_PER_PAGE = 5;

const hiddenScrollSx: SxProps = {
  /* Hide scrollbar for Chrome, Safari and Opera */
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  msOverflowStyle: 'none' /* IE and Edge */,
  scrollbarWidth: 'none' /* Firefox */,
};

const leftGradientSx: SxProps = {
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-24px',
    height: '100%',
    width: '24px',
    background:
      'linear-gradient(-90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
  },
};

const rightGradientSx: SxProps = {
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: '-24px',
    height: '100%',
    width: '24px',
    background:
      'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
  },
};

const BlogsPage: NextPage<PageProps> = ({ blogs, tags }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tagQuery = searchParams.get('tag');
  const pageQuery = searchParams.get('page');

  const page = pageQuery ? Number(pageQuery) : 1;
  /** tag로 필터링된 모든 blogs */
  const filteredBlogs = tagQuery
    ? blogs.filter(blog => blog.tag === tagQuery)
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
    <Stack
      direction={{ xs: 'column', md: 'column', lg: 'row' }}
      gap={`${GAP}px`}
    >
      {/* mobile & tablet */}
      <Box position="relative" display={{ xs: 'flex', md: 'flex', lg: 'none' }}>
        <Box
          mx={-3}
          px={3}
          /** 사용자의 스크롤 영역을 넓힌다. */
          py={1}
          my={-1}
          overflow="auto"
          sx={{
            ...hiddenScrollSx,
            ...leftGradientSx,
            ...rightGradientSx,
          }}
        >
          <Stack direction="row" gap={1}>
            {tags.map((tag, index, array) => {
              const isSelected = tagQuery === tag;
              const isLast = index === array.length - 1;

              return (
                <Link
                  key={tag}
                  href={isSelected ? '/blogs' : `/blogs?tag=${tag}`}
                >
                  <Chip
                    label={convertBlogTagForLabel(tag)}
                    color={isSelected ? 'primary' : 'default'}
                    sx={{
                      paddingY: 2,
                      cursor: 'pointer',
                      /** last item right margin */
                      mr: isLast ? 3 : undefined,
                    }}
                  />
                </Link>
              );
            })}
          </Stack>
        </Box>
      </Box>

      {/* desktop */}
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
            <Typography
              color={tagQuery ? 'text.secondary' : 'text.primary'}
              fontWeight={tagQuery ? undefined : 500}
            >
              전체보기
            </Typography>
          </Link>
          {tags.map(tag => {
            const isSelected = tagQuery === tag;

            return (
              <Link key={tag} href={`/blogs?tag=${tag}`}>
                <Typography
                  color={isSelected ? 'text.primary' : 'text.secondary'}
                  fontWeight={isSelected ? 500 : undefined}
                >
                  {convertBlogTagForLabel(tag)}
                </Typography>
              </Link>
            );
          })}
        </Stack>
      </Box>

      {/* list */}
      <Stack
        gap={6}
        flexGrow={1}
        maxWidth={{
          xs: '100%',
          md: '100%',
          lg: `calc(100% - ${CATEGORY_WIDTH + GAP}px)`,
        }}
      >
        {pagedBlogs.map(blog => (
          <BlogListItem
            key={blog.name}
            title={blog.title}
            description={blog.description}
            thumbnail={blog.thumbnail}
            createdAt={dayjs(blog.createdAt)}
            href={`/blogs/${blog.name}`}
            tag={convertBlogTagForLabel(blog.tag)}
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

export default BlogsPage;