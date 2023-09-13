import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

import { GLOBAL_HEADER_HEIGHT } from './constants';
import HeaderLink from './HeaderLink';

const GlobalHeader = () => {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        bgcolor: (theme) => theme.palette.background.default,
        borderBottom: 1,
        borderColor: (theme) => theme.palette.divider,
      }}
    >
      <Container component="nav">
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={2} height={GLOBAL_HEADER_HEIGHT}>
            <HeaderLink href="/">Home</HeaderLink>
            <HeaderLink href="/blogs">Blogs</HeaderLink>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Link href="https://github.com/socratone" target="_blank">
              <IconButton sx={{ mr: -1 }}>
                <GitHubIcon />
              </IconButton>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default GlobalHeader;
