import type { SxProps } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';


interface SearchButtonProps {
  /** 버튼 클릭 이벤트 핸들러 */
  onClick: () => void;
  /** 추가 스타일 속성 */
  sx?: SxProps;
}


const SearchButton = ({ onClick, sx }: SearchButtonProps) => {
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
        ...sx,
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
