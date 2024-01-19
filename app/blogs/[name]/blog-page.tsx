'use client';

/*
 * color code style
 * https://highlightjs.org/examples
 */
import 'highlight.js/styles/atom-one-light.css';

import type { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import type { Theme } from '@mui/system';
import { GLOBAL_HEADER_HEIGHT } from 'components/GlobalHeader/constants';
import NotionStyleHtmlContent from 'components/NotionStyleHtmlContent';
import { CODE_BACKGROUND_COLOR } from 'components/NotionStyleHtmlContent/constants';
import TableOfContents from 'components/TableOfContents';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import {
  addCopyButtonEvents,
  CODE_COPY_BUTTON_CLASS,
  removeCopyButtonEvents,
} from 'utils/html-code';
import type { TableOfContent } from 'utils/markdown';

type BlogPageProps = {
  htmlContent: string;
  tableOfContents: TableOfContent[];
};

const copyButtonSx: SxProps<Theme> = {
  [`.${CODE_COPY_BUTTON_CLASS}`]: {
    border: 0,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    padding: 0.5,
    borderRadius: 1.5,
    bgcolor: CODE_BACKGROUND_COLOR,
    position: 'absolute',
    right: 16,
    top: 16,
    ':hover': {
      bgcolor: '#ffbf3d',
    },
  },
};

/** 최상단에 위치한 블로그 제목의 위쪽 여백을 없앤다. */
const firstHeadingSx = {
  'h1:first-of-type': {
    mt: 0,
    pt: 0,
  },
};

const headingScrollOffsetSx = {
  '.heading:target': {
    scrollMarginTop: GLOBAL_HEADER_HEIGHT,
  },
};

const headingAnchorSx = {
  '.heading-anchor': {
    visibility: 'hidden',
    textDecoration: 'none',
  },
  '.heading:hover': {
    '.heading-anchor': {
      visibility: 'visible',
    },
  },
};

/** 콘텐츠가 넘어가는 것을 막는다. */
const preventOverflowSx = {
  overflowX: 'auto',
  maxWidth: '100%',
  width: '100%',
};

const VERTICAL_CONTENT_PADDING = 2;

const BlogPage: NextPage<BlogPageProps> = ({
  htmlContent,
  tableOfContents,
}) => {
  useEffect(() => {
    addCopyButtonEvents();
    return () => {
      removeCopyButtonEvents();
    };
  }, []);

  return (
    <>
      <Container>
        <Box
          display="grid"
          /** 리스트 페이지의 레이아웃과 통일감을 주도록, 240에서 padding 값 2를 뺀다. */
          gridTemplateColumns={{ xs: '1fr', md: '1fr', lg: '238px 1fr' }}
          gap={2}
        >
          {/* Table of contents */}
          {/* 데스크톱 viewport에서만 보인다. */}
          <Box
            display={{ xs: 'none', md: 'none', lg: 'block' }}
            position="sticky"
            top={GLOBAL_HEADER_HEIGHT}
            height={`calc(100vh - ${GLOBAL_HEADER_HEIGHT}px)`}
            sx={{ overflowY: 'auto' }}
          >
            <Box py={VERTICAL_CONTENT_PADDING}>
              {/* TODO: 성능을 위해 모바일인 경우에 렌더링 안 되게 하기 */}
              <TableOfContents contents={tableOfContents} />
            </Box>
          </Box>
          <Box py={VERTICAL_CONTENT_PADDING} sx={preventOverflowSx}>
            <NotionStyleHtmlContent
              html={htmlContent}
              sx={{
                ...copyButtonSx,
                ...firstHeadingSx,
                ...headingAnchorSx,
                ...headingScrollOffsetSx,
              }}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default BlogPage;
