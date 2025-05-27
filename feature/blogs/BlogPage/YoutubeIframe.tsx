import { Box } from '@mui/material';

interface YoutubeIframeProps {
  videoId: string;
}

const YoutubeIframe = ({ videoId }: YoutubeIframeProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        aspectRatio: '16/9',
        width: '100%',
        maxWidth: '800px',
        mx: 'auto',
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: '8px',
        }}
      />
    </Box>
  );
};

export default YoutubeIframe;
