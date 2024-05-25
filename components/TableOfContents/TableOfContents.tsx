import Typography from '@mui/material/Typography';
import { HEADER_HEIGHT } from 'components/Header/constants';
import { useEffect, useRef, useState } from 'react';
import { convertHeadingContentToId } from 'utils/html-code';
import type { TableOfContent } from 'utils/markdown';

type TableOfContentsProps = {
  contents: TableOfContent[];
  selectors: string;
};

const LEVEL_OFFSET_RATIO = 1.8;
const TEXT_LINE_HEIGHT = 10;

const textEllipsisSx = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};

const TableOfContents: React.FC<TableOfContentsProps> = ({
  contents,
  selectors,
}) => {
  const [selectedContentId, setSelectedContentId] = useState<string | null>(
    null
  );

  const observerRef = useRef<IntersectionObserver | null>(null);

  const observe = () => {
    const viewportHeight = window.innerHeight;

    /** HEADER_HEIGHT만큼 top offset이 필요하다. */
    const topMargin = HEADER_HEIGHT;
    /** 중복 이벤트를 피하기 위해 HEADER_HEIGHT부터 TEXT_LINE_HEIGHT만큼만 감지한다. */
    const bottomMargin = viewportHeight - HEADER_HEIGHT - TEXT_LINE_HEIGHT;

    observerRef.current = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.intersectionRatio > 0) {
            setSelectedContentId(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: `-${topMargin}px 0px -${bottomMargin}px 0px`,
      }
    );

    const headings = document.querySelectorAll(selectors);
    headings.forEach(heading => {
      observerRef.current?.observe(heading);
    });
  };

  const unobserve = () => {
    const headings = document.querySelectorAll(selectors);
    headings.forEach(heading => {
      observerRef.current?.unobserve(heading);
    });
    observerRef.current = null;
  };

  useEffect(() => {
    /** Initialize */
    if (!observerRef.current) {
      observe();
    }

    /** content 클릭시 해제되므로 스크롤을 움직이면 재설정한다. */
    const handleScroll = () => {
      /** 인스턴스가 없을 때에만 등록한다. */
      if (!observerRef.current) {
        observe();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      unobserve();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (contentId: string) => {
    setSelectedContentId(contentId);
    /** 클릭을 명시했을 경우에는 observer로 인한 setSelectedContentId action을 막는다. */
    unobserve();
  };

  return (
    <>
      {contents.map(content => {
        const contentId = convertHeadingContentToId(content.text);

        return (
          <Typography
            key={content.text}
            href={'#' + contentId}
            component="a"
            fontWeight={contentId === selectedContentId ? 500 : undefined}
            color={
              contentId === selectedContentId
                ? 'text.primary'
                : 'text.secondary'
            }
            ml={content.level * LEVEL_OFFSET_RATIO}
            onClick={() => handleClick(contentId)}
            sx={{
              ...textEllipsisSx,
              display: 'block',
              cursor: 'pointer',
            }}
          >
            {content.text}
          </Typography>
        );
      })}
    </>
  );
};

export default TableOfContents;
