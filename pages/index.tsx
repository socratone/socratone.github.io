import SouthIcon from '@mui/icons-material/South';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GlobalHeader from 'components/GlobalHeader';
import { motion } from 'framer-motion';
import Image from 'next/image';
import florenceImage from 'public/images/home/florence.webp';
import profileImage from 'public/images/resume/profile.webp';

const Home = () => {
  return (
    <>
      {/* main hero section */}

      <Box
        component={motion.main}
        height="100vh"
        position="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        overflow="hidden"
      >
        <Box>
          <GlobalHeader items={[{ label: 'Blogs', href: '/blogs' }]} />
        </Box>
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          component={motion.div}
          animate={{
            scale: [1, 1.05],
          }}
          transition={{
            repeatType: 'reverse',
            duration: 5,
            ease: 'easeInOut',
            times: [0, 1],
            repeat: Infinity,
          }}
        >
          <Image
            alt="florence"
            src={florenceImage}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Stack
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          gap={0.5}
          px={2}
        >
          <Typography
            component="h1"
            variant="h3"
            color={(theme) => theme.palette.common.white}
            textAlign="center"
            textTransform="uppercase"
          >
            Frontend Developer
          </Typography>
          <Typography
            component="p"
            variant="h5"
            color={(theme) => theme.palette.common.white}
            textAlign="center"
          >
            Socratone
          </Typography>
        </Stack>
        <Box
          sx={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <SouthIcon
            component={motion.svg}
            animate={{
              translateY: [0, 8],
            }}
            transition={{
              repeatType: 'reverse',
              duration: 0.8,
              ease: 'easeInOut',
              times: [0, 1],
              repeat: Infinity,
            }}
            sx={{
              color: (theme) => theme.palette.common.white,
            }}
          />
        </Box>
      </Box>

      {/* profile section */}

      <Box component="section">
        <Container sx={{ py: 8 }}>
          <Typography
            variant="h6"
            fontWeight={500}
            color={(theme) => theme.palette.primary.main}
            textAlign="center"
            mb={1}
          >
            안녕하세요,
          </Typography>
          <Typography
            component="h2"
            color="text.primary"
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mb={4}
            sx={{ wordBreak: 'keep-all' }}
          >
            FRONTEND 개발자 김기원이라고 합니다.
          </Typography>
          <Typography
            component="div"
            variant="body1"
            color="text.secondary"
            textAlign="center"
            mb={4}
            lineHeight={1.8}
            sx={{ textWrap: 'balance' }}
          >
            <Typography>
              저는 어떻게 사는 게 올바른 일인지 궁금해 하고 인문학에 관심이
              많습니다.
            </Typography>
            <Typography>
              제가 만든 앱이 사람들에게 도움이 되길 바라는 마음으로 하루하루를
              노력하며 지냅니다.
            </Typography>
            <Typography>
              이 공간 또한 누군가에게 작은 보탬이라도 될 수 있으면 좋겠습니다.
            </Typography>
          </Typography>
          <Box
            component={motion.div}
            position="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            maxWidth={300}
            mx="auto"
            sx={{
              aspectRatio: '1 / 1',
            }}
          >
            <Image alt="profile" src={profileImage} fill />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
