import { Typography } from '@mui/material';
import { BlogThumbnail } from 'constants/blog';
import { motion } from 'framer-motion';
import linuxImage from 'public/images/blog/linux.webp';
import npmImage from 'public/images/blog/npm.webp';
import { popUpContainer, popUpItem } from 'utils/animation';

import ThumbnailContainer from './ThumbnailContainer';
import ThumbnailImage from './ThumbnailImage';

type ThumbnailProps = {
  type: BlogThumbnail;
};

const NPM_RED = '#cc3534';
const REGEX_BLUE = '#2c5c97';
const WHITE = '#fff';

const Thumbnail: React.FC<ThumbnailProps> = ({ type }) => {
  switch (type) {
    case BlogThumbnail.Regex:
      return (
        <ThumbnailContainer bgcolor={REGEX_BLUE}>
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
        </ThumbnailContainer>
      );

    case BlogThumbnail.Npm:
      return (
        <ThumbnailContainer bgcolor={NPM_RED}>
          <ThumbnailImage src={npmImage} width={300} height={116} />
        </ThumbnailContainer>
      );

    case BlogThumbnail.Linux:
      return (
        <ThumbnailContainer padding={0.5}>
          <ThumbnailImage src={linuxImage} width={370} height={157} />
        </ThumbnailContainer>
      );

    case BlogThumbnail.MachineLearning:
      return (
        <ThumbnailContainer padding={0.5}>
          <Typography fontSize="4rem">🤖</Typography>
        </ThumbnailContainer>
      );
  }
};

export default Thumbnail;
