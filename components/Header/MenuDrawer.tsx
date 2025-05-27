import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import React from 'react';

import { HEADER_HEIGHT } from './constants';
import HeaderLink from './HeaderLink';


interface MenuDrawerProps {
  /** 드로어에 표시될 로고 */
  logo: React.ReactNode;
  /** 드로어 링크 아이템 목록 */
  items: {
    href: string;
    label: string;
  }[];
  /** 드로어 열림 상태 */
  open: boolean;
  /** 드로어 닫기 함수 */
  onClose: () => void;
}


const MenuDrawer = ({
  logo,
  items,
  open,
  onClose,
}: MenuDrawerProps) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
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
          justifyContent: 'space-between',
        }}
      >
        <Stack
          component={Link}
          href="/"
          onClick={onClose}
          justifyContent="center"
          ml={-1}
          height="100%"
        >
          {logo}
        </Stack>
        <IconButton
          onClick={onClose}
          sx={{ mr: -1, display: { xs: 'flex', md: 'flex', lg: 'none' } }}
        >
          <CloseIcon sx={{ color: theme => theme.palette.text.primary }} />
        </IconButton>
      </Container>
      <Stack px={1}>
        <Box height={40}>
          {items.map(item => (
            <HeaderLink key={item.href} href={item.href} onClick={onClose}>
              {item.label}
            </HeaderLink>
          ))}
        </Box>
      </Stack>
    </Drawer>
  );
};

export default MenuDrawer;
