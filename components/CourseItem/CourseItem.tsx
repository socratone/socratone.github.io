import type { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { ImageProps } from 'next/image';
import Image from 'next/image';

type CourseItemProps = {
  title?: string;
  imageSrc: ImageProps['src'];
  placement?: 'left-top' | 'right-top';
};

const darkBackground: SxProps = {
  '::before': {
    content: '""',
    display: 'block',
    width: '100%',
    height: '50%',
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0,0,0,0) 70%)',
    zIndex: 1,
    position: 'absolute',
  },
};

const CourseItem: React.FC<CourseItemProps> = ({
  title,
  imageSrc,
  placement = 'left-top',
}) => {
  const getPositions = () => {
    switch (placement) {
      case 'left-top':
        return {
          top: 4,
          left: 8,
        };

      case 'right-top':
        return {
          top: 4,
          right: 8,
        };
    }
  };

  return (
    <Box
      position="relative"
      width={240}
      height={135}
      sx={title ? darkBackground : undefined}
    >
      <Typography
        {...getPositions()}
        position="absolute"
        fontSize={14}
        fontWeight={600}
        zIndex={2}
        color={theme => theme.palette.background.default}
        fontStyle="italic"
        sx={{
          opacity: 0.9,
        }}
      >
        {title}
      </Typography>
      <Image src={imageSrc} alt={title ?? 'Udemy course'} fill />
    </Box>
  );
};

export default CourseItem;
