import 'styles/globals.css';

import { createTheme, ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';
import GlobalHeader from 'components/GlobalHeader/GlobalHeader';
import Meta from 'components/Meta';
import type { AppProps } from 'next/app';
import { components } from 'theme/components';
import { typography } from 'theme/typography';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      theme={createTheme({
        components,
        typography,
      })}
    >
      <Meta title="소크라톤" description="프론트엔드 개발자 소크라톤 페이지" />
      <GlobalHeader />
      <Container sx={{ py: 2 }}>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
