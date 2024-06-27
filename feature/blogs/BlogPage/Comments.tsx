import Box from '@mui/material/Box';
import { useEffect, useRef } from 'react';

const utterancesConfig = {
  src: 'https://utteranc.es/client.js',
  repo: 'socratone/socratone.github.io',
  'issue-term': 'pathname',
  label: 'blog-comment',
  theme: 'github-light',
  crossorigin: 'anonymous',
};

/**
 * https://github.com/utterance/utterances
 */
const Comments = () => {
  const hasInitializedCommentsRef = useRef(false);
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (commentsRef.current && !hasInitializedCommentsRef.current) {
      hasInitializedCommentsRef.current = true;
      const scriptElement = document.createElement('script');

      Object.entries(utterancesConfig).forEach(([key, value]) => {
        scriptElement.setAttribute(key, value);
      });

      commentsRef.current.appendChild(scriptElement);
    }
  }, [commentsRef]);

  return (
    <Box
      ref={commentsRef}
      sx={{
        '.utterances': {
          marginLeft: 0,
        },
      }}
    />
  );
};

export default Comments;
