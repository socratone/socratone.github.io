import Typography from '@mui/material/Typography';

type DateRangeTypographyProps = {
  children: React.ReactNode;
};

const DateRangeTypography: React.FC<DateRangeTypographyProps> = ({
  children,
}) => {
  return (
    <Typography component="span" variant="body1" color="text.secondary">
      {children}
    </Typography>
  );
};

export default DateRangeTypography;
