import 'styles/globals.css';

import { createTheme, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import GlobalHeader from 'components/GlobalHeader';
import Meta from 'components/Meta';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logoImage from 'public/images/logo.png';
import { useMemo } from 'react';
import { breakpoints } from 'theme/breakpoints';
import { components } from 'theme/components';
import { lightPalette } from 'theme/palette';
import { shadows } from 'theme/shadows';
import { typography } from 'theme/typography';

const NONE_GLOBAL_HEADER_PATHNAMES = ['/resume'];
const NONE_CONTAINER_PATHNAME_PATTERNS = ['^/$', '^/resume', '^/blogs/.+'];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isGlobalHeader = !NONE_GLOBAL_HEADER_PATHNAMES.some(
    (pathname) => pathname === router.pathname
  );

  const isContainer = !NONE_CONTAINER_PATHNAME_PATTERNS.some((pattern) => {
    const regex = new RegExp(pattern);
    return regex.test(router.pathname);
  });

  const theme = useMemo(
    () =>
      createTheme({
        components,
        palette: lightPalette,
        typography,
        shadows,
        breakpoints,
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <Meta title="소크라톤" description="프론트엔드 개발자 소크라톤 페이지" />
      {isGlobalHeader ? (
        <GlobalHeader
          logo={
            <Box
              px={1}
              ml={-1}
              height="100%"
              display="flex"
              alignItems="center"
            >
              <Image src={logoImage} alt="s" width={25} height={25} />
            </Box>
          }
          items={[{ label: 'Blogs', href: '/blogs' }]}
          backgroundColor={theme.palette.background.default}
          borderBottom
        />
      ) : null}
      {isContainer ? (
        <Container component="main" sx={{ py: 2 }}>
          <Component {...pageProps} />
        </Container>
      ) : (
        <Box component="main">
          <Component {...pageProps} />
        </Box>
      )}
    </ThemeProvider>
  );
}
