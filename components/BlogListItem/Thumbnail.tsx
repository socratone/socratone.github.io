import { Typography } from '@mui/material';
import { BlogThumbnail } from 'constants/blog';

import apacheImage from './images/apache.webp';
import awsImage from './images/aws.webp';
import chromeImage from './images/chrome.webp';
import dockerImage from './images/docker.webp';
import linuxImage from './images/linux.webp';
import mysqlImage from './images/mysql.webp';
import npmImage from './images/npm.webp';
import pythonImage from './images/python.webp';
import webpackImage from './images/webpack.webp';
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
          <ThumbnailImage src={chromeImage} width={300} height={300} />
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
          <ThumbnailImage src={dockerImage} width={300} height={172} />
        </ThumbnailContainer>
      );

    case BlogThumbnail.NextJs:
      return (
        <ThumbnailContainer>
          <Typography fontSize="4rem" display="flex" alignItems="center">
            <NextJsIcon />
          </Typography>
        </ThumbnailContainer>
      );

    case BlogThumbnail.Python:
      return (
        <ThumbnailContainer>
          <ThumbnailImage src={pythonImage} width={300} height={303} />
        </ThumbnailContainer>
      );
    case BlogThumbnail.Sql:
      return (
        <ThumbnailContainer>
          <ThumbnailImage src={mysqlImage} width={300} height={155} />
        </ThumbnailContainer>
      );

    case BlogThumbnail.Webpack:
      return (
        <ThumbnailContainer>
          <ThumbnailImage src={webpackImage} width={300} height={339} />
        </ThumbnailContainer>
      );

    case BlogThumbnail.Apache:
      return (
        <ThumbnailContainer>
          <ThumbnailImage src={apacheImage} width={300} height={300} />
        </ThumbnailContainer>
      );

    case BlogThumbnail.Aws:
      return (
        <ThumbnailContainer>
          <ThumbnailImage src={awsImage} width={300} height={180} />
        </ThumbnailContainer>
      );
  }
};

export default Thumbnail;
