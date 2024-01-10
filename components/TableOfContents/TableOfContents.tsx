import Typography from '@mui/material/Typography';
import { useEffect, useRef, useState } from 'react';
import { convertHeadingContentToId } from 'utils/html-code';
import { TableOfContent } from 'utils/markdown';

type TableOfContentsProps = {
  contents: TableOfContent[];
};

const LEVEL_OFFSET_RATIO = 1.8;

const textEllipsisSx = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ contents }) => {
  const [selectedContentId, setSelectedContentId] = useState<string | null>(
    null
  );

  const observerRef = useRef<IntersectionObserver | null>(null);

  const observe = () => {
    observerRef.current = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.intersectionRatio > 0) {
          setSelectedContentId(entry.target.id);
          break;
        }
      }
    });

    const headings = document.querySelectorAll('.heading');
    headings.forEach((heading) => {
      observerRef.current?.observe(heading);
    });
  };

  const unobserve = () => {
    const headings = document.querySelectorAll('.heading');
    headings.forEach((heading) => {
      observerRef.current?.unobserve(heading);
    });
    observerRef.current = null;
  };

  useEffect(() => {
    /** Initialize */
    if (!observerRef.current) {
      observe();
    }

    /** content 클릭시 해제되므로 스크롤을 다시 움직이면 재설정한다. */
    const handleScroll = () => {
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
    unobserve();
  };

  return (
    <>
      {contents.map((content) => {
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
