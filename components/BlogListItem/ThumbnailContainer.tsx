import Box from '@mui/material/Box';

type ThumbnailContainerProps = {
  padding?: number;
  children: React.ReactNode;
};

const THUMBNAIL_SIZE = '6rem'; // 80px

const ThumbnailContainer: React.FC<ThumbnailContainerProps> = ({
  padding = 0.5,
  children,
}) => {
  return (
    <Box
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
