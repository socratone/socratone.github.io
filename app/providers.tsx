'use client';

import 'styles/globals.css';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Header from 'components/Header';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logoImage from 'public/images/logo-50x50.webp';
import { useMemo } from 'react';
import { breakpoints } from 'theme/breakpoints';
import { components } from 'theme/components';
import { lightPalette } from 'theme/palette';
import { shadows } from 'theme/shadows';
import { typography } from 'theme/typography';

type ProvidersProps = {
  children: React.ReactNode;
};

const NONE_GLOBAL_HEADER_PATHNAMES = ['/resume'];
const NONE_CONTAINER_PATHNAME_PATTERNS = ['^/$', '^/(blogs|lifehacks)/.+'];

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const pathname = usePathname();

  const isHeader = !NONE_GLOBAL_HEADER_PATHNAMES.some(
    name => name === pathname
  );

  const isContainer = !NONE_CONTAINER_PATHNAME_PATTERNS.some(pattern => {
    const regex = new RegExp(pattern);
    return regex.test(pathname);
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
    // https://mui.com/material-ui/guides/nextjs/#app-router
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isHeader ? (
          <Header
            logo={<Image src={logoImage} alt="s" width={25} height={25} />}
            items={[
              { label: 'Blogs', href: '/blogs' },
              { label: 'Lifehacks', href: '/lifehacks' },
              { label: 'Doctrines', href: '/doctrines' },
              { label: 'Utils', href: '/youtube-loop' },
            ]}
            borderBottom
          />
        ) : null}
        {isContainer ? (
          <Container component="main" sx={{ py: 2 }}>
            {children}
          </Container>
        ) : (
          <Box component="main">{children}</Box>
        )}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default Providers;
