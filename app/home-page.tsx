'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CourseItem from 'components/CourseItem';
import Image from 'next/image';
import Link from 'next/link';

type Course = {
  title?: string;
  enrollmentTime?: string;
  thumbnail: string;
};

const moshCourses: Course[] = [
  {
    title: 'SQL',
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
          🎓 Udemy Courses
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
            개발 덕후라서 취미 생활을 하듯 틈틈히 새로운 기술들을 공부합니다.
          </Typography>
          <Typography>
            Udemy 강의로 빠르게 익히고 부족한 부분은 공식 문서를 꼼꼼히 읽어
            학습하는 편입니다.
          </Typography>
          <Typography>
            새로운 기술을 배울 때마다 새로운 장난감이 생기는 기분이랄까요.
          </Typography>
        </Typography>
        <Stack direction="row" justifyContent="center">
          <Box
            maxWidth={400}
            width="100%"
            position="relative"
            sx={{
              aspectRatio: '635 / 604',
            }}
          >
            <Image
              alt="Dream"
              src="/images/home/udemy/llm.webp"
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
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
            <CourseItem
              key={course.thumbnail}
              title={course.title}
              imageSrc={course.thumbnail}
            />
          ))}
        </Stack>
      </Box>

      {/* Dream section */}

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
          ⭐️ Dream
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
            제가 배운 기술들이 어떻게 쓰일지 모르니 지금에 최선을 다하려고
            합니다.
          </Typography>
        </Typography>
        <Stack direction="row" justifyContent="center">
          <Box
            maxWidth={400}
            width="100%"
            position="relative"
            sx={{
              aspectRatio: '400 / 279',
            }}
          >
            <Image
              alt="Dream"
              src="/images/home/dream/house-with-balloon.webp"
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default HomePage;
