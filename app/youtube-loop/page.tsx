'use client';

import { FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { getYouTubeVideoId } from 'utils/youtube';

const STORAGE_KEY = 'youtube-video-url';

const Page = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const videoUrl = localStorage.getItem(STORAGE_KEY);
    if (typeof videoUrl === 'string') {
      setVideoUrl(videoUrl);
    }
  }, []);

  useEffect(() => {
    if (videoUrl) {
      try {
        const videoId = getYouTubeVideoId(videoUrl);
        setVideoId(videoId);
        setErrorMessage('');
        /** 사용자는 복사 붙여넣기를 하기 때문에 debounce 등이 필요하지 않다. */
        localStorage.setItem(STORAGE_KEY, videoUrl);
      } catch {
        setErrorMessage('올바른 URL을 넣어주세요.');
      }
    }
  }, [videoUrl]);

  return (
    <Stack gap={2}>
      <Box
        sx={{
          aspectRatio: '1920 / 1080',
        }}
      >
        {videoId ? (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            loop
            playing
            width="100%"
            height="100%"
            controls
          />
        ) : (
          <Box
            borderRadius={1}
            bgcolor={theme => theme.palette.grey[100]}
            height="100%"
          />
        )}
      </Box>
      <Box>
        <TextField
          placeholder="반복 재생해서 들을 유튜브 비디오 URL을 넣어주세요."
          value={videoUrl}
          onChange={event => setVideoUrl(event.target.value)}
          fullWidth
        />
        <FormHelperText>{errorMessage}</FormHelperText>
      </Box>
    </Stack>
  );
};

export default Page;
