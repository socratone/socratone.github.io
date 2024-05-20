'use client';

import CreateIcon from '@mui/icons-material/Create';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NotionStyleHtmlContent from 'components/NotionStyleHtmlContent';
import { CAREERS, phone } from 'feature/resume/constants';
import DateRangeTypography from 'feature/resume/DateRangeTypography';
import type { Career } from 'feature/resume/types';
import WorkExperienceSection from 'feature/resume/WorkExperienceSection';
import Image from 'next/image';
import profileImage from 'public/images/resume/profile.webp';
import React from 'react';
import { convertMonthsToYearsAndMonths } from 'utils/date';

const Page = () => {
  const elice = CAREERS.find(career => career.company === 'elice') as Career;
  const gymt = CAREERS.find(career => career.company === 'gymt') as Career;
  const iportfolio = CAREERS.find(
    career => career.company === 'iportfolio'
  ) as Career;

  const totalCareerDuration = (() => {
    let result = 0;
    CAREERS.forEach(career => {
      const months = career.end.diff(career.start, 'month');
      result += months + 1;
    });
    return '총 ' + convertMonthsToYearsAndMonths(result);
  })();

  const companies = [
    {
      title: (
        <a href="https://elice.io" target="_blank">
          엘리스
        </a>
      ),
      description:
        '코딩 실습과 교육 콘텐츠를 제공하는 플랫폼\n프론트엔드 Landing 스쿼드 리드',
      start: elice.start,
      end: elice.end,
      experiences: [
        {
          title: 'LXP(Learning Experience Platform) 유저 대시보드',
          description:
            'B2C 서비스로 확장하기 위해 사용자가 수강한 과목 등 교육 정보를 한 눈에 보여줄 수 있는 대시보드 개발',
          list: [
            'Legacy API와 코드를 분석하여 새로운 대시보드 페이지로 비즈니스 로직 마이그레이션',
            'Tanstack Query의 Caching과 Intersection Observer를 활용하여 각 Section에서 과도하게 요청하는 API Request 성능 개선',
            'Schedule 뷰 구현 요구사항에 빠르게 대응하기 위해 react-big-calendar를 이용하여 Custom Style 캘린더 개발',
          ],
        },
        {
          title: 'LXP 통합검색',
          description:
            '사용자가 검색어를 입력하여 손쉽게 교육 자료에 접근할 수 있는 기능 개발',
          list: [
            '재사용 가능한 훅, 컴포넌트 설계로 잦은 요구사항 변경에 발빠르게 대처',
            'Tanstack Query를 이용한 Optimistic Update로 UX 개선',
            'Cursor를 이용한 Infinite 스크롤 구현',
          ],
        },
        {
          title: 'LXP 기관 출석부',
          description:
            '출석부를 생성하고 학생의 출석을 관리할 수 있는 Admin 개발',
          list: [
            'Filter와 Page의 Search Query를 State와 동기화하여 URL 입력만으로 필터링된 페이지에 바로 접근할 수 있도록 구현',
          ],
        },
        {
          title: (
            <a href="https://elice.io" target="_blank">
              Elice.io
            </a>
          ),
          description: 'Contentful과 Material UI를 이용하여 엘리스 포털 리뉴얼',
          list: [
            <>
              엘리스 홈{' '}
              <a href="https://elice.io" target="_blank">
                루트 페이지
              </a>{' '}
              개발
            </>,
            <>
              <a href="https://elice.io/contact" target="_blank">
                도입문의 페이지
              </a>{' '}
              개발
            </>,
            '제품 소개 페이지 Headless CMS 설계/개발 → 관리자 리소스만으로 페이지 업데이트 가능',
          ],
        },
        {
          title: (
            <a href="https://coderland.io" target="_blank">
              Coderland.io
            </a>
          ),
          description: (
            <>
              <a href="https://www.contentful.com" target="_blank">
                Contentful
              </a>
              을 이용하여 모든 페이지를 Headless CMS로 개발
            </>
          ),
          list: [
            'Page, Section, Component로 나눠 확장성 있는 Data Model 설계',
            'NextJS의 Cach All Segments([…slugs])와 Page 모델을 이용하여 모든 Path를 동적으로 생성',
            'NextJS의 ISR을 이용하여 별도의 배포 없이 Content 수정시 자동 반영되도록 개발',
            'Framer를 이용 스크롤 애니메이션 유틸 개발 → 전사 랜딩 페이지에 활용됨',
          ],
        },
        {
          title: (
            <a
              href="https://ai-eduhackathon.elice.io/courses/74917/info"
              target="_blank"
            >
              LXP 과목 소개 페이지 리뉴얼
            </a>
          ),
          description: '기존 Legacy 과목 소개 페이지의 v2 개발',
          list: [
            'Admin이 설정한 입력값에 따라 10가지 Type의 섹션을 생성/수정 가능하도록 개발',
            '파편화되어 있던 11개 Case의 과목 Enroll Action 로직 리팩토링, 정리',
          ],
        },
      ],
    },
    {
      title: '짐티',
      description:
        '개인 맞춤형 트레이닝 서비스와 공간을 제공하는 피트니스 서비스',
      start: gymt.start,
      end: gymt.end,
      experiences: [
        {
          title: (
            <a href="https://golf-admin.tlabstudio.com" target="_blank">
              Tlab Golf Admin
            </a>
          ),
          description:
            '티랩 골프 예약 서비스를 관리하는 어드민 Frontend 전담 개발',
          list: ['일정 CRUD 가능한 주간 달력 구현'],
        },
        {
          title: (
            <a
              href="https://play.google.com/store/apps/details?id=com.gymt.tlabstudio"
              target="_blank"
            >
              Tlab Golf 모바일 앱
            </a>
          ),
          description: '티랩 골프 사용자를 위한 모바일 앱 개발',
          list: [
            '팀원 주도 React Native, Expo 학습',
            <>
              <a href="https://thinkforthink.tistory.com/373" target="_blank">
                프로젝트 컨벤션 조율
              </a>
            </>,
          ],
        },
        {
          title: (
            <a href="https://tlabstudio.com" target="_blank">
              Tlab 홈페이지 리뉴얼
            </a>
          ),
          description: '티랩 서비스 소개를 위한 데스크톱 홈페이지 개발',
          list: [
            'NextJS를 이용하여 S3, CloudFront에 Static HTML 업로드',
            '별도의 라이브러리 없이 썸네일 슬라이드, 메뉴 버튼 등 애니메이션 구현',
          ],
        },
        {
          title: 'Boost Box',
          description:
            '공간 및 서비스 이용을 관리할 수 있는 운영 관리 솔루션 플랫폼',
          list: [
            <>
              <a href="https://thinkforthink.tistory.com/372" target="_blank">
                인증
              </a>
              , 회원가입, 초기 설정 프로세스 구현
            </>,
          ],
        },
      ],
    },
    {
      title: '아이포트폴리오',
      experiences: [
        {
          title: '리딩앤의 영어 전자책 웹 앱',
          description:
            '영어 발음을 녹음하고 발음 분석 엔진을 바탕으로 점수를 매겨주는 앱 유지보수',
          list: [
            <>
              <a href="https://thinkforthink.tistory.com/371" target="_blank">
                Callback 함수를 Promise로 전환하여 코드 가독성 향상
              </a>
            </>,
          ],
        },
      ],
      start: iportfolio.start,
      end: iportfolio.end,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <NotionStyleHtmlContent>
        <Box display="grid" gridTemplateColumns="250px 1fr">
          <Stack alignItems="center" gap={2}>
            <Box mb={2}>
              <Image
                alt="profile"
                src={phone ? './images/resume/profile.webp' : profileImage}
                width={180}
                height={180}
                style={{
                  borderRadius: '50%',
                }}
              />
            </Box>
            <Stack alignItems="center" gap={0.5}>
              <IconButton size="small" sx={{ backgroundColor: 'whitesmoke' }}>
                <PhoneIcon />
              </IconButton>
              <Typography variant="mp">{phone ? phone : '비공개'}</Typography>
            </Stack>
            <Stack alignItems="center" gap={0.5}>
              <IconButton size="small" sx={{ backgroundColor: 'whitesmoke' }}>
                <EmailIcon />
              </IconButton>
              <Typography variant="mp">gim2origin@gmail.com</Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="mh1">김기원</Typography>
            </Stack>
            <Typography fontWeight={500}>FRONTEND DEVELOPER</Typography>
            <Stack direction="row" gap={1}>
              <Stack direction="row" alignItems="center" gap={0.5}>
                <GitHubIcon />
                <Typography variant="mp">
                  <a href="https://github.com/socratone" target="_blank">
                    github.com/socratone
                  </a>
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <CreateIcon />
                <Typography variant="mp">
                  <a href="http://thinkforthink.tistory.com/" target="_blank">
                    thinkforthink.tistory.com
                  </a>
                </Typography>
              </Stack>
            </Stack>
            <Typography variant="mh3" fontWeight={600} mt={2}>
              PROFILE
            </Typography>
            <Typography variant="mp" sx={{ textAlign: 'justify' }}>
              아름다운 UI와 애니메이션 구현을 좋아합니다. 무엇보다도 가독성 있는
              코드를 우선시 합니다. 재사용 가능한 컴포넌트 구현에 능숙하고
              디자인 감각과 CSS에 대한 이해도가 높아 빠른 속도로 UI 개발이
              가능합니다. 어려운 문제로 회귀하지 않도록 깃허브(예제 코드)와
              블로그에 기록하고 정리하는 습관이 있습니다. 코딩이 취미이고 새로운
              기술 습득을 위해 Udemy 강의를 즐겨봅니다.
            </Typography>
            <Typography variant="mh3" fontWeight={600} mt={2}>
              SKILL
            </Typography>
            <Typography>
              Typescript, React, NextJS, Redux, Recoil, React-hook-form,
              React-query, Material UI, Emotion, NodeJS
            </Typography>
            <Typography fontWeight={600} mt={1}>
              사용해본 기술
            </Typography>
            <Typography>GraphQL, RxJS, React-native, Expo, MongoDB</Typography>
          </Stack>
        </Box>
      </NotionStyleHtmlContent>

      {/* divider */}
      <Box sx={{ py: 2 }} />

      <WorkExperienceSection
        title="WORK EXPERIENCE"
        totalCareerDuration={totalCareerDuration}
        companies={companies}
      />

      {/* divider */}
      <Box sx={{ py: 2 }} />

      <NotionStyleHtmlContent>
        <Typography variant="mh2" mb={1.5}>
          PORTFOLIO
        </Typography>

        <Typography
          variant="mh3"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Stack direction="row">
            <a href="https://staywith.kr" target="_blank">
              Staywith.kr
            </a>
            <IconButton
              href="https://github.com/socratone/stay-with"
              target="_blank"
              sx={{ my: -1 }}
            >
              <GitHubIcon />
            </IconButton>
          </Stack>
          <DateRangeTypography>2023</DateRangeTypography>
        </Typography>
        <Stack direction="row" alignItems="center" gap={0.5}>
          <p>가톨릭 묵상 기도 나눔 SNS</p>
        </Stack>

        <ul>
          <li>Material UI Color 토큰을 이용한 다크/라이트 모드 전환</li>
          <li>
            rem과 px을 구분, 반응형 UI → 글자 크기 조절시에도 자연스러운 UI로
            Accessibility 개선
          </li>
          <li>사용자가 모바일에서 쉽게 접근할 수 있도록 PWA 적용</li>
          <li>Mongodb와 Atlas를 이용하여 Database 설계/구축</li>
          <li>Kakao 로그인과 JWT Token을 이용한 로그인 구현</li>
        </ul>

        {/* divider */}
        <Box sx={{ py: 2 }} />

        <Typography variant="mh2">ETC</Typography>
        <ul>
          <li>
            애프터 이펙트를 이용한{' '}
            <a href="https://www.youtube.com/c/socratone" target="_blank">
              작곡 교육 유튜브 영상 제작 및 운영
            </a>{' '}
            → 구독자 2.5만명 이상 달성
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=v8EFh4Z3qsg"
              target="_blank"
            >
              러블리즈 류수정의 ‘사이는’ 편곡 참여
            </a>
          </li>
        </ul>
      </NotionStyleHtmlContent>
    </Container>
  );
};

export default Page;
