'use client';

import { Box, Divider, Typography } from '@mui/material';
import type { MDXComponents } from 'mdx/types';
import { typography } from 'theme/typography';

import Content from './content.mdx';

type ElementProps = { children?: React.ReactNode };

const commonSx = { lineHeight: 1.3, padding: '3px 2px', margin: '1px 0' };

const CustomH1: React.FC<ElementProps> = ({ children }) => {
  return (
    <Typography
      component="h1"
      fontWeight={700}
      sx={{ ...commonSx, fontSize: '2rem' }}
    >
      {children}
    </Typography>
  );
};

const CustomH2: React.FC<ElementProps> = ({ children }) => {
  return (
    <Typography
      component="h2"
      fontWeight={700}
      sx={{ ...commonSx, fontSize: '1.75rem' }}
    >
      {children}
    </Typography>
  );
};

const CustomH3: React.FC<ElementProps> = ({ children }) => {
  return (
    <Typography
      component="h3"
      fontWeight={600}
      sx={{ ...commonSx, fontSize: '1.25rem' }}
    >
      {children}
    </Typography>
  );
};

const CustomH4: React.FC<ElementProps> = ({ children }) => {
  return (
    <Typography
      component="h4"
      fontWeight={700}
      sx={{ ...commonSx, fontSize: '1rem' }}
    >
      {children}
    </Typography>
  );
};

const CustomP: React.FC<ElementProps> = ({ children }) => {
  return (
    <Typography component="p" variant="mp">
      {children}
    </Typography>
  );
};

const CustomUl: React.FC<ElementProps> = ({ children }) => {
  return (
    <Box component="ul" pl="1.375rem" py="3px" my="1px" lineHeight={1.8}>
      {children}
    </Box>
  );
};

const CustomHr = () => {
  return (
    <Divider sx={{ my: 2, borderColor: theme => theme.palette.grey[300] }} />
  );
};

const CustomStrong: React.FC<ElementProps> = ({ children }) => {
  return (
    <Box component="strong" fontWeight={600}>
      {children}
    </Box>
  );
};

const overrideComponents: MDXComponents = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  p: CustomP,
  ul: CustomUl,
  hr: CustomHr,
  strong: CustomStrong,
};

export default function Page() {
  return (
    <Box sx={{ a: { ...typography.ma } }}>
      <Content components={overrideComponents} />
    </Box>
  );
}
