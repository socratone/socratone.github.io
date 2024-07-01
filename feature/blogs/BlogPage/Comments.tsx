import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import { useEffect, useRef, useState } from 'react';

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
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    }
  }, []);

  return (
    <Stack minHeight={269} justifyContent="center" alignItems="center">
      {isLoading ? <CircularProgress /> : null}
      <Box
        ref={commentsRef}
        width="100%"
        sx={{
          '.utterances': {
            marginLeft: 0,
          },
        }}
      />
    </Stack>
  );
};

export default Comments;
