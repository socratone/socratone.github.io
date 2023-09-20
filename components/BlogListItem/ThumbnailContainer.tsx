import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { popUpContainer } from 'utils/animation';

type ThumbnailContainerProps = {
  bgcolor?: string;
  padding?: number;
  children: React.ReactNode;
};

const THUMBNAIL_SIZE = '6rem'; // 80px

const ThumbnailContainer: React.FC<ThumbnailContainerProps> = ({
  bgcolor,
  padding,
  children,
}) => {
  return (
    <Box
      component={motion.div}
      {...popUpContainer}
      bgcolor={bgcolor}
      padding={padding}
      width={THUMBNAIL_SIZE}
      height={THUMBNAIL_SIZE}
      fontSize={THUMBNAIL_SIZE}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

export default ThumbnailContainer;
