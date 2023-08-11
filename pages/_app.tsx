import 'styles/globals.css';

import { createTheme, ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';
import GlobalHeader from 'components/GlobalHeader/GlobalHeader';
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
      <GlobalHeader />
      <Container sx={{ py: 2 }}>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
