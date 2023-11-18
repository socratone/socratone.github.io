import { Typography } from '@mui/material';
import { BlogThumbnail } from 'constants/blog';
import linuxImage from 'public/images/blog/linux.webp';
import npmImage from 'public/images/blog/npm.webp';

import NextJsIcon from './NextJsIcon';
import ThumbnailContainer from './ThumbnailContainer';
import ThumbnailImage from './ThumbnailImage';

type ThumbnailProps = {
  type: BlogThumbnail;
};

const Thumbnail: React.FC<ThumbnailProps> = ({ type }) => {
  switch (type) {
    case BlogThumbnail.Regex:
      return (
        <ThumbnailContainer>
          <Typography fontSize="4rem">✖️</Typography>
        </ThumbnailContainer>
      );

    case BlogThumbnail.Npm:
      return (
        <ThumbnailContainer>
          <ThumbnailImage src={npmImage} width={300} height={116} />
        </ThumbnailContainer>
      );

    case BlogThumbnail.Linux:
      return (
        <ThumbnailContainer>
          <ThumbnailImage src={linuxImage} width={370} height={157} />
        </ThumbnailContainer>
      );

    case BlogThumbnail.Browser:
      return (
        <ThumbnailContainer>
          <Typography fontSize="4rem">🌎</Typography>
        </ThumbnailContainer>
      );

    case BlogThumbnail.MachineLearning:
      return (
        <ThumbnailContainer>
          <Typography fontSize="4rem">🤖</Typography>
        </ThumbnailContainer>
      );

    case BlogThumbnail.Docker:
      return (
        <ThumbnailContainer>
          <Typography fontSize="4rem">🐳</Typography>
        </ThumbnailContainer>
      );

    case BlogThumbnail.NextJs:
      return (
        <ThumbnailContainer>
          <Typography fontSize="4rem">
            <NextJsIcon />
          </Typography>
        </ThumbnailContainer>
      );
  }
};

export default Thumbnail;
