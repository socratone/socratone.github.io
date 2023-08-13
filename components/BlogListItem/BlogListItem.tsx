import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BlogThumbnail } from 'constants/blog';
import Link from 'next/link';

import Thumbnail from './Thumbnail';

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
    <Link href={href}>
      <Stack direction="row" sx={{ cursor: 'pointer' }} gap={1}>
        <Box>
          <Thumbnail type={thumbnail} />
        </Box>
        <Stack>
          <Typography variant="mh2" color="text.primary">
            {title}
          </Typography>
          <Typography variant="mp" color="text.secondary">
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
};

export default BlogListItem;
