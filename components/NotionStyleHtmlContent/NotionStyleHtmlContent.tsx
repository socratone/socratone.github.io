import type { SxProps, Theme } from '@mui/material';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import type { ElementType } from 'react';

import { CODE_BACKGROUND_COLOR } from './constants';


interface NotionStyleHtmlContentProps {
  /** HTML 콘텐츠 */
  html?: string;
  /** 컴포넌트 요소 타입 */
  component?: ElementType;
  /** 추가 스타일 속성 */
  sx?: SxProps<Theme>;
  /** 자식 컴포넌트 */
  children?: React.ReactNode;
}

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

  /* notion에 없는 스펙 */
  h4 {
    font-size: ${({ theme }) => theme.typography.mh4.fontSize};
    line-height: ${({ theme }) => theme.typography.mh4.lineHeight};
    font-weight: ${({ theme }) => theme.typography.mh4.fontWeight};
    padding: ${({ theme }) => theme.typography.mh4.padding};
    margin: ${({ theme }) => theme.typography.mh4.margin};
    margin-top: 0.75rem; /* 12px */
  }

  p {
    font-size: ${({ theme }) => theme.typography.mp.fontSize};
    line-height: ${({ theme }) => theme.typography.mp.lineHeight};
    font-weight: ${({ theme }) => theme.typography.mp.fontWeight};
    padding: ${({ theme }) => theme.typography.mp.padding};
    margin: ${({ theme }) => theme.typography.mp.margin};
  }

  /* 최상위 list에만 여백을 넣어야 한다. */
  > ul,
  > ol {
    padding: ${({ theme }) => theme.typography.mp.padding};
    margin: ${({ theme }) => theme.typography.mp.margin};
  }

  ul,
  ol {
    font-size: ${({ theme }) => theme.typography.mp.fontSize};
    line-height: ${({ theme }) => theme.typography.mp.lineHeight};
    font-weight: ${({ theme }) => theme.typography.mp.fontWeight};
    padding-left: 1.375rem; /* 22px */
  }

  li {
    line-height: 1.8;
  }

  a {
    color: ${({ theme }) => theme.typography.ma.color};
    text-decoration-line: ${({ theme }) =>
      theme.typography.ma.textDecorationLine};
    text-decoration-style: ${({ theme }) =>
      theme.typography.ma.textDecorationStyle};
    text-decoration-thickness: ${({ theme }) =>
      theme.typography.ma.textDecorationThickness};
    text-decoration-color: ${({ theme }) =>
      theme.typography.ma.textDecorationColor};
    text-underline-offset: ${({ theme }) =>
      theme.typography.ma.textUnderlineOffset};
  }

  img {
    display: block;
    margin-top: 0.25rem; /* 4px */
    margin-bottom: 0.25rem; /* 4px */
  }

  /* single line code */

  code {
    font-family: inherit;
    font-size: 90%;
    color: #eb5757;
    background: rgba(135, 131, 120, 0.15);
    border-radius: 0.188rem; /* 3px */
    padding: 1.92px 5.44px;
  }

  /* multi line code */

  /* pre를 감싸는 div에 이 class를 꼭 넣어줘야 한다. */
  .code-wrapper {
    margin-top: 0.5rem; /* 8px */
    margin-bottom: 0.5rem; /* 8px */
    position: relative;
  }

  pre {
    padding: 1rem; /* 16px */
    background: ${CODE_BACKGROUND_COLOR};
    overflow-x: auto;
    border-radius: 0.75rem; /* 12px */
    margin: 0;
  }

  pre > code {
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.mp.fontSize};
    color: #000;
    background: unset;
    border-radius: unset;
    padding: unset;
    line-height: 1.5;
    padding-right: 1.75rem; /* 28px, 버튼으로 가려지는 부분 bumper */
  }
`;


const NotionStyleHtmlContent = ({
  html,
  component,
  sx,
  children,
}: NotionStyleHtmlContentProps) => {
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
