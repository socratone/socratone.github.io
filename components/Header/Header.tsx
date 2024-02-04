import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
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

const SearchDialog = lazy(() => import('./SearchDialog/SearchDialog'));

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
        }}
      >
        <Container component="nav">
          <Stack direction="row">
            {logo ? <StyledLink href="/">{logo}</StyledLink> : null}
            <Stack direction="row" gap={2} height={HEADER_HEIGHT}>
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
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Header;
