'use client';

import { Box, Divider, Typography } from '@mui/material';
import type { MDXComponents } from 'mdx/types';
import { typography } from 'theme/typography';

import Content from './content.mdx';

type ElementProps = { children?: React.ReactNode };

const CustomH1: React.FC<ElementProps> = ({ children }) => {
  return (
    <Typography component="h1" variant="mh2" fontWeight={700}>
      {children}
    </Typography>
  );
};

const CustomH2: React.FC<ElementProps> = ({ children }) => {
  return (
    <Typography component="h2" variant="mh3">
      {children}
    </Typography>
  );
};

const CustomH3: React.FC<ElementProps> = ({ children }) => {
  return (
    <Typography component="h3" variant="mh3">
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
