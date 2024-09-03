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

const udemyCourses: Course[] = [
  {
    title: 'GitLab CI/CD',
    enrollmentTime: '2024-08-26T15:53:16Z',
    thumbnail: 'https://img-b.udemycdn.com/course/240x135/2309602_ed2d_3.jpg',
  },
  {
    title: 'Java Spring',
    enrollmentTime: '2024-08-20T15:18:46Z',
    thumbnail: 'https://img-b.udemycdn.com/course/240x135/5193986_b926_3.jpg',
  },
  {
    title: 'Tailwind',
    enrollmentTime: '2024-07-03T13:09:36Z',
    thumbnail: 'https://img-b.udemycdn.com/course/240x135/4699780_b487_2.jpg',
  },
  {
    title: 'NestJS',
    enrollmentTime: '2024-06-17T15:15:52Z',
    thumbnail: 'https://img-b.udemycdn.com/course/240x135/4174580_dd1c.jpg',
  },
  {
    title: 'Data Structures',
    enrollmentTime: '2024-05-29T15:24:08Z',
    thumbnail: 'https://img-b.udemycdn.com/course/240x135/2165246_3286_6.jpg',
  },
  {
    title: 'Performance',
    enrollmentTime: '2024-05-14T03:12:51Z',
    thumbnail: 'https://img-b.udemycdn.com/course/240x135/5581394_9340_4.jpg',
  },
  {
    enrollmentTime: '2024-03-14T04:32:07Z',
    thumbnail: 'https://img-b.udemycdn.com/course/240x135/5162418_c4c5.jpg',
  },
  {
    title: 'SQL',
    enrollmentTime: '2023-11-21T15:13:30Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/1187016_51b3.jpg',
  },
  {
    title: 'LangChain',
    enrollmentTime: '2023-11-17T13:22:36Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/5399658_d5e0_3.jpg',
  },
  {
    title: 'Three.js',
    enrollmentTime: '2023-11-17T13:19:54Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/2796030_d9a1_2.jpg',
  },
  {
    enrollmentTime: '2023-10-18T16:14:07Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/5558682_5626.jpg',
  },
  {
    title: 'AWS',
    enrollmentTime: '2023-08-24T04:34:57Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4389576_a7d6_9.jpg',
  },
  {
    title: 'Hacking',
    enrollmentTime: '2023-08-15T12:01:54Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/5244170_67ac_4.jpg',
  },
  {
    enrollmentTime: '2023-07-03T15:25:06Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4475008_753d.jpg',
  },
  {
    title: 'Machine Learning',
    enrollmentTime: '2023-04-03T16:02:19Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg',
  },
  {
    enrollmentTime: '2023-02-19T23:39:15Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4482278_b6cc_4.jpg',
  },
  {
    title: 'Design Patterns',
    enrollmentTime: '2022-11-21T12:49:45Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/2251868_d99e_2.jpg',
  },
  {
    enrollmentTime: '2022-11-21T12:49:21Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/3387966_7b82_2.jpg',
  },
  {
    title: 'Architecture',
    enrollmentTime: '2022-11-21T10:36:06Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4542868_3581_4.jpg',
  },
  {
    title: 'Networks',
    enrollmentTime: '2022-09-20T14:09:46Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/580876_a07a_2.jpg',
  },
  {
    title: 'Git',
    enrollmentTime: '2022-08-30T16:27:58Z',
    thumbnail: 'https://img-b.udemycdn.com/course/240x135/4305109_35e6_3.jpg',
  },
  {
    title: 'Linux',
    enrollmentTime: '2022-08-29T11:29:10Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4490252_2de7_2.jpg',
  },
  {
    title: 'Regex',
    enrollmentTime: '2022-08-27T04:16:57Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4621354_fe7c_6.jpg',
  },
  {
    title: 'Docker',
    enrollmentTime: '2022-07-16T06:04:52Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4482288_58fb_3.jpg',
  },
  {
    title: 'GraphQL',
    enrollmentTime: '2022-06-14T14:55:47Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/1109926_7f97_2.jpg',
  },
  {
    enrollmentTime: '2022-05-17T01:29:31Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/535562_6390_3.jpg',
  },
  {
    title: 'Web Design',
    enrollmentTime: '2022-05-09T04:31:56Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/3227583_5e75_6.jpg',
  },
  {
    title: 'Kotlin',
    enrollmentTime: '2022-03-27T16:51:02Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4398694_beea_3.jpg',
  },
  {
    title: 'Python',
    enrollmentTime: '2022-03-27T15:21:03Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4367336_0573_7.jpg',
  },
  {
    enrollmentTime: '2022-01-30T04:52:53Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/1906852_93c6_2.jpg',
  },
  {
    title: 'Test',
    enrollmentTime: '2022-01-04T18:20:22Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/3780436_e8b4_6.jpg',
  },
  {
    enrollmentTime: '2021-12-20T12:32:51Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/1934362_ca3c.jpg',
  },
  {
    title: 'Data Structures',
    enrollmentTime: '2021-11-26T16:42:26Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4305113_68d5_4.jpg',
  },
  {
    title: 'Serverless Functions',
    enrollmentTime: '2021-11-26T11:18:04Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/3791660_372c_3.jpg',
  },
  {
    enrollmentTime: '2021-11-20T02:09:50Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/3873464_403c.jpg',
  },
  {
    enrollmentTime: '2021-11-18T23:39:39Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/4234852_7089_3.jpg',
  },
  {
    title: 'React Native',
    enrollmentTime: '2021-11-11T12:33:55Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/1436092_2024_4.jpg',
  },
  {
    title: 'React',
    enrollmentTime: '2021-11-08T00:05:35Z',
    thumbnail: 'https://img-b.udemycdn.com/course/240x135/4298905_17e3_2.jpg',
  },
  {
    title: 'SVG',
    enrollmentTime: '2021-07-06T12:36:20Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/3866984_c714.jpg',
  },
  {
    title: 'CSS Animation',
    enrollmentTime: '2021-07-06T11:49:25Z',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/1908196_f5b8_3.jpg',
  },
];

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

        <Stack direction="row" flexWrap="wrap" justifyContent="center">
          {udemyCourses.map(course => (
            <CourseItem
              key={course.thumbnail}
              title={course.title}
              imageSrc={course.thumbnail}
              enrollmentTime={course.enrollmentTime}
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
