import { Typography } from '@mui/material';
import Link from 'next/link';

type HeaderLinkProps = {
  children: string;
  href: string;
  onClick?: () => void;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({ children, href, onClick }) => {
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
