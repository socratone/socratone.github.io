import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

/**
 * YoutubePlayer 컴포넌트 속성 인터페이스
 * @interface YoutubePlayerProps
 * @property {string} videoId - 유튜브 비디오 ID
 * @property {boolean} [autoplay=false] - 자동 재생 여부
 * @property {boolean} [muted=false] - 음소거 여부
 * @property {boolean} [loop=false] - 반복 재생 여부
 * @property {string} [maxWidth='800px'] - 최대 너비
 */
interface YoutubePlayerProps {
  videoId: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  maxWidth?: string;
}

/**
 * ReactPlayer를 사용한 유튜브 플레이어 컴포넌트
 * 단순 재생 기능만 제공하는 경량화된 컴포넌트
 */
const YoutubePlayer = ({
  videoId,
  autoplay = false,
  muted = false,
  loop = false,
  maxWidth = '800px',
}: YoutubePlayerProps) => {
  // 브라우저 환경에서만 ReactPlayer를 렌더링하기 위한 상태
  const [hasWindow, setHasWindow] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);

  // 서버사이드 렌더링 시 hydration 에러 방지
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  // 유튜브 플레이어 옵션
  const youtubeOpts = {
    playerVars: {
      // 유튜브 플레이어 매개변수 설정
      rel: 0, // 관련 동영상 표시 안함
      modestbranding: 1, // 유튜브 로고 최소화
      playsinline: 1, // iOS에서 인라인 재생
      iv_load_policy: 3, // 주석 표시 안함
    },
  };

  return (
    <Box
      sx={{
        position: 'relative',
        aspectRatio: '16/9',
        width: '100%',
        maxWidth,
        mx: 'auto',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      {hasWindow && (
        <ReactPlayer
          ref={playerRef}
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width="100%"
          height="100%"
          controls
          playing={autoplay}
          muted={muted}
          loop={loop}
          playsinline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            borderRadius: '8px',
          }}
          config={{
            youtube: youtubeOpts,
          }}
        />
      )}
    </Box>
  );
};

export default YoutubePlayer;
