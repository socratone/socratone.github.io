import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

type SearchButtonProps = {
  onClick: () => void;
};

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <ButtonBase
      disableRipple
      onClick={onClick}
      sx={{
        bgcolor: theme => theme.palette.action.hover,
        borderRadius: 2,
        minHeight: 32,
        px: 1,
        display: 'flex',
        gap: 1,
      }}
    >
      <Typography color="text.secondary" variant="body2">
        검색
      </Typography>
      <Typography component="kbd" color="text.secondary" variant="body2">
        ⌘K
      </Typography>
    </ButtonBase>
  );
};

export default SearchButton;
