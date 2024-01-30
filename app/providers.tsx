'use client';

import 'styles/globals.css';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import GlobalHeader from 'components/GlobalHeader';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logoImage from 'public/images/logo.png';
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
const NONE_CONTAINER_PATHNAME_PATTERNS = ['^/$', '^/resume', '^/blogs/.+'];

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const pathname = usePathname();

  const isGlobalHeader = !NONE_GLOBAL_HEADER_PATHNAMES.some(
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
