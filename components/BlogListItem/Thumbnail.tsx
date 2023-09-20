import { Box, Typography } from '@mui/material';
import { BlogThumbnail } from 'constants/blog';
import { motion } from 'framer-motion';
import Image from 'next/image';
import linuxImage from 'public/images/blog/linux.webp';
import npmImage from 'public/images/blog/npm.webp';
import { popUpContainer, popUpItem } from 'utils/animation';

type ThumbnailProps = {
  type: BlogThumbnail;
};

const NPM_RED = '#cc3534';
const REGEX_BLUE = '#2c5c97';
const WHITE = '#fff';
const THUMBNAIL_SIZE = '6rem'; // 80px

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
            fontFamily="Merriweather"
          >
            <Typography
              component={motion.span}
              {...popUpItem}
              fontSize="inherit"
              fontFamily="inherit"
              sx={{ display: 'block' }}
            >
              R
            </Typography>
            <Typography
              component={motion.span}
              {...popUpItem}
              fontSize="inherit"
              fontFamily="inherit"
              sx={{ display: 'block' }}
            >
              e
            </Typography>
            <Typography
              component={motion.span}
              {...popUpItem}
              fontSize="inherit"
              fontFamily="inherit"
              sx={{ display: 'block' }}
            >
              g
            </Typography>
          </Typography>
        </Box>
      );

    case BlogThumbnail.Npm:
      return (
        <Box
          bgcolor={NPM_RED}
          width={THUMBNAIL_SIZE}
          height={THUMBNAIL_SIZE}
          fontSize={THUMBNAIL_SIZE}
        >
          <Box
            component={motion.div}
            {...popUpContainer}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Box
              component={motion.div}
              {...popUpItem}
              width="100%"
              position="relative"
              sx={{
                aspectRatio: '300 / 116',
              }}
            >
              <Image src={npmImage} alt="npm" fill />
            </Box>
          </Box>
        </Box>
      );

    case BlogThumbnail.Linux:
      return (
        <Box
          width={THUMBNAIL_SIZE}
          height={THUMBNAIL_SIZE}
          fontSize={THUMBNAIL_SIZE}
        >
          <Box
            component={motion.div}
            {...popUpContainer}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            paddingX={0.5}
          >
            <Box
              component={motion.div}
              {...popUpItem}
              width="100%"
              position="relative"
              sx={{
                aspectRatio: '370 / 157',
              }}
            >
              <Image src={linuxImage} alt="npm" fill />
            </Box>
          </Box>
        </Box>
      );
  }
};

export default Thumbnail;
