import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Socratone</title>
        <meta name="description" content="Socratone's Development Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack component="main">
        <Typography>반가워요 👋, Frontend Developer 김기원입니다!</Typography>
      </Stack>
    </>
  );
};

export default Home;
