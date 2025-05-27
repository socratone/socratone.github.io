import type { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import type { ImageProps } from 'next/image';
import Image from 'next/image';


interface CourseItemProps {
  /** 코스 제목 */
  title?: string;
  /** 이미지 소스 */
  imageSrc: ImageProps['src'];
  /** 등록 시간 */
  enrollmentTime?: string;
  /** 배치 위치 */
  placement?: 'left-top' | 'right-top';
}

const darkBackground: SxProps = {
  '::before': {
    content: '""',
    display: 'block',
    width: '100%',
    height: '50%',
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0,0,0,0) 70%)',
    zIndex: 1,
    position: 'absolute',
  },
};


const CourseItem = ({
  title,
  imageSrc,
  placement = 'left-top',
  enrollmentTime,
}: CourseItemProps) => {
  const getPositions = () => {
    switch (placement) {
      case 'left-top':
        return {
          top: 4,
          left: 8,
        };

      case 'right-top':
        return {
          top: 4,
          right: 8,
        };
    }
  };

  const enrollmentText = enrollmentTime
    ? dayjs(enrollmentTime).format('YY.M') + '~'
    : '';

  const infoText = (() => {
    if (title && enrollmentText) return `${title} | ${enrollmentText}`;
    if (title) return title;
    if (enrollmentText) return enrollmentText;
    return null;
  })();

  return (
    <Box
      position="relative"
      width={240}
      height={135}
      sx={infoText ? darkBackground : undefined}
    >
      {infoText ? (
        <Typography
          {...getPositions()}
          position="absolute"
          fontSize={14}
          fontWeight={600}
          zIndex={2}
          color={theme => theme.palette.background.default}
          fontStyle="italic"
          sx={{
            opacity: 0.9,
          }}
        >
          {infoText}
        </Typography>
      ) : null}
      <Image src={imageSrc} alt={title ?? 'Udemy course'} fill />
    </Box>
  );
};

export default CourseItem;
