import { Box, Typography } from '@mui/material';
import { BlogThumbnail } from 'constants/blog';

type ThumbnailProps = {
  type: BlogThumbnail;
};

const REGEX_BLUE = '#2c5c97';
const WHITE = '#fff';
const THUMBNAIL_SIZE = 80;

const Thumbnail: React.FC<ThumbnailProps> = ({ type }) => {
  switch (type) {
    case BlogThumbnail.Regex:
      return (
        <Box
          bgcolor={REGEX_BLUE}
          width={THUMBNAIL_SIZE}
          height={THUMBNAIL_SIZE}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography color={WHITE} fontSize={32}>
            Reg
          </Typography>
        </Box>
      );
  }
};

export default Thumbnail;
