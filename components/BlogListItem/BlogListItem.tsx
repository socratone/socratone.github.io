import { Chip, styled } from '@mui/material';
import Box from '@mui/material/Box';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import Stack from '@mui/material/Stack';
import type { TypographyTypeMap } from '@mui/material/Typography';
import Typography from '@mui/material/Typography';
import type { Dayjs } from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import profileImage from './images/profile-40x40.webp';

const CONTAINER_NAME = 'blog-list-item-container';

const StyledLink = styled(Link)`
  container: ${CONTAINER_NAME} / inline-size;
`;

const StyledContainerStack = styled(Stack)`
  cursor: pointer;
  transition: background 150ms ease-out, border 150ms ease-out,
    transform 150ms ease-out;

  :hover {
    transform: translate3d(0, -3px, 0);
  }

  @container ${CONTAINER_NAME} (max-width: 400px) {
    flex-direction: column;
  }
`;

const StyledThumbnailBox = styled(Box)`
  @container ${CONTAINER_NAME} (max-width: 400px) {
    justify-content: center;
  }
`;

const EllipsisTypography: OverridableComponent<TypographyTypeMap> = styled(
  Typography
)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EllipsisLineTypography = styled<
  OverridableComponent<TypographyTypeMap<{ line: number }>>
>(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({ line }) => line};
  -webkit-box-orient: vertical;
`;

type BlogListItemProps = {
  title: string;
  description: string;
  thumbnail: React.ReactNode;
  createdAt: Dayjs;
  href: string;
  tag: string;
};

const BlogListItem: React.FC<BlogListItemProps> = ({
  title,
  description,
  thumbnail,
  createdAt,
  href,
  tag,
}) => {
  return (
    <StyledLink href={href}>
      <StyledContainerStack
        direction="row"
        justifyContent="space-between"
        gap={2}
      >
        <Stack flexGrow={1} justifyContent="center" overflow="hidden" pr={1}>
          <Stack direction="row" alignItems="center" gap={0.5} mb={0.75}>
            <Image
              alt="profile"
              src={profileImage}
              width={20}
              height={20}
              style={{
                borderRadius: '50%',
              }}
            />
            <Typography variant="caption" fontWeight={600} color="text.primary">
              Kiwon Kim
            </Typography>
          </Stack>
          <EllipsisTypography
            component="h2"
            fontSize="1.25rem"
            color="text.primary"
            fontWeight={700}
            mb={0.25}
          >
            {title}
          </EllipsisTypography>
          <EllipsisLineTypography
            line={2}
            variant="body1"
            color="text.secondary"
            lineHeight="20px"
            mb={0.5}
          >
            {description}
          </EllipsisLineTypography>
          <Stack direction="row" alignItems="center" gap={1}>
            <Typography variant="caption" color="text.secondary">
              {createdAt.format('YYYY.MM.DD')}
            </Typography>
            <Chip label={tag} size="small" />
          </Stack>
        </Stack>
        <StyledThumbnailBox display="flex" alignItems="center">
          {thumbnail}
        </StyledThumbnailBox>
      </StyledContainerStack>
    </StyledLink>
  );
};

export default BlogListItem;
