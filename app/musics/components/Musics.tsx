'use client';

import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-4px);
  }
`;

type MusicItem = {
  fileName: string;
  title: string;
  artist: string;
  videoId: string;
  tag: string;
  createdAt: string;
  startTime?: string;
  endTime?: string;
};

type MusicsProps = {
  musics: MusicItem[];
};

/**
 * 음악 목록을 그리드 형태로 표시하는 컴포넌트
 * @param musics - 음악 데이터 배열
 */
const Musics = ({ musics }: MusicsProps) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {musics.map(music => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={music.fileName}>
            <StyledLink href={`/musics/${music.fileName}`}>
              <Box
                sx={{
                  overflow: 'hidden',
                }}
              >
                {/* 유튜브 썸네일 표시 */}
                <Box
                  sx={{
                    position: 'relative',
                    aspectRatio: '16/9',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={`https://img.youtube.com/vi/${music.videoId}/mqdefault.jpg`}
                    alt={music.title}
                    style={{ objectFit: 'cover' }}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </Box>
                {/* 제목과 아티스트 정보 */}
                <Box sx={{ px: 1, py: 0.5 }}>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    noWrap
                    fontWeight="bold"
                  >
                    {music.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {music.artist}
                  </Typography>
                </Box>
              </Box>
            </StyledLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Musics;
