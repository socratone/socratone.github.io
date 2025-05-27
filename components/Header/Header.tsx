import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
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
import MenuDrawer from './MenuDrawer';
import SearchButton from './SearchDialog/SearchButton';

const SearchDialog = lazy(() => import('./SearchDialog'));


interface HeaderProps {
  /** 헤더에 표시될 로고 */
  logo: React.ReactNode;
  /** 헤더 링크 아이템 목록 */
  items: {
    href: string;
    label: string;
  }[];
  /** 하단 테두리 표시 여부 */
  borderBottom?: true;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;


const Header = ({ logo, items, borderBottom }: HeaderProps) => {
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
            <StyledLink href="/">{logo}</StyledLink>
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
            <Stack direction="row" alignItems="center" ml="auto" mr={-0.5}>
              <SearchButton
                onClick={handleSearchButtonClick}
                sx={{ mr: 0.5 }}
              />
              <Link
                href="https://www.linkedin.com/in/socratone"
                target="_blank"
                rel="noopener noreferer"
              >
                <IconButton aria-label="LinkedIn" sx={{ px: 0.5 }}>
                  <LinkedInIcon
                    sx={{ color: theme => theme.palette.text.primary }}
                  />
                </IconButton>
              </Link>
              <Link
                href="https://github.com/socratone"
                target="_blank"
                rel="noopener noreferer"
              >
                <IconButton aria-label="Github" sx={{ px: 0.5 }}>
                  <GitHubIcon
                    sx={{ color: theme => theme.palette.text.primary }}
                  />
                </IconButton>
              </Link>
              <IconButton
                onClick={handleMenuOpen}
                sx={{
                  px: 0.5,
                  display: { xs: 'flex', md: 'flex', lg: 'none' },
                }}
              >
                <MenuIcon sx={{ color: theme => theme.palette.text.primary }} />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <MenuDrawer
        logo={logo}
        items={items}
        open={menuOpen}
        onClose={handleMenuClose}
      />
    </>
  );
};

export default Header;
