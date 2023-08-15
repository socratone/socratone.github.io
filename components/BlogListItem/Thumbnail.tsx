import { Box, Typography } from '@mui/material';
import { BlogThumbnail } from 'constants/blog';
import { motion } from 'framer-motion';
import { popUpContainer, popUpItem } from 'utils/animation';

type ThumbnailProps = {
  type: BlogThumbnail;
};

const REGEX_BLUE = '#2c5c97';
const WHITE = '#fff';
const THUMBNAIL_SIZE = '5rem'; // 80px

const Thumbnail: React.FC<ThumbnailProps> = ({ type }) => {
  switch (type) {
    case BlogThumbnail.Regex:
      return (
        <Box
          bgcolor={REGEX_BLUE}
          width={THUMBNAIL_SIZE}
          height={THUMBNAIL_SIZE}
          fontSize={THUMBNAIL_SIZE}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            component={motion.p}
            {...popUpContainer}
            color={WHITE}
            fontSize="0.33em"
            display="flex"
          >
            <Typography
              component={motion.span}
              {...popUpItem}
              fontSize="inherit"
              sx={{ display: 'block' }}
            >
              R
            </Typography>
            <Typography
              component={motion.span}
              {...popUpItem}
              fontSize="inherit"
              sx={{ display: 'block' }}
            >
              e
            </Typography>
            <Typography
              component={motion.span}
              {...popUpItem}
              fontSize="inherit"
              sx={{ display: 'block' }}
            >
              g
            </Typography>
          </Typography>
        </Box>
      );
  }
};

export default Thumbnail;
