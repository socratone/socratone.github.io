import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { HOME_DESCRIPTION, HOME_IMAGES, HOME_TITLE } from 'constants/seo';
import { BASE_URL } from 'constants/url';
import type { Metadata } from 'next';
import Image from 'next/image';

const udemyCourses: { thumbnail: string }[] = [
  {
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/1187016_51b3.jpg',
  },
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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    openGraph: {
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      type: 'website',
      siteName: 'Socratone',
      images: HOME_IMAGES,
    },
    alternates: {
      canonical: BASE_URL,
    },
  };
}

const Page = () => {
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
            alt="Socratone"
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
          mb={4}
          sx={{ wordBreak: 'keep-all' }}
        >
          🎓 Enrolled Udemy Course
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
    </>
  );
};

export default Page;
