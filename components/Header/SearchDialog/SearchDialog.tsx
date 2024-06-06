import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import Fuse from 'fuse.js';
import { useState } from 'react';
import { useDebounce } from 'react-use';

import useBlogsMetadata from './hooks/useBlogsMetadata';
import SearchIcon from './SearchIcon';
import SearchResultList from './SearchResultList';

type SearchDialogProps = {
  open: boolean;
  onClose: () => void;
};

const SearchDialog: React.FC<SearchDialogProps> = ({ open, onClose }) => {
  const blogsMetadata = useBlogsMetadata(open);

  const initialResult = blogsMetadata?.slice(0, 5);

  const [searchValue, setSearchValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useDebounce(() => setDebouncedValue(searchValue), 250, [searchValue]);

  const fuseResult = (() => {
    if (debouncedValue.length === 0 || !blogsMetadata) return [];
    const fuse = new Fuse(blogsMetadata, {
      includeScore: true,
      /** 검색 대상 */
      keys: ['title'],
    });
    return fuse.search(debouncedValue);
  })();

  fuseResult.sort((a, b) => (a.score ?? 0) - (b.score ?? 0));

  const searchResult = fuseResult.map(({ item }) => item);

  const handleSearchValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(event.target.value);
  };

  const list = debouncedValue.length === 0 ? initialResult : searchResult;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      transitionDuration={0}
      PaperProps={{
        sx: {
          borderRadius: 3,
          border: theme => `1px solid ${theme.palette.divider}`,
          /** 모바일을 뷰포트를 위해 Dialog를 위쪽으로 이동 */
          mt: 11,
        },
        elevation: 1,
      }}
      sx={{
        /** 모바일을 뷰포트를 위해 Dialog를 위쪽으로 이동 */
        '.MuiDialog-container': {
          alignItems: 'flex-start',
        },
      }}
    >
      <DialogContent sx={{ padding: 0, minHeight: 265 }}>
        <InputBase
          inputRef={input => input && input.focus()}
          type="text"
          placeholder="검색..."
          value={searchValue}
          onChange={handleSearchValueChange}
          startAdornment={
            <Box
              display="flex"
              alignItems="center"
              color={theme => theme.palette.text.disabled}
              mr={0.5}
            >
              <SearchIcon />
            </Box>
          }
          fullWidth
          sx={{ height: 48, pl: 1.5 }}
        />
        <Divider />
        <SearchResultList
          enabled={open}
          searchValue={debouncedValue}
          searched={debouncedValue.length !== 0}
          items={list}
          onClose={onClose}
        />
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
