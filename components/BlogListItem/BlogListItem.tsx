import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BlogThumbnail } from 'constants/blog';
import Link from 'next/link';

import Thumbnail from './Thumbnail';

const StyledStack = styled(Stack)`
  cursor: pointer;
  transition: background 150ms ease-out, border 150ms ease-out,
    transform 150ms ease-out;
  border-color: ${({ theme }) => theme.palette.divider};
  overflow: hidden;

  :hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: ${({ theme }) => theme.shadows[1]};
  }
`;

const EllipsisTypography = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

type BlogListItemProps = {
  title: string;
  description: string;
  thumbnail: BlogThumbnail;
  href: string;
};

const BlogListItem: React.FC<BlogListItemProps> = ({
  title,
  description,
  thumbnail,
  href,
}) => {
  return (
    <Box>
      <Link href={href}>
        <StyledStack direction="row" gap={2} border={1} borderRadius={1}>
          <Box>
            <Thumbnail type={thumbnail} />
          </Box>
          <Stack justifyContent="center" overflow="hidden" pr={1}>
            <EllipsisTypography
              variant="body1"
              color="text.primary"
              fontWeight={600}
            >
              {title}
            </EllipsisTypography>
            <EllipsisTypography variant="body1" color="text.secondary">
              {description}
            </EllipsisTypography>
          </Stack>
        </StyledStack>
      </Link>
    </Box>
  );
};

export default BlogListItem;
