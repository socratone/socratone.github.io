'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

const udemyCourses: { thumbnail: string }[] = [
  {
    thumbnail: 'https://img-b.udemycdn.com/course/240x135/4174580_dd1c.jpg',
  },
  {
    thumbnail: 'https://img-b.udemycdn.com/course/240x135/2165246_3286_6.jpg',
  },
  {
    thumbnail: 'https://img-b.udemycdn.com/course/240x135/5581394_9340_4.jpg',
  },
  {
    thumbnail: 'https://img-b.udemycdn.com/course/240x135/5162418_c4c5.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/1187016_51b3.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/5399658_d5e0_3.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/2796030_d9a1_2.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/5558682_5626.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4389576_a7d6_9.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/5244170_67ac_4.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4475008_753d.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4482278_b6cc_4.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/2251868_d99e_2.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/3387966_7b82_2.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4542868_3581_4.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/580876_a07a_2.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4490252_2de7_2.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4621354_fe7c_6.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4482288_58fb_3.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/1109926_7f97_2.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/535562_6390_3.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/3227583_5e75_6.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4398694_beea_3.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4367336_0573_7.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/1906852_93c6_2.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/3780436_e8b4_6.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/1934362_ca3c.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4305113_68d5_4.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/3791660_372c_3.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/3873464_403c.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4234852_7089_3.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/1436092_2024_4.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/3866984_c714.jpg',
  },
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/1908196_f5b8_3.jpg',
  },
];

const moshCourses: { thumbnail: string }[] = [
  {
    thumbnail: '/images/home/mosh/sql.webp',
  },
  {
    thumbnail: '/images/home/mosh/html-css.webp',
  },
  {
    thumbnail: '/images/home/mosh/docker.webp',
  },
  {
    thumbnail: '/images/home/mosh/react-native.webp',
  },
  {
    thumbnail: '/images/home/mosh/nodejs.webp',
  },
  {
    thumbnail: '/images/home/mosh/redux.webp',
  },
  {
    thumbnail: '/images/home/mosh/react.webp',
  },
  {
    thumbnail: '/images/home/mosh/javascript-part-2.webp',
  },
  {
    thumbnail: '/images/home/mosh/javascript-part-1.webp',
  },
];

const HomePage = () => {
  return (
    <>
      {/* Profile section */}

      <Container component="section" sx={{ py: 8 }}>
        <Typography
          component="p"
          variant="h6"
          fontWeight={500}
          color={theme => theme.palette.primary.main}
          textAlign="center"
          mb={1}
        >
          안녕하세요,
        </Typography>
        <Typography
          component="h1"
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
          position="relative"
          maxWidth={230}
          mx="auto"
          sx={{
            aspectRatio: '1 / 1',
          }}
        >
          <Image
            alt="Kiwon Kim"
            src="https://avatars.githubusercontent.com/u/59814215"
            fill
            priority
          />
        </Box>
      </Container>

      {/* Udemy section */}

      <Box component="section" sx={{ px: 3, py: 8 }}>
        <Typography
          component="h2"
          color="text.primary"
          fontSize="1.8rem"
          fontWeight={600}
          textAlign="center"
          mb={2}
          sx={{ wordBreak: 'keep-all' }}
        >
          🎓 Enrolled Udemy Courses
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
            개발 덕후라서 취미 생활을 하듯 틈틈히 새로운 기술들을 익힙니다.
          </Typography>
          <Typography>
            Udemy 강의로 빠르게 익히고 부족한 부분은 공식 문서를 꼼꼼히 읽어
            학습하는 편입니다.
          </Typography>
          <Typography>
            새로운 기술을 배울 때마다 새로운 장난감이 생기는 기분이랄까요.
          </Typography>
        </Typography>

        <Stack direction="row" flexWrap="wrap" justifyContent="center">
          {udemyCourses.map(course => (
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

      {/* Mosh section */}

      <Box component="section" sx={{ px: 3, py: 8 }}>
        <Typography
          component="h2"
          color="text.primary"
          fontSize="1.8rem"
          fontWeight={600}
          textAlign="center"
          mb={2}
          sx={{ wordBreak: 'keep-all' }}
        >
          📚 Enrolled Mosh Courses
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
            처음 웹 개발을 배울 때 생활코딩과 더불어 Mosh님의 영상이 많은 도움을
            줬습니다.
          </Typography>
          <Typography>
            프로토타입 체이닝과 같은 어려운 개념들을 쉽게 가르쳐주셨던 게 기억에
            남습니다.
          </Typography>
        </Typography>

        <Stack
          component={Link}
          href="https://codewithmosh.com/courses"
          target="_blank"
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          {moshCourses.map(course => (
            <Image
              key={course.thumbnail}
              src={course.thumbnail}
              alt="Mosh course"
              width={240}
              height={135}
              style={{ objectFit: 'cover' }}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default HomePage;
