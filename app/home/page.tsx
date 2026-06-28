'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Page = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: 'calc(100vh - 96px)',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h1"
          color="text.primary"
          fontWeight={700}
          textAlign="center"
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            lineHeight: 1.35,
            wordBreak: 'keep-all',
          }}
        >
          네 고향과 친족과 아버지의 집을 떠나,
          <br />
          내가 너에게 보여 줄 땅으로 가거라.
        </Typography>
      </Container>
    </Box>
  );
};

export default Page;
