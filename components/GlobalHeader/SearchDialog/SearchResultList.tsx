import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import useArrowKeyListener from './hooks/useArrowKeyListener';
import useEnterKeyListener from './hooks/useEnterKeyListener';
import type { BlogMetadata } from './types';

type SearchResultListProps = {
  enabled: boolean;
  searchValue: string;
  items?: BlogMetadata[];
  onClose: () => void;
  searched: boolean;
};

const SEARCH_RESULT_ITEM_CLASS = 'search-result-item';

const SearchResultList: React.FC<SearchResultListProps> = ({
  enabled,
  searchValue,
  items,
  onClose,
  searched,
}) => {
  const router = useRouter();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  useEffect(() => {
    const items = [
      ...document.querySelectorAll(`.${SEARCH_RESULT_ITEM_CLASS}`),
    ];
    if (items.length === 0) return;
    const firstItemId = items[0].id;
    setSelectedItemId(firstItemId);
  }, [searchValue]);

  const selectPreviousItem = useCallback(() => {
    const items = [
      ...document.querySelectorAll(`.${SEARCH_RESULT_ITEM_CLASS}`),
    ];

    if (items.length === 0) return;

    if (selectedItemId === null) {
      const firstItemId = items[0].id;
      setSelectedItemId(firstItemId);
      return;
    }

    const selectedItemIndex = items.findIndex(
      item => item.id === selectedItemId
    );

    if (selectedItemIndex === -1) {
      setSelectedItemId(null);
      return;
    }

    const previousItemIndex = selectedItemIndex - 1;
    if (previousItemIndex < 0) return;

    const previousItem = items[previousItemIndex].id;

    setSelectedItemId(previousItem);
  }, [selectedItemId]);

  const selectNextItem = useCallback(() => {
    const items = [
      ...document.querySelectorAll(`.${SEARCH_RESULT_ITEM_CLASS}`),
    ];

    if (items.length === 0) return;

    if (selectedItemId === null) {
      const firstItemId = items[0].id;
      setSelectedItemId(firstItemId);
      return;
    }

    const selectedItemIndex = items.findIndex(
      item => item.id === selectedItemId
    );

    if (selectedItemIndex === -1) {
      setSelectedItemId(null);
      return;
    }

    const nextItemIndex = selectedItemIndex + 1;
    if (nextItemIndex > items.length - 1) return;

    const nextItem = items[nextItemIndex].id;

    setSelectedItemId(nextItem);
  }, [selectedItemId]);

  /**
   * Key handler
   */

  const handleArrowKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        selectNextItem();
      } else {
        selectPreviousItem();
      }
    },
    [selectPreviousItem, selectNextItem]
  );

  const handleEnterKey = useCallback(() => {
    if (selectedItemId) {
      router.push(`/blogs/${selectedItemId}`);
      onClose();
    }
  }, [router, onClose, selectedItemId]);

  useArrowKeyListener(handleArrowKey, enabled);

  useEnterKeyListener(handleEnterKey, enabled);

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
      {items?.map(item => {
        const itemId = item.slug;

        return (
          <Link
            key={itemId}
            id={itemId}
            className={SEARCH_RESULT_ITEM_CLASS}
            href={`/blogs/${itemId}`}
            onClick={onClose}
          >
            <ListItem
              sx={{
                bgcolor: theme =>
                  itemId === selectedItemId
                    ? theme.palette.action.selected
                    : undefined,
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
        );
      })}
    </List>
  );
};

export default SearchResultList;
