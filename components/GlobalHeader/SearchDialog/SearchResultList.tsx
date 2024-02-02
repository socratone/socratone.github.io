import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import type { BlogMetadata } from './types';

type SearchResultListProps = {
  searchValue: string;
  items?: BlogMetadata[];
  onClose: () => void;
  searched: boolean;
};

const SearchResultList: React.FC<SearchResultListProps> = ({
  searchValue,
  items,
  onClose,
  searched,
}) => {
  if (searched && (!items || items.length === 0)) {
    return (
      <Box p={1}>
        <Typography p={1}>
          &quot;{searchValue}&quot; 검색 결과가 없습니다.
        </Typography>
      </Box>
    );
  }

  return (
    <List sx={{ p: 1 }}>
      {items?.map(item => (
        <Link key={item.slug} href={`/blogs/${item.slug}`} onClick={onClose}>
          <ListItem
            sx={{
              p: 1,
              borderRadius: 2,
              ':hover': {
                bgcolor: theme => theme.palette.action.hover,
              },
            }}
          >
            <Typography>{item.title}</Typography>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default SearchResultList;
