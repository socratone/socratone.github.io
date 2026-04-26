import { Box } from '@mui/material';

type CompanyDescriptionProps = {
  children: React.ReactNode;
};

const CompanyDescription = ({ children }: CompanyDescriptionProps) => {
  return (
    <Box
      component="span"
      sx={{ color: '#73716e', '& *': { color: 'inherit' } }}
    >
      {children}
    </Box>
  );
};

export default CompanyDescription;
