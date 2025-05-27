import { Typography } from '@mui/material';
import Link from 'next/link';


interface HeaderLinkProps {
  /** 링크 텍스트 */
  children: string;
  /** 링크 URL */
  href: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
}


const HeaderLink = ({ children, href, onClick }: HeaderLinkProps) => {
  return (
    <Link href={href} onClick={onClick}>
      <Typography
        color={theme => theme.palette.text.primary}
        px={1}
        sx={{
          cursor: 'pointer',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {children}
      </Typography>
    </Link>
  );
};

export default HeaderLink;
