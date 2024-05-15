'use client';

import { Box, Typography } from '@mui/material';
import type { MDXComponents } from 'mdx/types';

import Content from './content.mdx';

type ElementProps = { children?: React.ReactNode };

const CustomH1: React.FC<ElementProps> = ({ children }) => {
  return (
    <Typography component="h1" variant="mh1">
      {children}
    </Typography>
  );
};

const CustomH2: React.FC<ElementProps> = ({ children }) => {
  return (
    <Typography component="h2" variant="mh2">
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
    <Box component="ul" pl="1.375rem" py="3px" my="1px">
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
};

export default function Page() {
  return <Content components={overrideComponents} />;
}
