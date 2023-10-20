import Box from '@mui/material/Box';
import Image, { StaticImageData } from 'next/image';

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
