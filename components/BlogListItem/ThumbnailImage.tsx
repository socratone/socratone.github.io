import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { popUpItem } from 'utils/animation';

type ThumbnailImageProps = {
  src: StaticImageData;
  width: number;
  height: number;
};

const ThumbnailImage: React.FC<ThumbnailImageProps> = ({
  src,
  width,
  height,
}) => {
  return (
    <Box
      component={motion.div}
      {...popUpItem}
      width="100%"
      position="relative"
      sx={{
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image src={src} alt="npm" fill />
    </Box>
  );
};

export default ThumbnailImage;
