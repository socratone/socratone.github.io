import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

type HeaderLinkProps = {
  children: string;
  href: string;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      <Typography
        component={motion.p}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        color={(theme) => theme.palette.text.primary}
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
