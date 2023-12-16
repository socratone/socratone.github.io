import { styled, SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import { ElementType } from 'react';

type NotionStyleHtmlContentProps = {
  html?: string;
  component?: ElementType<any>;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
};

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;

  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.palette.text.primary};
  word-break: break-all;

  h1 {
    font-size: ${({ theme }) => theme.typography.mh1.fontSize};
    line-height: ${({ theme }) => theme.typography.mh1.lineHeight};
    font-weight: ${({ theme }) => theme.typography.mh1.fontWeight};
    padding: ${({ theme }) => theme.typography.mh1.padding};
    margin: ${({ theme }) => theme.typography.mh1.margin};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.mh2.fontSize};
    line-height: ${({ theme }) => theme.typography.mh2.lineHeight};
    font-weight: ${({ theme }) => theme.typography.mh2.fontWeight};
    padding: ${({ theme }) => theme.typography.mh2.padding};
    margin: ${({ theme }) => theme.typography.mh2.margin};
    margin-top: 1.4rem; /* 22.4px */
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.mh3.fontSize};
    line-height: ${({ theme }) => theme.typography.mh3.lineHeight};
    font-weight: ${({ theme }) => theme.typography.mh3.fontWeight};
    padding: ${({ theme }) => theme.typography.mh3.padding};
    margin: ${({ theme }) => theme.typography.mh3.margin};
    margin-top: 1rem; /* 16px */
  }

  p {
    font-size: ${({ theme }) => theme.typography.mp.fontSize};
    line-height: ${({ theme }) => theme.typography.mp.lineHeight};
    font-weight: ${({ theme }) => theme.typography.mp.fontWeight};
    padding: ${({ theme }) => theme.typography.mp.padding};
    margin: ${({ theme }) => theme.typography.mp.margin};
  }

  ul,
  ol {
    margin: ${({ theme }) => theme.typography.mp.margin};
    padding: ${({ theme }) => theme.typography.mp.padding};
    font-size: ${({ theme }) => theme.typography.mp.fontSize};
    line-height: ${({ theme }) => theme.typography.mp.lineHeight};
    font-weight: ${({ theme }) => theme.typography.mp.fontWeight};
    padding-left: 1.375rem; /* 22px */
  }

  li {
    line-height: 1.8;
  }

  a {
    color: #73716e;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 1px;
    text-decoration-color: #c6c6c4;
    text-underline-offset: 4px;
  }

  img {
    display: block;
    margin-top: 0.25rem; /* 4px */
    margin-bottom: 0.25rem; /* 4px */
  }

  /* single line code */

  code {
    font-family: inherit;
    font-size: 85%;
    color: #eb5757;
    background: rgba(135, 131, 120, 0.15);
    border-radius: 3px;
    padding: 2.72px 5.44px;
  }

  /* multi line code */

  pre {
    padding: 16px;
    background: rgb(247, 246, 243);
    overflow-x: auto;
    position: relative; /* for copy button */
  }

  pre > code {
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.mp.fontSize};
    color: #000;
    background: unset;
    border-radius: unset;
    padding: unset;
    line-height: 1.5;
  }
`;

const NotionStyleHtmlContent: React.FC<NotionStyleHtmlContentProps> = ({
  html,
  component,
  sx,
  children,
}) => {
  return (
    <StyledBox
      component={component}
      dangerouslySetInnerHTML={html ? { __html: html } : undefined}
      sx={sx}
    >
      {children}
    </StyledBox>
  );
};

export default NotionStyleHtmlContent;
