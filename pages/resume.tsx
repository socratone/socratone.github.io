import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import NotionStyleHtmlContent from 'components/NotionStyleHtmlContent';
import Image from 'next/image';
import profileImage from 'public/images/resume/profile.jpg';

const Resume = () => {
  return (
    <Box>
      <NotionStyleHtmlContent>
        <Box mb={1}>
          <h1>정리하는 FE 개발자 김기원입니다 🤗</h1>
        </Box>
        <Stack direction="row" gap={2}>
          <Image
            alt="profile"
            src={profileImage}
            width={290}
            height={290}
            style={{
              borderRadius: '50%',
            }}
          />
          <Box flexGrow={1}>
            <ul>
              <li>아름다운 UI와 애니메이션 구현을 좋아합니다.</li>
              <li>무엇보다도 가독성 있는 코드를 우선시 합니다.</li>
              <li>
                CSS와 Material UI 이해도가 높아 빠른 속도로 컴포넌트
                개발/유지보수 가능합니다.
              </li>
              <li>
                어려운 문제로 회귀하지 않도록 깃허브(예제 코드)와 블로그에
                기록하고 정리하는 습관이 있습니다.
              </li>
              <li>코딩과 Udemy 개발 강의 보는 것이 취미입니다. </li>
            </ul>
            <p>
              🌱 깃허브 :{' '}
              <a href="https://github.com/socratone" target="_blank">
                github.com/socratone
              </a>
              <br />
              ✍️ 블로그 :{' '}
              <a href="http://thinkforthink.tistory.com/" target="_blank">
                thinkforthink.tistory.com
              </a>
              <br />
              📞 연락처 :
            </p>
          </Box>
        </Stack>
        <h2>경력</h2>
        <h3>엘리스 2022.6~</h3>
        <p>코딩 실습과 교육 콘텐츠를 제공하는 플랫폼</p>
      </NotionStyleHtmlContent>
    </Box>
  );
};

export default Resume;
