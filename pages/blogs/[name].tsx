// color code style
// https://highlightjs.org/examples
import 'highlight.js/styles/atom-one-light.css';

import { SxProps, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Theme } from '@mui/system';
import { GLOBAL_HEADER_HEIGHT } from 'components/GlobalHeader/constants';
import Meta from 'components/Meta';
import NotionStyleHtmlContent from 'components/NotionStyleHtmlContent';
import { CODE_BACKGROUND_COLOR } from 'components/NotionStyleHtmlContent/constants';
import { Metadata, validateMarkdownMetadata } from 'helpers/markdown';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import { getFileNames } from 'utils/file';
import {
  addColorToCode,
  addCopyButtonEvents,
  addCopyButtonToCode,
  CODE_COPY_BUTTON_CLASS,
  convertHeadingContentToId,
  removeCopyButtonEvents,
} from 'utils/html-code';
import {
  addHashLinkToHeading,
  generateTableOfContents,
  parseMarkdownFile,
  parseMarkdownToHtml,
  TableOfContents,
} from 'utils/markdown';

type BlogProps = {
  metadata: Metadata;
  htmlContent: string;
  tableOfContents: TableOfContents;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const fileNames = getFileNames('content/blogs');
  const fileNamesWithoutExtension = fileNames.map((fileName) => {
    return fileName.substring(0, fileName.length - 3);
  });
  const paths = fileNamesWithoutExtension.map((fileName) => {
    return {
      params: {
        name: fileName,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogProps> = async ({ params }) => {
  const name = params?.name;

  if (typeof name !== 'string') {
    throw new Error('Invalid name.');
  }

  const { metadata, content } = parseMarkdownFile(`content/blogs/${name}.md`);
  const htmlContent = await parseMarkdownToHtml(content);
  const tableOfContents = generateTableOfContents(htmlContent);
  const contentWithLinkedHeading = addHashLinkToHeading(htmlContent);
  const coloredHtmlContent = addColorToCode(contentWithLinkedHeading);
  const codeWithButton = addCopyButtonToCode(coloredHtmlContent);
  const validatedMetadata = validateMarkdownMetadata(metadata);

  return {
    props: {
      metadata: validatedMetadata,
      htmlContent: codeWithButton,
      tableOfContents,
    },
  };
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

const textEllipsisSx = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};

/** 콘텐츠가 넘어가는 것을 막는다. */
const preventOverflowSx = {
  overflowX: 'auto',
  maxWidth: '100%',
  width: '100%',
};

const MAIN_TOP_PADDING = 16;
const LEVEL_OFFSET_RATIO = 1.8;

const Blog: NextPage<BlogProps> = ({
  metadata,
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
      {/* TODO: thumbnail에 따라 imageUrl 설정 */}
      <Meta title={metadata.title} description={metadata.description} />
      <Box
        display="grid"
        /** 리스트 페이지의 레이아웃과 통일감을 주도록, 240에서 padding 값 2를 뺀다. */
        gridTemplateColumns={{ xs: '1fr', md: '1fr', lg: '238px 1fr' }}
        gap={2}
      >
        {/* Table of contents */}
        {/* 데스크톱 viewport에서만 보인다. */}
        <Box display={{ xs: 'none', md: 'none', lg: 'block' }}>
          <Box position="sticky" top={GLOBAL_HEADER_HEIGHT + MAIN_TOP_PADDING}>
            {tableOfContents.map((item) => (
              <Typography
                href={'#' + convertHeadingContentToId(item.text)}
                key={item.text}
                component="a"
                color="text.secondary"
                ml={item.level * LEVEL_OFFSET_RATIO}
                sx={{ ...textEllipsisSx, display: 'block', cursor: 'pointer' }}
              >
                {item.text}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box sx={preventOverflowSx}>
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
    </>
  );
};

export default Blog;
