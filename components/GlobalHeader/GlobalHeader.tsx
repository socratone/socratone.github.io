import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import React from 'react';

import { GLOBAL_HEADER_HEIGHT } from './constants';
import HeaderLink from './HeaderLink';

type GlobalHeaderProps = {
  logo?: React.ReactNode;
  items: {
    href: string;
    label: string;
  }[];
  backgroundColor?: string;
  borderBottom?: true;
};

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const GlobalHeader: React.FC<GlobalHeaderProps> = ({
  logo,
  items,
  backgroundColor,
  borderBottom,
}) => {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        bgcolor: backgroundColor,
        borderBottom: borderBottom ? 1 : 0,
        borderColor: (theme) => theme.palette.divider,
      }}
    >
      <Container component="nav">
        <Stack direction="row" gap={1.5}>
          {logo ? <StyledLink href="/">{logo}</StyledLink> : null}
          <Stack direction="row" spacing={2} height={GLOBAL_HEADER_HEIGHT}>
            {items.map((item) => (
              <HeaderLink key={item.href} href={item.href}>
                {item.label}
              </HeaderLink>
            ))}
          </Stack>
          <Stack direction="row" alignItems="center" ml="auto">
            <Link href="https://github.com/socratone" target="_blank">
              <IconButton color="inherit" sx={{ mr: -1 }}>
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
