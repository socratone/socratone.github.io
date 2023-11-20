import styled from '@emotion/styled';
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

const SECTION_COLOR = '#ffe2c1';

const UDEMY_COURSES: { thumbnail: string }[] = [
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/5399658_d5e0_3.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/2796030_d9a1_2.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/5558682_5626.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/4389576_a7d6_9.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/5244170_67ac_4.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/4475008_753d.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/950390_270f_3.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/4482278_b6cc_4.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/2251868_d99e_2.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/3387966_7b82_2.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/4542868_3581_4.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/580876_a07a_2.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/4490252_2de7_2.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/4621354_fe7c_6.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/4482288_58fb_3.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/1109926_7f97_2.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/535562_6390_3.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/3227583_5e75_6.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/4398694_beea_3.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/4367336_0573_7.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/1906852_93c6_2.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/3780436_e8b4_6.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/1934362_ca3c.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/4305113_68d5_4.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/3791660_372c_3.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/3873464_403c.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/4234852_7089_3.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/1436092_2024_4.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/3866984_c714.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/480x270/1908196_f5b8_3.jpg',
  },
];

const StyledSectionTriangleTopEdge = styled(Box)`
  clip-path: polygon(0 100%, 100% 0%, 100% 100%, 0% 100%);
  height: 30px;
`;

const StyledSectionTriangleBottomEdge = styled(Box)`
  clip-path: polygon(0 100%, 100% 0%, 0 0, 0% 100%);
  height: 30px;
`;

const Home = () => {
  return (
    <>
      {/* Main hero section */}
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
            quality={1}
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

      {/* Profile section */}

      <Container component="section" sx={{ py: 8 }}>
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

      {/* Studying section */}

      <StyledSectionTriangleTopEdge bgcolor={SECTION_COLOR} />
      <Box component="section" bgcolor={SECTION_COLOR} sx={{ py: 4 }}>
        <Typography
          component="h2"
          color="text.primary"
          fontSize="1.8rem"
          fontWeight={600}
          textAlign="center"
          mb={2}
          sx={{ wordBreak: 'keep-all' }}
        >
          📚 Studying
        </Typography>

        <Typography textAlign="center" color="text.secondary">
          Langchain
        </Typography>
        <Typography textAlign="center" color="text.secondary">
          Machine Learning
        </Typography>
        <Typography textAlign="center" color="text.secondary">
          Python
        </Typography>
      </Box>
      <StyledSectionTriangleBottomEdge bgcolor={SECTION_COLOR} />

      {/* Udemy section */}

      <Box component="section" sx={{ px: 3, py: 8 }}>
        <Typography
          component="h2"
          color="text.primary"
          fontSize="1.8rem"
          fontWeight={600}
          textAlign="center"
          mb={4}
          sx={{ wordBreak: 'keep-all' }}
        >
          🎓 Enrolled Udemy Course
        </Typography>

        <Stack direction="row" flexWrap="wrap" justifyContent="center">
          {UDEMY_COURSES.map((course) => (
            <Image
              key={course.thumbnail}
              src={course.thumbnail}
              alt="Udemy course"
              width={240}
              height={135}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Home;
