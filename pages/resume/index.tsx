import GitHubIcon from '@mui/icons-material/GitHub';
import { TypographyProps } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NotionStyleHtmlContent from 'components/NotionStyleHtmlContent';
import Image from 'next/image';
import profileImage from 'public/images/resume/profile.webp';
import React from 'react';

/** resume-pdf script를 돌렸을 때에만 phone이 있다. */
const phone = process.env.NEXT_PUBLIC_PHONE;

const SkillImage: React.FC<{ skills: string[] }> = ({ skills }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={skills.join(', ')}
      src={`https://skillicons.dev/icons?i=${skills.join(',')}`}
      style={{ height: 24 }}
    />
  );
};

const StackHeading2: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Stack
      component="h2"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap={0.5}
    >
      {children}
    </Stack>
  );
};

const DateRangeTypography: React.FC<Pick<TypographyProps, 'children'>> = ({
  children,
}) => {
  return (
    <Typography component="span" variant="body1" color="text.secondary">
      {children}
    </Typography>
  );
};

const Resume = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Box mb={2}>
        <NotionStyleHtmlContent>
          <h1>
            FRONTEND 개발자 김기원입니다{' '}
            {/* puppeteer로 pdf 변환시 font-weight에 따라 이모지를 못 불러오는 이슈가 있다. */}
            <span style={{ fontWeight: 400 }}>🤗</span>
          </h1>
        </NotionStyleHtmlContent>
      </Box>
      <Stack direction="row" gap={3} flexWrap="wrap">
        <Image
          alt="profile"
          src={phone ? './images/resume/profile.webp' : profileImage}
          width={300}
          height={300}
          style={{
            borderRadius: '50%',
          }}
        />
        <Box flexGrow={1} flexBasis={400}>
          <NotionStyleHtmlContent>
            <Typography variant="h6" fontWeight={600}>
              PROFILE
            </Typography>
            <p style={{ textAlign: 'justify' }}>
              아름다운 UI와 애니메이션 구현을 좋아합니다. 무엇보다도 가독성 있는
              코드를 우선시 합니다. 재사용 가능한 컴포넌트 구현에 능숙하고
              디자인 감각과 CSS에 대한 이해도가 높아 빠른 속도로 UI 개발이
              가능합니다. 어려운 문제로 회귀하지 않도록 깃허브(예제 코드)와
              블로그에 기록하고 정리하는 습관이 있습니다. 코딩이 취미이고 새로운
              기술 습득을 위해 Udemy 강의를 즐겨봅니다.
            </p>
            <Typography variant="h6" fontWeight={600}>
              CONTACT
            </Typography>
            <ul>
              <li>
                📞 연락처 <span>{phone ? phone : '비공개'}</span>
              </li>
              <li>
                📮 이메일 <span>gim2origin@gmail.com</span>
              </li>
              <li>
                🌱 깃허브{' '}
                <a href="https://github.com/socratone" target="_blank">
                  github.com/socratone
                </a>
              </li>
              <li>
                ✍️ 블로그{' '}
                <a href="http://thinkforthink.tistory.com/" target="_blank">
                  thinkforthink.tistory.com
                </a>
              </li>
            </ul>
          </NotionStyleHtmlContent>
        </Box>
      </Stack>

      <Divider sx={{ my: 3 }} />

      <NotionStyleHtmlContent>
        <h1>
          <span style={{ fontWeight: 400 }}>💻</span> 경력
        </h1>

        <StackHeading2>
          <a href="https://elice.io" target="_blank">
            엘리스
          </a>
          <DateRangeTypography>2022.6 ~ 재직 중</DateRangeTypography>
        </StackHeading2>
        <p>코딩 실습과 교육 콘텐츠를 제공하는 플랫폼</p>
        <div>
          <SkillImage
            skills={['ts', 'react', 'nextjs', 'redux', 'materialui', 'emotion']}
          />
        </div>

        <h3>LXP(Learning Experience Platform) 유저 대시보드</h3>
        <p>
          B2C 서비스로 확장하기 위해 사용자가 수강한 과목 등 교육 정보를 한 눈에
          보여줄 수 있는 대시보드 개발
        </p>
        <ul>
          <li>
            Legacy API와 코드를 분석하여 새로운 대시보드 페이지로 비즈니스 로직
            마이그레이션
          </li>
          <li>
            Tanstack Query의 Caching과 Intersection Observer를 활용하여 각
            Section에서 과도하게 요청하는 API Request 성능 개선
          </li>
          <li>
            Schedule 뷰 구현 요구사항에 빠르게 대응하기 위해
            react-big-calendar를 이용하여 Custom Style 캘린더 개발
          </li>
        </ul>

        <h3>LXP 통합검색</h3>
        <p>
          사용자가 검색어를 입력하여 손쉽게 교육 자료에 접근할 수 있는 기능 개발
        </p>
        <ul>
          <li>
            재사용 가능한 훅, 컴포넌트 설계로 잦은 요구사항 변경에 발빠르게 대처
          </li>
          <li>Tanstack Query를 이용한 Optimistic Update로 UX 개선</li>
          <li>Cursor를 이용한 Infinite 스크롤 구현</li>
        </ul>

        <h3>LXP 기관 출석부</h3>
        <p>출석부를 생성하고 학생의 출석을 관리할 수 있는 Admin 개발</p>
        <ul>
          <li>
            Filter와 Page의 Search Query를 State와 동기화하여 URL 입력만으로
            필터링된 페이지에 바로 접근할 수 있도록 구현
          </li>
        </ul>

        <h3>
          <a href="https://elice.io" target="_blank">
            Elice.io
          </a>
        </h3>
        <p>Contentful과 Material UI를 이용하여 엘리스 포털 리뉴얼</p>
        <ul>
          <li>
            엘리스 홈{' '}
            <a href="https://elice.io" target="_blank">
              루트 페이지
            </a>{' '}
            개발
          </li>
          <li>
            <a href="https://elice.io/contact" target="_blank">
              도입문의 페이지
            </a>{' '}
            개발
          </li>
          <li>
            제품 소개 페이지 CMS 설계/개발 → 관리자 리소스만으로 페이지 업데이트
            가능
          </li>
        </ul>

        <h3>
          <a href="https://coderland.io" target="_blank">
            Coderland.io
          </a>
        </h3>
        <p>
          <a href="https://www.contentful.com" target="_blank">
            Contentful
          </a>
          을 이용하여 모든 페이지를 CMS로 개발
        </p>
        <ul>
          <li>Page, Section, Component로 나눠 확장성 있는 Data Model 설계</li>
          <li>
            NextJS의 Cach All Segments([…slugs])와 Page 모델을 이용하여 모든
            Path를 동적으로 생성
          </li>
          <li>
            NextJS의 ISR을 이용하여 별도의 배포 없이 Content 수정시 자동
            반영되도록 개발
          </li>
          <li>
            Framer를 이용 스크롤 애니메이션 유틸 개발 → 전사 랜딩 페이지에
            활용됨
          </li>
        </ul>

        <h3>
          <a
            href="https://ai-eduhackathon.elice.io/courses/74917/info"
            target="_blank"
          >
            LXP 과목 소개 페이지 리뉴얼
          </a>
        </h3>
        <p>기존 Legacy 과목 소개 페이지의 v2 개발</p>
        <ul>
          <li>
            Admin이 CMS로 설정한 데이터 설정에 따라 10가지 Type의 섹션을
            생성/수정 가능하도록 개발
          </li>
          <li>
            파편화되어 있던 11개 Case의 과목 Enroll Action 로직 리팩토링, 정리
          </li>
        </ul>

        <Divider sx={{ mt: 3 }} />

        <StackHeading2>
          짐티 <DateRangeTypography>2021.3 ~ 2022.5</DateRangeTypography>
        </StackHeading2>
        <p>개인 맞춤형 트레이닝 서비스와 공간을 제공하는 피트니스 서비스</p>
        <div>
          <SkillImage
            skills={[
              'ts',
              'react',
              'nextjs',
              'redux',
              'materialui',
              'styledcomponents',
              'aws',
            ]}
          />
        </div>

        <h3>
          <a href="https://golf-admin.tlabstudio.com" target="_blank">
            Tlab Golf Admin
          </a>
        </h3>
        <p>티랩 골프 예약 서비스를 관리하는 어드민 Frontend 전담 개발</p>
        <ul>
          <li>일정 CRUD 가능한 주간 달력 구현</li>
        </ul>

        <h3>
          <a
            href="https://play.google.com/store/apps/details?id=com.gymt.tlabstudio"
            target="_blank"
          >
            Tlab Golf 모바일 앱
          </a>
        </h3>
        <p>티랩 골프 사용자를 위한 모바일 앱 개발</p>
        <ul>
          <li>팀원 주도 React Native, Expo 학습</li>
          <li>
            <a href="https://thinkforthink.tistory.com/373" target="_blank">
              프로젝트 컨벤션 조율
            </a>
          </li>
        </ul>

        <h3>
          <a href="https://tlabstudio.com" target="_blank">
            Tlab 홈페이지 리뉴얼
          </a>
        </h3>
        <p>티랩 서비스 소개를 위한 데스크톱 홈페이지 개발</p>
        <ul>
          <li>NextJS를 이용하여 S3, CloudFront에 Static HTML 업로드</li>
          <li>
            별도의 라이브러리 없이 썸네일 슬라이드, 메뉴 버튼 등 애니메이션 구현
          </li>
        </ul>

        <h3>Boost Box</h3>
        <p>공간 및 서비스 이용을 관리할 수 있는 운영 관리 솔루션 플랫폼</p>
        <ul>
          <li>
            <a href="https://thinkforthink.tistory.com/372" target="_blank">
              인증
            </a>
            , 회원가입, 초기 설정 프로세스 구현
          </li>
        </ul>

        <Divider sx={{ mt: 3 }} />

        <StackHeading2>
          <a href="https://iportfolio.co.kr" target="_blank">
            아이포트폴리오
          </a>
          <DateRangeTypography>2020.9 ~ 11</DateRangeTypography>
        </StackHeading2>

        <h3>리딩앤의 영어 전자책 웹 앱</h3>
        <p>
          영어 발음을 녹음하고 발음 분석 엔진을 바탕으로 점수를 매겨주는 앱
          유지보수
        </p>
        <div>
          <SkillImage skills={['js', 'jquery', 'php']} />
        </div>

        <ul>
          <li>
            <a href="https://thinkforthink.tistory.com/371" target="_blank">
              Callback 함수를 Promise로 전환하여 코드 가독성 향상
            </a>
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <h1>
          <span style={{ fontWeight: 400 }}>🧸</span> 포트폴리오
        </h1>

        <StackHeading2>
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
        </StackHeading2>
        <Stack direction="row" alignItems="center" gap={0.5}>
          <p>가톨릭 묵상 기도 나눔 SNS</p>
        </Stack>
        <div>
          <SkillImage
            skills={[
              'ts',
              'nextjs',
              'redux',
              'materialui',
              'nodejs',
              'mongodb',
            ]}
          />
        </div>

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

        <Divider sx={{ my: 3 }} />

        <h1>
          <span style={{ fontWeight: 400 }}>⚒️</span> 기술
        </h1>

        <h2>주요 기술</h2>
        <p>
          Typescript, React, NextJS, Redux, Recoil, React-hook-form,
          React-query, Material UI, Emotion, NodeJS
        </p>

        <h2>사용해본 기술</h2>
        <p>GraphQL, RxJS, React-native, Expo, MongoDB</p>

        <Divider sx={{ my: 3 }} />

        <h1>
          <span style={{ fontWeight: 400 }}>📷</span> 기타 역량
        </h1>
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

export default Resume;
