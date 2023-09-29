import 'styles/globals.css';

import { createTheme, ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';
import GlobalHeader from 'components/GlobalHeader';
import Meta from 'components/Meta';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { components } from 'theme/components';
import { lightPalette } from 'theme/palette';
import { shadows } from 'theme/shadows';
import { typography } from 'theme/typography';

const NONE_GLOBAL_HEADER_PATHNAMES = ['/', '/resume'];
const NONE_CONTAINER_PATHNAMES = ['/'];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isGlobalHeader = !NONE_GLOBAL_HEADER_PATHNAMES.some(
    (pathname) => pathname === router.pathname
  );
  const isContainer = !NONE_CONTAINER_PATHNAMES.some(
    (pathname) => pathname === router.pathname
  );

  return (
    <ThemeProvider
      theme={createTheme({
        components,
        palette: lightPalette,
        typography,
        shadows,
      })}
    >
      <Meta title="소크라톤" description="프론트엔드 개발자 소크라톤 페이지" />
      {isGlobalHeader ? (
        <GlobalHeader
          items={[
            {
              label: 'Home',
              href: '/',
            },
            { label: 'Blogs', href: '/blogs' },
          ]}
          borderBottom
        />
      ) : null}
      {isContainer ? (
        <Container component="main" sx={{ py: 2 }}>
          <Component {...pageProps} />
        </Container>
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeProvider>
  );
}
