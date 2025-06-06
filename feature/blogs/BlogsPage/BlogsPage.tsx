'use client';

import type { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { HEADER_HEIGHT } from 'components/Header/constants';
import RouteChangeListener from 'components/RouteChangeListener';
import { convertTagToLabel } from 'helpers/blog';
import Link from 'next/link';
import type { ReadonlyURLSearchParams } from 'next/navigation';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import type { BlogsPageProps } from './types';

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

const BlogsPage = ({ blogs, tags, renderItem }: BlogsPageProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const [tagParam, setTagParam] = useState<string | null>(null);
  const [pageParam, setPageParam] = useState<string | null>(null);

  const page = pageParam ? Number(pageParam) : 1;
  /** tag로 필터링된 모든 blogs */
  const filteredBlogs = tagParam
    ? blogs.filter(blog => blog.tag === tagParam)
    : blogs;
  const pageCount = Math.ceil(filteredBlogs.length / COUNT_PER_PAGE);
  const pageFirstBlogIndex = (page - 1) * COUNT_PER_PAGE;
  /** 현재 페이지의 blogs */
  const pagedBlogs = filteredBlogs.slice(
    pageFirstBlogIndex,
    pageFirstBlogIndex + COUNT_PER_PAGE
  );

  const handlePageChange = (_: unknown, page: number) => {
    const searchParams = new URLSearchParams();
    if (tagParam) searchParams.set('tag', tagParam);
    searchParams.set('page', page.toString());
    router.push(`${pathname}?${searchParams.toString()}`);
  };

  const handleRouteChange = useCallback(
    (_: unknown, searchParams: ReadonlyURLSearchParams | null) => {
      const tag = searchParams?.get('tag') ?? null;
      const page = searchParams?.get('page') ?? null;
      setTagParam(tag);
      setPageParam(page);
    },
    []
  );

  return (
    <>
      <RouteChangeListener onChange={handleRouteChange} />

      <Stack
        direction={{ xs: 'column', md: 'column', lg: 'row' }}
        gap={`${GAP}px`}
      >
        {/* mobile & tablet */}
        <Box
          position="relative"
          display={{ xs: 'flex', md: 'flex', lg: 'none' }}
        >
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
                const isSelected = tagParam === tag;
                const isLast = index === array.length - 1;

                return (
                  <Link
                    key={tag}
                    href={isSelected ? `${pathname}` : `${pathname}?tag=${tag}`}
                  >
                    <Chip
                      label={convertTagToLabel(tag)}
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
          <Stack position="sticky" top={HEADER_HEIGHT + CONTAINER_PADDING_TOP}>
            <Link href={pathname}>
              <Typography
                color={tagParam ? 'text.secondary' : 'text.primary'}
                fontWeight={tagParam ? undefined : 500}
              >
                전체보기
              </Typography>
            </Link>
            {tags.map(tag => {
              const isSelected = tagParam === tag;

              return (
                <Link key={tag} href={`${pathname}?tag=${tag}`}>
                  <Typography
                    color={isSelected ? 'text.primary' : 'text.secondary'}
                    fontWeight={isSelected ? 500 : undefined}
                  >
                    {convertTagToLabel(tag)}
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
          {pagedBlogs.map(blog => renderItem(blog))}
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
    </>
  );
};

export default BlogsPage;
