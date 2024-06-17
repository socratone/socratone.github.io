import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import React, { lazy, useCallback, useState } from 'react';

import { HEADER_HEIGHT } from './constants';
import HeaderLink from './HeaderLink';
import useIsScrollTop from './hooks/useIsScrollTop';
import useOpenShortcutListener from './hooks/useOpenShortcutListener';
import SearchButton from './SearchDialog/SearchButton';

const SearchDialog = lazy(() => import('./SearchDialog'));

type HeaderProps = {
  logo?: React.ReactNode;
  items: {
    href: string;
    label: string;
  }[];
  borderBottom?: true;
};

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const Header: React.FC<HeaderProps> = ({ logo, items, borderBottom }) => {
  const isScrollTop = useIsScrollTop();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);

  const handleOpenShortcut = useCallback(() => {
    setSearchDialogOpen(true);
  }, []);

  useOpenShortcutListener(handleOpenShortcut);

  const handleSearchButtonClick = () => {
    setSearchDialogOpen(true);
  };

  /** 'useEnterKeyListener'의 useEffect dependency */
  const handleSearchClose = useCallback(() => {
    setSearchDialogOpen(false);
  }, []);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <SearchDialog open={searchDialogOpen} onClose={handleSearchClose} />

      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: theme => theme.zIndex.appBar,
          /** 반투명 */
          bgcolor: 'hsla(0, 0%, 100%, .8)',
          backdropFilter: 'saturate(180%) blur(5px)',
          borderBottom: borderBottom && !isScrollTop ? 1 : 0,
          borderColor: theme => theme.palette.divider,
          height: HEADER_HEIGHT,
        }}
      >
        <Container
          component="nav"
          sx={{
            height: '100%',
          }}
        >
          <Stack direction="row" height="100%">
            {logo ? <StyledLink href="/">{logo}</StyledLink> : null}
            <Stack
              direction="row"
              height="100%"
              display={{ xs: 'none', md: 'none', lg: 'flex' }}
            >
              {items.map(item => (
                <HeaderLink key={item.href} href={item.href}>
                  {item.label}
                </HeaderLink>
              ))}
            </Stack>
            <Stack direction="row" alignItems="center" ml="auto">
              <SearchButton onClick={handleSearchButtonClick} />
              <Link href="https://github.com/socratone" target="_blank">
                <IconButton aria-label="Github" sx={{ mr: -1 }}>
                  <GitHubIcon
                    sx={{ color: theme => theme.palette.text.primary }}
                  />
                </IconButton>
              </Link>
              <IconButton
                onClick={handleMenuOpen}
                sx={{ mr: -1, display: { xs: 'flex', md: 'flex', lg: 'none' } }}
              >
                <MenuIcon sx={{ color: theme => theme.palette.text.primary }} />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            maxWidth: 250,
            width: '100%',
          },
        }}
      >
        <Container
          sx={{
            height: HEADER_HEIGHT,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton
            onClick={handleMenuClose}
            sx={{ mr: -1, display: { xs: 'flex', md: 'flex', lg: 'none' } }}
          >
            <CloseIcon sx={{ color: theme => theme.palette.text.primary }} />
          </IconButton>
        </Container>
        <Stack px={1}>
          <Box height={40}>
            {items.map(item => (
              <HeaderLink
                key={item.href}
                href={item.href}
                onClick={handleMenuClose}
              >
                {item.label}
              </HeaderLink>
            ))}
          </Box>
        </Stack>
      </Drawer>
    </>
  );
};

export default Header;
